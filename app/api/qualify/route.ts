import { NextResponse } from "next/server";

function getScore(enquiry: string) {
  const text = enquiry.toLowerCase();

  let score = 45;

  // Strong buying signals
  if (
    text.includes("buy") ||
    text.includes("purchase") ||
    text.includes("looking for") ||
    text.includes("need")
  ) {
    score += 15;
  }

  // Budget signals
  if (
    text.includes("lakh") ||
    text.includes("lac") ||
    text.includes("crore") ||
    text.includes("budget")
  ) {
    score += 10;
  }

  // Location/property details
  if (
    text.includes("jaipur") ||
    text.includes("delhi") ||
    text.includes("mumbai") ||
    text.includes("bangalore") ||
    text.includes("gurgaon")
  ) {
    score += 8;
  }

  // Urgency
  if (
    text.includes("immediately") ||
    text.includes("urgent") ||
    text.includes("this month") ||
    text.includes("next month") ||
    text.includes("within 1 month") ||
    text.includes("within a month")
  ) {
    score += 15;
  }

  return Math.min(score, 100);
}

function getTimeline(enquiry: string) {
  const text = enquiry.toLowerCase();

  if (
    text.includes("immediately") ||
    text.includes("urgent") ||
    text.includes("this month") ||
    text.includes("within 1 month") ||
    text.includes("within a month")
  ) {
    return "0–1 month";
  }

  if (
    text.includes("next month") ||
    text.includes("2 months") ||
    text.includes("two months")
  ) {
    return "1–2 months";
  }

  if (
    text.includes("3 months") ||
    text.includes("three months") ||
    text.includes("later")
  ) {
    return "2–3 months";
  }

  return "Not specified";
}

function getIntent(score: number) {
  if (score >= 75) return "HIGH INTENT";
  if (score >= 55) return "MEDIUM INTENT";
  return "LOW INTENT";
}

function extractRequirement(enquiry: string) {
  const text = enquiry.trim();

  const bhkMatch = text.match(
    /(\d+)\s*(bhk|bedroom|bedrooms)/i
  );

  const budgetMatch = text.match(
    /(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(lakh|lac|crore|cr)/i
  );

  const locations = [
    "Jaipur",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Gurgaon",
    "Pune",
    "Noida",
    "Chandigarh",
    "Kolkata",
    "Ahmedabad",
  ];

  const location = locations.find((city) =>
    text.toLowerCase().includes(city.toLowerCase())
  );

  const parts = [];

  if (bhkMatch) {
    parts.push(`${bhkMatch[1]}BHK`);
  }

  if (location) {
    parts.push(location);
  }

  if (budgetMatch) {
    parts.push(`₹${budgetMatch[1]}${budgetMatch[2].toUpperCase()}`);
  }

  if (parts.length === 0) {
    return "Requirement details detected";
  }

  return parts.join(" · ");
}

export async function POST(req: Request) {
  try {
    const { enquiry } = await req.json();

    if (!enquiry) {
      return NextResponse.json(
        { error: "Enquiry text is required" },
        { status: 400 }
      );
    }

    const score = getScore(enquiry);
    const timeline = getTimeline(enquiry);
    const intent = getIntent(score);
    const requirement = extractRequirement(enquiry);

    let recommendedAction =
      "Follow up with the lead and gather more information about their property requirements.";

    if (intent === "HIGH INTENT") {
      recommendedAction =
        "Contact this lead immediately and offer relevant properties matching their location, budget, and requirements.";
    } else if (intent === "MEDIUM INTENT") {
      recommendedAction =
        "Follow up soon, confirm the budget and timeline, and share suitable property options.";
    }

    return NextResponse.json({
      requirement,
      timeline,
      lead_score: score,
      intent,
      recommended_action: recommendedAction,
    });
  } catch (error) {
    console.error("Lead qualification error:", error);

    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
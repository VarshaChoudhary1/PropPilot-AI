"use client";

import { useState } from "react";

type LeadAnalysis = {
  requirement: string;
  timeline: string;
  lead_score: number;
  intent: "HIGH INTENT" | "MEDIUM INTENT" | "LOW INTENT";
  recommended_action: string;
};

export default function LeadDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [analysis, setAnalysis] = useState<LeadAnalysis | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const enquiry = formData.get("enquiry")?.toString().trim() || "";
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";

    if (!enquiry || !name || !phone) {
      setError("Please complete all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/qualify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiry,
          name,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze lead");
      }

      setAnalysis(data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to analyze this lead right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetDemo() {
    setSubmitted(false);
    setAnalysis(null);
    setError("");
  }

  function getScoreLabel(score: number) {
    if (score >= 80) return "Strong opportunity";
    if (score >= 60) return "Worth following up";
    return "Needs nurturing";
  }

  function getScoreWidth(score: number) {
    return `${Math.min(Math.max(score, 0), 100)}%`;
  }

  return (
    <section className="border-t border-[#d1cec6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5d1c8] bg-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#77736b]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Live AI Demo
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            See how AAA
            <br />
            <span className="text-[#77736b]">
              qualifies a lead.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6b675f]">
            Enter a property enquiry and let PropPilot understand the
            requirement, buying timeline and intent — then recommend
            what your sales team should do next.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#d8d4cc] bg-white p-4">
              <p className="text-lg font-semibold">01</p>
              <p className="mt-1 text-xs text-[#77736b]">
                Capture
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8d4cc] bg-white p-4">
              <p className="text-lg font-semibold">02</p>
              <p className="mt-1 text-xs text-[#77736b]">
                Analyze
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8d4cc] bg-white p-4">
              <p className="text-lg font-semibold">03</p>
              <p className="mt-1 text-xs text-[#77736b]">
                Prioritize
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-2xl sm:p-8">

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#77736b]">
                    PropPilot AI
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    New lead analysis
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#30302e] px-3 py-2 text-[9px] uppercase tracking-wider text-[#77736b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  AI Online
                </div>
              </div>

              {/* ENQUIRY */}
              <div className="pt-3">
                <label className="text-sm text-[#aaa69e]">
                  Property requirement
                </label>

                <textarea
                  name="enquiry"
                  required
                  placeholder="Example: Looking for a 3BHK in Jaipur under ₹80 lakh. Need possession within 3 months..."
                  className="mt-2 min-h-36 w-full resize-none rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm leading-6 outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>

              {/* CONTACT */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-[#77736b]">
                    Name
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Rahul Sharma"
                    className="mt-2 w-full rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#77736b]">
                    WhatsApp
                  </label>

                  <input
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                  />
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-2xl border border-red-900/50 bg-red-950/30 p-4 text-sm leading-6 text-red-300">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    AI is analyzing...
                  </span>
                ) : (
                  "Analyze Lead →"
                )}
              </button>

              <p className="text-center text-[10px] text-[#66635d]">
                Demo data is analyzed by PropPilot AI.
              </p>
            </form>
          ) : (
            <div>

              {analysis && (
                <>
                  {/* RESULT HEADER */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#77736b]">
                        PropPilot AI
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                        Lead qualified
                      </h3>
                    </div>

                    <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-black">
                      {analysis.intent}
                    </span>
                  </div>

                  {/* SCORE */}
                  <div className="mt-8 rounded-2xl bg-[#1b1b1a] p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#77736b]">
                          Lead score
                        </p>

                        <p className="mt-2 text-5xl font-semibold tracking-[-0.05em]">
                          {analysis.lead_score}
                          <span className="text-xl text-[#77736b]">
                            /100
                          </span>
                        </p>
                      </div>

                      <p className="pb-1 text-right text-xs text-[#aaa69e]">
                        {getScoreLabel(analysis.lead_score)}
                      </p>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#30302e]">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000"
                        style={{
                          width: getScoreWidth(
                            analysis.lead_score
                          ),
                        }}
                      />
                    </div>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="mt-4 rounded-2xl bg-[#1b1b1a] p-5">
                    <p className="text-xs uppercase tracking-wider text-[#77736b]">
                      Requirement
                    </p>

                    <p className="mt-2 text-lg leading-7">
                      {analysis.requirement}
                    </p>
                  </div>

                  {/* TIMELINE */}
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#1b1b1a] p-5">
                      <p className="text-xs text-[#77736b]">
                        Buying timeline
                      </p>

                      <p className="mt-2 font-medium">
                        {analysis.timeline}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#1b1b1a] p-5">
                      <p className="text-xs text-[#77736b]">
                        Priority
                      </p>

                      <p className="mt-2 font-medium">
                        {analysis.intent === "HIGH INTENT"
                          ? "Immediate"
                          : analysis.intent === "MEDIUM INTENT"
                            ? "Follow up"
                            : "Nurture"}
                      </p>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="mt-4 rounded-2xl border border-[#3b3a37] bg-[#151514] p-5">
                    <p className="text-xs uppercase tracking-wider text-[#77736b]">
                      Recommended next action
                    </p>

                    <p className="mt-3 leading-7 text-white">
                      {analysis.recommended_action}
                    </p>
                  </div>
                </>
              )}

              <button
                type="button"
                onClick={resetDemo}
                className="mt-6 text-sm text-[#aaa69e] underline underline-offset-4 transition-colors hover:text-white"
              >
                ← Analyze another enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
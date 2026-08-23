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
    const enquiry = formData.get("enquiry")?.toString() || "";

    try {
      const response = await fetch("/api/qualify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enquiry }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze lead");
      }

      setAnalysis(data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Unable to analyze this lead. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function resetDemo() {
    setSubmitted(false);
    setAnalysis(null);
    setError("");
  }

  return (
    <section className="border-t border-[#d1cec6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#77736b]">
            Live Demo
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            See how AAA
            <br />
            qualifies a lead.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6b675f]">
            Enter a sample property enquiry and see how our automation
            identifies the most important information for an agent.
          </p>
        </div>

        <div className="rounded-3xl bg-[#111111] p-6 text-white shadow-2xl sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-[#aaa69e]">
                  Property requirement
                </label>

                <textarea
                  name="enquiry"
                  required
                  placeholder="Example: Looking for a 3BHK in Jaipur under ₹80 lakh..."
                  className="mt-2 min-h-32 w-full rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />

                <input
                  name="phone"
                  required
                  placeholder="Phone / WhatsApp"
                  className="rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>

              {error && (
                <p className="rounded-2xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Analyzing Lead..." : "Analyze Lead →"}
              </button>
            </form>
          ) : (
            <div>
              {analysis && (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-[#aaa69e]">
                      AAA Lead Analysis
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                      {analysis.intent}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl bg-[#1b1b1a] p-5">
                      <p className="text-xs uppercase tracking-wider text-[#77736b]">
                        Requirement
                      </p>

                      <p className="mt-2 text-lg">
                        {analysis.requirement}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#1b1b1a] p-5">
                        <p className="text-xs text-[#77736b]">Timeline</p>

                        <p className="mt-2">{analysis.timeline}</p>
                      </div>

                      <div className="rounded-2xl bg-[#1b1b1a] p-5">
                        <p className="text-xs text-[#77736b]">Lead Score</p>

                        <p className="mt-2">
                          {analysis.lead_score} / 100
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#3b3a37] p-5">
                      <p className="text-xs uppercase tracking-wider text-[#77736b]">
                        Recommended action
                      </p>

                      <p className="mt-2 leading-7">
                        {analysis.recommended_action}
                      </p>
                    </div>
                  </div>
                </>
              )}

              <button
                onClick={resetDemo}
                className="mt-6 text-sm text-[#aaa69e] underline underline-offset-4"
              >
                Try another enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
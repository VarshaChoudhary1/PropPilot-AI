"use client";

import { useState } from "react";

export default function LeadDemo() {
  const [submitted, setSubmitted] = useState(false);

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label className="text-sm text-[#aaa69e]">
                  Property requirement
                </label>

                <textarea
                  required
                  placeholder="Example: Looking for a 3BHK in Jaipur under ₹80 lakh..."
                  className="mt-2 min-h-32 w-full rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Name"
                  className="rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />

                <input
                  required
                  placeholder="Phone / WhatsApp"
                  className="rounded-2xl border border-[#3b3a37] bg-[#1b1b1a] p-4 text-sm outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Analyze Lead →
              </button>
            </form>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#aaa69e]">
                  AAA Lead Analysis
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                  HIGH INTENT
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-[#1b1b1a] p-5">
                  <p className="text-xs uppercase tracking-wider text-[#77736b]">
                    Requirement
                  </p>

                  <p className="mt-2 text-lg">
                    3BHK · Jaipur · ₹80L
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#1b1b1a] p-5">
                    <p className="text-xs text-[#77736b]">Timeline</p>
                    <p className="mt-2">0–2 months</p>
                  </div>

                  <div className="rounded-2xl bg-[#1b1b1a] p-5">
                    <p className="text-xs text-[#77736b]">Lead Score</p>
                    <p className="mt-2">92 / 100</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#3b3a37] p-5">
                  <p className="text-xs uppercase tracking-wider text-[#77736b]">
                    Recommended action
                  </p>

                  <p className="mt-2 leading-7">
                    Contact this lead immediately and offer relevant 3BHK
                    properties in the requested location and budget.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
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

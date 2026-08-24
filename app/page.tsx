import LeadDemo from "./LeadDemo";

const services = [
  {
    number: "01",
    title: "Capture",
    description:
      "Every enquiry enters one intelligent system instead of getting lost across calls, forms and WhatsApp.",
  },
  {
    number: "02",
    title: "Qualify",
    description:
      "AI understands budget, location, property type, urgency and buying signals automatically.",
  },
  {
    number: "03",
    title: "Convert",
    description:
      "Your team sees who deserves attention first and what action to take next.",
  },
];

const leads = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    requirement: "3BHK · Jaipur · ₹80L",
    score: 92,
    intent: "HIGH",
    action: "Contact immediately",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    requirement: "2BHK · Gurgaon · ₹60L",
    score: 68,
    intent: "MEDIUM",
    action: "Follow up soon",
  },
  {
    name: "Aman Verma",
    initials: "AV",
    requirement: "Property search · Jaipur",
    score: 41,
    intent: "LOW",
    action: "Nurture lead",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2ec] text-[#111111]">

      {/* NAVIGATION */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#"
          className="text-xl font-bold tracking-[-0.05em]"
        >
          AAA<span className="text-[#77736b]">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#services"
            className="transition-opacity hover:opacity-50"
          >
            Services
          </a>

          <a
            href="#process"
            className="transition-opacity hover:opacity-50"
          >
            Process
          </a>

          <a
            href="#demo"
            className="transition-opacity hover:opacity-50"
          >
            Live Demo
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Book a Demo →
        </a>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d5d1c8] bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#6b675f]">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              AI automation for real estate
            </div>

            <h1 className="text-5xl font-semibold leading-[0.91] tracking-[-0.06em] sm:text-7xl lg:text-[82px]">
              Stop chasing
              <br />
              leads.
              <br />
              <span className="text-[#77736b]">
                Start closing.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#5f5b54] sm:text-lg">
              PropPilot captures, qualifies and prioritizes property
              enquiries automatically — so your sales team knows exactly
              who to call, when to call and why.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="rounded-full bg-[#111111] px-7 py-4 text-center text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                See PropPilot in action →
              </a>

              <a
                href="#process"
                className="rounded-full border border-[#cbc7be] bg-white/60 px-7 py-4 text-center text-sm font-medium transition-colors hover:bg-white"
              >
                How it works
              </a>
            </div>

            {/* Mini proof */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#d8d4cc] pt-6">
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  24/7
                </p>
                <p className="mt-1 text-xs text-[#77736b]">
                  Lead response
                </p>
              </div>

              <div className="h-10 w-px bg-[#d8d4cc]" />

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  AI
                </p>
                <p className="mt-1 text-xs text-[#77736b]">
                  Qualification
                </p>
              </div>

              <div className="h-10 w-px bg-[#d8d4cc]" />

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  92
                </p>
                <p className="mt-1 text-xs text-[#77736b]">
                  Top lead score
                </p>
              </div>
            </div>
          </div>

          {/* PRODUCT VISUAL */}
          <div className="relative">

            {/* Glow / background */}
            <div className="absolute -inset-6 rounded-[3rem] bg-[#d8d4cc]/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#343432] bg-[#111111] p-3 shadow-2xl">

              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#55534e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#55534e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#55534e]" />
                </div>

                <div className="rounded-full border border-[#30302e] px-4 py-1 text-[9px] uppercase tracking-[0.18em] text-[#77736b]">
                  PropPilot AI
                </div>

                <div className="flex items-center gap-2 text-[9px] text-[#77736b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  LIVE
                </div>
              </div>

              {/* Dashboard */}
              <div className="rounded-[1.5rem] bg-[#f4f2ec] p-5 text-[#111111] sm:p-7">

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#77736b]">
                      Lead intelligence
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                      Good morning.
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#d5d1c8] bg-white px-3 py-2 text-[9px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    AI active
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <MiniMetric value="24" label="Leads" />
                  <MiniMetric value="8" label="High intent" />
                  <MiniMetric value="87" label="Avg score" />
                </div>

                {/* Lead list */}
                <div className="mt-5 rounded-2xl bg-[#111111] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#77736b]">
                      AI priority queue
                    </p>

                    <span className="text-[9px] text-[#77736b]">
                      Updated now
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {leads.map((lead) => (
                      <div
                        key={lead.name}
                        className="rounded-xl border border-[#292927] bg-[#181817] p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#292927] text-[9px] font-semibold">
                              {lead.initials}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-xs font-medium">
                                {lead.name}
                              </p>

                              <p className="mt-1 truncate text-[9px] text-[#77736b]">
                                {lead.requirement}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-semibold">
                              {lead.score}
                            </p>

                            <p
                              className={`mt-0.5 text-[8px] font-medium uppercase tracking-wider ${
                                lead.intent === "HIGH"
                                  ? "text-white"
                                  : lead.intent === "MEDIUM"
                                    ? "text-[#aaa69e]"
                                    : "text-[#66645f]"
                              }`}
                            >
                              {lead.intent}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#30302e]">
                          <div
                            className="h-full rounded-full bg-white"
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#30302e] pt-3">
                    <span className="text-[9px] text-[#77736b]">
                      Recommended next action
                    </span>

                    <span className="text-[9px] font-medium">
                      Contact Rahul →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#d5d1c8] bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-xs text-white">
                  AI
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[#77736b]">
                    New signal
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    High-intent lead detected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / POSITIONING */}
      <section className="border-y border-[#d8d4cc] bg-[#eae7df] py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#77736b] sm:justify-between lg:px-10">
          <span>Lead Capture</span>
          <span className="hidden sm:inline">•</span>
          <span>AI Qualification</span>
          <span className="hidden sm:inline">•</span>
          <span>Smart Follow-Up</span>
          <span className="hidden sm:inline">•</span>
          <span>Sales Intelligence</span>
          <span className="hidden sm:inline">•</span>
          <span>Real Estate Automation</span>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#111111] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#77736b]">
                What we automate
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Your leads
                <br />
                deserve
                <br />
                <span className="text-[#77736b]">
                  a system.
                </span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#333330] md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-[#111111] p-7 transition-colors hover:bg-[#1c1c1b] lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#77736b]">
                      {service.number}
                    </span>

                    <span className="text-[#55534e] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#aaa69e]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section
        id="demo"
        className="bg-[#f4f2ec] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5d1c8] bg-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#77736b]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Live AI Demo
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              See how a raw enquiry
              <br />
              becomes a{" "}
              <span className="text-[#77736b]">
                qualified lead.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#6b675f]">
              Enter a property enquiry and let PropPilot analyze the
              buying intent, score the lead and recommend the next action.
            </p>
          </div>

          <LeadDemo />
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="border-t border-[#d8d4cc] bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#77736b]">
                The system
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                From enquiry
                <br />
                to{" "}
                <span className="text-[#77736b]">
                  opportunity.
                </span>
              </h2>
            </div>

            <div className="grid gap-0">
              {[
                [
                  "01",
                  "Capture",
                  "A new property enquiry enters the system automatically.",
                ],
                [
                  "02",
                  "Understand",
                  "AI identifies requirements, urgency and buying signals.",
                ],
                [
                  "03",
                  "Prioritize",
                  "Every lead receives a score and recommended next action.",
                ],
                [
                  "04",
                  "Convert",
                  "Your sales team spends time where it actually matters.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid grid-cols-[60px_1fr] border-t border-[#d8d4cc] py-7"
                >
                  <span className="text-xs text-[#77736b]">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#6b675f]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-4 mb-4 overflow-hidden rounded-[2rem] bg-[#111111] px-6 py-20 text-white sm:mx-6 lg:mx-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#77736b]">
                Ready?
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Build a sales system
                <br />
                that works while
                <br />
                <span className="text-[#77736b]">
                  you sell.
                </span>
              </h2>
            </div>

            <a
              href="mailto:hello@aaa-agency.com"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 text-sm font-medium text-[#111111] transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Talk to AAA →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-xs text-[#77736b] sm:flex-row lg:px-10">
        <p>AAA — AI Automation Agency</p>
        <p>PropPilot AI · Built for modern real estate.</p>
      </footer>
    </main>
  );
}

/* ---------------- Components ---------------- */

function MiniMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[#ddd9d1] bg-white p-3">
      <p className="text-lg font-semibold tracking-tight">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-wider text-[#77736b]">
        {label}
      </p>
    </div>
  );
}
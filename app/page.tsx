import LeadDemo from "./LeadDemo";
const services = [
  {
    number: "01",
    title: "Lead Capture",
    description:
      "Capture property enquiries from your website and turn every visitor into a trackable lead.",
  },
  {
    number: "02",
    title: "AI Qualification",
    description:
      "Automatically understand budget, location, property type and buying timeline.",
  },
  {
    number: "03",
    title: "Smart Follow-Up",
    description:
      "Keep leads warm with timely, personalized follow-ups instead of letting opportunities disappear.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="text-xl font-bold tracking-[-0.04em]">
          AAA<span className="text-[#77736b]">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="transition-opacity hover:opacity-50">
            Services
          </a>
          <a href="#process" className="transition-opacity hover:opacity-50">
            Process
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-50">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Book a Demo
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="max-w-5xl">
          <p className="mb-7 text-sm font-medium uppercase tracking-[0.25em] text-[#77736b]">
            AI Automation for Real Estate
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
            Turn property
            <br />
            enquiries into
            <br />
            <span className="text-[#77736b]">real opportunities.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5f5b54]">
            We build AI-powered systems that capture, qualify and follow up
            with real-estate leads — so agents can spend less time chasing
            enquiries and more time closing deals.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#111111] px-7 py-4 text-center text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Get Your Free Demo →
            </a>

            <a
              href="#process"
              className="rounded-full border border-[#d1cec6] px-7 py-4 text-center text-sm font-medium transition-colors hover:bg-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Hero stats */}
        <div className="mt-24 grid border-t border-[#d8d4cc] pt-8 sm:grid-cols-3">
          <div className="pb-6 sm:pb-0">
            <p className="text-3xl font-semibold tracking-tight">24/7</p>
            <p className="mt-2 text-sm text-[#77736b]">Lead response</p>
          </div>

          <div className="border-[#d8d4cc] pb-6 sm:border-l sm:pl-8 sm:pb-0">
            <p className="text-3xl font-semibold tracking-tight">AI</p>
            <p className="mt-2 text-sm text-[#77736b]">
              Lead qualification
            </p>
          </div>

          <div className="border-[#d8d4cc] sm:border-l sm:pl-8">
            <p className="text-3xl font-semibold tracking-tight">∞</p>
            <p className="mt-2 text-sm text-[#77736b]">
              Follow-up opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[#111111] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#aaa69e]">
              What we automate
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Your leads shouldn't
              <br />
              wait for you.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-[#3a3936] md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-[#111111] p-8 transition-colors hover:bg-[#1c1c1b] lg:p-10"
              >
                <p className="text-sm text-[#77736b]">{service.number}</p>

                <h3 className="mt-20 text-2xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#aaa69e]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadDemo />
      {/* Process */}
      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-[#77736b]">
          The system
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          From enquiry to site visit,
          <br />
          automatically.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {[
            ["01", "Capture", "A new property enquiry enters the system."],
            ["02", "Understand", "AI identifies the lead's requirements."],
            ["03", "Follow Up", "The lead receives a timely response."],
            ["04", "Convert", "The agent focuses on the qualified lead."],
          ].map(([number, title, description]) => (
            <div key={number} className="border-t border-[#d1cec6] pt-6">
              <span className="text-sm text-[#77736b]">{number}</span>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-[#6b675f]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-6 mb-6 overflow-hidden rounded-3xl bg-[#d9d5cc] px-6 py-20 lg:mx-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#77736b]">
            Ready?
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            Let's build a system that works while you sell.
          </h2>

          <a
            href="mailto:hello@aaa-agency.com"
            className="mt-10 inline-block rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Talk to AAA →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#77736b] sm:flex-row lg:px-10">
        <p>AAA — AI Automation Agency</p>
        <p>Built for modern real estate.</p>
      </footer>
    </main>
  );
}

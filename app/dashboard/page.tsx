const leads = [
  {
    name: "Rahul Sharma",
    requirement: "3BHK · Jaipur · ₹80L",
    intent: "HIGH INTENT",
    score: 92,
    timeline: "0–2 months",
    action: "Contact immediately",
  },
  {
    name: "Priya Mehta",
    requirement: "2BHK · Gurgaon · ₹60L",
    intent: "MEDIUM INTENT",
    score: 68,
    timeline: "1–3 months",
    action: "Follow up soon",
  },
  {
    name: "Aman Verma",
    requirement: "Property search · Jaipur",
    intent: "LOW INTENT",
    score: 41,
    timeline: "Not specified",
    action: "Nurture lead",
  },
];

export default function Dashboard() {
  const highIntent = leads.filter((lead) => lead.score >= 80).length;
  const mediumIntent = leads.filter(
    (lead) => lead.score >= 50 && lead.score < 80
  ).length;
  const averageScore = Math.round(
    leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length
  );

  return (
    <main className="min-h-screen bg-[#f4f2ec] px-6 py-10 text-[#111111] lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#77736b]">
              PROPPILOT AI
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Lead Intelligence
            </h1>

            <p className="mt-4 max-w-xl text-[#6b675f]">
              AI-powered qualification that helps real-estate teams focus on
              the leads most likely to convert.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#d8d5ce] bg-white px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              AI system active
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat title="Total Leads" value={String(leads.length)} />
          <Stat title="High Intent" value={String(highIntent)} />
          <Stat title="Medium Intent" value={String(mediumIntent)} />
          <Stat title="Avg. Lead Score" value={`${averageScore}/100`} />
        </section>

        {/* Priority Banner */}
        <section className="mt-8 rounded-3xl bg-[#111111] p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8f8b82]">
                AI Priority Alert
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                {highIntent} lead{highIntent !== 1 ? "s" : ""} require immediate attention.
              </h2>

              <p className="mt-2 max-w-2xl text-sm text-[#aaa69e]">
                These prospects have strong buying signals and a high
                probability of conversion.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-6 py-4 text-center text-[#111111]">
              <p className="text-xs uppercase tracking-wider text-[#77736b]">
                Top Score
              </p>
              <p className="mt-1 text-4xl font-semibold">
                {Math.max(...leads.map((lead) => lead.score))}
              </p>
            </div>
          </div>
        </section>

        {/* Leads */}
        <section className="mt-8 overflow-hidden rounded-3xl bg-[#111111] text-white">
          <div className="flex flex-col justify-between gap-3 border-b border-[#30302e] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#77736b]">
                AI Qualified
              </p>
              <h2 className="mt-1 text-xl font-medium">
                Recent Leads
              </h2>
            </div>

            <div className="rounded-full border border-[#3b3b38] px-4 py-2 text-xs text-[#aaa69e]">
              Updated automatically
            </div>
          </div>

          <div className="divide-y divide-[#30302e]">
            {leads.map((lead) => (
              <LeadRow key={lead.name} lead={lead} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#d8d5ce] pt-6 text-sm text-[#77736b] sm:flex-row">
          <p>PropPilot AI · Lead qualification engine</p>
          <p>Powered by AI</p>
        </div>
      </div>
    </main>
  );
}

function LeadRow({
  lead,
}: {
  lead: {
    name: string;
    requirement: string;
    intent: string;
    score: number;
    timeline: string;
    action: string;
  };
}) {
  const scoreClass =
    lead.score >= 80
      ? "bg-white text-[#111111]"
      : lead.score >= 50
        ? "bg-[#77736b] text-white"
        : "bg-[#333330] text-[#aaa69e]";

  return (
    <div className="grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[1.1fr_1.5fr_1fr_0.7fr_1.2fr] lg:items-center">
      
      {/* Lead */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a28] text-sm font-medium">
            {lead.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>

          <div>
            <p className="font-medium">{lead.name}</p>
            <p className="mt-1 text-xs text-[#77736b]">
              {lead.timeline}
            </p>
          </div>
        </div>
      </div>

      {/* Requirement */}
      <div>
        <p className="text-xs uppercase tracking-wider text-[#77736b]">
          Requirement
        </p>
        <p className="mt-2">{lead.requirement}</p>
      </div>

      {/* Intent */}
      <div>
        <p className="text-xs uppercase tracking-wider text-[#77736b]">
          Intent
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              lead.score >= 80
                ? "bg-white"
                : lead.score >= 50
                  ? "bg-[#77736b]"
                  : "bg-[#444440]"
            }`}
          />

          <span className="text-sm">{lead.intent}</span>
        </div>
      </div>

      {/* Score */}
      <div>
        <p className="text-xs uppercase tracking-wider text-[#77736b]">
          AI Score
        </p>

        <div
          className={`mt-2 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${scoreClass}`}
        >
          {lead.score}/100
        </div>
      </div>

      {/* Action */}
      <div>
        <p className="text-xs uppercase tracking-wider text-[#77736b]">
          Recommended Action
        </p>

        <p className="mt-2 text-sm">{lead.action}</p>
      </div>
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-[#e0ddd5] bg-white p-6 shadow-sm">
      <p className="text-sm text-[#77736b]">{title}</p>

      <p className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
        {value}
      </p>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#ece9e2]">
        <div className="h-full w-2/3 rounded-full bg-[#111111]" />
      </div>
    </div>
  );
}
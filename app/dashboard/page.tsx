"use client";

import { useMemo, useState } from "react";

type Lead = {
  name: string;
  requirement: string;
  intent: "HIGH INTENT" | "MEDIUM INTENT" | "LOW INTENT";
  score: number;
  timeline: string;
  action: string;
};

const leads: Lead[] = [
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

type Filter = "ALL" | "HIGH" | "MEDIUM" | "LOW";

export default function Dashboard() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.requirement.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "ALL" ||
        (filter === "HIGH" && lead.intent === "HIGH INTENT") ||
        (filter === "MEDIUM" && lead.intent === "MEDIUM INTENT") ||
        (filter === "LOW" && lead.intent === "LOW INTENT");

      return matchesSearch && matchesFilter;
    });
  }, [filter, search]);

  const highIntent = leads.filter(
    (lead) => lead.score >= 80
  ).length;

  const mediumIntent = leads.filter(
    (lead) => lead.score >= 50 && lead.score < 80
  ).length;

  const lowIntent = leads.filter(
    (lead) => lead.score < 50
  ).length;

  const averageScore = Math.round(
    leads.reduce((sum, lead) => sum + lead.score, 0) /
      leads.length
  );

  const topScore = Math.max(
    ...leads.map((lead) => lead.score)
  );

  return (
    <main className="min-h-screen bg-[#f4f2ec] px-5 py-8 text-[#111111] sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#77736b]">
                PROPPILOT AI
              </p>

              <span className="rounded-full border border-[#d8d5ce] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#77736b]">
                Dashboard
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Lead Intelligence
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#6b675f] sm:text-base">
              AI-powered qualification that helps real-estate teams
              focus on the prospects most likely to convert.
            </p>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-3 self-start rounded-full border border-[#d8d5ce] bg-white px-4 py-2.5 sm:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-sm font-medium">
              AI system active
            </span>
          </div>
        </header>

        {/* STATS */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            title="Total Leads"
            value={String(leads.length)}
            subtitle="Qualified prospects"
            percentage={100}
          />

          <Stat
            title="High Intent"
            value={String(highIntent)}
            subtitle="Immediate attention"
            percentage={(highIntent / leads.length) * 100}
          />

          <Stat
            title="Medium Intent"
            value={String(mediumIntent)}
            subtitle="Follow-up required"
            percentage={(mediumIntent / leads.length) * 100}
          />

          <Stat
            title="Avg. Lead Score"
            value={`${averageScore}/100`}
            subtitle="Overall lead quality"
            percentage={averageScore}
          />
        </section>

        {/* AI PRIORITY */}
        <section className="mt-8 overflow-hidden rounded-[2rem] bg-[#111111] text-white">
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#3a3a37] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#aaa69e]">
                  AI Priority
                </span>

                <span className="text-xs text-[#77736b]">
                  Real-time analysis
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                {highIntent} lead
                {highIntent !== 1 ? "s" : ""} require
                immediate attention.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#aaa69e]">
                Strong buying signals detected. Contact high-intent
                prospects first to maximize your chances of conversion.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PriorityPill label="High" count={highIntent} />
                <PriorityPill label="Medium" count={mediumIntent} />
                <PriorityPill label="Low" count={lowIntent} />
              </div>
            </div>

            <div className="min-w-[170px] rounded-3xl border border-[#30302e] bg-[#1b1b1a] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#77736b]">
                Top AI Score
              </p>

              <div className="mt-4 flex items-end gap-2">
                <p className="text-5xl font-semibold tracking-[-0.06em]">
                  {topScore}
                </p>

                <span className="mb-2 text-sm text-[#77736b]">
                  /100
                </span>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#30302e]">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${topScore}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* LEADS */}
        <section className="mt-8 overflow-hidden rounded-[2rem] bg-[#111111] text-white">

          {/* HEADER */}
          <div className="border-b border-[#30302e] px-6 py-6 sm:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

              <div>
                <div className="flex items-center gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#77736b]">
                    AI Qualified
                  </p>

                  <span className="rounded-full bg-[#242422] px-2.5 py-1 text-[10px] text-[#aaa69e]">
                    {filteredLeads.length} shown
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-medium">
                  Recent Leads
                </h2>
              </div>

              {/* SEARCH */}
              <div className="relative w-full lg:w-72">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search leads..."
                  className="w-full rounded-full border border-[#3b3b38] bg-[#1b1b1a] px-5 py-3 text-sm text-white outline-none placeholder:text-[#66635d] focus:border-[#77736b]"
                />
              </div>
            </div>

            {/* FILTERS */}
            <div className="mt-5 flex flex-wrap gap-2">
              <FilterButton
                label="All"
                active={filter === "ALL"}
                onClick={() => setFilter("ALL")}
              />

              <FilterButton
                label={`High · ${highIntent}`}
                active={filter === "HIGH"}
                onClick={() => setFilter("HIGH")}
              />

              <FilterButton
                label={`Medium · ${mediumIntent}`}
                active={filter === "MEDIUM"}
                onClick={() => setFilter("MEDIUM")}
              />

              <FilterButton
                label={`Low · ${lowIntent}`}
                active={filter === "LOW"}
                onClick={() => setFilter("LOW")}
              />
            </div>
          </div>

          {/* LEAD LIST */}
          {filteredLeads.length > 0 ? (
            <div className="divide-y divide-[#30302e]">
              {filteredLeads.map((lead) => (
                <LeadRow
                  key={lead.name}
                  lead={lead}
                  onSelect={() => setSelectedLead(lead)}
                />
              ))}
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="text-lg font-medium">
                No leads found
              </p>

              <p className="mt-2 text-sm text-[#77736b]">
                Try another search or filter.
              </p>
            </div>
          )}
        </section>

        {/* CONVERSION FOCUS */}
        <section className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">

          <div className="rounded-[2rem] border border-[#dedbd3] bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#77736b]">
              Conversion Focus
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Start with your hottest lead.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b675f]">
              Rahul Sharma has the strongest buying signals with a
              lead score of 92. The recommended action is to contact
              him immediately.
            </p>

            <button
              onClick={() => setSelectedLead(leads[0])}
              className="mt-6 rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View Rahul's lead →
            </button>
          </div>

          <div className="rounded-[2rem] border border-[#dedbd3] bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#77736b]">
              AI Summary
            </p>

            <div className="mt-6 space-y-5">
              <SummaryRow
                label="High intent"
                value={`${highIntent} lead`}
              />

              <SummaryRow
                label="Follow-up"
                value={`${mediumIntent} lead`}
              />

              <SummaryRow
                label="Nurture"
                value={`${lowIntent} lead`}
              />

              <div className="border-t border-[#ece9e2] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#77736b]">
                    Average quality
                  </span>

                  <span className="text-sm font-semibold">
                    {averageScore}/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-[#d8d5ce] pt-6 text-xs text-[#77736b] sm:flex-row">
          <p>PropPilot AI · Lead qualification engine</p>
          <p>Powered by AI · Live system</p>
        </footer>
      </div>

      {/* LEAD DETAIL MODAL */}
      {selectedLead && (
        <LeadModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </main>
  );
}

/* ---------------- Lead Row ---------------- */

function LeadRow({
  lead,
  onSelect,
}: {
  lead: Lead;
  onSelect: () => void;
}) {
  const isHigh = lead.score >= 80;
  const isMedium = lead.score >= 50 && lead.score < 80;

  const intentStyle = isHigh
    ? "border-white/20 bg-white/10 text-white"
    : isMedium
      ? "border-[#77736b]/40 bg-[#77736b]/10 text-[#d0cdc5]"
      : "border-[#444440] bg-[#242422] text-[#aaa69e]";

  return (
    <button
      onClick={onSelect}
      className="group grid w-full gap-6 px-6 py-7 text-left transition-colors hover:bg-[#171716] sm:px-8 lg:grid-cols-[1.1fr_1.5fr_1fr_1fr_1.3fr] lg:items-center"
    >
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#252523] text-xs font-semibold">
            {lead.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>

          <div>
            <p className="font-medium">
              {lead.name}
            </p>

            <p className="mt-1 text-xs text-[#77736b]">
              {lead.timeline}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
          Requirement
        </p>

        <p className="mt-2 text-sm">
          {lead.requirement}
        </p>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
          Intent
        </p>

        <div className="mt-2">
          <span
            className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wider ${intentStyle}`}
          >
            {lead.intent}
          </span>
        </div>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
          AI Score
        </p>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-lg font-semibold">
            {lead.score}
          </span>

          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#30302e] lg:max-w-[80px]">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: `${lead.score}%` }}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
          Recommended Action
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          <p className="text-sm">
            {lead.action}
          </p>
        </div>
      </div>
    </button>
  );
}

/* ---------------- Modal ---------------- */

function LeadModal({
  lead,
  onClose,
}: {
  lead: Lead;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-[2rem] bg-[#111111] p-6 text-white shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#77736b]">
              Lead Details
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              {lead.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3b3b38] text-[#aaa69e] transition-colors hover:bg-[#242422] hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="mt-7 space-y-4">
          <Detail
            label="Requirement"
            value={lead.requirement}
          />

          <div className="grid grid-cols-2 gap-4">
            <Detail
              label="Timeline"
              value={lead.timeline}
            />

            <Detail
              label="AI Score"
              value={`${lead.score} / 100`}
            />
          </div>

          <Detail
            label="Intent"
            value={lead.intent}
          />

          <Detail
            label="Recommended Action"
            value={lead.action}
          />
        </div>

        <div className="mt-7 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-[#3b3b38] px-5 py-3 text-sm text-[#aaa69e] transition-colors hover:bg-[#242422] hover:text-white"
          >
            Close
          </button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            Contact Lead →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[#1b1b1a] p-5">
      <p className="text-xs uppercase tracking-wider text-[#77736b]">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6">
        {value}
      </p>
    </div>
  );
}

function Stat({
  title,
  value,
  subtitle,
  percentage,
}: {
  title: string;
  value: string;
  subtitle: string;
  percentage: number;
}) {
  return (
    <div className="rounded-[2rem] border border-[#dedbd3] bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-[#77736b]">
          {title}
        </p>

        <span className="h-2 w-2 rounded-full bg-[#111111]" />
      </div>

      <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
        {value}
      </p>

      <p className="mt-2 text-xs text-[#77736b]">
        {subtitle}
      </p>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#ece9e2]">
        <div
          className="h-full rounded-full bg-[#111111] transition-all"
          style={{
            width: `${Math.min(percentage, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

function PriorityPill({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#30302e] bg-[#1b1b1a] px-3 py-2">
      <span className="text-xs text-[#aaa69e]">
        {label}
      </span>

      <span className="text-xs font-semibold">
        {count}
      </span>
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[#77736b]">
        {label}
      </span>

      <span className="text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
        active
          ? "bg-white text-black"
          : "border border-[#3b3b38] text-[#aaa69e] hover:bg-[#242422] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
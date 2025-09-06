import React, { useMemo } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Factory,
  Users,
  LineChart,
  ClipboardList,
  CalendarCheck2,
  Scale,
  Package,
  FileText,
  Lock,
  Info,
  Cpu,
} from "lucide-react";

// Single file React page that implements the proposal with the requested changes.
// No external links. No forms. Price is revealed only in the final section.
// Tailwind utility classes are used. Visible copy avoids hyphens.

const sections = [
  { id: "intro", label: "Introduction and Promise" },
  { id: "audience", label: "Audience and Positioning" },
  { id: "scope", label: "Scope and Deliverables" },
  { id: "avatar", label: "AI Avatar Creation" },
  { id: "workflow", label: "Workflow and SLAs" },
  { id: "strategy", label: "Content Strategy and Series" },
  { id: "kpis", label: "KPIs and Reporting" },
  { id: "compliance", label: "Compliance and Boundaries" },
  { id: "approvals", label: "Approvals and Governance" },
  { id: "access", label: "Access and Asset Checklist" },
  { id: "timeline", label: "Timeline and Milestones" },
  { id: "risks", label: "Risks and Assumptions" },
  { id: "handoff", label: "Handoff and Ownership" },
  { id: "legal", label: "Legal Notes" },
  { id: "price", label: "Price" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs tracking-widest uppercase font-semibold text-blue-300">
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  icon?: any;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      {Icon ? (
        <div className="p-2 rounded-2xl bg-slate-800/60 text-blue-300 shadow-sm">
          <Icon className="w-5 h-5" aria-hidden />
        </div>
      ) : null}
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-2xl font-bold text-slate-100 mt-1">{title}</h2>
        {subtitle ? (
          <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-6 shadow-sm">
      {children}
    </div>
  );
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-300" aria-hidden />
      <span className="text-slate-100">{children}</span>
    </li>
  );
}

export default function ProposalPage() {
  const nav = useMemo(() => sections.slice(0, sections.length), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1035] via-[#101a39] to-[#0a1024] text-slate-100">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800">
        <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-200" aria-hidden />
            <div>
              <div className="text-sm font-semibold text-slate-100">Founder Brand Program</div>
              <div className="text-xs text-slate-300">Single page proposal for onboarding</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-4">
            {nav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs text-slate-200 hover:text-blue-300 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="intro" className="bg-transparent">
        <div className="max-w-[1120px] mx-auto px-4 py-12">
          <Eyebrow>Introduction and Promise</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Personal brand growth program for the next 90 days
          </h1>
          <p className="mt-4 text-lg">
            Authority building for the youngest MD voice in ethical direct selling and Ayurveda backed
            wellness. Trust through transparent manufacturing and community storytelling.
          </p>
          <p className="mt-3 text-slate-300">
            UCL graduate with first class honours and award winning founder. The content system will
            showcase leadership and quality and community impact.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card><div className="text-xl font-semibold">Authority</div><div className="text-sm text-slate-300 mt-1">Clear leadership presence</div></Card>
            <Card><div className="text-xl font-semibold">Trust</div><div className="text-sm text-slate-300 mt-1">Transparency and proof through process</div></Card>
            <Card><div className="text-xl font-semibold">Growth</div><div className="text-sm text-slate-300 mt-1">Audience that engages and acts</div></Card>
          </div>
        </div>
      </section>

      <main className="max-w-[1120px] mx-auto px-4">
        {/* Audience and Positioning */}
        <section id="audience" className="py-10">
          <SectionHeader
            eyebrow="Audience and Positioning"
            title="Who we serve and how we position"
            icon={Users}
            subtitle="Primary segments and positioning choices for clarity and trust"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Primary segments</h3>
              <ul className="space-y-2">
                <CheckRow>Direct selling professionals from 25 to 45</CheckRow>
                <CheckRow>Aspiring entrepreneurs and income seekers from 18 to 35 in Tier 2 and Tier 3 cities</CheckRow>
                <CheckRow>Health and wellness enthusiasts from 25 to 50</CheckRow>
              </ul>
              <div className="mt-4 flex gap-2 flex-wrap text-sm text-slate-300">
                <span className="px-2 py-1 rounded-full bg-slate-800/40 border border-slate-700/70">Ethical leadership</span>
                <span className="px-2 py-1 rounded-full bg-slate-800/40 border border-slate-700/70">Transparent operations</span>
                <span className="px-2 py-1 rounded-full bg-slate-800/40 border border-slate-700/70">Ayurveda backed education</span>
              </div>
            </Card>
            <Card>
              <h3 className="font-semibold mb-3">Exclusions and positioning</h3>
              <ul className="space-y-2">
                <CheckRow>Avoid get rich quick seekers</CheckRow>
                <CheckRow>Avoid unrelated corporate niches</CheckRow>
                <CheckRow>Position as ethical and innovative and transparent</CheckRow>
              </ul>
            </Card>
          </div>
        </section>

        {/* Scope and Deliverables */}
        <section id="scope" className="py-10">
          <SectionHeader
            eyebrow="Scope and Deliverables"
            title="What is included each month"
            icon={ClipboardList}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Content production</h3>
              <ul className="space-y-2">
                <CheckRow>Reels and shorts. 24 to 30 units from 20 to 60 seconds in 9 by 16</CheckRow>
                <CheckRow>Carousels. 4 to 6 units for myth and fact and checklist education</CheckRow>
                <CheckRow>Stories. 20 to 30 units for behind the scenes and polls and Q and A</CheckRow>
                <CheckRow>Copywriting. Hooks and captions and safe calls to action where appropriate</CheckRow>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold mb-3">Operations and reporting</h3>
              <ul className="space-y-2">
                <CheckRow>Posting and light community triage with handover of high intent messages</CheckRow>
                <CheckRow>Monthly analytics report and a 30 minute review call</CheckRow>
                <CheckRow>Shared drive for asset management and naming standards</CheckRow>
              </ul>
            </Card>
          </div>
        </section>

        {/* AI Avatar Creation */}
        <section id="avatar" className="py-10">
          <SectionHeader
            eyebrow="AI Avatar Creation"
            title="On camera content through an AI double"
            icon={Cpu}
            subtitle="No on site filming by our team. One time capture by the client and ongoing generation by our editors"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Reference video requirements</h3>
              <ul className="space-y-2">
                <CheckRow>One time reference video from 3 to 5 minutes with the client seated and speaking naturally</CheckRow>
                <CheckRow>Camera at eye level on a stable tripod with a neutral background and soft even light</CheckRow>
                <CheckRow>Framing is a mid shot from chest up with minimal headroom and no face occlusion</CheckRow>
                <CheckRow>File format MP4 or MOV with 24 or 30 frames per second at Full HD or better</CheckRow>
                <CheckRow>Wardrobe in solid colors and no busy patterns or large logos</CheckRow>
                <CheckRow>Written consent for likeness use and a signed model release</CheckRow>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold mb-3">Voice dataset</h3>
              <ul className="space-y-2">
                <CheckRow>Provide at least 30 minutes of clean solo voice recordings with no music and low noise</CheckRow>
                <CheckRow>Include a range of reads such as conversational and energetic and calm styles for better prosody</CheckRow>
                <CheckRow>Preferred format is WAV at 44.1 or 48 kilohertz with 16 or 24 bit depth</CheckRow>
                <CheckRow>Past podcasts and talks and interviews are acceptable when rights allow</CheckRow>
                <CheckRow>Safety watermarking is applied to synthetic outputs during internal review</CheckRow>
              </ul>
            </Card>
          </div>
          <div className="mt-4 rounded-2xl bg-slate-900/60 border border-slate-700/70 p-4 text-sm text-slate-300">
            Avatar pipeline. capture onboarding then model build then voice clone tuning then script to screen then review then publish
          </div>
        </section>

        {/* Workflow and SLAs */}
        <section id="workflow" className="py-10">
          <SectionHeader
            eyebrow="Workflow and SLAs"
            title="How we plan and produce and approve"
            icon={Factory}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Plan and create</h3>
              <ul className="space-y-2">
                <CheckRow>Ideation and scripting with a filming plan for avatar shoots shared before each window</CheckRow>
                <CheckRow>Editing with 1 main cut and 1 revision per asset</CheckRow>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold mb-3">Approve and publish</h3>
              <ul className="space-y-2">
                <CheckRow>Single point approval on WhatsApp within 24 hours</CheckRow>
                <CheckRow>Posting 5 to 6 reels per week across priority platforms</CheckRow>
              </ul>
            </Card>
          </div>
        </section>

        {/* Content Strategy and Series */}
        <section id="strategy" className="py-10">
          <SectionHeader
            eyebrow="Content Strategy and Series"
            title="Narrative arcs and education formats"
            icon={BookOpen}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Narrative arcs</h3>
              <ul className="space-y-2">
                <CheckRow>Origin Logs. Founder diary and lessons from early ventures and education</CheckRow>
                <CheckRow>Factory Fridays. Manufacturing tours and research and quality assurance windows</CheckRow>
                <CheckRow>Leader Stories. Community spotlights from Aarogyam and Diva and Youthpreneurs</CheckRow>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold mb-3">Education formats</h3>
              <ul className="space-y-2">
                <CheckRow>Myth and Fact. Regulation and payout transparency and clinical support</CheckRow>
                <CheckRow>Playbook Shorts. Duplication and follow ups and systems and tools</CheckRow>
                <CheckRow>Q and A. Answers to the 10 most common questions</CheckRow>
                <CheckRow>Events and Mentoring. Talk clips and keynote moments</CheckRow>
              </ul>
            </Card>
          </div>
        </section>

        {/* KPIs and Reporting */}
        <section id="kpis" className="py-10">
          <SectionHeader
            eyebrow="KPIs and Reporting"
            title="Performance commitment for 90 days"
            icon={LineChart}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-slate-900/70 text-slate-100 p-8 border border-slate-700/70 shadow-sm">
              <div className="text-xl font-semibold">Follower growth</div>
              <p className="mt-2 text-slate-300">
                We guarantee at least 10,000 new followers by the end of three months.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/70 text-slate-100 p-8 border border-slate-700/70 shadow-sm">
              <div className="text-xl font-semibold">Total reach</div>
              <p className="mt-2 text-slate-300">
                We guarantee a total reach in the range of 1 to 2 million by the end of three months.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 p-4">
            <p className="text-sm text-slate-200">
              Guarantee. If both targets are not met we return the full program fee.
            </p>
          </div>
        </section>

        {/* Compliance and Boundaries */}
        <section id="compliance" className="py-10">
          <SectionHeader
            eyebrow="Compliance and Boundaries"
            title="Guardrails for trust and safety"
            icon={ShieldCheck}
          />
          <Card>
            <ul className="space-y-2">
              <CheckRow>No medical cure claims. Use supports wellness language</CheckRow>
              <CheckRow>No earnings guarantees. Share principles and systems</CheckRow>
              <CheckRow>No negative competitor talk. Focus on differentiation</CheckRow>
              <CheckRow>Protect private family moments and confidential data and sensitive negotiations</CheckRow>
            </ul>
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-800/40 p-3 border border-slate-700/70">
              <Info className="w-4 h-4 mt-1 text-slate-200" aria-hidden />
              <p className="text-sm text-slate-200">
                Sensitive or polarizing topics require prior approval by the MD.
              </p>
            </div>
          </Card>
        </section>

        {/* Approvals and Governance */}
        <section id="approvals" className="py-10">
          <SectionHeader
            eyebrow="Approvals and Governance"
            title="Decision process and response standards"
            icon={Scale}
          />
          <Card>
            <ul className="space-y-2">
              <CheckRow>Single point approver with name and WhatsApp</CheckRow>
              <CheckRow>Approvals are expected within 1 business day and urgent posts within 4 hours when flagged as urgent</CheckRow>
            </ul>
          </Card>
        </section>

        {/* Access and Asset Checklist */}
        <section id="access" className="py-10">
          <SectionHeader
            eyebrow="Access and Asset Checklist"
            title="What we need to start and deliver"
            icon={Package}
          />
          <Card>
            <ul className="grid md:grid-cols-2 gap-3">
              <CheckRow>Brand kit and logo and fonts</CheckRow>
              <CheckRow>Product claims sheets and certifications</CheckRow>
              <CheckRow>Filming permissions and safety rules for factory and office</CheckRow>
              <CheckRow>Past B roll and event footage and press links</CheckRow>
              <CheckRow>Account access for Instagram and Facebook and LinkedIn and YouTube with publisher roles</CheckRow>
              <CheckRow>Shared drive for asset handoff with clear file naming</CheckRow>
            </ul>
          </Card>
        </section>

        {/* Timeline and Milestones */}
        <section id="timeline" className="py-10">
          <SectionHeader
            eyebrow="Timeline and Milestones"
            title="How the 1st month unfolds"
            icon={CalendarCheck2}
          />
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { day: "Day 0", text: "Agreement signed and purchase order raised" },
              { day: "Day 3", text: "Kickoff of ideation and scripts and brand kit confirmation" },
              { day: "Day 7 to 10", text: "First posting subject to approvals and filming windows" },
              { day: "Weekly", text: "Filming window and content drop" },
              { day: "Monthly", text: "Analytics review and planning for the next month" },
            ].map((m) => (
              <div key={m.day} className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-sm">
                <div className="text-xs text-blue-300 font-semibold tracking-widest uppercase">{m.day}</div>
                <div className="mt-2 text-sm">{m.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Risks and Assumptions */}
        <section id="risks" className="py-10">
          <SectionHeader
            eyebrow="Risks and Assumptions"
            title="Dependencies to acknowledge"
            icon={Lock}
          />
          <Card>
            <ul className="space-y-2">
              <CheckRow>Client provides timely approvals and assets</CheckRow>
              <CheckRow>Compliance guidance is clear and current</CheckRow>
              <CheckRow>Filming permissions are granted for factory and office areas</CheckRow>
              <CheckRow>Single source of truth tracker in the shared drive</CheckRow>
              <CheckRow>No parallel edits outside the shared drive</CheckRow>
            </ul>
          </Card>
        </section>

        {/* Handoff and Ownership */}
        <section id="handoff" className="py-10">
          <SectionHeader
            eyebrow="Handoff and Ownership"
            title="What you own at every step"
            icon={FileText}
          />
          <Card>
            <ul className="space-y-2">
              <CheckRow>Agency delivers project files and final exports in the shared drive</CheckRow>
              <CheckRow>Client owns final outputs and grants a portfolio usage credit unless requested otherwise</CheckRow>
              <CheckRow>Admin rights for any owned pages are transferred on request</CheckRow>
            </ul>
          </Card>
        </section>

        {/* Legal Notes */}
        <section id="legal" className="py-10">
          <SectionHeader
            eyebrow="Legal Notes"
            title="Claims and usage standards"
            icon={Scale}
          />
          <Card>
            <ul className="space-y-2">
              <CheckRow>All content avoids medical claims and earnings claims</CheckRow>
              <CheckRow>Comparisons are fair and specific and cite facts where used</CheckRow>
              <CheckRow>Music and third party media are cleared for use</CheckRow>
              <CheckRow>Model releases are collected for any guests featured</CheckRow>
            </ul>
          </Card>
        </section>

        {/* Price */}
        <section id="price" className="py-12 border-t border-slate-800">
          <SectionHeader
            eyebrow="Price"
            title="Commercials for the monthly program"
            icon={Scale}
            subtitle="The commercial fee is presented only here as the final section"
          />
          <div className="rounded-3xl bg-[#0A2540] text-white p-8 shadow-sm">
            <div className="text-sm opacity-80">Total monthly fee</div>
            <div className="text-4xl md:text-5xl font-semibold mt-2">USD one thousand five hundred</div>
            <div className="text-sm opacity-80 mt-3">
              Purchase order for the 1st month is required to commence
            </div>
          </div>
          <div className="h-16" />
        </section>
      </main>

      <footer className="py-10 border-t border-slate-800">
        <div className="max-w-[1120px] mx-auto px-4 text-sm text-slate-300">
          This page is read only. There are no forms and no data capture. No cookies are used.
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from "react";

// --- Helper UI Components (from ui.jsx) ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-black/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg ${className}`}>
    {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
    {children}
  </div>
);


// --- Header Component (from Header.jsx) ---
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent backdrop-blur-sm print:relative print:shadow-none print:backdrop-blur-none">
      <div className="container mx-auto flex justify-start items-center">
        {/* Placeholder text/logo since we can't use logo.png */}
        <div className="text-xl font-bold tracking-tight text-white/90">
            <span className="text-indigo-400">Social</span> SEO Proposal
        </div>
      </div>
    </header>
  );
}

// --- Hero Section (from Hero.jsx) ---
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
          Social SEO Raj Shamani
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12">
          A three-tiered fan page engine designed for mass short-form distribution.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto text-left">
          <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Focus</h4><p className="text-white/70">Raj Shamani Social SEO</p></Card>
          <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Objective</h4><p className="text-white/70">Mass short-form distribution</p></Card>
          <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Mode</h4><p className="text-white/70">All-Platforms Primary</p></Card>
          <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Guardrails</h4><p className="text-white/70">Rights & safety compliance</p></Card>
        </div>
      </div>
    </section>
  );
}

// --- Strategy Toggle (REMOVED) ---
// The StrategyToggle component is removed as requested.

// --- Architecture (from Architecture.jsx) ---
const Architecture = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Architecture: Tiered Network</h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
          T1 = least volume, T2 = mid, T3 = most. Niche + Common pages; Graphic/Quote pages live in T2.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:border-indigo-400 transition-colors">
            <span className="inline-block bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 1</span>
            <h3 className="text-2xl font-bold mb-2">Quality Flagships (3–5 pages)</h3>
            <p className="text-white/70">
              Niche anchors: <b>Motivation</b>, <b>Startups</b>, <b>Finance</b>. Format: <b>Storytelling Cuts</b>. Cadence <b>1–2/day/page</b>. Minimal captions.
            </p>
          </Card>
          <Card className="hover:border-purple-400 transition-colors">
            <span className="inline-block bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 2</span>
            <h3 className="text-2xl font-bold mb-2">Scale (10–12 pages)</h3>
            <p className="text-white/70">
              <b>Niche pages</b> + <b>Common pages</b>; <b>Graphic/Quote pages</b> moved here. Cadence <b>2–4/day/page</b>. Test <b>text hooks</b>, titles, thumbs; EN↔HI captions/hashtags.
            </p>
          </Card>
          <Card className="hover:border-pink-400 transition-colors">
            <span className="inline-block bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 3</span>
            <h3 className="text-2xl font-bold mb-2">Experimental (15–20 pages)</h3>
            <p className="text-white/70">
              Split-screen/memes/stitch/duet; regional Hinglish/Hindi pilots. Cadence <b>4–5/day/page</b>. Long-tail discovery, idea velocity.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

// --- Language & Localization (from Language.jsx) ---
const Language = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card title="Language & Localization">
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Parallel <b>EN</b> & <b>HI/Hinglish</b> tracks.</li>
            <li><b>Caption kit & keyword matrices ONLY in T2 & T3</b>. T1 stays minimal/consistent.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

// --- Content Buckets (from ContentBuckets.jsx) ---
const ContentBuckets = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card title="Content Buckets (Cross-Platform)">
          <ol className="list-decimal pl-5 space-y-3 text-white/90 text-lg">
            {/* Removed internal numbers to avoid double numbering */}
            <li><b>Text hook</b> shorts (7–20s): 1 insight, 1 payoff</li>
            <li>Explainers (20–45s): What/Why/How in 3 bullets</li>
            <li>Myth-Busts & Hot Takes</li>
            <li>Quote/Graphic Carousels</li>
            <li>Reactions/Green-Screen</li>
            <li>Listicles - “5 lessons…”</li>
            <li>Podcast-IP Streams - build genre pages, then inject Raj</li>
            <li>YouTube Compilations - weekly 2–3 min Top 5 Shorts from T1 winners</li>
          </ol>
          <div className="mt-8 text-white/70 text-sm p-4 bg-white/5 rounded-lg">
            <p><b>Specs & Guardrails:</b> 9:16 primary; 1:1 carousels; 16:9 comps; burned-in subs; 2–3 highlight words/line; thumbs = face + 3–5 word promise.</p>
            <p className="mt-1"><b>Captions/hashtags testing lives in T2 & T3 only.</b></p>
          </div>
        </Card>
      </div>
    </section>
  );
}

// --- Volume Plans (from VolumePlans.jsx) ---
const VolumePlans = () => {
  const primary = [
    { tier: "T1", pages: 5, cadence: "1–2/day", posts: 200 },
    { tier: "T2", pages: 5, cadence: "2–4/day", posts: 400 },
    { tier: "T3", pages: 3, cadence: "4–5/day", posts: 400 },
  ];

  // Scale data is kept but not rendered since the mode switch is removed
  // const scale4k = [...]; 
  // const scale8k = [...];

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Volume Plans</h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">
          Pyramid split: <b>T1 least</b>, <b>T2 mid</b>, <b>T3 most</b>. Month 2+ recycle uplift <b>+30–50%</b> effective outputs.
        </p>

        <Card title="Primary Plan - ~1,000 posts per month" className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-4 min-w-[6rem]">Tier</th>
                  <th className="p-4 min-w-[6rem]"># Pages</th>
                  <th className="p-4 min-w-[6rem]">Cadence</th>
                  <th className="p-4 min-w-[8rem] text-right">Posts / Month</th>
                </tr>
              </thead>
              <tbody>
                {primary.map((row) => (
                  <tr key={row.tier} className="border-b border-white/10 last:border-b-0">
                    <td className="p-4 font-bold">{row.tier}</td>
                    <td className="p-4">{row.pages}</td>
                    <td className="p-4">{row.cadence}</td>
                    <td className="p-4 font-bold text-right">{row.posts}</td>
                  </tr>
                ))}
                <tr className="bg-white/10">
                  <td className="p-4 font-black text-lg" colSpan={3}>Total</td>
                  <td className="p-4 font-black text-lg text-right">~1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/70 text-sm mt-4">Recycle derivations per top 10% post: 3 title swaps + 2 thumb swaps + 1 EN/HI swap + 1 meme/split. ≈7 derivatives.</p>
        </Card>
        
        {/* Scale view removed as part of the toggle removal */}
      </div>
    </section>
  );
}

// --- Page Culling & Regeneration (from PageCulling.jsx) ---
const PageCulling = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card title="Page Culling & Regeneration (80/20 Rule)">
          <ol className="list-decimal pl-5 space-y-3 text-white/80">
            <li>Weekly evaluate: views/post, saves%, profile taps, follower delta.</li>
            <li>Cull threshold: &lt;p25 on all 4 metrics for 14 consecutive days → Archive page.</li>
            <li>Regenerate: new handle/art/style; warm-up (PFP+bio+3–4 drafts; 72h); migrate top winners first.</li>
            <li>Cap per operator: ≤5 batches/SMM (IP/device hygiene; account health score).</li>
          </ol>
          <p className="mt-4 text-white/70 text-sm p-3 bg-white/5 rounded-lg">Goal: concentrate volume into winners while refreshing long-tail discovery.</p>
        </Card>
      </div>
    </section>
  );
}

// --- Reader Journey & On-Page Structure (from ReaderJourney.jsx) ---
const ReaderJourney = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card title="Reader Journey & On-Page Structure">
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li><b>Bio:</b> “Unofficial fan page of Raj Shamani” + master handle + niche promise.</li>
            <li><b>Pinned Highlights:</b> 3 evergreen winners + 1 fresh viral attempt.</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">T2 Content Mix</h4>
              <p className="text-white/80 text-sm">30% explainers, 30% reactions, 20% listicles, 20% quotes.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">T3 Content Mix</h4>
              <p className="text-white/80 text-sm">40% split-screen/meme, 30% experiments, 20% regional dubs, 10% re-seeds.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h4 className="font-bold mb-2">Pinned Comments SOP (T2/T3)</h4>
            <p className="text-white/80 text-sm">2–4 comments per post: follow CTA, discussion prompt, master handle tag, “wait till the end” teaser.</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

// --- Team Structure (from Team.jsx) ---
const Team = () => {
  const primary = [
    { role: "Clip Directors", count: "6–7", desc: "Shot selection, hook scripting, narrative trims" },
    { role: "Editors", count: "16–18", desc: "Edit variants, motion/typography, speed to publish" },
    { role: "Social Media Managers", count: "6–7", desc: "Scheduling, community replies, seeding" },
    { role: "Copywriters", count: "1–2", desc: "Captions, pin comments, cross-niche copy matrices" },
    { role: "QC", count: "1", desc: "Final checks, brand guardrails, compliance" },
    { role: "Project Manager", count: "1", desc: "Calendar, SLAs, client communications" },
    { role: "Data Analyst", count: "1", desc: "Dashboards, Tracking and Analysis, monthly reviews" },
  ];
  // Scale data is removed from rendering
  // const scale = [...]; 

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Team Structure</h2>
        <Card title="Primary (~1,000 posts / month)">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primary.map((r) => (
              <div key={r.role} className="bg-black/20 p-4 rounded-lg border border-white/5">
                <strong className="text-indigo-300">{r.count}</strong> <strong>{r.role}:</strong>
                <p className="text-sm text-white/70 mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Scale view removed as part of the toggle removal */}
      </div>
    </section>
  );
}

// --- FAQ (from FAQ.jsx) ---
const FAQ = () => {
  const Item = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-white/20 last:border-b-0">
        <button className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
                onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`faq-answer-${title.replace(/\s/g, '-')}`}>
          <span className="text-xl font-bold">{title}</span>
          <Icon path={open ? "M19.5 12h-15" : "M12 4.5v15m7.5-7.5h-15"} className="w-6 h-6 transform transition-transform" />
        </button>
        {open && <div id={`faq-answer-${title.replace(/\s/g, '-')}`} className="pb-4 px-2 text-white/80 transition-all duration-300 ease-in-out">{children}</div>}
      </div>
    );
  };

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h2>
        <Card className="max-w-4xl mx-auto">
          <Item title="Why many pages?">
            80/20 distribution; outliers drive most views; multiple batches de-risk and widen reach.
          </Item>
          <Item title="How fast to traction?">
            Month 1 slower than Month 2/3; algorithm variance is normal; winners get remixed and re-seeded.
          </Item>
          <Item title="Can we republish winners?">
            Yes. Remix/edit swaps avoid duplicates; rotation every 21–30 days or cross-seed to sister pages.
          </Item>
          <Item title="Do thumbnails matter for shorts?">
            Yes—emotion + curiosity headline (3–5 words). Instagram gets designed thumbs; others pick best frame.
          </Item>
        </Card>
      </div>
    </section>
  );
}

// --- Main App Component (from Proposal.jsx) ---
export default function RajSocialSEO() {
  return (
    <div className="bg-gray-900 font-sans leading-relaxed text-white min-h-screen">
      
      {/* --- Animated background + grain (PRD 3.1) --- */}
      <div className="fixed inset-0 z-0 overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-black animated-gradient"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/grain.png)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* --- Foreground (PRD 3.1) --- */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          {/* StrategyToggle component removed */}
          <Architecture />
          <Language />
          <ContentBuckets />
          <VolumePlans />
          <PageCulling />
          <ReaderJourney />
          <Team />
          <FAQ />
          {/* No CTA/Next Steps section per spec */}
        </main>
        
        <footer className="py-12 text-center text-sm text-white/50 print:text-black/50">
            <p>Raj Shamani Social SEO Proposal | Designed for Mass Short-Form Distribution.</p>
            {/* Specified line removed */}
        </footer>
      </div>

      {/* --- Global Styles & Keyframes (PRD 3.2 & 6) --- */}
      <style>{`
        .animated-gradient {
          background: radial-gradient(
              circle at 10% 20%,
              rgba(128, 0, 128, 0.4),
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 90%,
              rgba(0, 0, 255, 0.4),
              transparent 50%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 25, 25, 0.3),
              transparent 50%
            );
          background-size: 250% 250%;
          animation: moveGradient 25s ease infinite;
        }
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Print Styles for PDF/Print-friendly output (PRD 6) */
        @media print {
            body {
                background: white !important;
                color: black !important;
                -webkit-print-color-adjust: exact; /* Ensure background colors are printed for tables/cards */
                print-color-adjust: exact;
            }
            .fixed {
                display: none !important; /* Hide fixed background */
            }
            header {
                position: relative !important; /* Unfix header */
                background: white !important;
                box-shadow: none !important;
                padding: 0.5rem 0 !important;
            }
            h1, h2, h3, h4, p, li, strong {
                color: black !important;
            }
            [class*="text-white/70"], [class*="text-white/80"], [class*="text-white/90"] {
                color: #333 !important; /* Darker text for readability */
            }
            [class*="bg-black/20"], [class*="bg-white/10"], [class*="bg-white/5"] {
                background-color: #f0f0f0 !important; /* Lighter, solid background for frosted cards */
                backdrop-filter: none !important;
                filter: none !important;
                border: 1px solid #ccc !important;
            }
            table, th, td {
                border-color: #555 !important;
            }
            [class*="bg-white/10"] { /* Total row background */
                background-color: #ddd !important;
            }
        }
      `}</style>
    </div>
  );
}

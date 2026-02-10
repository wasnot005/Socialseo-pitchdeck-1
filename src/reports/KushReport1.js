import React, { useState, useEffect } from "react";

/**
 * Kush 30-Day Report – PPT-style Landing Page
 * Based on the provided PRD.
 */

// ——— Custom Styles (from index.css) ———————————————————
const CustomStyles = () => (
  <style>{`
    body { 
      margin: 0; 
      -webkit-font-smoothing: antialiased; 
      -moz-osx-font-smoothing: grayscale; 
    }
    code { 
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; 
    }

    /* Animated background gradient removed (handled globally) */
  `}</style>
);

// ——— Helper Components ———————————————————————————————
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const StatChip = ({ label, value }) => (
  <span className="inline-flex items-center gap-1 bg-white/10 text-white/90 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-2 soft-wrap">
    <span className="text-white/60">{label}</span>
    <span className="text-white nowrap-numbers">{value}</span>
  </span>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-black/20 backdrop-blur-2xl rounded-2xl p-4 md:p-8 border border-white/10 shadow-lg ${className}`}>
    {title && <h3 className="soft-wrap text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">{title}</h3>}
    {children}
  </div>
);

// Count-up for hero KPIs
const NumberCounter = ({ value, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const end = typeof value === "number" ? value : 0;
    let raf; const start = performance.now(); const dur = 900;
    const loop = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.floor(end * p));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div>
      <p className="text-5xl font-black text-indigo-400 tracking-tight">{count.toLocaleString()}{suffix}</p>
      <p className="text-white/70 mt-1">{label}</p>
    </div>
  );
};

// ——— Data (can be moved to a JSON or CMS) ————————————————
const data = {
  kpis: {
    viewsLiftX: 5, // ~5-7x; show lower bound for honesty
    discoveryNonFollowers: 95, // 95-99%
    keep3sHigh: 59,
    follows: 2,
  },
  beforeAfter: [
    { metric: "Avg views / reel", before: "~200-300", after: "~1,200-1,500 (winners); ~180-200 (lows)" },
    { metric: "Discovery mix", before: "—", after: ">95% non-followers (Reels/Explore)" },
    { metric: "First-3s keep", before: "—", after: "~59% highs; ~18% lows" },
    { metric: "Saves / Shares", before: "—", after: "Saves low; shares spike on news/stakes" },
    { metric: "Follows from content", before: "—", after: "Minimal (conversion gap)" },
  ],
  highlights: [
    {
      title: "Deloitte caught red-handed (19 Oct)",
      rationale: "Timely, clear stakes, on-camera authority",
      stats: { views: 1493, interactions: 40, shares: 9, saves: 2, keep3s: "~59%", sources: "Reels 79%, Explore 17%" },
    },
    {
      title: "Build your individual empire (13 Oct)",
      rationale: "Direct benefit headline + snappy edit",
      stats: { views: 1374, interactions: 26, shares: 9, saves: 6, keep3s: "58.5%", sources: "Reels 84.5%" },
    },
    {
      title: "Google Cloud $15B AI hub (22 Oct)",
      rationale: "Big number + national context",
      stats: { views: 1251, interactions: 30, shares: 9, saves: 2, keep3s: "~59%", sources: "Reels/Explore" },
    },
    {
      title: "ChatGPT might kill Search (12 Oct)",
      rationale: "Provocative claim → implication",
      stats: { views: 1497, interactions: 30, shares: 2, saves: 2, keep3s: "52.7%", sources: "—" },
    },
  ],
  baselines: [
    { title: "SEO isn’t enough 2025 (≤1 Oct)", stats: { views: 193, keep3s: "17.6%", avgWT: "3s" } },
    { title: "My mistakes (≤1 Oct)", stats: { views: 178, avgWT: "~9m total" } },
    { title: "₹15L, 1 closure (≤1 Oct)", stats: { views: 181, avgWT: "14m total" } },
  ],
  appendix: [
    ["19 Oct", "Deloitte caught red-handed", 1493, 40, 2, 9, "~59%", "—", "Reels 79%, Explore 17%"],
    ["13 Oct", "Build your empire now", 1374, 26, 6, 9, "58.5%", "12s", "Reels 84.5%"],
    ["22 Oct", "Google $15B hub", 1251, 30, 2, 9, "~59%", "10s", "—"],
    ["12 Oct", "ChatGPT vs Search", 1497, 30, 2, 2, "52.7%", "~7s", "2 follows"],
    ["≤1 Oct", "SEO isn’t enough", 193, 5, 0, 0, "17.6%", "3s", "Baseline"],
    ["≤1 Oct", "My mistakes", 178, 4, 0, 0, "—", "~9m total", "Baseline"],
    ["≤1 Oct", "₹15L, 1 closure", 181, 3, 0, 0, "—", "14m total", "Baseline"],
  ],
};

// ——— Sections ————————————————————————————————————————
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4 bg-transparent">
    <div className="container mx-auto flex justify-start items-center">
      <img src="/logo.png" alt="Kush Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    </div>
  </header>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center text-center text-white pt-24 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="soft-wrap text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight md:tracking-tighter leading-tight md:leading-[0.95] mb-3">
        Kush – 30-Day Performance Report
      </h1>
      <p className="soft-wrap text-base sm:text-lg md:text-2xl text-white/80 mb-8 md:mb-12">
        Founder-led content with AI avatar (v2 ready) – presentation deck on a page.
      </p>

      {/* Hero KPI Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto text-left">
        <Card className="bg-black/10">
          <NumberCounter value={data.kpis.viewsLiftX} suffix="x" label="Views Lift (vs baseline)" />
        </Card>
        <Card className="bg-black/10">
          <NumberCounter value={data.kpis.discoveryNonFollowers} suffix="%" label="Discovery (Non-Followers)" />
        </Card>
        <Card className="bg-black/10">
          <NumberCounter value={data.kpis.keep3sHigh} suffix="%" label="3-sec Keep (Highs)" />
        </Card>
        <Card className="bg-black/10">
          <NumberCounter value={data.kpis.follows} label="Follows (from 1.5k view)" />
        </Card>
      </div>

      <div className="mt-10 md:mt-16 max-w-4xl mx-auto text-left space-y-3 md:space-y-4 soft-wrap">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 md:mb-6">Core Objectives</h3>
        <p className="text-base sm:text-lg text-white/80 flex items-start leading-relaxed">
          <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
          Keep the <strong>news + stakes</strong> lane hot; tighten founder lessons.
        </p>
        <p className="text-base sm:text-lg text-white/80 flex items-start leading-relaxed">
          <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
          Convert reach → follows via save prompts and an end-card CTA.
        </p>
        <p className="text-base sm:text-lg text-white/80 flex items-start leading-relaxed">
          <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
          Validate <strong>Avatar v2</strong> with a <strong>50/50 AI : Real</strong> mix.
        </p>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8">Before → After</h2>
      <p className="soft-wrap text-base sm:text-lg text-white/70 max-w-3xl mx-auto text-center mb-8 md:mb-12">
        Posts from <strong>1 Oct and earlier</strong> were produced by Kush’s team (baseline). Posts after 1 Oct are with us.
      </p>
      <Card className="p-0 md:p-0">
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-[640px] sm:w-full text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-3 sm:p-4">Metric</th>
                <th className="p-3 sm:p-4">Baseline (≤ 1 Oct)</th>
                <th className="p-3 sm:p-4">With us (post 1 Oct)</th>
              </tr>
            </thead>
            <tbody>
              {data.beforeAfter.map((row) => (
                <tr key={row.metric} className="border-b border-white/10 last:border-b-0">
                  <td className="p-3 sm:p-4 font-semibold">{row.metric}</td>
                  <td className="p-3 sm:p-4 soft-wrap">{row.before}</td>
                  <td className="p-3 sm:p-4 soft-wrap">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </section>
);

const Highlights = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Top Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
        {data.highlights.map((h) => (
          <Card key={h.title}>
            <div className="flex flex-col gap-3">
              <h3 className="soft-wrap text-xl sm:text-2xl font-bold">{h.title}</h3>
              <div>
                <StatChip label="Views" value={h.stats.views} />
                <StatChip label="Interactions" value={h.stats.interactions} />
                <StatChip label="Shares" value={h.stats.shares} />
                <StatChip label="Saves" value={h.stats.saves} />
                <StatChip label="3s Keep" value={h.stats.keep3s} />
                {h.stats.sources !== "—" && <StatChip label="Sources" value={h.stats.sources} />}
              </div>
              <p className="soft-wrap text-white/70 text-sm sm:text-base leading-relaxed">Why it worked: {h.rationale}.</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Baselines = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Baseline Examples (≤ 1 Oct)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
        {data.baselines.map((b) => (
          <Card key={b.title}>
            <h3 className="soft-wrap text-lg sm:text-xl font-bold mb-2">{b.title}</h3>
            <div>
              <StatChip label="Views" value={b.stats.views} />
              {b.stats.keep3s && <StatChip label="3s Keep" value={b.stats.keep3s} />}
              {b.stats.avgWT && <StatChip label="Avg/Total WT" value={b.stats.avgWT} />}
            </div>
            <p className="soft-wrap text-white/70 mt-3 text-sm sm:text-base leading-relaxed">Pattern: broad hook + soft opening → lower retention.</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const WorkingVsNot = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">What’s Working / What’s Not</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
        <Card title="Working">
          <ul className="space-y-2 text-white/80 soft-wrap text-sm sm:text-base leading-relaxed">
            <li className="flex items-start"><Icon path="M4.5 12.75l6 6 9-13.5" className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" /><strong>News with stakes + numbers</strong> (“caught red-handed”, “$15B hub”).</li>
            <li className="flex items-start"><Icon path="M4.5 12.75l6 6 9-13.5" className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" /><strong>Real on-camera</strong> delivery for hooks & closes.</li>
            <li className="flex items-start"><Icon path="M4.5 12.75l6 6 9-13.5" className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" /><strong>Direct benefit</strong> headlines; clear payoffs.</li>
          </ul>
        </Card>
        <Card title="Not Working">
          <ul className="space-y-2 text-white/80 soft-wrap text-sm sm:text-base leading-relaxed">
            <li className="flex items-start"><Icon path="M6 18L18 6M6 6l12 12" className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />Avatar v1 perception (uncanny lip-sync, flat voice).</li>
            <li className="flex items-start"><Icon path="M6 18L18 6M6 6l12 12" className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />Over-broad topics without a sharp first 2-second payoff.</li>
            <li className="flex items-start"><Icon path="M6 18L18 6M6 6l12 12" className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />Saves under-used; prompts missing.</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const NextMoves = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Next Moves (Short)</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <Card title="Introduce Carousels">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Next batch includes <strong>carousels</strong>: deep-dive context per news item (what happened → why it matters → 3 actions). Cross-post to IG & LinkedIn to boost <strong>saves</strong>.</p>
        </Card>
        <Card title="50/50 AI : Real">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Shift from 80/20 to <strong>50/50</strong> to isolate avatar impact. Monitor <strong>3-sec keep</strong> and <strong>saves</strong> between variants.</p>
        </Card>
        <Card title="Conversion Nudges">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Add a mid-card <strong>Save for later</strong> frame and end-card <strong>Follow</strong> CTA + pinned takeaway comment.</p>
        </Card>
      </div>
    </div>
  </section>
);

const AvatarPlan = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">AI Avatar v2 Status & Guardrails</h2>
      <p className="soft-wrap text-base sm:text-lg text-white/70 max-w-3xl mx-auto text-center mb-8 md:mb-12">
        Status: <span className="font-semibold text-white bg-green-500/20 px-2 py-0.5 rounded">Ready</span> (pronunciation tweaks in progress). Until parity is proven, use <strong>Hybrid</strong> rules.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <Card title="Hybrid Usage">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Hook & Close = <strong>Real Kush</strong>. Explainer mid-section = <strong>Avatar</strong>. No heavy emotion on avatar until validated.</p>
        </Card>
        <Card title="Quality Gates">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Check lip-sync, micro-pauses, and de-essing. Fail fast: if 3-sec keep drops ≥5 pts vs real, revert to real.</p>
        </Card>
        <Card title="A/B Protocol">
          <p className="soft-wrap text-white/80 text-sm sm:text-base leading-relaxed">Run 6 posts (3 pairs). Success = <strong>no drop</strong> in 3-sec keep and <strong>+saves</strong> on avatar or hybrid.</p>
        </Card>
      </div>
    </div>
  </section>
);

const AppendixTable = () => (
  <section className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Appendix: Post-level Stats</h2>
      <Card className="p-0 md:p-0">
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="min-w-[760px] sm:min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-2 sm:p-3">Date</th>
                <th className="p-2 sm:p-3">Title</th>
                <th className="p-2 sm:p-3 text-right nowrap-numbers">Views</th>
                <th className="p-2 sm:p-3 text-right nowrap-numbers">Interactions</th>
                <th className="p-2 sm:p-3 text-right nowrap-numbers">Saves</th>
                <th className="p-2 sm:p-3 text-right nowrap-numbers">Shares</th>
                <th className="p-2 sm:p-3 text-right nowrap-numbers">3s Keep</th>
                <th className="p-2 sm:p-3">Avg WT</th>
                <th className="p-2 sm:p-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {data.appendix.map((r, i) => (
                <tr key={i} className="border-b border-white/10 last:border-b-0">
                  <td className="p-2 sm:p-3 whitespace-nowrap">{r[0]}</td>
                  <td className="p-2 sm:p-3 soft-wrap">{r[1]}</td>
                  <td className="p-2 sm:p-3 text-right nowrap-numbers">{r[2].toLocaleString()}</td>
                  <td className="p-2 sm:p-3 text-right nowrap-numbers">{r[3]}</td>
                  <td className="p-2 sm:p-3 text-right nowrap-numbers">{r[4]}</td>
                  <td className="p-2 sm:p-3 text-right nowrap-numbers">{r[5]}</td>
                  <td className="p-2 sm:p-3 text-right nowrap-numbers">{r[6]}</td>
                  <td className="p-2 sm:p-3 soft-wrap">{r[7]}</td>
                  <td className="p-2 sm:p-3 soft-wrap">{r[8]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </section>
);

const NextSteps = () => (
  <section id="next-steps" className="py-16 sm:py-20 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="soft-wrap text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Next Steps</h2>
      <div className="max-w-2xl mx-auto text-left space-y-4 md:space-y-6">
        {[
          <>
            Approve direction + greenlight <strong>carousels</strong>.
          </>,
          <>
            Provide <strong>real-face</strong> hooks/closers for the <strong>50/50 AI : Real</strong> test.
          </>,
          <>
            Roll pronunciation tweaks for <strong>Avatar v2</strong>; start A/B posts (6).
          </>,
        ].map((item, index) => (
          <div key={index} className="flex items-center bg-black/20 p-4 rounded-lg border border-white/10 gap-3">
            <div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
              {index + 1}
            </div>
            <p className="soft-wrap text-base sm:text-lg text-white/90">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ——— Page Shell with Animated Background ——————————————
export default function KushReport1() {
  useEffect(() => {
    const pageTitle = "Kush – 30-Day Performance Report";
    document.title = pageTitle;

    const ensureMeta = (selector, attributes) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        document.head.appendChild(element);
      }
      element.setAttribute("content", pageTitle);
    };

    ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
  }, []);

  return (
    <div className="font-sans leading-relaxed text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Embed Custom Styles */}
      <CustomStyles />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <BeforeAfter />
          <Highlights />
          <Baselines />
          <WorkingVsNot />
          <NextMoves />
          <AvatarPlan />
          <AppendixTable />
          <NextSteps />
        </main>

        {/* Footer */}
        <footer className="text-center py-10 text-white/50">
          <div className="container mx-auto px-4">
            <p>30-Day Performance Report. Prepared for Kush.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}


import React, { useState } from 'react';

// --- Shared UI Primitives ---

const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const CheckIcon = ({ color = "text-green-400" }) => (
    <Icon path="M4.5 12.75l6 6 9-13.5" className={`w-4 h-4 ${color} mt-0.5 flex-shrink-0`} />
);

const Section = ({ children, className = "" }) => (
    <section className={`py-14 md:py-20 px-4 ${className}`}>
        <div className="container mx-auto max-w-5xl">{children}</div>
    </section>
);

const Card = ({ children, className = "" }) => (
    <div className={`bg-black/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg ${className}`}>
        {children}
    </div>
);

const Tag = ({ children, color = "indigo" }) => {
    const colors = {
        indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
        purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        green:  "bg-green-500/10 text-green-300 border-green-500/20",
        amber:  "bg-amber-500/10 text-amber-300 border-amber-500/20",
    };
    return (
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${colors[color]}`}>
            {children}
        </span>
    );
};

// --- Header ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto max-w-5xl">
            <div className="px-6 py-3 rounded-full flex items-center justify-between"
                style={{
                    background: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.37)'
                }}>
                <div className="text-white font-bold text-sm tracking-wider">SOCIAL SEO</div>
                <div className="text-gray-400 text-xs tracking-wider uppercase">Source Code Lab — Content Plan</div>
            </div>
        </div>
    </header>
);

// --- Hero ---

const Hero = () => (
    <Section className="pt-36 md:pt-44 text-center">
        <div className="inline-flex mb-6">
            <Tag color="indigo">Confidential Strategy Document</Tag>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Source Code Lab<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                Content Strategy
            </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building Kush Desai's authority at the intersection of iGaming operations and AI automation — the only founder in India owning both.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
                { label: "Reels / Month", val: "12" },
                { label: "Posting Cadence", val: "Daily" },
                { label: "Platforms", val: "2" },
                { label: "Content Buckets", val: "4" },
            ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-extrabold text-white mb-1">{item.val}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</div>
                </div>
            ))}
        </div>
    </Section>
);

// --- Positioning ---

const Positioning = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="purple">The Unfair Advantage</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">One Person. Two Worlds.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Kush is the only Indian founder who has built and operated real iGaming platforms and now consults businesses on AI automation. That dual credibility is the content strategy.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-indigo-500 bg-gradient-to-br from-indigo-900/20 to-black/20">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mr-3">
                        <Icon path="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">iGaming Operator</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Built and operated online casinos and sportsbooks. Lived the challenges of compliance, fraud, player retention, and platform scale from the inside.
                </p>
                <div className="text-xs text-indigo-300 font-medium">Source Code Lab main business</div>
            </Card>

            <Card className="border-l-4 border-purple-500 bg-gradient-to-br from-purple-900/20 to-black/20">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                        <Icon path="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI Automation Consultant</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Now deploying the same operational knowledge to help Indian businesses eliminate manual work, reduce headcount costs, and scale without adding people.
                </p>
                <div className="text-xs text-purple-300 font-medium">New consulting arm — India-first</div>
            </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/10 to-blue-900/20 border-white/10 text-center">
            <p className="text-white font-medium text-lg">
                The content strategy is not "iGaming tips" or "AI tips." It is the story of a founder who operates at the frontier of both — and that combination has no competition in India.
            </p>
        </Card>
    </Section>
);

// --- Content Pillars ---

const pillars = [
    {
        num: "01",
        title: "Regulation and Compliance",
        color: "indigo",
        accent: "border-indigo-500",
        bg: "from-indigo-900/20",
        topics: [
            "India's Online Gaming Act 2025 and what it means for operators",
            "Navigating skill-game vs. RMG classification",
            "Multi-jurisdiction compliance strategies",
            "Supreme Court rulings and their business impact",
        ],
        hook: '"The regulation change everyone missed — and how it changes your business."',
    },
    {
        num: "02",
        title: "Technology and Platform",
        color: "blue",
        accent: "border-blue-500",
        bg: "from-blue-900/20",
        topics: [
            "Casino-sportsbook convergence (LTV impact)",
            "Fast games explosion: crash, dice, plinko, mines",
            "Mobile-first optimization and onboarding friction",
            "Live dealer and streaming integration",
        ],
        hook: '"We cut player onboarding from 5 minutes to 90 seconds. Here is what changed."',
    },
    {
        num: "03",
        title: "AI, Fraud, and Cybersecurity",
        color: "purple",
        accent: "border-purple-500",
        bg: "from-purple-900/20",
        topics: [
            "AI fraud detection: how platforms reduced losses by 30%",
            "Real-time anomaly detection and bonus abuse prevention",
            "Account takeover and bot mitigation",
            "Player safety and responsible gaming infrastructure",
        ],
        hook: '"Your competitor is losing 40% of profit to fraud. They do not know it yet."',
    },
    {
        num: "04",
        title: "Growth and Revenue Mechanics",
        color: "green",
        accent: "border-green-500",
        bg: "from-green-900/20",
        topics: [
            "LTV optimization frameworks from an operator",
            "AI-personalized bonuses, missions, and retention",
            "Player acquisition vs. retention: the real math",
            "Conversion rate optimization from first click to deposit",
        ],
        hook: '"We increased LTV by 50% with one change. Nobody talks about this."',
    },
];

const ContentPillars = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="indigo">Content Architecture</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">4 Content Pillars</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
                Every piece of content maps to one of these pillars. Together they position Kush as the definitive iGaming operator voice in India.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
                <Card key={i} className={`border-l-4 ${p.accent} bg-gradient-to-br ${p.bg} to-black/10`}>
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="text-gray-600 text-xs font-bold tracking-widest mb-1">{p.num}</div>
                            <h3 className="text-xl font-bold text-white">{p.title}</h3>
                        </div>
                    </div>
                    <ul className="space-y-2 mb-5">
                        {p.topics.map((t, ti) => (
                            <li key={ti} className="flex items-start text-sm text-gray-300">
                                <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 mr-3 flex-shrink-0"></div>
                                {t}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sample Hook</div>
                        <p className="text-sm text-gray-300 italic">{p.hook}</p>
                    </div>
                </Card>
            ))}
        </div>
    </Section>
);

// --- Posting Rhythm ---

const calendar = [
    { day: "Mon", type: "Reel", pillar: "Regulation", color: "indigo" },
    { day: "Tue", type: "Carousel", pillar: "Industry News", color: "purple" },
    { day: "Wed", type: "Reel", pillar: "Technology", color: "blue" },
    { day: "Thu", type: "Carousel", pillar: "Growth Mechanics", color: "green" },
    { day: "Fri", type: "Reel", pillar: "AI and Fraud", color: "purple" },
    { day: "Sat", type: "Carousel", pillar: "Trend Breakdown", color: "indigo" },
    { day: "Sun", type: "Rest", pillar: "", color: "gray" },
    { day: "Mon", type: "Reel", pillar: "Growth Mechanics", color: "green" },
    { day: "Tue", type: "Carousel", pillar: "Regulation Update", color: "indigo" },
    { day: "Wed", type: "Reel", pillar: "Technology", color: "blue" },
    { day: "Thu", type: "Carousel", pillar: "AI and Fraud", color: "purple" },
    { day: "Fri", type: "Reel", pillar: "Founder Insight", color: "amber" },
    { day: "Sat", type: "Carousel", pillar: "Industry Data", color: "green" },
    { day: "Sun", type: "Rest", pillar: "", color: "gray" },
    { day: "Mon", type: "Reel", pillar: "Regulation", color: "indigo" },
];

const colorMap = {
    indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
    purple: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    blue:   "bg-blue-500/15 text-blue-300 border-blue-500/20",
    green:  "bg-green-500/15 text-green-300 border-green-500/20",
    amber:  "bg-amber-500/15 text-amber-300 border-amber-500/20",
    gray:   "bg-white/5 text-gray-600 border-white/5",
};

const PostingRhythm = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="purple">Posting Calendar</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">15-Day Posting Rhythm</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
                Reels and carousels alternate daily, keeping the page active every day without burning out the creator.
            </p>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-8 gap-2 mb-8">
            {calendar.map((day, i) => (
                <div key={i} className={`rounded-xl p-3 border text-center ${colorMap[day.color]}`}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">{day.day}</div>
                    <div className="text-sm font-bold mb-1">{day.type}</div>
                    {day.pillar && <div className="text-xs opacity-70 leading-tight">{day.pillar}</div>}
                </div>
            ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">12</div>
                <div className="text-gray-400 text-sm">Reels per month</div>
                <div className="text-xs text-indigo-400 mt-1">3 per week</div>
            </Card>
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">12</div>
                <div className="text-gray-400 text-sm">Carousels per month</div>
                <div className="text-xs text-purple-400 mt-1">AI-generated (Plan B)</div>
            </Card>
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">24+</div>
                <div className="text-gray-400 text-sm">Total posts per month</div>
                <div className="text-xs text-green-400 mt-1">Near-daily presence</div>
            </Card>
        </div>
    </Section>
);

// --- Execution System ---

const ExecutionSystem = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="green">How We Execute</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">What We Handle. What You Do.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-500/20 bg-gradient-to-br from-green-900/10 to-black/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Social SEO Handles
                </h3>
                <ul className="space-y-3">
                    {[
                        "Topic research and pillar mapping every month",
                        "Hook scripting for each Reel (word-for-word 30-60s)",
                        "Video editing with captions and branding",
                        "SEO-optimized title, description, and hashtags",
                        "Carousel design using AI workflow (Plan B)",
                        "Scheduling and posting on your page",
                        "Monthly performance review and strategy update",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                            <CheckIcon color="text-green-400" />
                            <span className="ml-2">{item}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card className="border-indigo-500/20 bg-gradient-to-br from-indigo-900/10 to-black/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    Kush Does
                </h3>
                <ul className="space-y-3">
                    {[
                        "One recording block per week (30-45 minutes)",
                        "Camera, mic, good lighting",
                        "Deliver the scripted hook, then speak naturally",
                        "Upload raw file same day",
                        "Record client audit calls going forward (future case study content)",
                        "Approve carousel topics and carousel copy before publish",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                            <CheckIcon color="text-indigo-400" />
                            <span className="ml-2">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Workflow</div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {["Topic Lock", "Hook Script", "Record", "Edit", "Carousel", "Post", "Review"].map((s, i) => (
                            <React.Fragment key={i}>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{s}</span>
                                {i < 6 && <span className="text-gray-700 text-xs">›</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    </Section>
);

// --- Carousel Agent Explainer (Plan B) ---

const CarouselAgent = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="purple">Plan B Exclusive</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">AI Carousel Engine</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Every carousel is produced by an automated pipeline that scrapes live iGaming news, writes visual prompts for your brand style, and generates slide images — hands-free.
            </p>
        </div>

        <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/10 border-purple-500/20">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                {[
                    { step: "01", label: "News Scraper", desc: "Pulls latest iGaming and AI news daily" },
                    { step: "02", label: "Topic Selection", desc: "LLM picks the 3 best carousel topics" },
                    { step: "03", label: "Visual Prompt Writing", desc: "LLM writes 6-slide prompts in your brand style" },
                    { step: "04", label: "Image Generation", desc: "Nano Banana API generates all slides" },
                    { step: "05", label: "Review and Post", desc: "You approve, we schedule" },
                ].map((s, i) => (
                    <React.Fragment key={i}>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs font-bold mx-auto mb-2">
                                {s.step}
                            </div>
                            <div className="text-white text-sm font-bold">{s.label}</div>
                            <div className="text-gray-500 text-xs max-w-24 mx-auto mt-1 leading-tight">{s.desc}</div>
                        </div>
                        {i < 4 && <div className="text-gray-700 text-xl hidden md:block">›</div>}
                    </React.Fragment>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-center">
                    <div className="text-2xl font-bold text-white mb-1">12-15</div>
                    <div className="text-gray-400 text-xs">Carousels generated per month</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Consistent</div>
                    <div className="text-gray-400 text-xs">Brand style across every slide</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-center">
                    <div className="text-2xl font-bold text-white mb-1">0 hrs</div>
                    <div className="text-gray-400 text-xs">Your time spent on carousel creation</div>
                </div>
            </div>
        </Card>
    </Section>
);

// --- Investment Toggle ---

const Investment = () => {
    const [plan, setPlan] = useState('b');

    const planA = {
        name: "Plan A",
        subtitle: "Reels Only",
        price: "₹45,000",
        color: "from-indigo-900 to-blue-900",
        border: "border-indigo-500/30",
        items: [
            "12 Reels per month (3 per week)",
            "Hook script for every Reel",
            "Editing with captions and brand treatment",
            "SEO-optimized title and description",
            "Platform scheduling and posting",
            "Monthly strategy and topic planning",
        ],
        extras: [],
    };

    const planB = {
        name: "Plan B",
        subtitle: "Reels + Full Page Management",
        price: "₹70,000",
        color: "from-purple-900 to-indigo-900",
        border: "border-purple-500/30",
        items: [
            "12 Reels per month (3 per week)",
            "Hook script for every Reel",
            "Editing with captions and brand treatment",
            "SEO-optimized title and description",
            "Platform scheduling and posting",
            "Monthly strategy and topic planning",
        ],
        extras: [
            "12-15 AI-generated carousels per month",
            "Alternate-day posting (near-daily presence)",
            "Live iGaming news topic research (automated)",
            "Brand-consistent visual generation via AI pipeline",
            "Full page management and scheduling",
        ],
    };

    const active = plan === 'a' ? planA : planB;

    return (
        <Section className="pb-32">
            <h2 className="text-4xl font-extrabold text-white text-center mb-10">Investment and Scope</h2>

            <div className="flex justify-center mb-10">
                <div className="bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10 inline-flex">
                    <button
                        onClick={() => setPlan('a')}
                        className={`px-7 py-3 rounded-full text-sm font-bold transition-all ${plan === 'a' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Plan A — Reels Only
                    </button>
                    <button
                        onClick={() => setPlan('b')}
                        className={`px-7 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${plan === 'b' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-gray-400 hover:text-white'}`}
                    >
                        Plan B — Full Page
                        <span className="text-[10px] bg-indigo-800/60 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-600/50">REC</span>
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-3">
                    <Card className="h-full">
                        <h3 className="text-2xl font-bold text-white mb-2">{active.name}</h3>
                        <p className="text-gray-400 text-sm mb-6">{active.subtitle}</p>
                        <ul className="space-y-3">
                            {active.items.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm">
                                    <CheckIcon color="text-green-400" />
                                    <span className="ml-2">{item}</span>
                                </li>
                            ))}
                            {active.extras.length > 0 && (
                                <>
                                    <li className="pt-4 border-t border-white/10">
                                        <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-3">Plan B Additions</div>
                                    </li>
                                    {active.extras.map((item, i) => (
                                        <li key={i} className="flex items-start text-purple-200 text-sm">
                                            <CheckIcon color="text-purple-400" />
                                            <span className="ml-2">{item}</span>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <div className={`bg-gradient-to-br ${active.color} rounded-2xl p-8 border ${active.border} text-center shadow-2xl relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")' }}></div>
                        <div className="relative z-10">
                            <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-3">Monthly Investment</div>
                            <div className="text-5xl font-extrabold text-white mb-1">
                                {active.price}
                                <span className="text-xl font-medium text-indigo-300">/mo</span>
                            </div>
                            <p className="text-sm text-indigo-200/70 mb-8">Pause or cancel anytime.</p>

                            {plan === 'b' && (
                                <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
                                    <div className="text-xs text-gray-400 mb-2">Includes AI Carousel Engine</div>
                                    <div className="text-white text-sm font-medium">12-15 carousels per month, fully automated, zero manual work from your side</div>
                                </div>
                            )}

                            <div className="mt-4 pt-4 border-t border-white/10">
                                <div className="text-xs font-bold text-white flex items-center justify-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                    30-Day Pilot Review Included
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="mt-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">What We Guarantee</div>
                        <ul className="space-y-2">
                            {[
                                "Consistent weekly output, no gaps",
                                "Hook scripting and delivery coaching",
                                "Full SEO packaging on every post",
                                "30-day pilot review meeting",
                            ].map((g, i) => (
                                <li key={i} className="flex items-center text-xs text-gray-400">
                                    <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                                    {g}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

// --- Next Steps ---

const NextSteps = () => (
    <Section className="mb-20">
        <Card className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border-indigo-500/20 text-center">
            <Tag color="indigo">To Begin</Tag>
            <h2 className="text-3xl font-bold text-white mt-4 mb-4">Starting This Together</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Once we align on the plan, here is what happens in the first 7 days.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
                {[
                    { step: "Day 1-2", action: "Topic bank built from your niche, pillars mapped, hook bank prepared" },
                    { step: "Day 3-4", action: "First 4 Reel scripts delivered for your review and recording" },
                    { step: "Day 5-7", action: "Recording session, editing begins, carousel pipeline set up (Plan B)" },
                ].map((s, i) => (
                    <div key={i} className="bg-black/30 rounded-xl p-4 border border-white/5">
                        <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">{s.step}</div>
                        <div className="text-gray-300 text-sm">{s.action}</div>
                    </div>
                ))}
            </div>
            <p className="text-gray-500 text-xs">Confidential. Prepared by Social SEO for Source Code Lab.</p>
        </Card>
    </Section>
);

// --- Main Export ---

export default function KushContentPlan() {
    return (
        <div className="font-sans text-slate-200">
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <Positioning />
                    <ContentPillars />
                    <PostingRhythm />
                    <ExecutionSystem />
                    <CarouselAgent />
                    <Investment />
                    <NextSteps />
                </main>
                <footer className="py-12 text-center text-gray-600 text-xs">
                    2026 Social SEO. Confidential Strategy Document.
                </footer>
            </div>
        </div>
    );
}

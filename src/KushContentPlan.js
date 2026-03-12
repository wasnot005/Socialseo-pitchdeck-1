import React, { useState } from 'react';

// Shared UI Primitives

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

// Header

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
                <div className="text-gray-400 text-xs tracking-wider uppercase">Source Code Lab / Content Plan</div>
            </div>
        </div>
    </header>
);

// Hero

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
            A content plan for the Source Code Lab company page. Kush Desai as the face, speaking directly to the iGaming niche audience.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
                { label: "Reels / Month", val: "15" },
                { label: "Posting Cadence", val: "Daily" },
                { label: "Content Pillars", val: "4" },
            ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-extrabold text-white mb-1">{item.val}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</div>
                </div>
            ))}
        </div>
    </Section>
);

// Positioning

const Positioning = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="purple">The Angle</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">Company Page. Founder's Face.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Source Code Lab gets its own dedicated content page with Kush on camera. Every video speaks directly to iGaming ICPs: operators, platform owners, gaming entrepreneurs, and industry decision-makers.
            </p>
        </div>

        <Card className="bg-gradient-to-r from-indigo-900/20 via-purple-900/10 to-blue-900/20 border-white/10 text-center">
            <p className="text-white font-medium text-lg">
                The content strategy is built around speaking to the niche. Every Reel is designed to reach operators, platform builders, and iGaming professionals who are looking for someone who has actually been in the trenches.
            </p>
        </Card>
    </Section>
);

// Content Pillars

const pillars = [
    {
        num: "01",
        title: "Regulation and Compliance",
        color: "indigo",
        accent: "border-indigo-500",
        bg: "from-indigo-900/20",
        topics: [
            "Global regulatory landscape: UK, EU, US state-by-state, Asia-Pacific",
            "Navigating skill-game vs. RMG classification across jurisdictions",
            "Multi-jurisdiction compliance strategies for operators",
            "Licensing updates and what they mean for new entrants",
        ],
        hook: '"The regulation change everyone missed. Here is how it changes your business."',
    },
    {
        num: "02",
        title: "Technology and Platform",
        color: "blue",
        accent: "border-blue-500",
        bg: "from-blue-900/20",
        topics: [
            "Casino-sportsbook convergence (LTV impact up to 50%)",
            "Fast games explosion: crash, dice, plinko, mines",
            "Mobile-first optimization and onboarding friction",
            "Live dealer and streaming integration trends",
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
            "Account takeover and bot mitigation at scale",
            "Player safety and responsible gaming infrastructure",
        ],
        hook: '"Your competitor is losing 40% of profit to fraud. They do not know it yet."',
    },
    {
        num: "04",
        title: "Growth, Predictions, and Markets",
        color: "green",
        accent: "border-green-500",
        bg: "from-green-900/20",
        topics: [
            "LTV optimization frameworks from an operator's lens",
            "Player acquisition vs. retention: the real math",
            "Prediction markets: the next frontier for iGaming platforms",
            "Market trends: where the $650B+ industry is heading next",
        ],
        hook: '"Prediction markets will be bigger than sports betting. Here is why."',
    },
];

const ContentPillars = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="indigo">Content Architecture</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">4 Content Pillars</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
                Every piece of content maps to one of these pillars. Together they position Source Code Lab as the definitive operator voice in the iGaming space.
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

// 30-Day Posting Calendar (alternate Reel/Carousel, no rest on Sunday)

const generateCalendar = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const reelPillars = [
        "Regulation", "Technology", "AI / Fraud", "Growth", "Predictions",
        "Regulation", "Technology", "AI / Fraud", "Growth", "Predictions",
        "Regulation", "Technology", "AI / Fraud", "Growth", "Predictions",
    ];
    const carouselPillars = [
        "Market Trends", "Compliance Update", "Platform Tech", "Fraud Prevention", "Industry Data",
        "Regulation News", "Growth Metrics", "Prediction Markets", "Operator Insights", "Cybersecurity",
        "Global Licensing", "Fast Games", "Player Safety", "Revenue Tactics", "Market Outlook",
    ];

    let reelIdx = 0;
    let carouselIdx = 0;
    const cal = [];

    for (let d = 1; d <= 30; d++) {
        const dayName = days[(d - 1) % 7];
        const isReel = d % 2 === 1; // odd days = Reel, even days = Carousel
        if (isReel) {
            cal.push({ day: d, dayName, type: "Reel", pillar: reelPillars[reelIdx % reelPillars.length], color: "blue" });
            reelIdx++;
        } else {
            cal.push({ day: d, dayName, type: "Carousel", pillar: carouselPillars[carouselIdx % carouselPillars.length], color: "purple" });
            carouselIdx++;
        }
    }
    return cal;
};

const calendarData = generateCalendar();

const colorMap = {
    blue:   "bg-blue-500/15 text-blue-300 border-blue-500/20",
    purple: "bg-purple-500/15 text-purple-300 border-purple-500/20",
};

const PostingRhythm = () => (
    <Section>
        <div className="text-center mb-12">
            <Tag color="purple">Posting Calendar</Tag>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-4">30-Day Posting Plan</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
                Reels and carousels alternate daily. No rest days. 15 Reels, 15 carousels, every single day covered.
            </p>
        </div>

        <div className="flex gap-3 justify-center mb-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-blue-500/40 border border-blue-500/30"></div>
                <span className="text-xs text-blue-300 font-medium">Reel</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-purple-500/40 border border-purple-500/30"></div>
                <span className="text-xs text-purple-300 font-medium">Carousel</span>
            </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 md:gap-2 mb-8">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                <div key={i} className="text-center text-xs text-gray-600 font-bold uppercase tracking-wider pb-1">{d}</div>
            ))}

            {/* offset for day 1 starting on correct weekday */}
            {calendarData.map((day, i) => (
                <div key={i} className={`rounded-lg p-2 md:p-3 border text-center ${colorMap[day.color]}`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5 opacity-50">Day {day.day}</div>
                    <div className="text-xs md:text-sm font-bold mb-0.5">{day.type}</div>
                    <div className="text-[10px] opacity-70 leading-tight hidden md:block">{day.pillar}</div>
                </div>
            ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-blue-300 mb-1">15</div>
                <div className="text-gray-400 text-sm">Reels per month</div>
            </Card>
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-purple-300 mb-1">15</div>
                <div className="text-gray-400 text-sm">Carousels per month</div>
            </Card>
            <Card className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">30</div>
                <div className="text-gray-400 text-sm">Total posts per month</div>
                <div className="text-xs text-green-400 mt-1">Daily posting</div>
            </Card>
        </div>
    </Section>
);

// Investment Toggle

const Investment = () => {
    const [plan, setPlan] = useState('a');

    const planA = {
        name: "Plan A",
        subtitle: "Reels Only",
        price: "45,000",
        color: "from-indigo-900 to-blue-900",
        border: "border-indigo-500/30",
        items: [
            "15 Reels per month (alternate days)",
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
        subtitle: "Reels + Carousels (Full Page)",
        price: "55,000",
        color: "from-purple-900 to-indigo-900",
        border: "border-purple-500/30",
        items: [
            "15 Reels per month (alternate days)",
            "Hook script for every Reel",
            "Editing with captions and brand treatment",
            "SEO-optimized title and description",
            "Platform scheduling and posting",
            "Monthly strategy and topic planning",
        ],
        extras: [
            "15 carousels per month (alternate days with Reels)",
            "Daily posting cadence across the full month",
            "Carousel topic research and copywriting",
            "Full page management and scheduling",
        ],
    };

    const active = plan === 'a' ? planA : planB;

    return (
        <Section className="pb-32">
            <h2 className="text-4xl font-extrabold text-white text-center mb-10">Investment</h2>

            <div className="flex justify-center mb-10">
                <div className="bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10 inline-flex">
                    <button
                        onClick={() => setPlan('a')}
                        className={`px-7 py-3 rounded-full text-sm font-bold transition-all ${plan === 'a' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Plan A / Reels Only
                    </button>
                    <button
                        onClick={() => setPlan('b')}
                        className={`px-7 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${plan === 'b' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-gray-400 hover:text-white'}`}
                    >
                        Plan B / Full Page
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
                                <span className="text-2xl font-medium text-indigo-300 mr-1">₹</span>
                                {active.price}
                                <span className="text-xl font-medium text-indigo-300">/mo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

// Main Export

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
                    <Investment />
                </main>
                <footer className="py-12 text-center text-gray-600 text-xs">
                    2026 Social SEO. Confidential Strategy Document.
                </footer>
            </div>
        </div>
    );
}

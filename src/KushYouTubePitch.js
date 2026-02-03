import React, { useState } from 'react';

// --- Shared UI Components ---

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// Check: Icon used by list items
const CheckIcon = () => (
    <Icon path="M4.5 12.75l6 6 9-13.5" className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
);

// Card: Glassmorphism container
const Card = ({ title, children, className = "" }) => (
    <div
        className={`bg-black bg-opacity-20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white border-opacity-10 shadow-lg ${className}`}
    >
        {title && <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>}
        {children}
    </div>
);

// Section Wrapper
const Section = ({ children, className = "" }) => (
    <section className={`py-12 md:py-20 px-4 ${className}`}>
        <div className="container mx-auto max-w-5xl">{children}</div>
    </section>
);

// Header
const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center max-w-5xl">
            <div
                className="px-6 py-3 rounded-full flex items-center w-full justify-between"
                style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.125)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
            >
                <div className="text-white font-bold text-lg tracking-wider">SOCIAL SEO</div>
            </div>
        </div>
    </header>
);

// Hero Section
const Hero = () => (
    <Section className="pt-32 md:pt-40 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
            YouTube Growth <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-indigo-400">
                System
            </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Instagram = Discovery. <br className="md:hidden" />
            <span className="text-white font-medium">YouTube = Trust + Authority + Conversion.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
                { label: "Cadence", val: "1 Longform/wk" },
                { label: "Format", val: "Deep Dive" },
                { label: "Packaging", val: "Thumbnails + SEO" },
                { label: "Review", val: "Weekly Sprint" },
            ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white font-bold">{item.val}</div>
                </div>
            ))}
        </div>
    </Section>
);

// Core Principle
const CorePrinciple = () => (
    <Section>
        <Card className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
                <h3 className="text-indigo-400 font-bold tracking-widest text-sm uppercase">The Engine</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Instagram vs. YouTube</h2>
                <p className="text-gray-300 leading-relaxed">
                    Most creators try to use YouTube for discovery. We use it for <span className="text-white font-bold">depth</span>.
                </p>
            </div>
            <div className="grid gap-4">
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-6 rounded-xl border-l-4 border-purple-500">
                    <h4 className="text-white font-bold mb-2 flex items-center">
                        <Icon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5 mr-2" />
                        Instagram (Daily)
                    </h4>
                    <p className="text-sm text-gray-300">Discovery, Hooks, Social Proof, "Go Deeper" CTA.</p>
                </div>
                <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 p-6 rounded-xl border-l-4 border-red-500">
                    <h4 className="text-white font-bold mb-2 flex items-center">
                        <Icon path="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" className="w-5 h-5 mr-2" />
                        YouTube (Weekly)
                    </h4>
                    <p className="text-sm text-gray-300">Trust, Authority, Frameworks, "Buy Now" CTA.</p>
                </div>
            </div>
        </Card>
    </Section>
);

// Pillars & Formats
const PillarsAndFormats = () => (
    <Section>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-3xl font-bold text-white mb-8">Content Pillars</h2>
                <div className="space-y-4">
                    {[
                        "Kush’s Journey & Backstory",
                        "iGaming x Growth Mechanics",
                        "Cybersecurity + Trust Infrastructure",
                        "Sales + Lead Generation Systems",
                        "Startup & Entrepreneurship Nuance"
                    ].map((pillar, i) => (
                        <div key={i} className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 border border-white/5 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm mr-4">
                                {i + 1}
                            </span>
                            <span className="text-white font-medium">{pillar}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-white mb-8">Winning Formats</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { title: "How I'd Do X", desc: "Hypothetical strategy breakdowns" },
                        { title: "My Mistakes", desc: "Vulnerability = Trust" },
                        { title: "The Playbook", desc: "Step-by-step tutorials" },
                        { title: "Hot Takes", desc: "Contrarian opinions with reasoning" },
                        { title: "Case Studies", desc: "Real numbers, real results" },
                        { title: "Why This Worked", desc: "Analyzing market wins" }
                    ].map((fmt, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/5">
                            <h4 className="text-indigo-300 font-bold text-sm mb-1">{fmt.title}</h4>
                            <p className="text-gray-400 text-xs">{fmt.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

// Cadence & Leading Indicators
const Outcomes = () => (
    <Section>
        <div className="grid lg:grid-cols-3 gap-8">
            <Card title="90-Day Goals" className="lg:col-span-1 border-t-4 border-t-indigo-500">
                <ul className="space-y-6">
                    <li className="block">
                        <div className="text-gray-400 text-sm mb-1">Follower Growth (Simulated)</div>
                        <div className="text-3xl font-bold text-white">9k → 25k</div>
                        <div className="text-xs text-indigo-300 mt-1">High-intent followers</div>
                    </li>
                    <li className="block">
                        <div className="text-gray-400 text-sm mb-1">Content Depth</div>
                        <div className="text-2xl font-bold text-white">12+ Assets</div>
                        <div className="text-xs text-gray-500 mt-1">Foundational library built</div>
                    </li>
                    <li className="block">
                        <div className="text-gray-400 text-sm mb-1">Authority Signal</div>
                        <div className="text-white font-medium">"I saw your video and..."</div>
                        <div className="text-xs text-gray-500 mt-1">Qualitative DM metric</div>
                    </li>
                </ul>
            </Card>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card title="The Cadence" className="bg-white/5">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                            <div>
                                <div className="text-white font-bold">1 Deep Dive / Week</div>
                                <div className="text-sm text-gray-400">8–15 minutes, high value</div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></div>
                            <div>
                                <div className="text-white font-bold">IG Repurposing</div>
                                <div className="text-sm text-gray-400">2–5 Reels derived from main (Option B)</div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></div>
                            <div>
                                <div className="text-white font-bold">Packaging</div>
                                <div className="text-sm text-gray-400">3 Thumbnails + SEO per video</div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card title="Leading Indicators" className="bg-white/5">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="text-gray-300">Shorts Retention</span>
                            <span className="text-green-400 font-bold">70%+</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="text-gray-300">Longform AVD</span>
                            <span className="text-green-400 font-bold">35–45%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="text-gray-300">Click-Through Rate</span>
                            <span className="text-green-400 font-bold">4%+</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">IG Saves</span>
                            <span className="text-green-400 font-bold">Rising Trend</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
);

// Execution System
const ExecutionSystem = () => (
    <Section>
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-white text-center mb-4">The Execution System</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                How we move from idea to published asset without burning you out.
            </p>
        </div>

        {/* Workflow Pipeline Viz */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 opacity-80">
            {["Topic Lock", "Hook Script", "Recording", "Edit", "Packaging", "Publish", "Iterate"].map((step, i) => (
                <React.Fragment key={i}>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium text-white whitespace-nowrap">
                        {step}
                    </div>
                    {i < 6 && <div className="text-gray-500">→</div>}
                </React.Fragment>
            ))}
        </div>

        <Card className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm mr-3">●</span>
                        Recording System
                    </h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="text-indigo-400 font-bold">01</div>
                            <div>
                                <div className="text-white font-bold">Topic & Hook</div>
                                <div className="text-sm text-gray-400">We verify the topic and write a <span className="text-white">word-for-word 30-60s hook</span> for you.</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-indigo-400 font-bold">02</div>
                            <div>
                                <div className="text-white font-bold">Natural Delivery</div>
                                <div className="text-sm text-gray-400">You deliver the hook, then transition into your natural expertise/points.</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-indigo-400 font-bold">03</div>
                            <div>
                                <div className="text-white font-bold">Minimal Friction</div>
                                <div className="text-sm text-gray-400">Aim for teaching style. Use screen share/mini-deck if helpful.</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-indigo-400 font-bold">04</div>
                            <div>
                                <div className="text-white font-bold">Packaging</div>
                                <div className="text-sm text-gray-400">We handle titles, thumbnails, and SEO.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-4">Your Checklist</h4>
                    <ul className="space-y-3">
                        {[
                            "1 recording block per week (60-90 min)",
                            "Webcam + Mic (Good lighting)",
                            "Screen share tool (if needed)",
                            "Upload raw files same day",
                            "Review thumbnail options (A/B)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-300">
                                <CheckIcon />
                                <span className="ml-2">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    </Section>
);

// Calendar V1
const Calendar = () => {
    const weeks = [
        { topic: "The Untold Story of iGaming", shorts: ["Money flow visualized", "Regulatory gap explained", "Simulated bet"] },
        { topic: "Modern Cybersecurity Flaws", shorts: ["Password fallacy", "2FA bypass demo", "Enterprise risk"] },
        { topic: "Sales Systems for Startups", shorts: ["Lead gen myth", "Cold outreach script", "Closing tactic"] },
        { topic: "Why I Bet on YouTube", shorts: ["IG vs YT ROI", "Asset vs Feed", "Creator Economy shift"] }
    ];

    return (
        <Section>
            <h2 className="text-3xl font-bold text-white mb-8">4-Week Launch Calendar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {weeks.map((week, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
                        <div className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-3">Week 0{i + 1}</div>
                        <h4 className="text-xl font-bold text-white mb-4 leading-snug">{week.topic}</h4>
                        <div className="border-t border-white/10 pt-4">
                            <div className="text-xs text-gray-500 uppercase mb-2">Shorts Concepts</div>
                            <ul className="text-sm text-gray-400 space-y-1">
                                {week.shorts.map((s, si) => <li key={si}>• {s}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

// Plan Selector & Investment
const Investment = () => {
    const [plan, setPlan] = useState('repurpose'); // 'basic' or 'repurpose'

    return (
        <Section className="pb-32">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8">Investment & Scope</h2>

            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10 inline-flex relative">
                    <button
                        onClick={() => setPlan('basic')}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${plan === 'basic' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Longform Only
                    </button>
                    <button
                        onClick={() => setPlan('repurpose')}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center ${plan === 'repurpose' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-gray-400 hover:text-white'}`}
                    >
                        Longform + Repurpose
                        <span className="ml-2 text-[10px] bg-indigo-800 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-600">REC</span>
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">

                {/* Deliverables List */}
                <div className="md:col-span-3">
                    <Card className="h-full">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {plan === 'basic' ? "Option A: Foundation" : "Option B: Authority Engine"}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-200">
                                <CheckIcon />
                                <span className="ml-3">4 Longform Videos / Month (Scripting, Editing, Publishing)</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <CheckIcon />
                                <span className="ml-3">Strategic Hook Scripting (30-60s)</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <CheckIcon />
                                <span className="ml-3">3 Thumbnails per video (A/B Testing)</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <CheckIcon />
                                <span className="ml-3">SEO Optimization (Title, Tags, Description)</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <CheckIcon />
                                <span className="ml-3">Weekly Strategy & Review Support</span>
                            </li>

                            {plan === 'repurpose' && (
                                <>
                                    <li className="flex items-start text-indigo-300 font-medium pt-4 border-t border-white/10 mt-4">
                                        <CheckIcon />
                                        <span className="ml-3">8-12 Repurposed IG Reels / Month</span>
                                    </li>
                                    <li className="flex items-start text-indigo-300 font-medium">
                                        <CheckIcon />
                                        <span className="ml-3">Short-form optimized editing (Retention focus)</span>
                                    </li>
                                    <li className="flex items-start text-indigo-300 font-medium">
                                        <CheckIcon />
                                        <span className="ml-3">"Go Deeper" Call-To-Action integration</span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </Card>
                </div>

                {/* Pricing Card */}
                <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 border border-white/20 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grain.png')] opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-2">Monthly Investment</div>
                            <div className="text-5xl font-extrabold text-white mb-2">
                                {plan === 'basic' ? "₹35k" : "₹50k"}
                                <span className="text-xl font-medium text-indigo-300">/mo</span>
                            </div>
                            <p className="text-sm text-indigo-200 mb-8 opacity-80">Pause or cancel anytime.</p>


                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="text-xs font-bold text-white flex items-center justify-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                    30-Day Pilot Review Period Included
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

// Next Steps & Pilot
const NextSteps = () => (
    <Section className="mb-20" id="next-steps">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-bold text-white mb-6">What We Guarantee</h3>
                <ul className="space-y-3">
                    {[
                        " consistent weekly output",
                        "Hook scripting + delivery coaching",
                        "Packaging: titles, thumbnails, SEO",
                        "Weekly iteration loop",
                        "30-day pilot review meeting"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-gray-400 mb-6">What We Don't</h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-500">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></div>
                        Exact subscriber/view forecasts
                    </li>
                    <li className="flex items-center text-gray-500">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></div>
                        Viral outcomes (Outcome is a lagging indicator)
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-20 text-center">

            <p className="text-gray-500 mt-6 text-sm">Target Start: Immediately upon topic approval.</p>
        </div>
    </Section>
);

// Main Layout
export default function KushYouTubePitch() {
    return (
        <div className="bg-gray-900 font-sans leading-relaxed text-white min-h-screen selection:bg-indigo-500 selection:text-white">
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-black animated-gradient"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "url(https://www.transparenttextures.com/patterns/grain.png)",
                        mixBlendMode: "overlay",
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <CorePrinciple />
                    <PillarsAndFormats />
                    <Outcomes />
                    <Calendar />
                    <ExecutionSystem />
                    <Investment />
                    <NextSteps />
                </main>

                <footer className="py-12 text-center text-gray-600 text-xs">
                    © 2026 Social SEO. Confidential Strategy Document.
                </footer>
            </div>

            {/* Use local style for simple override if needed, but relying on index.css for animation */}
        </div>
    );
}

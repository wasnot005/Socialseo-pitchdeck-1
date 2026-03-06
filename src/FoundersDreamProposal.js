import React, { useState } from "react";
import { Card } from "./components/ui";

// --- Helper ---
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- Header ---
const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent pointer-events-none">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
            <span className="font-bold tracking-tight">Social SEO</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
            <span className="text-sm font-medium text-white/80">TFD Proposal</span>
        </div>
    </header>
);

// --- Hero ---
const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
                Social SEO × The Founders Dream
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">
                A fan page engine that turns 1,800 minutes of podcast footage into tens of thousands of posts across YouTube, Instagram, Facebook, Twitter & TikTok.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto text-left">
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Footage</h4><p className="text-white/70">1,800 min raw content/mo</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Platforms</h4><p className="text-white/70">YT, IG, FB, Twitter & TikTok</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Mode</h4><p className="text-white/70">Fan page network + Unique clips</p></Card>
            </div>
        </div>
    </section>
);

// --- The Problem ---
const TheProblem = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                1,800 minutes of content. Only 100 clips make it out.
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                Clients deserve more than 6 short videos on one Instagram account with 23K followers. 94% of content never reaches an audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <Card className="border-red-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-red-400">Today</h3>
                    <ul className="space-y-3 text-white/80">
                        <li>• 20+ episodes/month, only ~100 clips total</li>
                        <li>• 1 Instagram account (23K followers)</li>
                        <li>• Zero fan pages on any platform</li>
                        <li>• No presence on YT Shorts, FB Reels, Twitter or TikTok</li>
                        <li>• <b>94% of content wasted</b>, never reaches an audience</li>
                        <li>• Guest visibility ends within 48 hours</li>
                    </ul>
                </Card>
                <Card className="border-green-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-green-400">Competitors</h3>
                    <ul className="space-y-3 text-white/80">
                        <li>• 30+ fan pages across all platforms</li>
                        <li>• Each clip posted on 5 platforms simultaneously</li>
                        <li>• 10,000+ content pieces/month through fan network</li>
                        <li>• Millions of organic impressions, zero ad spend</li>
                        <li>• Guest content lives and compounds forever</li>
                        <li>• Every major Hindi business podcast does this</li>
                    </ul>
                </Card>
            </div>
        </div>
    </section>
);

// --- What Changes ---
const WhatChanges = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Changes for 60+ Clients</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                Every guest's episode becomes a distribution event across a network of fan pages. This is what they get to promise their clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card>
                    <p className="text-white/50 line-through text-sm mb-1">6 reels</p>
                    <p className="text-3xl font-black text-indigo-400 mb-2">50,000+</p>
                    <p className="text-white/70">Posts / month</p>
                </Card>
                <Card>
                    <p className="text-white/50 line-through text-sm mb-1">1 IG account</p>
                    <p className="text-3xl font-black text-indigo-400 mb-2">1,000</p>
                    <p className="text-white/70">Fan pages across 5 platforms</p>
                </Card>
                <Card>
                    <p className="text-white/50 line-through text-sm mb-1">23K reach</p>
                    <p className="text-3xl font-black text-indigo-400 mb-2">100M+</p>
                    <p className="text-white/70">Monthly impressions</p>
                </Card>
            </div>
        </div>
    </section>
);

// --- How It Works ---
const HowItWorks = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Distribution Works</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                Every podcast episode goes through a pipeline. Each clip is uniquely edited. Every fan page has its own brand identity.
            </p>
        </div>
        <div className="container mx-auto px-4">
            <Card>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                    {[
                        { step: "1", title: "1 Episode", sub: "90 min raw footage" },
                        { step: "2", title: "20 to 50 Unique Clips", sub: "Each freshly edited with different hooks" },
                        { step: "3", title: "× 5 Platforms", sub: "YT + IG + FB + Twitter + TikTok" },
                        { step: "4", title: "× Fan Pages", sub: "Each page = different niche & brand" },
                        { step: "5", title: "Top 10% Remixed", sub: "7 derivatives per winner" },
                    ].map((s) => (
                        <div key={s.step} className="p-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                            <h4 className="font-bold text-lg mb-1">{s.title}</h4>
                            <p className="text-white/70 text-sm">{s.sub}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card title="Per Episode Math">
                    <table className="w-full text-left">
                        <tbody>
                            {[
                                ["Raw footage", "90 min"],
                                ["Unique clips", "20 to 50"],
                                ["× 5 platforms", "100 to 250 posts"],
                                ["× fan pages", "1,000 to 2,500 posts"],
                            ].map(([l, r]) => (
                                <tr key={l} className="border-b border-white/10 last:border-b-0">
                                    <td className="p-3 text-white/70">{l}</td>
                                    <td className="p-3 font-bold text-right">{r}</td>
                                </tr>
                            ))}
                            <tr className="bg-white/10">
                                <td className="p-3 font-bold">1 episode =</td>
                                <td className="p-3 font-black text-right text-indigo-400 text-lg">1,000 to 2,500 posts</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
                <Card title="Per Month Math (20 Episodes)">
                    <table className="w-full text-left">
                        <tbody>
                            {[
                                ["Unique clips", "2,000 to 10,000"],
                                ["× 5 platforms", "10K to 50K"],
                                ["× fan pages", "×2 to 5 multiplier"],
                                ["+ remixes (top 10%)", "+4K to 10K"],
                            ].map(([l, r]) => (
                                <tr key={l} className="border-b border-white/10 last:border-b-0">
                                    <td className="p-3 text-white/70">{l}</td>
                                    <td className="p-3 font-bold text-right">{r}</td>
                                </tr>
                            ))}
                            <tr className="bg-white/10">
                                <td className="p-3 font-bold">Monthly total</td>
                                <td className="p-3 font-black text-right text-indigo-400 text-lg">20K to 60K+</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    </section>
);

// --- What "Unique" Means ---
const UniqueExplainer = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <Card title='What "Unique Clips" Means'>
                <p className="text-white/80 mb-6">Every single clip we make is a fresh, unique edit, not a repost. Each fan page has its own brand identity.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Per Clip</h4>
                        <ul className="text-white/70 text-sm space-y-1">
                            <li>• Different hook / opening</li>
                            <li>• Different text overlay & captions</li>
                            <li>• Unique thumbnail</li>
                            <li>• Page specific branding & watermark</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Per Fan Page</h4>
                        <ul className="text-white/70 text-sm space-y-1">
                            <li>• Own name, bio, profile picture</li>
                            <li>• Niche focus (Startups, Finance, Motivation, etc.)</li>
                            <li>• Own posting schedule & content mix</li>
                            <li>• Clearly marked as fan page</li>
                        </ul>
                    </div>
                </div>
                <p className="text-white/50 text-sm mt-6 p-3 bg-white/5 rounded-lg">
                    <b>Redistribution</b> = the same unique clip posted across multiple platforms (YT + IG + FB + Twitter + TikTok). Not the same as reposting the same video on the same platform.
                </p>
            </Card>
        </div>
    </section>
);


// --- Volume Plans (3 Plans) ---
const VolumePlans = () => {
    const plans = [
        {
            name: "Full Domination",
            tag: "Maximum Scale",
            tagColor: "bg-red-500",
            clips: "10,000",
            pages: "1,000",
            postsPerMonth: "50K to 60K",
            daily: "1,600 to 2,000",
            team: "18+ editors, 20+ SMMs, 8 page managers",
            bestFor: "100M+ impressions/month. Total market ownership.",
            note: "Phased rollout: 100 → 300 → 1,000 pages over 3 to 5 months",
            rows: [
                { niche: "Business/Startup", pages: 300, cadence: "2 to 3/day", posts: "18,000 to 27,000" },
                { niche: "Finance/Investing", pages: 200, cadence: "2 to 3/day", posts: "12,000 to 18,000" },
                { niche: "Motivation/Mindset", pages: 200, cadence: "2 to 3/day", posts: "12,000 to 18,000" },
                { niche: "Podcast Highlights", pages: 150, cadence: "1 to 2/day", posts: "4,500 to 9,000" },
                { niche: "Common/Trending", pages: 150, cadence: "2 to 4/day", posts: "9,000 to 18,000" },
            ],
        },
        {
            name: "Scale Network",
            tag: "Best Value",
            tagColor: "bg-purple-500",
            clips: "5,000",
            pages: "200 to 300",
            postsPerMonth: "25K to 35K",
            daily: "800 to 1,200",
            team: "10 editors, 8 SMMs, 5 page managers",
            bestFor: "50M+ impressions. Build the moat before competitors copy.",
            rows: [
                { niche: "Business/Startup", pages: 80, cadence: "2 to 3/day", posts: "4,800 to 7,200" },
                { niche: "Finance/Investing", pages: 60, cadence: "2 to 3/day", posts: "3,600 to 5,400" },
                { niche: "Motivation/Mindset", pages: 60, cadence: "2 to 3/day", posts: "3,600 to 5,400" },
                { niche: "Podcast Highlights", pages: 50, cadence: "1 to 2/day", posts: "1,500 to 3,000" },
                { niche: "Common/Trending", pages: 50, cadence: "2 to 4/day", posts: "3,000 to 6,000" },
            ],
        },
        {
            name: "Growth Engine",
            tag: "⭐ Recommended",
            tagColor: "bg-indigo-500",
            clips: "2,000",
            pages: "25",
            postsPerMonth: "14K to 17K",
            daily: "450 to 560",
            team: "5 editors, 3 SMMs, 1 account manager",
            bestFor: "25M+ impressions. Low risk, high upside. Results in 30 days.",
            note: "Start here. Scale to 200+ pages based on Month 1 results.",
            rows: [
                { niche: "Business/Startup", pages: 8, cadence: "2 to 3/day", posts: "480 to 720" },
                { niche: "Finance/Investing", pages: 5, cadence: "2 to 3/day", posts: "300 to 450" },
                { niche: "Motivation/Mindset", pages: 5, cadence: "2 to 3/day", posts: "300 to 450" },
                { niche: "Podcast Highlights", pages: 4, cadence: "1 to 2/day", posts: "120 to 240" },
                { niche: "Common/Trending", pages: 3, cadence: "2 to 4/day", posts: "180 to 360" },
            ],
        },
    ];

    const [active, setActive] = useState(2); // default to recommended

    return (
        <section id="the-plan" className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Volume Plans</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-8">
                    Three configurations. Each includes unique clip production + fan page network + redistribution across YouTube, Instagram, Facebook, Twitter & TikTok.
                </p>

                {/* Plan Selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {plans.map((p, i) => (
                        <button key={i} onClick={() => setActive(i)}
                            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all ${active === i ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                            <span className={`inline-block ${p.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-2`}>{p.tag}</span>
                            {p.name}
                        </button>
                    ))}
                </div>

                {/* Active Plan Detail */}
                {(() => {
                    const p = plans[active];
                    return (
                        <>
                            {/* Summary Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <Card className="text-center"><p className="text-white/50 text-sm">Unique Clips / Month</p><p className="text-3xl font-black text-indigo-400">{p.clips}</p></Card>
                                <Card className="text-center"><p className="text-white/50 text-sm">Fan Pages</p><p className="text-3xl font-black text-indigo-400">{p.pages}</p></Card>
                                <Card className="text-center"><p className="text-white/50 text-sm">Total Posts / Month</p><p className="text-3xl font-black text-indigo-400">{p.postsPerMonth}</p></Card>
                                <Card className="text-center"><p className="text-white/50 text-sm">Daily Posting Rate</p><p className="text-3xl font-black text-indigo-400">{p.daily}</p></Card>
                            </div>

                            {/* Breakdown Table */}
                            <Card title={`${p.name} — Page Breakdown`}>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left table-auto">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="p-4 min-w-[10rem]">Niche</th>
                                                <th className="p-4 min-w-[6rem]"># Pages</th>
                                                <th className="p-4 min-w-[6rem]">Cadence</th>
                                                <th className="p-4 min-w-[8rem] text-right">Posts / Month</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {p.rows.map((row) => (
                                                <tr key={row.niche} className="border-b border-white/10 last:border-b-0">
                                                    <td className="p-4 font-bold">{row.niche}</td>
                                                    <td className="p-4">{row.pages}</td>
                                                    <td className="p-4">{row.cadence}</td>
                                                    <td className="p-4 font-bold text-right">{row.posts}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-white/10">
                                                <td className="p-4 font-black text-lg" colSpan={3}>Total</td>
                                                <td className="p-4 font-black text-lg text-right">{p.postsPerMonth}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {p.note && <p className="text-white/50 text-sm mt-4 p-3 bg-white/5 rounded-lg">{p.note}</p>}
                            </Card>

                            {/* Team */}
                            <Card className="mt-6" title="Team Required">
                                <p className="text-white/80">{p.team}</p>
                                <p className="text-white/50 text-sm mt-2"><b>Best for:</b> {p.bestFor}</p>
                            </Card>
                        </>
                    );
                })()}

                <p className="text-center text-white/50 text-sm mt-8">
                    Pricing is custom, based on scale, budget, and barter arrangement. Discussed on call.
                </p>
            </div>
        </section>
    );
};

// --- Guest Value Upgrade ---
const GuestUpgrade = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What This Means for Your 60+ Clients</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                Your deliverable to each guest upgrades from "a few clips on Instagram" to "distribution across a 100M+ impression network."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-left">
                <Card><h3 className="text-xl font-bold mb-2">Premium Positioning</h3><p className="text-white/70">Guest stories across hundreds of pages on 5 platforms.</p></Card>
                <Card><h3 className="text-xl font-bold mb-2">Higher Guest Fees</h3><p className="text-white/70">"Your episode reaches 100M+ impressions." That justifies ₹2L+.</p></Card>
                <Card><h3 className="text-xl font-bold mb-2">More Applications</h3><p className="text-white/70">Founders see the distribution reach. Your waitlist grows.</p></Card>
                <Card><h3 className="text-xl font-bold mb-2">Competitive Moat</h3><p className="text-white/70">No other Hindi business podcast has this. Once built, it compounds.</p></Card>
            </div>
        </div>
    </section>
);

// --- FAQ ---
const FAQ = () => {
    const Item = ({ title, children }) => {
        const [open, setOpen] = useState(false);
        return (
            <div className="border-b border-white/20 last:border-b-0">
                <button className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
                    onClick={() => setOpen(!open)}>
                    <span className="text-xl font-bold">{title}</span>
                    <Icon path={open ? "M19.5 12h-15" : "M12 4.5v15m7.5-7.5h-15"} className="w-6 h-6" />
                </button>
                {open && <div className="pb-4 px-2 text-white/80">{children}</div>}
            </div>
        );
    };

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h2>
                <Card className="max-w-4xl mx-auto">
                    <Item title="Unique clips or reposts?">
                        Every clip is a unique, freshly edited piece with a different hook, text, and thumbnail. Redistribution = the same unique clip posted across multiple fan pages and platforms. Not a repost.
                    </Item>
                    <Item title="What does each fan page have?">
                        Its own name, bio, profile picture, niche focus, and posting schedule. Each page is a distinct brand targeting a specific audience.
                    </Item>
                    <Item title="Paid media or ads?">
                        No. 100% organic distribution through fan pages. Zero ad spend.
                    </Item>
                    <Item title="Won't fan pages dilute the brand?">
                        Opposite. Each page targets a different niche. Your brand becomes discoverable where it wasn't before.
                    </Item>
                    <Item title="How fast to results?">
                        Core pages live in Week 1. Posting by Week 2. Full capacity by Month 2. 1,000 page plan scales from 100 → 300 → 1,000 over 3 to 5 months.
                    </Item>
                    <Item title="Platform compliant?">
                        Fully. No bots, no fake engagement, no scraping. All original content, pages clearly marked as fan pages.
                    </Item>
                    <Item title="Barter arrangement?">
                        Open to hybrid pricing. Podcast mentions & IG stories credit value against monthly fee. Details on call.
                    </Item>
                </Card>
            </div>
        </section>
    );
};

// --- Main ---
export default function FoundersDreamProposal() {
    return (
        <div className="font-sans leading-relaxed text-white min-h-screen">
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <TheProblem />
                    <WhatChanges />
                    <HowItWorks />
                    <UniqueExplainer />
                    <VolumePlans />
                    <GuestUpgrade />
                    <FAQ />
                </main>
                <footer className="py-12 text-center text-sm text-white/50">
                    <p>The Founders Dream × Social SEO | Fan Page Distribution Engine</p>
                </footer>
            </div>
        </div>
    );
}


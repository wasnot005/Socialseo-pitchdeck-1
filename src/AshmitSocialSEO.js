import React, { useState } from "react";
import AshmitPagePlanTable from "./components/AshmitPagePlanTable";
import AshmitNicheGlossary from "./components/AshmitNicheGlossary";
import { Card } from "./components/ui";

// --- Helper UI Components ---
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- Header Component ---
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent backdrop-blur-sm print:relative print:shadow-none print:backdrop-blur-none">
            <div className="container mx-auto flex justify-start items-center">
                <div className="text-xl font-bold tracking-tight text-white/90">
                    <span className="text-indigo-400">Social</span> SEO Proposal
                </div>
            </div>
        </header>
    );
}

// --- Hero Section ---
const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
            <div className="container mx-auto px-4">
                <p className="text-lg md:text-xl text-indigo-400 font-semibold mb-4 tracking-wide uppercase">
                    Social SEO × Better Version Podcast
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
                    Ashmit Shahi
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-6">
                    A fan page distribution engine for the Better Version Podcast.
                </p>
                <p className="text-md md:text-lg text-white/60 max-w-2xl mx-auto mb-12">
                    229+ videos. Zero fan pages. Thousands of unclipped moments sitting idle.<br />
                    Let's turn every episode into a distribution machine.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto text-left">
                    <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Focus</h4><p className="text-white/70">Better Version Podcast</p></Card>
                    <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Objective</h4><p className="text-white/70">Mass podcast clip distribution</p></Card>
                    <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Mode</h4><p className="text-white/70">All-Platforms (5 channels)</p></Card>
                    <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Content</h4><p className="text-white/70">Business, Entrepreneurship, Growth</p></Card>
                </div>
            </div>
        </section>
    );
}

// --- The Problem Section ---
const Problem = () => {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Untapped Opportunity</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                    Your content library is massive. Your distribution is not.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <Card className="text-center">
                        <div className="text-4xl font-black text-indigo-400 mb-2">229+</div>
                        <p className="text-white/70">YouTube Videos</p>
                        <p className="text-white/50 text-sm mt-1">Each with 10-15 clippable moments</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-black text-purple-400 mb-2">26K</div>
                        <p className="text-white/70">Instagram Followers</p>
                        <p className="text-white/50 text-sm mt-1">Strong engagement at 1.69%</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-black text-pink-400 mb-2">0</div>
                        <p className="text-white/70">Fan Pages</p>
                        <p className="text-white/50 text-sm mt-1">Zero clip distribution network</p>
                    </Card>
                    <Card className="text-center">
                        <div className="text-4xl font-black text-green-400 mb-2">43K</div>
                        <p className="text-white/70">Top Video Views</p>
                        <p className="text-white/50 text-sm mt-1">Content already resonates</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}

// --- How It Works Section ---
const HowItWorks = () => {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">How Social SEO Works</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                    We don't ask you to create more content. We distribute what you already have — at scale.
                </p>
                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { step: "1", title: "Clip", desc: "We extract 10-15 high-impact moments from every podcast episode" },
                            { step: "2", title: "Redistribute", desc: "Each clip is posted across 12 fan pages with varied hooks & captions" },
                            { step: "3", title: "Cross-Platform", desc: "Every post goes to 5 platforms: IG Reels, YT Shorts, FB, TikTok, LinkedIn" },
                            { step: "4", title: "Remix Winners", desc: "Top 10% of clips get 7 remix derivatives — new hooks, thumbnails, formats" },
                            { step: "5", title: "Optimize", desc: "80/20 culling: kill underperformers, double down on winners" },
                        ].map((item) => (
                            <Card key={item.step} className="flex items-start gap-4 text-left">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-black text-lg">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-white/70">{item.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Architecture (3-Tier Network) ---
const Architecture = () => {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Architecture: 3-Tier Fan Page Network</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                    T1 = quality anchors, T2 = scale & testing, T3 = experimentation & virality. All pages source content from Better Version Podcast.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="hover:border-indigo-400 transition-colors">
                        <span className="inline-block bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 1</span>
                        <h3 className="text-2xl font-bold mb-2">Flagship (3 pages)</h3>
                        <p className="text-white/70">
                            Core podcast clips, business insights, personal branding wisdom. Format: <b>story-first cuts</b>, minimal captions, clean graphics. Cadence <b>1–2/day/page</b>.
                        </p>
                    </Card>
                    <Card className="hover:border-purple-400 transition-colors">
                        <span className="inline-block bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 2</span>
                        <h3 className="text-2xl font-bold mb-2">Scale (5 pages)</h3>
                        <p className="text-white/70">
                            Entrepreneurship, content marketing, growth strategy, guest highlights. Cadence <b>2–3/day/page</b>. Test <b>text hooks</b>, A/B titles, thumbnails.
                        </p>
                    </Card>
                    <Card className="hover:border-pink-400 transition-colors">
                        <span className="inline-block bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 3</span>
                        <h3 className="text-2xl font-bold mb-2">Experimental (4 pages)</h3>
                        <p className="text-white/70">
                            Viral hooks, listicles, quote graphics, trending business takes. Cadence <b>3–4/day/page</b>. High experimentation, format discovery.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}

// --- Content Strategy ---
const ContentStrategy = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <Card title="Content Strategy: Redistribute, Don't Recreate">
                    <p className="text-white/70 mb-6">
                        We're not creating hundreds of unique videos. We're taking your existing podcast content and distributing it at massive scale across a fan page network.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/5 p-4 rounded-lg text-center">
                            <div className="text-2xl font-black text-indigo-400 mb-1">60%</div>
                            <h4 className="font-bold mb-1">Redistributed Clips</h4>
                            <p className="text-white/70 text-sm">Same clips posted across multiple pages with varied captions & hooks</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg text-center">
                            <div className="text-2xl font-black text-purple-400 mb-1">25%</div>
                            <h4 className="font-bold mb-1">Page-Specific Edits</h4>
                            <p className="text-white/70 text-sm">Unique hooks, different formats, and niche-specific framing per page</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg text-center">
                            <div className="text-2xl font-black text-pink-400 mb-1">15%</div>
                            <h4 className="font-bold mb-1">Remix Derivatives</h4>
                            <p className="text-white/70 text-sm">Top performers re-edited with new hooks, thumbnails & formats</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

// --- Content Buckets ---
const ContentBuckets = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <Card title="Content Buckets (Podcast-Centric)">
                    <ol className="list-decimal pl-5 space-y-3 text-white/90 text-lg">
                        <li><b>Podcast highlight clips</b> (15–60s): Best guest moments, key insights, actionable takeaways</li>
                        <li><b>Text hook shorts</b> (7–20s): One powerful insight with text overlay hook</li>
                        <li><b>Explainers</b> (20–45s): What/Why/How breakdowns in 3 bullets</li>
                        <li><b>Hot takes & myth-busts</b>: Provocative hooks from episode discussions</li>
                        <li><b>Quote carousels</b>: Best quotes from episodes as graphic carousels</li>
                        <li><b>Listicles</b> — "5 lessons from [guest]": Numbered overlay clips</li>
                        <li><b>Guest spotlight clips</b>: Isolating guest expertise moments</li>
                        <li><b>Weekly compilations</b> (2–3 min): Top 5 clips from the week stitched together</li>
                    </ol>
                    <div className="mt-8 text-white/70 text-sm p-4 bg-white/5 rounded-lg">
                        <p><b>Specs & Guardrails:</b> 9:16 primary; 1:1 carousels; 16:9 comps; burned-in subs; 2–3 highlight words/line; thumbs = face + 3–5 word promise.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
}

// --- Volume Plan ---
const VolumePlans = () => {
    const data = [
        { tier: "T1", pages: 3, cadence: "1–2/day", posts: 150 },
        { tier: "T2", pages: 5, cadence: "2–3/day", posts: 300 },
        { tier: "T3", pages: 4, cadence: "3–4/day", posts: 300 },
    ];

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Volume Plan</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">
                    Pyramid split: <b>T1 least</b>, <b>T2 mid</b>, <b>T3 most</b>. All content sourced from Better Version Podcast episodes (new + archive).
                </p>

                <Card title="Starter — ~750 posts per month" className="max-w-4xl mx-auto mb-8">
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
                                {data.map((row) => (
                                    <tr key={row.tier} className="border-b border-white/10 last:border-b-0">
                                        <td className="p-4 font-bold">{row.tier}</td>
                                        <td className="p-4">{row.pages}</td>
                                        <td className="p-4">{row.cadence}</td>
                                        <td className="p-4 font-bold text-right">{row.posts}</td>
                                    </tr>
                                ))}
                                <tr className="bg-white/10">
                                    <td className="p-4 font-black text-lg" colSpan={3}>Total</td>
                                    <td className="p-4 font-black text-lg text-right">~750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-white/70 text-sm mt-4">Cross-platform multiplier: 750 × 5 platforms = <b>~3,750 total touchpoints/month</b>. Remix uplift on top 10%: +30-50% effective reach.</p>
                </Card>

                <Card title="Content Source Math" className="max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-4">Source</th>
                                    <th className="p-4">Volume</th>
                                    <th className="p-4">Clips Generated</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="p-4">New episodes (4-6/month)</td>
                                    <td className="p-4">~5 episodes</td>
                                    <td className="p-4 font-bold">60-75 clips</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="p-4">Archive mining (229 existing videos)</td>
                                    <td className="p-4">~20 videos/month</td>
                                    <td className="p-4 font-bold">40-60 clips</td>
                                </tr>
                                <tr className="bg-white/10">
                                    <td className="p-4 font-black" colSpan={2}>Total unique clips/month</td>
                                    <td className="p-4 font-black">~100-135</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-white/70 text-sm mt-4">Each unique clip is redistributed across multiple fan pages — you get massive reach from a manageable clip count.</p>
                </Card>
            </div>
        </section>
    );
}

// --- Page Culling & Regeneration ---
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
                    <p className="mt-4 text-white/70 text-sm p-3 bg-white/5 rounded-lg">Goal: concentrate volume into winners while refreshing long-tail discovery. Pages that don't perform get replaced — keeping the network lean and effective.</p>
                </Card>
            </div>
        </section>
    );
}

// --- Reader Journey & On-Page Structure ---
const ReaderJourney = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <Card title="Reader Journey & On-Page Structure">
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                        <li><b>Bio:</b> "Unofficial fan page of Ashmit Shahi 🔥 | Daily [niche] from Better Version Podcast | 👉 @ashmit.shahi for more"</li>
                        <li><b>Pinned Highlights:</b> 3 evergreen winners + 1 fresh viral attempt.</li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">T1 & T2 Content Mix</h4>
                            <p className="text-white/80 text-sm">40% podcast highlights, 25% explainers, 20% guest spotlights, 15% quotes & listicles.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">T3 Content Mix</h4>
                            <p className="text-white/80 text-sm">35% hot takes & viral hooks, 30% trending topic reactions, 20% compilations, 15% experimental formats.</p>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/5 rounded-lg">
                        <h4 className="font-bold mb-2">Pinned Comments SOP (All Pages)</h4>
                        <p className="text-white/80 text-sm">2–4 comments per post: follow CTA, discussion prompt, @ashmit.shahi tag, "wait till the end" teaser.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
}

// --- Team Structure ---
const Team = () => {
    const team = [
        { role: "Clip Director", count: "1", desc: "Shot selection, hook scripting, narrative trims from podcast episodes" },
        { role: "Social Media Manager", count: "1", desc: "Scheduling across 12 pages × 5 platforms, community management" },
        { role: "Project Manager", count: "1", desc: "Calendar, SLAs, weekly reports, client communications" },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Team Structure</h2>
                <Card title="Dedicated Team for Better Version Podcast">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((r) => (
                            <div key={r.role} className="bg-black/20 p-4 rounded-lg border border-white/5">
                                <strong className="text-indigo-300">{r.count}</strong> <strong>{r.role}:</strong>
                                <p className="text-sm text-white/70 mt-1">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
}

// --- Why This Works ---
const WhyThisWorks = () => {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Why This Works for You, Ashmit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                    <Card>
                        <h4 className="font-bold text-lg text-indigo-400 mb-2">You Already Preach This</h4>
                        <p className="text-white/70">On Better Version Podcast, you discuss content distribution, personal branding at scale, and agency growth. Social SEO is what you teach — now applied to your own brand.</p>
                    </Card>
                    <Card>
                        <h4 className="font-bold text-lg text-purple-400 mb-2">Zero Competition</h4>
                        <p className="text-white/70">Nobody is clipping your content today. Zero fan pages exist. You control the narrative from Day 1 — first-mover advantage.</p>
                    </Card>
                    <Card>
                        <h4 className="font-bold text-lg text-pink-400 mb-2">229 Videos = Gold Mine</h4>
                        <p className="text-white/70">Your existing library contains 2,000-3,000 clippable moments. We don't need you to create more — just let us distribute what you already have.</p>
                    </Card>
                    <Card>
                        <h4 className="font-bold text-lg text-green-400 mb-2">Your Content Already Resonates</h4>
                        <p className="text-white/70">Episodes hitting 24K-43K views proves the content works. Social SEO amplifies that proven content to entirely new audiences.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}

// --- FAQ ---
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
                    <Item title="Why many fan pages instead of just my main account?">
                        Fan pages act as discovery channels — they reach audiences who don't follow @ashmit.shahi yet. Multiple pages de-risk and widen reach. The 80/20 rule ensures only winners survive.
                    </Item>
                    <Item title="Won't this confuse my audience?">
                        No. Fan pages are clearly labeled as "unofficial fan page" and always point back to your main account. They're discovery funnels, not competitors.
                    </Item>
                    <Item title="How fast will I see results?">
                        Month 1 is ramp-up (page creation, content calibration). Month 2-3 is where the algorithm picks up winners. By Month 3, you'll have clear data on what works and can scale.
                    </Item>
                    <Item title="Do I need to do anything?">
                        Just keep making podcasts. We handle all clipping, editing, posting, scheduling, optimization, and performance reporting.
                    </Item>
                    <Item title="Can we scale up after the pilot?">
                        Absolutely. The 3-tier system is designed to scale. We can go from 12 pages to 30+ with minimal incremental effort.
                    </Item>
                    <Item title="Is this compliant with platform rules?">
                        Yes — fan pages are fully compliant when clearly labeled. This is how every major creator's clip ecosystem operates (think Joe Rogan, Raj Shamani, etc.).
                    </Item>
                </Card>
            </div>
        </section>
    );
}

// --- CTA / Next Steps ---
const NextSteps = () => {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Get Started</h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                    Your content deserves to be everywhere. Let's turn Better Version Podcast into a distribution machine.
                </p>
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
                    <p className="text-xl font-bold mb-4">Next Step: 15-Minute Strategy Call</p>
                    <p className="text-white/70 mb-6">We'll walk through the page plan specific to Better Version Podcast, discuss timelines, and get you set up within a week.</p>
                    <p className="text-indigo-400 font-semibold text-lg">Social SEO — Your content deserves to be everywhere.</p>
                </div>
            </div>
        </section>
    );
}

// --- Main Pitch Deck Component ---
export default function AshmitSocialSEO() {
    const [mode, setMode] = useState("all");

    return (
        <div className="font-sans leading-relaxed text-white min-h-screen">

            {/* --- Foreground --- */}
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <Problem />
                    <HowItWorks />
                    <Architecture />
                    <AshmitPagePlanTable mode={mode} onModeChange={setMode} />
                    <AshmitNicheGlossary />
                    <ContentStrategy />
                    <ContentBuckets />
                    <VolumePlans />
                    <PageCulling />
                    <ReaderJourney />
                    <Team />
                    <WhyThisWorks />
                    <FAQ />
                    <NextSteps />
                </main>

                <footer className="py-12 text-center text-sm text-white/50 print:text-black/50">
                    <p>Ashmit Shahi × Better Version Podcast | Social SEO Proposal | Designed for Mass Podcast Distribution.</p>
                </footer>
            </div>

            {/* --- Global Styles & Keyframes --- */}
            <style>{`
        @media print {
            body {
                background: white !important;
                color: black !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .fixed {
                display: none !important;
            }
            header {
                position: relative !important;
                background: white !important;
                box-shadow: none !important;
                padding: 0.5rem 0 !important;
            }
            h1, h2, h3, h4, p, li, strong {
                color: black !important;
            }
            [class*="text-white/70"], [class*="text-white/80"], [class*="text-white/90"] {
                color: #333 !important;
            }
            [class*="bg-black/20"], [class*="bg-white/10"], [class*="bg-white/5"] {
                background-color: #f0f0f0 !important;
                backdrop-filter: none !important;
                filter: none !important;
                border: 1px solid #ccc !important;
            }
            table, th, td {
                border-color: #555 !important;
            }
            [class*="bg-white/10"] {
                background-color: #ddd !important;
            }
        }
      `}</style>
        </div>
    );
}

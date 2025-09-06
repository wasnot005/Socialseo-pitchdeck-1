import React from 'react';

// --- Helper Components ---

// Icon component for visual flair
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// Card component for Strategy and other sections
const Card = ({ title, children, className }) => (
    <div className={`bg-black bg-opacity-20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white border-opacity-10 shadow-lg ${className}`}>
        {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
        {children}
    </div>
);

// Simple branded logo used in the header
const Logo = () => (
    <div className="bg-white/10 backdrop-blur-md p-1 rounded-full">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg border border-white/20">
            <span className="text-white font-bold">S</span>
        </div>
    </div>
);

// --- Main Sectional Components ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
        <div className="container mx-auto flex justify-end items-center">
            <Logo />
        </div>
    </header>
);

const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
                Final Social SEO Proposal
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">A focused approach for brand awareness and follower growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Audience</h4><p className="text-white/70">18-25 in Delhi & Mumbai</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Budget</h4><p className="text-white/70">₹3,00,000 / month</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Scope</h4><p className="text-white/70">5 Fan Pages (Organic)</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Distribution</h4><p className="text-white/70">Organic Only</p></Card>
            </div>
        </div>
    </section>
);

const PageArchitecture = () => {
    const planData = [
        { page: 'Podcast Page A', tier: 1, video: 30, poster: 0, total: 30 },
        { page: 'Podcast Page B', tier: 1, video: 30, poster: 0, total: 30 },
        { page: 'Events & Reviews', tier: 2, video: 30, poster: 0, total: 30 },
        { page: 'Trial or Lab', tier: 3, video: 50, poster: 0, total: 50 },
        { page: 'Lyrics Page', tier: 1, video: 10, poster: 10, total: 20 },
    ];
    
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Page Architecture & Content Plan</h2>
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-4">Page</th><th className="p-4">Tier</th><th className="p-4">Video Posts</th><th className="p-4">Poster Posts</th><th className="p-4">Total/Month</th>
                                </tr>
                            </thead>
                            <tbody>
                                {planData.map(row => (
                                    <tr key={row.page} className="border-b border-white/10 last:border-b-0">
                                        <td className="p-4 font-bold">{row.page}</td>
                                        <td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${row.tier === 1 ? 'bg-indigo-500' : row.tier === 2 ? 'bg-purple-500' : 'bg-pink-500'}`}>Tier {row.tier}</span></td>
                                        <td className="p-4 font-bold text-lg">{row.video}</td>
                                        <td className="p-4 font-bold text-lg">{row.poster}</td>
                                        <td className="p-4 font-bold text-lg">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                             <tfoot>
                                <tr className="bg-black/20">
                                    <td colSpan="2" className="p-4 font-bold text-right">Total Monthly Posts</td>
                                    <td className="p-4 font-bold text-lg">150</td>
                                    <td className="p-4 font-bold text-lg">10</td>
                                    <td className="p-4 font-bold text-lg">160</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </Card>
            </div>
        </section>
    );
};

const QualityMix = () => {
    const qualityData = [
        { page: 'Podcast Page A', pro: 8, standard: 14, light: 8, posters: 0 },
        { page: 'Podcast Page B', pro: 8, standard: 14, light: 8, posters: 0 },
        { page: 'Events & Reviews', pro: 2, standard: 8, light: 20, posters: 0 },
        { page: 'Trial or Lab', pro: 0, standard: 5, light: 45, posters: 0 },
        { page: 'Lyrics Page', pro: 5, standard: 5, light: 0, posters: 10 },
    ];

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Quality Mix & Delivery</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">Balanced polish that protects brand cues while keeping Events and Trial pages efficient.</p>
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-4">Page</th>
                                    <th className="p-4 text-center">Pro Videos</th>
                                    <th className="p-4 text-center">Standard Videos</th>
                                    <th className="p-4 text-center">Light/Template Videos</th>
                                    <th className="p-4 text-center">Posters</th>
                                </tr>
                            </thead>
                            <tbody>
                                {qualityData.map(row => (
                                    <tr key={row.page} className="border-b border-white/10 last:border-b-0">
                                        <td className="p-4 font-bold">{row.page}</td>
                                        <td className="p-4 text-center font-semibold text-indigo-400">{row.pro}</td>
                                        <td className="p-4 text-center">{row.standard}</td>
                                        <td className="p-4 text-center text-white/70">{row.light}</td>
                                        <td className="p-4 text-center">{row.posters}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-sm text-white/80 space-y-2 p-4 bg-black/20 rounded-lg">
                        <p><strong>Pro:</strong> Advanced polish with stronger motion, sound, hooks, and thumbnails.</p>
                        <p><strong>Standard:</strong> Clean mid-quality cutdowns with captions and light design.</p>
                        <p><strong>Light/Template:</strong> Quick trims with auto-captions and consistent lower thirds.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

const Pricing = () => {
    const pricingData = [
        { item: 'Podcast Page A', cost: 0.65 },
        { item: 'Podcast Page B', cost: 0.65 },
        { item: 'Lyrics Page (Videos & Posters)', cost: 0.55 },
        { item: 'Events & Reviews Page', cost: 0.55 },
        { item: 'Trial or Lab Page', cost: 0.60 },
    ];

    const total = pricingData.reduce((sum, item) => sum + item.cost, 0);

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Pricing & Commercials</h2>
                <Card className="max-w-2xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-4">Page / Workstream</th>
                                    <th className="p-4 text-right">Line Total (lakh)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map(row => (
                                    <tr key={row.item} className="border-b border-white/10">
                                        <td className="p-4 font-bold">{row.item}</td>
                                        <td className="p-4 text-right font-semibold">₹ {row.cost.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-black/20">
                                    <td className="p-4 font-bold text-right text-2xl">Total Monthly Retainer</td>
                                    <td className="p-4 text-right font-black text-3xl text-indigo-400">₹ {total.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </Card>
            </div>
        </section>
    );
};

const RedditStrategy = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Reddit Seeding (Lite Interaction)</h2>
            <Card className="max-w-4xl mx-auto">
                <p className="text-white/80 text-center leading-relaxed">Given the ₹3 lakh plan and the updated output cap, Reddit activity will run at a lighter cadence. It is positioned for discovery and social proof. Expect fewer threads each week and minimal replies. Posts will be text-first with a clear value statement and optional timestamps and source credits. There is no vote coordination and no aggressive cross-posting. Learnings feed the Trial page and inform podcast and lyric packaging where useful.</p>
            </Card>
        </div>
    </section>
);

const NextSteps = () => (
    <section id="next-steps" className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Deliverables & Next Steps</h2>
             <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <Card title="Monthly Deliverables">
                    <ul className="space-y-3 text-white/80 list-disc list-inside">
                        <li>Multi-platform publishing (IG, YT, FB, X).</li>
                        <li>Reddit seeding with lite interaction.</li>
                        <li>One monthly review deck with highlights, top posts, and next month's bets.</li>
                    </ul>
                </Card>
                 <Card title="Assumptions & Exclusions">
                    <ul className="space-y-3 text-white/80 list-disc list-inside">
                        <li>Client supplies timely assets and grants redistribution rights.</li>
                        <li>No paid boosts, shoutouts, or influencer fees are included.</li>
                        <li>Real-time event coverage is best effort.</li>
                    </ul>
                </Card>
            </div>
            <div className="max-w-2xl mx-auto text-left space-y-6 mt-12">
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0"><span className="text-white">1</span></div><p className="text-lg">Approve the updated plan by signing the service agreement.</p></div>
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0"><span className="text-white">2</span></div><p className="text-lg">Issue the Purchase Order for ₹3,00,000 per month.</p></div>
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0"><span className="text-white">3</span></div><p className="text-lg">Schedule onboarding call to share brand kits and grant account access.</p></div>
            </div>
        </div>
    </section>
);


// --- Main App Component ---
export default function UpdatedProposal() {
    return (
        <div className="bg-gray-900 font-sans leading-relaxed text-white">
            <div className="fixed inset-0 z-0 overflow-hidden">
                 <div className="absolute inset-0 bg-black animated-gradient"></div>
                 <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/grain.png)', mixBlendMode: 'overlay'}}></div>
            </div>
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <PageArchitecture />
                    <QualityMix />
                    <Pricing />
                    <RedditStrategy />
                    <NextSteps />
                </main>
            </div>
        </div>
    );
}


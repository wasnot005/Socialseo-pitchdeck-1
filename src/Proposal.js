import React from 'react';

// --- Helper Components ---

// Icon component for visual flair
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1">
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
);


// Card component for Strategy and other sections
const Card = ({ title, children, className }) => (
    <div className={`bg-black bg-opacity-20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white border-opacity-10 shadow-lg ${className}`}>
        {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
        {children}
    </div>
);

// --- Main Sectional Components ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
        <div className="container mx-auto flex justify-start items-center">
            <img
                src="logo.png"
                alt="Social SEO Logo"
                className="w-10 h-10 object-contain"
            />
        </div>
    </header>
);

const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
                A Social SEO Proposal
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">Building a movement, not just an audience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Audience</h4><p className="text-white/70">18 - 25</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Objective</h4><p className="text-white/70">Brand Awareness & Fan Growth</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Platforms</h4><p className="text-white/70">IG, YT, FB, X & Reddit</p></Card>
                <Card className="bg-black/10"><h4 className="font-bold text-lg mb-2">Reporting</h4><p className="text-white/70">Monthly Review Deck</p></Card>
            </div>
             <div className="mt-16 max-w-4xl mx-auto text-left space-y-4">
                <h3 className="text-2xl font-bold text-center mb-6">Our Core Objectives</h3>
                <p className="text-lg text-white/80 flex items-start"><Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" /> Establish a consistent, multi-platform presence around the artist.</p>
                <p className="text-lg text-white/80 flex items-start"><Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" /> Prioritize Quality (T1), Scale (T2), and Learning Velocity (T3).</p>
                <p className="text-lg text-white/80 flex items-start"><Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 mr-3 text-indigo-400 flex-shrink-0 mt-1" /> Feed winners from T3/T2 back into T1 formats to compound growth.</p>
            </div>
        </div>
    </section>
);

const Strategy = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How a Moment Becomes a Movement</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">Our tiered strategy ensures every piece of content has a purpose, from defining the brand to discovering what's next.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card><span className="inline-block bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 1</span><h3 className="text-2xl font-bold mb-2">The Benchmark</h3><p className="text-white/70">Sets the standard with polished pages that post less but define the artist's look, feel, and voice.</p></Card>
                <Card><span className="inline-block bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 2</span><h3 className="text-2xl font-bold mb-2">The Scale</h3><p className="text-white/70">Delivers coverage at scale with high-quality edits engineered for speed, consistency, and breadth.</p></Card>
                <Card><span className="inline-block bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Tier 3</span><h3 className="text-2xl font-bold mb-2">The Lab</h3><p className="text-white/70">Our lab for testing ideas. We find what works, then promote the winning formats upstream.</p></Card>
            </div>
        </div>
    </section>
);

const NumberCounter = ({ value, text, isTier3Included }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        const end = parseInt(value, 10);
        if (count === end) return;
        const duration = 1000;
        const startTime = Date.now();
        const animate = () => {
            const currentTime = Date.now();
            const progress = Math.min(1, (currentTime - startTime) / duration);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                 setCount(end);
            }
        };
        const timeoutId = setTimeout(() => {
            setCount(0); 
            requestAnimationFrame(animate);
        }, 100);
        return () => clearTimeout(timeoutId);
    }, [value, isTier3Included]);

    return (
        <div>
            <p className="text-5xl font-black text-indigo-400">{count.toLocaleString()}+</p>
            <p className="text-white/70 mt-1">{text}</p>
        </div>
    );
};

const InitialPlan = ({ isTier3Included, setIsTier3Included }) => {
    const planData = [
        { id: 'T1 POD A', tier: 1, niche: 'Podcast', posts: 30, notes: 'Hooks, captions, clean graphics' },
        { id: 'T1 POD B', tier: 1, niche: 'Podcast', posts: 30, notes: 'Variant host or topics' },
        { id: 'T1 LYR 1', tier: 1, niche: 'Lyrics', posts: 20, notes: 'On brand type and tempo' },
        { id: 'T2 EVT 1', tier: 2, niche: 'Events', posts: 60, notes: 'Quick cut with trend hooks' },
        { id: 'T2 REV 1', tier: 2, niche: 'Reviews', posts: 60, notes: 'Stitch and duet culture' },
        { id: 'T3 LAB 1', tier: 3, niche: 'Labs', posts: 100, notes: 'Recommended experimental page' },
    ];

    const filteredData = isTier3Included ? planData : planData.filter(p => p.tier !== 3);
    const perPlatformPosts = filteredData.reduce((sum, item) => sum + item.posts, 0);
    const totalPushes = perPlatformPosts * 4;

    const referenceLinks = {
        "Podcast Edits": [
            { name: "Podcast Ref A", link: "https://www.instagram.com/reel/DJ8xn1XMR56/" },
            { name: "Podcast Ref B", link: "https://www.instagram.com/reel/DM-8S6pyl0G/" },
            { name: "Podcast Ref C", link: "https://www.instagram.com/reel/DNskufsXoEn/" },
        ],
        "Lyrics Videos": [
            { name: "Lyrics Ref A", link: "https://www.instagram.com/reel/DH3QZChSeoG/" },
            { name: "Lyrics Ref B", link: "https://www.instagram.com/reel/DIGmXltJ2b_/?igsh=MWJuZWhlZmxxdTAwbg==" },
            { name: "Lyrics Ref C", link: "https://www.instagram.com/reel/DIdEgMcBrk4/" },
        ],
        "Event Videos": [
            { name: "Event Ref A", link: "https://www.instagram.com/reel/DNk1urFyqtG/" },
            { name: "Event Ref B", link: "https://www.instagram.com/reel/DF10kIVhBxK/?igsh=d2gxdjJkaDY5d28z" },
        ],
        "Review Edits": [
            { name: "Review Ref A", link: "https://www.instagram.com/reel/DLRMScYxiRN/" },
            { name: "Review Ref B", link: "https://www.instagram.com/reel/DNqeGuyI4Ph/" },
        ],
        "Live Collections": [
            { name: "Live Ref A", link: "https://www.instagram.com/reel/DNqQp4lz3Xf/" },
        ]
    };

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Phase 1: The Foundational Roll-out</h2>
                <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">Our initial scope establishes a diverse portfolio of pages, each with a distinct purpose to maximize reach and engagement.</p>
                <div className="flex justify-center items-center space-x-4 my-8"><span className="font-medium">5 Page Plan</span><label htmlFor="tier3-toggle" className="relative inline-flex items-center cursor-pointer"><input type="checkbox" id="tier3-toggle" className="sr-only peer" checked={isTier3Included} onChange={() => setIsTier3Included(!isTier3Included)} /><div className="w-14 h-8 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div></label><span className="font-medium text-indigo-400">6 Page Plan (Recommended)</span></div>
                <Card>
                    <div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b border-white/20"><th className="p-4">Page ID</th><th className="p-4">Tier</th><th className="p-4">Niche</th><th className="p-4">Posts/Month</th><th className="p-4 hidden md:table-cell">Notes</th></tr></thead><tbody>{filteredData.map(row => (<tr key={row.id} className="border-b border-white/10 last:border-b-0"><td className="p-4 font-bold">{row.id}</td><td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${row.tier === 1 ? 'bg-indigo-500' : row.tier === 2 ? 'bg-purple-500' : 'bg-pink-500'}`}>Tier {row.tier}</span></td><td className="p-4">{row.niche}</td><td className="p-4 font-bold text-lg">{row.posts}</td><td className="p-4 text-white/70 hidden md:table-cell">{row.notes}</td></tr>))}</tbody></table></div>
                </Card>
                <Card className="mt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"><NumberCounter value={perPlatformPosts} text="Posts Per Platform / Month" isTier3Included={isTier3Included} /><NumberCounter value={totalPushes} text="Content Pushes Across 4 Platforms" isTier3Included={isTier3Included} /></div></Card>
                <div className="mt-16"><h3 className="text-2xl font-bold text-center mb-8">Content Style References</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {Object.entries(referenceLinks).map(([category, links]) => (
                            <Card key={category} title={category} className="bg-black/10">
                                <div className="space-y-3">
                                {links.map(ref => (
                                    <a key={ref.name} href={ref.link} target="_blank" rel="noopener noreferrer" className="group bg-black/20 text-white/80 font-semibold p-3 rounded-lg hover:bg-black/40 transition-colors duration-200 flex items-center justify-between">
                                        <span>{ref.name}</span>
                                        <ArrowIcon />
                                    </a>
                                ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const PlatformPackaging = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Platform-Specific Packaging</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card><h3 className="text-2xl font-bold mb-3">Instagram</h3><p className="text-white/70">Reels as primary, carousels for deep dives, Stories for polls, and Highlights by niche.</p></Card>
                <Card><h3 className="text-2xl font-bold mb-3">YouTube</h3><p className="text-white/70">Shorts for clips and edits, Community posts for hooks, and playlists per niche.</p></Card>
                <Card><h3 className="text-2xl font-bold mb-3">Facebook</h3><p className="text-white/70">Reels with crossposted clips and Groups for event recaps and fan prompts.</p></Card>
                <Card><h3 className="text-2xl font-bold mb-3">X / Twitter</h3><p className="text-white/70">Native video, threaded recaps, and quote tweet prompts for engagement.</p></Card>
            </div>
            <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold">Bonus: Lyric-Themed Graphic Posters</h3>
                <p className="text-lg text-white/70 mt-2 mb-8">Each month, we'll design additional high-impact graphic posters to extend storytelling across the network.</p>
                <div className="flex justify-center gap-4">
                    <a href="https://www.instagram.com/p/CzO30h2vKyi/" target="_blank" rel="noopener noreferrer" className="group aspect-square w-40 bg-white/10 rounded-lg flex flex-col items-center justify-center hover:bg-white/20 transition-colors"><p className="text-white/80 font-semibold">Poster Ref 1</p><ArrowIcon /></a>
                    <a href="https://www.instagram.com/p/DCbg5MYzSMt/" target="_blank" rel="noopener noreferrer" className="group aspect-square w-40 bg-white/10 rounded-lg flex flex-col items-center justify-center hover:bg-white/20 transition-colors"><p className="text-white/80 font-semibold">Poster Ref 2</p><ArrowIcon /></a>
                </div>
            </div>
        </div>
    </section>
);

const Operations = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Operations & Governance</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                <Card title="Our Team Structure">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-black/20 p-4 rounded-lg"><strong>2 Clip Directors:</strong><p className="text-sm text-white/70">Shot selection, hook scripting, narrative trims</p></div>
                        <div className="bg-black/20 p-4 rounded-lg"><strong>5 Editors:</strong><p className="text-sm text-white/70">Edit variants, motion/typography, speed to publish</p></div>
                        <div className="bg-black/20 p-4 rounded-lg"><strong>2 Social Media Managers:</strong><p className="text-sm text-white/70">Scheduling, community replies, seeding</p></div>
                        <div className="bg-black/20 p-4 rounded-lg"><strong>1 Project Manager:</strong><p className="text-sm text-white/70">Calendar, SLAs, client communications</p></div>
                        <div className="bg-black/20 p-4 rounded-lg col-span-1 sm:col-span-2"><strong>1 Data Analyst:</strong><p className="text-sm text-white/70">Dashboards, experiment design, monthly reviews</p></div>
                    </div>
                </Card>
                <Card title="Workflow & Governance">
                     <p className="text-white/80 mb-4"><strong>Workflow:</strong> Intake → Clip Direction → Edit → QC → Schedule → Publish → Engage → Track.</p>
                     <p className="text-white/80 mb-4"><strong>Sources:</strong> Podcasts, events, photos, BTS, live captures, and fan-derived content.</p>
                     <p className="text-white/80"><strong>Guardrails:</strong> We follow a rigorous Quality Check (QC) process, avoid unverified leaks, credit creators, and use music as permitted.</p>
                </Card>
            </div>
        </div>
    </section>
);

const Pricing = ({ isTier3Included }) => {
    const pricingData = [
        { type: 'Podcast page', unit: 1.25, qty: 2, standard: 1.50 },
        { type: 'Lyrics page', unit: 1.85, qty: 1, standard: 2.20 },
        { type: 'Event page', unit: 1.35, qty: 1, standard: 1.60 },
        { type: 'Review page', unit: 1.35, qty: 1, standard: 1.60 },
        { type: 'Tier 3 Lab page', unit: 1.45, qty: 1, standard: 1.75, tier3: true },
    ];
    
    const filteredData = isTier3Included ? pricingData : pricingData.filter(p => !p.tier3);
    const initialTotal = filteredData.reduce((sum, item) => sum + (item.unit * item.qty), 0);
    const discount = 0.50;
    const finalTotal = isTier3Included ? initialTotal - discount : initialTotal;

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Phase 1 Investment</h2>
                <Card className="max-w-5xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead><tr className="border-b border-white/20"><th className="p-4">Page Type</th><th className="p-4 text-right">Standard Rate</th><th className="p-4 text-right">Partnership Rate</th><th className="p-4 text-right">Qty</th><th className="p-4 text-right">Line Total</th></tr></thead>
                            <tbody>{filteredData.map(row => (<tr key={row.type} className="border-b border-white/10"><td className="p-4 font-bold">{row.type}</td><td className="p-4 text-right text-white/50 line-through">₹ {row.standard.toFixed(2)}</td><td className="p-4 text-right font-semibold">₹ {row.unit.toFixed(2)}</td><td className="p-4 text-right">{row.qty}</td><td className="p-4 text-right font-bold text-lg">₹ {(row.unit * row.qty).toFixed(2)}</td></tr>))}</tbody>
                            <tfoot>
                                <tr className="border-b border-white/10"><td colSpan="4" className="p-4 font-bold text-right">Subtotal</td><td className="p-4 text-right font-bold text-xl">₹ {initialTotal.toFixed(2)}</td></tr>
                                {isTier3Included && (<tr><td colSpan="4" className="p-4 font-bold text-right text-green-400">First Three Month Discount</td><td className="p-4 text-right font-bold text-xl text-green-400">- ₹ {discount.toFixed(2)}</td></tr>)}
                                <tr className="bg-white/10"><td colSpan="4" className="p-4 font-bold text-right text-2xl">Final Monthly Package</td><td className="p-4 text-right font-black text-3xl text-indigo-400">₹ {finalTotal.toFixed(2)} lakh</td></tr>
                            </tfoot>
                        </table>
                    </div>
                </Card>
            </div>
        </section>
    );
};

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (<div className="border-b border-white/20"><button className="w-full flex justify-between items-center text-left py-4 px-2" onClick={() => setIsOpen(!isOpen)}><span className="text-xl font-bold">{title}</span><Icon path={isOpen ? "M19.5 12h-15" : "M12 4.5v15m7.5-7.5h-15"} className="w-6 h-6" /></button>{isOpen && <div className="pb-4 px-2 text-white/80">{children}</div>}</div>);
};

const RedditStrategy = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Reddit Content Seeding Framework</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">Our approach focuses on authentic community engagement for discovery and social proof—without spam.</p>
            <Card className="max-w-4xl mx-auto">
                <AccordionItem title="Subreddit Mapping"><p>We build a live map of target subs ranked by audience size, engagement rate, and rules.</p></AccordionItem>
                <AccordionItem title="Account Readiness"><p>Accounts are warmed with organic comments before any link sharing to build authentic profiles.</p></AccordionItem>
                <AccordionItem title="Post Construction"><p>Posts are text-first with a value statement, then the clip. Titles are native to the community.</p></AccordionItem>
                <AccordionItem title="Engagement Etiquette"><p>We reply within the first hour, ask genuine questions, and never ask for votes.</p></AccordionItem>
            </Card>
        </div>
    </section>
);

const FuturePlan = () => (
     <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Future Plan: A Scaled Network</h2>
            <Card className="max-w-6xl mx-auto mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">From Engagement to Impact</h3>
                        <p className="text-lg text-white/80 mb-6">Phase 2 expands our foundation into a fully integrated marketing ecosystem. By creating a powerful synergy between pages and collaborating with niche communities, we amplify the artist's voice and boost their cultural relevance.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://www.instagram.com/lyrical.hiphop" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Niche: Lyrical HipHop <ArrowIcon /></a>
                            <a href="https://www.instagram.com/the.rap_heaven" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Niche: Rap Heaven <ArrowIcon /></a>
                            <a href="https://www.instagram.com/69.dhh" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Meme: 69.dhh <ArrowIcon /></a>
                            <a href="https://www.instagram.com/dhh4us" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Meme: dhh4us <ArrowIcon /></a>
                            <a href="https://www.instagram.com/reel/DMCSASaTqF8/" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Influencer Ref 1 <ArrowIcon /></a>
                            <a href="https://www.instagram.com/reel/DDjz6qCR3ay/" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center">Influencer Ref 2 <ArrowIcon /></a>
                        </div>
                    </div>
                    <div className="text-center"><p className="text-6xl md:text-7xl font-black text-indigo-400">4,000 - 5,000</p><p className="text-white/70 mt-2 text-lg">Monthly Content Actions</p></div>
                </div>
            </Card>
            <Card className="max-w-6xl mx-auto">
                 <h3 className="text-2xl font-bold text-center mb-6">Scaled Content Plan (20 Pages)</h3>
                 <div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b border-white/20"><th className="p-4">Tier</th><th className="p-4">Page Type</th><th className="p-4"># Pages</th><th className="p-4">Posts/Month</th><th className="p-4">Total Content</th></tr></thead><tbody><tr className="border-b border-white/10"><td className="p-4">Tier 1</td><td className="p-4">Podcast</td><td className="p-4">4</td><td className="p-4">30</td><td className="p-4 font-bold">480</td></tr><tr className="border-b border-white/10"><td className="p-4">Tier 1</td><td className="p-4">Lyrics</td><td className="p-4">2</td><td className="p-4">20</td><td className="p-4 font-bold">160</td></tr><tr className="border-b border-white/10"><td className="p-4">Tier 2</td><td className="p-4">Events</td><td className="p-4">3</td><td className="p-4">60</td><td className="p-4 font-bold">720</td></tr><tr className="border-b border-white/10"><td className="p-4">Tier 2</td><td className="p-4">Reviews</td><td className="p-4">3</td><td className="p-4">60</td><td className="p-4 font-bold">720</td></tr><tr className="border-b border-white/10"><td className="p-4">Tier 3</td><td className="p-4">Labs</td><td className="p-4">5</td><td className="p-4">100</td><td className="p-4 font-bold">2000</td></tr></tbody><tfoot><tr className="bg-white/10"><td colSpan="4" className="p-4 font-bold text-right">Total Monthly Content (x4 Platforms)</td><td className="p-4 font-black text-xl">4,080+</td></tr></tfoot></table></div>
            </Card>
        </div>
    </section>
);

const NextSteps = () => (
    <section id="next-steps" className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Next Steps</h2>
            <div className="max-w-2xl mx-auto text-left space-y-6">
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">1</div><p className="text-lg">Confirm page handles, approve plan tables, and finalize pricing.</p></div>
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">2</div><p className="text-lg">Provide first asset drop for podcasts, events, BTS, and lives.</p></div>
                <div className="flex items-center bg-black/20 p-4 rounded-lg"><div className="bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">3</div><p className="text-lg">Lock the first week's content calendar and moderation protocol.</p></div>
            </div>
        </div>
    </section>
);

// --- Main App Component ---
export default function Proposal() {
    const [isTier3Included, setIsTier3Included] = React.useState(true);

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
                    <Strategy />
                    <InitialPlan isTier3Included={isTier3Included} setIsTier3Included={setIsTier3Included} />
                    <PlatformPackaging />
                    <Operations />
                    <Pricing isTier3Included={isTier3Included} />
                    <RedditStrategy />
                    <FuturePlan />
                    <NextSteps />
                </main>
            </div>
        </div>
    );
}

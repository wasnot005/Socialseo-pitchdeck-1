import React from 'react';

// --- Helper Components ---

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const Card = ({ title, children, className }) => (
    <div className={`bg-black bg-opacity-20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white border-opacity-10 shadow-lg ${className}`}>
        {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
        {children}
    </div>
);

// --- Main Sectional Components ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent print:hidden">
        <div className="container mx-auto flex justify-end items-center">
             {/* Logo removed as per request */}
        </div>
    </header>
);

const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Editing at Scale for JandC Languages</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">90 videos + 30 thumbnails, one fixed monthly fee, zero per-reel surprises.</p>
            <div className="inline-block bg-black/20 border border-white/10 rounded-lg p-4 mb-8">
                <p className="text-3xl md:text-4xl font-bold text-indigo-400">₹1,26,000 / month</p>
                <p className="text-white/70">On-Time Delivery · Flexible Volume</p>
            </div>
        </div>
    </section>
);

const Scope = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Scope & Deliverables</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <Card title="What's Included">
                    <ul className="space-y-3 text-white/80 list-disc list-inside">
                        <li><strong>30</strong> French Talking-Heads</li>
                        <li><strong>30</strong> German Talking-Heads</li>
                        <li><strong>30</strong> YouTube Intros</li>
                        <li><strong>30</strong> Thumbnails / month</li>
                        <li>Dynamic Subtitles & Motion Graphics</li>
                        <li>Professional Color & Audio Grading</li>
                        <li>Notion / Drive Packaging</li>
                    </ul>
                </Card>
                <Card title="What's Excluded">
                     <ul className="space-y-3 text-white/70 list-disc list-inside">
                        <li>Posting & Scheduling</li>
                        <li>Community Management</li>
                        <li>Paid Ad Management</li>
                        <li>Multi-cam Sync &gt; 30 min</li>
                        <li>Reshoots or Source File Fixes</li>
                    </ul>
                </Card>
            </div>
        </div>
    </section>
);

const VolumePolicy = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Flexible Volume Policy</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">This engagement uses a bundle-first policy with an operational buffer to handle spikes without renegotiation.</p>
            <Card className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">Monthly Video Volume Meter</h3>
                <div className="w-full bg-black/20 rounded-full h-8 flex items-center p-1 relative">
                    <div className="bg-green-500 h-full rounded-l-full" style={{ width: '53%' }}></div>
                    <div className="bg-yellow-500 h-full" style={{ width: '35%' }}></div>
                    <div className="bg-red-500 h-full rounded-r-full" style={{ width: '12%' }}></div>
                    <div className="absolute left-0 w-full flex justify-between px-2 text-xs font-bold">
                        <span>90</span>
                        <span className="pl-24">170</span>
                        <span>200+</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center text-sm">
                    <div className="bg-green-500/10 p-3 rounded-lg"><strong className="text-green-400">Baseline (90 videos/mo):</strong> Covered by retainer.</div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg"><strong className="text-yellow-400">Buffer (91-170 videos/mo):</strong> No fee change for occasional spikes.</div>
                    <div className="bg-red-500/10 p-3 rounded-lg"><strong className="text-red-400">Re-scope (170+ videos/mo):</strong> Triggers a package revision.</div>
                </div>
            </Card>
        </div>
    </section>
);

const Team = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">The Dedicated Production Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card>
                    <div className="w-24 h-24 rounded-full bg-indigo-500/20 mx-auto mb-4 flex items-center justify-center"><Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-12 h-12 text-indigo-400"/></div>
                    <h3 className="text-2xl font-bold">Editor A (Lead)</h3>
                    <p className="text-white/70 mt-2">Owns talking-head assemblies, audio cleanup, subtitles, and complex fixes.</p>
                </Card>
                <Card>
                    <div className="w-24 h-24 rounded-full bg-purple-500/20 mx-auto mb-4 flex items-center justify-center"><Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-12 h-12 text-purple-400"/></div>
                    <h3 className="text-2xl font-bold">Editor B</h3>
                    <p className="text-white/70 mt-2">Drives parallel throughput on all content and manages rush items within SLA.</p>
                </Card>
                <Card>
                    <div className="w-24 h-24 rounded-full bg-pink-500/20 mx-auto mb-4 flex items-center justify-center"><Icon path="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 013.388-1.62" className="w-12 h-12 text-pink-400"/></div>
                    <h3 className="text-2xl font-bold">Graphic Designer</h3>
                    <p className="text-white/70 mt-2">Handles thumbnail concepts, typography, brand consistency, and A/B variants.</p>
                </Card>
            </div>
        </div>
    </section>
);

const Workflow = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Workflow & SLAs</h2>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4"><div className="text-3xl font-bold text-indigo-400 mb-2">1</div><h4 className="font-bold">Handoff</h4><p className="text-sm text-white/70">Footage & briefs in Notion</p></div>
                    <div className="p-4"><div className="text-3xl font-bold text-indigo-400 mb-2">2</div><h4 className="font-bold">Edit</h4><p className="text-sm text-white/70">Assembly, color, audio, subs</p></div>
                    <div className="p-4"><div className="text-3xl font-bold text-indigo-400 mb-2">3</div><h4 className="font-bold">QA</h4><p className="text-sm text-white/70">Checklist verification</p></div>
                    <div className="p-4"><div className="text-3xl font-bold text-indigo-400 mb-2">4</div><h4 className="font-bold">Delivery</h4><p className="text-sm text-white/70">Exports & project files</p></div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <div className="bg-black/20 border border-white/10 rounded-full py-2 px-4 text-sm">Talking-Head/Intro: ≤72h</div>
                    <div className="bg-black/20 border border-white/10 rounded-full py-2 px-4 text-sm">Thumbnails: ≤48h</div>
                    <div className="bg-black/20 border border-white/10 rounded-full py-2 px-4 text-sm">Revisions: ≤24h</div>
                </div>
            </div>
        </div>
    </section>
);

const PricingTerms = () => (
     <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Pricing & Terms</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                <Card className="sticky top-24">
                    <p className="text-sm text-indigo-400 font-bold">MONTHLY RETAINER</p>
                    <p className="text-5xl font-black my-2">₹1,26,000</p>
                    <p className="text-white/70 mb-6">Editing-Only. No per-reel charges.</p>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center"><Icon path="M9 12.75L11.25 15 15 9.75" className="w-5 h-5 mr-2 text-green-400"/>90 Videos + 30 Thumbnails</li>
                        <li className="flex items-center"><Icon path="M9 12.75L11.25 15 15 9.75" className="w-5 h-5 mr-2 text-green-400"/>Flexible Volume Buffer</li>
                        <li className="flex items-center"><Icon path="M9 12.75L11.25 15 15 9.75" className="w-5 h-5 mr-2 text-green-400"/>Notion Delivery & Packaging</li>
                    </ul>
                </Card>
                <Card>
                    <h3 className="text-2xl font-bold mb-4">Terms</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold">Payment</h4>
                            <p className="text-white/70">50% advance, 50% on Day 15 (NET-7 grace period).</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Re-scope Policy</h4>
                            <p className="text-white/70">Sustained volume over 170 videos/mo triggers a friendly chat to revise the package.</p>
                        </div>
                         <div>
                            <h4 className="font-bold">Revisions</h4>
                            <p className="text-white/70">One minor revision pass per asset is included, with a 24h turnaround.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
);

// --- Main App Component ---
export default function JandCLanguages() {
    return (
        <div className="bg-gray-900 font-sans leading-relaxed text-white">
            <div className="fixed inset-0 z-0 overflow-hidden">
                 <div className="absolute inset-0 bg-black animated-gradient"></div>
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/grain.png)', mixBlendMode: 'overlay'}}></div>
            </div>
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <Scope />
                    <VolumePolicy />
                    <Team />
                    <Workflow />
                    <PricingTerms />
                </main>
            </div>
            <style jsx global>{`
                .animated-gradient {
                    background: radial-gradient(circle at 10% 20%, rgba(94, 37, 153, 0.4), transparent 50%),
                                radial-gradient(circle at 80% 90%, rgba(37, 89, 153, 0.4), transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(153, 37, 37, 0.3), transparent 50%);
                    background-size: 250% 250%;
                    animation: moveGradient 25s ease infinite;
                }
                @keyframes moveGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
}


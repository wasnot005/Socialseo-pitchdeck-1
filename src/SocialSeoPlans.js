import React, { useState, useEffect } from 'react';
import { GlassCard } from './reports/kush-components/GlassCard';

// Reusing Icons from Proposal.js or defining new ones for simplicity
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const CheckIcon = () => <Icon path="M4.5 12.75l6 6 9-13.5" className="w-5 h-5 text-indigo-400" />;

export default function SocialSeoPlans() {
    const [showBonus, setShowBonus] = useState(true);
    const calendlyLink = "https://calendly.com/suresh-socialseo/socialseo-instant-report-clone";

    // Deadline Logic (April 15, 2026)
    useEffect(() => {
        const deadline = new Date('2026-04-15T23:59:00');
        const now = new Date();
        if (now > deadline) {
            setShowBonus(false);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 font-sans leading-relaxed text-white overflow-x-hidden selection:bg-indigo-500/30 pb-20">
            {/* Animated Background Layers (Reused) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-black animated-gradient"></div>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")' }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
                        <span className="font-bold tracking-tight">Social SEO</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
                        <span className="text-sm font-medium text-white/80">Founder Brand</span>
                    </div>
                </header>

                <main className="container mx-auto px-4 pt-32 space-y-24">

                    {/* Hero */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                            Build Your Personal Brand Without Recording Weekly.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
                            AI clone + funnel. You approve fast. We execute.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                                Book a Call
                            </a>
                            <a href="#plans" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all">
                                View Plans
                            </a>
                        </div>
                    </section>

                    {/* Included in All Plans */}
                    <section>
                        <GlassCard title="Included in All Plans" className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">AI-clone content system (scripts + prod)</span></li>
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">Scriptwriting in your tone + packaging</span></li>
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">Editing + captions + posting-ready</span></li>
                                </ul>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">Posting calendar + performance tracking</span></li>
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">Basic funnel: profile opt + CTA + link</span></li>
                                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-white/80">Monthly reporting + scaling plan</span></li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-indigo-300 font-semibold">Your role: quick approvals so output never pauses.</p>
                            </div>
                        </GlassCard>
                    </section>

                    {/* Plans */}
                    <section id="plans">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Plans & Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Plan A */}
                            <GlassCard className="flex flex-col h-full border-t-4 border-t-indigo-500">
                                <h3 className="text-2xl font-bold mb-2">Plan A</h3>
                                <p className="text-white/60 mb-6">1 Video / Day</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">$1,000</span><span className="text-white/60">/mo</span>
                                </div>
                                <div className="space-y-4 flex-grow mb-8">
                                    <p className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>30 videos/month</p>
                                    <p className="flex items-center text-sm bg-white/5 p-2 rounded"><span className="text-indigo-400 font-bold mr-2">Guarantee:</span> 10k followers in 3 mos</p>
                                </div>
                                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all text-center">Book Call</a>
                            </GlassCard>

                            {/* Plan B */}
                            <GlassCard className="flex flex-col h-full border-t-4 border-t-purple-500 relative overflow-visible transform md:-translate-y-4 z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Most Popular</div>
                                <h3 className="text-2xl font-bold mb-2">Plan B</h3>
                                <p className="text-white/60 mb-6">2 Videos / Day</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">$1,800</span><span className="text-white/60">/mo</span>
                                </div>
                                <div className="space-y-4 flex-grow mb-8">
                                    <p className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>60 videos/month</p>
                                    <p className="flex items-center text-sm bg-white/5 p-2 rounded"><span className="text-purple-400 font-bold mr-2">Guarantee:</span> 25k followers in 3 mos</p>
                                </div>
                                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-bold transition-all shadow-lg text-center">Book Call</a>
                            </GlassCard>

                            {/* Plan C */}
                            <GlassCard className="flex flex-col h-full border-t-4 border-t-pink-500">
                                <h3 className="text-2xl font-bold mb-2">Plan C</h3>
                                <p className="text-white/60 mb-6">3 Videos / Day</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">$2,500</span><span className="text-white/60">/mo</span>
                                </div>
                                <div className="space-y-4 flex-grow mb-8">
                                    <p className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>90 videos/month</p>
                                    <p className="flex items-center text-sm bg-white/5 p-2 rounded"><span className="text-pink-400 font-bold mr-2">Guarantee:</span> 50k followers in 3 mos</p>
                                </div>
                                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all text-center">Book Call</a>
                            </GlassCard>
                        </div>
                    </section>

                    {/* Bonuses */}
                    {showBonus && (
                        <section>
                            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-3xl p-1 backdrop-blur-md max-w-5xl mx-auto">
                                <div className="bg-gray-900/80 rounded-[20px] p-8 md:p-12 text-center md:text-left relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl leading-none text-red-500 select-none">BONUS</div>
                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                        <div>
                                            <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Expires April 15, 2026</div>
                                            <h3 className="text-3xl font-bold mb-4">Limited-Time Bonuses</h3>
                                            <p className="text-white/70 mb-6">Sign up before the deadline to unlock both bonuses on any plan.</p>
                                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 inline-block">
                                                <span className="font-mono text-xl text-red-400">Time is ticking...</span>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex items-start">
                                                <div className="bg-white/10 p-2 rounded-lg mr-4"><Icon path="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Bonus 1: Funnel Bonus Pack</h4>
                                                    <p className="text-sm text-white/60">Lead Magnet Guidance + Landing Page Copy + DM Scripts</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-white/10 p-2 rounded-lg mr-4"><Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Bonus 2: 15 Extra Videos Free</h4>
                                                    <p className="text-sm text-white/60">Effectively boosts initial month output by 50%+</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Process */}
                    <section>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Simple Process</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
                            {['Deep-dive Call', 'AI Clone Setup', 'Production', 'Posting', 'Funnel & Scale'].map((step, i) => (
                                <GlassCard key={i} className="text-center py-8">
                                    <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-indigo-500/30">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-bold">{step}</h4>
                                </GlassCard>
                            ))}
                        </div>
                    </section>

                    {/* Guarantee Terms */}
                    <section className="max-w-4xl mx-auto py-12 text-center border-t border-white/10">
                        <h3 className="text-xl font-bold mb-6 text-white/40 uppercase tracking-widest">Guarantee Terms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm text-white/60">
                            <p>• Follower guarantees apply when we post the agreed volume consistently for 3 months.</p>
                            <p>• You provide approvals fast enough to avoid posting gaps.</p>
                            <p>• The account is in good standing (no restrictions/policy issues).</p>
                            <p>• No fake follower buying or artificial boosts.</p>
                        </div>
                    </section>
                </main>
            </div>

            <style>{`
                .animated-gradient {
                    background: radial-gradient(circle at 10% 20%, rgba(128, 0, 128, 0.4), transparent 50%),
                                radial-gradient(circle at 80% 90%, rgba(0, 0, 255, 0.4), transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(255, 25, 25, 0.3), transparent 50%);
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

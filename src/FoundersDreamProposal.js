import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowDown, ChevronDown, Sparkles,
    TrendingUp, BarChart3, Users, Video, Share2,
    AlertTriangle, CheckCircle2, XCircle, Flame,
    Instagram, Youtube, Mic, Rocket, Crown,
    Copy, Repeat, LayoutGrid, Shield, Award
} from 'lucide-react';

const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);

// ============================================================
// SHARED
// ============================================================
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } })
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
};

function useCountUp(target, duration = 1500, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start || typeof target !== 'number') return;
        let n = 0;
        const inc = target / (duration / 16);
        const t = setInterval(() => {
            n += inc;
            if (n >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(n));
        }, 16);
        return () => clearInterval(t);
    }, [start, target, duration]);
    return count;
}

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

// ============================================================
// FLOATING SKIP BUTTON
// ============================================================
const FloatingPlanButton = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const h = () => setShow(window.scrollY > 500);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);
    return (
        <AnimatePresence>
            {show && (
                <motion.a href="#the-plan" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/15 transition-all shadow-2xl">
                    <Rocket className="w-4 h-4 text-indigo-400" /> Jump to Plan <ArrowDown className="w-3 h-3" />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

// ============================================================
// 1. HERO
// ============================================================
const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center text-white pt-20">
        <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-sm text-white/60">Prepared for The Founders Dream</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6">
                You create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">1,800 minutes</span> of content every month.
                <br />
                <span className="text-white/40">Only 100 clips make it out.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10">
                <span className="text-white font-semibold">60+ clients</span> pay ₹1.5L each to be on your podcast.
                They get a handful of clips on one Instagram account.
                <span className="text-white font-semibold"> 94% of the content they paid for</span> never reaches an audience.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#the-plan"
                    className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                    <Rocket className="w-4 h-4" /> See the Plan <ArrowDown className="w-4 h-4" />
                </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className="mt-20 flex flex-col items-center gap-2 text-white/30">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </div>
    </section>
);

// ============================================================
// 2. THE GAP — Stats
// ============================================================
const GapSection = () => {
    const [ref, inView] = useInView(0.3);
    const clients = useCountUp(60, 1500, inView);
    const mins = useCountUp(1800, 1500, inView);
    const clips = useCountUp(100, 1500, inView);
    const waste = useCountUp(94, 1500, inView);

    const stats = [
        { val: clients, suf: '+', label: 'Paying Clients/Month', icon: <Users className="w-5 h-5" />, color: 'text-green-400' },
        { val: mins.toLocaleString(), suf: '', label: 'Minutes Raw Content', icon: <Video className="w-5 h-5" />, color: 'text-purple-400' },
        { val: clips, suf: '', label: 'Clips Actually Made', icon: <Share2 className="w-5 h-5" />, color: 'text-indigo-400' },
        { val: waste, suf: '%', label: 'Content Wasted', icon: <AlertTriangle className="w-5 h-5" />, color: 'text-red-400' },
    ];

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <motion.div ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                        60+ clients pay ₹1.5L each.
                        <br />
                        <span className="text-white/40">They deserve more than 6 short videos.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} className="text-lg text-white/60 max-w-2xl mb-12">
                        Every month, TFD records 20+ podcast episodes — that's <span className="text-white font-semibold">1,800 minutes</span> of raw founder stories, insights, and business wisdom. Here's where it actually goes:
                    </motion.p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {stats.map((s, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i}
                            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                            <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${s.color} mx-auto mb-3`}>
                                {s.icon}
                            </div>
                            <p className="text-3xl md:text-4xl font-bold">{s.val}{s.suf}</p>
                            <p className="text-sm text-white/50 mt-1">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4">
                        <Flame className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                        <div className="space-y-2 text-white/60">
                            {[
                                'Each client\'s ₹1.5L buys an interview + ~6 clips on one IG account (23K followers). Gone in 48 hours.',
                                'No fan pages. No YouTube Shorts. No Facebook Reels. Zero cross-platform distribution.',
                                'Guest stories die after one spike instead of compounding across the internet.',
                            ].map((t, i) => (
                                <p key={i} className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />{t}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================================
// 3. COMPETITOR GAP
// ============================================================
const CompetitorSection = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-4xl md:text-5xl font-bold mb-4">
                Every major podcast brand has a fan page network.
                <br />
                <span className="text-white/40">Except The Founders Dream.</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="text-lg text-white/60 max-w-2xl mb-10">
                While competitors dominate feeds with 30+ fan pages and millions of organic impressions, TFD's 1,800 minutes of content stays locked in one account with 23K followers.
            </motion.p>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="bg-white/5 border border-green-500/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-5">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <h3 className="font-bold text-lg">Top Indian Podcast Brands</h3>
                    </div>
                    <ul className="space-y-2 text-white/60 text-sm">
                        {['30+ fan pages across platforms', 'Each clip on 3-5 platforms simultaneously', '10,000+ pieces/month through fan network', 'Millions of org impressions — no ad spend', 'Guest content lives forever'].map((t, i) => (
                            <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />{t}</li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={fadeUp} custom={1} className="bg-white/5 border border-red-500/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-5">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <h3 className="font-bold text-lg">The Founders Dream — Today</h3>
                    </div>
                    <ul className="space-y-2 text-white/60 text-sm">
                        {['Zero fan pages discovered', '1 IG account (23K followers)', '~100 clips/month from 20 episodes', 'No YouTube Shorts or Facebook Reels presence', '60+ clients\' visibility ends within 48 hours'].map((t, i) => (
                            <li key={i} className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />{t}</li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// 4. THE UNLOCK
// ============================================================
const UnlockSection = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6">
                    What if 60+ clients got distribution
                    <br />across a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">1,000-page network?</span>
                </motion.h2>

                <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-10">
                    {[
                        { before: '6 reels', after: '50,000+ posts', label: 'Content/month' },
                        { before: '1 IG account', after: '1,000 pages', label: 'Distribution' },
                        { before: '23K reach', after: '100M+ impressions', label: 'Monthly reach' },
                    ].map((item, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i + 2} className="bg-white/5 rounded-xl p-4">
                            <p className="text-sm text-red-400 line-through mb-1">{item.before}</p>
                            <p className="text-xl font-bold">{item.after}</p>
                            <p className="text-xs text-white/40 mt-1">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// 5. HOW DISTRIBUTION WORKS
// ============================================================
const DistributionSection = () => {
    const steps = [
        { icon: <Mic className="w-5 h-5" />, title: '1 Episode (90 min)', desc: 'Raw footage from one podcast session.', color: 'text-purple-400' },
        { icon: <Video className="w-5 h-5" />, title: '20-50 Unique Clips', desc: 'Hooks, explainers, reactions, listicles — each freshly edited.', color: 'text-blue-400' },
        {
            icon: <Copy className="w-5 h-5" />, title: '× 3 Platforms', desc: 'YouTube Shorts + Instagram Reels + Facebook Reels.', color: 'text-green-400',
            platforms: true
        },
        { icon: <LayoutGrid className="w-5 h-5" />, title: '× Multiple Fan Pages', desc: 'Different niches, different audiences, maximum reach.', color: 'text-indigo-400' },
        { icon: <Repeat className="w-5 h-5" />, title: 'Top 10% Remixed', desc: '7 derivatives per winner — hook swaps, language swaps, thumbnails.', color: 'text-pink-400' },
    ];

    return (
        <section id="distribution" className="py-20 text-white">
            <div className="container mx-auto px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-3">
                        We don't just make clips.
                        <span className="text-white/40"> We build a distribution machine.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} className="text-lg text-white/60 max-w-2xl mb-12">
                        Every episode goes through a pipeline that turns 90 minutes into thousands of posts.
                    </motion.p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 mb-14">
                    {steps.map((s, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i} className="relative">
                            {i < 4 && <div className="absolute left-[26px] top-full w-px h-3 bg-white/10 z-10" />}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
                                <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${s.color} flex-shrink-0`}>
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold">{s.title}</h3>
                                    <p className="text-sm text-white/50 mt-0.5">{s.desc}</p>
                                    {s.platforms && (
                                        <div className="flex gap-2 mt-2">
                                            {[{ icon: <Youtube className="w-3.5 h-3.5" />, n: 'YouTube' }, { icon: <Instagram className="w-3.5 h-3.5" />, n: 'Instagram' }, { icon: <FacebookIcon />, n: 'Facebook' }].map((p, j) => (
                                                <span key={j} className="flex items-center gap-1 text-xs text-white/40 px-2 py-1 rounded-full bg-white/5">{p.icon} {p.n}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Math box */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="bg-white/5 border border-indigo-500/10 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-5">
                        <BarChart3 className="w-5 h-5 text-indigo-400" />
                        <h3 className="font-bold text-lg">The Math</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            {
                                title: 'Per Episode', color: 'text-purple-400', rows: [
                                    ['Raw footage', '90 min'], ['Unique clips', '20-50'], ['× 3 platforms', '60-150 posts'], ['× fan pages', '600-1,500 posts']
                                ], total: ['1 episode =', '600-1,500 posts']
                            },
                            {
                                title: 'Per Month (20 Episodes)', color: 'text-indigo-400', rows: [
                                    ['Unique clips', '2,000-10,000'], ['× 3 platforms', '6K-30K'], ['× fan pages', '×2-5'], ['+ remixes', '+4K-10K']
                                ], total: ['Monthly total', '14K - 60K+']
                            },
                        ].map((box, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-5">
                                <p className={`text-xs ${box.color} font-mono uppercase tracking-wider mb-3`}>{box.title}</p>
                                <div className="space-y-2 text-sm">
                                    {box.rows.map(([l, r], j) => (
                                        <div key={j} className="flex justify-between text-white/50">
                                            <span>{l}</span><span className="text-white font-semibold">{r}</span>
                                        </div>
                                    ))}
                                    <div className="pt-2 border-t border-white/10 flex justify-between">
                                        <span className="text-white font-semibold">{box.total[0]}</span>
                                        <span className="text-indigo-400 font-bold text-lg">{box.total[1]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================================
// 6. THREE PLANS
// ============================================================
const plans = [
    {
        tag: 'Maximum Scale', tagColor: 'bg-red-500', name: 'Full Domination', icon: <Crown className="w-5 h-5" />,
        desc: 'The scale you asked for. Total market ownership.',
        clips: '10,000', pages: '1,000', posts: '50K - 60K', daily: '1,600 - 2,000',
        team: '18+ editors, 20+ SMMs, 8 page managers',
        bestFor: '100M+ impressions/month. No one catches up.',
        accent: 'text-red-400', border: 'border-red-500/15', bg: 'bg-red-500/5',
        note: 'Phased rollout: 100 → 300 → 1,000 pages over 3-5 months',
    },
    {
        tag: 'Best Value', tagColor: 'bg-purple-500', name: 'Scale Network', icon: <TrendingUp className="w-5 h-5" />,
        desc: 'Sweet spot between volume and efficiency.',
        clips: '5,000', pages: '200 - 300', posts: '25K - 35K', daily: '800 - 1,200',
        team: '10 editors, 8 SMMs, 5 page managers',
        bestFor: '50M+ impressions. Build the moat.',
        accent: 'text-purple-400', border: 'border-purple-500/15', bg: 'bg-purple-500/5',
    },
    {
        tag: '⭐ Recommended', tagColor: 'bg-indigo-500', name: 'Growth Engine', icon: <Rocket className="w-5 h-5" />,
        desc: 'Proven model. Start here, scale on results.',
        clips: '2,000', pages: '25', posts: '14K - 17K', daily: '450 - 560',
        team: '5 editors, 3 SMMs, account manager',
        bestFor: '25M+ impressions. Low risk, high upside.',
        accent: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/5',
        highlight: true,
        note: 'Results in 30 days. Flywheel by Month 3.',
    },
];

const PlansSection = () => (
    <section id="the-plan" className="py-20 text-white">
        <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12 text-center">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-3">
                    Three paths to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">100M+ impressions.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="text-lg text-white/60 max-w-xl mx-auto">
                    Unique clips + redistribution across fan pages on YouTube, Instagram, and Facebook.
                </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid lg:grid-cols-3 gap-6">
                {plans.map((p, i) => (
                    <motion.div key={p.name} variants={fadeUp} custom={i}
                        className={`bg-white/5 backdrop-blur border ${p.border} rounded-2xl p-7 flex flex-col ${p.highlight ? 'ring-1 ring-indigo-500/20' : ''}`}>
                        <span className={`self-start px-3 py-1 rounded-full text-xs font-bold text-white ${p.tagColor} mb-4`}>{p.tag}</span>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={p.accent}>{p.icon}</span>
                            <h3 className="text-xl font-bold">{p.name}</h3>
                        </div>
                        <p className="text-sm text-white/50 mb-5">{p.desc}</p>

                        <div className="space-y-2.5 mb-5 flex-1">
                            {[
                                ['Unique clips/mo', p.clips],
                                ['Fan pages', p.pages],
                                ['Total posts/mo', p.posts],
                                ['Daily rate', p.daily],
                            ].map(([l, v], j) => (
                                <div key={j} className="flex justify-between py-1.5 border-b border-white/5 text-sm">
                                    <span className="text-white/40">{l}</span>
                                    <span className="font-semibold">{v}</span>
                                </div>
                            ))}
                        </div>

                        <div className={`${p.bg} rounded-lg p-3 mb-3`}>
                            <p className="text-xs text-white/40">Team</p>
                            <p className="text-sm">{p.team}</p>
                        </div>

                        <div className="pt-3 border-t border-white/5 mt-auto">
                            <p className="text-xs text-white/30 uppercase tracking-wider">Best for</p>
                            <p className={`text-sm font-semibold ${p.accent}`}>{p.bestFor}</p>
                        </div>
                        {p.note && <p className="mt-2 text-xs text-white/30 italic">{p.note}</p>}
                    </motion.div>
                ))}
            </motion.div>

            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="mt-10 text-center text-white/50">
                Pricing is custom — based on scale, budget, and barter arrangement.
            </motion.p>
        </div>
    </section>
);

// ============================================================
// 7. GUEST UPGRADE
// ============================================================
const GuestUpgradeSection = () => (
    <section className="py-20 text-white">
        <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-10">
                    Every client's episode becomes a distribution event.
                </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid md:grid-cols-2 gap-4">
                {[
                    { icon: <Award className="w-5 h-5" />, title: 'Premium Positioning', desc: 'Guest stories across hundreds of pages on 3 platforms.', color: 'text-green-400' },
                    { icon: <TrendingUp className="w-5 h-5" />, title: 'Higher Guest Fees', desc: '"Your episode reaches 100M+ impressions." That justifies ₹2L+.', color: 'text-purple-400' },
                    { icon: <Users className="w-5 h-5" />, title: 'More Applications', desc: 'Founders see the distribution reach. Your waitlist grows.', color: 'text-blue-400' },
                    { icon: <Shield className="w-5 h-5" />, title: 'Competitive Moat', desc: 'No other Hindi business podcast has this. Once built, it compounds.', color: 'text-indigo-400' },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} custom={i}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${item.color} flex-shrink-0`}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-white/50">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

// ============================================================
// 8. FAQ
// ============================================================
const faqs = [
    ['Paid media or ads?', 'No. 100% organic distribution through fan pages. No ad spend.'],
    ['Who owns the fan pages?', 'We build and operate for maximum performance. Ownership transfer after a fixed term, as agreed.'],
    ['Unique videos or reposts?', 'Every clip is a unique, freshly edited piece. Redistribution = same unique clip posted across multiple fan pages and platforms.'],
    ['Won\'t fan pages dilute the brand?', 'Opposite. Each page targets a different niche. Your brand becomes discoverable where it wasn\'t before.'],
    ['Phased rollout?', 'Core pages Week 1, posting by Week 2, full capacity Month 2. 1,000-page plan scales from 100 → 300 → 1,000 over 3-5 months.'],
    ['Platform compliant?', 'Fully. No bots, no fake engagement, no scraping. All original content, pages clearly marked as fan pages.'],
    ['Barter arrangement?', 'Open to hybrid pricing. Podcast mentions & IG stories credit value against monthly fee. Details on call.'],
];

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between py-5 text-left group">
                <span className="font-medium group-hover:text-indigo-400 transition-colors pr-8">{q}</span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-white/40 text-xl flex-shrink-0">+</motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden">
                        <p className="pb-5 text-sm text-white/50 max-w-2xl">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => (
    <section id="faq" className="py-20 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-4xl md:text-5xl font-bold mb-10">FAQ</motion.h2>
            {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
        </div>
    </section>
);

// ============================================================
// MAIN
// ============================================================
export default function FoundersDreamProposal() {
    return (
        <>
            <FloatingPlanButton />
            <Hero />
            <GapSection />
            <CompetitorSection />
            <UnlockSection />
            <DistributionSection />
            <PlansSection />
            <GuestUpgradeSection />
            <FaqSection />
        </>
    );
}

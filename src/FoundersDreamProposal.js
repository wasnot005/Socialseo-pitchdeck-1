import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Play, ChevronDown, Shield, Sparkles,
    TrendingUp, Globe, Layers, Target, Zap,
    BarChart3, Users, Eye, Video, Share2,
    AlertTriangle, CheckCircle2, XCircle, Flame,
    Instagram, Youtube, Linkedin, Facebook, Clock,
    Megaphone, Bot, Star, Award, Mic
} from 'lucide-react';

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

// ============================================================
// ANIMATED COUNTER HOOK
// ============================================================
function useCountUp(target, duration = 2000, shouldStart = false) {
    const [count, setCount] = useState(0);
    const isNumber = typeof target === 'number';

    useEffect(() => {
        if (!shouldStart || !isNumber) return;
        let start = 0;
        const end = target;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [shouldStart, target, duration, isNumber]);

    return isNumber ? count : target;
}

// ============================================================
// INTERSECTION OBSERVER HOOK
// ============================================================
function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

// ============================================================
// SHARED COMPONENTS
// ============================================================
const GridMarkers = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
            <div
                key={i}
                className="grid-marker"
                style={{
                    top: `${15 + (i % 3) * 35}%`,
                    left: `${10 + Math.floor(i / 3) * 80}%`,
                }}
            />
        ))}
    </div>
);

const CALENDLY = "https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call";

const CtaButton = ({ children, className = '', size = 'md' }) => {
    const sizeClasses = size === 'lg' ? 'px-10 py-5 text-lg' : 'px-8 py-4 text-base';
    return (
        <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className={`glow-button ${sizeClasses} font-semibold text-white rounded-xl inline-flex items-center gap-2 group ${className}`}
        >
            {children}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
    );
};

// ============================================================
// SECTION 1: HERO — ATTENTION + PROBLEM AWARENESS
// ============================================================
const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <GridMarkers />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            {/* Personalized tag */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-sm font-medium text-surface-300">Prepared exclusively for The Founders Dream</span>
            </motion.div>

            {/* The hook — specific, personal, data-driven */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight text-white mb-8"
            >
                You create <span className="gradient-text">1,800 minutes</span>
                <br />of content every month.
                <br />
                <span className="text-surface-500">Only 100 clips make it out.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
            >
                <span className="text-white font-semibold">94% of your podcast gold</span> never reaches an audience.
                Every episode that stays trapped on one channel is a guest left underserved,
                a viewer never found, and authority left on the table.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <CtaButton>Let's Fix This — Book a Call</CtaButton>
                <a
                    href="#the-gap"
                    className="px-8 py-4 text-base font-semibold text-surface-300 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                >
                    <Play className="w-4 h-4" />
                    See The Opportunity
                </a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-sm text-surface-500"
            >
                15-minute call · No commitment · Custom strategy breakdown
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
            <div className="flex flex-col items-center gap-2 text-surface-500">
                <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
        </motion.div>
    </section>
);

// ============================================================
// SECTION 2: THE GAP — AGITATION (Content Waste Math)
// ============================================================
const GapSection = () => {
    const [ref, inView] = useInView(0.3);
    const episodesCount = useCountUp(20, 1500, inView);
    const minutesCount = useCountUp(1800, 1500, inView);
    const clipsCount = useCountUp(100, 1500, inView);
    const wasteCount = useCountUp(94, 1500, inView);

    return (
        <section id="the-gap" className="relative py-24 md:py-32">
            <div className="section-divider mb-24" />
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="mb-16"
                >
                    <motion.p variants={fadeUp} className="text-sm font-medium text-red-400 uppercase tracking-widest mb-4">
                        The Content Gap
                    </motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                        Your guests deserve
                        <br />
                        <span className="text-surface-400">more than 6 reels.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed max-w-2xl">
                        Right now, TFD's ₹1.5L package gives each guest a 90-minute interview and a handful of clips on one Instagram account. Here's what's actually happening with the content:
                    </motion.p>
                </motion.div>

                {/* The waste pipeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {[
                        { value: episodesCount, label: 'Episodes/Month', suffix: '', icon: <Mic className="w-5 h-5" />, color: 'text-blue-400' },
                        { value: minutesCount.toLocaleString(), label: 'Minutes of Raw Content', suffix: '', icon: <Video className="w-5 h-5" />, color: 'text-purple-400' },
                        { value: clipsCount, label: 'Clips Extracted', suffix: '', icon: <Share2 className="w-5 h-5" />, color: 'text-orange-400' },
                        { value: wasteCount, label: 'Content Wasted', suffix: '%', icon: <AlertTriangle className="w-5 h-5" />, color: 'text-red-400' },
                    ].map((stat, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i} className="glass-card p-6 text-center">
                            <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${stat.color} mx-auto mb-4`}>
                                {stat.icon}
                            </div>
                            <p className="text-3xl md:text-4xl font-display font-bold text-white">
                                {stat.value}{stat.suffix}
                            </p>
                            <p className="mt-2 text-sm text-surface-400 font-body">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* The pain statement */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-card p-8 md:p-10 bg-red-500/5 border-red-500/10"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0 mt-1">
                            <Flame className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-display font-semibold text-white text-lg mb-2">Here's what this means for your guests:</h3>
                            <ul className="space-y-2 text-surface-400 font-body">
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>Their founder story reaches <span className="text-white font-medium">23K followers on one IG account</span> — then disappears from feeds in 48 hours.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>No fan pages, no cross-platform presence, no long-tail discoverability on YouTube Shorts, TikTok, LinkedIn, or Facebook.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>Their ₹1.5 Lakh investment buys a <span className="text-white font-medium">one-time spike</span>, not a compounding growth engine.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================================
// SECTION 3: COMPETITOR REALITY — FOMO + URGENCY
// ============================================================
const CompetitorSection = () => (
    <section className="relative py-24 md:py-32">
        <GridMarkers />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-orange-400 uppercase tracking-widest mb-4">
                    The Competitive Gap
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                    Every major podcast brand
                    <br />
                    <span className="text-surface-400">has a fan page network. Except TFD.</span>
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
            >
                {/* Competitor side */}
                <motion.div variants={fadeUp} className="glass-card p-8 border-green-500/10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-semibold text-white text-lg">Top Indian Podcast Brands</h3>
                    </div>
                    <ul className="space-y-3 text-surface-400 font-body">
                        {[
                            '30+ active fan pages across platforms',
                            'Each clip distributed on 5 platforms simultaneously',
                            '10,000+ content pieces per month through fan network',
                            'Millions of organic impressions — no ad spend',
                            'Fan pages act as organic SEO magnets',
                            'Guest content lives forever across the internet',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* TFD side */}
                <motion.div variants={fadeUp} custom={1} className="glass-card p-8 border-red-500/10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                            <XCircle className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-semibold text-white text-lg">The Founders Dream — Today</h3>
                    </div>
                    <ul className="space-y-3 text-surface-400 font-body">
                        {[
                            'Zero fan pages discovered',
                            'Content posted on 1 Instagram account (23K)',
                            '~100 clips per month from 20 episodes',
                            'No presence on TikTok, Facebook Reels, or LinkedIn Video',
                            'No organic SEO footprint for "business podcast India"',
                            'Guest visibility ends within 48 hours of posting',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>

            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-8 text-center text-surface-400 font-body"
            >
                <span className="text-white font-semibold">This isn't about catching up.</span> It's about claiming the space before someone else builds it around your brand.
            </motion.p>
        </div>
    </section>
);

// ============================================================
// SECTION 4: THE UNLOCK — SOLUTION (Reframe as guest package upgrade)
// ============================================================
const UnlockSection = () => (
    <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="relative overflow-hidden rounded-3xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-blue-600/10" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />

                <div className="relative glass-card p-10 md:p-16 text-center" style={{ transform: 'none' }}>
                    <motion.p variants={fadeUp} className="text-sm font-medium text-orange-400 uppercase tracking-widest mb-6">
                        The Unlock
                    </motion.p>

                    <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                        What if every TFD guest got
                        <br />
                        <span className="gradient-text">100M+ impressions</span>
                        <br />
                        as part of their package?
                    </motion.h2>

                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        Instead of promising 6 reels on one account, TFD could promise distribution across a
                        <span className="text-white font-semibold"> fan page network with 100M+ monthly reach</span> —
                        across Instagram, YouTube, Facebook, TikTok, and LinkedIn.
                    </motion.p>

                    <motion.div variants={fadeUp} custom={3} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                        {[
                            { before: '6 reels', after: '5,000+ pieces', label: 'Content pieces/month' },
                            { before: '1 IG account', after: '25+ fan pages', label: 'Distribution channels' },
                            { before: '23K reach', after: '100M+ impressions', label: 'Monthly reach' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={scaleIn} custom={i + 3} className="bg-white/5 rounded-xl p-4">
                                <p className="text-sm text-red-400 line-through font-body mb-1">{item.before}</p>
                                <p className="text-xl font-display font-bold text-white">{item.after}</p>
                                <p className="text-xs text-surface-500 font-body mt-1">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} custom={6} className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-6 max-w-xl mx-auto">
                        <p className="text-surface-300 font-body leading-relaxed">
                            <span className="text-white font-semibold">Your ₹1.5L guest package instantly becomes 10x more valuable.</span>
                            {' '}Guests don't just get an interview — they get a viral distribution engine.
                            That means more bookings, higher willingness to pay, and a moat that no competitor can copy overnight.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 5: HOW IT WORKS — PROCESS
// ============================================================
const steps = [
    {
        num: '01',
        title: 'Content Ingestion',
        desc: 'We take your existing podcast episodes — all 20+/month — and feed them into our clip factory. Every minute of footage is tagged, indexed, and ready to become content.',
        icon: <Video className="w-5 h-5" />,
    },
    {
        num: '02',
        title: 'Fan Page Network Build',
        desc: 'We launch 15-25 fan pages across 5 platforms, organized into 3 tiers: quality flagships, testing pages, and experimental/viral pages.',
        icon: <Layers className="w-5 h-5" />,
    },
    {
        num: '03',
        title: 'Mass Clip Production',
        desc: '2,000+ unique clips created monthly — text hooks, explainers, myth-busts, reactions, listicles. Simple, fast, optimized for each platform.',
        icon: <Zap className="w-5 h-5" />,
    },
    {
        num: '04',
        title: '5-Platform Distribution',
        desc: 'Every clip goes live on Instagram, YouTube Shorts, Facebook Reels, TikTok, and LinkedIn. 2,000 clips × 5 platforms = 10,000+ posts.',
        icon: <Globe className="w-5 h-5" />,
    },
    {
        num: '05',
        title: 'Remix & Compound',
        desc: 'Top 10% performers get 7 derivatives each — hook swaps, language swaps, thumbnail tests, meme formats. Winners multiply. Losers get culled.',
        icon: <TrendingUp className="w-5 h-5" />,
    },
    {
        num: '06',
        title: 'Report & Scale',
        desc: 'Weekly analytics. Monthly growth reviews. Constant optimization. The network learns what works and doubles down automatically.',
        icon: <BarChart3 className="w-5 h-5" />,
    },
];

const ProcessSection = () => (
    <section id="process" className="relative py-24 md:py-32">
        <GridMarkers />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
                    How It Works
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                    From raw podcast
                    <br />
                    <span className="text-surface-400">to 10,000+ monthly posts.</span>
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
                className="relative"
            >
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent" />

                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            variants={fadeUp}
                            custom={i}
                            className="relative flex gap-8 group"
                        >
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-surface-900 border border-white/10 flex items-center justify-center text-blue-400 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                                {step.icon}
                            </div>
                            <div className="pt-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-mono text-surface-500">{step.num}</span>
                                    <h3 className="text-lg font-display font-semibold text-white">{step.title}</h3>
                                </div>
                                <p className="text-sm text-surface-400 font-body leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 6: THE NETWORK — Fan Page Architecture Visual
// ============================================================
const tiers = [
    {
        name: 'Tier 1 — Flagships',
        badgeColor: 'bg-blue-500',
        desc: 'Quality-first. Story-driven. Minimal captions. These pages anchor the network with high-trust content.',
        pages: ['TFD Business Insights', 'Founder Mindset Daily', 'Startup Stories India', 'Common Wisdom Hub', 'Hindi Business Edge'],
        postsPerPage: '40-80/month',
    },
    {
        name: 'Tier 2 — Scale & Testing',
        badgeColor: 'bg-purple-500',
        desc: 'Volume + experimentation. Text hooks, A/B title tests, EN↔HI language swaps, thumbnail variants.',
        pages: ['Viral Biz Clips', 'Founder Hot Takes', 'Business Motivation HI', 'Startup Quiz & Polls', 'Cross-Niche Summaries'],
        postsPerPage: '80-120/month',
    },
    {
        name: 'Tier 3 — Labs & Viral',
        badgeColor: 'bg-pink-500',
        desc: 'Experimental. Memes, split-screen, stitch/duet, regional language pilots. High risk, high reward.',
        pages: ['Biz Memes India', 'Founder Reactions', 'Regional Startup Gyaan'],
        postsPerPage: '130-150/month',
    },
];

const NetworkSection = () => (
    <section className="relative py-24 md:py-32">
        <div className="section-divider mb-24" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-4">
                    The Fan Page Network
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                    13-25 fan pages.
                    <br />
                    <span className="text-surface-400">5 platforms. 3 tiers.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body max-w-2xl leading-relaxed">
                    Each page serves a different audience niche and content style. The 3-tier system lets us test fast, find winners, and scale what works.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
            >
                {tiers.map((tier, i) => (
                    <motion.div key={i} variants={fadeUp} custom={i} className="glass-card p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${tier.badgeColor}`}>
                                {tier.name}
                            </span>
                        </div>
                        <p className="text-sm text-surface-400 font-body mb-6 leading-relaxed">{tier.desc}</p>

                        <div className="space-y-2 mb-6">
                            {tier.pages.map((page, j) => (
                                <div key={j} className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    <span className="text-surface-300 font-body">{page}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-xs text-surface-500 font-body">Posts per page</p>
                            <p className="text-lg font-display font-bold text-white">{tier.postsPerPage}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Platform logos */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
                {[
                    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
                    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                    { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.99a8.21 8.21 0 0 0 4.76 1.52V7.09a4.85 4.85 0 0 1-1-.4z" /></svg>, label: 'TikTok' },
                    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                ].map((platform, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-surface-400">
                        {platform.icon}
                        <span className="text-sm font-body">{platform.label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 7: THE NUMBERS — STATS
// ============================================================
const StatItem = ({ value, suffix, label, delay }) => {
    const [ref, inView] = useInView(0.3);
    const count = useCountUp(typeof value === 'number' ? value : 0, 2000, inView);

    return (
        <motion.div ref={ref} variants={fadeUp} custom={delay} className="text-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white stat-value">
                {typeof value === 'number' ? count.toLocaleString() : value}
                <span className="text-orange-400">{suffix}</span>
            </p>
            <p className="mt-3 text-sm md:text-base text-surface-400 font-body">{label}</p>
        </motion.div>
    );
};

const StatsSection = () => (
    <section className="relative py-24 md:py-32">
        <div className="section-divider mb-24" />
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto px-6 lg:px-8"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatItem value={5000} suffix="+" label="Content Pieces/Month" delay={0} />
                <StatItem value={25} suffix="+" label="Active Fan Pages" delay={1} />
                <StatItem value={5} suffix="" label="Platforms Simultaneously" delay={2} />
                <StatItem value="100" suffix="M+" label="Impressions in 90 Days" delay={3} />
            </div>
        </motion.div>
        <div className="section-divider mt-24" />
    </section>
);

// ============================================================
// SECTION 8: GUEST VALUE UPGRADE
// ============================================================
const GuestUpgradeSection = () => (
    <section className="relative py-24 md:py-32">
        <GridMarkers />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                >
                    <motion.p variants={fadeUp} className="text-sm font-medium text-green-400 uppercase tracking-widest mb-4">
                        Upgrade Your Guest Package
                    </motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
                        Turn every podcast
                        <br />
                        <span className="text-surface-400">into a distribution event.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed mb-8">
                        With our fan page network, your guest package transforms from "an interview and some reels"
                        to "a full-scale distribution campaign reaching 100M+ impressions." That's a pitch no competitor can match.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={3}>
                        <CtaButton>Discuss Your Custom Plan</CtaButton>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={staggerContainer}
                    className="space-y-4"
                >
                    {[
                        {
                            icon: <Award className="w-5 h-5" />,
                            title: 'Premium Guest Positioning',
                            desc: 'Guests see their story on 25+ pages across 5 platforms — not just buried in one feed.',
                        },
                        {
                            icon: <TrendingUp className="w-5 h-5" />,
                            title: 'Higher Guest Fee Justification',
                            desc: '"Your episode will be distributed to a 100M+ impression network." That justifies higher pricing.',
                        },
                        {
                            icon: <Users className="w-5 h-5" />,
                            title: 'More Guest Applications',
                            desc: 'When founders see the distribution reach, they come to you. Your waitlist grows. Your selectivity increases.',
                        },
                        {
                            icon: <Shield className="w-5 h-5" />,
                            title: 'Competitive Moat',
                            desc: "No other Hindi podcast has this infrastructure. Once built, it compounds. Competitors can't replicate overnight.",
                        },
                    ].map((item, i) => (
                        <motion.div key={item.title} variants={fadeUp} custom={i} className="glass-card p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-surface-400 font-body">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);

// ============================================================
// SECTION 9: FAQ
// ============================================================
const faqData = [
    {
        q: 'Is this paid media or ads?',
        a: "No. This is 100% organic distribution through fan pages and niche communities. No ad spend involved. Every view is earned through content quality and algorithmic optimization.",
    },
    {
        q: 'Who owns the fan pages?',
        a: 'We build and operate the network for maximum performance. Page ownership can be transferred after a fixed term or milestone, as agreed. The focus is on results, not page control.',
    },
    {
        q: 'Do you create new videos or just repost our content?',
        a: "We create brand-new, unique content from your podcast footage. Every clip is freshly edited with custom hooks, text overlays, thumbnails, and platform-specific formatting. It's original content, not reposts.",
    },
    {
        q: "Won't multiple fan pages dilute our brand?",
        a: "The opposite happens. Each fan page targets a different niche and audience segment. Your brand becomes discoverable in places it never was before — business, motivation, viral, regional. It's distribution, not dilution.",
    },
    {
        q: 'Is this compliant with platform policies?',
        a: 'Absolutely. No fake engagement, no bots, no scraping. All content is original and policy-compliant. Fan pages are clearly marked as unofficial — a standard practice across all major brands.',
    },
    {
        q: 'How fast can we see results?',
        a: 'Fan pages start posting within Week 2. By Week 4, you\'ll see initial traction. The network compounds over 90 days — Month 3 is where the flywheel really kicks in.',
    },
    {
        q: "What if our brand is sensitive to controversy?",
        a: "Edgier content angles route through third-party fan pages — your main handle stays clean and brand-safe. You control the guardrails; we execute within them.",
    },
];

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-base md:text-lg font-display font-medium text-white pr-8 group-hover:text-orange-400 transition-colors">
                    {question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-surface-400 text-xl flex-shrink-0"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-sm md:text-base text-surface-400 font-body leading-relaxed max-w-2xl">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => (
    <section id="faq" className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-12"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
                    FAQ
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-white">
                    Questions you're probably asking.
                </motion.h2>
            </motion.div>

            <div>
                {faqData.map((faq, i) => (
                    <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
            </div>
        </div>
    </section>
);

// ============================================================
// SECTION 10: FINAL CTA — URGENCY + ACTION
// ============================================================
const FinalCtaSection = () => (
    <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-orange-400 uppercase tracking-widest mb-6">
                    Next Step
                </motion.p>

                <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                    Your content is
                    <br />
                    <span className="gradient-text">already created.</span>
                    <br />
                    <span className="text-surface-400">Let's distribute it.</span>
                </motion.h2>

                <motion.p variants={fadeUp} custom={2} className="text-lg text-surface-400 font-body max-w-xl mx-auto mb-4">
                    15 minutes. No pitch. No commitment. We'll walk through your current distribution,
                    show you exactly where your content is being wasted, and map out a custom fan page strategy for TFD.
                </motion.p>

                <motion.p variants={fadeUp} custom={3} className="text-sm text-surface-500 font-body mb-10">
                    <Clock className="w-4 h-4 inline-block mr-1 text-orange-400" />
                    Currently booking 1 week out — slots fill fast.
                </motion.p>

                <motion.div variants={fadeUp} custom={4}>
                    <CtaButton size="lg">Book Your 15-Min Strategy Call</CtaButton>
                </motion.div>

                <motion.p variants={fadeUp} custom={5} className="mt-6 text-xs text-surface-500 font-body">
                    This call is a genuine strategy session — not a sales pitch.
                    You'll walk away with actionable insights either way.
                </motion.p>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// HEADER
// ============================================================
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/5'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-tight">
                            Social<span className="text-orange-400">SEO</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {['The Gap', 'Process', 'Network', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-surface-400 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-button px-6 py-2.5 text-sm font-semibold text-white rounded-xl"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </header>
    );
};

// ============================================================
// FOOTER
// ============================================================
const Footer = () => (
    <footer className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-display font-bold text-white">
                        Social<span className="text-orange-400">SEO</span>
                    </span>
                </div>
                <p className="text-xs text-surface-500 font-body">
                    Prepared exclusively for The Founders Dream · {new Date().getFullYear()}
                </p>
                <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                >
                    Book a Call →
                </a>
            </div>
        </div>
    </footer>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function FoundersDreamProposal() {
    return (
        <div className="relative">
            <Header />
            <main>
                <HeroSection />
                <GapSection />
                <CompetitorSection />
                <UnlockSection />
                <ProcessSection />
                <NetworkSection />
                <StatsSection />
                <GuestUpgradeSection />
                <FaqSection />
                <FinalCtaSection />
            </main>
            <Footer />
        </div>
    );
}

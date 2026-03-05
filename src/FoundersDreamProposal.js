import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ArrowDown, Play, ChevronDown, Shield, Sparkles,
    TrendingUp, Globe, Layers, Zap,
    BarChart3, Users, Video, Share2,
    AlertTriangle, CheckCircle2, XCircle, Flame,
    Instagram, Youtube, Facebook, Clock,
    Award, Mic, Rocket, Crown, Star,
    Copy, GitBranch, Repeat, LayoutGrid
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

const TikTokIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.99a8.21 8.21 0 0 0 4.76 1.52V7.09a4.85 4.85 0 0 1-1-.4z" />
    </svg>
);

// ============================================================
// FLOATING "JUMP TO PLAN" BUTTON
// ============================================================
const FloatingPlanButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="#the-plan"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/15 hover:border-orange-500/30 transition-all duration-300 shadow-2xl"
                >
                    <Rocket className="w-4 h-4 text-orange-400" />
                    Jump to Plan
                    <ArrowDown className="w-3 h-3" />
                </motion.a>
            )}
        </AnimatePresence>
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-sm font-medium text-surface-300">Prepared exclusively for The Founders Dream</span>
            </motion.div>

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
                <span className="text-white font-semibold">60+ clients</span> pay ₹1.5L each to be on your podcast.
                They get a handful of clips on one Instagram account. <span className="text-white font-semibold">94% of the content they paid for</span> never reaches an audience.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <CtaButton>Let's Talk — Book a Call</CtaButton>
                <a
                    href="#the-plan"
                    className="px-8 py-4 text-base font-semibold text-orange-400 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 flex items-center gap-2 group"
                >
                    <Rocket className="w-4 h-4" />
                    Skip to Plan
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-sm text-surface-500"
            >
                15-minute call · No commitment · Custom quotation walkthrough
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
    const clientCount = useCountUp(60, 1500, inView);
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
                        60+ clients pay ₹1.5L each.
                        <br />
                        <span className="text-surface-400">They deserve more than 6 reels.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed max-w-2xl">
                        Every month, TFD produces 20+ podcast episodes. That's 1,800 minutes of raw founder stories, insights, and business wisdom. Here's where it actually goes:
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {[
                        { value: clientCount, label: 'Paying Clients/Month', suffix: '+', icon: <Users className="w-5 h-5" />, color: 'text-green-400' },
                        { value: minutesCount.toLocaleString(), label: 'Minutes of Raw Content', suffix: '', icon: <Video className="w-5 h-5" />, color: 'text-purple-400' },
                        { value: clipsCount, label: 'Clips Actually Made', suffix: '', icon: <Share2 className="w-5 h-5" />, color: 'text-orange-400' },
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
                            <h3 className="font-display font-semibold text-white text-lg mb-2">Here's what this means for your 60+ clients:</h3>
                            <ul className="space-y-2 text-surface-400 font-body">
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>Their ₹1.5 Lakh investment buys an interview and <span className="text-white font-medium">~6 clips on one IG account (23K followers)</span> — gone from feeds in 48 hours.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>No fan pages, no YouTube Shorts, no Facebook Reels. <span className="text-white font-medium">Zero cross-platform distribution.</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                                    <span>Each client's founder story <span className="text-white font-medium">dies after one spike</span> instead of compounding across the internet.</span>
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
                            'Each clip distributed on 3-5 platforms simultaneously',
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
                            'No presence on YouTube Shorts or Facebook Reels',
                            'No organic SEO footprint for "business podcast India"',
                            '60+ clients\' visibility ends within 48 hours of posting',
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
// SECTION 4: THE UNLOCK — SOLUTION
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
                        What if your <span className="gradient-text">60+ clients</span>
                        <br />got distribution across a
                        <br /><span className="gradient-text">1,000-page network?</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        Instead of promising 6 reels on one account, TFD promises distribution across a
                        <span className="text-white font-semibold"> fan page network generating 100M+ impressions/month</span> —
                        across YouTube, Instagram, and Facebook.
                    </motion.p>

                    <motion.div variants={fadeUp} custom={3} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                        {[
                            { before: '6 reels', after: '50,000+ posts', label: 'Content pieces/month' },
                            { before: '1 IG account', after: '1,000 pages', label: 'Distribution channels' },
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
                            {' '}Every client gets a viral distribution engine — not just an interview. More bookings, higher willingness to pay, and a moat no competitor can copy.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 5: HOW DISTRIBUTION WORKS (NEW)
// ============================================================
const DistributionSection = () => (
    <section id="distribution" className="relative py-24 md:py-32">
        <GridMarkers />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
                    How Distribution Works
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                    We don't just make clips.
                    <br />
                    <span className="text-surface-400">We build a distribution machine.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body max-w-2xl leading-relaxed">
                    Every podcast episode goes through a pipeline that turns 90 minutes of footage into thousands of distributed posts. Here's exactly how:
                </motion.p>
            </motion.div>

            {/* Pipeline Steps */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
                className="space-y-4 mb-16"
            >
                {[
                    {
                        icon: <Mic className="w-5 h-5" />,
                        label: 'STEP 1',
                        title: '1 Podcast Episode (90 min)',
                        desc: 'Your raw footage — one interview, one guest, one session.',
                        color: 'text-purple-400',
                        borderColor: 'border-purple-500/20',
                    },
                    {
                        icon: <Video className="w-5 h-5" />,
                        label: 'STEP 2',
                        title: '20-50 Unique Clips Created',
                        desc: 'Simple edits: text hooks, explainers, reactions, myth-busts, listicles, quotes. Each one is a fresh, unique piece of content.',
                        color: 'text-blue-400',
                        borderColor: 'border-blue-500/20',
                    },
                    {
                        icon: <Copy className="w-5 h-5" />,
                        label: 'STEP 3',
                        title: '× 3 Platforms',
                        desc: 'Each clip gets formatted and posted on YouTube Shorts, Instagram Reels, and Facebook Reels — 3 posts from 1 clip.',
                        color: 'text-green-400',
                        borderColor: 'border-green-500/20',
                        platforms: true,
                    },
                    {
                        icon: <LayoutGrid className="w-5 h-5" />,
                        label: 'STEP 4',
                        title: '× Multiple Fan Pages',
                        desc: 'Each clip gets distributed across multiple fan pages per platform. Different niches, different audiences, maximum reach.',
                        color: 'text-orange-400',
                        borderColor: 'border-orange-500/20',
                    },
                    {
                        icon: <Repeat className="w-5 h-5" />,
                        label: 'STEP 5',
                        title: 'Top 10% Get Remixed',
                        desc: 'Winning clips get 7 derivatives each — hook swaps, language swaps (EN↔HI), thumbnail variants, meme formats. Winners multiply.',
                        color: 'text-pink-400',
                        borderColor: 'border-pink-500/20',
                    },
                ].map((step, i) => (
                    <motion.div key={i} variants={fadeUp} custom={i} className="relative">
                        {i < 4 && (
                            <div className="absolute left-10 top-full w-px h-4 bg-gradient-to-b from-white/10 to-transparent z-10" />
                        )}
                        <div className={`glass-card p-6 flex items-start gap-5 ${step.borderColor}`}>
                            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${step.color} flex-shrink-0`}>
                                {step.icon}
                            </div>
                            <div className="flex-1">
                                <span className={`text-xs font-mono ${step.color} uppercase tracking-wider`}>{step.label}</span>
                                <h3 className="text-lg font-display font-semibold text-white mt-1">{step.title}</h3>
                                <p className="text-sm text-surface-400 font-body mt-1 leading-relaxed">{step.desc}</p>
                                {step.platforms && (
                                    <div className="flex items-center gap-3 mt-3">
                                        {[
                                            { icon: <Youtube className="w-4 h-4" />, name: 'YouTube' },
                                            { icon: <Instagram className="w-4 h-4" />, name: 'Instagram' },
                                            { icon: <Facebook className="w-4 h-4" />, name: 'Facebook' },
                                        ].map((p, j) => (
                                            <span key={j} className="flex items-center gap-1.5 text-xs text-surface-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                                                {p.icon} {p.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* The Math Box */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 bg-blue-500/5 border-blue-500/10"
            >
                <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <h3 className="font-display font-semibold text-white text-lg">The Distribution Math</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Per Episode */}
                    <div className="bg-white/5 rounded-xl p-5">
                        <p className="text-xs text-blue-400 font-mono uppercase tracking-wider mb-3">Per Episode</p>
                        <div className="space-y-2 text-sm font-body">
                            <div className="flex items-center justify-between text-surface-400">
                                <span>Raw footage</span>
                                <span className="text-white font-semibold">90 min</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>Unique clips created</span>
                                <span className="text-white font-semibold">20-50</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>× 3 platforms</span>
                                <span className="text-white font-semibold">60-150 posts</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>× multiple fan pages</span>
                                <span className="text-white font-semibold">600-1,500 posts</span>
                            </div>
                            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                                <span className="text-white font-semibold">From 1 episode</span>
                                <span className="text-orange-400 font-display font-bold text-lg">600-1,500 posts</span>
                            </div>
                        </div>
                    </div>

                    {/* Per Month */}
                    <div className="bg-white/5 rounded-xl p-5">
                        <p className="text-xs text-orange-400 font-mono uppercase tracking-wider mb-3">Per Month (20 Episodes)</p>
                        <div className="space-y-2 text-sm font-body">
                            <div className="flex items-center justify-between text-surface-400">
                                <span>Total unique clips</span>
                                <span className="text-white font-semibold">2,000-10,000</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>× 3 platforms</span>
                                <span className="text-white font-semibold">6,000-30,000</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>× fan page distribution</span>
                                <span className="text-white font-semibold">×2-5</span>
                            </div>
                            <div className="flex items-center justify-between text-surface-400">
                                <span>+ remix derivatives</span>
                                <span className="text-white font-semibold">+4,000-10,000</span>
                            </div>
                            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                                <span className="text-white font-semibold">Total monthly posts</span>
                                <span className="text-orange-400 font-display font-bold text-lg">14K - 60K+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 6: THE 3 PLANS (NEW)
// ============================================================
const plans = [
    {
        tag: 'Maximum Scale',
        tagColor: 'bg-red-500',
        name: 'Full Domination',
        icon: <Crown className="w-6 h-6" />,
        desc: 'The scale you asked for. Total market ownership — no competitor can even think about catching up.',
        clips: '10,000',
        pages: '1,000',
        totalPosts: '50,000 - 60,000',
        dailyPosts: '1,600 - 2,000',
        team: '18+ clip directors, 20+ SMMs, 8 page managers',
        analytics: 'Real-time dashboard + weekly + monthly',
        bestFor: 'Total market domination. 100M+ impressions/month.',
        borderColor: 'border-red-500/20',
        accentColor: 'text-red-400',
        bgAccent: 'bg-red-500/5',
        note: 'Phased rollout: 100 → 300 → 1,000 pages over 3-5 months',
    },
    {
        tag: 'Best Value',
        tagColor: 'bg-purple-500',
        name: 'Scale Network',
        icon: <TrendingUp className="w-6 h-6" />,
        desc: 'The sweet spot between volume and operational efficiency. Massive distribution without the full army.',
        clips: '5,000',
        pages: '200 - 300',
        totalPosts: '25,000 - 35,000',
        dailyPosts: '800 - 1,200',
        team: '10 clip directors, 8 SMMs, 5 page managers',
        analytics: 'Weekly + monthly + platform-wise breakdown',
        bestFor: 'Scaling distribution. 50M+ impressions. Building your moat.',
        borderColor: 'border-purple-500/20',
        accentColor: 'text-purple-400',
        bgAccent: 'bg-purple-500/5',
        note: null,
    },
    {
        tag: '⭐ Recommended',
        tagColor: 'bg-orange-500',
        name: 'Growth Engine',
        icon: <Rocket className="w-6 h-6" />,
        desc: 'Proven model. Fastest path to results. Start here, scale up once the flywheel is spinning.',
        clips: '2,000',
        pages: '25',
        totalPosts: '14,000 - 17,000',
        dailyPosts: '450 - 560',
        team: '5 clip directors, 3 SMMs, dedicated account manager',
        analytics: 'Weekly snapshots + monthly deep-dive report',
        bestFor: 'Proving the model. 25M+ impressions. Low risk, high upside.',
        borderColor: 'border-orange-500/30',
        accentColor: 'text-orange-400',
        bgAccent: 'bg-orange-500/5',
        highlight: true,
        note: 'Results visible in 30 days. Flywheel kicks in by Month 3.',
    },
];

const PlansSection = () => (
    <section id="the-plan" className="relative py-24 md:py-32">
        <div className="section-divider mb-24" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mb-16 text-center"
            >
                <motion.p variants={fadeUp} className="text-sm font-medium text-orange-400 uppercase tracking-widest mb-4">
                    The Plan
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                    Three paths to
                    <br />
                    <span className="gradient-text">100M+ impressions.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body max-w-xl mx-auto">
                    Each plan combines unique clip production + redistribution across fan pages on YouTube, Instagram, and Facebook. Pick a scale. We build it.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-3 gap-6"
            >
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        variants={fadeUp}
                        custom={i}
                        className={`glass-card p-8 ${plan.borderColor} ${plan.highlight ? 'ring-1 ring-orange-500/20' : ''} relative flex flex-col`}
                    >
                        {/* Tag */}
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${plan.tagColor} self-start mb-4`}>
                            {plan.tag}
                        </span>

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`${plan.accentColor}`}>{plan.icon}</div>
                            <h3 className="text-2xl font-display font-bold text-white">{plan.name}</h3>
                        </div>

                        <p className="text-sm text-surface-400 font-body mb-6 leading-relaxed">{plan.desc}</p>

                        {/* Stats Grid */}
                        <div className="space-y-3 mb-6 flex-1">
                            {[
                                { label: 'Unique clips/month', value: plan.clips },
                                { label: 'Fan pages', value: plan.pages },
                                { label: 'Total posts/month', value: plan.totalPosts },
                                { label: 'Daily posting rate', value: plan.dailyPosts },
                            ].map((stat, j) => (
                                <div key={j} className="flex items-center justify-between py-2 border-b border-white/5">
                                    <span className="text-sm text-surface-400 font-body">{stat.label}</span>
                                    <span className="text-sm text-white font-semibold font-display">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Team & Analytics */}
                        <div className={`${plan.bgAccent} rounded-lg p-4 mb-4`}>
                            <p className="text-xs text-surface-400 font-body mb-1">Dedicated team</p>
                            <p className="text-sm text-white font-body">{plan.team}</p>
                        </div>
                        <div className={`${plan.bgAccent} rounded-lg p-4 mb-4`}>
                            <p className="text-xs text-surface-400 font-body mb-1">Analytics</p>
                            <p className="text-sm text-white font-body">{plan.analytics}</p>
                        </div>

                        {/* Best For */}
                        <div className="pt-4 border-t border-white/5 mt-auto">
                            <p className="text-xs text-surface-500 font-body mb-1 uppercase tracking-wider">Best for</p>
                            <p className={`text-sm font-semibold ${plan.accentColor} font-body`}>{plan.bestFor}</p>
                        </div>

                        {/* Note */}
                        {plan.note && (
                            <p className="mt-3 text-xs text-surface-500 font-body italic">{plan.note}</p>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA under plans */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-12 text-center"
            >
                <p className="text-surface-400 font-body mb-6">
                    <span className="text-white font-semibold">Pricing is custom</span> — based on your budget, scale preference, and barter arrangement.
                    <br />Let's walk through the numbers together.
                </p>
                <CtaButton size="lg">Get Your Custom Quotation</CtaButton>
            </motion.div>
        </div>
    </section>
);

// ============================================================
// SECTION 7: GUEST VALUE UPGRADE
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
                        Every client's episode becomes
                        <br />
                        <span className="text-surface-400">a distribution event.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed mb-8">
                        Your 60+ monthly clients don't just get an interview anymore. They get a viral distribution engine across a fan page network reaching 100M+ impressions. That's a package no competing podcast can offer.
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
                            desc: 'Guests see their story across hundreds of pages on 3 platforms — not buried in one feed.',
                        },
                        {
                            icon: <TrendingUp className="w-5 h-5" />,
                            title: 'Higher Guest Fee Justification',
                            desc: '"Your episode will be distributed to a 100M+ impression network." That justifies ₹2L+ pricing.',
                        },
                        {
                            icon: <Users className="w-5 h-5" />,
                            title: 'More Guest Applications',
                            desc: 'When founders see the distribution reach, they come to you. Your waitlist grows. Your selectivity increases.',
                        },
                        {
                            icon: <Shield className="w-5 h-5" />,
                            title: 'Competitive Moat',
                            desc: "No other Hindi business podcast has this infrastructure. Once built, it compounds. Competitors can't replicate overnight.",
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
// SECTION 8: FAQ
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
        q: 'Are these unique videos or reposts?',
        a: "Every clip is a unique, freshly edited piece of content — custom hooks, text overlays, thumbnails, platform-specific formatting. The redistribution happens when we post the same unique clip across multiple fan pages and platforms. It's original content, distributed wide.",
    },
    {
        q: "Won't multiple fan pages dilute our brand?",
        a: "The opposite happens. Each fan page targets a different niche and audience segment. Your brand becomes discoverable in places it never was before — business, motivation, viral, regional. It's distribution, not dilution.",
    },
    {
        q: 'How does the phased rollout work?',
        a: 'We start with core pages in Week 1, begin posting by Week 2, and reach full capacity by Month 2. For the 1,000-page plan, we scale from 100 → 300 → 1,000 pages over 3-5 months to ensure quality and consistency at every level.',
    },
    {
        q: 'Is this compliant with platform policies?',
        a: 'Absolutely. No fake engagement, no bots, no scraping. All content is original and policy-compliant. Fan pages are clearly marked as unofficial — a standard practice across all major brands.',
    },
    {
        q: "What about the barter arrangement?",
        a: "We're open to a hybrid pricing model. TFD promotes our services through podcast mentions, IG stories, or newsletter features — and we credit that value against the monthly fee. We'll discuss the specifics on the call.",
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
// SECTION 9: FINAL CTA — URGENCY + ACTION
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
                    Ready to see
                    <br />
                    <span className="gradient-text">the numbers?</span>
                </motion.h2>

                <motion.p variants={fadeUp} custom={2} className="text-lg text-surface-400 font-body max-w-xl mx-auto mb-4">
                    The quotation is custom-built for TFD — based on your scale, budget, and barter arrangement. Let's walk through it live so we can answer every question on the spot.
                </motion.p>

                <motion.p variants={fadeUp} custom={3} className="text-sm text-surface-500 font-body mb-10">
                    <Clock className="w-4 h-4 inline-block mr-1 text-orange-400" />
                    15-minute call · Pricing walkthrough · No obligation
                </motion.p>

                <motion.div variants={fadeUp} custom={4}>
                    <CtaButton size="lg">Book Your Quotation Walkthrough</CtaButton>
                </motion.div>

                <motion.p variants={fadeUp} custom={5} className="mt-6 text-xs text-surface-500 font-body">
                    Pricing is presented live — tailored to your scale and budget.
                    You'll walk away with a clear picture either way.
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
                        {[
                            { label: 'The Gap', href: '#the-gap' },
                            { label: 'Distribution', href: '#distribution' },
                            { label: 'The Plan', href: '#the-plan' },
                            { label: 'FAQ', href: '#faq' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-surface-400 hover:text-white transition-colors duration-300"
                            >
                                {item.label}
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
            <FloatingPlanButton />
            <main>
                <HeroSection />
                <GapSection />
                <CompetitorSection />
                <UnlockSection />
                <DistributionSection />
                <PlansSection />
                <GuestUpgradeSection />
                <FaqSection />
                <FinalCtaSection />
            </main>
            <Footer />
        </div>
    );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Zap, Repeat, Bot, Target,
  Layers, Megaphone, Smile, Star, ChevronDown,
  ArrowRight, Play, BarChart3, Shield, Sparkles,
  TrendingUp, Globe, Instagram, Youtube, Twitter,
  Linkedin, Mail, ExternalLink
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
// GRID MARKERS COMPONENT
// ============================================================
const GridMarkers = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="grid-marker"
        style={{
          top: `${15 + (i % 3) * 35}% `,
          left: `${10 + Math.floor(i / 3) * 80}% `,
        }}
      />
    ))}
  </div>
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
    <header className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 500 ${scrolled
        ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent'
      } `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Social<span className="text-blue-400">SEO</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Results', 'Process', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()} `}
                className="text-sm font-medium text-surface-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
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
// HERO SECTION
// ============================================================
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <GridMarkers />

    {/* Background gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
      >
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-sm font-medium text-surface-300">India's #1 Organic Growth Engine</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight text-white mb-8"
      >
        We make founders
        <br />
        <span className="gradient-text">go viral.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
      >
        20–30 million organic views in the first 30 days — or we return your money.
        We build & operate a high-volume, India-first distribution system that learns and compounds.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button px-8 py-4 text-base font-semibold text-white rounded-xl flex items-center gap-2 group"
        >
          Book a Free Growth Audit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#services"
          className="px-8 py-4 text-base font-semibold text-surface-300 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          See How It Works
        </a>
      </motion.div>

      {/* Trust badges */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 text-sm text-surface-500"
      >
        Eligibility required · No contracts · Money-back guarantee
      </motion.p>
    </div>

    {/* Scroll indicator */}
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
// STATS SECTION
// ============================================================
const StatItem = ({ value, suffix, label, delay }) => {
  const [ref, inView] = useInView(0.3);
  const count = useCountUp(typeof value === 'number' ? value : 0, 2000, inView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={delay}
      className="text-center"
    >
      <p className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white stat-value">
        {typeof value === 'number' ? count.toLocaleString() : value}
        <span className="text-blue-400">{suffix}</span>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <StatItem value={30} suffix="M+" label="Organic Views in 30 Days" delay={0} />
        <StatItem value={350} suffix="M+" label="Network Follower Reach" delay={1} />
        <StatItem value="100" suffix="%" label="Money-Back Guarantee" delay={2} />
      </div>
    </motion.div>
    <div className="section-divider mt-24" />
  </section>
);

// ============================================================
// SERVICES SECTION (BENTO GRID)
// ============================================================
const services = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Fanpage Marketing',
    desc: 'We build and scale dedicated fanpages that cultivate a loyal community around your personal brand.',
    span: 'md:col-span-1',
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: 'Meme Marketing',
    desc: 'Tap into our network of 350M+ followers across top meme accounts to make your message go viral.',
    stat: '350M+',
    span: 'md:col-span-1',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Niche Marketing',
    desc: 'Reach highly specific audiences through our 450M+ follower network of niche-specific pages.',
    stat: '450M+',
    span: 'md:col-span-1',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Influencer Marketing',
    desc: 'Amplify your content through our creator relay system with a combined reach of over 200M+ followers.',
    stat: '200M+',
    span: 'md:col-span-1',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI-Assisted Production',
    desc: 'AI speeds up content creation, while human editors ensure brand safety, cultural nuance, and quality.',
    span: 'md:col-span-1',
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: 'Compounding Optimization',
    desc: 'Each post trains the system. Winners are cloned and syndicated; losers are retired. Your reach grows exponentially.',
    span: 'md:col-span-1',
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-24 md:py-32">
    <GridMarkers />
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-16"
      >
        <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
          What We Do
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
          Combining human ingenuity
          <br />
          <span className="text-surface-400">with AI-powered scale.</span>
        </motion.h2>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            custom={i}
            className={`glass - card p - 8 group cursor -default ${service.span} `}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                {service.icon}
              </div>
              {service.stat && (
                <span className="text-2xl font-display font-bold text-blue-400">{service.stat}</span>
              )}
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-sm text-surface-400 font-body leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ============================================================
// WHY US SECTION
// ============================================================
const whyUsItems = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Network, not just a page',
    desc: 'We create a mesh of fan pages, niche verticals, and meme handles that speak your audience\'s language at scale.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Search + Social Flywheel',
    desc: 'Titles, hooks, and captions are engineered to rank in social search while riding trend waves.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Influencer Relay',
    desc: 'Strategic re-posts, stitches, and duets amplify winning content into new, untapped audience pools.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Distributed & Brand-Safe',
    desc: 'Address bold ideas through third-party pages without risking your main handle\'s positioning.',
  },
];

const WhyUsSection = () => (
  <section className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
            Why Social SEO
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
            We're not just another agency.
            <br />
            <span className="text-surface-400">We're a growth machine.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed mb-8">
            Engineered for virality — every clip, caption and distribution vector is optimized
            to hit maximum organic reach. No bots, no paid boosts, just the right content in the right places.
          </motion.p>
          <motion.a
            variants={fadeUp}
            custom={3}
            href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
          >
            Learn more about our approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Right: Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {whyUsItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="glass-card p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-display font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-surface-400 font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ============================================================
// THE OFFER SECTION
// ============================================================
const OfferSection = () => (
  <section id="results" className="relative py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />

        <div className="relative glass-card p-10 md:p-16 text-center" style={{ transform: 'none' }}>
          <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-6">
            The Guaranteed Hero Offer
          </motion.p>

          <motion.p variants={fadeUp} custom={1} className="text-6xl md:text-8xl font-display font-bold gradient-text mb-4">
            20–30M+
          </motion.p>

          <motion.p variants={fadeUp} custom={2} className="text-xl md:text-2xl font-display font-semibold text-white mb-6">
            Organic Views in the First 30 Days
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="text-surface-400 font-body max-w-lg mx-auto mb-10 leading-relaxed">
            If we miss the target, you get a <span className="text-white font-semibold">100% refund</span>.
            It's that simple. No fine print, no workarounds.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-surface-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              Meet eligibility criteria
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              No mid-month freezes
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              Native analytics verified
            </span>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="mt-10">
            <a
              href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button px-8 py-4 text-base font-semibold text-white rounded-xl inline-flex items-center gap-2 group"
            >
              Claim Your Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================================
// PROCESS / HOW IT WORKS
// ============================================================
const steps = [
  { num: '01', title: 'Strategy & Intake', desc: 'Discovery, positioning, content audit, and risk guardrails to set the foundation.' },
  { num: '02', title: 'Asset Ingestion & Clip Factory', desc: 'We ingest your long-form content and build a tagged, searchable vault to generate clips, memes, and captions.' },
  { num: '03', title: 'Network Build', desc: 'We activate a distributed page network targeting different audience psychographics in your category.' },
  { num: '04', title: 'Distribution & Seeding', desc: 'High-frequency posting across the network, plus strategic seeding into relevant communities.' },
  { num: '05', title: 'Optimization Loop', desc: 'Daily signal review to iterate on winners and refine hooks, thumbnails, and timing.' },
  { num: '06', title: 'Reporting & Scale-Up', desc: 'Weekly scorecards and monthly growth reviews with action items for the next sprint.' },
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
          Our end-to-end
          <br />
          <span className="text-surface-400">growth system.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="relative"
      >
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              className="relative flex gap-8 group"
            >
              {/* Step number */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-surface-900 border border-white/10 flex items-center justify-center text-sm font-display font-bold text-blue-400 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                {step.num}
              </div>

              {/* Step content */}
              <div className="pt-2">
                <h3 className="text-lg font-display font-semibold text-white mb-2">{step.title}</h3>
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
// ELIGIBILITY SECTION
// ============================================================
const EligibilitySection = () => (
  <section className="relative py-24 md:py-32">
    <div className="section-divider mb-24" />
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
            Eligibility
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
            Are you ready
            <br />
            <span className="text-surface-400">to scale?</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-surface-400 font-body leading-relaxed">
            This high-volume system requires readiness. Please apply only if you meet these criteria.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {[
            { icon: <Target className="w-5 h-5" />, title: 'Acquisition Readiness', desc: 'You have a working lead/checkout system that can absorb high volume.' },
            { icon: <BarChart3 className="w-5 h-5" />, title: 'Baseline Authority', desc: '100k–200k+ followers on a major platform or equivalent press/authority signals.' },
            { icon: <Globe className="w-5 h-5" />, title: 'Long-Form Asset Base', desc: 'A library of podcasts, talks, videos, or webinars we can legally repurpose.' },
          ].map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i} className="glass-card p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-surface-400 font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} custom={3} className="glass-card p-6 bg-blue-500/5 border-blue-500/10">
            <h3 className="font-display font-semibold text-blue-400 mb-2">Don't qualify yet?</h3>
            <p className="text-sm text-surface-400 font-body leading-relaxed">
              We've got you covered with our <span className="text-white font-medium">Zero-to-One Ramp</span>.
              We'll help you reach the authority baseline first with publisher features, collaborative lives, and a starter network.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <div className="section-divider mt-24" />
  </section>
);

// ============================================================
// FAQ SECTION
// ============================================================
const faqData = [
  {
    q: 'Is this paid media?',
    a: 'No. We optimize for organic distribution via search-aligned content, network effects, and creator relays. You may layer ads if desired, but those views do not count toward the guarantee.',
  },
  {
    q: 'Who owns the pages?',
    a: 'We incubate and operate the network for performance. Admin rights can be transferred per the agreement (e.g., after a fixed term or milestone).',
  },
  {
    q: 'Is this compliant with platform policies?',
    a: 'Yes. No fake engagement, no bots, no scraping that violates TOS. We operate with brand-safe, policy-compliant practices.',
  },
  {
    q: 'What if my brand is sensitive to controversy?',
    a: 'We route edgier angles through third-party pages; your primary handle remains protected and your brand positioning is safe.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing reflects the scope of network build and posting frequency. It is a significant investment because the engine runs at high volume to deliver guaranteed results. Final pricing follows the growth audit.',
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
        <span className="text-base md:text-lg font-display font-medium text-white pr-8 group-hover:text-blue-400 transition-colors">
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
          Common questions.
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
// CTA SECTION
// ============================================================
const CtaSection = () => (
  <section className="relative py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
          Ready to go
          <br />
          <span className="gradient-text">viral?</span>
        </motion.h2>

        <motion.p variants={fadeUp} custom={1} className="text-lg text-surface-400 font-body max-w-xl mx-auto mb-10">
          Book a no-obligation discovery call to see if you qualify for our guaranteed growth plan.
        </motion.p>

        <motion.div variants={fadeUp} custom={2}>
          <a
            href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button px-10 py-5 text-lg font-semibold text-white rounded-xl inline-flex items-center gap-3 group"
          >
            Book Your Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ============================================================
// FOOTER
// ============================================================
const Footer = () => (
  <footer className="relative border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Social<span className="text-blue-400">SEO</span>
            </span>
          </div>
          <p className="text-sm text-surface-400 font-body leading-relaxed max-w-sm mb-6">
            India's viral growth engine for founders & personal brands.
            20–30M organic views guaranteed or your money back.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: '#' },
              { icon: <Youtube className="w-4 h-4" />, href: '#' },
              { icon: <Twitter className="w-4 h-4" />, href: '#' },
              { icon: <Linkedin className="w-4 h-4" />, href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-surface-400 hover:text-blue-400 hover:border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-display font-semibold text-white uppercase tracking-wider mb-4">Navigate</h4>
          <ul className="space-y-3">
            {['Services', 'Results', 'Process', 'FAQ'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()} `} className="text-sm text-surface-400 hover:text-white transition-colors font-body">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-display font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-surface-400 font-body">
              <Mail className="w-4 h-4 text-blue-400" />
              hello@socialseo.in
            </li>
            <li>
              <a
                href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-surface-400 hover:text-white transition-colors font-body"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-surface-500 font-body">
          &copy; {new Date().getFullYear()} Social SEO. All Rights Reserved.
        </p>
        <p className="text-xs text-surface-500 font-body max-w-lg text-center md:text-right">
          Guarantee applies only if eligibility criteria are met and onboarding deliverables are provided on time. Views verified via native platform analytics.
        </p>
      </div>
    </div>
  </footer>
);

// ============================================================
// MAIN HOME COMPONENT
// ============================================================
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <OfferSection />
        <ProcessSection />
        <EligibilitySection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

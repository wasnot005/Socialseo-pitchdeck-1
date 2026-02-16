import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import { TrendingUp, Eye, Users, Play } from 'lucide-react';

// Animated counter hook
const useCounter = (end, duration = 1200) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = performance.now();
                    const animate = (now) => {
                        const progress = Math.min(1, (now - start) / duration);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(end * eased));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return [count, ref];
};

const KPICard = ({ icon: Icon, iconColor, label, febValue, febSuffix = '', janValue, janSuffix = '', delta, progressPercent }) => {
    const [animatedValue, ref] = useCounter(febValue);

    return (
        <GlassCard className="flex flex-col justify-between min-h-[200px]">
            <div ref={ref}>
                <div className={`${iconColor} p-3 rounded-xl mb-4 inline-flex`}>
                    <Icon size={22} />
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">{label}</p>
                <p className="text-4xl font-black text-white tracking-tight">
                    {animatedValue.toLocaleString()}{febSuffix}
                </p>

                {/* Progress bar */}
                <div className="mt-4 mb-3">
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>

                {/* Baseline footer */}
                <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs">
                        Jan: <span className="text-white/60 font-mono">{janValue}{janSuffix}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        <TrendingUp size={12} />
                        {delta}
                    </span>
                </div>
            </div>
        </GlassCard>
    );
};

export const HeroSection = () => {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 relative z-10">
            <div className="space-y-6 max-w-5xl mx-auto w-full">

                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-2">
                    <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Jan vs Feb — Growth Sprint</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg leading-tight">
                    Kush 15-Day<br />Comparative Report
                </h1>

                <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
                    What happens when you <span className="text-white font-semibold">triple your posting frequency</span>? A data-driven breakdown of the performance leap from 1 video/day to 3 videos/day.
                </p>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 w-full">
                    <KPICard
                        icon={Play}
                        iconColor="bg-blue-500/20 text-blue-300"
                        label="Posting Frequency"
                        febValue={3}
                        febSuffix=" / day"
                        janValue="1"
                        janSuffix=" / day"
                        delta="+200%"
                        progressPercent={100}
                    />
                    <KPICard
                        icon={Eye}
                        iconColor="bg-purple-500/20 text-purple-300"
                        label="Cumulative Reach"
                        febValue={1403161}
                        janValue="23,660"
                        delta="+5,830%"
                        progressPercent={98}
                    />
                    <KPICard
                        icon={Users}
                        iconColor="bg-pink-500/20 text-pink-300"
                        label="New Followers"
                        febValue={5475}
                        janValue="1,036"
                        delta="+428%"
                        progressPercent={81}
                    />
                    <KPICard
                        icon={TrendingUp}
                        iconColor="bg-emerald-500/20 text-emerald-300"
                        label="Avg Views / Reel"
                        febValue={31181}
                        janValue="1,577"
                        delta="+1,877%"
                        progressPercent={95}
                    />
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import { ArrowRight } from 'lucide-react';

const GrowthBar = ({ label, startValue, startLabel, endValue, endLabel, delta }) => {
    const ratio = Math.min(startValue / endValue, 0.15); // Cap at 15% for visibility
    const startH = Math.max(ratio * 180, 12);
    const endH = 180;

    return (
        <div className="flex flex-col items-center flex-1">
            <h4 className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-6">{label}</h4>
            <div className="flex items-end justify-center gap-6 sm:gap-10" style={{ height: 220 }}>
                {/* Start bar */}
                <div className="flex flex-col items-center">
                    <span className="text-white/60 font-mono text-sm mb-2">{startLabel}</span>
                    <div
                        className="w-14 sm:w-16 rounded-t-lg bg-white/15 border border-white/10"
                        style={{ height: `${startH}px` }}
                    />
                    <span className="text-white/30 text-xs mt-2">Jan</span>
                </div>

                <ArrowRight className="text-white/20 mb-10 hidden sm:block" size={20} />

                {/* End bar */}
                <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-sm mb-2">{endLabel}</span>
                    <div
                        className="w-14 sm:w-16 rounded-t-lg shadow-[0_0_30px_rgba(0,82,255,0.3)]"
                        style={{
                            height: `${endH}px`,
                            background: 'linear-gradient(180deg, #0052FF 0%, #003199 100%)',
                        }}
                    />
                    <span className="text-blue-400 text-xs mt-2">Feb</span>
                </div>
            </div>
            <div className="mt-4">
                <span className="inline-flex items-center bg-emerald-500/15 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                    {delta}
                </span>
            </div>
        </div>
    );
};

export const GrowthStory = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />

                    <GlassCard className="relative z-10 text-center border-blue-500/20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            The Growth Story
                        </h2>
                        <p className="text-lg text-blue-200/70 mb-12 max-w-2xl mx-auto">
                            "Tripling output didn't just triple results — it <span className="text-white font-semibold">multiplied them exponentially</span>."
                        </p>

                        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
                            <GrowthBar
                                label="Cumulative Reach"
                                startValue={23660}
                                startLabel="23.6K"
                                endValue={1403161}
                                endLabel="1.4M"
                                delta="+5,830%"
                            />
                            <div className="hidden md:block w-px bg-white/10 self-stretch" />
                            <GrowthBar
                                label="New Followers"
                                startValue={1036}
                                startLabel="1,036"
                                endValue={5475}
                                endLabel="5,475"
                                delta="+428%"
                            />
                            <div className="hidden md:block w-px bg-white/10 self-stretch" />
                            <GrowthBar
                                label="Avg Views / Reel"
                                startValue={1577}
                                startLabel="1,577"
                                endValue={31181}
                                endLabel="31.1K"
                                delta="+1,877%"
                            />
                        </div>

                        {/* Summary callout */}
                        <div className="mt-12 p-6 rounded-2xl bg-white/[0.04] border border-white/10 max-w-2xl mx-auto">
                            <p className="text-white/80 text-sm leading-relaxed">
                                By increasing from <span className="text-white font-bold">1 video/day</span> to <span className="text-blue-300 font-bold">3 videos/day</span>,
                                every single performance metric saw <span className="text-emerald-400 font-bold">triple-digit or higher growth</span> — proving that
                                consistent, high-volume content creation compounds rapidly.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

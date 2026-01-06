import React from 'react';
import { GlassCard } from './GlassCard';
import { ArrowRight } from 'lucide-react';

export const ImpactVisualization = ({ data }) => {
    const startHeight = 20; // 20px representation
    const endHeight = 200; // 200px representation

    return (
        <section className="py-10 px-4 mb-20">
            <div className="container mx-auto max-w-6xl">
                <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <GlassCard className="text-center relative z-10 border-indigo-500/30">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">3-Month Combined Impact</h2>
                        <p className="text-xl md:text-2xl text-indigo-200 mb-16 max-w-3xl mx-auto">
                            "When we started you were at <span className="text-white font-bold">{data.startFollowers}</span> followers and now at <span className="text-white font-bold text-3xl">5.1K</span>."
                        </p>

                        <div className="flex flex-col md:flex-row items-end justify-center gap-12 md:gap-24 h-[300px] pb-8">
                            {/* Start Node */}
                            <div className="flex flex-col items-center group">
                                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/70 font-mono">Day 1</div>
                                <div
                                    className="w-24 bg-white/10 border border-white/20 rounded-t-xl backdrop-blur-md relative group-hover:bg-white/20 transition-all duration-500"
                                    style={{ height: `${startHeight}px` }}
                                >
                                    <div className="absolute -top-10 w-full text-center font-bold text-white text-xl">{data.startFollowers}</div>
                                </div>
                                <div className="mt-4 text-white/50 font-bold tracking-wider uppercase">Start</div>
                            </div>

                            <ArrowRight className="hidden md:block text-white/20 mb-8 animate-pulse" size={48} />

                            {/* End Node */}
                            <div className="flex flex-col items-center group">
                                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-300 font-mono">Day 90</div>
                                <div
                                    className="w-32 bg-gradient-to-t from-indigo-600 to-blue-500 rounded-t-xl shadow-[0_0_40px_rgba(79,70,229,0.5)] relative transition-all duration-500 hover:scale-105"
                                    style={{ height: `${endHeight}px` }}
                                >
                                    <div className="absolute -top-12 w-full text-center font-black text-4xl text-white drop-shadow-lg">
                                        {(data.endFollowers / 1000).toFixed(1)}K
                                    </div>
                                </div>
                                <div className="mt-4 text-indigo-400 font-bold tracking-wider uppercase">Current</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

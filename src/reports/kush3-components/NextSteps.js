import React from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import { ArrowRight, Sparkles } from 'lucide-react';

/* ── NextSteps — Simple Forward Plan ─────────────── */

export const NextSteps = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                    What's Next
                </h2>
                <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
                    Building on the momentum — here's where we're headed.
                </p>

                <GlassCard className="border-blue-500/20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-blue-500/10">
                            <Sparkles size={22} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">The Forward Plan</h3>
                    </div>

                    <div className="space-y-5">
                        <div className="flex items-start gap-3">
                            <ArrowRight size={14} className="text-blue-400 mt-1.5 flex-shrink-0" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                Moving to a <span className="text-white font-semibold">consistent 1 video/day cadence</span> — sustainable output with higher individual impact per reel.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <ArrowRight size={14} className="text-blue-400 mt-1.5 flex-shrink-0" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                Content will be a <span className="text-white font-semibold">mix of what's already working</span> — the current reels style — combined with <span className="text-white font-semibold">B2B sales content</span> and the other content pillars we've identified above.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <ArrowRight size={14} className="text-blue-400 mt-1.5 flex-shrink-0" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                Weaving in <span className="text-white font-semibold">Kush's personal story</span>, industry expertise, and real business insights to deepen audience connection and attract the right B2B leads.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <ArrowRight size={14} className="text-blue-400 mt-1.5 flex-shrink-0" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                Exploring <span className="text-white font-semibold">YouTube</span> as a long-form platform, and repurposing top-performing content into <span className="text-white font-semibold">YouTube Shorts</span> for cross-platform reach.
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

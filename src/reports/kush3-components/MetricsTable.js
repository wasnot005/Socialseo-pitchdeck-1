import React from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import { TrendingUp } from 'lucide-react';

const metrics = [
    {
        metric: 'Posting Frequency',
        phase1: '1 Video / Day',
        phase2: '3 Videos / Day',
        delta: '+200%',
    },
    {
        metric: 'Total Content Units',
        phase1: '15 Videos',
        phase2: '45 Videos',
        delta: '+200%',
    },
    {
        metric: 'Cumulative Reach',
        phase1: '23,660 Views',
        phase2: '1,403,161 Views',
        delta: '+5,830%',
    },
    {
        metric: 'New Follower Gain',
        phase1: '1,036 Followers',
        phase2: '5,475 Followers',
        delta: '+428%',
    },
    {
        metric: 'Avg. Views per Reel',
        phase1: '1,577',
        phase2: '31,181',
        delta: '+1,877%',
    },
];

export const MetricsTable = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                    Detailed Metrics Breakdown
                </h2>
                <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
                    Every key metric side-by-side — the numbers tell the growth story.
                </p>

                <GlassCard className="p-0 md:p-0 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm sm:text-base">
                            <thead>
                                <tr className="border-b border-white/15">
                                    <th className="p-4 sm:p-5 text-white/60 text-xs uppercase tracking-widest font-semibold">Metric</th>
                                    <th className="p-4 sm:p-5 text-white/60 text-xs uppercase tracking-widest font-semibold">Phase 1 (Jan 1-15)</th>
                                    <th className="p-4 sm:p-5 text-white/60 text-xs uppercase tracking-widest font-semibold">Phase 2 (Feb 1-15)</th>
                                    <th className="p-4 sm:p-5 text-white/60 text-xs uppercase tracking-widest font-semibold text-right">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {metrics.map((row, i) => (
                                    <tr
                                        key={row.metric}
                                        className="border-b border-white/5 last:border-b-0 transition-colors duration-300 hover:bg-white/[0.04] cursor-default"
                                    >
                                        <td className="p-4 sm:p-5 font-semibold text-white">{row.metric}</td>
                                        <td className="p-4 sm:p-5 text-white/50 font-mono text-sm">{row.phase1}</td>
                                        <td className="p-4 sm:p-5 text-blue-300 font-semibold">{row.phase2}</td>
                                        <td className="p-4 sm:p-5 text-right">
                                            <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                                                <TrendingUp size={12} />
                                                {row.delta}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

import React from 'react';
import { GlassCard } from './GlassCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                <p className="font-bold text-white mb-2">{label}</p>
                <p className="text-indigo-300 text-sm">
                    Followers: <span className="text-white font-mono">{payload[0].value.toLocaleString()}</span>
                </p>
                <p className="text-purple-300 text-sm">
                    Reach: <span className="text-white font-mono">{payload[0].payload.reach}</span>
                </p>
            </div>
        );
    }
    return null;
};

export const MonthlyBreakdown = ({ data }) => {
    return (
        <section className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Monthly Performance Breakdown (Q4)</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {data.map((item, index) => (
                        <GlassCard key={index} className={`relative group ${index === 2 ? 'border-indigo-500/30 ring-1 ring-indigo-500/20' : ''}`}>
                            {item.statusTag && (
                                <div className="absolute top-4 right-4">
                                    <span className={`
                                px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                ${item.statusTag === 'Peak Performance' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20'}
                            `}>
                                        {item.statusTag}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">{item.month}</h3>
                                <p className="text-white/50 text-sm font-medium uppercase tracking-widest mt-1">{item.phase}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <span className="text-white/70 text-sm">Reels Produced</span>
                                    <span className="text-xl font-bold text-white">{item.reels}</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <span className="text-white/70 text-sm">Reach</span>
                                    <span className="text-xl font-bold text-indigo-300">{item.reach}</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <span className="text-white/70 text-sm">Followers Gained</span>
                                    <span className="text-xl font-bold text-white">{item.followersGained}</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">Growth Rate</span>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                        {item.growthRate}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Visual Chart */}
                <GlassCard className="w-full p-6" style={{ height: 450 }}>
                    <h3 className="text-xl font-bold text-white mb-6">Follower Acquisition Velocity</h3>
                    <div className="w-full h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="month"
                                    stroke="rgba(255,255,255,0.4)"
                                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="rgba(255,255,255,0.4)"
                                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                <Bar dataKey="followersRaw" radius={[8, 8, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 2 ? '#818cf8' : 'rgba(255,255,255,0.2)'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

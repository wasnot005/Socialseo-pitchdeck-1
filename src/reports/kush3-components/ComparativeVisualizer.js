import React from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
    CartesianGrid, RadialBarChart, RadialBar, Legend
} from 'recharts';

/* ── Data ─────────────────────────────────────────── */

const reachData = [
    { name: 'Jan 1-15', value: 23660, fill: '#94a3b8' },
    { name: 'Feb 1-15', value: 1403161, fill: '#0052FF' },
];

const followersData = [
    { name: 'Jan 1-15', value: 1036, fill: '#94a3b8' },
    { name: 'Feb 1-15', value: 5475, fill: '#0052FF' },
];

const avgViewsData = [
    { name: 'Jan 1-15', value: 1577, fill: '#94a3b8' },
    { name: 'Feb 1-15', value: 31181, fill: '#0052FF' },
];

const outputData = [
    { name: 'Jan', videos: 15, perDay: 1 },
    { name: 'Feb', videos: 45, perDay: 3 },
];

const growthRadial = [
    { name: 'Reach', value: 5830, fill: '#0052FF' },
    { name: 'Avg Views', value: 1877, fill: '#6366f1' },
    { name: 'Followers', value: 428, fill: '#a855f7' },
    { name: 'Output', value: 200, fill: '#22d3ee' },
];

/* ── Custom Tooltip ───────────────────────────────── */

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                <p className="font-bold text-white mb-1">{label}</p>
                {payload.map((entry, i) => (
                    <p key={i} className="text-sm" style={{ color: entry.color || '#0052FF' }}>
                        {entry.name}: <span className="text-white font-mono font-bold">{Number(entry.value).toLocaleString()}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

/* ── Stat Badge ───────────────────────────────────── */
const DeltaBadge = ({ delta }) => (
    <span className="inline-flex items-center bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
        {delta}
    </span>
);

/* ── MAIN COMPONENT ───────────────────────────────── */

export const ComparativeVisualizer = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                    The Numbers Speak
                </h2>
                <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
                    Dynamic comparison of every key metric — January baseline vs February growth sprint.
                </p>

                {/* ─── Row 1 : Reach + Followers ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                    {/* Cumulative Reach Chart */}
                    <GlassCard>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Cumulative Reach</h3>
                            <DeltaBadge delta="+5,830%" />
                        </div>
                        <div className="w-full h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={reachData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="name"
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                    <Bar dataKey="value" name="Views" radius={[8, 8, 0, 0]} maxBarSize={80}>
                                        {reachData.map((entry, i) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between text-xs text-white/40 mt-2 px-2">
                            <span>15 Videos · 1/day</span>
                            <span className="text-blue-300">45 Videos · 3/day</span>
                        </div>
                    </GlassCard>

                    {/* Follower Growth Chart */}
                    <GlassCard>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">New Followers Gained</h3>
                            <DeltaBadge delta="+428%" />
                        </div>
                        <div className="w-full h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={followersData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="name"
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                    <Bar dataKey="value" name="Followers" radius={[8, 8, 0, 0]} maxBarSize={80}>
                                        {followersData.map((entry, i) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between text-xs text-white/40 mt-2 px-2">
                            <span>1,036 gained</span>
                            <span className="text-blue-300">5,475 gained</span>
                        </div>
                    </GlassCard>
                </div>

                {/* ─── Row 2 : Avg Views + Growth Radial ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                    {/* Avg Views per Reel */}
                    <GlassCard>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Avg. Views per Reel</h3>
                            <DeltaBadge delta="+1,877%" />
                        </div>
                        <div className="w-full h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={avgViewsData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="name"
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.4)"
                                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                    <Bar dataKey="value" name="Avg Views" radius={[8, 8, 0, 0]} maxBarSize={80}>
                                        {avgViewsData.map((entry, i) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between text-xs text-white/40 mt-2 px-2">
                            <span>1,577 avg</span>
                            <span className="text-blue-300">31,181 avg</span>
                        </div>
                    </GlassCard>

                    {/* Growth % Radial Chart */}
                    <GlassCard>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Growth % Overview</h3>
                        </div>
                        <div className="w-full h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart
                                    cx="50%" cy="50%"
                                    innerRadius="25%"
                                    outerRadius="95%"
                                    barSize={16}
                                    data={growthRadial}
                                    startAngle={180}
                                    endAngle={-180}
                                >
                                    <RadialBar
                                        background={{ fill: 'rgba(255,255,255,0.05)' }}
                                        dataKey="value"
                                        cornerRadius={8}
                                    />
                                    <Legend
                                        iconSize={10}
                                        layout="horizontal"
                                        verticalAlign="bottom"
                                        wrapperStyle={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}
                                        formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</span>}
                                    />
                                    <Tooltip
                                        formatter={(value, name) => [`+${value}%`, name]}
                                        contentStyle={{
                                            background: 'rgba(15,23,42,0.95)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '12px',
                                            color: 'white',
                                            fontSize: '13px',
                                        }}
                                    />
                                </RadialBarChart>
                            </ResponsiveContainer>
                        </div>
                    </GlassCard>
                </div>

                {/* ─── Row 3 : Content Output Comparison ─── */}
                <GlassCard>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Content Output Volume</h3>
                        <DeltaBadge delta="+200%" />
                    </div>
                    <div className="w-full h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={outputData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barGap={20}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="name"
                                    stroke="rgba(255,255,255,0.4)"
                                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 13 }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    stroke="rgba(255,255,255,0.4)"
                                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                <Bar dataKey="videos" name="Total Videos" radius={[8, 8, 0, 0]} maxBarSize={60}>
                                    {outputData.map((entry, i) => (
                                        <Cell key={i} fill={i === 0 ? '#94a3b8' : '#0052FF'} />
                                    ))}
                                </Bar>
                                <Bar dataKey="perDay" name="Per Day" radius={[8, 8, 0, 0]} maxBarSize={60}>
                                    {outputData.map((entry, i) => (
                                        <Cell key={i} fill={i === 0 ? '#64748b' : '#6366f1'} />
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

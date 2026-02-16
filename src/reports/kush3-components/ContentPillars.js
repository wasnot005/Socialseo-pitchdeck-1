import React from 'react';
import { GlassCard } from '../kush-components/GlassCard';
import { Gamepad2, Shield, BarChart3, Lightbulb, User } from 'lucide-react';

/* ── Content Pillars + Formats ────────────────────── */

const pillars = [
    {
        icon: User,
        title: "Kush's Journey & Backstory",
        description: 'Personal brand stories that build relatability and trust. Origin stories, failures, pivots, and wins.',
        color: '#0052FF',
    },
    {
        icon: Gamepad2,
        title: 'iGaming × Growth Mechanics',
        description: 'Deep dives into the iGaming industry — market dynamics, user acquisition, scaling strategies.',
        color: '#6366f1',
    },
    {
        icon: Shield,
        title: 'Cybersecurity + Trust Infrastructure',
        description: 'Enterprise-grade security insights, data protection frameworks, and building trust in digital products.',
        color: '#a855f7',
    },
    {
        icon: BarChart3,
        title: 'Sales + Lead Generation Systems',
        description: 'B2B outreach strategies, pipeline optimization, cold outreach scripts, and closing frameworks.',
        color: '#22d3ee',
    },
    {
        icon: Lightbulb,
        title: 'Startup & Entrepreneurship Nuance',
        description: 'Fundraising, team-building, product-market fit, and lessons from the trenches.',
        color: '#f59e0b',
    },
];

const formats = [
    { title: "How I'd Do X", desc: 'Hypothetical strategy breakdowns' },
    { title: 'My Mistakes', desc: 'Vulnerability = Trust' },
    { title: 'The Playbook', desc: 'Step-by-step tutorials' },
    { title: 'Hot Takes', desc: 'Contrarian opinions with reasoning' },
    { title: 'Case Studies', desc: 'Real numbers, real results' },
    { title: 'Why This Worked', desc: 'Analyzing market wins' },
];

export const ContentPillars = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                    Content Pillars & Strategy
                </h2>
                <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
                    The five core pillars that will define all content going forward — spanning B2B expertise, personal brand, and industry authority.
                </p>

                {/* Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={i}
                                className="group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                            >
                                <div
                                    className="p-3 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110"
                                    style={{ background: `${pillar.color}15` }}
                                >
                                    <Icon size={20} style={{ color: pillar.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm mb-1">{pillar.title}</h4>
                                    <p className="text-white/40 text-xs leading-relaxed">{pillar.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ─── Winning Formats ─── */}
                <GlassCard>
                    <h3 className="text-lg font-bold text-white mb-6">Winning Formats</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {formats.map((fmt, i) => (
                            <div
                                key={i}
                                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300 text-center group cursor-default"
                            >
                                <h4 className="text-indigo-300 font-bold text-sm mb-1 group-hover:text-indigo-200 transition-colors">
                                    {fmt.title}
                                </h4>
                                <p className="text-white/30 text-[10px] leading-relaxed">{fmt.desc}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

import React from 'react';
import { GlassCard } from './GlassCard';
import { Clock, Layers, Users, TrendingUp } from 'lucide-react';

export const MetricsOverview = ({ data }) => {
    return (
        <section className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Campaign Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <GlassCard className="flex flex-col items-start justify-between min-h-[160px]">
                        <div className="bg-indigo-500/20 p-3 rounded-xl mb-4 text-indigo-300">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Duration</p>
                            <p className="text-3xl font-bold text-white mt-1">{data.duration}</p>
                        </div>
                    </GlassCard>

                    <GlassCard className="flex flex-col items-start justify-between min-h-[160px]">
                        <div className="bg-purple-500/20 p-3 rounded-xl mb-4 text-purple-300">
                            <Layers size={24} />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Content Volume</p>
                            <p className="text-3xl font-bold text-white mt-1">{data.volume}</p>
                        </div>
                    </GlassCard>

                    <GlassCard className="flex flex-col items-start justify-between min-h-[160px]">
                        <div className="bg-pink-500/20 p-3 rounded-xl mb-4 text-pink-300">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Current Followers</p>
                            <p className="text-3xl font-bold text-white mt-1">{data.currentFollowers}</p>
                        </div>
                    </GlassCard>

                    <GlassCard className="flex flex-col items-start justify-between min-h-[160px]">
                        <div className="bg-blue-500/20 p-3 rounded-xl mb-4 text-blue-300">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Total Reach</p>
                            <p className="text-3xl font-bold text-white mt-1">{data.totalReach}</p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

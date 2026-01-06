import React from 'react';
import { GlassCard } from './GlassCard';

export const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-10 relative z-10">
            <div className="animate-fade-in-up space-y-6 max-w-4xl mx-auto">

                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-4">
                    <span className="text-sm font-medium text-indigo-300 tracking-wide uppercase">Powered by Social SEO</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white drop-shadow-lg">
                    Kush
                </h1>

                <h2 className="text-2xl md:text-4xl font-light text-white/90 tracking-tight">
                    90 Days Personal Branding Report
                </h2>

                <p className="text-lg md:text-xl text-indigo-200/80 max-w-2xl mx-auto leading-relaxed">
                    A performance breakdown after posting 90 videos across a strategic 3-month campaign.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-3xl mx-auto">
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                        <div className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">Focus</div>
                        <div className="text-white font-semibold">Quality</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                        <div className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">Scale</div>
                        <div className="text-white font-semibold">Velocity</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                        <div className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">Platform</div>
                        <div className="text-white font-semibold">Multi-Channel</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                        <div className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">Growth</div>
                        <div className="text-white font-semibold">Exponential</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

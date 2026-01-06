import React from 'react';
import { Hero } from './kush-components/Hero';
import { MetricsOverview } from './kush-components/MetricsOverview';
import { MonthlyBreakdown } from './kush-components/MonthlyBreakdown';
import { ImpactVisualization } from './kush-components/ImpactVisualization';
import { Footer } from './kush-components/Footer';

// Data Injection
const overviewData = {
  duration: "90 Days",
  volume: "90 Videos",
  currentFollowers: "5,150",
  totalReach: "2.86M"
};

const monthlyData = [
  {
    month: "October",
    phase: "Foundation",
    reels: 26,
    reach: "17K",
    reachRaw: 17000,
    followersGained: "97",
    followersRaw: 97,
    growthRate: "+633%"
  },
  {
    month: "November",
    phase: "Scaling",
    reels: 30,
    reach: "1.2 Million",
    reachRaw: 1200000,
    followersGained: "1.6K",
    followersRaw: 1600,
    growthRate: "+6,688%",
    statusTag: "Trending Up"
  },
  {
    month: "December",
    phase: "Viral Velocity",
    reels: 47,
    reach: "2 Million",
    reachRaw: 2000000,
    followersGained: "5.1K",
    followersRaw: 5100,
    growthRate: "+3,672%",
    statusTag: "Peak Performance"
  }
];

const impactData = {
  startFollowers: 36,
  endFollowers: 5150
};

export default function KushReport2() {
  return (
    <div className="relative min-h-screen bg-gray-900 font-sans leading-relaxed text-white overflow-x-hidden selection:bg-indigo-500/30">

      {/* Animated Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Blob */}
        <div className="absolute inset-0 bg-black animated-gradient"></div>

        {/* Noise Texture Overlay for that 'film' look */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent pointer-events-none">
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
            <span className="font-bold tracking-tight">Social SEO</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
            <span className="text-sm font-medium text-white/80">Jan 2026 Report</span>
          </div>
        </header>

        <main className="pb-20">
          <Hero />
          <div className="space-y-12">
            <MetricsOverview data={overviewData} />
            <MonthlyBreakdown data={monthlyData} />
            <ImpactVisualization data={impactData} />
          </div>
        </main>

        <Footer />
      </div>

      {/* Global Styles for Animations */}
      <style>{`
        .animated-gradient {
            background: radial-gradient(circle at 10% 20%, rgba(128, 0, 128, 0.4), transparent 50%),
                        radial-gradient(circle at 80% 90%, rgba(0, 0, 255, 0.4), transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(255, 25, 25, 0.3), transparent 50%);
            background-size: 250% 250%;
            animation: moveGradient 25s ease infinite;
        }

        @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const GlassCard = ({ title, description, to, tag }) => (
    <Link to={to} className="block h-full">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-lg group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>

            {tag && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${tag === 'NEW' ? 'bg-indigo-500 text-white' :
                        tag === 'UPDATED' ? 'bg-green-500 text-white' :
                            'bg-gray-700 text-gray-300'
                    }`}>
                    {tag}
                </span>
            )}

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>

            <div className="mt-6 flex items-center text-indigo-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
            </div>
        </div>
    </Link>
);

export default function MainHub() {
    const pages = [
        {
            title: "Home",
            description: "The main landing page for Social SEO, featuring our core value proposition, growth stats, and service overview.",
            to: "/",
            tag: "MAIN"
        },
        {
            title: "Founder AI Clone",
            description: "Build your personal brand without recording weekly. AI clone + funnel system for founders.",
            to: "/founder-ai-clone",
            tag: "NEW"
        },
        {
            title: "Original Proposal",
            description: "The initial comprehensive proposal deck outlining strategy, tiers, and operational workflow.",
            to: "/proposal",
            tag: "ARCHIVE"
        },
        {
            title: "Updated Proposal",
            description: "Refined proposal with updated pricing, tiers, and strategic focus.",
            to: "/updated-proposal",
            tag: "UPDATED"
        },
        {
            title: "Founder Brand Program",
            description: "Dedicated program page for the Founder Brand offering.",
            to: "/founder-brand-program",
            tag: "PROGRAM"
        },
        {
            title: "Kush YouTube Pitch",
            description: "Specific strategy deck for Kush's YouTube growth.",
            to: "/kush-youtube-pitch",
            tag: "PITCH"
        },
        {
            title: "Reports Dashboard",
            description: "Access to various client reports including Kush Report 1 & 2.",
            to: "/reports",
            tag: "DASHBOARD"
        },
        {
            title: "Podcast Proposal",
            description: "Specialized proposal for podcast growth and distribution.",
            to: "/podcast-proposal",
            tag: "NICHE"
        },
        {
            title: "Founder Service",
            description: "Overview of services tailored specifically for founders.",
            to: "/founder-service",
            tag: "SERVICE"
        },
        {
            title: "AI Rap Guide",
            description: "Innovative guide on using AI for rap content creation.",
            to: "/airapguide",
            tag: "WILD"
        },
        {
            title: "Raj Social SEO",
            description: "Personalized social SEO strategy for Raj.",
            to: "/raj-socialseo",
            tag: "CLIENT"
        },
        {
            title: "J&C Languages",
            description: "Strategy for J&C Languages growth.",
            to: "/jandc-languages",
            tag: "CLIENT"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 pb-32">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                    Main <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Hub</span>
                </h1>
                <p className="text-xl text-white/60">
                    Central directory for all Social SEO specific pages, proposals, and dashboards.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {pages.map((page, index) => (
                    <GlassCard key={index} {...page} />
                ))}
            </div>
        </div>
    );
}

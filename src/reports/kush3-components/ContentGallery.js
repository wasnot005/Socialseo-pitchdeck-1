import React from 'react';
import { Play } from 'lucide-react';

const reels = [
    {
        title: 'Cancer Treatment',
        views: '373K',
        gradient: 'from-rose-600 via-red-500 to-orange-400',
        url: 'https://www.instagram.com/reel/DUQH4vPASBn/',
        emoji: '🏥',
    },
    {
        title: 'Microsoft / Designers',
        views: '111K',
        gradient: 'from-blue-600 via-indigo-500 to-violet-500',
        url: 'https://www.instagram.com/reel/DUflKtzgX8J/',
        emoji: '💻',
    },
    {
        title: 'Google Education',
        views: '103K',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        url: 'https://www.instagram.com/reel/DUsfIjOEtl_/',
        emoji: '🎓',
    },
    {
        title: 'Chinese AI',
        views: '43.6K',
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        url: 'https://www.instagram.com/reel/DUc8l78AZg1/',
        emoji: '🤖',
    },
    {
        title: 'SEO Secrets',
        views: '35.2K',
        gradient: 'from-purple-600 via-fuchsia-500 to-pink-500',
        url: 'https://www.instagram.com/reel/DUV5nGkDWWW/',
        emoji: '🔍',
    },
];

export const ContentGallery = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                    Top Performing Content
                </h2>
                <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
                    The reels that drove the most reach during Phase 2. Tap to watch.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {reels.map((reel, i) => (
                        <a
                            key={i}
                            href={reel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block rounded-[2rem] overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
                            style={{ aspectRatio: '9/16' }}
                        >
                            {/* Gradient background (placeholder for thumbnail) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`} />

                            {/* Content overlay with emoji */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-5xl mb-3 opacity-30 group-hover:opacity-0 transition-opacity duration-300">{reel.emoji}</span>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                        <Play size={24} className="text-white ml-1" fill="white" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white text-xs sm:text-sm font-semibold leading-tight mb-1">{reel.title}</p>
                                <p className="text-white/70 text-xs font-mono">{reel.views} Views</p>
                            </div>

                            {/* Rank badge */}
                            <div className="absolute top-3 left-3">
                                <span className="bg-black/40 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
                                    #{i + 1}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

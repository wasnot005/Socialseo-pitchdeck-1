import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Users,
  Eye,
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
  Activity,
  Play,
  TrendingUp,
} from 'lucide-react';

// --- Reusable UI Components ---

const Card = ({ title, children, className = '' }) => (
  <div className={`bg-black/20 backdrop-blur-2xl rounded-xl p-5 border border-white/10 shadow-sm hover:bg-black/30 transition-all duration-300 ${className}`}>
    {title && <h3 className="text-sm font-medium text-white/90 mb-3 tracking-wide uppercase">{title}</h3>}
    {children}
  </div>
);

// Animated Counter Component
const NumberCounter = ({ value, label, subtext, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value.replace(/,/g, ''));
    if (start === end) return;

    const timer = setInterval(() => {
      start += end / 50;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-left overflow-hidden">
      <div className="flex items-baseline space-x-1 truncate">
        <span className="text-2xl md:text-3xl font-semibold text-indigo-400 tracking-tight truncate">
          {prefix}
          {count.toLocaleString(undefined, { maximumFractionDigits: 1 })}
          {suffix}
        </span>
      </div>
      <p className="text-white/80 font-normal text-sm mt-1">{label}</p>
      {subtext && <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1 font-light">{subtext}</p>}
    </div>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center font-bold text-white text-xs shadow-md shadow-indigo-500/20">
          S
        </div>
        <span className="text-white font-semibold tracking-wide text-sm">
          SOCIAL<span className="text-indigo-400 font-normal">SEO</span>
        </span>
      </div>
      <div className="text-white/60 text-xs font-normal border border-white/10 bg-white/5 px-3 py-1 rounded-full backdrop-blur-md">
        Nov 11 - Dec 10
      </div>
    </div>
  </header>
);

// --- Sections ---

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative z-10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-4 border border-indigo-500/20 tracking-wide">
          Monthly Performance Review
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
          Viral Momentum <br /> &amp; Scale
        </h1>
        <p className="text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
          November broke records with a massive influx of non-follower reach, driven by a singular viral hit and consistent posting volume.
        </p>
      </div>

      {/* High Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <Card className="border-t border-t-green-500/50 bg-gradient-to-b from-green-500/5 to-transparent">
          <div className="flex justify-between items-start mb-3">
            <div className="p-1.5 bg-green-500/10 rounded-md text-green-400">
              <Eye size={16} />
            </div>
            <span className="text-green-400 flex items-center text-[10px] font-medium bg-green-500/10 px-1.5 py-0.5 rounded">
              <ArrowUpRight size={10} className="mr-1" /> Explosive
            </span>
          </div>
          <NumberCounter value="2100000" label="Total Views" suffix="M+" />
        </Card>

        <Card className="border-t border-t-indigo-500/50 bg-gradient-to-b from-indigo-500/5 to-transparent">
          <div className="flex justify-between items-start mb-3">
            <div className="p-1.5 bg-indigo-500/10 rounded-md text-indigo-400">
              <Activity size={16} />
            </div>
            <span className="text-green-400 flex items-center text-[10px] font-medium bg-green-500/10 px-1.5 py-0.5 rounded">
              <ArrowUpRight size={10} className="mr-1" /> +4,891%
            </span>
          </div>
          <NumberCounter value="372200" label="Interactions" suffix="K" />
        </Card>

        <Card className="border-t border-t-purple-500/50 bg-gradient-to-b from-purple-500/5 to-transparent">
          <div className="flex justify-between items-start mb-3">
            <div className="p-1.5 bg-purple-500/10 rounded-md text-purple-400">
              <Users size={16} />
            </div>
            <span className="text-green-400 flex items-center text-[10px] font-medium bg-green-500/10 px-1.5 py-0.5 rounded">
              <ArrowUpRight size={10} className="mr-1" /> Growing
            </span>
          </div>
          <NumberCounter value="2476" label="New Followers" prefix="+" />
        </Card>

        <Card className="border-t border-t-pink-500/50 bg-gradient-to-b from-pink-500/5 to-transparent">
          <div className="flex justify-between items-start mb-3">
            <div className="p-1.5 bg-pink-500/10 rounded-md text-pink-400">
              <Play size={16} />
            </div>
            <span className="text-white/40 text-[10px] font-medium uppercase tracking-wider">
              Consistency
            </span>
          </div>
          <NumberCounter value="39" label="Content Pieces" />
        </Card>
      </div>
    </div>
  </section>
);

const ViralBreakdown = () => (
  <section className="py-16 text-white relative z-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-white/5 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">The Viral Hit</h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl font-light">
            One piece of content dominated November, accounting for ~70% of total monthly views.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 font-medium text-xs border border-pink-500/20">
            <TrendingUp className="mr-1.5 h-3.5 w-3.5" /> Top Performer
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left: Video Preview Simulation */}
        <div className="lg:col-span-4">
          <a
            href="https://www.instagram.com/reel/DRmat9egYR3/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-white/5 relative aspect-[9/16] group transform transition-transform hover:scale-[1.01] duration-500 cursor-pointer"
          >
            {/* Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram Logo"
                className="w-20 h-20 opacity-30 group-hover:opacity-20 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              {/* Specific Text Overlay for Viral Hit */}
              <div className="absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2">
                <span className="bg-black/30 text-white/90 px-2 py-1 font-medium text-sm backdrop-blur-sm">is no</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 pt-20">
              <p className="text-[10px] font-medium text-white/50 mb-1.5 uppercase tracking-wider">Reel • Nov 28</p>
              <h3 className="text-base font-semibold leading-snug mb-3 line-clamp-2 text-white/90">"Handwriting is no longer proof of anything..."</h3>
              <div className="flex items-center gap-4 text-xs font-medium text-white/80">
                <span className="flex items-center">
                  <Eye className="w-3.5 h-3.5 mr-1.5 text-white/40" /> 1.46M
                </span>
                <span className="flex items-center">
                  <Heart className="w-3.5 h-3.5 mr-1.5 text-white/40" /> 99K
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Right: Detailed Stats */}
        <div className="lg:col-span-8 space-y-5">
          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm text-center hover:bg-white/[0.07] transition-colors">
              <Heart className="w-5 h-5 text-pink-500 mx-auto mb-2" />
              <div className="text-xl font-semibold text-white tracking-tight">99K</div>
              <div className="text-xs text-white/40 mt-0.5 font-medium">Likes</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm text-center hover:bg-white/[0.07] transition-colors">
              <Share2 className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <div className="text-xl font-semibold text-white tracking-tight">85.4K</div>
              <div className="text-xs text-white/40 mt-0.5 font-medium">Shares</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm text-center hover:bg-white/[0.07] transition-colors">
              <Bookmark className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <div className="text-xl font-semibold text-white tracking-tight">21.7K</div>
              <div className="text-xs text-white/40 mt-0.5 font-medium">Saves</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm text-center hover:bg-white/[0.07] transition-colors">
              <MessageCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <div className="text-xl font-semibold text-white tracking-tight">725</div>
              <div className="text-xs text-white/40 mt-0.5 font-medium">Comments</div>
            </div>
          </div>

          {/* Virality Analysis Card */}
          <Card title="Interaction Quality" className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2 text-white/60 font-medium">
                    <span>Virality Score (Non-Follower Reach)</span>
                    <span className="font-semibold text-indigo-400">99.8%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                      style={{ width: '99.8%' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-green-500/10 rounded-md mt-0.5">
                      <Share2 className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm">High Shareability</h4>
                      <p className="text-xs text-white/50 font-light leading-relaxed mt-0.5">
                        85K Shares vs 99K Likes is an incredibly high ratio (~0.85), indicating high relatability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-yellow-500/10 rounded-md mt-0.5">
                      <Bookmark className="w-3.5 h-3.5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm">High Utility</h4>
                      <p className="text-xs text-white/50 font-light leading-relaxed mt-0.5">
                        21K Saves indicates the audience found long-term value in the content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/5 flex flex-col justify-center h-full">
                <div className="flex items-center text-indigo-300 font-medium mb-3 text-sm">
                  <Activity className="w-4 h-4 mr-2" /> Total Interactions
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">206.4K</div>
                <p className="text-white/40 text-xs font-light">Generated by a single reel.</p>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">Watch Time</span>
                  <span className="font-mono text-indigo-300 text-sm">300d 6h 46m</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const ReachAnalysis = () => (
  <section className="py-16 relative z-10">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10 tracking-tight">Audience Acquisition</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Pie Chart Visualization */}
        <Card className="flex flex-col items-center justify-center text-center py-8">
          <h3 className="text-sm font-medium text-white/90 mb-6 uppercase tracking-wide">Reach Distribution</h3>
          <div className="relative w-48 h-48 mb-6">
            {/* CSS Conic Gradient for Pie Chart */}
            <div
              className="w-full h-full rounded-full shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              style={{ background: 'conic-gradient(#6366f1 98.1%, #db2777 0)' }}
            ></div>
            <div className="absolute inset-3 bg-gray-900 rounded-full flex flex-col items-center justify-center border border-white/5">
              <span className="text-white/40 text-[10px] font-medium uppercase tracking-widest mb-0.5">Total Reach</span>
              <span className="text-2xl font-bold text-white tracking-tight">1.57M</span>
            </div>
          </div>
          <div className="flex justify-center gap-8 w-full">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">98.1%</p>
                <p className="text-white/40 text-[10px] font-medium uppercase">Non-Followers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">1.9%</p>
                <p className="text-white/40 text-[10px] font-medium uppercase">Followers</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Insight Text */}
        <Card className="flex flex-col justify-center">
          <h3 className="text-sm font-medium text-white/90 mb-4 uppercase tracking-wide">The Discovery Engine</h3>
          <div className="space-y-6">
            <div>
              <p className="text-indigo-400 font-semibold text-lg mb-1.5 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> +4,891% Reach Increase
              </p>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                The algorithm heavily favored your content this month, pushing it to over 1.5 million unique accounts. This is a massive top-of-funnel opportunity.
              </p>
            </div>
            <div className="p-5 bg-indigo-500/5 rounded-lg border border-indigo-500/10">
              <h4 className="font-semibold text-indigo-200 mb-1.5 text-sm">Conversion Opportunity</h4>
              <p className="text-indigo-200/60 text-xs font-light leading-relaxed">
                With 1.5M reach but only 2.4K new followers, the current conversion rate is approx 0.15%.
              </p>
              <div className="mt-3 flex items-center gap-2 text-yellow-400 text-xs font-medium bg-yellow-400/5 w-fit px-2.5 py-1 rounded-full border border-yellow-400/10">
                <ArrowUpRight className="w-3 h-3" />
                <span>Optimization Focus for December</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

// Thumbnail Component for Grid
const ThumbnailCard = ({ rank, title, views, overlayText, isViral = false, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-lg overflow-hidden aspect-[4/5] bg-gray-800 border border-white/5 shadow-md hover:shadow-xl transition-all duration-300 hover:border-white/20 block cursor-pointer"
  >
    {/* Instagram Logo Placeholder */}
    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        alt="Instagram Logo"
        className="w-12 h-12 opacity-30 group-hover:opacity-20 transition-opacity duration-300"
      />
    </div>

    {/* Gradient Overlay for Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

    {/* REEL SEGMENT OVERLAY TEXT (Mimicking the screenshot content) */}
    {overlayText && (
      <div className="absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2 z-10 pointer-events-none">
        <span className="bg-black/30 text-white/90 px-1.5 py-0.5 font-medium text-xs backdrop-blur-sm shadow-sm tracking-wide">
          {overlayText}
        </span>
      </div>
    )}

    {/* Center Play Button */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all z-20">
      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>
    </div>

    {/* Rank Badge */}
    <div className="absolute top-2.5 left-2.5 z-20">
      <div className="bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10">
        #{rank}
      </div>
    </div>

    {/* Content Details Overlay */}
    <div className="absolute inset-0 p-4 flex flex-col justify-end z-20">
      {isViral && (
        <div className="bg-indigo-600/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded w-fit mb-1.5 tracking-wider shadow-md">
          VIRAL
        </div>
      )}
      <h4 className="font-medium text-xs leading-snug mb-2 text-white/90 line-clamp-2 drop-shadow-sm">"{title}"</h4>
      <div className="flex justify-between items-end border-t border-white/10 pt-2">
        <div className="truncate w-full">
          <p className="text-lg font-semibold text-white tracking-tight truncate">{views}</p>
          <p className="text-white/60 text-[9px] uppercase tracking-wider font-medium">Views</p>
        </div>
        {isViral && (
          <div className="text-right flex-shrink-0">
            <p className="text-xs font-semibold text-green-400">99K</p>
            <p className="text-white/60 text-[9px] uppercase tracking-wider font-medium">Likes</p>
          </div>
        )}
      </div>
    </div>
  </a>
);

const ContentPerformance = () => (
  <section className="py-16 text-white relative z-10 pb-24">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 tracking-tight">Top Content Matrix</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        <ThumbnailCard
          rank="1"
          title="Handwriting is no longer proof of anything..."
          views="1.46M"
          overlayText="is no"
          isViral
          link="https://www.instagram.com/reel/DRmat9egYR3/"
        />
        <ThumbnailCard
          rank="2"
          title="Google just changed the game..."
          views="351.5K"
          overlayText="Google just"
          link="https://www.instagram.com/reel/DRUZfNNAaOp/"
        />
        <ThumbnailCard
          rank="3"
          title="Amazon just proved everyone wrong..."
          views="205K"
          overlayText="Amazon just"
          link="https://www.instagram.com/reel/DQ4FY-OAQOV/"
        />
        <ThumbnailCard
          rank="4"
          title="A guy discovered a secret..."
          views="8.8K"
          overlayText="A guy"
          link="https://www.instagram.com/reel/DRW-PmZAXLr/"
        />
        <ThumbnailCard
          rank="5"
          title="This startup is changing everything..."
          views="6.9K"
          overlayText="This startup"
          link="https://www.instagram.com/reel/DRpDXFJkkXg/"
        />
        <ThumbnailCard
          rank="6"
          title="China just released a new..."
          views="5.7K"
          overlayText="China just"
          link="#"
        />
        <ThumbnailCard
          rank="7"
          title="Aman Gupta said this about..."
          views="5.1K"
          overlayText="Aman Gupta"
          link="#"
        />
        <ThumbnailCard
          rank="8"
          title="Your Aadhaar card is now..."
          views="4.4K"
          overlayText="Your Aadhaar"
          link="#"
        />
        <ThumbnailCard
          rank="9"
          title="You're wasting your time if..."
          views="4.4K"
          overlayText="You're"
          link="#"
        />
        <ThumbnailCard
          rank="10"
          title="...and honestly it's scary."
          views="4.4K"
          overlayText="and honestly"
          link="#"
        />
      </div>
    </div>
  </section>
);

// --- Main App Component ---

export default function KushReport2() {
  return (
    <div className="bg-[#0a0a0a] font-sans leading-relaxed text-white min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black animated-gradient opacity-60"></div>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/grain.png)', mixBlendMode: 'overlay' }}
        ></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <ViralBreakdown />
        <ReachAnalysis />
        <ContentPerformance />
      </main>

      {/* Styles for the animated background matching the user request */}
      <style>{`
            .animated-gradient {
                background: radial-gradient(circle at 15% 25%, rgba(67, 56, 202, 0.25), transparent 50%),
                            radial-gradient(circle at 85% 85%, rgba(219, 39, 119, 0.2), transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15), transparent 60%);
                background-size: 200% 200%;
                animation: moveGradient 30s ease-in-out infinite;
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

import React, { useState } from 'react';
import { ShieldCheck, BarChart, Users, Zap, Search, Repeat, Bot, Target, FileText, Calendar, Mail, Phone, User, Link as LinkIcon, Rss, Layers, CheckCircle, Megaphone, Smile, Star } from 'lucide-react';

// Helper component for Stat Cards in the Hero section
const StatCard = ({ value, label }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700">
    <p className="text-3xl md:text-4xl font-bold text-cyan-400">{value}</p>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

// Helper component for feature highlights
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 hover:bg-gray-700/50 transition-all duration-300">
    <div className="flex items-center gap-4 mb-3">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

// Helper component for the step-by-step process
const StepCard = ({ number, title, children }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 h-full w-px bg-gray-700"></div>
    <div className="absolute left-[-10px] top-0 flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 border-2 border-cyan-400 text-cyan-400 font-bold text-sm">
      {number}
    </div>
    <div className="ml-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
  </div>
);

// Helper component for FAQ items
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="text-cyan-400 transform transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Helper component for Services section
const ServiceCard = ({ icon, title, networkSize, children }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-4xl font-bold text-indigo-400 mb-3">{networkSize}</p>
    <p className="text-gray-400">{children}</p>
  </div>
);

// Main App Component
export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black animated-gradient"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(https://www.transparenttextures.com/patterns/grain.png)",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className="relative z-10">
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Social <span className="text-indigo-400">SEO</span>
          </h1>
          <a
            href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
          >
            Book a Discovery Call
          </a>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-24 pb-20 text-center">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
          <div className="container mx-auto px-6 relative">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              India’s Viral Growth Engine for <br />
              <span className="text-indigo-400">Founders & Personal Brands</span>
            </h2>
            <p className="mt-6 mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              20–30 million organic views in the first 30 days — or we return your money. We build & operate a high-volume, India-first distribution system that learns and compounds.
            </p>
            <a
              href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300 inline-block shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              Book a Free Growth Audit →
            </a>
            <p className="mt-3 text-sm text-gray-500">(Eligibility Required)</p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <StatCard value="20-30M" label="Organic Views in 30 Days" />
              <StatCard value="100%" label="Money-Back Guarantee" />
              <StatCard value="India-First" label="Distribution System" />
            </div>
          </div>
        </section>

        {/* --- Why Social SEO --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Social SEO?</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                We're not just another agency. We're a growth machine engineered for virality.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={<Users className="w-8 h-8 text-indigo-400" />} title="Network, not just a page">
                We create and manage a mesh of fan pages, niche verticals, and meme handles that speak your audience’s language at scale.
              </FeatureCard>
              <FeatureCard icon={<Zap className="w-8 h-8 text-indigo-400" />} title="Search + Social Flywheel">
                Titles, hooks, and captions are engineered to rank in social search while riding trend waves for maximum impact.
              </FeatureCard>
              <FeatureCard icon={<Rss className="w-8 h-8 text-indigo-400" />} title="Influencer Relay">
                Strategic re-posts, stitches, and duets amplify winning content into new, untapped audience pools.
              </FeatureCard>
              <FeatureCard icon={<Bot className="w-8 h-8 text-indigo-400" />} title="AI-Assisted, Human-Led">
                AI speeds up content creation, while human editors ensure brand safety, cultural nuance, and quality.
              </FeatureCard>
              <FeatureCard icon={<Repeat className="w-8 h-8 text-indigo-400" />} title="Compounding Optimization">
                Each post trains the system. Winners are cloned, localized, and syndicated; losers are retired. Your reach grows exponentially.
              </FeatureCard>
              <FeatureCard icon={<Layers className="w-8 h-8 text-indigo-400" />} title="Distributed & Brand-Safe">
                 Address bold ideas through third-party pages without risking your main handle’s positioning.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* --- Our Network & Services --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Network & Services</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Leverage our massive, high-engagement networks to achieve viral scale from day one.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard 
                icon={<Megaphone className="w-10 h-10 text-indigo-400" />} 
                title="Fanpage Marketing" 
                networkSize="Custom"
              >
                We build and scale dedicated fanpages that cultivate a loyal community around your personal brand.
              </ServiceCard>
              <ServiceCard 
                icon={<Smile className="w-10 h-10 text-indigo-400" />} 
                title="Meme Marketing" 
                networkSize="350M+"
              >
                Tap into our network of 350M+ followers across top meme accounts to make your message go viral.
              </ServiceCard>
              <ServiceCard 
                icon={<Target className="w-10 h-10 text-indigo-400" />} 
                title="Niche Marketing" 
                networkSize="450M+"
              >
                Reach highly specific audiences through our 450M+ follower network of niche-specific pages.
              </ServiceCard>
              <ServiceCard 
                icon={<Star className="w-10 h-10 text-indigo-400" />} 
                title="Influencer Marketing" 
                networkSize="200M+"
              >
                Amplify your content through our creator relay system with a combined reach of over 200M+ followers.
              </ServiceCard>
            </div>
          </div>
        </section>
        
        {/* --- The Hero Offer --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="bg-gray-900/50 border-2 border-indigo-500 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">The Guaranteed Hero Offer</h2>
                    <p className="mt-4 text-5xl md:text-7xl font-extrabold text-indigo-400">20–30M+</p>
                    <p className="mt-2 text-2xl md:text-3xl text-white font-semibold">Organic Views in the First 30 Days</p>
                    <p className="mt-6 text-xl text-gray-300">If we miss the target, you get a <span className="font-bold text-white">100% refund</span>. It's that simple.</p>
                    <div className="mt-8 text-left max-w-3xl mx-auto space-y-3 text-gray-400">
                        <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" /><span>You meet our eligibility criteria and provide assets on time.</span></p>
                        <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" /><span>No mid-month freezes on access, scope, or platforms.</span></p>
                        <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" /><span>Views are measured via native platform analytics (paid boosts excluded).</span></p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- How The System Works --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our End-to-End Growth System</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">A transparent, repeatable process for explosive organic growth.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-12">
                <StepCard number="01" title="Strategy & Intake">Discovery, positioning, content audit, and risk guardrails to set the foundation.</StepCard>
                <StepCard number="02" title="Asset Ingestion & Clip Factory">We ingest your long-form content and build a tagged, searchable vault to generate clips, memes, and captions.</StepCard>
                <StepCard number="03" title="Network Build">We activate a distributed page network targeting different audience psychographics in your category.</StepCard>
                <StepCard number="04" title="Distribution & Seeding">High-frequency posting across the network, plus strategic seeding into relevant communities.</StepCard>
                <StepCard number="05" title="Optimization Loop">Daily signal review to iterate on winners and refine hooks, thumbnails, and timing.</StepCard>
                <StepCard number="06" title="Reporting & Scale-Up">Weekly scorecards and monthly growth reviews with action items for the next sprint.</StepCard>
            </div>
          </div>
        </section>
        
        {/* --- Eligibility Section --- */}
        <section id="eligibility" className="py-20 bg-gray-900/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Are You Ready to Scale?</h2>
                        <p className="mt-4 text-lg text-gray-400">This high-volume system requires readiness. Please apply only if you meet these criteria.</p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <Target className="w-7 h-7 text-indigo-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Acquisition Readiness</h4>
                                    <p className="text-gray-400">You have a working lead/checkout system that can absorb high volume.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <BarChart className="w-7 h-7 text-indigo-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Baseline Authority</h4>
                                    <p className="text-gray-400">100k–200k+ followers on a major platform or equivalent press/authority signals.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <FileText className="w-7 h-7 text-indigo-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Long-Form Asset Base</h4>
                                    <p className="text-gray-400">A library of podcasts, talks, videos, or webinars we can legally repurpose.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold text-indigo-400">Don’t Qualify Yet?</h3>
                        <p className="mt-3 text-white font-semibold">We've got you covered with our Zero-to-One Ramp.</p>
                        <p className="mt-2 text-gray-400">We’ll help you reach the authority baseline first with publisher features, collaborative lives, and a starter network before you enter the guaranteed plan.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* --- FAQ Section --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-2">
              <FaqItem
                question="Is this paid media?"
                answer="No. We optimize for organic distribution via search-aligned content, network effects, and creator relays. You may layer ads if desired, but those views do not count toward the guarantee."
              />
              <FaqItem
                question="Who owns the pages?"
                answer="We incubate and operate the network for performance. Admin rights can be transferred per the agreement (e.g., after a fixed term or milestone)."
              />
              <FaqItem
                question="Is this compliant with platform policies?"
                answer="Yes. No fake engagement, no bots, no scraping that violates TOS. We operate with brand-safe, policy-compliant practices."
              />
              <FaqItem
                question="What if my brand is sensitive to controversy?"
                answer="We route edgier angles through third-party pages; your primary handle remains protected and your brand positioning is safe."
              />
              <FaqItem
                question="How much does it cost?"
                answer="Pricing reflects the scope of network build and posting frequency. It is a significant investment because the engine runs at high volume to deliver guaranteed results. Final pricing follows the growth audit."
              />
            </div>
          </div>
        </section>
        
        {/* --- Final CTA Section --- */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Go Viral?</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Book a no-obligation discovery call to see if you qualify for our guaranteed growth plan.</p>
                     <a
                        href="https://calendly.com/personalbrand-wasnot/15-minutes-discovery-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300 inline-block shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                    >
                      Book Your Free Call →
                    </a>
            </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
            <div className="text-center text-sm text-gray-500">
                <p>Guarantee applies only if eligibility criteria are met and onboarding deliverables are provided on time. Views verified via native platform analytics. Full terms are included in the MSA and Guarantee Schedule.</p>
                <p className="mt-4">&copy; {new Date().getFullYear()} Social SEO. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

// Helper for form inputs to reduce repetition
// This component is no longer used, but kept in case a form is needed later.
const InputField = ({ icon, type, placeholder, id }) => (
    <div>
        <label htmlFor={id} className="sr-only">{placeholder}</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                {React.cloneElement(icon, { className: 'w-5 h-5' })}
            </div>
            <input 
                type={type} 
                name={id} 
                id={id} 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder={placeholder} 
            />
        </div>
    </div>
);


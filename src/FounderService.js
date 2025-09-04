import React from 'react';

// The PRD specifies Lucide icons, which is a great choice.
// For a single-file build, we'll import only the icons we need.
// We'll also use `lucide-react` for a proper React component integration.
import {
  Layers, Video, Clock, ShieldCheck, Key, Wallet, ClipboardList, CheckCircle2, Ban, MessageSquare, ChartLine,
} from 'lucide-react';

const App = () => {
  // Original brand colors based on the PRD
  const originalAccentColor = '#14B8A6'; // The original teal
  const originalBrandColors = {
    bg: '#0B1220',
    card: '#0F1629',
    accent: originalAccentColor,
    textPrimary: '#FFFFFF',
    textSecondary: '#CBD5E1',
    textTertiary: '#94A3B8',
    divider: 'rgba(255,255,255,0.12)',
    shadowAccent: `0 0 0 1px rgba(20,184,166,0.35)`,
    shadowAmbient: '0 10px 24px rgba(0,0,0,0.35)',
  };

  // Utility function for consistent glass effect
  const glassCardClasses = "bg-[#0F1629]/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-lg shadow-black/20";
  const iconBaseClasses = `w-6 h-6 text-[${originalBrandColors.accent}] md:w-5 md:h-5`;

  // Reusable component for a section with an icon and title
  const SectionCard = ({ icon: Icon, title, subtitle, children }) => (
    <div className={`${glassCardClasses} p-6 md:p-8 flex flex-col`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-md bg-[${originalBrandColors.accent}]/10`}>
          <Icon className={`w-5 h-5 text-[${originalBrandColors.accent}]`} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white/90 leading-snug">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );

  // Reusable component for list items with a checkmark icon
  const CheckListItem = ({ text, subText, pillText }) => (
    <li className="flex items-center space-x-3 mb-2">
      <CheckCircle2 className={`w-4 h-4 text-[${originalBrandColors.accent}] flex-shrink-0`} />
      <span className="text-sm md:text-base text-[#CBD5E1]">{text}</span>
    </li>
  );

  return (
    <div className="relative min-h-screen font-sans text-[#CBD5E1] antialiased">
      {/* Background Gradient & Glow (Original) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B1220] to-[#0F1629] overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#14B8A6]/10 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl opacity-50 animate-pulse-slow delay-1000"></div>
      </div>
      
      {/* Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Founder-Led Personal Brand</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mt-2">Service Scope</h1>
          <p className="max-w-xl mx-auto mt-4 text-[#94A3B8] text-sm md:text-base leading-relaxed">
            Read-only reference of deliverables, workflow, ownership, and standards.
          </p>
        </section>

        {/* Section Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* What You Get Each Month */}
          <SectionCard icon={Layers} title="What You Get Each Month">
            <ul className="list-none space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Video className={iconBaseClasses} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">30 short-form videos</p>
                  <p className="text-sm text-gray-400">($1,500 / month)</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70">Captions included</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70">1080×1920</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70">Royalty-free audio</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <ChartLine className={iconBaseClasses} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">Monthly analytics snapshot</p>
                  <p className="text-sm text-gray-400">($1,500 / month)</p>
                </div>
              </li>
            </ul>
          </SectionCard>
          
          {/* Deliverable Standards */}
          <SectionCard icon={Video} title="Deliverable Standards">
            <div className="space-y-4">
              <div>
                <h4 className="text-white/90 font-semibold mb-2">Technical</h4>
                <ul className="list-none space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">9:16, 1080×1920, 20–60s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">Loudness-normalized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">Hard-sub option</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/90 font-semibold mb-2">Editorial</h4>
                <ul className="list-none space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">Clear hook ≤3s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">Brand-safe language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 flex-shrink-0 text-[${originalBrandColors.accent}] mt-1">●</span>
                    <span className="text-sm text-[#CBD5E1]">Disclaimer where relevant</span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Workflow & Timeline */}
          <SectionCard icon={Clock} title="Workflow & Timeline">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-semibold text-white/50">1)</span>
                <ClipboardList className={`w-6 h-6 text-[${originalBrandColors.accent}] mt-1`} />
                <p className="text-sm text-[#CBD5E1] mt-2">Formalities</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-semibold text-white/50">2)</span>
                <ShieldCheck className={`w-6 h-6 text-[${originalBrandColors.accent}] mt-1`} />
                <p className="text-sm text-[#CBD5E1] mt-2">Week-1 Setup</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-semibold text-white/50">3)</span>
                <Video className={`w-6 h-6 text-[${originalBrandColors.accent}] mt-1`} />
                <p className="text-sm text-[#CBD5E1] mt-2">First Batch</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-semibold text-white/50">4)</span>
                <MessageSquare className={`w-6 h-6 text-[${originalBrandColors.accent}] mt-1`} />
                <p className="text-sm text-[#CBD5E1] mt-2">Ongoing Pipeline</p>
              </div>
            </div>
          </SectionCard>
          
          {/* Roles, Boundaries & Compliance */}
          <SectionCard icon={ShieldCheck} title="Roles, Boundaries & Compliance">
            <ul className="list-none space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">We handle: scripting, avatar ops, editing, posting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">Client handles: factual claims, legal approvals.</span>
              </li>
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 mt-1 text-red-500 flex-shrink-0" />
                <span className="text-sm text-[#CBD5E1]">Not used: PHI, private family footage.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">Disclaimers included where relevant.</span>
              </li>
            </ul>
          </SectionCard>

          {/* Ownership & Data */}
          <SectionCard icon={Key} title="Ownership & Data">
            <ul className="list-none space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">Client owns final assets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">Avatar data used only for approved content.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-1 text-[${originalBrandColors.accent}] flex-shrink-0`} />
                <span className="text-sm text-[#CBD5E1]">Source retention: 90 days.</span>
              </li>
            </ul>
          </SectionCard>

          {/* Commercials Triptych */}
          <div className={`${glassCardClasses} p-6 md:p-8 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-md bg-[${originalBrandColors.accent}]/10`}>
                <Wallet className={`w-5 h-5 text-[${originalBrandColors.accent}]`} />
              </div>
              <h3 className="text-xl font-semibold text-white/90 leading-snug">Commercials</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider">Price</p>
                <p className="text-2xl font-bold text-white mt-1">$1,500 <span className="text-sm font-normal text-gray-400">/ month</span></p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider">Term</p>
                <p className="text-2xl font-bold text-white mt-1">Initial 3 months</p>
              </div>
            </div>
          </div>
          
          {/* Inputs & Access */}
          <SectionCard icon={ClipboardList} title="Inputs & Access">
            <ul className="list-none space-y-2 mt-4">
              <CheckListItem text="Brand kit" />
              <CheckListItem text="Prior content references" />
              <CheckListItem text="Compliance guidelines" />
              <CheckListItem text="Account access" />
            </ul>
          </SectionCard>

          {/* Acceptance Criteria */}
          <SectionCard icon={CheckCircle2} title="Acceptance Criteria">
            <ul className="list-none space-y-2 mt-4">
              <CheckListItem text="30 videos/month delivered to spec" />
              <CheckListItem text="All sections live on the page" />
              <CheckListItem text="Compliance check complete" />
            </ul>
          </SectionCard>
          
          {/* Out of Scope */}
          <SectionCard icon={Ban} title="Out of Scope (Add-ons)">
            <ul className="list-none space-y-2 mt-4">
              <CheckListItem text="Long-form filming" />
              <CheckListItem text="Paid media" />
              <CheckListItem text="Live events coverage" />
            </ul>
          </SectionCard>
          
          {/* Communication Cadence */}
          <SectionCard icon={MessageSquare} title="Communication Cadence">
            <ul className="list-none space-y-2 mt-4">
              <CheckListItem text="Weekly async update" />
              <CheckListItem text="Monthly analytics snapshot" />
              <CheckListItem text="Escalation path documented" />
            </ul>
          </SectionCard>

        </div>
        
        {/* Footer Note */}
        <footer className="mt-16 md:mt-24 text-center">
          <p className="text-xs text-[#94A3B8] leading-tight max-w-lg mx-auto">
            © 2025 All rights reserved.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;


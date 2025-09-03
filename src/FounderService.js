import React from 'react';

// --- Data Source (Content Unchanged) ---
const pageContent = {
  titleBlock: "Founder-Led Personal Brand: Monthly Service Overview",
  chips: [],
  subtext: "An end-to-end system for creating a consistent, high-quality personal brand presence on short-form video platforms. This reference page contains no performance claims.",
  sections: [
    {
      id: "scope",
      title: "What You Get (Monthly)",
      icon: "Layers",
      content: [
        "<strong>Monthly Output:</strong> 30 short-form videos, ready for the primary platform.",
        "<strong>End-to-End Service:</strong> Ideation, scripting, AI-avatar recording (with consent), editing, posting, and a monthly analytics snapshot.",
      ],
    },
    {
      id: "workflow",
      title: "Workflow & Timeline",
      icon: "Clock",
      type: "timeline",
      steps: [
        { title: "Step 1: Formalities", description: "Agreement → PO → Initial Payment" },
        { title: "Step 2: Week 1 Setup", description: "AI avatar, scripts & brand kit" },
        { title: "Step 3: Wk 1-1.5 Production", description: "First batch produced & posted" },
        { title: "Step 4: Ongoing", description: "Rolling pipeline & monthly reporting" },
      ],
    },
    {
      id: "standards",
      title: "Deliverable Standards",
      icon: "Video",
      content: [
          "<strong>Length:</strong> 20–60 seconds.",
          "<strong>Resolution:</strong> 1080×1920 minimum.",
          "<strong>Audio:</strong> Loudness-normalized with licensed elements.",
          "<strong>Graphics:</strong> Branded lower-thirds & timed on-screen text.",
          "<strong>Captions:</strong> Burned-in, spell-checked, and emphasized.",
          "<strong>Compliance:</strong> No medical advice/PHI, pre-approved language bank.",
      ],
    },
     {
      id: "commercials",
      title: "Commercials",
      icon: "Wallet",
      type: "triptych",
      items: [
          { label: "Price", value: "$1,500", note: "USD per month" },
          { label: "Term", value: "3 Months", note: "Initial engagement" },
          { label: "Schedule", value: "Net 7" },
      ]
    },
    {
      id: "compliance",
      title: "Roles, Boundaries & Compliance",
      icon: "ShieldCheck",
      content: [
        "<strong>Agency Handles:</strong> Ideation, scripts, recording, editing, posting, analytics.",
        "<strong>Client Handles:</strong> Timely approvals, guest clearances, access credentials.",
        "<strong>Boundaries:</strong> No recording of private moments, PHI, or unapproved commentary.",
        "<strong>Compliance:</strong> Disclaimers used where appropriate; no medical advice.",
      ],
    },
    {
      id: "ownership",
      title: "Ownership & Data",
      icon: "Key",
      content: [
        "<strong>Asset Ownership:</strong> Client owns all final assets and channels.",
        "<strong>AI Avatar Data Use:</strong> Used exclusively for client-approved content; revocable.",
        "<strong>File Storage:</strong> Source files retained for 90 days post-engagement.",
      ],
    },
    {
      id: "inputs",
      title: "Inputs Needed to Start",
      icon: "ClipboardList",
      content: [
        "Brand assets (logo, colors, fonts).",
        "Posting access or an approved scheduling workflow.",
        "Preferred disclaimers and required legal language.",
        "Reference material to seed avatar and scripts.",
      ],
    },
    {
      id: "acceptance",
      title: "Acceptance Criteria",
      icon: "CheckCircle",
      content: [
        "30 compliant videos are delivered and scheduled/posted per the calendar.",
        "Each video meets the technical, captioning, and branding standards.",
        "The monthly analytics snapshot is shared with highlights.",
      ],
    },
    {
      id: "out-of-scope",
      title: "Out of Scope (Add-ons)",
      icon: "Ban",
      content: [
        "Long-form production (>2 minutes) or podcasting.",
        "Paid ads management, PR, or community moderation.",
        "Guest booking, legal reviews, or medical advisory.",
        "Live on-site filming (non-avatar services).",
      ],
    },
    {
      id: "communication",
      title: "Communication Cadence",
      icon: "MessageSquare",
      content: [
        "<strong>Primary Channel:</strong> Email/WhatsApp as agreed.",
        "<strong>Weekly Touchpoint:</strong> Status note on content pipeline.",
        "<strong>Monthly:</strong> Analytics snapshot and plan for the next cycle.",
      ],
    },
  ],
};

// --- Icon Components (from Lucide) ---
const icons = {
  Layers: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>),
  Clock: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>),
  Video: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 5.25a2.25 2.25 0 0 0-2.25-2.25H4.25A2.25 2.25 0 0 0 2 5.25v13.5A2.25 2.25 0 0 0 4.25 21h15.5A2.25 2.25 0 0 0 22 18.75V5.25z"></path><polygon points="15.5 10.5 10.5 7.5 10.5 16.5 15.5 13.5"></polygon></svg>),
  Wallet: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12v4"></path><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"></path><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path></svg>),
  ShieldCheck: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>),
  Key: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>),
  ClipboardList: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>),
  CheckCircle: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>),
  Ban: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>),
  MessageSquare: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>),
};

// --- New UI Components ---

const Background = () => (
    <>
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#0B1220]">
            <div className="absolute inset-0 bg-black animated-gradient"></div>
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "url(https://www.transparenttextures.com/patterns/grain.png)",
                    mixBlendMode: "overlay",
                }}
            ></div>
        </div>
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
    </>
);

const Chip = ({ text }) => (
    <div className="inline-block text-xs font-medium text-teal-300 bg-teal-500/10 ring-1 ring-teal-400/30 rounded-full px-3 py-1">
        {text}
    </div>
);

const TitleBlock = ({ title, subtext, chips }) => (
    <header className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
                {chips.map((chip, i) => <Chip key={i} text={chip} />)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight">
                {title}
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                {subtext}
            </p>
        </div>
    </header>
);

const IconWrapper = ({ icon: IconName, ...props }) => {
    const IconComponent = icons[IconName];
    return IconComponent ? <IconComponent {...props} /> : null;
};

const SectionCard = ({ icon, title, children, pills }) => (
    <section className="bg-[#0F1629]/50 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-500/10 text-teal-400 rounded-lg p-2">
                 <IconWrapper icon={icon} className="w-6 h-6" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-100">{title}</h2>
        </div>
        <div className="space-y-4">{children}</div>
        {pills && (
            <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((pill, i) => (
                    <span key={i} className="text-xs text-slate-400 bg-slate-700/50 rounded-full px-3 py-1">{pill}</span>
                ))}
            </div>
        )}
    </section>
);

const CheckListItem = ({ text }) => (
    <div className="flex items-start gap-3 p-3 bg-slate-800/30 ring-1 ring-white/5 rounded-lg">
        <icons.CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
        <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
);

const Timeline = ({ steps }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
            <div key={i} className="bg-slate-800/30 ring-1 ring-white/5 rounded-lg p-4 text-center">
                <h3 className="font-bold text-gray-200">{step.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{step.description}</p>
            </div>
        ))}
    </div>
);

const Triptych = ({ items }) => (
     <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
             <div key={i} className="bg-slate-800/30 ring-1 ring-white/5 rounded-lg p-4 text-center">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
        ))}
    </div>
);


export default function FounderService() {
    return (
        <>
            <Background />
            <div className="relative antialiased text-gray-300 font-sans">
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <TitleBlock title={pageContent.titleBlock} subtext={pageContent.subtext} chips={pageContent.chips} />
                    
                    <div className="space-y-8">
                        {pageContent.sections.map((section) => (
                            <SectionCard key={section.id} title={section.title} icon={section.icon} pills={section.pills}>
                                {section.type === 'timeline' ? (
                                    <Timeline steps={section.steps} />
                                ) : section.type === 'triptych' ? (
                                    <Triptych items={section.items} />
                                ) : (
                                    <div className="space-y-3">
                                        {section.content.map((item, index) => (
                                            <CheckListItem key={index} text={item} />
                                        ))}
                                    </div>
                                )}
                            </SectionCard>
                        ))}
                    </div>

                </main>
            </div>
        </>
    );
}


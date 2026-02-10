import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- ICON COMPONENTS ---
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// --- MODAL COMPONENT ---
const Modal = ({ contentUrl, onClose }) => {
  if (!contentUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] relative shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-300 bg-black/50 rounded-full p-2 z-10 hover:bg-black/80 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="w-full aspect-video">
          <iframe
            src={contentUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};


// --- ANIMATED SECTION WRAPPER ---
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 sm:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// --- BACKGROUND COMPONENT ---



// --- HERO SECTION ---
const Hero = () => {
  return (
    <header className="relative text-center py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50"
        >
          Your End-to-End <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Podcast Growth</span> Package.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-slate-400"
        >
          A complete, high-quality production service designed to turn your long-form content into a powerful growth engine. This proposal outlines our partnership to handle your entire podcast workflow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 text-center hover:border-purple-500/50 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-slate-50">The Complete Package</h2>
            <p className="mt-2 text-slate-400">Everything from editing and SEO to multi-platform publishing.</p>
            <p className="mt-6 text-4xl font-bold text-slate-50">USD $3,000 <span className="text-base font-medium text-slate-400">/ month</span></p>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-sm text-slate-500"
        >
          Term: 3-month initial agreement, auto-renewing. Includes setup, production, approvals, and direct posting on your channels.
        </motion.p>
      </div>
    </header>
  );
};

// --- PACKAGES SECTION ---
const Packages = () => {
  const podcastDeliverables = [
    "Up to 2 Podcast Long-Form Edits per month",
    "60 High-Quality, Premium Short-Form Edits per month",
    "3 Thumbnails per Episode for A/B Testing",
    "Professional Titling, Descriptions, and Show Notes",
    "Complete YouTube SEO and Optimization",
    "Publishing on all agreed social media platforms (YouTube, IG, etc.)",
  ];

  return (
    <AnimatedSection id="packages">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">A Clear Scope with Predictable Output</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">Everything you need to produce, polish, and publish your podcast content, all in one simple package.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400">What's Included Monthly</h3>
            <p className="mt-4 text-slate-400">This all-inclusive service covers the full production lifecycle to maximize your content's reach and impact.</p>
            <ul className="mt-6 space-y-4">
              {podcastDeliverables.map(item => (
                <li key={item} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="ml-3 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- PROCESS & SLAS SECTION ---
const ProcessTimeline = () => {
  const processSteps = [
    { title: "Intake", description: "Upload raw assets to Drive/OneDrive and fill a quick brief in Notion." },
    { title: "Edit", description: "Our team gets to work on the first version, applying your brand guidelines." },
    { title: "Internal QC", description: "We run a rigorous quality check before it ever reaches you." },
    { title: "Client Review", description: "Your team provides consolidated feedback directly in the Notion task." },
    { title: "Finalize", description: "Revisions are completed and final assets are exported to structured folders." },
    { title: "Publish", description: "We post the content on your channels according to the agreed calendar." },
    { title: "Weekly Retro", description: "A quick 15-min sync to review performance, wins, and blockers." },
  ];

  return (
    <AnimatedSection id="process" className="bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Your Content Pipeline: Reliable, Transparent, and Fast</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">Our battle-tested workflow ensures quality and speed, from raw footage to live post.</p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative pl-5 border-l-2 border-slate-700">
            {processSteps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="absolute -left-[30px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-600">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
                </div>
                <div className="ml-8">
                  <p className="text-sm font-semibold text-blue-400">STEP {index + 1}</p>
                  <h3 className="text-xl font-bold text-slate-100 mt-1">{step.title}</h3>
                  <p className="text-slate-400 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="border-b border-slate-700">
                <tr>
                  <th className="p-4 text-sm font-semibold text-slate-300">Asset Type</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">First Version Delivery</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Revision Turnaround</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Short-Form Video (≤60s)</td>
                  <td className="p-4 text-slate-400">Within 48 business hours</td>
                  <td className="p-4 text-slate-400">~24 business hours</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">Full Podcast (30–90 min)</td>
                  <td className="p-4 text-slate-400">3–5 business days</td>
                  <td className="p-4 text-slate-400">1–2 business days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-300">Static Graphics</td>
                  <td className="p-4 text-slate-400">Within 48 business hours</td>
                  <td className="p-4 text-slate-400">~24 business hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">Includes up to 2 rounds of revisions per asset. Additional rounds are billed hourly.</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- GALLERY & STACK SECTION ---
const GalleryAndStack = ({ openModal }) => {
  const galleryItems = [
    { title: 'Short-Form (Style 1)', href: 'https://drive.google.com/file/d/1pzi8aEJUSTCHAJEpi76t9mW5SJ03rd60/view?usp=sharing' },
    { title: 'Short-Form (Style 2)', href: 'https://drive.google.com/file/d/1rQWj4VAI11bcv_NYAkUKYBP6YauAIp3L/view?usp=sharing' },
    { title: 'Podcast Intro', href: 'https://youtu.be/thMp-bu-VpM?si=MWFtBYLs5jCQsEMb' },
    { title: 'Thumbnail (Ref 1)', href: 'https://drive.google.com/file/d/1KFnG3hTvlLBAbrzQhWUQ8vEmwvGLFCFQ/view?usp=sharing' },
    { title: 'Thumbnail (Ref 2)', href: 'https://drive.google.com/file/d/15UpHXypmH3r2m5_4oEIyLryinVsAeIf9/view?usp=sharing' },
    { title: 'CTR Improvements', href: 'https://drive.google.com/file/d/1KGnUX3KAXiA26WVuNq_bf1oNjhyAdY44/view?usp=sharing' },
    { title: 'Podcast Video (Full Episode)', href: 'https://youtu.be/S44_AaeZ928?si=OsPLK_b5pvXbCpnv' },
  ];

  const stack = [
    { name: "Google Drive", icon: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" },
    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Slack", icon: "https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" },
    { name: "LinkedIn", icon: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" },
    { name: "YouTube", icon: "https://www.youtube.com/s/desktop/014dbbed/img/favicon_144.png" },
    { name: "Instagram", icon: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png" },
  ];

  return (
    <AnimatedSection id="deliverables">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Example Deliverables & Operating Stack</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">A preview of the asset quality you can expect and the tools we use to make it happen seamlessly.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map(item => (
            <button
              onClick={() => openModal(item.href)}
              key={item.title}
              className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-center group hover:border-blue-500/50 transition-colors duration-300 text-center"
            >
              <div>
                <p className="text-slate-300 font-semibold group-hover:text-blue-400 transition-colors text-sm">{item.title}</p>
                <p className="text-xs text-slate-500 mt-1">Click to preview</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-100">Our Core Tooling</h3>
          <p className="mt-2 text-slate-400">We integrate directly into your preferred stack.</p>
          <div className="mt-8 flex justify-center items-center gap-x-8 sm:gap-x-12 flex-wrap">
            {stack.map(tool => (
              <div key={tool.name} className="flex flex-col items-center gap-3 p-4">
                <img src={tool.icon} alt={tool.name} className="h-10 w-10 object-contain" />
                <span className="text-sm text-slate-400">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- NEXT STEPS & ONBOARDING ---
const NextSteps = () => {
  const steps = [
    "Agreement Sign-off",
    "Raise PO (Setup fee included)",
    "Onboarding Doc (Brand, access, workflows)",
    "Access Handover (Drive/OneDrive, platforms)",
    "Week-1 Delivery (First batch goes live)"
  ];

  const checklist = [
    "Brand kit: logo, color, type, tone guide",
    "Access: IG/FB/YouTube/LinkedIn roles, Drive/OneDrive",
    "Podcast assets: intros/outros, music, lower-thirds",
    "Prior best-performers: top 10 posts and insights",
    "Legal: guest consent forms (if applicable)",
  ];

  return (
    <AnimatedSection id="next-steps" className="bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Let's Get Started</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">Our onboarding is designed to be fast and efficient, getting us to production in days, not weeks.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Acceptance & Next Steps</h3>
            <ol className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-slate-50 font-bold mr-4">{index + 1}</span>
                  <span className="text-lg text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Onboarding Checklist</h3>
            <ul className="mt-6 space-y-4">
              {checklist.map(item => (
                <li key={item} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="ml-3 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- FOOTER SECTION ---
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 relative z-10 bg-black/50">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <p className="text-sm">&copy; {year}. This proposal is confidential. All rights reserved.</p>
        <p className="text-xs mt-2">Prepared for: Vivek</p>
      </div>
    </footer>
  );
}

// --- MAIN COMPONENT ---
const PodcastProposal = () => {
  const [modalUrl, setModalUrl] = useState(null);

  const openModal = (url) => {
    let embedUrl = '';
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      let videoId;
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1].split('&')[0];
      }
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else {
        embedUrl = url;
      }
    } else if (url.includes('drive.google.com')) {
      const fileId = url.split('/d/')[1].split('/')[0];
      embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      embedUrl = url;
    }
    setModalUrl(embedUrl);
  };

  const closeModal = () => {
    setModalUrl(null);
  };

  return (
    <div className="font-sans text-slate-200">
      <div className="relative z-10">
        <main>
          <Hero />
          <Packages />
          <ProcessTimeline />
          <GalleryAndStack openModal={openModal} />
          <NextSteps />
        </main>
        <Footer />
      </div>
      <Modal contentUrl={modalUrl} onClose={closeModal} />
    </div>
  );
};

export default PodcastProposal;


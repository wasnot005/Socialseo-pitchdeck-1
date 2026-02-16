import React, { useEffect } from 'react';
import { HeroSection } from './kush3-components/HeroSection';
import { ComparativeVisualizer } from './kush3-components/ComparativeVisualizer';
import { MetricsTable } from './kush3-components/MetricsTable';
import { ContentGallery } from './kush3-components/ContentGallery';
import { GrowthStory } from './kush3-components/GrowthStory';
import { ContentPillars } from './kush3-components/ContentPillars';
import { NextSteps } from './kush3-components/NextSteps';
import { Footer } from './kush-components/Footer';

export default function KushReport3() {
    useEffect(() => {
        const pageTitle = 'Kush – 15-Day Comparative Report | SocialSEO';
        document.title = pageTitle;

        const ensureMeta = (selector, attributes) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
                document.head.appendChild(el);
            }
            el.setAttribute('content', pageTitle);
        };

        ensureMeta('meta[property="og:title"]', { property: 'og:title' });
        ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    }, []);

    return (
        <div className="font-sans leading-relaxed text-white relative" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}>
            {/* Google Font — Plus Jakarta Sans */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center bg-transparent pointer-events-none">
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
                    <span className="font-bold tracking-tight text-blue-300">
                        <span className="text-white">Social</span>SEO
                    </span>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full pointer-events-auto">
                    <span className="text-sm font-medium text-white/80">Jan vs Feb Sprint</span>
                </div>
            </header>

            {/* Content */}
            <div className="relative z-10">
                <main>
                    <HeroSection />
                    <ComparativeVisualizer />
                    <MetricsTable />
                    <GrowthStory />
                    <ContentGallery />
                    <ContentPillars />
                    <NextSteps />
                </main>

                <Footer />
            </div>
        </div>
    );
}

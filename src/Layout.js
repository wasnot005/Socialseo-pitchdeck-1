import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-surface-950 font-body text-surface-200 relative overflow-x-hidden">
            {/* Subtle Animated Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 animated-gradient"></div>
            </div>

            {/* Noise Texture */}
            <div className="noise-overlay"></div>

            {/* Viewport Inner Glow */}
            <div className="viewport-glow"></div>

            {/* Page Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Layout;

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 font-sans text-gray-200 relative overflow-x-hidden selection:bg-indigo-500/30">
            {/* Global Animated Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-black animated-gradient"></div>
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                        backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")'
                    }}
                ></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {children}
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
        </div>
    );
};

export default Layout;

import React from 'react';
import { LiquidGlass } from './LiquidGlass';

export const GlassCard = ({ children, className = "", title, style = {} }) => {
    return (
        <LiquidGlass displacementScale={15} cornerRadius={32} className={`
        relative 
        ${className}
      `}>
            <div
                style={style}
                className={`
        relative overflow-hidden h-full
        
        /* Base Glass Styling */
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        
        /* The 'Liquid' Effect Engine */
        backdrop-blur-[50px] 
        backdrop-saturate-[180%] 
        backdrop-contrast-[110%]
        brightness-[1.1]

        /* Border & Thickness Simulation */
        border border-white/[0.15]
        rounded-[32px] 
        
        /* Complex Shadow System for Depth */
        shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3),_0_8px_16px_-6px_rgba(0,0,0,0.4),_inset_0_0_0_1px_rgba(255,255,255,0.15),_inset_0_1px_0_0_rgba(255,255,255,0.5)]
        
        /* Layout & interaction */
        p-6 md:p-8 
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5),_inset_0_0_0_1px_rgba(255,255,255,0.3),_inset_0_1px_0_0_rgba(255,255,255,0.6)]
        
      `}
            >
                {/* Specular Highlight / Reflection at top left */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-[32px] z-0" />

                {/* Subtle Noise Texture for realism */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")' }}></div>

                {title && (
                    <h3 className="relative text-2xl font-bold text-white mb-6 tracking-tight z-10 drop-shadow-md">
                        {title}
                    </h3>
                )}
                <div className="relative z-10 h-full">
                    {children}
                </div>
            </div>
        </LiquidGlass>
    );
};

import React, { useRef, useState, useEffect, useCallback, useId } from 'react';
import { displacementMap } from './LiquidGlassMaps';

const GlassFilter = ({ id, displacementScale, width, height }) => (
    <svg style={{ position: "absolute", width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
            <filter id={id} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                <feImage result="DISPLACEMENT_MAP" href={displacementMap} preserveAspectRatio="xMidYMid slice" width="100%" height="100%" />
                <feDisplacementMap in="SourceGraphic" in2="DISPLACEMENT_MAP" scale={displacementScale} xChannelSelector="R" yChannelSelector="B" />
            </filter>
        </defs>
    </svg>
);

export const LiquidGlass = ({
    children,
    className = "",
    style = {},
    displacementScale = 20,
    cornerRadius = 24,
}) => {
    const filterId = useId().replace(/:/g, "").replace(/\./g, ""); // Ensure valid ID for SVG
    const validId = "liquid-glass-filter-" + filterId;
    const glassRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (glassRef.current) {
            const { offsetWidth, offsetHeight } = glassRef.current;
            setSize({ width: offsetWidth, height: offsetHeight });
        }
    }, []);

    return (
        <div className={`relative ${className}`} style={style} ref={glassRef}>
            <GlassFilter
                id={validId}
                displacementScale={displacementScale}
                width={size.width}
                height={size.height}
            />
            <div style={{ filter: `url(#${validId})` }} className="h-full w-full">
                <div
                    className="h-full w-full overflow-hidden"
                    style={{ borderRadius: `${cornerRadius}px` }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

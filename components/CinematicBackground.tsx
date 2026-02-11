import React from 'react';

const CinematicBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:hidden">
            {/* Layer 1: Animated Film Grain Overlay */}
            <div className="absolute -inset-[10%] w-[120%] h-[120%] z-10 opacity-[0.55] mix-blend-overlay animate-grain bg-[length:200px_200px]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Layer 2: Floating Soft Gradient Blob */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(180,170,230,0.4)_0%,rgba(255,255,255,0)_70%)] blur-[80px] animate-blobDrift z-0 transform-gpu" />
        </div>
    );
};

export default CinematicBackground;

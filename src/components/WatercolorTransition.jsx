import React, { useEffect, useState } from 'react';

export default function WatercolorTransition({
  isActive,
  origin = { x: 50, y: 50 },
  directionTitle,
  directionIcon,
  onComplete
}) {
  const [phase, setPhase] = useState('idle'); // 'blooming' | 'covering' | 'fading'

  useEffect(() => {
    if (isActive) {
      setPhase('blooming');
      const timer1 = setTimeout(() => {
        setPhase('covering');
      }, 700);

      const timer2 = setTimeout(() => {
        setPhase('fading');
        if (onComplete) onComplete();
      }, 1200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setPhase('idle');
    }
  }, [isActive, onComplete]);

  if (!isActive && phase === 'idle') return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden transition-opacity duration-300">
      {/* SVG Watercolor Filter for Organic Edge Bleed */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="watercolor-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Primary Organic Expanding Ink Blot */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 -translate-x-1/2 -translate-y-1/2 rounded-full animate-watercolor"
        style={{
          left: `${origin.x}px`,
          top: `${origin.y}px`,
          backgroundColor: '#8B0000',
          filter: 'url(#watercolor-filter)',
          boxShadow: '0 0 100px 50px #8B0000',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Secondary Soft Bleed Layer */}
      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 -translate-x-1/2 -translate-y-1/2 rounded-full animate-watercolor"
        style={{
          left: `${origin.x + 20}px`,
          top: `${origin.y - 20}px`,
          backgroundColor: '#A82020',
          opacity: 0.8,
          filter: 'url(#watercolor-filter)',
          animationDelay: '0.1s'
        }}
      />

      {/* Center Label while blooming */}
      {phase === 'blooming' || phase === 'covering' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 animate-fadeIn pointer-events-auto">
          <div className="text-4xl sm:text-5xl mb-3 animate-bounce">
            {directionIcon || '🎓'}
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold text-[#EFE0CD]/80 mb-1">
            Открываем университеты
          </p>
          <h3 className="text-xl sm:text-3xl font-black text-[#EFE0CD] max-w-md px-4">
            {directionTitle}
          </h3>
        </div>
      ) : null}
    </div>
  );
}

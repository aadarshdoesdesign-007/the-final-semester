import React, { useState, useEffect, useRef } from 'react';

interface CreditEntry {
  role: string;
  name: string;
}

const CREDITS_DATA: CreditEntry[] = [
  { role: 'DIRECTED BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'WRITTEN & REWRITTEN BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'DESIGNED BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'RESEARCHED BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'SHOT, EDITED & COMPLICATED BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'PRODUCED BY', name: 'Aadarsh Ramakrishnan' },
  { role: 'CASTING DIRECTOR', name: 'Also Aadarsh Ramakrishnan' },
  { role: 'SPECIAL THANKS', name: 'Everyone who survived the process.' }
];

export const EndCreditsSection: React.FC = () => {
  const [isSkipped, setIsSkipped] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Check system prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleSkip = () => {
    setIsSkipped(true);
    setHasCompleted(true);
  };

  const handleReplay = () => {
    setIsSkipped(false);
    setHasCompleted(false);
    setIsPaused(false);
    if (trackRef.current) {
      // Force CSS reflow to re-trigger the CSS animation
      trackRef.current.style.animation = 'none';
      void trackRef.current.offsetHeight;
      trackRef.current.style.animation = '';
    }
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section 
      id="end-credits"
      className="relative h-[92vh] sm:h-screen min-h-[640px] bg-[#040302] text-[#F5F2EA] flex flex-col items-center justify-center overflow-hidden select-none"
      aria-label="Cinematic End Credits"
    >
      {/* 
        THEATRICAL TOP & BOTTOM GRADIENT MASKS
        Ensures text smoothly emerges from complete black at the bottom and fades into black at the top 
      */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-44 bg-gradient-to-b from-[#040302] via-[#040302]/95 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#040302] via-[#040302]/95 to-transparent z-20" />

      {/* Subtle top section demarcation line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-px bg-gradient-to-r from-transparent via-[#26231F] to-transparent z-30" />

      {/* 
        TOP-RIGHT FLOATING THEATRICAL CONTROLS
        Skip Credits / Pause / Replay 
      */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-30 flex items-center gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em]">
        {!isSkipped && !hasCompleted && !prefersReducedMotion && (
          <>
            <button
              onClick={togglePause}
              className="text-[#8C867A] hover:text-[#F5F2EA] transition-colors cursor-pointer px-2 py-1 hairline bg-[#0C0B0A]/80 backdrop-blur"
              title={isPaused ? 'Resume rolling credits' : 'Pause credits'}
            >
              {isPaused ? '[ RESUME ▶ ]' : '[ PAUSE ❚❚ ]'}
            </button>
            <button
              onClick={handleSkip}
              className="text-[#C5A059] hover:text-[#F5F2EA] transition-colors cursor-pointer px-3 py-1 hairline border-[#C5A059]/40 bg-[#0C0B0A]/80 backdrop-blur"
            >
              SKIP CREDITS →
            </button>
          </>
        )}

        {(isSkipped || hasCompleted) && (
          <button
            onClick={handleReplay}
            className="text-[#C5A059] hover:text-[#F5F2EA] transition-colors cursor-pointer px-3 py-1 hairline border-[#C5A059]/40 bg-[#0C0B0A]/80 backdrop-blur"
          >
            ↺ REPLAY CREDITS
          </button>
        )}
      </div>

      {/* 
        STATE A: ROLLING CREDITS VIEW (ACTIVE ANIMATION)
      */}
      {!isSkipped && !prefersReducedMotion ? (
        <div 
          onClick={handleSkip}
          className="w-full h-full flex flex-col items-center justify-center cursor-pointer relative z-10"
          title="Click to skip credits"
        >
          <div 
            ref={trackRef}
            onAnimationEnd={() => setHasCompleted(true)}
            className="w-full max-w-3xl mx-auto flex flex-col items-center text-center animate-roll-credits space-y-16 sm:space-y-20 px-6"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {/* Lead Production Card */}
            <div className="space-y-3 pb-8">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A059] block">
                A SEMESTER 07 PRODUCTION
              </span>
              <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2EA] uppercase">
                THE FINAL SEMESTER
              </h2>
            </div>

            {/* Continuous Credits Roll */}
            {CREDITS_DATA.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A059]">
                  {item.role}
                </span>
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F5F2EA] font-light tracking-wide">
                  {item.name}
                </p>
              </div>
            ))}

            {/* Trailing Theatrical Post-Credits Punchline */}
            <div className="pt-24 pb-48 flex flex-col items-center space-y-8">
              <div className="w-12 h-px bg-[#C5A059]/40" />

              <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#F5F2EA] font-light tracking-wide">
                "And somehow, still not done."
              </p>

              <div className="space-y-3 pt-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A059] block">
                  NO DESIGNERS WERE AVAILABLE FOR THIS PRODUCTION.
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8C867A] block">
                  © SEMESTER 07 — ALL NIGHTS RESERVED.
                </span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* 
          STATE B: FINAL CREDIT REVEAL CARD (POST-CREDITS / SKIPPED / ACCESSIBILITY)
        */
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-6 relative z-10 animate-in fade-in duration-700 space-y-10 sm:space-y-12">
          
          <div className="space-y-2">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A059] block">
              A SEMESTER 07 PRODUCTION
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F2EA] uppercase">
              THE FINAL SEMESTER
            </h2>
          </div>

          <div className="w-16 h-px bg-[#C5A059]/40" />

          {/* Core Post-Credit Punchline */}
          <div className="space-y-4 max-w-2xl">
            <p className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#F5F2EA] font-light leading-tight tracking-wide">
              "And somehow, still not done."
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C5A059] font-medium">
              NO DESIGNERS WERE AVAILABLE FOR THIS PRODUCTION.
            </p>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C867A]">
              © SEMESTER 07 — ALL NIGHTS RESERVED.
            </p>
          </div>

          {/* Credits Summary Badge */}
          <div className="pt-6 font-mono text-[10px] text-[#8C867A]/70 uppercase tracking-[0.2em]">
            WRITTEN, DIRECTED, DESIGNED &amp; COMPLICATED BY AADARSH RAMAKRISHNAN
          </div>

        </div>
      )}

      {/* Subtle bottom section line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-[#1F1D1A]/60 z-30" />
    </section>
  );
};

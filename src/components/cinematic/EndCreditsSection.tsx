import React, { useState, useEffect, useRef, useCallback } from 'react';

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

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Animation state refs to prevent re-render thrashing
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const currentYRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isVisibleRef = useRef<boolean>(false);
  const hasCompletedRef = useRef<boolean>(false);
  const isSkippedRef = useRef<boolean>(false);

  // Sync state with refs for the RAF loop
  isPausedRef.current = isPaused;
  hasCompletedRef.current = hasCompleted;
  isSkippedRef.current = isSkipped;

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation frame loop
  const animate = useCallback((currentTime: number) => {
    if (!isVisibleRef.current || isSkippedRef.current || hasCompletedRef.current) {
      animFrameRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = currentTime;
    }

    const deltaTime = (currentTime - lastTimeRef.current) / 1000;
    lastTimeRef.current = currentTime;

    if (!isPausedRef.current && trackRef.current && sectionRef.current) {
      // Cinematic constant scrolling velocity: ~54px per second
      const speed = 54;
      currentYRef.current += speed * deltaTime;

      const trackHeight = trackRef.current.offsetHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const startOffset = sectionHeight * 0.75;
      const translateY = startOffset - currentYRef.current;

      trackRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;

      // Completion check: when the entire credit list and final punchline have comfortably passed into view
      // The final card reaches optical center when translateY reaches - (trackHeight - sectionHeight * 0.5)
      const stopThreshold = -(trackHeight - sectionHeight * 0.55);
      if (translateY <= stopThreshold) {
        setHasCompleted(true);
        hasCompletedRef.current = true;
        animFrameRef.current = null;
        return;
      }
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const startAnimation = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
    }
    lastTimeRef.current = null;
    animFrameRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    lastTimeRef.current = null;
  }, []);

  const resetToStart = useCallback(() => {
    currentYRef.current = 0;
    if (trackRef.current && sectionRef.current) {
      const sectionHeight = sectionRef.current.offsetHeight;
      const startOffset = sectionHeight * 0.75;
      trackRef.current.style.transform = `translate3d(0, ${startOffset}px, 0)`;
    }
  }, []);

  // IntersectionObserver: Auto-play when visible, pause/reset when navigating away
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isVisibleRef.current = true;
          // If we weren't already completed or skipped, start rolling automatically
          if (!hasCompletedRef.current && !isSkippedRef.current) {
            startAnimation();
          }
        } else {
          isVisibleRef.current = false;
          stopAnimation();
          // If user scrolled completely away before finishing, allow replay on next visit
          if (!hasCompletedRef.current && !isSkippedRef.current) {
            resetToStart();
          }
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [prefersReducedMotion, startAnimation, stopAnimation, resetToStart]);

  // Handle Skip
  const handleSkip = () => {
    stopAnimation();
    setIsSkipped(true);
    setHasCompleted(true);
  };

  // Handle Replay
  const handleReplay = () => {
    stopAnimation();
    setIsSkipped(false);
    setHasCompleted(false);
    setIsPaused(false);
    hasCompletedRef.current = false;
    isSkippedRef.current = false;
    isPausedRef.current = false;
    resetToStart();
    if (isVisibleRef.current) {
      startAnimation();
    }
  };

  // Handle Pause/Resume
  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      isPausedRef.current = next;
      if (!next && isVisibleRef.current) {
        lastTimeRef.current = null;
        if (animFrameRef.current === null) {
          animFrameRef.current = requestAnimationFrame(animate);
        }
      }
      return next;
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="end-credits"
      className="relative h-[94vh] sm:h-screen min-h-[640px] bg-[#040302] text-[#F5F2EA] flex flex-col items-center justify-center overflow-hidden select-none"
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
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-30 flex items-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em]">
        {!isSkipped && !hasCompleted && !prefersReducedMotion && (
          <>
            <button
              onClick={togglePause}
              className="text-[#8C867A] hover:text-[#F5F2EA] transition-colors cursor-pointer px-2.5 py-1 hairline bg-[#0C0B0A]/80 backdrop-blur"
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
        STATE A: ROLLING CREDITS VIEW (ACTIVE ANIMATION VIA GPU TRANSFORM)
      */}
      {!isSkipped && !prefersReducedMotion ? (
        <div 
          onClick={handleSkip}
          className="w-full h-full flex flex-col items-center justify-start cursor-pointer relative z-10 overflow-hidden"
          title="Click to skip credits"
        >
          <div 
            ref={trackRef}
            className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-16 sm:space-y-20 px-6 will-change-transform"
            style={{
              transform: 'translate3d(0, 75vh, 0)'
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

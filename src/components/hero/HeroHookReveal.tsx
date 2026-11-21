import React, { useEffect, useState } from 'react';

interface HeroHookRevealProps {
  heroState: 'hook' | 'revealed';
  onReveal: () => void;
}

export const HeroHookReveal: React.FC<HeroHookRevealProps> = ({
  heroState,
  onReveal,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Handle keyboard trigger
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onReveal();
    }
  };

  const isRevealed = heroState === 'revealed';

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#080706] select-none ${
        prefersReducedMotion
          ? isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          : `transition-all duration-800 ease-in-out ${
              isRevealed
                ? 'opacity-0 pointer-events-none scale-[1.02]'
                : 'opacity-100 pointer-events-auto scale-100'
            }`
      }`}
      aria-hidden={isRevealed}
    >
      {/* 
        Central Editorial Typography
        "A good presentation needs a good Hook."
      */}
      <main className="w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center">
        
        {/* Line 1: "A good presentation" */}
        <span className="font-serif font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F2EA] tracking-tight leading-tight block">
          A good presentation
        </span>

        {/* Line 2: "needs a good" */}
        <span className="font-serif italic font-light text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#D9D4C7]/80 tracking-tight mt-1 sm:mt-2 block">
          needs a good
        </span>

        {/* 
          Line 3: "Hook."
          Interactive, clearly clickable, visual focal point in antique gold
        */}
        <div className="mt-3 sm:mt-6 mb-2">
          <button
            onClick={onReveal}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded px-3 py-1 transition-transform inline-block"
            aria-label="Click Hook to reveal the presentation"
            tabIndex={isRevealed ? -1 : 0}
          >
            <span
              className={`font-serif italic font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[120px] text-[#C5A059] tracking-tight leading-none block select-none ${
                prefersReducedMotion
                  ? ''
                  : 'transition-all duration-300 ease-out group-hover:text-[#E5B869] group-hover:scale-[1.04] active:scale-[0.98]'
              }`}
              style={{
                textShadow: isHovered
                  ? '0 0 40px rgba(197, 160, 89, 0.45), 0 4px 15px rgba(0, 0, 0, 0.9)'
                  : '0 0 25px rgba(197, 160, 89, 0.2), 0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              Hook.
            </span>

            {/* Subtle antique gold underline flourish on hover */}
            <span
              className={`block h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent origin-center mt-1 sm:mt-2 ${
                prefersReducedMotion
                  ? isHovered ? 'scale-x-100' : 'scale-x-0'
                  : 'transition-transform duration-500 ease-out ' + (isHovered ? 'scale-x-100' : 'scale-x-0')
              }`}
            />
          </button>
        </div>

        {/* Subtle interaction cue beneath Hook */}
        <button
          onClick={onReveal}
          tabIndex={isRevealed ? -1 : 0}
          className="mt-8 sm:mt-12 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C867A] hover:text-[#C5A059] transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] px-2 py-1 group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            [ CLICK TO REVEAL → ]
          </span>
        </button>

      </main>

      {/* 
        Bottom Minimal Department Tagline
      */}
      <footer className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8C867A]/50">
        DEPARTMENT OF DESIGN · B.DES GRADUATION DEFENSE
      </footer>
    </div>
  );
};

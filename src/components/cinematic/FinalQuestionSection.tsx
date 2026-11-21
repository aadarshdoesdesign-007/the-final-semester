import React, { useState } from 'react';

export const FinalQuestionSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return (
    <section 
      id="graduation-reveal"
      className="relative min-h-[calc(100svh-4rem)] sm:min-h-screen bg-[#050403] text-[#F5F2EA] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-32 lg:pb-36 overflow-hidden text-center select-none"
      aria-label="The Final Question"
    >
      {/* 
        1. THE TRANSITION & ATMOSPHERIC VOID
        Deep black background with a subtle central antique-gold atmospheric beacon 
      */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          isRevealed ? 'opacity-100' : 'opacity-40'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.08) 0%, rgba(5, 4, 3, 0) 70%)'
        }}
      />

      {/* Subtle top transition line fading out on both flanks */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      {/* Main Centered Compositional Block */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center my-auto">
        
        {/* Subtle cinematic cue */}
        <div className="flex flex-col items-center space-y-3 mb-6 sm:mb-8">
          <div className="w-8 sm:w-12 h-px bg-[#C5A059]/60" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A059]/90">
            [ ONE LAST QUESTION ]
          </span>
        </div>

        {/* 
          2. THE TYPOGRAPHY & INTERACTION
          Clickable question trigger that transforms with a cinematic expansion 
        */}
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="group focus:outline-none cursor-pointer text-center space-y-2 sm:space-y-4 transition-transform duration-700 ease-out hover:scale-[1.01] max-w-full px-2"
          aria-expanded={isRevealed}
          aria-label="Click to reveal the graduation project teaser"
        >
          {/* Introductory phrase */}
          <p className="font-serif italic text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#D9D4C7]/90 font-light tracking-wide transition-colors duration-500 group-hover:text-[#F5F2EA]">
            "So... what is your"
          </p>

          {/* Focal Point: GRADUATION PROJECT? */}
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#C5A059] uppercase leading-[0.96] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] transition-all duration-700 group-hover:text-[#DFBD76] group-hover:drop-shadow-[0_0_35px_rgba(197,160,89,0.35)] whitespace-normal sm:whitespace-nowrap">
            GRADUATION PROJECT?
          </h2>

          {/* Restrained interaction hint (only shown before clicking) */}
          <div className={`pt-2 transition-opacity duration-500 ${isRevealed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-70 group-hover:opacity-100'}`}>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#8C867A] group-hover:text-[#C5A059] transition-colors">
              [ Click to inquire ]
            </span>
          </div>
        </button>

        {/* 
          INTERACTION PAYOFF: RESTRAINED REVEAL
          "Some stories are still being written." / "Coming in the final chapter."
        */}
        <div 
          className={`transition-all duration-700 ease-out overflow-hidden flex flex-col items-center ${
            isRevealed 
              ? 'opacity-100 max-h-48 mt-6 sm:mt-8 transform translate-y-0' 
              : 'opacity-0 max-h-0 pointer-events-none transform -translate-y-3'
          }`}
        >
          <div className="w-12 sm:w-16 h-px bg-[#C5A059]/40 mb-4 sm:mb-5" />
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#F5F2EA] font-light tracking-wide">
            "Some stories are still being written."
          </p>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C5A059] mt-2 sm:mt-3 font-medium">
            Coming in the final chapter.
          </p>
        </div>

        {/* 
          3. THE DRAMATIC REVEAL: POST-CREDIT LOCKUP
          Brought closer to the question, forming one unified cinematic group
        */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center space-y-3 sm:space-y-4">
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#2E2A24] to-transparent mb-1" />
          
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#8C867A]">
            [ THE FINAL CHAPTER AWAITS ]
          </span>

          <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#F5F2EA] uppercase">
            TO BE CONTINUED.
          </div>

          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium">
            SEMESTER 08 — THE FINAL PROJECT
          </div>
        </div>

      </div>

      {/* Subtle bottom transition line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-[#1F1D1A]/60" />
    </section>
  );
};

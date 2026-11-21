import React from 'react';
import { CHAPTERS_DATA } from '../../data/semesterData';

interface HeroSectionProps {
  onBeginJourney: () => void;
  onNavigateToChapter: (chapterId: string) => void;
  heroState?: 'hook' | 'revealed';
  onReplayIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBeginJourney,
  onNavigateToChapter,
  heroState = 'revealed',
  onReplayIntro
}) => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 
        HERO SECTION: Responsive Dynamic Viewport (100dvh x 100%)
        Original 4K Master Artwork — Pure, Crisp, Natural Color.
        Adaptive across normal window, maximized, F11 fullscreen, and high-res displays.
      */}
      <section
        id="hero"
        className="relative w-full h-[100dvh] min-h-[100dvh] bg-[#080706] overflow-hidden select-none"
      >
        {/* Full-Screen Pure 4K Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/renaissance_ai_last_supper_4k_print_ready.png"
            alt="The Final Semester — Renaissance AI Last Supper 4K Print Ready"
            className="w-full h-full object-cover object-center block pointer-events-none select-none"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Discreet Replay Intro Control */}
        {heroState === 'revealed' && onReplayIntro && (
          <div className="absolute top-14 sm:top-16 right-4 sm:right-8 z-20 pointer-events-auto">
            <button
              onClick={onReplayIntro}
              className="group font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#8C867A] hover:text-[#C5A059] bg-[#080706]/75 hover:bg-[#121110] backdrop-blur-md px-3 py-1.5 hairline transition-all cursor-pointer flex items-center gap-1.5 rounded-[2px]"
              title="Return to the opening Hook screen"
              aria-label="Replay intro"
            >
              <span className="text-[#C5A059] group-hover:-rotate-90 transition-transform duration-300">↺</span>
              <span>REPLAY INTRO</span>
            </button>
          </div>
        )}

        {/* 
          UPPER ARCHITECTURAL CEILING SPACE: RESPONSIVELY POSITIONED TYPOGRAPHY
          Positioned proportionally using dynamic viewport units (top: clamp(3.5rem, 7vh, 5.5rem))
          Guarantees zero overlap with the Claude halo or characters across all display resolutions.
        */}
        <div
          className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center flex flex-col items-center pointer-events-auto"
          style={{ paddingTop: 'clamp(3.5rem, 7vh, 5.5rem)' }}
        >
          
          {/* Main Title Lockup */}
          <div className="relative inline-block mb-1">
            
            {/* "The" in warm gold script (Top Left) */}
            <div className="absolute -top-3.5 sm:-top-4.5 -left-3 sm:-left-4 -rotate-12 flex flex-col items-start pointer-events-none">
              <span className="font-script text-lg sm:text-xl md:text-2xl text-[#E5B869] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                The
              </span>
              <svg
                className="w-5 sm:w-7 h-1 text-[#E5B869] -mt-0.5"
                viewBox="0 0 50 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C15 3 35 4 48 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* "FINAL" */}
            <h1 className="font-cinzel font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F2EA] tracking-[0.22em] sm:tracking-[0.26em] uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              FINAL
            </h1>

            {/* "SEMESTER" with golden flourish swash underneath */}
            <div className="relative mt-0.5">
              <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F5F2EA] tracking-tight leading-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] block">
                SEMESTER
              </span>

              {/* Hand-drawn style decorative golden swash under SEMESTER */}
              <svg
                className="w-full h-1.5 sm:h-2 text-[#E5B869]/90 mt-0.5 pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12C70 4 230 4 290 12M50 15C120 8 200 8 260 15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* "(of exploration)" in warm gold script (Bottom Right) */}
              <div className="absolute -bottom-3 sm:-bottom-3.5 -right-2 sm:-right-5 rotate-3 pointer-events-none">
                <span className="font-script text-xs sm:text-sm md:text-base text-[#E5B869] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  (of exploration)
                </span>
              </div>
            </div>

          </div>

          {/* Subtitle directly beneath title */}
          <p className="font-mono text-[7.5px] sm:text-[9px] md:text-[9.5px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#E8E2D5] max-w-md mx-auto leading-relaxed mt-1.5 sm:mt-2 mb-2 sm:mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] font-medium">
            A semester of questions, experiments, stories and real-world practice — before the final chapter.
          </p>

          {/* Primary CTA: Cream-coloured rectangular paper-style button */}
          <button
            onClick={onBeginJourney}
            className="group px-4 sm:px-5 py-1.5 sm:py-2 rounded-[3px] bg-[#F5EFE3] hover:bg-[#FFFDF7] text-[#121110] font-mono text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.85)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 border border-[#E5DEC9]"
          >
            <span className="whitespace-nowrap">EXPLORE THE JOURNEY</span>
            <span className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </button>

        </div>

      </section>

      {/* 
        PEDAGOGICAL FRAMING (Section 02: Expanded Scale & Proportions matching Reference 2)
      */}
      <section id="framing" className="py-28 sm:py-32 lg:py-36 px-6 sm:px-10 lg:px-16 bg-[#0C0B0A] hairline-t">
        <div className="max-w-[1520px] mx-auto">
          
          {/* Top Running Editorial Header */}
          <div className="flex items-baseline justify-between hairline-b pb-5 mb-14 sm:mb-18 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8C867A]">
            <span>00 / Pedagogical Framing</span>
            <span>The Concept of The Threshold</span>
            <span className="hidden md:inline">Jury Review · Semester VII</span>
          </div>

          {/* Expanded 2-Column Grid: 58-60% Left / 40-42% Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column (Approx 58%): Dominant Headline & Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
              <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.25em] text-[#C5A059] block">
                [ CURRENTLY UNDER CONSTRUCTION ]
              </span>
              
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-serif text-[#F5F2EA] leading-[1.04] font-light tracking-tight">
                Not quite the final form.
              </h2>

              <div className="pt-3 space-y-5 text-base sm:text-lg md:text-[19px] lg:text-[20px] font-sans text-[#D9D4C7] leading-[1.65] font-light">
                <p>
                  A semester of asking better questions, making questionable drafts, breaking things, fixing them and occasionally getting it right.
                </p>
                <p>
                  From research and publication to storytelling and industry practice, four different disciplines come together before the biggest brief of all — the graduation project.
                </p>
              </div>

              <div className="pt-3">
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#C5A059] font-normal">
                  Still a work in progress. That's kind of the point.
                </p>
              </div>
            </div>

            {/* Right Column (Approx 42%): Scaled Four Academic Pillars */}
            <div className="lg:col-span-5 hairline-l pl-0 lg:pl-12 xl:pl-16 space-y-8">
              <div className="flex items-baseline justify-between hairline-b pb-3 font-mono text-xs sm:text-[13px] uppercase tracking-widest text-[#8C867A]">
                <span>Corpus Index</span>
                <span>Four Academic Pillars</span>
              </div>

              <div className="space-y-2">
                {CHAPTERS_DATA.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => onNavigateToChapter(ch.id)}
                    className="w-full text-left py-4 sm:py-5 hairline-b group hover:border-[#C5A059] transition-colors cursor-pointer block"
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="font-mono text-xs sm:text-[13px] text-[#C5A059] tracking-widest font-medium">
                        PHASE {ch.number}
                      </span>
                      <span className="font-mono text-xs sm:text-[13px] text-[#8C867A] group-hover:text-[#F5F2EA] transition-colors">
                        {ch.period} ↗
                      </span>
                    </div>

                    <div className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">
                      {ch.title}
                    </div>

                    <div className="font-serif italic text-sm sm:text-base text-[#8C867A] mt-1">
                      {ch.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2 font-mono text-xs sm:text-[13px] text-[#8C867A] uppercase tracking-wider">
                [ Selected for jury defense · Department of Design ]
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

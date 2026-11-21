import React, { useState } from 'react';
import { HERO_HOTSPOTS } from '../../data/semesterData';
import type { Hotspot } from '../../types';

interface HeroArtworkFrameProps {
  onNavigateToChapter: (chapterId: string) => void;
}

export const HeroArtworkFrame: React.FC<HeroArtworkFrameProps> = ({ onNavigateToChapter }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 4K Image Container locked to native 4096:1747 ratio */}
      <div className="relative aspect-[4096/1747] max-w-full max-h-full w-full flex items-center justify-center select-none">
        <img
          src="/assets/renaissance_ai_last_supper_4k_print_ready.png"
          alt="The Final Supper — B.Des 7th Semester Jury Artwork"
          className="w-full h-full object-contain block select-none pointer-events-none"
          loading="eager"
        />

        {/* Minimal Editorial Hotspot Crosshairs */}
        {HERO_HOTSPOTS.map((spot, idx) => (
          <div
            key={spot.id}
            className="absolute z-30"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <button
              onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
              className="group relative -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 bg-[#0C0B0A]/90 text-[#F5F2EA] hairline hover:border-[#C5A059] transition-all duration-200 cursor-pointer focus:outline-none"
              aria-label={`Exhibition Footnote ${idx + 1}: ${spot.label}`}
            >
              <span className="w-1.5 h-1.5 bg-[#C5A059] group-hover:scale-125 transition-transform" />
              <span className="font-mono text-[10px] tracking-widest text-[#D9D4C7] group-hover:text-[#F5F2EA]">
                0{idx + 1}
              </span>
            </button>

            {/* Editorial Footnote Drawer / Catalog Popover */}
            {activeHotspot?.id === spot.id && (
              <div className="absolute z-40 left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 sm:w-80 bg-[#0C0B0A] text-[#F5F2EA] hairline p-4 shadow-2xl text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-baseline justify-between hairline-b pb-2 mb-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
                    [ CATALOG ANCHOR · {spot.role} ]
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }}
                    className="font-mono text-[10px] text-[#8C867A] hover:text-[#F5F2EA] cursor-pointer"
                  >
                    [ESC]
                  </button>
                </div>

                <h4 className="font-cinzel text-sm font-semibold tracking-wide text-[#F5F2EA] mb-1.5">
                  {spot.label}
                </h4>

                <p className="font-serif italic text-xs text-[#D9D4C7] leading-relaxed mb-3">
                  "{spot.quote}"
                </p>

                <div className="pt-2 hairline-t flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#8C867A] uppercase">
                    Ref: 0{idx + 1}
                  </span>
                  <button
                    onClick={() => {
                      onNavigateToChapter(spot.academicAnchor);
                      setActiveHotspot(null);
                    }}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-[#F5F2EA] transition-colors cursor-pointer"
                  >
                    Open Chapter Section →
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

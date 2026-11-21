import React from 'react';
import { SEMESTER_METADATA } from '../../data/semesterData';

interface JuryFooterProps {
  onScrollToTop: () => void;
}

export const JuryFooter: React.FC<JuryFooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-[#080706] hairline-t py-20 px-6 sm:px-12 lg:px-16 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Masthead & Return to Top */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 hairline-b pb-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
              [ Academic Colophon & Imprint ]
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EA] uppercase">
              {SEMESTER_METADATA.title}
            </h3>
            <p className="font-serif italic text-sm text-[#8C867A] mt-1">
              {SEMESTER_METADATA.subtitle}
            </p>
          </div>

          <button
            onClick={onScrollToTop}
            className="font-mono text-[11px] uppercase tracking-widest text-[#C5A059] hover:text-[#F5F2EA] transition-colors cursor-pointer py-1 hairline-b border-[#C5A059] self-start sm:self-auto"
          >
            [ Return to Top ↑ ]
          </button>
        </div>

        {/* Colophon Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[11px] text-[#8C867A]">
          <div className="space-y-1">
            <span className="text-[#F5F2EA] block uppercase font-bold text-[10px] tracking-widest">
              PROGRAMME
            </span>
            <div>{SEMESTER_METADATA.degree}</div>
            <div>{SEMESTER_METADATA.discipline}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[#F5F2EA] block uppercase font-bold text-[10px] tracking-widest">
              EVALUATION
            </span>
            <div>{SEMESTER_METADATA.semester}</div>
            <div>Year: {SEMESTER_METADATA.academicYear}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[#F5F2EA] block uppercase font-bold text-[10px] tracking-widest">
              TYPOGRAPHY
            </span>
            <div>Cormorant Garamond</div>
            <div>Cinzel & Plus Jakarta Sans</div>
          </div>

          <div className="space-y-1">
            <span className="text-[#F5F2EA] block uppercase font-bold text-[10px] tracking-widest">
              MOTTO
            </span>
            <div className="font-serif italic text-[#D9D4C7]">
              "{SEMESTER_METADATA.coreMotto}"
            </div>
          </div>
        </div>

        {/* Bottom Rights & Curatorial Citation */}
        <div className="pt-6 hairline-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] text-[#8C867A]/70 uppercase tracking-widest">
          <div>
            Centerpiece: "The Last Supper" (4K Master) · Dedicated to the 7th Semester Jury Review
          </div>
          <div>
            Designed with Swiss Typographic Grid & Experimental Editorial Art Direction
          </div>
        </div>

      </div>
    </footer>
  );
};

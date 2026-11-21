import React, { useState } from 'react';
import { TIMELINE_MILESTONES, CHAPTERS_DATA } from '../../data/semesterData';

interface SemesterTimelineProps {
  onSelectChapter: (chapterId: string) => void;
}

export const SemesterTimeline: React.FC<SemesterTimelineProps> = ({ onSelectChapter }) => {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>('mile-1');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const toggleExpand = (id: string) => {
    setExpandedMilestone(expandedMilestone === id ? null : id);
  };

  const filteredMilestones = activeFilter === 'all'
    ? TIMELINE_MILESTONES
    : TIMELINE_MILESTONES.filter((m) => m.chapterId === activeFilter);

  return (
    <section id="timeline" className="py-24 px-6 sm:px-12 lg:px-16 bg-[#080706] hairline-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Running Editorial Header */}
        <div className="flex items-baseline justify-between hairline-b pb-4 mb-16 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C867A]">
          <span>01 / Temporal Continuum</span>
          <span>Semester VII Journey</span>
          <span className="hidden md:inline">Chronological Index</span>
        </div>

        {/* Section Title Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
              [ Milestone Architecture ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-cinzel font-bold text-[#F5F2EA] tracking-tight uppercase">
              The <span className="font-serif italic font-normal text-[#C5A059]">Chronicle</span>
            </h2>
          </div>

          <p className="max-w-md font-serif italic text-sm sm:text-base text-[#D9D4C7] leading-relaxed text-left md:text-right font-light">
            "Four distinct pedagogical phases connecting rigorous inquiry, tactile print craft, sequential rhetoric, and industry practice."
          </p>
        </div>

        {/* Minimal Typographic Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono text-[10px] uppercase tracking-widest pb-6 hairline-b mb-12">
          <span className="text-[#8C867A] mr-2">Filter Phase:</span>
          
          <button
            onClick={() => setActiveFilter('all')}
            className={`transition-colors cursor-pointer py-1 ${
              activeFilter === 'all'
                ? 'text-[#C5A059] font-bold hairline-b border-[#C5A059]'
                : 'text-[#8C867A] hover:text-[#F5F2EA]'
            }`}
          >
            [ All Four Phases ]
          </button>

          {CHAPTERS_DATA.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActiveFilter(ch.id)}
              className={`transition-colors cursor-pointer py-1 ${
                activeFilter === ch.id
                  ? 'text-[#C5A059] font-bold hairline-b border-[#C5A059]'
                  : 'text-[#8C867A] hover:text-[#F5F2EA]'
              }`}
            >
              [ {ch.number} {ch.title} ]
            </button>
          ))}
        </div>

        {/* The Chronological Bands (Broadsheet Row System) */}
        <div className="space-y-0">
          {filteredMilestones.map((milestone, idx) => {
            const chapter = CHAPTERS_DATA.find((c) => c.id === milestone.chapterId)!;
            const isExpanded = expandedMilestone === milestone.id;

            return (
              <div
                key={milestone.id}
                className="hairline-b transition-colors hover:bg-white/[0.015]"
              >
                {/* Main Row Grid */}
                <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Col 1: Roman / Phase Designation (3 cols) */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                        {milestone.step}
                      </span>
                      <div className="font-serif text-4xl sm:text-5xl font-light text-[#F5F2EA] opacity-80">
                        {chapter.number}
                      </div>
                    </div>

                    <div className="mt-0 lg:mt-6 font-mono text-[10px] text-[#8C867A] uppercase tracking-widest">
                      <div>{milestone.timeframe}</div>
                      <div className="text-[#C5A059] mt-0.5">● Curated & Documented</div>
                    </div>
                  </div>

                  {/* Col 2: Title, Teaser & Key Aspects (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA]">
                        {milestone.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-[#C5A059] mt-1">
                        {milestone.descriptor}
                      </p>
                    </div>

                    <p className="font-serif italic text-sm sm:text-base text-[#D9D4C7] leading-relaxed">
                      "{milestone.teaser}"
                    </p>

                    {/* Key Aspects as Swiss Editorial Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {milestone.keyAspects.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 hairline text-[#8C867A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Actions (3 cols) */}
                  <div className="lg:col-span-3 flex lg:flex-col items-end justify-between h-full gap-4 pt-2">
                    <button
                      onClick={() => toggleExpand(milestone.id)}
                      className="font-mono text-[10px] uppercase tracking-widest text-[#8C867A] hover:text-[#F5F2EA] transition-colors cursor-pointer text-right py-1"
                    >
                      {isExpanded ? '[ − Collapse Dossier ]' : '[ + Expand Dossier ]'}
                    </button>

                    <button
                      onClick={() => onSelectChapter(milestone.chapterId)}
                      className="font-mono text-[11px] uppercase tracking-widest text-[#C5A059] hover:text-[#F5F2EA] transition-colors cursor-pointer py-1 hairline-b border-[#C5A059]"
                    >
                      <span>Open Chapter 0{idx + 1} →</span>
                    </button>
                  </div>

                </div>

                {/* Expandable Architectural Dossier Specimen Drawer */}
                {isExpanded && (
                  <div className="pb-10 pt-2 lg:pl-[25%] animate-in fade-in duration-200">
                    <div className="p-6 bg-[#0C0B0A] hairline space-y-6">
                      
                      <div className="flex items-baseline justify-between hairline-b pb-3 font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        <span>Dossier Index · Academic Requirements & Placeholders</span>
                        <span>[ {chapter.title} ]</span>
                      </div>

                      {/* Deliverables Specimen Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {chapter.deliverablesPlaceholder.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-4 bg-[#121110] hairline space-y-2 text-left"
                          >
                            <span className="font-mono text-[9px] text-[#C5A059] uppercase block">
                              DELIVERABLE 0{dIdx + 1}
                            </span>
                            <div className="font-serif font-bold text-sm text-[#F5F2EA]">
                              {del.label}
                            </div>
                            <div className="font-mono text-[10px] text-[#8C867A] leading-relaxed">
                              {del.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Editorial Jury Guidance */}
                      <div className="pt-3 hairline-t font-serif italic text-xs text-[#D9D4C7]">
                        <span className="font-mono not-italic uppercase text-[9px] tracking-widest text-[#C5A059] mr-2">
                          [ CANDIDATE DEFENSE NOTE ]
                        </span>
                        {chapter.editableNotesPrompt}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

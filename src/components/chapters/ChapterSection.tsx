import React, { useState } from 'react';
import type { Chapter } from '../../types';
import { SeminarHorizontalTimeline } from './SeminarHorizontalTimeline';
import { PublicationPortfolioCaseStudy } from './PublicationPortfolioCaseStudy';
import { NarrativeStorytellingSection } from './NarrativeStorytellingSection';
import { InternshipReportSection } from './InternshipReportSection';

interface ChapterSectionProps {
  chapter: Chapter;
  onBackToOverview: () => void;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({
  chapter,
  onBackToOverview
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dossier' | 'rubric'>('overview');

  return (
    <section
      id={chapter.id}
      className="py-28 px-6 sm:px-12 lg:px-16 bg-[#0C0B0A] hairline-t relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Running Editorial Header */}
        <div className="flex items-baseline justify-between hairline-b pb-4 mb-16 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C867A]">
          <span>Chapter {chapter.number} / Academic Component</span>
          <span>{chapter.period}</span>
          <button
            onClick={onBackToOverview}
            className="hover:text-[#F5F2EA] transition-colors cursor-pointer"
          >
            [ Return to Top ↑ ]
          </button>
        </div>

        {/* Chapter Masthead (Asymmetric Editorial Lockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
              [ Opus 0{chapter.number} · {chapter.milestoneTitle} ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-[#F5F2EA] tracking-tight uppercase leading-[0.95]">
              {chapter.title}
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#C5A059] mt-3 font-light">
              "{chapter.subtitle}"
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-3 font-mono text-[10px] uppercase tracking-widest text-[#8C867A] lg:pt-4">
            <div>DISCIPLINE: COMMUNICATION DESIGN</div>
            <div>STATUS: DEFENSE READY</div>
            <div className="text-[#C5A059]">RUBRIC CRITERIA: 0{chapter.academicComponents.length} UNITS</div>
          </div>
        </div>

        {/* Synopsis Paragraph */}
        <div className="max-w-3xl mb-14">
          <p className="font-serif text-lg sm:text-xl text-[#D9D4C7] leading-relaxed font-light">
            {chapter.synopsis}
          </p>
        </div>

        {/* Editorial Sub-Navigation Tabs */}
        <div className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-widest hairline-b pb-4 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`transition-colors cursor-pointer py-1 ${
              activeTab === 'overview'
                ? 'text-[#C5A059] font-bold hairline-b border-[#C5A059]'
                : 'text-[#8C867A] hover:text-[#F5F2EA]'
            }`}
          >
            {chapter.id === 'seminar' 
              ? '[ 01 / Research Journey Timeline ]' 
              : chapter.id === 'publication'
              ? '[ 01 / A Digital Self-Portrait Case Study ]'
              : chapter.id === 'narrative'
              ? '[ 01 / Dual Narrative Studies: PERCEPT & KATHAPUTLI ]'
              : chapter.id === 'internship'
              ? '[ 01 / Dual Professional Immersion: IIT INDORE & NEWSPACE ]'
              : '[ 01 / Bespoke Spread ]'}
          </button>

          <button
            onClick={() => setActiveTab('dossier')}
            className={`transition-colors cursor-pointer py-1 ${
              activeTab === 'dossier'
                ? 'text-[#C5A059] font-bold hairline-b border-[#C5A059]'
                : 'text-[#8C867A] hover:text-[#F5F2EA]'
            }`}
          >
            [ 02 / Artifact Slots ({chapter.deliverablesPlaceholder.length}) ]
          </button>

          <button
            onClick={() => setActiveTab('rubric')}
            className={`transition-colors cursor-pointer py-1 ${
              activeTab === 'rubric'
                ? 'text-[#C5A059] font-bold hairline-b border-[#C5A059]'
                : 'text-[#8C867A] hover:text-[#F5F2EA]'
            }`}
          >
            [ 03 / Evaluation Rubric ({chapter.academicComponents.length}) ]
          </button>
        </div>

        {/* 
          TAB 1: BESPOKE EDITORIAL LAYOUT BY MEDIUM
        */}
        {activeTab === 'overview' && (
          <div>
            {/* CHAPTER 01: SEMINAR — HORIZONTAL RESEARCH TIMELINE */}
            {chapter.id === 'seminar' && (
              <SeminarHorizontalTimeline />
            )}

            {/* CHAPTER 02: PUBLICATION DESIGN — A DIGITAL SELF-PORTRAIT */}
            {chapter.id === 'publication' && (
              <PublicationPortfolioCaseStudy />
            )}

            {/* CHAPTER 03: NARRATIVE & SEQUENTIAL STORYTELLING — DUAL INTERACTIVE CASE STUDIES */}
            {chapter.id === 'narrative' && (
              <NarrativeStorytellingSection />
            )}

            {/* CHAPTER 04: INTERNSHIP REPORT — DUAL PROFESSIONAL IMMERSION */}
            {chapter.id === 'internship' && (
              <InternshipReportSection />
            )}
          </div>
        )}

        {/* 
          TAB 2: ARTIFACT SLOTS (USER PLACEHOLDERS)
        */}
        {activeTab === 'dossier' && (
          <div className="space-y-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C867A] mb-4">
              [ Candidate Deliverable Slots — Prepared for User Artifact Replacement ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chapter.deliverablesPlaceholder.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#121110] hairline space-y-4 text-left"
                >
                  <div className="flex justify-between items-baseline hairline-b pb-2">
                    <span className="font-mono text-[9px] text-[#C5A059] uppercase">
                      ARTIFACT 0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] text-[#8C867A] uppercase">
                      READY
                    </span>
                  </div>

                  <div className="font-cinzel text-base font-bold text-[#F5F2EA]">
                    {item.label}
                  </div>

                  <p className="font-mono text-[11px] text-[#8C867A] bg-[#080706] p-3 hairline">
                    {item.description}
                  </p>

                  <div className="pt-2 font-mono text-[9px] uppercase tracking-wider text-[#C5A059]">
                    [ Replace in semesterData.ts ]
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 
          TAB 3: EVALUATION RUBRIC CRITERIA
        */}
        {activeTab === 'rubric' && (
          <div className="space-y-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C867A] mb-4">
              [ Academic Assessment Rubric Units ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapter.academicComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#121110] hairline space-y-2 text-left"
                >
                  <div className="flex justify-between items-baseline font-mono text-[9px] text-[#C5A059] uppercase">
                    <span>CRITERION 0{idx + 1}</span>
                    <span>WEIGHT: 15%</span>
                  </div>
                  <div className="font-serif font-bold text-base text-[#F5F2EA]">
                    {comp}
                  </div>
                  <p className="font-mono text-[10px] text-[#8C867A]">
                    Academic rigor, originality, methodological coherence and formal execution.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Candidacy Note Footer */}
        <div className="mt-16 pt-6 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-[#8C867A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C5A059]" />
            <span className="uppercase text-[#F5F2EA]">{chapter.title} · Defense Corpus</span>
          </div>

          <button
            onClick={onBackToOverview}
            className="text-[#C5A059] hover:text-[#F5F2EA] uppercase tracking-widest transition-colors cursor-pointer"
          >
            [ Return to Top ↑ ]
          </button>
        </div>

      </div>
    </section>
  );
};

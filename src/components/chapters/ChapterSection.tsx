import React from 'react';
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
            <div className="text-[#C5A059]">PORTFOLIO CORPUS: 2024–2025</div>
          </div>
        </div>

        {/* Synopsis Paragraph */}
        <div className="max-w-3xl mb-14">
          <p className="font-serif text-lg sm:text-xl text-[#D9D4C7] leading-relaxed font-light">
            {chapter.synopsis}
          </p>
        </div>

        {/* Editorial Section Label & Archive Marker */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest hairline-b pb-4 mb-12 text-[#C5A059]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C5A059] inline-block" />
            <span>
              {chapter.id === 'seminar' 
                ? 'Research Journey Timeline & Publications' 
                : chapter.id === 'publication'
                ? 'A Digital Self-Portrait · Complete Case Study'
                : chapter.id === 'narrative'
                ? 'Narrative Continuum · PERCEPT, KATHAPUTLI & THE SHAPE OF WORDS'
                : chapter.id === 'internship'
                ? 'Dual Professional Immersion · IIT INDORE & NEWSPACE TECHNOLOGIES'
                : 'Project Corpus & Visual Storytelling'}
            </span>
          </div>
          <span className="text-[#8C867A] text-[10px] hidden sm:inline-block">
            DEFENSE ARCHIVE · 0{chapter.number}
          </span>
        </div>

        {/* 
          BESPOKE EDITORIAL LAYOUT BY MEDIUM (100% WIDTH, FULL FOCUS ON WORK)
        */}
        <div className="w-full">
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

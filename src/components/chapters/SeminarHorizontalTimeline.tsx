import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  X, 
  Eye, 
  BookOpen 
} from 'lucide-react';

interface ResearchStage {
  number: string;
  caCode: string;
  id: string;
  title: string;
  subtitle: string;
  timeframe: string;
  tagline: string;
  authorMeta: string;
  mentorMeta?: string;
  keyActions: string[];
  editorialSummary: string;
  coreQuestionOrFocus: string;
  deliverableLabel: string;
  pdfFileName: string;
  pdfPath: string;
  pageCount: string;
  fileSize: string;
  statusBadge: string;
  academicCriteria: string;
  curatorialNotice?: string;
}

const RESEARCH_STAGES: ResearchStage[] = [
  {
    number: "01",
    caCode: "CA 1",
    id: "ca1-proposal",
    title: "BEYOND THE RACE TO ZERO",
    subtitle: "Investigating Strategic Volitional Friction to Mitigate the Financial Recall Gap in UPI Transactions",
    timeframe: "Weeks 01 — 02",
    tagline: "Problem Identification & Inquiry Framing",
    authorMeta: "Aadarsh R · Jain University · Communication Design",
    keyActions: [
      "Identified how the frictionless nature of India's UPI ecosystem creates a cognitive disconnect by diminishing the perceptual visibility of spending.",
      "Formulated the core concept of the 'Financial Recall Gap' — the delta between recorded transactions and conscious user recall.",
      "Framed primary research questions surrounding transaction velocity, payment salience, and behavioral awareness.",
      "Established initial methodology parameters balancing interface efficiency against reflective cognitive friction."
    ],
    editorialSummary: "Framing the inquiry around payment salience, cognitive friction, and dual-process decision making in cashless transaction flows. Validated research viability and defense scope before extensive literature synthesis.",
    coreQuestionOrFocus: "Primary Inquiry: How does extreme transaction velocity in mobile UPI interfaces decouple economic sacrifice from perceptual expenditure recall?",
    deliverableLabel: "Research Proposal Monograph",
    pdfFileName: "Financial_Recall_Gap_UPI_Research_Proposal_11.pdf",
    pdfPath: "/documents/seminar/Financial_Recall_Gap_UPI_Research_Proposal_11.pdf",
    pageCount: "5 Pages",
    fileSize: "187 KB",
    statusBadge: "DEFENDED · VERIFIED PDF",
    academicCriteria: "Criterion: Clarity of Problem Statement, Domain Framing & Methodological Viability"
  },
  {
    number: "02",
    caCode: "CA 2",
    id: "ca2-literature-review",
    title: "LITERATURE REVIEW & RELATED WORK",
    subtitle: "Beyond the Race to Zero: Mitigating the Financial Recall Gap in UPI Ecosystems via Strategic Volitional Friction",
    timeframe: "Weeks 03 — 04",
    tagline: "Theoretical Gaps & Behavioral Economics Synthesis",
    authorMeta: "Aadarsh R · Jain University · Department of Design",
    keyActions: [
      "Synthesized secondary literature on payment transparency and the 'pain of paying' (Prelec & Loewenstein; Raghubir & Srivastava).",
      "Applied Kahneman's dual-process cognitive framework (System 1 fast heuristic vs. System 2 deliberate reflection) to instant mobile checkouts.",
      "Contrasted industry-driven 'race to zero friction' with cognitive requirements for conscious expenditure tracking.",
      "Mapped an analytical taxonomy of financial interfaces identifying critical empirical voids in UPI micro-transactions."
    ],
    editorialSummary: "Investigating the theoretical cross-section of behavioral economics, interface friction, and financial self-regulation. Synthesizing secondary academic sources to establish the theoretical void addressed by this inquiry.",
    coreQuestionOrFocus: "Theoretical Void: What behavioral mechanisms in instant cashless systems lead to spend salience decay, and can friction be wielded positively?",
    deliverableLabel: "Literature Review & Related Work Synthesis",
    pdfFileName: "CA2_Literature_Review_Fintech_UPI.pdf",
    pdfPath: "/documents/seminar/CA2_Literature_Review_Fintech_UPI.pdf",
    pageCount: "7 Pages",
    fileSize: "257 KB",
    statusBadge: "ACADEMIC REVIEW · VERIFIED PDF",
    academicCriteria: "Criterion: Depth of Secondary Source Synthesis, Theoretical Rigor & Academic Citations"
  },
  {
    number: "03",
    caCode: "CA 3",
    id: "ca3-feedback-iteration",
    title: "PAPER DEVELOPMENT & REVISION RECORD",
    subtitle: "Iterative Archaeology: A Constraint-Based Framework for Evidence-Locked AI Reconstruction",
    timeframe: "Week 05",
    tagline: "Academic Critique, Revision Protocol & File Notice",
    authorMeta: "Aadarsh R · Jain University · ICoRD Submission Track",
    keyActions: [
      "Synthesized critical reviewer critique across multiple evaluation cycles into a structured development record.",
      "Systematically mapped section-by-section diffs between initial 10-page draft and revised 8-page full-paper submission.",
      "Refined methodology constraints, inter-rater evaluation protocols, and multi-site validation plans based on faculty panel critique.",
      "Documented empirical claims vs. theoretical deductions to prevent unsubstantiated generalizations."
    ],
    editorialSummary: "Documenting the rigorous revision methodology: responding to reviewer critique, tracking structural diffs between drafts, and establishing verification constraints for peer defense.",
    coreQuestionOrFocus: "Pedagogical Focus: Systematic defense and revision logging across academic drafts following jury and peer review critique.",
    deliverableLabel: "Paper Development & Revision Record",
    pdfFileName: "CA_3_Seminar_Aadarsh.pdf",
    pdfPath: "/documents/seminar/CA_3_Seminar_Aadarsh.pdf",
    pageCount: "29 Pages",
    fileSize: "456 KB",
    statusBadge: "SUBMISSION RECORD · NOTICE APPLIED",
    academicCriteria: "Criterion: Responsiveness to Academic Critique, Structural Refinement & Verifiable Revision",
    curatorialNotice: "NOTICE ON SUBMITTED ARCHIVE: The uploaded CA3 file in the student's submission repository is the 29-page 'Iterative Archaeology' revision record (ICoRD track) rather than the fintech review draft. Documented here with complete transparency for academic evaluation while awaiting the separate fintech review log."
  },
  {
    number: "04",
    caCode: "CA 4",
    id: "ca4-final-paper",
    title: "FINAL RESEARCH MONOGRAPH",
    subtitle: "Beyond the Race to Zero: Mitigating the Financial Recall Gap in UPI Ecosystems via Strategic Volitional Friction",
    timeframe: "Week 06 / Final Term",
    tagline: "Consolidated Academic Contribution & Defense Paper",
    authorMeta: "Aadarsh R¹ and Aditya M¹ · ¹ B.Des., Jain University School of Design, Media & Creative Arts",
    mentorMeta: "Mentor: Parichitha Mohapatra",
    keyActions: [
      "Formulated 3 guiding research questions linking payment salience, transaction velocity, and perceived financial autonomy.",
      "Synthesized empirical qualitative and quantitative inquiry into concrete communication design frameworks for fintech interfaces.",
      "Proposed actionable design principles for 'strategic volitional friction' that enhance spending recall without materially degrading usability.",
      "Completed publication-grade 8-page academic monograph for formal jury defense and departmental graduation qualification."
    ],
    editorialSummary: "The completed seminar research paper. An 8-page academic monograph examining how context-sensitive, low-intensity interface friction in UPI can mitigate the financial recall gap without degrading transaction efficiency.",
    coreQuestionOrFocus: "Core Conclusion: Volitional micro-friction acts as an attention scaffolding mechanism, re-establishing user financial awareness in instant cashless ecosystems.",
    deliverableLabel: "Final Submitted Research Paper Monograph",
    pdfFileName: "UPI_Financial_Recall_Gap_Research_Paper_seminar.pdf",
    pdfPath: "/documents/seminar/UPI_Financial_Recall_Gap_Research_Paper_seminar.pdf",
    pageCount: "8 Pages",
    fileSize: "268 KB",
    statusBadge: "COMPLETED MONOGRAPH · VERIFIED PDF",
    academicCriteria: "Criterion: Intellectual Originality, Methodological Rigor, Empirical Defense & Academic Contribution"
  }
];

export const SeminarHorizontalTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [modalPdf, setModalPdf] = useState<{ title: string; path: string } | null>(null);

  const current = RESEARCH_STAGES[activeStage];

  return (
    <div className="space-y-12">
      
      {/* 
        DESKTOP HORIZONTAL RESEARCH TIMELINE 
      */}
      <div className="hidden lg:block relative pt-4 pb-8">
        
        {/* Subtle Horizontal Continuous Track Line */}
        <div className="absolute top-9 left-0 right-0 h-[1px] bg-[#23211E]" />

        {/* Dynamic Gold Progress Line indicator */}
        <div
          className="absolute top-9 left-0 h-[1px] bg-[#C5A059] transition-all duration-300"
          style={{ width: `${(activeStage / (RESEARCH_STAGES.length - 1)) * 100}%` }}
        />

        {/* 4 Milestones Distributed Evenly */}
        <div className="relative grid grid-cols-4 gap-6">
          {RESEARCH_STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            const isPassed = activeStage >= idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className="group text-left cursor-pointer focus:outline-none"
              >
                {/* Milestone Node */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-4 h-4 rounded-full border transition-all duration-200 flex items-center justify-center bg-[#0C0B0A] ${
                      isActive
                        ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30 scale-110'
                        : isPassed
                        ? 'border-[#C5A059]/80'
                        : 'border-[#33302B] group-hover:border-[#8C867A]'
                    }`}
                  >
                    {isPassed && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    )}
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'text-[#C5A059] font-bold'
                        : 'text-[#8C867A] group-hover:text-[#F5F2EA]'
                    }`}
                  >
                    {stage.caCode} · STAGE {stage.number}
                  </span>
                </div>

                {/* Milestone Header Info */}
                <div className="space-y-1 pr-2">
                  <h4
                    className={`font-cinzel text-sm sm:text-base font-bold transition-colors leading-snug line-clamp-1 ${
                      isActive ? 'text-[#F5F2EA]' : 'text-[#D9D4C7]/70 group-hover:text-[#F5F2EA]'
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p className="font-mono text-[10px] text-[#8C867A] line-clamp-1">
                    {stage.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 
        MOBILE & TABLET HORIZONTAL STEP SWITCHER 
      */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
        {RESEARCH_STAGES.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`px-3 py-2 shrink-0 font-mono text-[11px] uppercase tracking-wider hairline cursor-pointer transition-colors ${
                isActive
                  ? 'border-[#C5A059] text-[#F5F2EA] bg-[#121110]'
                  : 'text-[#8C867A] hover:text-[#F5F2EA]'
              }`}
            >
              <span>{stage.caCode} · {stage.number}</span>
            </button>
          );
        })}
      </div>

      {/* 
        EXPANDED EDITORIAL DOSSIER SHOWCASE FOR ACTIVE STAGE
      */}
      <div className="hairline p-6 sm:p-10 bg-[#121110] relative">
        
        {/* Top Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hairline-b pb-4 mb-8 font-mono text-xs text-[#8C867A]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase">
              [ {current.caCode} · STAGE {current.number} · {current.timeframe} ]
            </span>
            <span className="hidden sm:inline">/</span>
            <span className="uppercase text-[#F5F2EA]">{current.tagline}</span>
          </div>

          <div className="text-[10px] uppercase tracking-wider text-[#C5A059] shrink-0">
            {current.academicCriteria}
          </div>
        </div>

        {/* Two-Column Broadsheet Stage Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Synthesis & Key Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title Lockup */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                [ Academic Inquiry & Thesis Direction ]
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA] leading-tight">
                {current.title}
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#C5A059]/90 leading-snug">
                {current.subtitle}
              </p>
            </div>

            {/* Authorship & Mentorship Meta */}
            <div className="p-3 bg-[#080706] hairline font-mono text-[10px] text-[#8C867A] flex flex-wrap gap-y-1 justify-between">
              <div>
                <span className="text-[#C5A059]">AUTHOR: </span>
                <span>{current.authorMeta}</span>
              </div>
              {current.mentorMeta && (
                <div>
                  <span className="text-[#C5A059]">MENTOR: </span>
                  <span>{current.mentorMeta}</span>
                </div>
              )}
            </div>

            {/* Editorial Summary */}
            <div className="p-4 bg-[#0C0B0A] hairline border-l-2 border-l-[#C5A059] space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A059] block">
                [ Contextual Framing ]
              </span>
              <p className="font-serif italic text-base text-[#D9D4C7] leading-relaxed font-light">
                "{current.editorialSummary}"
              </p>
              <div className="font-mono text-[11px] text-[#8C867A] pt-1">
                {current.coreQuestionOrFocus}
              </div>
            </div>

            {/* Core Research Milestones Checklist */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block">
                [ Key Methodological Developments ]
              </span>

              <div className="space-y-2.5">
                {current.keyActions.map((action, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 p-3.5 bg-[#0C0B0A] hairline text-left group hover:border-[#8C867A]/50 transition-colors"
                  >
                    <span className="font-mono text-[10px] text-[#C5A059] shrink-0 mt-0.5">
                      0{aIdx + 1}.
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-[#D9D4C7] leading-relaxed">
                      {action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Research Documentation Slot (5 cols) */}
          <div className="lg:col-span-5 hairline-l pl-0 lg:pl-8 space-y-6">
            
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C867A] block">
                [ Stage Documentation Artifact ]
              </span>
              <span className="font-mono text-[9px] text-[#C5A059] uppercase tracking-wider font-bold">
                {current.statusBadge}
              </span>
            </div>

            {/* Document Artifact Card */}
            <div className="p-6 bg-[#0C0B0A] hairline space-y-5 text-left relative overflow-hidden">
              
              <div className="flex justify-between items-baseline hairline-b pb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="font-mono text-[9px] text-[#C5A059] uppercase font-bold tracking-widest">
                    PRIMARY DELIVERABLE
                  </span>
                </div>
                <span className="font-mono text-[9px] text-[#8C867A] uppercase">
                  PDF / ACADEMIC RECORD
                </span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#F5F2EA] leading-snug">
                  {current.deliverableLabel}
                </h4>
                <p className="font-mono text-[11px] text-[#8C867A] mt-1 break-all">
                  {current.pdfFileName}
                </p>
              </div>

              {/* Document Specifications Strip */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-[#121110] hairline font-mono text-[10px]">
                <div>
                  <span className="text-[#8C867A] block text-[9px] uppercase">EXTENT</span>
                  <span className="text-[#F5F2EA] font-bold">{current.pageCount}</span>
                </div>
                <div>
                  <span className="text-[#8C867A] block text-[9px] uppercase">FILE SIZE</span>
                  <span className="text-[#F5F2EA] font-bold">{current.fileSize}</span>
                </div>
              </div>

              {/* Document Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setModalPdf({ title: current.deliverableLabel, path: current.pdfPath })}
                  className="w-full py-2.5 px-4 bg-[#F5F2EA] text-[#0C0B0A] hover:bg-[#C5A059] transition-colors font-mono text-[11px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Document in Reader</span>
                </button>

                <a
                  href={current.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={current.pdfFileName}
                  className="w-full py-2.5 px-4 hairline bg-[#121110] hover:bg-[#1A1816] text-[#D9D4C7] hover:text-[#F5F2EA] transition-colors font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Download Original PDF</span>
                  <ExternalLink className="w-3 h-3 text-[#8C867A]" />
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-[9px] text-[#8C867A] uppercase tracking-wider hairline-t">
                <div className="flex items-center gap-1.5 text-[#C5A059]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>JURY DEFENSE ASSET</span>
                </div>
                <span>ACADEMIC ARCHIVE</span>
              </div>
            </div>

            {/* Transparent Curatorial Notice (If Applicable, e.g. for Stage 03) */}
            {current.curatorialNotice && (
              <div className="p-4 bg-[#1A160F] hairline border-l-2 border-l-[#C5A059] text-left space-y-2">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-[10px] uppercase tracking-wider font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Academic Transparency Notice</span>
                </div>
                <p className="font-mono text-[10px] text-[#D9D4C7] leading-relaxed">
                  {current.curatorialNotice}
                </p>
              </div>
            )}

            {/* Pedagogical Evolution Monograph Note */}
            <div className="p-4 bg-[#080706] hairline font-mono text-[10px] text-[#8C867A] space-y-1.5 text-left">
              <div className="flex items-center gap-2 text-[#C5A059] uppercase font-bold text-[9px] tracking-wider">
                <BookOpen className="w-3 h-3" />
                <span>[ PEDAGOGICAL EVOLUTION ]</span>
              </div>
              <p className="leading-relaxed">
                Fintech research paper developed systematically across semester weeks 01 through 06 under Department of Design faculty guidance. All source documents preserved in project repository.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Pagination / Stage Stepper Controls */}
        <div className="mt-10 pt-6 hairline-t flex items-center justify-between font-mono text-xs uppercase tracking-widest">
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${
              activeStage === 0
                ? 'opacity-30 cursor-not-allowed text-[#8C867A]'
                : 'text-[#8C867A] hover:text-[#F5F2EA]'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Stage</span>
          </button>

          <div className="flex items-center gap-2">
            {RESEARCH_STAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveStage(dotIdx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeStage === dotIdx
                    ? 'bg-[#C5A059] w-5'
                    : 'bg-[#33302B] hover:bg-[#8C867A]'
                }`}
                title={`Go to Stage 0${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStage(Math.min(RESEARCH_STAGES.length - 1, activeStage + 1))}
            disabled={activeStage === RESEARCH_STAGES.length - 1}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${
              activeStage === RESEARCH_STAGES.length - 1
                ? 'opacity-30 cursor-not-allowed text-[#8C867A]'
                : 'text-[#C5A059] hover:text-[#F5F2EA]'
            }`}
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 
        IN-APP DOCUMENT VIEWER MODAL
      */}
      {modalPdf && (
        <div 
          className="fixed inset-0 z-50 bg-[#0C0B0A]/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between pb-4 hairline-b text-[#F5F2EA] font-mono text-xs">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              <span className="font-bold text-[#F5F2EA] truncate max-w-md sm:max-w-xl">
                {modalPdf.title}
              </span>
              <span className="text-[#8C867A] hidden sm:inline">|</span>
              <a
                href={modalPdf.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:text-[#F5F2EA] hidden sm:flex items-center gap-1 transition-colors"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <button
              onClick={() => setModalPdf(null)}
              className="p-1.5 hairline hover:border-[#C5A059] text-[#8C867A] hover:text-[#F5F2EA] transition-colors cursor-pointer"
              title="Close Viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body / Embedded PDF View */}
          <div className="flex-1 w-full bg-[#1A1816] hairline mt-4 overflow-hidden relative">
            <iframe
              src={modalPdf.path}
              title={modalPdf.title}
              className="w-full h-full border-0"
            />
          </div>

          {/* Modal Footer Bar */}
          <div className="pt-3 flex items-center justify-between font-mono text-[10px] text-[#8C867A] uppercase tracking-wider">
            <span>SEMESTER 07 · RESEARCH MONOGRAPH PREVIEW</span>
            <button
              onClick={() => setModalPdf(null)}
              className="text-[#C5A059] hover:underline cursor-pointer"
            >
              Close Viewer [ESC]
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

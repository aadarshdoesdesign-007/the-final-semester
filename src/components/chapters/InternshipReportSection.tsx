import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Building2, 
  Layers, 
  Sparkles, 
  Cpu
} from 'lucide-react';

export type InternshipProjectKey = 'iit-indore' | 'newspace';

export const InternshipReportSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<InternshipProjectKey | null>(null);
  
  // IIT Indore Sub-Tabs
  const [iitActiveTab, setIitActiveTab] = useState<'context' | 'taxonomy' | 'exploration' | 'publication' | 'interactive'>('context');

  // Newspace Technologies Sub-Tabs
  const [irisActiveTab, setIrisActiveTab] = useState<'system' | 'architecture' | 'empty-states' | 'workflows' | 'controls'>('system');

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <div className="space-y-16 text-left">
      
      {/* 
        SECTION MANIFESTO & PREAMBLE 
      */}
      <div className="hairline p-8 sm:p-12 lg:p-14 bg-[#121110] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 font-mono text-[9px] uppercase tracking-widest text-[#C5A059] bg-[#0C0B0A] hairline-l hairline-b">
          PHASE 04 · PROFESSIONAL IMMERSION
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ OPUS 04 · TWO DUALITIES OF PRACTICE ]</span>
          </div>

          <h3 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EA] leading-[1.05] tracking-tight">
            "Design Beyond the Classroom: From Academic Synthesis to Enterprise Architecture."
          </h3>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D9D4C7] font-light leading-relaxed">
            Professional immersion traversed two fundamentally distinct methodologies: 
            pioneering research-led information design and taxonomy visualization at 
            <span className="text-[#F5F2EA] font-normal"> IIT Indore</span>, 
            and architecting complex robotics firmware workflows and enterprise SaaS interfaces at 
            <span className="text-[#F5F2EA] font-normal"> Newspace Technologies</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-[10px] text-[#8C867A] uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#C5A059]">
              <Layers className="w-3.5 h-3.5" />
              <span>02 COMPREHENSIVE INDUSTRY MONOGRAPHS</span>
            </span>
            <span>·</span>
            <span>DATA VISUALISATION</span>
            <span>·</span>
            <span>ENTERPRISE SAAS UI/UX</span>
          </div>
        </div>
      </div>

      {/* 
        DUAL SHOWCASE CARDS (EDITORIAL TWO-COLUMN GRID)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* ========================================================= */}
        {/* INTERNSHIP 01 — IIT INDORE */}
        {/* ========================================================= */}
        <div 
          onClick={() => setActiveModalProject('iit-indore')}
          className="hairline bg-[#121110] hover:border-[#C5A059]/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/10 transition-colors" />

          <div className="space-y-6 relative z-10">
            {/* Category & Badge */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-[#C5A059] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>INTERNSHIP 01 · IIT INDORE</span>
              </span>
              <span className="text-[#8C867A] hairline px-2 py-0.5 bg-[#0C0B0A]">
                INFORMATION DESIGN / DATA VIZ
              </span>
            </div>

            {/* Title & Descriptor */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors leading-tight">
                MAPPING ETHNOGRAPHY
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#C5A059] mt-1 font-light">
                Visualizing Contemporary Research Methods
              </p>
            </div>

            {/* Narrative Framing */}
            <p className="text-sm font-sans text-[#D9D4C7]/90 leading-relaxed">
              Conducted under faculty mentorship at IIT Indore. Synthesized a fragmented landscape of 
              contemporary qualitative methodologies into a structured visual taxonomy—organising 26 specialized 
              approaches into 7 domains, mapping 100+ cross-disciplinary connections, and translating the corpus 
              into an editorial publication and interactive knowledge graph.
            </p>

            {/* Visual Showcase: Master Taxonomy Spread Preview */}
            <div className="hairline bg-[#080706] relative overflow-hidden rounded-none min-h-[220px]">
              <img 
                src="/assets/internship/iit-indore/iit-booklet-spread-taxonomy.png" 
                alt="IIT Indore Ethnography Taxonomy Spread"
                className="w-full h-52 sm:h-56 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#D9D4C7]">
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#C5A059]">
                  26 METHODS · 7 DOMAINS
                </span>
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#8C867A]">
                  DR. PALLAVI RANI · 2 MONTHS
                </span>
              </div>
            </div>

            {/* Core Narrative Metrics */}
            <div className="space-y-3 font-mono text-[10px] text-[#8C867A]">
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">INSTITUTION & ROLE</span>
                <span className="text-[#F5F2EA]">IIT INDORE · DATA VISUALIZATION INTERN</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">METHODOLOGY SCOPE</span>
                <span className="text-[#F5F2EA]">LITERATURE REVIEW → TAXONOMY → PUBLICATION</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">DELIVERABLE EXTENSIONS</span>
                <span className="text-[#F5F2EA]">PRINT SPREAD & INTERACTIVE KNOWLEDGE GRAPH</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Trigger */}
          <div className="pt-8 mt-6 hairline-t flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">
            <span>OPEN IIT INDORE CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERNSHIP 02 — NEWSPACE TECHNOLOGIES */}
        {/* ========================================================= */}
        <div 
          onClick={() => setActiveModalProject('newspace')}
          className="hairline bg-[#121110] hover:border-[#C5A059]/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#9E472A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9E472A]/20 transition-colors" />

          <div className="space-y-6 relative z-10">
            {/* Category & Badge */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-[#C5A059] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>INTERNSHIP 02 · NEWSPACE TECHNOLOGIES</span>
              </span>
              <span className="text-[#8C867A] hairline px-2 py-0.5 bg-[#0C0B0A]">
                SAAS DASHBOARD / UI-UX
              </span>
            </div>

            {/* Title & Descriptor */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors leading-tight">
                IRIS PLATFORM
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#C5A059] mt-1 font-light">
                Enterprise Robotics Fleet &amp; Firmware Management
              </p>
            </div>

            {/* Narrative Framing */}
            <p className="text-sm font-sans text-[#D9D4C7]/90 leading-relaxed">
              Designed the complex front-end SaaS dashboard for IRIS—an enterprise platform controlling 
              robotics firmware over-the-air (FOTA), hardware type schemas, PKI cryptography, and multi-fleet 
              operational campaigns across mission-critical autonomous robotics deployments.
            </p>

            {/* Visual Showcase: Firmware Table & Modules */}
            <div className="hairline bg-[#080706] relative overflow-hidden rounded-none min-h-[220px]">
              <img 
                src="/assets/internship/newspace/iris-firmware-listing-table.png" 
                alt="Newspace Technologies IRIS Dashboard Interface"
                className="w-full h-52 sm:h-56 object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#D9D4C7]">
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#C5A059]">
                  11 CORE SYSTEM MODULES
                </span>
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#8C867A]">
                  FLEET 1 ALFRED TD-2 &amp; BENSON TD-3
                </span>
              </div>
            </div>

            {/* Core Narrative Metrics */}
            <div className="space-y-3 font-mono text-[10px] text-[#8C867A]">
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">ORGANISATION &amp; ROLE</span>
                <span className="text-[#F5F2EA]">NEWSPACE TECHNOLOGIES · UI/UX &amp; DASHBOARD</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">PRODUCT DOMAIN</span>
                <span className="text-[#F5F2EA]">ENTERPRISE ROBOTICS OTA &amp; FLEET MANAGEMENT</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">KEY USER FLOWS</span>
                <span className="text-[#F5F2EA]">EMPTY STATES → STEPPER CREATION → AUDIT LOGS</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Trigger */}
          <div className="pt-8 mt-6 hairline-t flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">
            <span>OPEN NEWSPACE IRIS CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COMPREHENSIVE CASE STUDY MODAL FOR CHAPTER 04 */}
      {/* ========================================================================= */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-[100] bg-[#080706]/95 backdrop-blur-xl flex flex-col overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Modal Navigation Bar */}
          <div className="sticky top-0 z-20 bg-[#0C0B0A]/90 backdrop-blur-md hairline-b px-6 sm:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                [ CHAPTER 04 DOSSIER · {activeModalProject.toUpperCase()} ]
              </span>
              <span className="hidden sm:inline-block text-[#8C867A] font-mono text-[10px]">
                / {activeModalProject === 'iit-indore' ? 'Mapping Ethnography: Research & Taxonomy' : 'IRIS: Enterprise Robotics SaaS'}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Project Switcher */}
              <div className="hidden md:flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-[#141312] hairline p-1">
                <button
                  onClick={() => setActiveModalProject('iit-indore')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeModalProject === 'iit-indore' 
                      ? 'bg-[#C5A059] text-[#0C0B0A] font-bold' 
                      : 'text-[#D9D4C7] hover:text-[#F5F2EA]'
                  }`}
                >
                  01 IIT INDORE
                </button>
                <button
                  onClick={() => setActiveModalProject('newspace')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeModalProject === 'newspace' 
                      ? 'bg-[#C5A059] text-[#0C0B0A] font-bold' 
                      : 'text-[#D9D4C7] hover:text-[#F5F2EA]'
                  }`}
                >
                  02 NEWSPACE IRIS
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-1.5 hairline bg-[#181614] hover:bg-[#C5A059] hover:text-[#0C0B0A] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
                aria-label="Close Case Study"
              >
                <span>CLOSE</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Modal Main Content Container */}
          <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 py-12 flex-grow space-y-16">
            
            {/* ========================================================= */}
            {/* CASE STUDY 01: IIT INDORE */}
            {/* ========================================================= */}
            {activeModalProject === 'iit-indore' && (
              <div className="space-y-16">
                
                {/* Monograph Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059]">
                    <Building2 className="w-4 h-4" />
                    <span>INTERNSHIP 01 · RESEARCH-LED INFORMATION DESIGN &amp; DATA VISUALIZATION</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-[#F5F2EA] tracking-tight">
                    MAPPING ETHNOGRAPHY
                  </h1>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#C5A059] font-light">
                    "Visualizing Contemporary Research Methods: A Multi-Disciplinary Taxonomy &amp; Knowledge Graph"
                  </p>
                  
                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 hairline bg-[#121110] font-mono text-xs">
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">ORGANISATION</span>
                      <span className="text-[#F5F2EA] font-bold">IIT INDORE</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">FACULTY MENTOR</span>
                      <span className="text-[#F5F2EA] font-bold">DR. PALLAVI RANI</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">ROLE</span>
                      <span className="text-[#F5F2EA] font-bold">DATA VISUALISATION INTERN</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">DURATION</span>
                      <span className="text-[#C5A059] font-bold">2 MONTHS (SUMMER TERM)</span>
                    </div>
                  </div>

                  <p className="font-serif text-lg text-[#D9D4C7] max-w-3xl leading-relaxed pt-2">
                    Ethnography has expanded far beyond its classical anthropological roots into design, healthcare, 
                    business strategy, education, and digital interfaces. This project addresses the severe fragmentation of 
                    contemporary qualitative methods—transforming a disparate academic landscape into a unified taxonomy 
                    of 26 methods across 7 domains, culminating in an editorial publication and an interactive knowledge graph.
                  </p>
                </div>

                {/* Sub-Navigation Tabs (Narrative Sequence: Research → Synthesis → Taxonomy → Visual Exploration → Publication → Interactive Platform) */}
                <div className="flex flex-wrap gap-2 hairline-b pb-4 font-mono text-xs uppercase tracking-wider">
                  {[
                    { id: 'context', label: '01 · RESEARCH & SYNTHESIS' },
                    { id: 'taxonomy', label: '02 · TAXONOMY ARCHITECTURE' },
                    { id: 'exploration', label: '03 · VISUAL EXPLORATION' },
                    { id: 'publication', label: '04 · EDITORIAL PUBLICATION' },
                    { id: 'interactive', label: '05 · INTERACTIVE PLATFORM' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setIitActiveTab(tab.id as any)}
                      className={`px-4 py-2 cursor-pointer transition-colors ${
                        iitActiveTab === tab.id
                          ? 'bg-[#F5F2EA] text-[#0C0B0A] font-bold'
                          : 'bg-[#121110] text-[#8C867A] hover:text-[#F5F2EA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* TAB 1: RESEARCH & SYNTHESIS */}
                {iitActiveTab === 'context' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          THE RESEARCH PROBLEM SPACE
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          The Fragmented Landscape of Contemporary Ethnography
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          While ethnography's migration across disciplines has yielded extraordinary methodological diversity, 
                          it has simultaneously generated profound conceptual confusion. Terms like "digital ethnography", 
                          "design ethnography", "autoethnography", and "sensory ethnography" are frequently deployed without 
                          clear contextual boundaries, shared taxonomies, or rigorous comparative frameworks.
                        </p>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          Under the mentorship of Dr. Pallavi Rani, the project began with an exhaustive literature review across 
                          anthropology, sociology, design research, healthcare, business, education, public policy, and digital research.
                        </p>
                      </div>

                      <div className="hairline p-6 bg-[#121110] space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          CORE METHODOLOGICAL VECTORS ISOLATED
                        </span>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">01 · EPISTEMOLOGICAL PURPOSE</div>
                            <div className="text-[#8C867A]">Distinguishing between theoretical critique, generative design discovery, and pragmatic intervention.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">02 · SPATIAL &amp; TEMPORAL CONTEXT</div>
                            <div className="text-[#8C867A]">Mapping single-site immersion versus multi-sited, longitudinal, and ephemeral digital spaces.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">03 · RESEARCHER EMBODIMENT</div>
                            <div className="text-[#8C867A]">Positioning from detached participant-observation to vulnerable self-reflexivity (Autoethnography).</div>
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="text-[#F5F2EA] font-bold">04 · DOWNSTREAM TRANSLATION</div>
                            <div className="text-[#8C867A]">Tracing how qualitative insights translate into academic papers, policy guidelines, or product features.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Report Scans Grid: Preface & Challenge */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT SPECIMEN · PAGE /01</span>
                          <span>THE CHALLENGE</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-challenge.png" 
                          alt="IIT Indore Report Page 01: The Challenge"
                          className="w-full object-contain hairline"
                        />
                      </div>
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT SPECIMEN · PAGE /02</span>
                          <span>LITERATURE REVIEW &amp; METHODOLOGY</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-literature-review.png" 
                          alt="IIT Indore Report Page 02: Literature Review"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: TAXONOMY ARCHITECTURE */}
                {iitActiveTab === 'taxonomy' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        TAXONOMIC STRUCTURAL LOGIC
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Organising 26 Specialized Methods Across 7 Core Domains
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Rather than settling for superficial alphabetical or strictly chronological models, the taxonomy 
                        was engineered around relational semantic vectors. 26 specialized ethnographic methods were synthesized 
                        into 7 structural research domains, mapping cross-cutting intersections across 100+ applied disciplines.
                      </p>
                    </div>

                    {/* The 7 Domains Breakdown Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                      {[
                        { num: '01', domain: 'FOUNDATIONAL ETHNOGRAPHY', methods: 'Classical, Macro, Micro, Focused Ethnography', focus: 'Immersion, thick description, long-term observation' },
                        { num: '02', domain: 'CRITICAL &amp; REFLEXIVE', methods: 'Autoethnography, Critical Ethnography, Feminist, Queer', focus: 'Power dynamics, systemic critique, researcher vulnerability' },
                        { num: '03', domain: 'DIGITAL &amp; VIRTUAL', methods: 'Netnography, Virtual Ethnography, Computational, Algorithmic', focus: 'Online communities, automated traces, platform sociology' },
                        { num: '04', domain: 'APPLIED &amp; DESIGN', methods: 'Design Ethnography, Corporate, Quick-and-Dirty, Rapid', focus: 'User unmet needs, sprint timelines, product roadmaps' },
                        { num: '05', domain: 'MULTI-SITED &amp; GLOBAL', methods: 'Multi-sited Ethnography, Global, Transnational', focus: 'Flows of capital, migration, dispersed networks' },
                        { num: '06', domain: 'SENSORY &amp; MATERIAL', methods: 'Visual Ethnography, Sensory, Object/Material, Multimodal', focus: 'Affect, tacit knowledge, non-textual cultural artifacts' },
                        { num: '07', domain: 'STRATEGIC &amp; ACTION', methods: 'Action Research, Participatory Action Ethnography', focus: 'Community empowerment, co-design, institutional reform' },
                      ].map((item, idx) => (
                        <div key={idx} className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="flex justify-between text-[#C5A059]">
                            <span className="font-bold">DOMAIN {item.num}</span>
                            <span className="text-[#8C867A]">TAXONOMY UNIT</span>
                          </div>
                          <div className="text-[#F5F2EA] font-bold text-sm">{item.domain}</div>
                          <div className="text-[#C5A059] text-[10px]">{item.methods}</div>
                          <p className="text-[#8C867A] text-[11px] font-sans pt-1 leading-normal">{item.focus}</p>
                        </div>
                      ))}
                    </div>

                    {/* Master Taxonomy Scans */}
                    <div className="space-y-4">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>MASTER TAXONOMY MATRIX &amp; RELATIONSHIP MAP</span>
                          <span>REPORT PAGES /03 &amp; /04</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-mapping-landscape.png" 
                          alt="IIT Indore Mapping the Landscape"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: VISUAL EXPLORATION */}
                {iitActiveTab === 'exploration' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        INFORMATION DESIGN EXPLORATION
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Exploring Visual Archetypes: Trees, Radials, Networks &amp; Matrices
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Because no single visual topology could capture the complex, multi-dimensional connections of qualitative 
                        research, the internship investigated five distinct information architectures: hierarchical dendrograms, 
                        radial circular trees, network graphs, relational matrices, and chronological evolution timelines.
                      </p>
                    </div>

                    {/* Five Structural Mapping Archetypes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">01 · HIERARCHICAL TREES</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Clean categorical nesting establishing clear domain parent-child groupings and subtype hierarchies.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">02 · RADIAL &amp; POLAR CHARTS</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Circular layout emphasizing common anthropological origin at center, branching outwards into applied specializations.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">03 · FORCE-DIRECTED NETWORKS</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Graph topologies illustrating cross-cutting methodological hybrids (e.g. Netnography + Design Ethnography).
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">04 · TWO-AXIS MATRICES</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Plotting methods along axes of temporal duration (Sprint vs. Longitudinal) and intervention scale.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">05 · CHRONOLOGICAL TIMELINES</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Mapping historical shifts from colonial Malinowskian field expeditions to AI-mediated digital scraping.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">06 · HYBRID SPREAD FORMAT</div>
                        <p className="text-[#8C867A] text-[11px] font-sans leading-relaxed">
                          Synthesized into an ultra-dense master poster integrating hierarchical taxonomy with relational cross-links.
                        </p>
                      </div>
                    </div>

                    {/* Report Scans: Visual Exploration & Master Taxonomy Poster */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>VISUAL EXPLORATION REPORT SPREAD</span>
                          <span>PAGE /05</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-visual-exploration.png" 
                          alt="IIT Indore Visual Exploration"
                          className="w-full object-contain hairline"
                        />
                      </div>
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>MASTER TAXONOMY POSTER (1838 × 1753 PT)</span>
                          <span>IIT INDORE ARCHIVE</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-master-taxonomy-poster.png" 
                          alt="IIT Indore Master Taxonomy Poster"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: EDITORIAL PUBLICATION */}
                {iitActiveTab === 'publication' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        PHYSICAL ARTIFACT &amp; PRINT SPECIMEN
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The Printed Editorial Publication
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        To contextualize the taxonomy within academic discourse, the research was translated into a 
                        bound editorial monograph. High-contrast typography, rigorous grid margins, and tactile paper 
                        specifications establish an academic yet visually compelling reading experience.
                      </p>
                    </div>

                    {/* Booklet Spreads Gallery */}
                    <div className="space-y-6">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>BOOKLET SPREAD 01: METHODOLOGICAL FOUNDATIONS &amp; DOMAIN MATRIX</span>
                          <span>PRINT ARTIFACT</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-booklet-spread-methods.png" 
                          alt="IIT Indore Booklet Methods Spread"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="hairline p-4 bg-[#080706] space-y-3">
                          <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                            <span>BOOKLET SPREAD 02: LITERATURE REVIEW</span>
                            <span>MACRO SPREAD</span>
                          </div>
                          <img 
                            src="/assets/internship/iit-indore/iit-booklet-spread-litreview.png" 
                            alt="IIT Indore Booklet Literature Review Spread"
                            className="w-full object-contain hairline"
                          />
                        </div>
                        <div className="hairline p-4 bg-[#080706] space-y-3">
                          <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                            <span>BOOKLET SPREAD 03: TAXONOMY SYNTHESIS</span>
                            <span>RESEARCH ECOSYSTEM</span>
                          </div>
                          <img 
                            src="/assets/internship/iit-indore/iit-booklet-spread-final.png" 
                            alt="IIT Indore Booklet Final Spread"
                            className="w-full object-contain hairline"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: INTERACTIVE PLATFORM */}
                {iitActiveTab === 'interactive' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        EXTENDING STATIC PRINT TO DIGITAL INTERACTION
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The Interactive Knowledge Graph &amp; Web Platform
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        While the print taxonomy provides a high-level cognitive map, its static medium limits multi-directional 
                        cross-filtering. The taxonomy was extended into a web-based learning platform and interactive knowledge graph, 
                        allowing students and researchers to click through domains, trace interdisciplinary lineages, and view 
                        contextual case studies on demand.
                      </p>
                    </div>

                    {/* Interactive Platform Scans */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT PAGE /09: FROM STATIC TO INTERACTIVE</span>
                          <span>CONCEPTUAL PROTOTYPE</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-static-to-interactive.png" 
                          alt="IIT Indore Static to Interactive"
                          className="w-full object-contain hairline"
                        />
                      </div>
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT PAGE /10: INTERACTIVE KNOWLEDGE GRAPH</span>
                          <span>EXPLORATION TOOL</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-knowledge-graph.png" 
                          alt="IIT Indore Knowledge Graph"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>

                    {/* UX & Reflection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT PAGE /11: DESIGNING THE USER EXPERIENCE</span>
                          <span>PROGRESSIVE DISCLOSURE</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-ux-design.png" 
                          alt="IIT Indore UX Design"
                          className="w-full object-contain hairline"
                        />
                      </div>
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>REPORT PAGE /12: REFLECTION &amp; OUTCOMES</span>
                          <span>ACADEMIC VALEDICTION</span>
                        </div>
                        <img 
                          src="/assets/internship/iit-indore/iit-reflection-outcomes.png" 
                          alt="IIT Indore Reflection & Outcomes"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ========================================================= */}
            {/* CASE STUDY 02: NEWSPACE TECHNOLOGIES */}
            {/* ========================================================= */}
            {activeModalProject === 'newspace' && (
              <div className="space-y-16">
                
                {/* Monograph Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059]">
                    <Cpu className="w-4 h-4" />
                    <span>INTERNSHIP 02 · ENTERPRISE PRODUCT DESIGN &amp; SAAS DASHBOARD DEVELOPMENT</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-[#F5F2EA] tracking-tight">
                    IRIS SAAS DASHBOARD
                  </h1>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#C5A059] font-light">
                    "Mission-Critical Robotics Fleet &amp; Firmware Management Platform"
                  </p>
                  
                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 hairline bg-[#121110] font-mono text-xs">
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">ORGANISATION</span>
                      <span className="text-[#F5F2EA] font-bold">NEWSPACE TECHNOLOGIES</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">PRODUCT PLATFORM</span>
                      <span className="text-[#F5F2EA] font-bold">IRIS SAAS ECOSYSTEM</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">DESIGN ROLE</span>
                      <span className="text-[#F5F2EA] font-bold">UI/UX &amp; DASHBOARD DEV</span>
                    </div>
                    <div>
                      <span className="text-[#8C867A] block text-[10px]">DEPLOYMENT DOMAIN</span>
                      <span className="text-[#C5A059] font-bold">ROBOTICS FLEET FOTA &amp; PKI</span>
                    </div>
                  </div>

                  <p className="font-serif text-lg text-[#D9D4C7] max-w-3xl leading-relaxed pt-2">
                    Autonomous robotics fleets operating in industrial environments demand zero-margin-of-error 
                    operational control. IRIS is an enterprise SaaS platform engineered to manage firmware over-the-air 
                    (FOTA), package validation, Public Key Infrastructure (PKI) cryptographic signing, hardware type schemas, 
                    and multi-robot update campaigns across distributed fleets like the Alfred TD-2 and Benson TD-3.
                  </p>
                </div>

                {/* Sub-Navigation Tabs (Narrative: Understanding the system → Information architecture → Dashboard structure → Workflow design → Interface screens) */}
                <div className="flex flex-wrap gap-2 hairline-b pb-4 font-mono text-xs uppercase tracking-wider">
                  {[
                    { id: 'system', label: '01 · SYSTEM UNDERSTANDING' },
                    { id: 'architecture', label: '02 · 11 SYSTEM MODULES' },
                    { id: 'empty-states', label: '03 · EMPTY STATES & ONBOARDING' },
                    { id: 'workflows', label: '04 · FIRMWARE WORKFLOWS' },
                    { id: 'controls', label: '05 · CONTROLS, AUDIT & ALERTS' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setIrisActiveTab(tab.id as any)}
                      className={`px-4 py-2 cursor-pointer transition-colors ${
                        irisActiveTab === tab.id
                          ? 'bg-[#F5F2EA] text-[#0C0B0A] font-bold'
                          : 'bg-[#121110] text-[#8C867A] hover:text-[#F5F2EA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* TAB 1: SYSTEM UNDERSTANDING */}
                {irisActiveTab === 'system' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          THE OPERATIONAL COMPLEXITY
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          Managing Critical Firmware-Over-The-Air (FOTA)
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          In autonomous robotics, pushing a corrupted or incompatible firmware build can permanently brick 
                          expensive hardware, halt industrial production lines, or compromise safety. Unsecured over-the-air 
                          updates are also susceptible to man-in-the-middle attacks and malicious tampering.
                        </p>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          My objective was to architect a unified, intuitive dashboard interface that allows fleet engineers 
                          and enterprise customers to manage thousands of robots, configure hardware Types, stage package releases, 
                          verify cryptographic checksums (PKI), and orchestrate phased update Campaigns with absolute certainty.
                        </p>
                      </div>

                      <div className="hairline p-6 bg-[#121110] space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          CORE DESIGN PRINCIPLES FOR IRIS
                        </span>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">01 · PREREQUISITE-GUIDED EMPTY STATES</div>
                            <div className="text-[#8C867A]">A user cannot add Firmware without first defining a Type; empty states actively guide relational prerequisites.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">02 · PROGRESSIVE VALIDATION STEPPERS</div>
                            <div className="text-[#8C867A]">Multi-step firmware submission forms with live checksum calculation, hardware compatibility checks, and inline errors.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">03 · GRANULAR AUDIT &amp; HISTORY TRAILS</div>
                            <div className="text-[#8C867A]">Every firmware release maintains an immutable timeline of changes, engineer comments, and deployment states.</div>
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="text-[#F5F2EA] font-bold">04 · HIGH-DENSITY ENTERPRISE FILTERING</div>
                            <div className="text-[#8C867A]">Full column reordering, multi-status boolean filters, and high-density responsive data tables.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Master Overview Image */}
                    <div className="hairline p-4 bg-[#080706] space-y-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                        <span>MASTER FLEET DASHBOARD &amp; FIRMWARE LISTING SCREEN</span>
                        <span>4K PRODUCTION SPECIMEN</span>
                      </div>
                      <img 
                        src="/assets/internship/newspace/iris-firmware-listing-table.png" 
                        alt="IRIS Firmware Listing Interface"
                        className="w-full object-contain hairline"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: 11 SYSTEM MODULES */}
                {irisActiveTab === 'architecture' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        INFORMATION ARCHITECTURE
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The 11 Integrated Operational Modules
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        The IRIS navigation hierarchy is structured to reflect the real-world operational lifecycle 
                        of autonomous robotics—from customer organizational boundaries down to individual micro-controllers.
                      </p>
                    </div>

                    {/* 11 Modules Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                      {[
                        { title: '01 · DASHBOARD', desc: 'Real-time telemetry, fleet health overview, pending OTA updates, and critical system anomalies.' },
                        { title: '02 · CUSTOMER MANAGEMENT', desc: 'Multi-tenant enterprise access, customer organizations, and scoped robot permissions.' },
                        { title: '03 · ROBOT MANAGEMENT', desc: 'Individual robotic units, hardware IDs, online status, telemetry logs, and active fleet assignments.' },
                        { title: '04 · FIRMWARE MANAGEMENT', desc: 'Central binary repository, versioning, release notes, changelogs, and binary verification.' },
                        { title: '05 · FIRMWARE TYPE CONFIG', desc: 'Hardware definitions (Primary Compute, Motor Controller, LiDAR sensor sub-boards).' },
                        { title: '06 · PACKAGE MANAGEMENT', desc: 'Bundled firmware packages combining multiple subsystem binaries for atomic updates.' },
                        { title: '07 · POLICY MANAGEMENT', desc: 'Automatic update rules, rollout schedules, maintenance windows, and failure rollbacks.' },
                        { title: '08 · CAMPAIGN MANAGEMENT', desc: 'Phased, canary-style deployments across targeted robot cohorts and geographically dispersed fleets.' },
                        { title: '09 · PKI (SECURITY)', desc: 'Public Key Infrastructure, cryptographic key rotation, certificate authorities, and digital signing.' },
                        { title: '10 · USER MANAGEMENT', desc: 'Role-Based Access Control (RBAC), engineer permissions, auditor views, and session management.' },
                        { title: '11 · ALERTS & NOTIFICATIONS', desc: 'System-wide toast alerts, failure alarms, deployment completion summaries, and audit pings.' },
                      ].map((mod, idx) => (
                        <div key={idx} className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="text-[#C5A059] font-bold text-xs">{mod.title}</div>
                          <p className="text-[#8C867A] text-[11px] font-sans leading-normal">{mod.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Process & Architecture Flow Diagram from PDF */}
                    <div className="hairline p-4 bg-[#080706] space-y-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                        <span>SYSTEM ARCHITECTURE &amp; WORKFLOW PROCESS</span>
                        <span>NEWSPACE TECHNOLOGIES ARCHIVE</span>
                      </div>
                      <img 
                        src="/assets/internship/newspace/process.png" 
                        alt="IRIS Workflow Process"
                        className="w-full object-contain hairline"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 3: EMPTY STATES & ONBOARDING */}
                {irisActiveTab === 'empty-states' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        ONBOARDING &amp; FIRST-RUN USER EXPERIENCE
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Dependency-Guided Empty States
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        In enterprise robotics, assets have strict relational dependencies: a firmware build cannot exist 
                        without a designated hardware Type schema. Rather than presenting generic blank slates, IRIS empty states 
                        explicitly explain the missing dependency and provide a direct one-click action to resolve it.
                      </p>
                    </div>

                    {/* Empty States Screens Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>EMPTY STATE: NO FIRMWARE ADDED YET</span>
                          <span>GUIDANCE: CREATE TYPE FIRST</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-empty-state-firmware.png" 
                          alt="IRIS Empty State No Firmware Added Yet"
                          className="w-full object-contain hairline"
                        />
                        <p className="font-mono text-[10px] text-[#8C867A] pt-1">
                          "To add Firmware, you first need to start by creating a Type, then come back here to add Firmware. [+ Add Type]"
                        </p>
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>EMPTY STATE: NO TYPES CREATED YET</span>
                          <span>ROOT PREREQUISITE</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-empty-state-types.png" 
                          alt="IRIS Empty State No Types Created Yet"
                          className="w-full object-contain hairline"
                        />
                        <p className="font-mono text-[10px] text-[#8C867A] pt-1">
                          "Firmware must be added under a Type. Create a Type to define how firmware will be deployed. [+ Create Type]"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: FIRMWARE WORKFLOWS */}
                {irisActiveTab === 'workflows' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        STEPPER INTERACTIONS &amp; FORM DESIGN
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Add Firmware Workflow &amp; Validation Stepper
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Adding a mission-critical robotics firmware binary requires multi-layered validation: hardware compatibility, 
                        semantic versioning (e.g. v2.4.1), binary file integrity checks, release changelogs, and target fleet selection.
                      </p>
                    </div>

                    {/* Add Firmware Screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>ADD FIRMWARE MODAL &amp; FORM STEPPER</span>
                          <span>ALFRED TD-2 COMPUTE CONFIG</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-add-firmware-form.png" 
                          alt="IRIS Add Firmware Form"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>FORM VALIDATION &amp; INLINE ERROR HANDLING</span>
                          <span>SUBMISSION SAFEGUARDS</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-form-validation-errors.png" 
                          alt="IRIS Form Validation Errors"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>

                    {/* Stepper Progression & Edit Drawer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>MULTI-STEP COMPILATION STEPPER</span>
                          <span>BINARY STAGING</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-firmware-add-stepper.png" 
                          alt="IRIS Firmware Add Stepper"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>EDIT FIRMWARE SLIDE-OVER DRAWER</span>
                          <span>IN-LINE MODIFICATION</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-edit-firmware-drawer.png" 
                          alt="IRIS Edit Firmware Slide-over Drawer"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: CONTROLS, AUDIT & ALERTS */}
                {irisActiveTab === 'controls' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        ENTERPRISE CONTROLS &amp; AUDIT TRAILS
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Granular Detail Views, Column Filters &amp; Toast Alerts
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Robotics fleet managers require deep observability: auditing when a firmware version was deployed, 
                        reviewing engineer comments, reordering high-density data table columns, and receiving real-time toast alerts.
                      </p>
                    </div>

                    {/* Detail Tabs: Details, History, Comments */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>TAB 01 · DETAILS</span>
                          <span>PROPERTIES</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-firmware-details-view.png" 
                          alt="IRIS Firmware Details View"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>TAB 02 · HISTORY</span>
                          <span>AUDIT TRAIL</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-firmware-history-tab.png" 
                          alt="IRIS Firmware History Tab"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>TAB 03 · COMMENTS</span>
                          <span>TEAM COLLAB</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-firmware-comments-tab.png" 
                          alt="IRIS Firmware Comments Tab"
                          className="w-full object-contain hairline"
                        />
                      </div>
                    </div>

                    {/* Modals & Toast Alerts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>COLUMN CUSTOMIZATION</span>
                          <span>1 OF 10 VISIBLE</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-column-customization-modal.png" 
                          alt="IRIS Column Customization"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>FILTER CONFIGURATION</span>
                          <span>MULTI-PARAMETER</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-filter-configuration-modal.png" 
                          alt="IRIS Filter Configuration"
                          className="w-full object-contain hairline"
                        />
                      </div>

                      <div className="hairline p-4 bg-[#080706] space-y-3">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059] flex justify-between">
                          <span>TOAST NOTIFICATIONS</span>
                          <span>SUCCESS ALERT</span>
                        </div>
                        <img 
                          src="/assets/internship/newspace/iris-toast-notifications.png" 
                          alt="IRIS Toast Notifications"
                          className="w-full object-contain hairline"
                        />
                        <p className="font-mono text-[9px] text-[#8C867A]">
                          "Firmware Saved Successfully! Firmware has been added successfully to Alfred TD-2 Compute"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Modal Bottom Close Strip */}
          <div className="sticky bottom-0 bg-[#0C0B0A]/95 backdrop-blur hairline-t p-4 px-6 sm:px-12 flex justify-between items-center font-mono text-[10px] uppercase text-[#8C867A]">
            <span>SEMESTER 07 JURY PRESENTATION · CHAPTER 04 INTERNSHIP ARCHIVE</span>
            <button
              onClick={() => setActiveModalProject(null)}
              className="text-[#F5F2EA] hover:text-[#C5A059] cursor-pointer transition-colors"
            >
              [ Return to Chapter 04 ↑ ]
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

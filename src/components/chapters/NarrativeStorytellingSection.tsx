import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Gamepad2, 
  Cpu, 
  Flame,
  Award,
  Sparkles,
  Layers
} from 'lucide-react';

export type NarrativeProjectKey = 'percept' | 'kathaputli';

export const NarrativeStorytellingSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<NarrativeProjectKey | null>(null);
  const [perceptActiveTab, setPerceptActiveTab] = useState<'concept' | 'gamification' | 'mascot' | 'interface' | 'specimens'>('concept');
  const [kathaputliActiveTab, setKathaputliActiveTab] = useState<'concept' | 'characters' | 'stagecraft' | 'computervision' | 'installation'>('concept');
  
  // Interactive Kerning mini-game state inside PERCEPT
  const [kerningOffset, setKerningOffset] = useState<number>(32);
  const [kerningSubmitted, setKerningSubmitted] = useState<boolean>(false);

  // Interactive Puppeteer string simulation inside KATHAPUTLI
  const [puppetTilt, setPuppetTilt] = useState<number>(0);
  const [puppetElevation, setPuppetElevation] = useState<number>(0);

  // Handle ESC key to close modal
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
          PHASE 03 · SEQUENTIAL CONTINUUM
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ OPUS 03 · DUAL NARRATIVE INQUIRIES ]</span>
          </div>

          <h3 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EA] leading-[1.05] tracking-tight">
            "One Frame Leads to Another: Narrative Beyond Passive Cinema."
          </h3>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D9D4C7] font-light leading-relaxed">
            In this module, narrative architecture is explored across two radical experimental vectors: 
            translating pedagogical progression into an interactive gamified quest (<span className="text-[#F5F2EA] font-normal">PERCEPT</span>), 
            and breathing digital life into the mythological shadow-theatre tradition of the subcontinent through 
            real-time computer vision (<span className="text-[#F5F2EA] font-normal">KATHAPUTLI</span>).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-[10px] text-[#8C867A] uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#C5A059]">
              <Layers className="w-3.5 h-3.5" />
              <span>02 COMPREHENSIVE CASE STUDIES</span>
            </span>
            <span>·</span>
            <span>INTERACTIVE PROTOTYPES</span>
            <span>·</span>
            <span>FULL PRODUCTION ASSETS</span>
          </div>
        </div>
      </div>

      {/* 
        DUAL SHOWCASE SPREAD (EDITORIAL TWO-COLUMN GRID)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* ========================================================= */}
        {/* NARRATIVE PROJECT 01 — PERCEPT */}
        {/* ========================================================= */}
        <div 
          onClick={() => setActiveModalProject('percept')}
          className="hairline bg-[#121110] hover:border-[#C5A059]/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/10 transition-colors" />

          <div className="space-y-6 relative z-10">
            {/* Category & Badge */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-[#C5A059] flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>NARRATIVE 01 · GAMIFIED LEARNING</span>
              </span>
              <span className="text-[#8C867A] hairline px-2 py-0.5 bg-[#0C0B0A]">
                PRODUCT UX / INTERACTION
              </span>
            </div>

            {/* Title & Descriptor */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors leading-tight">
                PERCEPT
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#C5A059] mt-1 font-light">
                Duolingo for Designers
              </p>
            </div>

            {/* Narrative Framing */}
            <p className="text-sm font-sans text-[#D9D4C7]/90 leading-relaxed">
              Transforming design pedagogy into a narrative-driven hero's journey. 
              Users embark on daily expeditions, guided by an articulate owl mentor through 
              sequential micro-challenges that calibrate optical intuition, typography, and design history.
            </p>

            {/* Visual Showcase: Mascot & Specimen Banner */}
            <div className="hairline bg-[#080706] p-6 relative overflow-hidden flex items-center justify-between gap-6 min-h-[200px]">
              <div className="space-y-2 max-w-[55%]">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059] block">
                  PEDAGOGICAL QUEST LOOP
                </span>
                <p className="text-xs text-[#8C867A] leading-relaxed font-sans">
                  Tactile micro-challenges, daily streak mechanics, and optical calibration for typography, spatial reasoning, and design theory.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1A1816] text-[#C5A059] hairline">DAILY STREAKS</span>
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1A1816] text-[#D9D4C7] hairline">KERNING LAB</span>
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1A1816] text-[#D9D4C7] hairline">ROGUE GRID</span>
                </div>
              </div>

              {/* Mascot visual */}
              <div className="w-32 h-32 flex-shrink-0 relative flex items-center justify-center">
                <img 
                  src="/assets/studio/percept/mascot_hero.png" 
                  alt="PERCEPT Owl Mascot"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Core Narrative Metrics */}
            <div className="space-y-3 font-mono text-[10px] text-[#8C867A]">
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">SEQUENTIAL STRUCTURE</span>
                <span className="text-[#F5F2EA]">DAILY EXPEDITION CADENCE</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">NARRATIVE MENTOR</span>
                <span className="text-[#F5F2EA]">THE PERCEPT OWL</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">APTITUDE LAB</span>
                <span className="text-[#F5F2EA]">4 TACTILE PRACTICE MODES</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Trigger */}
          <div className="pt-8 mt-6 hairline-t flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">
            <span>OPEN DETAILED CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* NARRATIVE PROJECT 02 — KATHAPUTLI */}
        {/* ========================================================= */}
        <div 
          onClick={() => setActiveModalProject('kathaputli')}
          className="hairline bg-[#121110] hover:border-[#C5A059]/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#9E472A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9E472A]/20 transition-colors" />

          <div className="space-y-6 relative z-10">
            {/* Category & Badge */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-[#C5A059] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>NARRATIVE 02 · DIGITAL PUPPETRY</span>
              </span>
              <span className="text-[#8C867A] hairline px-2 py-0.5 bg-[#0C0B0A]">
                INTERACTIVE MEDIA / CV
              </span>
            </div>

            {/* Title & Descriptor */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors leading-tight">
                KATHAPUTLI
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#C5A059] mt-1 font-light">
                A Puppet Show Reimagined
              </p>
            </div>

            {/* Narrative Framing */}
            <p className="text-sm font-sans text-[#D9D4C7]/90 leading-relaxed">
              Reimagining the timeless Mahabharata narrative of Krishna and Arjuna on the battlefield of Kurukshetra. 
              Ancient shadow-play traditions (<cite>Tholpavakoothu</cite> &amp; <cite>Tholu Bommalata</cite>) are re-engineered through 
              optical hand tracking where fingers act as the virtual strings of the <cite>Sutradhar</cite>.
            </p>

            {/* Visual Showcase: Shadow Puppet Stage Study */}
            <div className="hairline bg-[#080706] relative overflow-hidden rounded-none min-h-[200px]">
              <img 
                src="/assets/studio/kathaputli/kathaputli-hero-study.png" 
                alt="Kathaputli Visual Study: Krishna and Arjuna"
                className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#D9D4C7]">
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#C5A059]">
                  KURUKSHETRA HORIZON
                </span>
                <span className="bg-[#0C0B0A]/80 px-2 py-0.5 hairline text-[#8C867A]">
                  TOUCHDESIGNER + CV
                </span>
              </div>
            </div>

            {/* Core Narrative Metrics */}
            <div className="space-y-3 font-mono text-[10px] text-[#8C867A]">
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">TRADITIONAL INSPIRATION</span>
                <span className="text-[#F5F2EA]">THOLPAVAKOOTHU SHADOWS</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">MYTHIC DRAMATIS PERSONAE</span>
                <span className="text-[#F5F2EA]">KRISHNA & ARJUNA DIALOGUE</span>
              </div>
              <div className="flex justify-between hairline-b pb-2">
                <span className="text-[#D9D4C7]">INTERACTION ENGINE</span>
                <span className="text-[#F5F2EA]">FINGER-AS-STRING SENSING</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Trigger */}
          <div className="pt-8 mt-6 hairline-t flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">
            <span>OPEN DETAILED CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COMPREHENSIVE CASE STUDY MODAL FOR PHASE 03 */}
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
                [ CHAPTER 03 DOSSIER · {activeModalProject.toUpperCase()} ]
              </span>
              <span className="hidden sm:inline-block text-[#8C867A] font-mono text-[10px]">
                / {activeModalProject === 'percept' ? 'Duolingo for Designers' : 'A Puppet Show Reimagined'}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Project Switcher */}
              <div className="hidden md:flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-[#141312] hairline p-1">
                <button
                  onClick={() => setActiveModalProject('percept')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeModalProject === 'percept' 
                      ? 'bg-[#C5A059] text-[#0C0B0A] font-bold' 
                      : 'text-[#D9D4C7] hover:text-[#F5F2EA]'
                  }`}
                >
                  01 PERCEPT
                </button>
                <button
                  onClick={() => setActiveModalProject('kathaputli')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeModalProject === 'kathaputli' 
                      ? 'bg-[#C5A059] text-[#0C0B0A] font-bold' 
                      : 'text-[#D9D4C7] hover:text-[#F5F2EA]'
                  }`}
                >
                  02 KATHAPUTLI
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
            {/* CASE STUDY 01: PERCEPT */}
            {/* ========================================================= */}
            {activeModalProject === 'percept' && (
              <div className="space-y-16">
                
                {/* Monograph Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059]">
                    <Gamepad2 className="w-4 h-4" />
                    <span>NARRATIVE CASE STUDY 01 · GAMIFIED PEDAGOGICAL CONTINUUM</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-[#F5F2EA] tracking-tight">
                    PERCEPT
                  </h1>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#C5A059] font-light">
                    "Duolingo for Designers: Cultivating Optical Intuition & Theory Through Bite-Sized Play"
                  </p>
                  <p className="font-serif text-lg text-[#D9D4C7] max-w-3xl leading-relaxed pt-2">
                    Design pedagogy has historically been trapped between dense theoretical tomes and dry 
                    entrance exam question banks. PERCEPT transforms this into a narrative quest: 
                    cultivating instinctual optical kerning, alignment grids, spatial projection, and historical movements 
                    through habit-forming daily micro-challenges guided by an articulate owl mentor.
                  </p>
                </div>

                {/* Sub-Navigation Tabs */}
                <div className="flex flex-wrap gap-2 hairline-b pb-4 font-mono text-xs uppercase tracking-wider">
                  {[
                    { id: 'concept', label: '01 · NARRATIVE PREMISE' },
                    { id: 'gamification', label: '02 · GAMIFIED ENGINE' },
                    { id: 'mascot', label: '03 · MASCOT & IDENTITY' },
                    { id: 'interface', label: '04 · APTITUDE LAB & DEMO' },
                    { id: 'specimens', label: '05 · SPECIMEN ARCHIVE' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setPerceptActiveTab(tab.id as any)}
                      className={`px-4 py-2 cursor-pointer transition-colors ${
                        perceptActiveTab === tab.id
                          ? 'bg-[#F5F2EA] text-[#0C0B0A] font-bold'
                          : 'bg-[#121110] text-[#8C867A] hover:text-[#F5F2EA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* TAB 1: CONCEPT & PROBLEM SPACE */}
                {perceptActiveTab === 'concept' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          THE PEDAGOGICAL NARRATIVE ARC
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          The Rote Memorisation Dilemma
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          Aspiring designers preparing for design entrance examinations (UCEED, CEED, NID) or foundation programs 
                          often struggle with the chasm between memorising facts (e.g. "Bauhaus was founded in 1919 in Weimar") and 
                          developing genuine perceptual acuity: spotting a 3-pixel typographic baseline error, discerning 
                          subtle visual balance, or mentally unrolling isometric 3D geometry.
                        </p>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          By leveraging the micro-habit loop perfected by language apps like Duolingo, PERCEPT converts 
                          passive reading into tactile, visceral daily training.
                        </p>
                      </div>

                      <div className="hairline p-6 bg-[#121110] space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          CORE PRODUCT PILLARS
                        </span>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">01 · BITE-SIZED EXPEDITIONS</div>
                            <div className="text-[#8C867A]">3 to 5-minute daily challenges structured to build effortless streaks without fatigue.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">02 · IMMEDIATE OPTICAL FEEDBACK</div>
                            <div className="text-[#8C867A]">Interactive sliders and canvas touchpoints that highlight errors down to the pixel.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">03 · DESIGN HISTORY IN CONTEXT</div>
                            <div className="text-[#8C867A]">Specimens from Dieter Rams, Massimo Vignelli, and Chandigarh architecture integrated directly into puzzles.</div>
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="text-[#F5F2EA] font-bold">04 · MULTIDISCIPLINARY APTITUDE</div>
                            <div className="text-[#8C867A]">Visual, Spatial, Mechanical, and Analytical reasoning tracks mapped to professional criteria.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
                      <div className="hairline p-5 bg-[#0C0B0A] border-red-950/40">
                        <div className="text-red-400 font-bold mb-2">TRADITIONAL COACHING</div>
                        <p className="text-[#8C867A] leading-normal font-sans text-xs">
                          Passive PDF question banks, dry formula sheets, and disconnected memorisation of dates and chair names.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#0C0B0A] border-amber-950/40">
                        <div className="text-[#C5A059] font-bold mb-2">THE PERCEPT APPROACH</div>
                        <p className="text-[#8C867A] leading-normal font-sans text-xs">
                          Tactile manipulation of grids, live kerning feedback, spatial fold unfolding, and adaptive Elo scoring.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#0C0B0A] border-emerald-950/40">
                        <div className="text-emerald-400 font-bold mb-2">LONG-TERM OUTCOME</div>
                        <p className="text-[#8C867A] leading-normal font-sans text-xs">
                          Instinctual optical balance, heightened visual observation in daily life, and effortless examination readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: GAMIFIED LEARNING ENGINE */}
                {perceptActiveTab === 'gamification' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          BEHAVIORAL HABIT SEQUENCING
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          Daily Expeditions & Streak Resilience
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          PERCEPT models learning after verified habit-formation engines. 
                          Users embark on Daily Expeditions that blend three complementary disciplines: 
                          one optical puzzle, one design history question, and one spatial challenge.
                        </p>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          To protect against the guilt spiral of broken streaks, users earn "Streak Freezes" through flawless completion 
                          of high-difficulty challenges, preserving motivation while encouraging consistent engagement.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="hairline p-6 bg-[#141210] space-y-4">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="text-[#C5A059] flex items-center gap-1.5">
                              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                              <span>ACTIVE DAILY STREAK</span>
                            </span>
                            <span className="text-[#F5F2EA] font-bold">14 DAYS</span>
                          </div>
                          
                          {/* Streak Visualizer */}
                          <div className="flex justify-between items-center gap-1 font-mono text-[9px] pt-2">
                            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
                              <div key={day} className="flex flex-col items-center gap-1.5">
                                <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${
                                  idx < 5 
                                    ? 'bg-[#C5A059] text-[#0C0B0A]' 
                                    : idx === 5 
                                      ? 'bg-[#C5A059]/30 text-[#C5A059] hairline' 
                                      : 'bg-[#1C1A18] text-[#8C867A]'
                                }`}>
                                  ✓
                                </div>
                                <span className="text-[#8C867A]">{day}</span>
                              </div>
                            ))}
                          </div>

                          <div className="hairline-t pt-3 flex items-center justify-between font-mono text-[10px] text-[#8C867A]">
                            <span>EXPEDITION XP: 1,420 XP</span>
                            <span className="text-[#C5A059]">RANK: SENIOR APPRENTICE</span>
                          </div>
                        </div>

                        <div className="hairline p-4 bg-[#0C0B0A] font-mono text-[11px] text-[#8C867A] flex items-center gap-3">
                          <Award className="w-5 h-5 text-[#C5A059] shrink-0" />
                          <span>Adaptive Elo difficulty increases challenge complexity as user accuracy surpasses 85%.</span>
                        </div>
                      </div>
                    </div>

                    {/* Four Core Game Modes */}
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        FOUR APTITUDE GAME MODES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                        <div className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="text-[#C5A059] font-bold">MODE A · DESIGN DETECTIVE</div>
                          <p className="text-[#8C867A] text-[11px] font-sans leading-normal">
                            Architectural GeoGuessr and design movement identification using cropped historical photographs.
                          </p>
                        </div>
                        <div className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="text-[#C5A059] font-bold">MODE B · KERNING LAB</div>
                          <p className="text-[#8C867A] text-[11px] font-sans leading-normal">
                            High-precision letter-spacing calibration with mathematical error tolerance metrics.
                          </p>
                        </div>
                        <div className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="text-[#C5A059] font-bold">MODE C · ROGUE GRID HUNTER</div>
                          <p className="text-[#8C867A] text-[11px] font-sans leading-normal">
                            Identify rogue 4px gutter misalignments, optical offset errors, and broken typographic baselines.
                          </p>
                        </div>
                        <div className="hairline p-5 bg-[#121110] space-y-2">
                          <div className="text-[#C5A059] font-bold">MODE D · SPATIAL CUBE NETS</div>
                          <p className="text-[#8C867A] text-[11px] font-sans leading-normal">
                            3D mental folding of 2D cross nets with complex geometric side stamps and rotation tests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: MASCOT & VISUAL IDENTITY */}
                {perceptActiveTab === 'mascot' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-5 space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          NARRATIVE GUIDE & MENTOR
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          The Percept Owl: Geometric, Articulate, Encouraging
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          Unlike generic cuddly cartoon mascots, the PERCEPT owl is built from precise geometric arcs, 
                          proportional circles, and clean Bauhaus-inspired silhouettes. 
                          It serves as a sympathetic design critic—celebrating optical breakthroughs while gently highlighting 
                          spatial errors.
                        </p>
                        <div className="space-y-2 font-mono text-[10px] text-[#8C867A] pt-2">
                          <div>• GEOMETRY: 1:1.618 GOLDEN RATIO EYE GEOMETRY</div>
                          <div>• EXPRESSION SET: ENCOURAGING, SKEPTICAL, ECSTATIC, CONTEMPLATIVE</div>
                          <div>• PALETTE: WARM IVORY, MATTE OBSIDIAN, ANTIQUE BRASS ACCENTS</div>
                        </div>
                      </div>

                      <div className="md:col-span-7 hairline p-6 bg-[#121110] flex flex-col items-center">
                        <img 
                          src="/assets/studio/percept/mascot_front.png" 
                          alt="Percept Owl Front Turnaround"
                          className="max-h-72 object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                        />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8C867A] mt-4">
                          FIGURE 1.0: PERCEPT OWL FRONT TURNAROUND & OPTICAL ALIGNMENT STUDY
                        </span>
                      </div>
                    </div>

                    {/* Mascot Turnaround Gallery */}
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        TURNAROUND & MORPHOLOGY STUDIES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="hairline p-6 bg-[#0E0D0C] flex flex-col items-center text-center space-y-3">
                          <img 
                            src="/assets/studio/percept/mascot_head.png" 
                            alt="Mascot Head Close-up"
                            className="h-32 object-contain"
                          />
                          <span className="font-mono text-[10px] text-[#C5A059] uppercase">HEAD ISOLATION</span>
                          <span className="font-mono text-[9px] text-[#8C867A]">Circular ocular lenses for app favicon & notifications</span>
                        </div>
                        <div className="hairline p-6 bg-[#0E0D0C] flex flex-col items-center text-center space-y-3">
                          <img 
                            src="/assets/studio/percept/mascot_side.png" 
                            alt="Mascot Profile View"
                            className="h-32 object-contain"
                          />
                          <span className="font-mono text-[10px] text-[#C5A059] uppercase">PROFILE TURNAROUND</span>
                          <span className="font-mono text-[9px] text-[#8C867A]">Wing articulation and 3D silhouette calibration</span>
                        </div>
                        <div className="hairline p-6 bg-[#0E0D0C] flex flex-col items-center text-center space-y-3">
                          <img 
                            src="/assets/studio/percept/mascot_sheet.jpg" 
                            alt="Mascot Production Sheet"
                            className="h-32 object-contain rounded"
                          />
                          <span className="font-mono text-[10px] text-[#C5A059] uppercase">EXPRESSION SHEET</span>
                          <span className="font-mono text-[9px] text-[#8C867A]">Turnaround orthographics and mood states</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: APTITUDE LAB & INTERACTIVE MINI-GAME */}
                {perceptActiveTab === 'interface' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        LIVE INTERACTIVE SPECIMEN
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Interactive Kerning Lab Simulation
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Experience the core interactive mechanic of PERCEPT. Adjust the kerning slider below 
                        to achieve optical equilibrium for the letter pair "A" and "V". 
                        The target balance is exactly 24px.
                      </p>
                    </div>

                    {/* Interactive Kerning Sandbox */}
                    <div className="hairline p-8 sm:p-12 bg-[#080706] space-y-8 max-w-2xl mx-auto text-center">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C867A] flex justify-between">
                        <span>KERNING CHALLENGE #042</span>
                        <span className="text-[#C5A059]">FONT: EDITORIAL SERIF DISPLAY</span>
                      </div>

                      {/* Display Letters */}
                      <div className="py-8 flex items-baseline justify-center select-none font-serif text-7xl sm:text-9xl text-[#F5F2EA] tracking-normal">
                        <span>W</span>
                        <span style={{ marginLeft: `${kerningOffset}px` }} className="text-[#C5A059] transition-all duration-75">
                          A
                        </span>
                        <span style={{ marginLeft: '24px' }}>
                          V
                        </span>
                        <span style={{ marginLeft: '20px' }}>
                          E
                        </span>
                      </div>

                      {/* Slider Control */}
                      <div className="space-y-3 max-w-md mx-auto">
                        <div className="flex justify-between font-mono text-[10px] text-[#8C867A]">
                          <span>TIGHT (-10px)</span>
                          <span className="text-[#C5A059] font-bold">CURRENT OFFSET: {kerningOffset}px</span>
                          <span>LOOSE (+60px)</span>
                        </div>
                        <input 
                          type="range"
                          min="0"
                          max="60"
                          value={kerningOffset}
                          onChange={(e) => {
                            setKerningOffset(Number(e.target.value));
                            setKerningSubmitted(false);
                          }}
                          className="w-full h-1 bg-[#23211E] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
                        />
                      </div>

                      {/* Action & Feedback */}
                      <div className="pt-2 flex flex-col items-center gap-3">
                        <button
                          onClick={() => setKerningSubmitted(true)}
                          className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#F5F2EA] text-[#0C0B0A] font-mono text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
                        >
                          EVALUATE OPTICAL ACCURACY
                        </button>

                        {kerningSubmitted && (
                          <div className={`font-mono text-xs p-3 hairline w-full animate-in fade-in ${
                            Math.abs(kerningOffset - 24) <= 2 
                              ? 'bg-emerald-950/30 text-emerald-400 border-emerald-800' 
                              : Math.abs(kerningOffset - 24) <= 6
                                ? 'bg-amber-950/30 text-amber-400 border-amber-800'
                                : 'bg-red-950/30 text-red-400 border-red-800'
                          }`}>
                            {Math.abs(kerningOffset - 24) <= 2 ? (
                              <span>✓ OPTICAL MASTER: Flawless balance! Error is only {Math.abs(kerningOffset - 24)}px (+150 XP)</span>
                            ) : Math.abs(kerningOffset - 24) <= 6 ? (
                              <span>△ CLOSE: You are {Math.abs(kerningOffset - 24)}px off target. The diagonal strokes need slightly tighter breathing room.</span>
                            ) : (
                              <span>✕ UNBALANCED: You are {Math.abs(kerningOffset - 24)}px away from optical equilibrium. Try nudging closer to 24px!</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: SPECIMEN ARCHIVE */}
                {perceptActiveTab === 'specimens' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        DESIGN CORPUS & HISTORICAL ARTIFACTS
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The Specimen Gallery
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        PERCEPT features an expansive archive of vector-rendered design icons used throughout 
                        quizzes, daily observation challenges, and design history retrospectives.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[
                        { name: 'BRAUN T3 RADIO', designer: 'Dieter Rams · 1958', src: '/assets/studio/percept/specimens/braun-t3.svg' },
                        { name: 'ARCO LAMP', designer: 'Achille Castiglioni · 1962', src: '/assets/studio/percept/specimens/arco-lamp.svg' },
                        { name: 'SWISS POSTER', designer: 'Josef Müller-Brockmann · 1960', src: '/assets/studio/percept/specimens/swiss-poster.svg' },
                        { name: 'MEMPHIS TOTEM', designer: 'Ettore Sottsass · 1981', src: '/assets/studio/percept/specimens/memphis-totem.svg' },
                        { name: 'CAPITOL COMPLEX', designer: 'Le Corbusier · Chandigarh', src: '/assets/studio/percept/specimens/chandigarh-capitol.svg' },
                        { name: 'DESIRE PATHS', designer: 'Urban Affordance Study', src: '/assets/studio/percept/specimens/mission-desire-paths.svg' },
                        { name: 'TYPOGRAPHIC BASELINES', designer: 'Letterform Alignment', src: '/assets/studio/percept/specimens/mission-typographic-baselines.svg' },
                        { name: 'KYOTO MACHIYA', designer: 'Vernacular Spatial Order', src: '/assets/studio/percept/specimens/kyoto-machiya.svg' },
                      ].map((item, idx) => (
                        <div key={idx} className="hairline p-4 bg-[#121110] flex flex-col justify-between space-y-4 group">
                          <div className="w-full h-32 bg-[#080706] hairline flex items-center justify-center p-3 overflow-hidden">
                            <img 
                              src={item.src} 
                              alt={item.name}
                              className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <div className="font-mono text-[10px] text-[#F5F2EA] font-bold group-hover:text-[#C5A059] transition-colors">
                              {item.name}
                            </div>
                            <div className="font-mono text-[9px] text-[#8C867A] mt-0.5">
                              {item.designer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ========================================================= */}
            {/* CASE STUDY 02: KATHAPUTLI */}
            {/* ========================================================= */}
            {activeModalProject === 'kathaputli' && (
              <div className="space-y-16">
                
                {/* Monograph Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#C5A059]">
                    <Cpu className="w-4 h-4" />
                    <span>NARRATIVE CASE STUDY 02 · INTERACTIVE DIGITAL PUPPETRY</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-[#F5F2EA] tracking-tight">
                    KATHAPUTLI
                  </h1>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#C5A059] font-light">
                    "The Puppet Show: Bridging Ancient Indian Shadow Theatre & Real-Time Computer Vision"
                  </p>
                  <p className="font-serif text-lg text-[#D9D4C7] max-w-3xl leading-relaxed pt-2">
                    India's millennium-old shadow puppetry traditions—the ritualistic <em>Tholpavakoothu</em> of Kerala, 
                    the vibrant translucent leather figures of <em>Tholu Bommalata</em> in Andhra Pradesh, and the string marionettes 
                    of Rajasthan—possess an extraordinary synthesis of silhouette, light, and oral mythology. 
                    KATHAPUTLI reinterprets this craft by translating the human hand into a digital <em>Sutradhar</em> (puppeteer) 
                    via real-time optical hand tracking and TouchDesigner stagecraft.
                  </p>
                </div>

                {/* Sub-Navigation Tabs */}
                <div className="flex flex-wrap gap-2 hairline-b pb-4 font-mono text-xs uppercase tracking-wider">
                  {[
                    { id: 'concept', label: '01 · NARRATIVE & HERITAGE' },
                    { id: 'characters', label: '02 · PUPPET STUDIES' },
                    { id: 'stagecraft', label: '03 · LUMINOUS STAGECRAFT' },
                    { id: 'computervision', label: '04 · COMPUTER VISION PIPELINE' },
                    { id: 'installation', label: '05 · INSTALLATION SETUP' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setKathaputliActiveTab(tab.id as any)}
                      className={`px-4 py-2 cursor-pointer transition-colors ${
                        kathaputliActiveTab === tab.id
                          ? 'bg-[#F5F2EA] text-[#0C0B0A] font-bold'
                          : 'bg-[#121110] text-[#8C867A] hover:text-[#F5F2EA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* TAB 1: CONCEPT & CULTURAL HERITAGE */}
                {kathaputliActiveTab === 'concept' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          CULTURAL FOUNDATIONS
                        </span>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                          The Heritage of Shadow & Cutout
                        </h3>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          In traditional <em>Tholpavakoothu</em> (Kerala), shadow puppets are crafted from deer skin, perforated with 
                          intricate geometric patterns, and held against an oiled cotton sheet backlit by 21 coconut-oil lamps. 
                          The performance is not merely entertainment; it is an all-night sacred narrative ritual.
                        </p>
                        <p className="text-[#D9D4C7] leading-relaxed font-sans text-sm sm:text-base">
                          KATHAPUTLI investigates how modern optical sensors can preserve the delicate tension between 
                          puppeteer and puppet without physical strings, inviting gallery visitors to embody the <em>Sutradhar</em>—the 
                          thread-holder who animates the cosmic narrative.
                        </p>
                      </div>

                      <div className="hairline p-6 bg-[#121110] space-y-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                          THEMATIC DRAMATIS PERSONAE
                        </span>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">THE MOMENT OF CRISIS: KURUKSHETRA</div>
                            <div className="text-[#8C867A]">The sacred philosophical dialogue between Lord Krishna and warrior-prince Arjuna on the brink of battle.</div>
                          </div>
                          <div className="hairline-b pb-3 space-y-1">
                            <div className="text-[#F5F2EA] font-bold">OPPOSING MORPHOLOGIES</div>
                            <div className="text-[#8C867A]">Krishna in divine, graceful serenity (Tribhanga posture) vs. Arjuna in tense, bow-wielding martial conflict.</div>
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="text-[#F5F2EA] font-bold">THE DIGITAL SUTRADHAR</div>
                            <div className="text-[#8C867A]">The participant's two hands simultaneously manipulate both figures, feeling the metaphysical conversation through bodily motion.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Master Hero Visual Display */}
                    <div className="hairline bg-[#080706] p-4 space-y-3">
                      <img 
                        src="/assets/studio/kathaputli/kathaputli-hero-study.png" 
                        alt="Kathaputli Master Visual Study"
                        className="w-full max-h-[480px] object-contain mx-auto"
                      />
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#8C867A] pt-2 hairline-t">
                        <span>MASTER VISUAL STUDY: INITIAL COMPOSITION WITH KRISHNA, ARJUNA & KURUKSHETRA HORIZON</span>
                        <span className="text-[#C5A059]">TOUCHDESIGNER COMPOSITING REPORT · 2026</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: PUPPET CHARACTER STUDIES */}
                {kathaputliActiveTab === 'characters' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        ORNAMENTAL CUTWORK & MORPHOLOGY
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Krishna & Arjuna: Anatomies of Devotion and Conflict
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Each puppet was drafted with microscopic attention to traditional leather perforations. 
                        The negative spaces allow light to bleed through the black silhouette, echoing the glowing 
                        perforations of Kerala and Andhra puppet masters.
                      </p>
                    </div>

                    {/* Side-by-side Character Studies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Krishna Study */}
                      <div className="hairline p-6 bg-[#121110] flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest">
                            <span className="text-[#C5A059]">FIGURE 01 · LORD KRISHNA</span>
                            <span className="text-[#8C867A]">RIGHT-FACING</span>
                          </div>
                          <h4 className="font-cinzel text-xl text-[#F5F2EA] font-bold">The Divine Charioteer</h4>
                          <p className="text-xs text-[#8C867A] font-sans leading-relaxed">
                            Rendered in a graceful right-facing posture holding the sacred flute. 
                            Features the peacock feather crown (Mayur Pankh), ornamental necklace cutwork, 
                            and a flowing lower dhoti silhouette expressing transcendental calm.
                          </p>
                        </div>
                        <div className="w-full h-80 bg-[#080706] hairline flex items-center justify-center p-4">
                          <img 
                            src="/assets/studio/kathaputli/kathaputli-krishna.png" 
                            alt="Krishna Puppet Study"
                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                          />
                        </div>
                        <div className="font-mono text-[9px] text-[#8C867A] hairline-t pt-2 flex justify-between">
                          <span>CUTOUT RESOLUTION: 1024 × 1536</span>
                          <span className="text-[#C5A059]">KINETIC ANCHOR: FLUTE & WRIST</span>
                        </div>
                      </div>

                      {/* Arjuna Study */}
                      <div className="hairline p-6 bg-[#121110] flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest">
                            <span className="text-[#C5A059]">FIGURE 02 · ARJUNA</span>
                            <span className="text-[#8C867A]">LEFT-FACING</span>
                          </div>
                          <h4 className="font-cinzel text-xl text-[#F5F2EA] font-bold">The Hesitant Archer</h4>
                          <p className="text-xs text-[#8C867A] font-sans leading-relaxed">
                            Depicted in a left-facing warrior stance clutching the formidable Gandiva bow. 
                            Features royal armor plating, shoulder epaulets, a quiver of arrows, and a broader, 
                            heavier stance establishing dynamic compositional tension opposite Krishna.
                          </p>
                        </div>
                        <div className="w-full h-80 bg-[#080706] hairline flex items-center justify-center p-4">
                          <img 
                            src="/assets/studio/kathaputli/kathaputli-arjuna.png" 
                            alt="Arjuna Puppet Study"
                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                          />
                        </div>
                        <div className="font-mono text-[9px] text-[#8C867A] hairline-t pt-2 flex justify-between">
                          <span>CUTOUT RESOLUTION: 1024 × 1536</span>
                          <span className="text-[#C5A059]">KINETIC ANCHOR: GANDIVA BOW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: LUMINOUS STAGECRAFT */}
                {kathaputliActiveTab === 'stagecraft' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        ATMOSPHERIC PROJECTION DESIGN
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The Kurukshetra Stage Environment
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Rather than placing the puppets on a stark computer monitor, KATHAPUTLI projects a 
                        custom atmospheric gradient evoking the twilight of the battlefield, anchored by a 
                        panoramic silhouette ground-line representing the historical detritus of war.
                      </p>
                    </div>

                    {/* Luminous Background Study */}
                    <div className="hairline p-6 bg-[#121110] space-y-4">
                      <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        <span>FIGURE 03 · LUMINOUS PROJECTION BACKGROUND STUDY</span>
                        <span className="text-[#8C867A]">1672 × 941 DUAL GRADIENT</span>
                      </div>
                      <img 
                        src="/assets/studio/kathaputli/kathaputli-luminous-background.png" 
                        alt="Luminous Projection Screen Background"
                        className="w-full h-56 sm:h-72 object-cover rounded-none"
                      />
                      <p className="text-xs text-[#8C867A] font-sans leading-relaxed">
                        The background transitions smoothly from a soft coral-pink upper field through a pale central glow 
                        down to a rich warm orange-amber at the base. This gradient simulates the warm, uneven light cast by 
                        traditional oil lamps behind an oiled cotton shadow screen.
                      </p>
                    </div>

                    {/* Battlefield Strip Study */}
                    <div className="hairline p-6 bg-[#121110] space-y-4">
                      <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        <span>FIGURE 04 · KURUKSHETRA BATTLEFIELD PANORAMIC SILHOUETTE STRIP</span>
                        <span className="text-[#8C867A]">2048 × 682 SILHOUETTE</span>
                      </div>
                      <div className="bg-[#080706] p-4 hairline overflow-x-auto">
                        <img 
                          src="/assets/studio/kathaputli/kathaputli-battlefield-strip.png" 
                          alt="Kurukshetra Battlefield Silhouette Strip"
                          className="w-full min-w-[700px] h-36 object-contain"
                        />
                      </div>
                      <p className="text-xs text-[#8C867A] font-sans leading-relaxed">
                        Positioned along the lower boundary to ground the puppets, this panoramic silhouette depicts fallen warriors, 
                        a fallen war elephant, broken chariot wheels, discarded spears, and tattered victory banners. 
                        Its intricate ornamental perforations harmonize directly with the character anatomy.
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 4: COMPUTER VISION PIPELINE */}
                {kathaputliActiveTab === 'computervision' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        INTERACTION ARCHITECTURE
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        Fingers as Virtual Puppet Strings
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        In traditional puppetry, the <em>Sutradhar</em> manipulates up to six strings per character. 
                        In KATHAPUTLI, a high-speed webcam captures the participant's hands in 3D space via MediaPipe Vision. 
                        Each finger joint controls a corresponding puppet node.
                      </p>
                    </div>

                    {/* Kinematic Mapping Diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">WRIST ELEVATION (Y-AXIS)</div>
                        <p className="text-[#8C867A] text-[11px] font-sans">
                          Controls the vertical lift and stance height of the puppet, mimicking the master tension string.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">THUMB-TO-INDEX PINCH</div>
                        <p className="text-[#8C867A] text-[11px] font-sans">
                          Modulates hand gestures—triggering Krishna's flute raising or Arjuna's bowstring draw tension.
                        </p>
                      </div>
                      <div className="hairline p-5 bg-[#121110] space-y-2">
                        <div className="text-[#C5A059] font-bold">HAND ROTATION (ROLL/PITCH)</div>
                        <p className="text-[#8C867A] text-[11px] font-sans">
                          Smoothly tilts the torso and head forward, conveying dramatic hesitation, defiance, or benediction.
                        </p>
                      </div>
                    </div>

                    {/* Interactive Virtual String Simulator */}
                    <div className="hairline p-8 bg-[#080706] space-y-6 max-w-2xl mx-auto text-center">
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#8C867A]">
                        <span>VIRTUAL SUTRADHAR SENSING DEMO</span>
                        <span className="text-[#C5A059]">MEDIAPIPE RIGGING PREVIEW</span>
                      </div>

                      {/* Puppet Silhouette Stage */}
                      <div className="h-64 relative overflow-hidden bg-[#141210] hairline flex items-center justify-center">
                        <img 
                          src="/assets/studio/kathaputli/kathaputli-luminous-background.png" 
                          alt="Stage Glow" 
                          className="absolute inset-0 w-full h-full object-cover opacity-70"
                        />
                        
                        {/* Interactive Puppet Element */}
                        <div 
                          className="relative z-10 transition-transform duration-100 ease-out flex items-center justify-center gap-8"
                          style={{
                            transform: `translateY(${-puppetElevation}px) rotate(${puppetTilt}deg)`
                          }}
                        >
                          <img 
                            src="/assets/studio/kathaputli/kathaputli-krishna.png" 
                            alt="Krishna Puppet"
                            className="h-44 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
                          />
                        </div>

                        {/* Simulated String Guides */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#C5A059]/30 pointer-events-none stroke-dasharray" />
                        <div className="absolute top-2 font-mono text-[9px] text-[#C5A059] bg-[#0C0B0A]/80 px-2 py-0.5 hairline">
                          VIRTUAL SUTRADHAR STRINGS ACTIVE
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto font-mono text-[10px]">
                        <div className="space-y-2 text-left">
                          <span className="text-[#8C867A]">WRIST ELEVATION: {puppetElevation}px</span>
                          <input 
                            type="range"
                            min="0"
                            max="40"
                            value={puppetElevation}
                            onChange={(e) => setPuppetElevation(Number(e.target.value))}
                            className="w-full h-1 bg-[#23211E] appearance-none accent-[#C5A059]"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <span className="text-[#8C867A]">TORSO TILT: {puppetTilt}°</span>
                          <input 
                            type="range"
                            min="-15"
                            max="15"
                            value={puppetTilt}
                            onChange={(e) => setPuppetTilt(Number(e.target.value))}
                            className="w-full h-1 bg-[#23211E] appearance-none accent-[#C5A059]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: INSTALLATION SETUP */}
                {kathaputliActiveTab === 'installation' && (
                  <div className="space-y-12 animate-in fade-in duration-200">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
                        PHYSICAL SPACE & HARDWARE SPECIFICATIONS
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                        The Installation Environment
                      </h3>
                      <p className="text-[#D9D4C7] max-w-3xl font-sans text-sm sm:text-base leading-relaxed">
                        Designed as an intimate gallery installation, KATHAPUTLI invites a single participant to step 
                        onto a dimly lit mark facing a semi-translucent rear-projection screen. 
                        As their hands enter the optical tracking cone, their digital shadow manifests instantly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="hairline p-6 bg-[#121110] space-y-4 font-mono text-xs">
                        <span className="text-[#C5A059] uppercase tracking-widest block font-bold">
                          TECHNICAL SPECIFICATIONS
                        </span>
                        <div className="space-y-3">
                          <div className="hairline-b pb-2 flex justify-between">
                            <span className="text-[#8C867A]">RUNTIME ENGINE:</span>
                            <span className="text-[#F5F2EA]">TOUCHDESIGNER / GLSL COMPOSITING</span>
                          </div>
                          <div className="hairline-b pb-2 flex justify-between">
                            <span className="text-[#8C867A]">VISION SENSOR:</span>
                            <span className="text-[#F5F2EA]">60 FPS ULTRA-LOW LATENCY WEBCAM</span>
                          </div>
                          <div className="hairline-b pb-2 flex justify-between">
                            <span className="text-[#8C867A]">PROJECTION:</span>
                            <span className="text-[#F5F2EA]">SHORT-THROW REAR PROJECTOR (4000 ANSI LUMENS)</span>
                          </div>
                          <div className="hairline-b pb-2 flex justify-between">
                            <span className="text-[#8C867A]">SURFACE:</span>
                            <span className="text-[#F5F2EA]">OILED MUSLIN / TRANSLUCENT DIFFUSION FILM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8C867A]">AUDIO:</span>
                            <span className="text-[#F5F2EA]">SPATIAL SITAR & BATTLE AMBIENCE GENERATIVE DMX</span>
                          </div>
                        </div>
                      </div>

                      <div className="hairline p-6 bg-[#0E0D0C] space-y-4 font-mono text-xs">
                        <span className="text-[#C5A059] uppercase tracking-widest block font-bold">
                          VISITOR EXPERIENCE LOOP
                        </span>
                        <div className="space-y-3 text-[11px] font-sans text-[#D9D4C7] leading-relaxed">
                          <div className="flex items-start gap-3">
                            <span className="font-mono text-[#C5A059] font-bold">01</span>
                            <span><strong>Approach:</strong> Participant enters a darkened space with only a soft coral-amber rectangle glowing in the void.</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="font-mono text-[#C5A059] font-bold">02</span>
                            <span><strong>Calibration:</strong> Raising two hands immediately casts twin shadow figures onto the screen, accompanied by subtle brass chime feedback.</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="font-mono text-[#C5A059] font-bold">03</span>
                            <span><strong>Dialogue:</strong> Left hand controls Krishna's discourse; right hand controls Arjuna's bow tension and moral struggle.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Modal Bottom Close Strip */}
          <div className="sticky bottom-0 bg-[#0C0B0A]/95 backdrop-blur hairline-t p-4 px-6 sm:px-12 flex justify-between items-center font-mono text-[10px] uppercase text-[#8C867A]">
            <span>SEMESTER 07 JURY PRESENTATION · CHAPTER 03 NARRATIVE ARCHIVE</span>
            <button
              onClick={() => setActiveModalProject(null)}
              className="text-[#F5F2EA] hover:text-[#C5A059] cursor-pointer transition-colors"
            >
              [ Return to Chapter 03 ↑ ]
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

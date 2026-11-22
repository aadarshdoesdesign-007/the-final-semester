import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Eye, 
  X, 
  ArrowUpRight, 
  Heart, 
  Compass, 
  Layers, 
  Smile, 
  Maximize2 
} from 'lucide-react';

export const PublicationPortfolioCaseStudy: React.FC = () => {
  const [showLiveEmbed, setShowLiveEmbed] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string; tag: string } | null>(null);

  return (
    <div className="space-y-20 text-left">
      
      {/* 
        CENTRAL STATEMENT / MANIFESTO MASTHEAD 
      */}
      <div className="hairline p-8 sm:p-12 lg:p-14 bg-[#121110] relative overflow-hidden">
        {/* Subtle decorative gold corner tag */}
        <div className="absolute top-0 right-0 p-4 font-mono text-[9px] uppercase tracking-widest text-[#C5A059] bg-[#0C0B0A] hairline-l hairline-b">
          CHAPTER 02 · DIGITAL MONOGRAPH
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ OPUS 02 · A DIGITAL SELF-PORTRAIT ]</span>
          </div>

          <h3 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EA] leading-[1.05] tracking-tight">
            "A portfolio should show what you make. But it can also show who makes it."
          </h3>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D9D4C7] font-light leading-relaxed">
            Reimagining the portfolio assignment not as a sterile repository of client cards, but as an interactive publication—an intimate digital self-portrait uniting rigorous systems design with warmth, pet companions, and personal voice.
          </p>

          {/* Action Strip: Prominent External Link & Interactive Embed Toggle */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://aadarshdesigns.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#F5F2EA] hover:bg-[#C5A059] text-[#0C0B0A] font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer group"
            >
              <span>EXPLORE THE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setShowLiveEmbed(!showLiveEmbed)}
              className="px-6 py-3.5 hairline bg-[#0C0B0A] hover:bg-[#1A1816] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#C5A059]" />
              <span>{showLiveEmbed ? 'HIDE LIVE EMBED' : 'VIEW LIVE EMBED WITHIN JURY'}</span>
            </button>

            <span className="font-mono text-[10px] text-[#8C867A] uppercase tracking-wider">
              VERCEL PRODUCTION · LIVE SPECIMEN
            </span>
          </div>
        </div>
      </div>

      {/* 
        EXPANDABLE INTERACTIVE LIVE WEBSITE EMBED 
      */}
      {showLiveEmbed && (
        <div className="hairline p-4 sm:p-6 bg-[#080706] space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8C867A] hairline-b pb-3">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span>LIVE INTERACTIVE INSTANCE: aadarshdesigns.vercel.app</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://aadarshdesigns.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F2EA] flex items-center gap-1"
              >
                <span>Full Window</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setShowLiveEmbed(false)}
                className="hover:text-[#F5F2EA] cursor-pointer"
              >
                [ Close Embed ✕ ]
              </button>
            </div>
          </div>

          <div className="w-full h-[650px] sm:h-[750px] bg-[#121110] hairline overflow-hidden relative">
            <iframe
              src="https://aadarshdesigns.vercel.app/"
              title="Aadarsh Ramakrishnan Live Portfolio"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-[#8C867A] uppercase">
            <span>Interactions active: Toggle Dora, Leo, or Gotham Mode in the embedded header above</span>
            <span className="text-[#C5A059]">Native Web Publication</span>
          </div>
        </div>
      )}

      {/* 
        01 — THE BRIEF: PUBLICATION DESIGN BEYOND THE PRINTED PAGE
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-[#C5A059] space-y-2">
          <span>01 / THE BRIEF</span>
          <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA] normal-case tracking-tight">
            Publication Design as Digital Architecture
          </h4>
        </div>

        <div className="lg:col-span-8 space-y-5 text-sm sm:text-base font-sans text-[#D9D4C7] leading-relaxed font-light">
          <p>
            The academic brief tasked students with creating a publication. While traditional interpretation gravitates toward bound monographs, ink chemistry, and grid calipers, this project posed a contemporary counter-inquiry: <strong className="text-[#F5F2EA] font-medium">What is the modern designer’s most critical publication?</strong>
          </p>
          <p>
            It is the personal portfolio—the public-facing document that broadcasts a designer’s philosophy, standards, and voice to the world. Yet across the industry, portfolios have devolved into generic, homogenized templates: interchangeable cards, sanitized copy, and sterile metrics that erase the human behind the craft.
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#C5A059]">
            The challenge: Design an interactive portfolio that behaves as a tactile publication—retaining editorial discipline while refusing to surrender personality.
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-[#23211E]" />

      {/* 
        02 — THE IDEA: PERSONALITY AS AN INTERFACE
      */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-[#C5A059]">
            <span>02 / THE IDEA</span>
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA] normal-case mt-1">
              Personality as an Interface
            </h4>
          </div>
          <div className="lg:col-span-8 font-serif italic text-lg sm:text-xl text-[#F5F2EA] font-light">
            "What if an interface felt like turning the pages of someone's actual notebook?"
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div 
          onClick={() => setSelectedImage({ 
            src: '/assets/portfolio/portfolio-hero.png', 
            caption: 'Aadarsh Ramakrishnan Portfolio Landing Screen — Ruled notepad background, handwritten microcopy, and lively badge system.',
            tag: 'HERO LANDING EXPERIENCE'
          })}
          className="hairline p-3 sm:p-4 bg-[#121110] group cursor-pointer hover:border-[#C5A059] transition-colors"
        >
          <div className="relative overflow-hidden bg-[#0C0B0A]">
            <img
              src="/assets/portfolio/portfolio-hero.png"
              alt="Aadarsh Ramakrishnan Live Portfolio Hero"
              className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#0C0B0A]/85 backdrop-blur-sm hairline font-mono text-[9px] uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3" />
              <span>Click to Enlarge</span>
            </div>
          </div>
          <div className="pt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-[10px] text-[#8C867A]">
            <span>FIGURE 2.1 — THE NOTEPAD PARADIGM · RULED PAPER GRID & WARM GRAIN</span>
            <span className="text-[#C5A059]">LIVE INTERFACE SPECIMEN</span>
          </div>
        </div>

        {/* 3 Pillar Design Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-[#080706] hairline space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#C5A059]">
              <Layers className="w-3.5 h-3.5" />
              <span>01 · TACTILE MEDIUM</span>
            </div>
            <h5 className="font-serif font-bold text-base text-[#F5F2EA]">Ruled Notebook Texture</h5>
            <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
              Replacing sterile flat CSS surfaces with an authentic blue-lined notepad texture and subtle paper margins, grounding computational work in physical warmth.
            </p>
          </div>

          <div className="p-6 bg-[#080706] hairline space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#C5A059]">
              <Compass className="w-3.5 h-3.5" />
              <span>02 · INFORMATION CLARITY</span>
            </div>
            <h5 className="font-serif font-bold text-base text-[#F5F2EA]">Complex Translation</h5>
            <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
              Treating interface design as an information architecture discipline where complex multi-layered research is translated into human-readable narratives.
            </p>
          </div>

          <div className="p-6 bg-[#080706] hairline space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#C5A059]">
              <Smile className="w-3.5 h-3.5" />
              <span>03 · UNFILTERED VOICE</span>
            </div>
            <h5 className="font-serif font-bold text-base text-[#F5F2EA]">Conversational Tone</h5>
            <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
              Rejecting corporate jargon in favor of self-aware, honest copy: "Product designer exploring interfaces, data, and ideas" with spontaneous annotations.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#23211E]" />

      {/* 
        03 — THE PERSONALITY: CURSORS WITH PERSONALITY (LEO & DORA)
      */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-[#C5A059]">
            <span>03 / THE PERSONALITY</span>
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA] normal-case mt-1">
              Cursors with Personality
            </h4>
          </div>
          <div className="lg:col-span-8 font-serif italic text-lg sm:text-xl text-[#F5F2EA] font-light">
            "Leo and Dora aren't decorative assets. They bring a piece of my actual life into the viewport."
          </div>
        </div>

        <p className="font-sans text-sm sm:text-base text-[#D9D4C7] leading-relaxed font-light max-w-3xl">
          One of the portfolio's defining interactive mechanisms is the custom cursor companion system. Rather than adopting a generic expanding ring cursor, visitors can invite Aadarsh’s real-world pets onto their screen as responsive companions that interact with every hover state.
        </p>

        {/* 2-Column Companion Interaction Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Dora Card */}
          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/cursor-dora-chase.png', 
              caption: '🐕 Dora (Chow Chow) Companion — The mouse pointer becomes a tennis ball that Dora actively chases across the notebook page, leaping onto interactive buttons.',
              tag: 'COMPANION: DORA THE CHOW CHOW'
            })}
            className="hairline p-5 bg-[#121110] space-y-4 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8C867A] hairline-b pb-2">
              <span className="text-[#C5A059] font-bold">🐕 DORA (CHOW CHOW)</span>
              <span>CHASES TENNIS BALL</span>
            </div>
            
            <div className="overflow-hidden hairline bg-[#0C0B0A] relative">
              <img
                src="/assets/portfolio/cursor-dora-chase.png"
                alt="Dora Chow Chow cursor companion chasing tennis ball"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="space-y-1">
              <h6 className="font-serif font-bold text-base text-[#F5F2EA]">Dynamic Prey/Play Physics</h6>
              <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
                The browser pointer transforms into a bright tennis ball. Dora animates with running cycles that follow cursor acceleration, springing into rest postures when hovering over buttons.
              </p>
            </div>
          </div>

          {/* Leo Card */}
          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/cursor-leo-hedgehog.png', 
              caption: '🦔 Leo (Hedgehog) Companion — Scurrying after crunchy treat pellets across the lined paper grid with responsive micro-steps.',
              tag: 'COMPANION: LEO THE HEDGEHOG'
            })}
            className="hairline p-5 bg-[#121110] space-y-4 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8C867A] hairline-b pb-2">
              <span className="text-[#C5A059] font-bold">🦔 LEO (HEDGEHOG)</span>
              <span>SCURRIES FOR PELLETS</span>
            </div>

            <div className="overflow-hidden hairline bg-[#0C0B0A] relative">
              <img
                src="/assets/portfolio/cursor-leo-hedgehog.png"
                alt="Leo the Hedgehog cursor companion scurrying for treat pellets"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="space-y-1">
              <h6 className="font-serif font-bold text-base text-[#F5F2EA]">Micro-Step Locomotion</h6>
              <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
                Transforming the pointer into crunchy food pellets. Leo sniffs, turns, and scurries behind the cursor, adding genuine warmth to an otherwise static screen session.
              </p>
            </div>
          </div>

        </div>

        {/* Companion Dropdown System Specimen */}
        <div 
          onClick={() => setSelectedImage({ 
            src: '/assets/portfolio/cursor-companion-menu.png', 
            caption: 'Cursor Companion Selection Menu — 4 options allowing visitor agency: Dora (Chow Chow), Leo (Hedgehog), Normal Cursor, and Spider & Ant.',
            tag: 'UI ARCHITECTURE: COMPANION SWITCHER'
          })}
          className="hairline p-5 bg-[#080706] flex flex-col md:flex-row items-center gap-6 cursor-pointer group hover:border-[#C5A059] transition-colors"
        >
          <div className="w-full md:w-1/2 overflow-hidden hairline">
            <img
              src="/assets/portfolio/cursor-companion-menu.png"
              alt="Cursor companion selection dropdown menu"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
              [ INTERACTIVE AGENCY & INCLUSIVITY ]
            </span>
            <h5 className="font-serif font-bold text-lg text-[#F5F2EA]">Visitor Autonomy: 4 Distinct Modes</h5>
            <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
              Recognizing that some visitors or recruiters prefer clean review, the menu includes an instant fallback to <strong className="text-[#D9D4C7]">👆 Normal Cursor</strong>, alongside a playful <strong className="text-[#D9D4C7]">🕷️ Spider & Ant</strong> chase. Delight is offered without being forced.
            </p>
            <div className="pt-2 font-mono text-[10px] text-[#C5A059] flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>DESIGNED WITH RESPECT FOR VISITOR INTENT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#23211E]" />

      {/* 
        04 — PERSONAL REFERENCES, HUMOR & THE GOTHAM EASTER EGG
      */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-[#C5A059]">
            <span>04 / THE REFERENCES</span>
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA] normal-case mt-1">
              Humour, Gotham Mode & Play
            </h4>
          </div>
          <div className="lg:col-span-8 font-serif italic text-lg sm:text-xl text-[#F5F2EA] font-light">
            "A portfolio should celebrate what you love outside of Figma."
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Gotham Mode Feature */}
          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/gotham-mode-batsignal.png', 
              caption: 'Gotham Mode Easter Egg — Clicking the header Bat-Signal button switches the theme into dark mode, projects a massive searchlight beam across the screen, and equips the Bat Cursor.',
              tag: 'EASTER EGG: GOTHAM MODE & BAT-SIGNAL'
            })}
            className="hairline p-6 bg-[#121110] space-y-4 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8C867A] hairline-b pb-2">
              <span className="text-[#C5A059] font-bold">🦇 GOTHAM MODE & BAT-SIGNAL</span>
              <span>CINEMATIC DARK THEME</span>
            </div>

            <div className="overflow-hidden hairline bg-[#0C0B0A]">
              <img
                src="/assets/portfolio/gotham-mode-batsignal.png"
                alt="Gotham Mode Bat-Signal projection across the portfolio"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="space-y-2">
              <h5 className="font-serif font-bold text-lg text-[#F5F2EA]">The Bat-Signal Searchlight</h5>
              <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
                Tapping the Batman icon in the navigation triggers a full-canvas transformation: the ruled page darkens into Gotham night, an angled searchlight beam sweeps the layout, and the cursor transforms into a hovering bat symbol.
              </p>
            </div>
          </div>

          {/* Wordplay / Play Archive */}
          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/portfolio-play-puns.png', 
              caption: 'pun intended. Wit & Wordplay Archive (/play) — 22 interactive typography and engineering dad jokes with tap-to-reveal punchlines.',
              tag: 'MICRO-PUBLICATION: WIT & WORDPLAY ARCHIVE'
            })}
            className="hairline p-6 bg-[#121110] space-y-4 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8C867A] hairline-b pb-2">
              <span className="text-[#C5A059] font-bold">💬 "PUN INTENDED." ARCHIVE</span>
              <span>22 INTERACTIVE PUNS</span>
            </div>

            <div className="overflow-hidden hairline bg-[#0C0B0A]">
              <img
                src="/assets/portfolio/portfolio-play-puns.png"
                alt="Pun intended wordplay archive page"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="space-y-2">
              <h5 className="font-serif font-bold text-lg text-[#F5F2EA]">Typography Gags & Dad Jokes</h5>
              <p className="font-sans text-xs text-[#8C867A] leading-relaxed">
                A dedicated <code className="text-[#C5A059]">/play</code> section curating design jokes: <em>"Why do designers love typography so much? Because they definitely have a type."</em> Complete with filter pills (Design, Tech, Everyday) and interactive punchline reveals.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="h-[1px] bg-[#23211E]" />

      {/* 
        05 — THE OUTCOME: PROFESSIONAL RIGOR MEETS HUMAN DELIGHT
      */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-[#C5A059]">
            <span>05 / THE OUTCOME</span>
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2EA] normal-case mt-1">
              Professional Showcase & Personal Expression
            </h4>
          </div>
          <div className="lg:col-span-8 font-serif italic text-lg sm:text-xl text-[#F5F2EA] font-light">
            "Proof that playful humanity does not compromise engineering rigor."
          </div>
        </div>

        {/* Selected Works Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/portfolio-selected-projects.png', 
              caption: 'Selected Projects Grid — IRIS SaaS Logistics Platform, Mysore Zoo Wayfinding, and Aarohan IIT Delhi Heritage Reconstruction.',
              tag: 'ENTERPRISE & RESEARCH PROJECTS'
            })}
            className="hairline p-4 bg-[#121110] space-y-3 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="overflow-hidden hairline">
              <img
                src="/assets/portfolio/portfolio-selected-projects.png"
                alt="Selected Projects Grid on portfolio"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059]">FLAGSHIP WORKS · 11 PROJECTS ARCHIVED</span>
              <h6 className="font-serif font-bold text-base text-[#F5F2EA]">Enterprise SaaS & AI Research Systems</h6>
              <p className="font-sans text-xs text-[#8C867A]">
                Balancing confidential enterprise logistics architecture (IRIS) with generative AI heritage reconstruction.
              </p>
            </div>
          </div>

          <div 
            onClick={() => setSelectedImage({ 
              src: '/assets/portfolio/portfolio-case-study-zoo.png', 
              caption: 'Zoo Navigation & Public Wayfinding System — Detailed 150-acre wildlife reserve cartography and landmark signage for Zoo Authority of Karnataka.',
              tag: 'PUBLIC UX & CARTOGRAPHY CASE STUDY'
            })}
            className="hairline p-4 bg-[#121110] space-y-3 cursor-pointer group hover:border-[#C5A059] transition-colors"
          >
            <div className="overflow-hidden hairline">
              <img
                src="/assets/portfolio/portfolio-case-study-zoo.png"
                alt="Mysore Zoo Wayfinding Case Study"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059]">SPATIAL DESIGN · ZOO AUTHORITY OF KARNATAKA</span>
              <h6 className="font-serif font-bold text-base text-[#F5F2EA]">Mysore Zoo Public Wayfinding Masterplan</h6>
              <p className="font-sans text-xs text-[#8C867A]">
                Campus orientation maps, glanceable pictorial taxonomy, and environmental graphic design adopted statewide.
              </p>
            </div>
          </div>
        </div>

        {/* Synthesis Colophon Card */}
        <div className="p-8 sm:p-10 bg-[#0C0B0A] hairline border-l-2 border-l-[#C5A059] space-y-4">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">
            <span>[ JURY SYNTHESIS · PUBLICATION AS IDENTITY ]</span>
            <span>SEMESTER 07 DEFENSE</span>
          </div>

          <p className="font-serif text-lg sm:text-xl text-[#F5F2EA] leading-relaxed font-light">
            "By translating personal identity, companion pets, and intellectual curiosity into interface mechanics, this project expands the definition of Publication Design. It proves that a portfolio can honor both the rigors of information architecture and the irreducible humanity of the designer who built it."
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#8C867A] hairline-t pt-4">
            <div>CANDIDATE: AADARSH R · JAIN UNIVERSITY</div>
            <div>STATUS: PRODUCTION DEPLOYMENT ACTIVE</div>
            <a
              href="https://aadarshdesigns.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-[#F5F2EA] flex items-center gap-1 font-bold transition-colors"
            >
              <span>https://aadarshdesigns.vercel.app/</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* 
        MODAL LIGHTBOX FOR HIGH-RES SCREENSHOT INSPECTION
      */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#0C0B0A]/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-4 hairline-b text-[#F5F2EA] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059] font-bold">{selectedImage.tag}</span>
              <span className="text-[#8C867A]">|</span>
              <span className="text-[#D9D4C7] truncate max-w-xl">{selectedImage.caption}</span>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="p-1.5 hairline hover:border-[#C5A059] text-[#8C867A] hover:text-[#F5F2EA] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 w-full flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-full object-contain hairline shadow-2xl"
            />
          </div>

          <div className="pt-3 flex items-center justify-between font-mono text-[10px] text-[#8C867A]">
            <span>AADARSH DESIGNS PORTFOLIO SPECIMEN</span>
            <button
              onClick={() => setSelectedImage(null)}
              className="text-[#C5A059] hover:underline cursor-pointer"
            >
              Close Lightbox [ESC]
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

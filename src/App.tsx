import { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { HeroHookReveal } from './components/hero/HeroHookReveal';
import { ChapterSection } from './components/chapters/ChapterSection';
import { FinalQuestionSection } from './components/cinematic/FinalQuestionSection';
import { EndCreditsSection } from './components/cinematic/EndCreditsSection';
import { JuryFooter } from './components/footer/JuryFooter';
import { CHAPTERS_DATA } from './data/semesterData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [heroState, setHeroState] = useState<'hook' | 'revealed'>('hook');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReveal = () => {
    setHeroState('revealed');
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setHeroState('hook');
  };

  useEffect(() => {
    if (heroState === 'hook') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [heroState]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroState === 'hook') return;
      const sections = ['hero', 'framing', ...CHAPTERS_DATA.map((c) => c.id)];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroState]);

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#F5F2EA] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#0C0B0A] overflow-x-hidden">
      {/* 
        STATE 1 — THE HOOK (INTERACTIVE OPENING SCREEN)
      */}
      <HeroHookReveal
        heroState={heroState}
        onReveal={handleReveal}
      />

      {/* Editorial Masthead Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onReplayIntro={handleReplayIntro}
        heroState={heroState}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. HERO / INTRODUCTION & 2. PEDAGOGICAL FRAMING */}
        <HeroSection
          onBeginJourney={() => scrollToSection('framing')}
          onNavigateToChapter={scrollToSection}
          heroState={heroState}
          onReplayIntro={handleReplayIntro}
        />

        {/* 3. DIRECT TRANSITION INTO CHAPTER 01 AND SUBSEQUENT CHAPTERS */}
        <div className="divide-y divide-[#23211E]/40">
          {CHAPTERS_DATA.map((chapter) => (
            <ChapterSection
              key={chapter.id}
              chapter={chapter}
              onBackToOverview={() => scrollToSection('hero')}
            />
          ))}
        </div>

        {/* 4. CINEMATIC POST-CREDIT REVEAL — THE FINAL QUESTION */}
        <FinalQuestionSection />

        {/* 5. CINEMATIC ROLLING END CREDITS */}
        <EndCreditsSection />
      </main>

      {/* ACADEMIC COLOPHON & IMPRINT */}
      <JuryFooter
        onScrollToTop={() => scrollToSection('hero')}
      />
    </div>
  );
}

export default App;

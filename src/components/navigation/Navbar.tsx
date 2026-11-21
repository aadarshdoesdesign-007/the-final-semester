import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onReplayIntro?: () => void;
  heroState?: 'hook' | 'revealed';
}

const NAV_ITEMS = [
  { id: 'framing', label: 'THE JOURNEY' },
  { id: 'seminar', label: '01 SEMINAR' },
  { id: 'publication', label: '02 PUBLICATION' },
  { id: 'narrative', label: '03 NARRATIVE' },
  { id: 'internship', label: '04 INTERNSHIP' },
];

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate,
  onReplayIntro,
  heroState = 'revealed'
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#080706]/95 backdrop-blur-md hairline-b py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: SEMESTER 07 — JURY PRESENTATION (Strictly Single-Line) */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center text-left group focus:outline-none cursor-pointer shrink-0"
        >
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#D9D4C7]/90 group-hover:text-[#F5F2EA] transition-colors whitespace-nowrap">
            SEMESTER 07 — JURY PRESENTATION
          </span>
        </button>

        {/* Right Desktop Nav: Revealed only when hero is revealed */}
        {heroState === 'revealed' ? (
          <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#D9D4C7]/80 shrink-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors cursor-pointer py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F5F2EA] font-semibold'
                      : 'hover:text-[#F5F2EA]'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="text-[#8C867A] hover:text-[#C5A059] transition-colors py-1 whitespace-nowrap flex items-center gap-1 cursor-pointer ml-1 font-mono text-[10px]"
                title="Replay opening Hook screen"
                aria-label="Replay opening Hook screen"
              >
                <span className="text-[#C5A059]">↺</span>
                <span>INTRO</span>
              </button>
            )}
          </nav>
        ) : (
          <div className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-[#C5A059]/60">
            [ OPENING THRESHOLD ]
          </div>
        )}

        {/* Mobile menu trigger: Only shown when hero is revealed */}
        {heroState === 'revealed' && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-mono text-[10px] uppercase tracking-widest text-[#F5F2EA] px-2.5 py-1 hairline bg-[#080706]/70 cursor-pointer focus:outline-none shrink-0"
            aria-label="Toggle Navigation Index"
          >
            {menuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        )}
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#080706]/95 backdrop-blur-md hairline-b px-6 py-4 space-y-3 font-mono text-[11px] uppercase tracking-widest animate-in fade-in duration-150">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMenuOpen(false);
              }}
              className={`w-full text-left py-2 flex items-center justify-between hairline-b ${
                activeSection === item.id ? 'text-[#F5F2EA] font-bold' : 'text-[#8C867A]'
              }`}
            >
              <span className="whitespace-nowrap">{item.label}</span>
              <span>→</span>
            </button>
          ))}

          {onReplayIntro && heroState === 'revealed' && (
            <button
              onClick={() => {
                onReplayIntro();
                setMenuOpen(false);
              }}
              className="w-full text-left py-2 flex items-center justify-between hairline-b text-[#C5A059] font-mono text-[10px]"
            >
              <span className="whitespace-nowrap">↺ REPLAY OPENING INTRO</span>
              <span>→</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};


import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRefresh = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <>
    <nav 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'top-6 left-1/2 -translate-x-1/2 w-auto min-w-[300px] max-w-[90vw] rounded-full bg-[#050508]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,242,234,0.15)] py-3 px-8' 
          : 'top-0 w-full bg-transparent py-10'
      }`}
    >
      <div className={`flex items-center ${isScrolled ? 'justify-center gap-8' : 'max-w-7xl mx-auto px-6 justify-between'}`}>
        
        {/* Navigation Links - Left Group */}
        <div className={`hidden md:flex items-center ${isScrolled ? 'space-x-6' : 'space-x-12'} text-[11px] font-bold uppercase tracking-[0.15em]`}>
          <a href="#about" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">About</a>
          <a href="#services" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Services</a>
          {!isScrolled && (
            <>
              <a href="#inquiry" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Inquiry</a>
              <a href="#contact" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Contact</a>
            </>
          )}
        </div>

        {/* Logo */}
        <div className={`${isScrolled ? 'relative' : 'absolute left-1/2 -translate-x-1/2'}`}>
          <div className="flex flex-col items-center group cursor-pointer" onClick={handleRefresh}>
            <h1 className={`${isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'} font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 group-hover:from-[var(--neon-cyan)] group-hover:to-[var(--neon-pink)] transition-all duration-500 whitespace-nowrap`}>
              SHIVRTOWALA
            </h1>
            <div className={`h-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] transition-all duration-500 ${isScrolled ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
          </div>
        </div>

        {/* Navigation Links - Right Group (Only visible when scrolled/island mode for balance) */}
        {isScrolled && (
          <div className="flex items-center space-x-6 text-[11px] font-bold uppercase tracking-[0.15em] hidden md:flex">
            <a href="#inquiry" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Inquiry</a>
            <a href="#contact" className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Contact</a>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden text-white hover:text-[var(--neon-cyan)] transition-colors ${isScrolled ? '' : 'absolute right-6'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>

    {/* Mobile Fullscreen Menu */}
    <div className={`fixed inset-0 z-[100] bg-[#050508]/95 backdrop-blur-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center justify-center md:hidden`}>
      <button 
        onClick={() => setIsMobileMenuOpen(false)}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
            SHIVRTOWALA
          </h2>
          <div className="h-0.5 w-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] mt-2"></div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-[0.2em] text-white/80 hover:text-[var(--neon-cyan)] transition-colors uppercase">About</a>
        <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-[0.2em] text-white/80 hover:text-[var(--neon-cyan)] transition-colors uppercase">Services</a>
        <a href="#inquiry" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-[0.2em] text-white/80 hover:text-[var(--neon-cyan)] transition-colors uppercase">Inquiry</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-[0.2em] text-white/80 hover:text-[var(--neon-cyan)] transition-colors uppercase">Contact</a>
      </div>
    </div>
    </>
  );
};

export default Navbar;

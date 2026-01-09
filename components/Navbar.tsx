
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const handleRefresh = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <nav 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'top-6 left-1/2 -translate-x-1/2 w-auto min-w-[300px] max-w-[90vw] rounded-full bg-[#050508]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,242,234,0.15)] py-3 px-8' 
          : 'top-0 w-full bg-transparent py-10'
      }`}
    >
      <div className={`flex items-center ${isScrolled ? 'justify-center gap-8' : 'max-w-7xl mx-auto px-6 justify-between'}`}>
        
        {/* Navigation Links - Left Group */}
        <div className={`flex items-center ${isScrolled ? 'space-x-6' : 'space-x-12'} text-[11px] font-bold uppercase tracking-[0.15em] ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
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
      </div>
    </nav>
  );
};

export default Navbar;

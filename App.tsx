
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HeritageSection from './components/HeritageSection';
import DefenderShowcase from './components/DefenderShowcase';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      <style>{`
        :root {
          --neon-cyan: #00f2ea;
          --neon-pink: #ff0055;
        }
        body {
          cursor: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z' fill='%2300f2ea' stroke='black' stroke-width='1'/%3E%3C/svg%3E"), auto;
        }
        a, button, input, select, textarea, label, .cursor-pointer {
          cursor: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z' fill='%23ff0055' stroke='black' stroke-width='1'/%3E%3C/svg%3E"), pointer;
        }
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <HeritageSection />

        <section id="services" className="bg-[#050505] py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <header className="mb-16 md:mb-32">
              <div className="flex items-center space-x-6 mb-4 md:mb-8">
                <span className="text-[var(--neon-cyan)] text-xs font-black uppercase tracking-[0.5em] mono">Direct Access</span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[9rem] font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter">
                SERVICE<br /><span className="hero-title">MODULES.</span>
              </h2>
            </header>
            <ServicesGrid />
          </div>
        </section>

        <section id="defender">
          <DefenderShowcase />
        </section>

        <InquirySection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

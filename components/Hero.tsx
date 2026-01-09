
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-[#050508] overflow-hidden flex flex-col justify-center pb-24 px-6 md:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/images/def-1.jpg" 
          alt="Land Rover Defender" 
          className="w-full h-full object-cover opacity-80 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
      </div>
      
      {/* Top Right Logo */}
      <div className="absolute top-6 right-10 z-20">
        <img src="/public/images/logo.png" alt="Logo" className="h-12 w-auto object-contain opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-32">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-10">
            SHIV<br />
            <span className="text-white text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-10">RTOWALA.</span>
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8 max-w-lg">
              Experience the future of automotive administration. Seamless, digital, and powered by intelligent systems.
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-bold text-white/50 tracking-widest uppercase">
            <div className="flex flex-col">
              <span className="text-[var(--neon-cyan)]">LATENCY</span>
              <span>12ms</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--neon-pink)]">ENCRYPTION</span>
              <span>QUANTUM-READY</span>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col items-start lg:items-end gap-10 pr-16">
            <div className="flex flex-col items-center gap-6 group mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1024px-Emblem_of_India.svg.png" 
                alt="Satyamev Jayate" 
                className="h-[28rem] w-auto invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="text-center">
                <span className="block text-sm font-bold text-white uppercase tracking-[0.2em] mb-1">Satyamev Jayate</span>
              </div>
            </div>
            
        </div>
      </div>

    </section>
  );
};

export default Hero;

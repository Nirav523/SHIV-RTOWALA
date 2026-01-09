
import React from 'react';

const HeritageSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#050508] py-20 overflow-hidden relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7">
            <span className="text-[var(--neon-pink)] text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block">Our Evolution</span>
            <h2 className="text-white text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              DIGITAL<br />FIRST.<br />CITIZEN<br />CENTRIC.
            </h2>
            <p className="text-gray-400 text-lg font-medium max-w-xl leading-relaxed">
              Transforming governance through technology. We are redefining how citizens interact with the Regional Transport Office, making every process transparent, fast, and accessible.
            </p>
          </div>

          <div className="md:col-span-5 space-y-12">
            {[
              { year: "2020", text: "Digital Transformation Initiative begins." },
              { year: "2022", text: "Paperless processing implemented statewide." },
              { year: "2025", text: "AI-Powered Concierge System goes live." }
            ].map((item, i) => (
              <div key={i} className="group border-l-2 border-white/10 pl-8 hover:border-[var(--neon-cyan)] transition-all duration-500">
                <span className="block text-3xl font-black text-white group-hover:text-[var(--neon-cyan)] transition-colors mb-2">{item.year}</span>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider group-hover:text-white transition-colors">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;

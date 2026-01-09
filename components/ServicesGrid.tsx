
import React from 'react';

const services = [
  { 
    id: "SVR-01", 
    title: "DRIVING LICENSE", 
    desc: "NEW / RENEWAL / DUPLICATE", 
    img: "/images/dl.jpeg"
  },
  { 
    id: "SVR-02", 
    title: "VEHICLE RC", 
    desc: "TRANSFER / HYPOTHECATION", 
    img: "/images/rc.jpg"
  },
  { 
    id: "SVR-03", 
    title: "RC FITNESS", 
    desc: "EXTENT FITNESS / TEMPORARY", 
    img: "/images/fc.jpg"
  },
  { 
    id: "SVR-04", 
    title: "INSURANCE", 
    desc: "TWO, FOUR HEAVY VEHICLES INSURANCE", 
    img: "/images/ins.jpg"
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 max-w-7xl mx-auto">
      {services.map((s) => (
        <a href="#inquiry" key={s.id} className="block group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-[var(--neon-cyan)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,234,0.15)] hover:-translate-y-2">
          
          {/* Image Section */}
          <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0c] z-10"></div>
            <img 
              src={s.img} 
              alt={s.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-[9px] font-bold text-[var(--neon-cyan)] tracking-widest">{s.id}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 relative">
            <div className="absolute top-0 left-8 w-12 h-1 bg-[var(--neon-pink)] transform -translate-y-1/2 group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
            
            <h3 className="text-2xl font-black tracking-tighter mb-2 text-white group-hover:text-[var(--neon-cyan)] transition-colors">
              {s.title}
            </h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 group-hover:text-gray-300 transition-colors">
              {s.desc}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center justify-center group-hover:text-[var(--neon-cyan)] transition-all text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/60 transition-colors">Secure Link</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServicesGrid;

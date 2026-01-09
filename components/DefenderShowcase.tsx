
import React from 'react';

const DefenderShowcase: React.FC = () => {
  return (
    <div className="w-full bg-[#050508] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="/images/office.png" 
                alt="Cyber Security" 
                className="w-full rounded-3xl shadow-2xl opacity-80 hover:opacity-100 transition-all duration-700"
              />
              {/* <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-[var(--neon-pink)] to-purple-600 rounded-3xl p-8 flex flex-col justify-end group-hover:translate-x-4 group-hover:translate-y-4 transition-transform shadow-2xl">
                <span className="text-white font-black text-4xl leading-tight">SECURE<br />CORE.</span>
              </div> */}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-[var(--neon-cyan)] tracking-[0.4em] uppercase mb-10 block">Infrastructure</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-12 leading-[0.9]">BUILT FOR<br />SPEED.</h2>
            
            <div className="space-y-12">
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Powered by next-generation cloud architecture. We ensure your data is processed with lightning speed and military-grade encryption.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="border-t border-white/10 pt-6">
                  <span className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Uptime</span>
                  <span className="text-4xl font-black text-white">99.9%</span>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <span className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Security</span>
                  <span className="text-4xl font-black text-white">E2E</span>
                </div>
              </div>

              <button className="bg-transparent border border-white/20 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
                View Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefenderShowcase;

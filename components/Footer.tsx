
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050508] pt-24 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--neon-cyan)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--neon-pink)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <img src="/public/images/logo.png" alt="Shivrtowala Logo" className="h-16 w-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              SHIV<span className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">RTOWALA</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-8">
              Redefining automotive governance with speed, security, and digital precision. The future of RTO services is here.
            </p>
            
            {/* Newsletter / Input */}
            <div className="relative max-w-xs group">
              <input 
                type="email" 
                placeholder="Enter email for updates" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-xs text-white focus:border-[var(--neon-cyan)] focus:outline-none transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-white/10 hover:bg-[var(--neon-cyan)] hover:text-black text-white rounded-full w-8 h-8 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Platform</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                <li><a href="#about" className="hover:text-[var(--neon-cyan)] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[var(--neon-cyan)] mr-0 group-hover:mr-2 transition-all"></span>About</a></li>
                <li><a href="#services" className="hover:text-[var(--neon-cyan)] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[var(--neon-cyan)] mr-0 group-hover:mr-2 transition-all"></span>Services</a></li>
                <li><a href="#defender" className="hover:text-[var(--neon-cyan)] transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-[var(--neon-cyan)] mr-0 group-hover:mr-2 transition-all"></span>Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Legal</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                <li><a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                <li className="flex flex-col">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">Helpline</span>
                  <a href="tel:+918141073127" className="hover:text-white transition-colors">+91 81410 73127</a>
                  <a href="tel:+918128155486" className="hover:text-white transition-colors">+91 81281 55486</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">Email</span>
                  <a href="mailto:rtowalashiv@gmail.com" className="hover:text-white transition-colors">RTOWALASHIV@GMAIL.COM</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Official Logo Column */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--neon-cyan)]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-[#0a0a0c] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[var(--neon-cyan)]/30 transition-colors duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1024px-Emblem_of_India.svg.png" 
                  alt="Government of India" 
                  className="h-24 w-auto mb-6 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="space-y-1">
                  <h5 className="text-white font-bold text-xs uppercase tracking-widest">Ministry of Road Transport</h5>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">& Highways</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 w-full">
                  <span className="text-[9px] text-[var(--neon-cyan)] font-bold uppercase tracking-[0.2em]">Official Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              © 2024 Shivrtowala. All rights reserved.
            </p>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">ISO 27001:2022 Certified</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">v2.4.0</span>
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon-cyan)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-cyan)]"></span>
              </span>
              <span className="text-[10px] font-bold text-[var(--neon-cyan)] uppercase tracking-wider">Network Stable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

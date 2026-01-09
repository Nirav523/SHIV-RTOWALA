
import React, { useState } from 'react';

const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Driving License',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch("https://formsubmit.co/ajax/baab82e53c6b426e85cd5f66aa4ed3a8", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        _subject: `New Inquiry: ${formData.service}`,
        _captcha: "false",
        _template: "table"
      }),
      keepalive: true
    });

    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <section id="inquiry" className="bg-[#050508] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[var(--neon-pink)] rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <span className="text-[var(--neon-cyan)] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Connect With Us</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">START<br />APPLICATION.</h2>
          <p className="text-gray-500 font-medium max-w-lg">
            Begin your digital journey. Submit your details below for expedited processing.
          </p>
        </header>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[var(--neon-cyan)] focus:shadow-[0_0_20px_rgba(0,242,234,0.2)] outline-none transition-all text-sm" placeholder="Enter your full name" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[var(--neon-cyan)] focus:shadow-[0_0_20px_rgba(0,242,234,0.2)] outline-none transition-all text-sm" placeholder="name@example.com" />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-2">Service Type</label>            <div className="relative">
              <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[var(--neon-cyan)] focus:shadow-[0_0_20px_rgba(0,242,234,0.2)] outline-none transition-all text-sm appearance-none">
                <option value="Driving License" className="bg-[#050508]">Driving License</option>
                <option value="Vehicle Registration" className="bg-[#050508]">Vehicle Registration</option>
                <option value="Permits & Taxes" className="bg-[#050508]">Permits & Taxes</option>
                <option value="General Inquiry" className="bg-[#050508]">General Inquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
                <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[var(--neon-cyan)] focus:shadow-[0_0_20px_rgba(0,242,234,0.2)] outline-none transition-all text-sm resize-none" placeholder="How can we help you today?"></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[var(--neon-cyan)] to-blue-600 text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_40px_rgba(0,242,234,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? 'Sending...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquirySection;

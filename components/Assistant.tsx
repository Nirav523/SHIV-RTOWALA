
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Define a type for messages for better type safety and unique IDs
interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: Date.now(), role: 'assistant', text: 'COMM-LINK ESTABLISHED. SHIVRTOWALA ASSISTANT STANDING BY. STATE YOUR INQUIRY.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsgText = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: userMsgText }]);
    setInput('');
    setIsLoading(true);

    try {
      // IMPORTANT: Exposing API keys on the client-side is a major security risk.
      // This logic should be moved to a backend API route that your frontend calls.
      // For demonstration, we assume a prefixed environment variable like REACT_APP_GEMINI_API_KEY is set.
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key not found. Ensure the REACT_APP_GEMINI_API_KEY environment variable is set.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash-preview",
        systemInstruction: "You are 'Lumina', the advanced AI concierge for Shivrtowala. Your tone is sophisticated, calm, and futuristic. You help with licenses, registration, and tax. Be concise and elegant.",
      });

      const result = await model.generateContent(userMsgText);
      const aiText = result.response.text() || "CONNECTION INTERRUPTED. RETRY INQUIRY.";
      setMessages(prev => [...prev, { id: Date.now(), role: 'assistant', text: aiText.toUpperCase() }]);
    } catch (error) {
      console.error("Gemini AI Error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      setMessages(prev => [...prev, { id: Date.now(), role: 'assistant', text: `SYSTEM ERROR: ${errorMessage.toUpperCase()}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {/* Tactical Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full transition-all duration-500 ${isOpen ? 'bg-gradient-to-r from-[var(--neon-pink)] to-purple-600 rotate-90 scale-90' : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_30px_rgba(0,242,234,0.4)]'} text-white flex items-center justify-center shadow-2xl`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Comms Terminal */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 md:w-[400px] bg-[#0a0a0c]/90 backdrop-blur-xl rounded-3xl flex flex-col overflow-hidden animate-fade-in border border-white/10 shadow-2xl">
          <div className="bg-white/5 p-4 text-white flex justify-between items-center border-b border-white/5">
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)]">Lumina AI</h3>
              <div className="flex items-center mt-1">
                <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-pulse mr-2"></span>
                <span className="text-[9px] text-gray-400 font-medium tracking-wide">Online</span>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="h-96 overflow-y-auto p-6 space-y-6 bg-transparent"
          >
            {messages.map((m) => (
              <div key={m.id} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-4 text-[12px] font-medium leading-relaxed rounded-2xl max-w-[85%] ${
                  m.role === 'user' 
                  ? 'bg-white/10 text-white border border-white/10 rounded-br-none' 
                  : 'bg-gradient-to-br from-[var(--neon-cyan)]/20 to-purple-500/20 text-white border border-white/5 rounded-bl-none backdrop-blur-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="bg-white/5 rounded-2xl p-4 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/5 flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..." 
              className="flex-1 text-[12px] font-medium py-3 px-4 bg-black/20 rounded-xl border border-white/10 focus:border-[var(--neon-cyan)] outline-none text-white placeholder-white/30 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-white text-black hover:bg-[var(--neon-cyan)] transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;

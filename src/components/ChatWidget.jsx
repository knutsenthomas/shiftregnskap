import React, { useState, useRef, useEffect } from 'react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hei! Velkommen til Shift Regnskap. Hva kan jeg hjelpe deg med i dag?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatBodyRef = useRef(null);

  const scrollToLastMessage = () => {
    setTimeout(() => {
      if (!chatBodyRef.current) return;
      const messageElements = chatBodyRef.current.querySelectorAll('.hkm-msg-item:not(.typing)');
      if (messageElements.length > 0) {
        const lastMsg = messageElements[messageElements.length - 1];
        const targetScrollTop = Math.max(0, lastMsg.offsetTop - 10);
        chatBodyRef.current.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    scrollToLastMessage();

    // Simulated AI bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Takk for din henvendelse! En av våre rådgivere i Lyngdal/Farsund vil følge opp, eller du kan ringe oss direkte på 917 46 381.'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      scrollToLastMessage();
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="hkm-chat-panel fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl border border-surface-highest flex flex-col overflow-hidden"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Header */}
          <div 
            className="px-6 py-4 flex items-center justify-between text-white"
            style={{ backgroundColor: '#1B4965' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                SHIFT
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Shift Assistent</h3>
                <p className="text-xs text-white/80">Shift Regnskap Support</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Lukk chat"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages Body */}
          <div 
            ref={chatBodyRef}
            className="hkm-chat-body flex-1 p-4 space-y-3 bg-surface-low"
            style={{ position: 'relative' }}
          >
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`hkm-msg-item flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white text-on-surface shadow-sm border border-surface-highest rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="hkm-msg-item typing flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-surface-highest">
                  <div className="hkm-typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Form Input Area - Chrome Jitter Fix (display: block) */}
          <form 
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-surface-highest"
          >
            <div style={{ display: 'block', position: 'relative' }}>
              <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Skriv din melding her..."
                className="w-full bg-surface-low border border-surface-highest rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface"
                style={{
                  display: 'block',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary-dark transition-colors"
                aria-label="Send"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #1B4965 0%, #133549 100%)',
          boxShadow: '0 8px 24px rgba(27, 73, 101, 0.4)'
        }}
        aria-label="Åpne chat assistent"
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
};

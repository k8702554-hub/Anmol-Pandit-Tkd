import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-neutral-900/90 hover:bg-red-600 text-white border border-neutral-700 hover:border-red-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none"
          aria-label="Back to Top"
          id="back-to-top-btn"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Red Call Button */}
      <a
        href={`tel:${GYM_DETAILS.phone}`}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 pulse-red relative group"
        aria-label="Call Gym Now"
        id="floating-call-btn"
      >
        <Phone className="w-6 h-6 animate-bounce" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-red-500/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Call: {GYM_DETAILS.phone}
        </span>
      </a>

      {/* Floating Green WhatsApp Button */}
      <a
        href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20want%20to%20know%20more%20about%20joining!`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 text-white border border-emerald-400 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 pulse-green relative group"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-7 h-7 fill-white/20" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
};

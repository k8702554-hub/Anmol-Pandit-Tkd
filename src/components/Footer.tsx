import React from 'react';
import { Phone, MessageSquare, Instagram, MapPin, Clock, Heart, Shield } from 'lucide-react';
import { GYM_DETAILS, GYM_SERVICES, gymAssetImages } from '../data/gymData';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow graphic */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-red-600 to-red-900 border border-red-500/40">
                <img
                  src={gymAssetImages.logo}
                  alt="F3 Gym Emblem"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider text-white">
                F3 <span className="text-red-600">UNISEX</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Agra's premier 24/7 unisex fitness destination. High-end equipment, certified personal coaching by Coach Anmol Pandit TKD, and separate workout spaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-pink-600 text-neutral-300 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-emerald-600 text-neutral-300 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-red-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-red-500 transition-colors">About Gym</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 transition-colors">Gym Services</a>
              </li>
              <li>
                <a href="#trainer" onClick={(e) => handleNavClick(e, '#trainer')} className="hover:text-red-500 transition-colors">Trainer Anmol Pandit</a>
              </li>
              <li>
                <a href="#challenge" onClick={(e) => handleNavClick(e, '#challenge')} className="hover:text-red-500 transition-colors">Monday Challenge</a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-red-500 transition-colors">Member Reviews</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-red-500 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              Gym Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {GYM_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Location */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              Working Hours & Address
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/40">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>24/7 OPEN ALL DAYS</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Gwalior Rd, opp. PS Garden, beside Baba Cycle Store, Rohta, Agra, UP 282009
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={`tel:${GYM_DETAILS.phone}`} className="font-bold text-white hover:text-red-400">
                  {GYM_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 F3 Unisex 24/7 Gym. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built for Speed, Strength & Fitness in Agra</span>
            <Shield className="w-3.5 h-3.5 text-red-500 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};

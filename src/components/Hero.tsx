import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Flame, Clock, Award } from 'lucide-react';
import { GYM_DETAILS, gymAssetImages } from '../data/gymData';

export const Hero: React.FC = () => {
  const handleScrollToEnquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('enquiry');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymAssetImages.heroBg}
          alt="F3 Unisex 24/7 Gym Agra Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/50 text-red-400 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg shadow-red-950/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <Flame className="w-4 h-4 text-red-500" />
              <span>Agra's Most Elite 24/7 Gym</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tight uppercase leading-[0.95]">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-amber-500 glow-text-red">Body</span>,
              <br />
              Transform Your <span className="text-white border-b-4 border-red-600">Life</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              Train Anytime at <strong className="text-white font-semibold">Agra's Premium 24/7 Unisex Gym</strong>. High-end equipment, expert personal coaching, and separate workout spaces.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#enquiry"
                onClick={handleScrollToEnquiry}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-heading font-bold text-white uppercase tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-xl shadow-red-600/40 transition-all duration-300 hover:scale-105 active:scale-95"
                id="hero-join-now-btn"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20am%20interested%20in%20joining!%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-heading font-bold text-white uppercase tracking-wider bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-500/50 rounded-xl shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:scale-105 active:scale-95"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-emerald-200 fill-emerald-200/20" />
                Contact on WhatsApp
              </a>
            </div>

            {/* Feature Highlights Bar */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">24/7 Access</h4>
                  <p className="text-xs text-neutral-400">Workout Any Hour</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Certified Coach</h4>
                  <p className="text-xs text-neutral-400">Personal Mentorship</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Unisex Gym</h4>
                  <p className="text-xs text-neutral-400">Safe & Hygienic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Banner Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-card p-6 rounded-2xl relative border-red-500/30 space-y-5 glow-red shadow-2xl transform hover:rotate-1 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-red-900/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-red-500/50">
                    <img src={gymAssetImages.logo} alt="F3 Gym Emblem" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">F3 Unisex Gym</h3>
                    <p className="text-xs text-red-400 font-semibold">Gwalior Road, Agra</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 animate-pulse">
                  OPEN NOW
                </span>
              </div>

              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex justify-between items-center py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Timings:</span>
                  <span className="font-bold text-white">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Head Coach:</span>
                  <span className="font-bold text-red-400">Anmol Pandit TKD</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Location:</span>
                  <span className="font-bold text-white">Opp. PS Garden, Agra</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-red-950/40 border border-red-600/30 text-xs text-red-200 flex items-center justify-between">
                <span className="font-semibold">⚡ Special Agra Offer:</span>
                <span className="font-bold text-amber-400">Free Trial Class</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

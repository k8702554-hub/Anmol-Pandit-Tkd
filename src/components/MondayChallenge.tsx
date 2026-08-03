import React from 'react';
import { Trophy, Gift, Sparkles, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const MondayChallenge: React.FC = () => {
  return (
    <section id="challenge" className="py-20 relative bg-neutral-950 overflow-hidden border-t border-red-900/40">
      {/* Radial neon red glowing backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-red-500/50 glow-red-lg bg-gradient-to-br from-red-950/60 via-black to-neutral-950 relative overflow-hidden text-center sm:text-left">
          
          {/* Top Decorative Banner Ribbon */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-400 to-red-600 opacity-20 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Animated Trophy Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-red-500 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-black border-2 border-amber-400/80 flex items-center justify-center p-6 shadow-2xl">
                  <Trophy className="w-20 h-20 sm:w-24 sm:h-24 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-bounce duration-1000" />
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Weekly Fitness Contest
              </div>
            </div>

            {/* Right Text Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/30 text-red-400 border border-red-500/40 text-xs font-bold uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>Every Monday Special</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                Monday <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-red-600 glow-text-red">Fitness Challenge</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
                Every Monday, exciting fitness challenges are organized at F3 Unisex Gym! Test your limits, compete with fellow members, and win exciting prizes.
              </p>

              <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/30 text-sm text-neutral-200 space-y-2">
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-amber-400">100% Membership Fee Refund:</strong> Lucky winners can even get their full monthly membership fee refunded!
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Participate, compete, and become stronger every single week.</span>
                </div>
              </div>

              {/* Glowing CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20want%20to%20register%20for%20the%20Monday%20Fitness%20Challenge!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-red-600 to-red-700 hover:from-amber-400 hover:to-red-600 text-white font-heading font-extrabold text-base uppercase tracking-wider rounded-xl shadow-2xl shadow-red-600/50 flex items-center justify-center gap-2 transition-all hover:scale-105 glow-red border border-amber-300/40"
                  id="monday-challenge-btn"
                >
                  <Trophy className="w-5 h-5 text-amber-200" />
                  <span>Join Monday Challenge</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <span className="text-xs text-neutral-400 font-semibold">
                  *Open for all registered F3 Gym members
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

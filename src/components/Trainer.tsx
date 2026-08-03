import React from 'react';
import { Award, Shield, CheckCircle2, MessageSquare, Instagram, Star, Sparkles, Flame } from 'lucide-react';
import { TRAINER_DATA, GYM_DETAILS } from '../data/gymData';

export const Trainer: React.FC = () => {
  return (
    <section id="trainer" className="py-20 relative bg-black overflow-hidden border-t border-neutral-900">
      {/* Decorative gradient blur background */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Coach & Mentor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            Meet Your <span className="text-red-600 glow-text-red">Head Trainer</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-neutral-300">
            Train under Agra's top certified personal fitness coach and martial arts practitioner.
          </p>
        </div>

        {/* Trainer Main Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border-red-500/30 glow-red relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image & Badges */}
            <div className="lg:col-span-5 relative group">
              <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-red-600 via-red-500 to-amber-500 shadow-2xl shadow-red-600/40">
                <img
                  src={TRAINER_DATA.image}
                  alt={TRAINER_DATA.name}
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Bottom Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-red-500/40 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-red-400 font-bold uppercase">Experience</p>
                    <p className="text-base font-heading font-bold text-white">{TRAINER_DATA.experience}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-red-400/40 animate-bounce">
                <Shield className="w-3.5 h-3.5 text-amber-300" />
                Black Belt 1st Dan
              </div>
            </div>

            {/* Right Details Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-red-950/90 text-red-400 text-xs font-bold uppercase tracking-widest mb-2 border border-red-800/40">
                  {TRAINER_DATA.experience}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
                  {TRAINER_DATA.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-red-500 mt-1 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  {TRAINER_DATA.designation}
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {TRAINER_DATA.bio}
              </p>

              {/* Specialties List */}
              <div className="space-y-3 pt-2 border-t border-neutral-800">
                <h4 className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-500" />
                  Key Coaching Specializations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TRAINER_DATA.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {TRAINER_DATA.achievements.map((ach, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Coach%20Anmol,%20I%20want%20personal%20training%20guidance%20at%20F3%20Gym!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105"
                  id="trainer-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Personal Guidance
                </a>

                <a
                  href={GYM_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl border border-neutral-700 flex items-center gap-2 transition-all"
                  id="trainer-instagram-btn"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Watch Reels on Insta
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

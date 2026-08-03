import React from 'react';
import { Dumbbell, Heart, LayoutGrid, UserCheck, Sparkles, ShieldCheck, Users2, CheckCircle2, MapPin } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, GYM_DETAILS } from '../data/gymData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-red-500" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-red-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-red-500" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-red-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-red-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-black overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
            <span>Welcome To F3 Gym</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            About <span className="text-red-600 glow-text-red">F3 Unisex 24/7 Gym</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
            Located on <span className="text-white font-semibold">Gwalior Road opposite PS Garden in Agra</span>, F3 Unisex 24/7 Gym is built for fitness enthusiasts, beginners, and athletes who demand top-tier equipment, uncompromising hygiene, and expert coaching round-the-clock.
          </p>
        </div>

        {/* Introduction Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 rounded-2xl border-neutral-800 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/50 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {getIcon(highlight.icon)}
                  </div>
                  <span className="text-2xl font-heading font-black text-neutral-800 group-hover:text-red-600/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {highlight.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center gap-1.5 text-xs text-red-500 font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Guaranteed</span>
              </div>
            </div>
          ))}

          {/* Location Callout Banner in About */}
          <div className="glass-card p-6 rounded-2xl border-red-600/40 bg-gradient-to-br from-red-950/40 via-black to-neutral-950 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
                <span>Prime Location in Agra</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Suraksha Vihar Colony, Rohta, Agra
              </h3>
              <p className="text-sm text-neutral-300">
                Opposite PS Garden, beside Baba Cycle Store, New Suraksha Vihar Colony, Nagla Padma, Rohta, Agra, UP 282009. Easily accessible with parking available for members.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center justify-between border-t border-red-900/40 pt-4">
              <span className="text-xs font-bold text-neutral-400 uppercase">
                Call Gym: <strong className="text-white">{GYM_DETAILS.phone}</strong>
              </span>
              <a
                href="#contact"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase rounded-lg shadow-md transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

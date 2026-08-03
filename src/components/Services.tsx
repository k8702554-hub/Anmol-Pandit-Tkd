import React from 'react';
import { Activity, TrendingUp, Dumbbell, Flame, Zap, HeartPulse, Check, ArrowRight } from 'lucide-react';
import { GYM_SERVICES, GYM_DETAILS } from '../data/gymData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-8 h-8 text-red-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-red-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-8 h-8 text-red-500" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-red-500" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-red-500" />;
      case 'HeartPulse':
        return <HeartPulse className="w-8 h-8 text-red-500" />;
      default:
        return <Dumbbell className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-20 relative bg-neutral-950 overflow-hidden border-t border-neutral-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
            <span>Our Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            Premium <span className="text-red-600 glow-text-red">Gym Services</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-neutral-300">
            Choose from six specialized training programs designed to help you crush your fitness milestones under expert supervision.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GYM_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-red-600/30 via-neutral-800/40 to-neutral-900/80 hover:from-red-500 hover:via-red-600/50 hover:to-amber-500/80 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-red-600/20"
            >
              <div className="h-full bg-neutral-900/90 backdrop-blur-xl rounded-[15px] p-6 flex flex-col justify-between space-y-6">
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800/60 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-md">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-800 text-red-400 border border-red-900/40">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-red-500 transition-colors">
                    {service.id}. {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="mt-4 space-y-2 border-t border-neutral-800/80 pt-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-neutral-300 font-medium">
                        <span className="w-4 h-4 rounded-full bg-red-950 border border-red-800 text-red-500 flex items-center justify-center mr-2 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service.title)}%20program!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-neutral-800 hover:bg-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-red-600/40"
                >
                  <span>Inquire For {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

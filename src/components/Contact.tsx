import React from 'react';
import { MapPin, Phone, Instagram, MessageSquare, Clock, Navigation, ExternalLink } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-black overflow-hidden border-t border-neutral-900">
      {/* Background glow graphic */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
            <span>Find Us in Agra</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            Contact & <span className="text-red-600 glow-text-red">Location</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-neutral-300">
            Visit F3 Unisex 24/7 Gym in Rohta Agra or call us directly anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border-red-500/30 glow-red flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  Gym Premises
                </span>
                <h3 className="text-3xl font-heading font-black text-white uppercase">
                  {GYM_DETAILS.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-800/60 text-red-500 flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Full Address
                  </h4>
                  <p className="text-sm text-neutral-200 mt-1 leading-relaxed">
                    {GYM_DETAILS.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-800/60 text-red-500 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Call / WhatsApp
                  </h4>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="text-lg font-heading font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
                  >
                    {GYM_DETAILS.phone}
                  </a>
                  <p className="text-xs text-neutral-400">Available 24 Hours For Queries</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-800/60 text-red-500 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Working Hours
                  </h4>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">
                    Open 24 Hours / 7 Days a Week
                  </p>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="pt-6 border-t border-neutral-800/80 space-y-3">
              <a
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-rose-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                id="contact-instagram-btn"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow Trainer Reels On Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20am%20outside/visiting%20the%20gym!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly On WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Maps */}
          <div className="lg:col-span-7 glass-card p-2 rounded-3xl border-red-500/30 overflow-hidden relative min-h-[400px]">
            <iframe
              title="F3 Unisex 24/7 Gym Location Map Agra"
              src={GYM_DETAILS.googleMapEmbedUrl}
              className="w-full h-full min-h-[420px] rounded-2xl border-0 filter grayscale contrast-125 invert opacity-90 hover:opacity-100 transition-opacity"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Floating Callout Badge */}
            <div className="absolute top-6 left-6 p-3 bg-black/90 backdrop-blur-md rounded-xl border border-red-500/40 text-xs text-white flex items-center gap-2 shadow-xl">
              <Navigation className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Gwalior Rd, Nagla Padma, Rohta Agra</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

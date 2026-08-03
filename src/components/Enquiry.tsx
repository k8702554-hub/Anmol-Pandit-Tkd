import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Flame } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Enquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    fitnessGoal: 'Fat Loss',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message text
    const messageText = `Hi F3 Gym Agra! I want to submit an enquiry:\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Fitness Goal:* ${formData.fitnessGoal}\n*Message:* ${formData.message || 'I want to join F3 24/7 Gym.'}`;

    const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Trigger Success animation first, then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }, 800);
  };

  return (
    <section id="enquiry" className="py-20 relative bg-neutral-950 overflow-hidden border-t border-neutral-900">
      {/* Background glow graphic */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>Instant WhatsApp Enquiry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
              Start Your <span className="text-red-600 glow-text-red">Transformation</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>

            <p className="text-base text-neutral-300 leading-relaxed">
              Fill out the form below to connect directly with Coach Anmol Pandit TKD on WhatsApp for membership plans, discount offers, or personal coaching advice.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-neutral-200">Zero Registration Delay & Instant Response</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-neutral-200">24/7 Access Pass & Free Trial Session</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 text-xs text-red-300">
              ⚡ <strong>Direct Phone Support:</strong> Prefer calling instead? Dial <a href={`tel:${GYM_DETAILS.phone}`} className="underline font-bold text-white">{GYM_DETAILS.phone}</a> anytime!
            </div>
          </div>

          {/* Right Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border-red-500/30 glow-red relative">
              
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-red-500" />
                Quick Gym Enquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" id="gym-enquiry-form">
                
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-red-500 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. 08077237136"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-red-500 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Fitness Goal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-red-500 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="fitnessGoal" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Primary Fitness Goal
                    </label>
                    <select
                      id="fitnessGoal"
                      name="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-red-500 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    >
                      <option value="Fat Loss">Fat Loss & Shredding</option>
                      <option value="Muscle & Weight Gain">Muscle & Weight Gain</option>
                      <option value="Strength Training">Strength & Powerlifting</option>
                      <option value="Physical Fitness">General Physical Fitness</option>
                      <option value="Weightlifting">Weightlifting & Martial Arts</option>
                      <option value="Personal Coaching">1-on-1 Personal Coaching</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your fitness schedule or any specific questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-red-500 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-extrabold text-base uppercase tracking-wider rounded-xl shadow-xl shadow-red-600/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  id="enquiry-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Redirecting to WhatsApp...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit & Send via WhatsApp</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal Notification */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card p-8 rounded-3xl border-emerald-500/50 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Enquiry Prepared!</h3>
            <p className="text-xs text-neutral-300">
              Opening WhatsApp with your prefilled details... Contacting F3 Gym Agra!
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-2 bg-emerald-600 text-white font-bold text-xs rounded-lg uppercase"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

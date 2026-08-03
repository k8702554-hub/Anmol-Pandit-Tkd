import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Sparkles, RefreshCw } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>(70);
  const [height, setHeight] = useState<number | ''>(172);
  const [age, setAge] = useState<number | ''>(24);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [bmi, setBmi] = useState<number | null>(23.7);
  const [category, setCategory] = useState<string>('Normal Weight');
  const [recommendation, setRecommendation] = useState<string>('Focus on strength training & lean muscle maintenance.');

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightM = Number(height) / 100;
    const computedBmi = Number((Number(weight) / (heightM * heightM)).toFixed(1));
    setBmi(computedBmi);

    if (computedBmi < 18.5) {
      setCategory('Underweight');
      setRecommendation('Recommended: F3 Weight Gain & Hypertrophy Program with custom meal guidance.');
    } else if (computedBmi >= 18.5 && computedBmi < 24.9) {
      setCategory('Normal Weight');
      setRecommendation('Recommended: F3 Strength Training & Core Physical Conditioning.');
    } else if (computedBmi >= 25 && computedBmi < 29.9) {
      setCategory('Overweight');
      setRecommendation('Recommended: F3 Fat Loss HIIT & Aerobic Cardio Zone.');
    } else {
      setCategory('Obese');
      setRecommendation('Recommended: Personalized 1-on-1 Fat Loss & Functional Rehab Program with Coach Anmol.');
    }
  };

  return (
    <section className="py-16 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-red-500/20 bg-gradient-to-r from-black via-neutral-950 to-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-800/40">
                <Calculator className="w-3.5 h-3.5 text-red-500" />
                <span>Interactive Fitness Tool</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white uppercase tracking-tight">
                Calculate Your <span className="text-red-600">BMI & Ideal Plan</span>
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Check your Body Mass Index (BMI) instantly and discover which training routine fits your body type at F3 Gym Agra.
              </p>

              {/* Result Callout */}
              {bmi !== null && (
                <div className="p-5 rounded-2xl bg-neutral-900 border border-red-500/40 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Your BMI Score:</span>
                    <span className="text-3xl font-heading font-black text-red-500">{bmi}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs border-t border-neutral-800 pt-2">
                    <span className="text-neutral-400">Category:</span>
                    <span className="font-bold text-amber-400 uppercase">{category}</span>
                  </div>

                  <p className="text-xs text-red-300 pt-1 border-t border-neutral-800">
                    💡 <strong>Coach Advice:</strong> {recommendation}
                  </p>

                  <a
                    href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20my%20BMI%20is%20${bmi}%20(${category}).%20Please%20guide%20me%20for%20membership!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase text-center rounded-xl transition-colors mt-2"
                  >
                    Discuss My Plan on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Right Calculator Form */}
            <div className="lg:col-span-7 bg-neutral-900/90 p-6 sm:p-8 rounded-2xl border border-neutral-800">
              <form onSubmit={calculateBmi} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Gender</label>
                    <div className="flex rounded-lg overflow-hidden border border-neutral-700">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`flex-1 py-2 text-xs font-bold uppercase transition-colors ${
                          gender === 'male' ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`flex-1 py-2 text-xs font-bold uppercase transition-colors ${
                          gender === 'female' ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Age (Years)</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Weight (KG)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Height (CM)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Calculate Fitness Score
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

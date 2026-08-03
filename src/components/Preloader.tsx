import React, { useEffect, useState } from 'react';
import { gymAssetImages } from '../data/gymData';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing ring animation */}
        <div className="absolute -inset-4 rounded-full bg-red-600/30 blur-xl animate-pulse"></div>

        <div className="relative w-24 h-24 mb-6 rounded-2xl p-1 bg-gradient-to-tr from-red-600 via-red-500 to-black shadow-2xl shadow-red-600/50 flex items-center justify-center">
          <img
            src={gymAssetImages.logo}
            alt="F3 Gym Logo"
            className="w-full h-full object-cover rounded-xl border border-red-500/30"
          />
        </div>

        <h1 className="text-3xl font-heading font-bold text-white tracking-wider flex items-center gap-1">
          F3 <span className="text-red-600">UNISEX</span> 24/7 GYM
        </h1>

        <p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mt-2">
          Agra's Premium Fitness Arena
        </p>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-neutral-800 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-pulse w-full origin-left duration-1000"></div>
        </div>
      </div>
    </div>
  );
};

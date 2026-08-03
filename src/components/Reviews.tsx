import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/gymData';

export const Reviews: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Auto scroll feature
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId: NodeJS.Timeout;

    if (!isPaused && !isDragging) {
      intervalId = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }, 3500);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, isDragging]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollNav = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -350 : 350;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-20 relative bg-black overflow-hidden border-t border-neutral-900">
      {/* Background glow graphics */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Member Transformations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
              Member <span className="text-red-600 glow-text-red">Reviews & Feedback</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>

            <p className="text-sm sm:text-base text-neutral-300">
              Read 100% verified feedback from male & female fitness members at F3 Unisex 24/7 Gym Agra.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollNav('left')}
              className="p-3.5 rounded-xl bg-neutral-900 hover:bg-red-600 text-white border border-neutral-800 transition-colors shadow-lg focus:outline-none"
              aria-label="Previous Review"
              id="review-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollNav('right')}
              className="p-3.5 rounded-xl bg-neutral-900 hover:bg-red-600 text-white border border-neutral-800 transition-colors shadow-lg focus:outline-none"
              aria-label="Next Review"
              id="review-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 10 Reviews Horizontal Scrollable Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 cursor-grab active:cursor-grabbing scroll-smooth select-none"
        >
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="w-[310px] sm:w-[360px] flex-shrink-0 glass-card p-6 rounded-2xl border-neutral-800 hover:border-red-500/50 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-neutral-800 group-hover:text-red-600/30 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* User Avatar + Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-red-600 to-amber-500 flex-shrink-0 shadow-md">
                    <img
                      src={review.avatar}
                      alt={`${review.name} Cartoon Bodybuilder Avatar`}
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      {review.duration}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-neutral-400 ml-1">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-300 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-md bg-red-950/60 text-red-400 font-bold border border-red-900/40">
                  {review.workoutType}
                </span>

                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <ThumbsUp className="w-3 h-3" />
                  Verified Member
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Helper Note */}
        <div className="text-center mt-6 text-xs text-neutral-500 font-medium">
          💡 Tip: Drag left/right or hover to pause auto-scrolling
        </div>

      </div>
    </section>
  );
};

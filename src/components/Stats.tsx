import React, { useEffect, useState, useRef } from 'react';
import { Users, Flame, Clock, Trophy } from 'lucide-react';
import { GYM_STATS } from '../data/gymData';

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 text-red-500" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-red-500" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-red-500" />;
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-red-500" />;
      default:
        return <Trophy className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section ref={sectionRef} className="relative z-20 py-12 bg-neutral-950 border-y border-red-900/30">
      {/* Background glowing line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {GYM_STATS.map((stat) => (
            <div
              key={stat.id}
              className="glass-card glass-card-hover p-6 rounded-2xl text-center flex flex-col items-center justify-center relative group overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-red-600/10 rounded-full blur-xl group-hover:bg-red-600/20 transition-all"></div>

              <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/40 mb-3 group-hover:scale-110 transition-transform duration-300">
                {getIcon(stat.icon)}
              </div>

              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-0.5">
                <AnimatedCounter target={stat.number} isVisible={isVisible} />
                <span className="text-red-500">{stat.suffix}</span>
              </div>

              <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
};

interface CounterProps {
  target: number;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count.toLocaleString()}</span>;
};

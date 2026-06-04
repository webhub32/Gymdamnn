/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import { coachesData } from '../data';
import { ChevronLeft, ChevronRight, Award, Zap, BrainCircuit } from 'lucide-react';
import HoverTiltCard from './HoverTiltCard';

export default function CoachesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Smooth scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const offset = direction === 'left' ? -380 : 380;
    
    scrollRef.current.scrollTo({
      left: scrollLeft + offset,
      behavior: 'smooth',
    });
  };

  // Check scroll margins
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  return (
    <section id="coaches" className="w-full bg-concrete-900 py-20 sm:py-28 relative overflow-hidden">
      {/* Background aesthetic grid markings */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
              // CHAMPIONSHIP MENTORSHIP
            </span>
            <h2 className="font-display text-5xl sm:text-7xl tracking-tighter text-white uppercase font-black leading-none">
              ELITE COACHING <span className="text-brand-red">/</span> DIRECTIVES
            </h2>
          </div>

          {/* Navigation Arrows for Horizontal Scroll block */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 border transition-all hoverable rounded-none ${
                canScrollLeft
                  ? 'border-brand-red text-white bg-brand-red/10 cursor-pointer hover:bg-brand-red'
                  : 'border-zinc-800 text-zinc-600 cursor-not-allowed bg-transparent'
              }`}
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 border transition-all hoverable rounded-none ${
                canScrollRight
                  ? 'border-brand-red text-white bg-brand-red/10 cursor-pointer hover:bg-brand-red'
                  : 'border-zinc-800 text-zinc-600 cursor-not-allowed bg-transparent'
              }`}
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Strip Container */}
      <div className="w-full pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2))] pr-4 pointer-events-auto overflow-hidden relative z-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {coachesData.map((coach, index) => (
            <div
              key={coach.id}
              className="w-[310px] sm:w-[360px] shrink-0 snap-start"
            >
              <HoverTiltCard maxRotation={8} className="h-[460px] sm:h-[500px]">
                <div className="relative w-full h-full bg-concrete-800 border border-white/5 overflow-hidden group">
                  
                  {/* Photo with high-contrast desaturation to color */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-60 transition-all duration-700 ease-out"
                    />
                    {/* Shadow overlay split */}
                    <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/40 to-transparent"></div>
                  </div>

                  {/* Absolute Corner ID Tag */}
                  <div className="absolute top-4 left-4 z-10 font-mono text-[9px] text-zinc-400 bg-black/50 px-2 py-1 uppercase tracking-widest border border-white/5">
                    ID // FORGE_{String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Coach Credentials Top Right */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 items-end">
                    {coach.credentials.slice(0, 2).map((cred, i) => (
                      <span key={i} className="text-[9px] font-mono tracking-wide text-zinc-400 bg-brand-red/10 border border-brand-red/30 px-1.5 py-0.5 rounded-none uppercase">
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Name overlay floating layout */}
                  <div className="absolute inset-0 z-10 p-6 sm:p-8 flex flex-col justify-end">
                    
                    {/* Specialty row */}
                    <div className="flex items-center gap-1.5 mb-1 bg-brand-red/10 border border-brand-red/20 py-1 px-2.5 w-max">
                      <Zap className="w-3.5 h-3.5 text-brand-red animate-pulse shrink-0" />
                      <span className="font-mono text-[9px] tracking-widest text-brand-red uppercase">
                        {coach.signatureSpecialty}
                      </span>
                    </div>

                    {/* Massive Display Name */}
                    <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wider uppercase leading-none font-black drop-shadow-md group-hover:text-brand-red transition-colors duration-300">
                      {coach.name}
                    </h3>
                    
                    {/* Role subline */}
                    <p className="text-zinc-400 text-xs sm:text-sm font-mono tracking-widest mt-1 uppercase">
                      {coach.role}
                    </p>

                    {/* Bio Drawer triggers on card hover */}
                    <div className="mt-4 pt-4 border-t border-white/10 overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-zinc-300 text-xs leading-relaxed">
                        {coach.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverTiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

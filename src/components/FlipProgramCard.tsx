/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Program } from '../types';
import { Calendar, Flame, Check, ShieldAlert } from 'lucide-react';

interface FlipProgramCardProps {
  program: Program;
}

export default function FlipProgramCard({ program }: FlipProgramCardProps) {
  const [flipped, setFlipped] = useState(false);

  // Intensity color generator
  const getIntensityBadge = (intensity: Program['intensity']) => {
    switch (intensity) {
      case 'ELITE':
        return (
          <span className="flex items-center gap-1 text-xs text-brand-red bg-brand-red/10 border border-brand-red/30 px-2.5 py-1 uppercase tracking-widest font-display">
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" /> ELITE LEVEL
          </span>
        );
      case 'HIGH':
        return (
          <span className="flex items-center gap-1 text-xs text-amber-500 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 uppercase tracking-widest font-display">
            <Flame className="w-3.5 h-3.5" /> HIGH OUTPUT
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 uppercase tracking-widest font-display">
            <Flame className="w-3.5 h-3.5" /> ACTIVE PREP
          </span>
        );
    }
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="relative w-full h-[450px] cursor-pointer group perspective-1000 select-none"
    >
      {/* 3D Flipping Card Body */}
      <div
        className={`w-full h-full duration-700 preserve-3d transition-transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE (Visual Card) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-none border border-white/5 overflow-hidden">
          {/* Unsplash Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={program.image}
              alt={program.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
            />
            {/* Soft dark vignette overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-concrete-900 via-concrete-900/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Card Front Content */}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
            {/* Top Indicator */}
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                [ BLOCK_0{program.id === 'powerlifting' ? '1' : program.id === 'hiit' ? '2' : program.id === 'combat' ? '3' : '4'} ]
              </span>
              {getIntensityBadge(program.intensity)}
            </div>

            {/* Bottom Header */}
            <div>
              <div className="w-12 h-1 bg-brand-red mb-3 group-hover:w-20 transition-all duration-300"></div>
              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-widest font-medium leading-none drop-shadow-md">
                {program.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 line-clamp-2">
                {program.description}
              </p>
              
              {/* Tap/Hover prompt */}
              <div className="mt-4 flex items-center gap-2 text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                Tap / Hover for details
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE (Details Card) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border border-brand-red/20 bg-concrete-800 p-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle concrete texture background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-3">
                <h4 className="font-display text-2xl tracking-widest text-brand-red font-medium">
                  SPECIFICATIONS
                </h4>
                <div className="font-mono text-[10px] text-zinc-400">
                  {program.scheduleFreq.split('(')[0].trim()}
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic border-l-2 border-brand-red pl-3 bg-zinc-900/45 py-2">
                "{program.description.split('.')[0]}."
              </p>

              {/* Bullet Benefits */}
              <div className="space-y-3">
                <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  Engineered Focus Metrics:
                </p>
                {program.detailedBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="p-0.5 rounded-full bg-brand-red/10 border border-brand-red/30 mt-0.5 shrink-0 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brand-red" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info */}
            <div className="border-t border-white/5 pt-4 mt-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                <Calendar className="w-4 h-4 text-brand-red shrink-0" />
                <span>{program.scheduleFreq}</span>
              </div>
              <button className="w-full mt-4 py-2 border border-brand-red/30 text-white hover:text-brand-red-light bg-brand-red/15 hover:bg-brand-red/25 transition-all text-xs tracking-widest font-mono uppercase">
                Enquire Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

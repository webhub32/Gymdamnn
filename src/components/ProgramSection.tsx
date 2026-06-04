/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { programsData } from '../data';
import FlipProgramCard from './FlipProgramCard';

export default function ProgramSection() {
  return (
    <section id="programs" className="w-full bg-concrete-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-white/[0.02] pointer-events-none" />

      {/* Decorative vertical background index numbers */}
      <div className="absolute right-8 top-12 font-mono text-[9px] text-zinc-800 tracking-widest pointer-events-none select-none uppercase hidden sm:block">
        PROGRAMS_INDEX // GRID_COORDINATES // FORGE_HQ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="mb-16 md:mb-20">
          <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            // OPERATIONAL DISCIPLINES
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display text-5xl sm:text-7xl tracking-tighter text-white uppercase font-black leading-none">
              RECRUIT DIRECTIVES <span className="text-zinc-650">/</span> SYSTEMS
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm border-l border-brand-red pl-4 py-1 leading-relaxed">
              Every training pathway is calculated, high-octane, and outcome-focused. We do not support wellness playgrounds. Choose your discipline, commit fully, and scale your peaks.
            </p>
          </div>
          <div className="w-full h-[1px] bg-white/5 mt-8"></div>
        </div>

        {/* 2x2 Grid of 3D Flip Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {programsData.map((program) => (
            <div key={program.id} className="w-full">
              <FlipProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* Dynamic Warning Warning Text below programs */}
        <div className="mt-16 sm:mt-24 w-full border border-brand-red/10 bg-brand-red/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-none">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 bg-brand-red/10 border border-brand-red/20 items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h4 className="font-display text-white text-lg sm:text-xl tracking-wider uppercase font-bold leading-none">
                ATTENTION: NO SUBSCRIPTIONS OR SUB-TIERS
              </h4>
              <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed font-sans max-w-xl">
                We believe in straightforward iron and direct sweat. You do not pay for useless app features or vanity towel tiers. All packages are based on absolute training terms.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-mono text-xs tracking-widest uppercase transition-colors text-center shrink-0 font-medium hoverable"
          >
            Enquire Direct Membership
          </a>
        </div>

      </div>
    </section>
  );
}

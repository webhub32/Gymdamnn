/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { galleryData } from '../data';
import { Focus } from 'lucide-react';

export default function GallerySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Responsive bento grid layout mappings for each index
  const gridClasses = [
    'md:col-span-2 md:row-span-1 h-[250px] sm:h-[300px]',
    'md:col-span-1 md:row-span-2 h-[524px] sm:h-[624px]', // tall card
    'md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]',
    'md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]',
    'md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]',
    'md:col-span-2 md:row-span-1 h-[250px] sm:h-[300px]'
  ];

  return (
    <section id="vibe" className="w-full bg-concrete-950 border-t border-b border-white/5 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
              // ATMOSPHERE CONTROL
            </span>
            <h2 className="font-display text-5xl sm:text-7xl tracking-tighter text-white uppercase font-black leading-none">
              THE VIBE <span className="text-zinc-600">/</span> FORGE WORLD
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md md:text-right border-l md:border-l-0 md:border-r-2 border-brand-red pl-4 md:pl-0 md:pr-4 py-1">
            Raw, unfiltered athletic devotion. We leave apologies at the curb. This is the habitat where metal undergoes extreme pressure to forge steel.
          </p>
        </div>
      </div>

      {/* Full Bleed Grid Wrapper */}
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((item, index) => {
            const layoutClass = gridClasses[index] || 'md:col-span-1 h-[300px]';
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative overflow-hidden group select-none border border-white/5 ${layoutClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    isHovered 
                      ? 'scale-110 grayscale-0 brightness-100' 
                      : 'scale-100 grayscale brightness-35'
                  }`}
                />

                {/* Grid Overlay Frame / Cross lines */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-red/30 transition-colors duration-500 pointer-events-none z-10" />

                {/* Technical Coordinates overlay */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-zinc-500 tracking-widest z-10">
                  [ LOC.FLR_{index + 1} // SYS_PASS ]
                </div>

                {/* Static indicator badge inside card */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-0.5 font-mono text-[9px] tracking-widest border transition-all duration-500 uppercase ${
                    isHovered 
                      ? 'text-brand-red border-brand-red bg-brand-red/10' 
                      : 'text-zinc-500 border-zinc-800 bg-transparent'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Hover reveal drawer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-6 z-10">
                  <div className={`transition-all duration-500 transform ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Focus className="w-3.5 h-3.5 text-brand-red" />
                      <span className="font-mono text-[10px] tracking-widest text-brand-red uppercase">
                        FORGE CAPTURE SECURITY
                      </span>
                    </div>
                    <h3 className="font-display text-2xl tracking-widest text-white uppercase font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

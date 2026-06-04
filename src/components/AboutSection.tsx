/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Dumbbell, Activity, Compass } from 'lucide-react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate depth translation (distance since section top hit viewport bottom)
      const scrolledPast = window.innerHeight - rect.top;
      if (scrolledPast > 0 && rect.top < window.innerHeight) {
        setScrollY(scrolledPast);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full bg-concrete-900 py-24 sm:py-36 relative overflow-hidden">
      {/* Editorial markings in absolute position */}
      <div className="absolute top-[10%] left-0 w-32 h-[1px] bg-brand-red/20" />
      <div className="absolute top-1/2 right-0 w-16 h-[1px] bg-brand-red/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Editorial story text */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
                // CRUSHING ORDINARY MEDIASTINES
              </span>
              <h2 className="font-display text-5xl sm:text-7xl tracking-tighter text-white uppercase font-black leading-none mb-6">
                RAW PRESSURE <br/>
                <span className="text-brand-red">FORGES CHROME STEEL</span>
              </h2>
              <div className="w-20 h-1.5 bg-brand-red"></div>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-100 text-lg sm:text-xl font-light leading-relaxed font-sans italic">
                "We built FORGE Athletics with a singular, clear realization: strength and athletic peak state cannot be coddled into existence. It takes honest effort under real physical load."
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                FORGE began in 2014 as an underground, invite-only powerlifting club inside a cold warehouse behind the Chicago rail yards. We wanted zero fluff, zero wellness lounges, and zero electronic distraction. Our focus was purely compound mechanics, heavy iron plates, loud chalk slaps, and authentic coaching mentorship.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Over the past twelve years, we built a fortress for powerlifters, elite combat fighters, and peak metabolic conditioned athletes alike. We are not a chain option. We are a family bound by the sound of falling steel and an unremitting urge for ultimate self-mastery.
              </p>
            </div>

            {/* Pillar badges below editorial */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-brand-red/40 bg-brand-red/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-display text-sm text-white uppercase font-bold tracking-widest leading-none">NO SUBSIDIARY BS</h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Strict Focus Standard</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-brand-red/40 bg-brand-red/5 flex items-center justify-center shrink-0">
                  <Dumbbell className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-display text-sm text-white uppercase font-bold tracking-widest leading-none">PLATFORM READY</h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Championship Rigs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Overlapping images with high performance Parallax Offset */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[600px] w-full flex items-center justify-center select-none">
            
            {/* Background Image 1 (Farthest back / Slower parallax shift down) */}
            <div 
              className="absolute w-[240px] h-[310px] sm:w-[300px] sm:h-[400px] bg-zinc-800 z-0 border border-white/5"
              style={{
                transform: `translate3d(-60px, ${-60 + scrollY * 0.06}px, 0)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                alt="Forge Platform Focus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-30"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-zinc-400">
                [ TRANSFORMATION_STAGE_A ]
              </div>
            </div>

            {/* Foreground Image 2 (Overlapping Left / Medium Parallax shift up) */}
            <div 
              className="absolute w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] bg-zinc-700 z-10 border border-brand-red/20 shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
              style={{
                transform: `translate3d(85px, ${30 - scrollY * 0.08}px, 0)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
                alt="Metabolic conditioning rope workout"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-40 hover:grayscale-0 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-red/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 font-mono text-[8px] text-white">
                COND // STAGE_B_HYBRID
              </div>
            </div>

            {/* Core Highlight Image 3 (Centered Right Front / Custom Fast Parallax displacement) */}
            <div 
              className="absolute w-[140px] h-[180px] sm:w-[180px] sm:h-[230px] bg-zinc-600 z-20 border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
              style={{
                transform: `translate3d(-80px, ${160 + scrollY * 0.09}px, 0)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                alt="Chrome dumbbell load rack"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 brightness-45"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
              {/* Technical tag overlay */}
              <div className="absolute top-2 right-2 font-mono text-[8px] text-zinc-500">
                #003_LOAD
              </div>
            </div>

            {/* Centre Crosshair overlaying raw layers */}
            <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center opacity-40">
              <div className="w-10 h-[1px] bg-brand-red/60 absolute" />
              <div className="h-10 w-[1px] bg-brand-red/60 absolute" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

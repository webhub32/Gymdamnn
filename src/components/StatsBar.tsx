/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { statsData } from '../data';
import HoverTiltCard from './HoverTiltCard';

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  // Trigger counters when the stats bar comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-concrete-950 border-t border-b border-white/5 py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Absolute coordinates background markers */}
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-700 pointer-events-none select-none uppercase tracking-widest hidden sm:block">
        GLOBAL_METRICS // CORE_DURABILITY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="h-full">
              <HoverTiltCard maxRotation={14} className="h-full">
                <div className="relative h-full bg-concrete-800/60 hover:bg-concrete-800 p-6 sm:p-8 border border-white/5 transition-all duration-300 rounded-none flex flex-col justify-between group">
                  {/* Visual Accent Top Line */}
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-red group-hover:w-16 transition-all duration-300"></div>

                  {/* Counter */}
                  <div className="text-left">
                    <span className="font-display text-4xl sm:text-6xl text-white tracking-widest font-black leading-none flex items-baseline">
                      <CounterTicker
                        target={stat.numericTarget}
                        trigger={startCount}
                        suffix={stat.suffix}
                      />
                    </span>
                  </div>

                {/* Metric Label */}
                <div className="mt-4 border-t border-white/5 pt-4">
                  <p className="font-mono text-[10px] sm:text-xs text-zinc-400 tracking-wider uppercase leading-snug">
                    {stat.label}
                  </p>
                </div>

                {/* Grid layout decoration in background */}
                <div className="absolute right-4 bottom-4 text-white/[0.015] font-black text-6xl pointer-events-none font-mono">
                  // {stat.id.split('-')[1]}
                </div>
              </div>
            </HoverTiltCard>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CounterTickerProps {
  target: number;
  trigger: boolean;
  suffix: string;
}

// Micro counting ticks system
function CounterTicker({ target, trigger, suffix }: CounterTickerProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    const duration = 1800; // ms
    const increment = Math.max(1, Math.floor(end / 60)); // Steps
    const stepTime = Math.abs(Math.floor(duration / (end / increment)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  // Readability formatting for thousands e.g. "3,400"
  const formattedCount = count >= 1000 
    ? count.toLocaleString('en-US') 
    : count;

  return (
    <>
      {formattedCount}{suffix}
    </>
  );
}

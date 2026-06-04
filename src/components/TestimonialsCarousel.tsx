/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { testimonialsData } from '../data';
import { Quote, ArrowLeft, ArrowRight, Dot } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function TestimonialsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 9000);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const activeTest = testimonialsData[activeIdx];

  // Motion variants for slide transition
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 80 : -80,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -80 : 80,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="reviews" className="w-full bg-concrete-minimum py-24 sm:py-32 border-t border-b border-white/5 relative overflow-hidden">
      {/* Cinematic abstract lighting blob right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      {/* Grid Coordinates watermark */}
      <div className="absolute bottom-6 left-6 font-mono text-[8px] text-zinc-600 tracking-widest pointer-events-none">
        GRID_LOC // SECT_REVIEWS_04 // TRANS_SMOOTH
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            // UNFILTERED PLATFORM PERFORMANCE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight text-white uppercase font-bold leading-none">
            REVIEWS FROM THE PLATFORM
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mt-4" />
        </div>

        {/* Quotes Display Box */}
        <div className="relative min-h-[360px] sm:min-h-[280px] flex flex-col justify-between">
          
          {/* Giant Decorative Quotation Mark */}
          <div className="absolute -top-12 -left-4 sm:-left-12 text-zinc-800/15 pointer-events-none select-none z-0">
            <Quote className="w-24 h-24 sm:w-36 sm:h-36 stroke-[0.35]" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTest.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10 w-full flex flex-col justify-center"
            >
              <p className="font-sans text-lg sm:text-xl md:text-2xl text-zinc-100 leading-relaxed font-light tracking-wide text-center italic">
                "{activeTest.quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
                {/* Micro avatar */}
                <div className="w-12 h-12 rounded-none p-0.5 border border-brand-red">
                  <img
                    src={activeTest.avatar}
                    alt={activeTest.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-110"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-display text-white text-xl tracking-wider uppercase font-bold leading-none">
                    {activeTest.author}
                  </h4>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
                    <span className="text-[10px] font-mono tracking-wider text-brand-red uppercase">
                      {activeTest.achievement}
                    </span>
                    <span className="text-zinc-600 text-xs hidden sm:inline">|</span>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                      {activeTest.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 sm:mt-16 border-t border-white/5 pt-6">
            
            {/* Dots Selector indicator */}
            <div className="flex gap-1 items-center">
              {testimonialsData.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(idx > activeIdx ? 'right' : 'left');
                    setActiveIdx(idx);
                  }}
                  className={`w-2.5 h-2.5 transition-all ${
                    idx === activeIdx 
                      ? 'bg-brand-red scale-125' 
                      : 'bg-zinc-800 hover:bg-zinc-600'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Custom chevron vectors */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all rounded-none hoverable"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all rounded-none hoverable"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

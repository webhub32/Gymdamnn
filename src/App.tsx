/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame } from 'lucide-react';
import Header from './components/Header';
import ThreeHeroCanvas from './components/ThreeHeroCanvas';
import MagneticCTA from './components/MagneticCTA';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ProgramSection from './components/ProgramSection';
import CoachesSection from './components/CoachesSection';
import GallerySection from './components/GallerySection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FadeInUp from './components/FadeInUp';

export default function App() {
  // Smooth scroll helper for conversion button
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-concrete-100 bg-concrete-900 border-none select-none text-zinc-100 overflow-hidden">
      
      {/* 1. Global Custom Crosshair Cursor */}
      <CustomCursor />

      {/* 2. Top Navigation Bar */}
      <Header />

      {/* 3. Hero Section (Full Viewport Height) */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background 3D Canvas rendering the metallic dumbbell and particles */}
        <ThreeHeroCanvas />

        {/* Ambient Darkened Vignette layers to highlight typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-concrete-900/40 via-concrete-900/60 to-concrete-950/95 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_100%) pointer-events-none z-0"></div>

        {/* Decorative Grid coordinates indicators */}
        <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] tracking-widest text-zinc-500/80 z-20 uppercase hidden sm:block">
          GRID_LAT // 41.8781° N, 87.6298° W // MON_A_STRENGTH
        </div>
        <div className="absolute top-28 right-6 sm:right-12 font-mono text-[9px] tracking-widest text-zinc-500/80 z-20 uppercase hidden sm:block">
          BASE // CHICAGO INDUSTRIAL // CHG_PORT_3000
        </div>

        {/* Hero Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-20 select-none">
          
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/35 text-brand-red font-mono text-[10px] tracking-widest uppercase mb-6 animate-pulse">
            <Flame className="w-4 h-4 text-brand-red" />
            <span>ESTABLISHED IN 2014 // HARD WORK STANDARD</span>
          </div>

          {/* Slogan Pairings */}
          <div className="space-y-2">
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl tracking-tighter text-white font-black leading-none uppercase drop-shadow-lg select-none">
              FORGE <span className="text-zinc-450 text-stroke border-zinc-800">ATHLETICS</span>
            </h1>
            <p className="font-display text-xl sm:text-3xl md:text-4xl text-zinc-350 tracking-[0.25em] sm:tracking-[0.38em] uppercase font-light">
              WHERE IRON MEETS WILL
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-red mx-auto my-8"></div>

          {/* Concise Call to Action (Magnetic hover trigger) */}
          <div className="flex justify-center mt-4">
            <MagneticCTA label="START TRAINING" onClick={scrollToContact} />
          </div>

        </div>

        {/* Floating bottom indicators scroll down button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60">
          <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
            SCROLL TO PLATES
          </span>
          {/* Animated bouncy chevron indicator */}
          <a
            href="#about"
            className="w-5 h-8 border border-zinc-700 hover:border-brand-red p-1 rounded-full flex items-start justify-center transition-all hoverable"
          >
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-bounce mt-0.5" />
          </a>
        </div>
      </section>

      {/* 4. Stats Bar Section */}
      <StatsBar />

      {/* 5. Editorial About Section */}
      <FadeInUp delayMs={100}>
        <AboutSection />
      </FadeInUp>

      {/* 6. Programs Section */}
      <FadeInUp delayMs={100}>
        <ProgramSection />
      </FadeInUp>

      {/* 7. Coaches Horizontal Scroll Strip */}
      <FadeInUp delayMs={100}>
        <CoachesSection />
      </FadeInUp>

      {/* 8. Vibe Full-Bleed Gallery */}
      <FadeInUp delayMs={100}>
        <GallerySection />
      </FadeInUp>

      {/* 9. Cinematic Testimonials Carousel */}
      <FadeInUp delayMs={100}>
        <TestimonialsCarousel />
      </FadeInUp>

      {/* 10. Contact coordinates section */}
      <FadeInUp delayMs={100}>
        <ContactSection />
      </FadeInUp>

      {/* 11. Minimal Footer */}
      <Footer />

    </div>
  );
}

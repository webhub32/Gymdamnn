/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Flame, ShieldAlert } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'CHRONICLE', href: '#about' },
    { name: 'DISCIPLINES', href: '#programs' },
    { name: 'INSTRUCTORS', href: '#coaches' },
    { name: 'THE VIBE', href: '#vibe' },
    { name: 'COORDINATES', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-concrete-900/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg shadow-black/30'
            : 'bg-transparent py-6 border-b border-white/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a
            href="#home"
            className="flex items-center gap-2 group hoverable font-display tracking-widest text-2xl sm:text-3xl uppercase font-black"
          >
            <div className="relative flex items-center justify-center w-8 h-8 bg-brand-red text-white">
              <span className="font-display font-black text-xl italic mb-0.5">F</span>
              {/* Outer micro-corners decoration */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors pointer-events-none" />
            </div>
            <span className="text-white group-hover:text-brand-red transition-colors duration-300">
              FORGE <span className="text-brand-red font-light group-hover:text-white transition-colors">ATHLETICS</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Middle) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-zinc-400 hover:text-white hover:border-b-2 hover:border-brand-red hover:pb-1 tracking-widest transition-all hoverable uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="hoverable px-5 py-2.5 bg-transparent border border-brand-red hover:border-brand-red-light text-white hover:text-brand-red hover:bg-brand-red/5 font-mono text-xs tracking-widest uppercase transition-all duration-300 font-medium"
            >
              JOIN PLATFORM
            </a>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors hoverable"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-concrete-950/98 backdrop-blur-lg flex flex-col justify-between pt-28 pb-10 px-8 transition-all duration-500 md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-6">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-brand-red mb-2 block">// MAIN DIRECTORY</span>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl text-zinc-300 hover:text-white font-bold tracking-wider hover:translate-x-2 transition-all block uppercase"
            >
              <span className="text-zinc-650 text-2xl font-mono mr-3 font-light">0{idx + 1}.</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile footer coordinates */}
        <div>
          <div className="h-[1px] bg-white/5 w-full mb-6"></div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center block py-4 bg-brand-red text-white hoverable font-display text-xl tracking-widest uppercase font-bold mb-6"
          >
            JOIN PLATFORM COORDS
          </a>
          
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest justify-center">
            <ShieldAlert className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>Operational Base Status: Live / Active</span>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Youtube, Twitter, Globe, Lock } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'X (Twitter)' },
    { icon: <Globe className="w-4 h-4" />, href: '#', label: 'Spotify Radio' },
  ];

  return (
    <footer className="w-full bg-concrete-950 border-t border-white/5 py-12 relative overflow-hidden">
      {/* Decorative vertical lines in backgrounds */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/5 pb-8 mb-8">
          
          {/* Logo brand */}
          <div className="text-center lg:text-left">
            <a
              href="#home"
              className="flex items-center justify-center lg:justify-start gap-2 hoverable font-display tracking-widest text-2xl uppercase font-black"
            >
              <div className="flex items-center justify-center w-7 h-7 bg-brand-red text-white">
                <span className="font-display font-black text-lg italic mb-0.5">F</span>
              </div>
              <span className="text-white">
                FORGE <span className="text-brand-red font-light">ATHLETICS</span>
              </span>
            </a>
            <p className="font-display text-sm tracking-[0.25em] text-zinc-500 uppercase mt-2">
              WHERE IRON MEETS WILL <span className="text-brand-red font-mono font-light">//</span> CHICAGO IL
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all duration-350 rounded-none flex items-center justify-center hoverable"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom copyright and technical markers */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} FORGE ATHLETICS. NO SUBSCRIPTION TRAPS. TERMS & RESULTS SECURED.
          </div>
          <div className="flex items-center justify-center gap-1.5 text-zinc-500">
            <Lock className="w-3 h-3 text-brand-red shrink-0" />
            <span>SECURE SYSTEM PROTOCOL v4.12</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

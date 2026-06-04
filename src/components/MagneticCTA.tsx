/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface MagneticCTAProps {
  label: string;
  onClick?: () => void;
}

export default function MagneticCTA({ label, onClick }: MagneticCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [embers, setEmbers] = useState<{ id: number; left: number; delay: number; scale: number; speed: number }[]>([]);

  // Generate background embers
  useEffect(() => {
    // Generate a fixed set of random embers once to prevent hydration flickering and maintain consistency
    const generatedEmbers = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0% to 100% width
      delay: Math.random() * 2.5, // delay in seconds
      scale: 0.35 + Math.random() * 0.85,
      speed: 1.5 + Math.random() * 1.5,
    }));
    setEmbers(generatedEmbers);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !buttonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = buttonRef.current.getBoundingClientRect();

    // Mouse coordinates relative to center of container
    const x = e.clientX - containerRect.left - containerRect.width / 2;
    const y = e.clientY - containerRect.top - containerRect.height / 2;

    // Apply magnetic pull intensity (35% threshold pull)
    setCoords({ x: x * 0.38, y: y * 0.38 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-10 flex justify-center items-center select-none"
    >
      {/* Background Ember Layer behind the button, active especially when hovered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        {/* Deep fire radial glow core */}
        <div 
          className={`absolute w-48 h-20 rounded-full bg-brand-red/20 blur-3xl transition-opacity duration-500 ${
            isHovered ? 'opacity-100 scale-125' : 'opacity-60 scale-100'
          }`}
        />

        {/* Embers Generator */}
        <div className="absolute bottom-5 w-56 h-36 border-b border-brand-red/10 pointer-events-none">
          {isHovered && embers.map((ember) => (
            <div
              key={ember.id}
              className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-linear-to-t from-orange-500 to-brand-red animate-ember"
              style={{
                left: `${ember.left}%`,
                animationDelay: `${ember.delay}s`,
                transform: `scale(${ember.scale})`,
                animationDuration: `${ember.speed}s`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 8px #e74c3c, 0 0 15px #f39c12',
              }}
            />
          ))}
        </div>
      </div>

      {/* Actual Magnetic Button */}
      <button
        ref={buttonRef}
        onClick={onClick}
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          transition: isHovered ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        className="relative z-10 hoverable px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white font-display text-lg tracking-widest font-medium uppercase transition-colors duration-300 shadow-[0_0_25px_rgba(192,57,43,0.35)] hover:shadow-[0_0_40px_rgba(231,76,60,0.65)] hover:border-white/20 border border-transparent rounded-none flex items-center gap-3 overflow-hidden"
      >
        {/* Subtle sliding reflection overlay on hover */}
        <span className="absolute inset-0 w-1/3 h-full bg-white/10 skew-x-[-30deg] -translate-x-[200%] group-hover:animate-shine z-0" />
        
        {/* Bullet design touch */}
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        
        <span className="relative z-10">{label}</span>
        
        <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isHovered ? 'translate-x-1.5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}

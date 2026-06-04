/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Detect mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    // Detect if hover target is interactive
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.hoverable') || 
        target.getAttribute('role') === 'button';

      setHovered(!!isHoverable);
    };

    const handleMouseLeaveWindow = () => {
      setVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
      {/* Outer Crosshair Circle */}
      <div
        className="fixed -left-4 -top-4 w-8 h-8 rounded-full border border-brand-red transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${hovered ? 1.7 : 1})`,
        }}
      >
        {/* Crosshair Ticks */}
        <div className="absolute w-[2px] h-[5px] bg-brand-red -top-1"></div>
        <div className="absolute w-[2px] h-[5px] bg-brand-red -bottom-1"></div>
        <div className="absolute w-[5px] h-[2px] bg-brand-red -left-1"></div>
        <div className="absolute w-[5px] h-[2px] bg-brand-red -right-1"></div>
      </div>
      
      {/* Centere Crosshair Core Dot */}
      <div
        className="fixed -left-[3px] -top-[3px] w-[6px] h-[6px] bg-brand-red-light rounded-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${hovered ? 0.4 : 1})`,
        }}
      ></div>
    </div>
  );
}

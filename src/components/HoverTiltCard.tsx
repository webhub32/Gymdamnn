/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, ReactNode, MouseEvent } from 'react';

interface HoverTiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
  key?: string;
}

export default function HoverTiltCard({ children, className = '', maxRotation = 12 }: HoverTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of cursor relative to center of element
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate maximum degrees of tilt rotation
    const rX = -(mouseY / (height / 2)) * maxRotation;
    const rY = (mouseX / (width / 2)) * maxRotation;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 select-none transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
          : 'rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className="w-full h-full"
        style={{ 
          transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
}

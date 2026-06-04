/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

interface FadeInUpProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export default function FadeInUp({ children, delayMs = 0, className = '' }: FadeInUpProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // starts slightly before element fully enters
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[900s] cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{
        // Define manually in JS string inline to prevent tailwind compile latency
        transitionDuration: '950ms',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

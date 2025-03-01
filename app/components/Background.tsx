'use client';

import { useEffect, useState } from 'react';

export const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="grainy" />
      {/* <div className="fixed inset-0 bg-gradient-to-tr from-[#0a0f1c]/80 via-[#1a1625]/80 to-[#1f1215]/80 pointer-events-none" /> */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#0a0908]/80 via-[#32281e]/80 to-[#3d2c1f]/80 pointer-events-none" />
      <div className="glow" />
    </>
  );
}; 
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor trailer
  const springX = useSpring(mouseX, { stiffness: 420, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    // Hidden on touchscreen / mobile via @media query utility hidden lg:block and pointer events none
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 hidden md:block">
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: springX,
          y: springY,
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? '#F03620' : 'rgba(234, 174, 186, 0.7)',
          backgroundColor: isHovered ? 'rgba(240, 54, 32, 0.08)' : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundColor: isHovered ? '#F03620' : '#330306',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

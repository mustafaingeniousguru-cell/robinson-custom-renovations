'use client';

import { motion } from 'motion/react';
import React from 'react';

interface FlipFadeTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  delay?: number;
}

export default function FlipFadeText({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
}: FlipFadeTextProps) {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 18,
      rotateX: 75,
      filter: 'blur(2px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 110,
        mass: 0.8,
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`} style={{ perspective: 1000 }}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={childVariant}
            className="inline-block transform-gpu origin-bottom will-change-transform"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

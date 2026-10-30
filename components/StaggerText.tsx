'use client';

import { motion } from 'motion/react';
import React from 'react';

interface StaggerTextProps {
  children: string;
  className?: string;
  as?: 'p' | 'span' | 'div';
  delay?: number;
}

export default function StaggerText({
  children,
  className = '',
  as: Component = 'p',
  delay = 0.1,
}: StaggerTextProps) {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  } as const;

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.05em]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariant}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

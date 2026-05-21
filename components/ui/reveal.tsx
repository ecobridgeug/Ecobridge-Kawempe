'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  className,
  id,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header';
}) {
  const prefersReduced = useReducedMotion();
  const MotionEl = motion[as] as typeof motion.div;

  if (prefersReduced) {
    return (
      <MotionEl id={id} className={className}>
        {children}
      </MotionEl>
    );
  }

  return (
    <MotionEl
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionEl>
  );
}

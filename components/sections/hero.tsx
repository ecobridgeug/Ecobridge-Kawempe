'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Counter } from '@/components/ui/counter';
import { heroStats } from '@/data/site';

const headlineLines = [
  { text: 'A bridge', italic: false, accent: false },
  { text: 'between youth,', italic: false, accent: false },
  { text: 'science, and the', italic: false, accent: false },
  { text: 'planet.', italic: true, accent: true },
];

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 overflow-hidden topo-bg">
      {/* Decorative topographic lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.12] pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 60 Q 30 30 60 60 T 120 60" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <path d="M0 90 Q 30 60 60 90 T 120 90" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <path d="M0 30 Q 30 0 60 30 T 120 30" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" className="text-[var(--primary)]" />
      </svg>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="eyebrow">Climate · Community · Kampala</span>
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1
              className="display text-[3.2rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 320, 'SOFT' 30" }}
            >
              {headlineLines.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`block ${line.italic ? 'italic' : ''} ${line.accent ? 'text-[var(--primary)]' : ''}`}
                  style={
                    line.italic
                      ? { fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }
                      : undefined
                  }
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="lg:col-span-4 lg:pl-6 lg:border-l border-[var(--border)]"
          >
            <p className="text-base lg:text-[17px] leading-relaxed text-[var(--text-muted)]">
              We are a youth-driven environmental and sustainability organization in Uganda. We work where climate science meets community: in{' '}
              <span className="text-[var(--text)]">
                Kampala&apos;s neighborhoods, schools, councils, and waterways
              </span>{' '}
              — building the practical, local responses our generation needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                See our work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/donate" className="btn-ghost">
                Support us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border)] border border-[var(--border)] rounded-3xl overflow-hidden bg-[var(--bg-elevated)]"
        >
          {heroStats.map((stat, i) => (
            <div key={i} className="px-6 py-7 lg:py-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-soft)]">
                /0{i + 1}
              </p>
              <p
                className="mt-3 display text-4xl lg:text-5xl xl:text-6xl font-light"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

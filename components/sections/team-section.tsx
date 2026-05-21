'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { team } from '@/data/team';

export function TeamSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--bg-alt)] border-y border-[var(--border-soft)]">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">/ Team & leadership</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
            >
              The people doing the work.
            </h2>
            <p className="mt-6 text-lg text-[var(--text-muted)] max-w-xl">
              A small team — and a growing community of fellows, volunteers, and partners who make Ecobridge run.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/team" className="btn-ghost">
              Full team & board
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.slice(0, 6).map((person, i) => (
            <Reveal key={person.slug} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card overflow-hidden group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[var(--bg)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="display text-xl">{person.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mt-1.5">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{person.bio}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

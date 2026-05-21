'use client';

import Link from 'next/link';
import { ArrowUpRight, Heart, Users } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function CtaSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-[var(--primary)] text-cream-100 p-10 lg:p-20">
            {/* Decorative SVG */}
            <svg
              aria-hidden="true"
              className="absolute -right-32 -top-32 opacity-20"
              width="500"
              height="500"
              viewBox="0 0 500 500"
            >
              <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="250" cy="250" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">
                  / Join us
                </p>
                <h2
                  className="mt-5 display text-5xl lg:text-7xl font-light"
                  style={{ fontVariationSettings: "'opsz' 144, 'wght' 320, 'SOFT' 50" }}
                >
                  Build the bridge{' '}
                  <em className="italic text-amber-300" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
                    with us.
                  </em>
                </h2>
                <p className="mt-7 text-lg lg:text-xl max-w-xl opacity-90 leading-relaxed">
                  Whether you give your time, your skills, or your support — every contribution moves the work forward.
                </p>
              </div>

              <div className="lg:col-span-5 lg:pt-8 grid gap-4">
                <Link
                  href="/donate"
                  className="group flex items-center justify-between gap-6 p-6 rounded-2xl bg-cream-100 text-forest-900 hover:bg-amber-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em]">/01 Donate</p>
                    </div>
                    <h3 className="mt-3 display text-2xl">Support our programs</h3>
                    <p className="mt-1 text-sm opacity-80">From $10 — every gift directly funds field work.</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/volunteer"
                  className="group flex items-center justify-between gap-6 p-6 rounded-2xl border border-cream-100/30 hover:bg-cream-100/10 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-amber-300" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">/02 Volunteer</p>
                    </div>
                    <h3 className="mt-3 display text-2xl">Join the team</h3>
                    <p className="mt-1 text-sm opacity-80">Field, research, or remote — there is a role for you.</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

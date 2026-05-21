'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function AboutSection() {
  return (
    <section className="py-24 lg:py-36 relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">/ Who we are</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350, 'SOFT' 50" }}
            >
              Climate work,{' '}
              <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
                done close
              </em>{' '}
              to home.
            </h2>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:gap-3 transition-all">
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            <Reveal delay={0.1}>
              <p className="text-2xl lg:text-[28px] leading-snug font-light">
                Ecobridge was founded in 2022 by six university students in Kampala after a season of devastating floods. We started with one weekend of cleanups. Three years later we run programs in <span className="text-[var(--primary)] font-medium">nine districts</span>, train fellows who go on to lead, and publish open research the city actually uses.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base lg:text-lg leading-relaxed text-[var(--text-muted)]">
                We operate at the intersection of climate science, community organizing, and youth leadership. Our programs span waste management, renewable energy, environmental health, and open climate data — but the through-line is the same: <span className="text-[var(--text)]">solutions designed with the people who live the problem</span>.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
                <Pillar number="01" title="Programs" body="Field-tested across schools, neighborhoods, and councils." />
                <Pillar number="02" title="Research" body="Open data, peer-reviewed methods, public dashboards." />
                <Pillar number="03" title="Leadership" body="A six-month fellowship for the next generation." />
                <Pillar number="04" title="Partnerships" body="Universities, councils, funders, peer NGOs." />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="p-6 lg:p-8 bg-[var(--bg)]">
      <p className="font-mono text-xs text-[var(--accent)]">/{number}</p>
      <h3 className="mt-3 display text-xl lg:text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{body}</p>
    </div>
  );
}

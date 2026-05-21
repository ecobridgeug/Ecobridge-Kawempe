'use client';

import Link from 'next/link';
import { ArrowUpRight, Microscope, Globe2, HeartHandshake } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

const pillars = [
  {
    icon: Microscope,
    label: 'Research & Innovation',
    title: 'Climate AI & open data for East Africa.',
    body: 'We build open datasets, ML tools, and climate maps for cities that have been historically underserved by environmental research. Our work is peer-reviewed, public, and reusable.',
    href: '/research',
    highlights: ['Heat-island mapping', 'Flood-risk modeling', 'Open data dashboards'],
  },
  {
    icon: Globe2,
    label: 'Climate Action',
    title: 'Local responses to a global crisis.',
    body: 'Campaigns, school programs, tree planting, advocacy. We translate climate science into the languages, contexts, and decision-makers of Uganda.',
    href: '/climate-action',
    highlights: ['Awareness campaigns', 'Policy submissions', 'Renewable energy installs'],
  },
  {
    icon: HeartHandshake,
    label: 'Community Outreach',
    title: 'Sanitation, health, and shared infrastructure.',
    body: 'Drives, installations, and longer-term partnerships with councils to improve the public health infrastructure of dense Kampala neighborhoods.',
    href: '/community',
    highlights: ['Sanitation drives', 'Hand-washing stations', 'Health partnerships'],
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow">/ Three pillars</p>
          <h2
            className="mt-5 display text-4xl lg:text-6xl font-light"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
          >
            Research, action, community.{' '}
            <em className="italic block lg:inline" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
              In that order — every time.
            </em>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group block rounded-3xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 p-8 lg:p-12">
                  <div className="lg:col-span-3 flex flex-col justify-between gap-4">
                    <div>
                      <div className="h-14 w-14 rounded-2xl bg-[var(--primary)] text-[var(--bg)] flex items-center justify-center">
                        <p.icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                        /0{i + 1} · {p.label}
                      </p>
                    </div>
                    <span className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] group-hover:gap-3 transition-all">
                      Explore <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="lg:col-span-6">
                    <h3
                      className="display text-3xl lg:text-5xl font-light"
                      style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-5 text-base lg:text-lg leading-relaxed text-[var(--text-muted)]">
                      {p.body}
                    </p>
                  </div>
                  <div className="lg:col-span-3 lg:border-l border-[var(--border)] lg:pl-8">
                    <p className="eyebrow mb-4">Highlights</p>
                    <ul className="space-y-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="text-sm flex items-start gap-2.5">
                          <span className="mt-2 inline-block h-1 w-3 bg-[var(--accent)] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

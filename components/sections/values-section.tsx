'use client';

import { Sprout, Microscope, Users, Mountain } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { values } from '@/data/content';

const iconMap = { Sprout, Microscope, Users, Mountain } as const;

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--bg-alt)] border-y border-[var(--border-soft)] relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">/ What we stand for</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
            >
              Four commitments we test every program against.
            </h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8 space-y-6">
            <Reveal delay={0.1}>
              <Statement label="Vision" body="A generation of African youth equipped to lead the climate solutions their communities need." />
            </Reveal>
            <Reveal delay={0.2}>
              <Statement label="Mission" body="Bridge research, community, and youth leadership to build practical, durable responses to the climate crisis across Uganda." />
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-3xl overflow-hidden">
          {values.map((value, i) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Reveal key={i} delay={i * 0.1} className="bg-[var(--bg)] p-7 lg:p-9 group hover:bg-[var(--bg-elevated)] transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 display text-2xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{value.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Statement({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-[var(--accent)] pl-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">{label}</p>
      <p className="mt-2 text-lg lg:text-xl leading-snug">{body}</p>
    </div>
  );
}

'use client';

import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { upcomingEvents } from '@/data/content';
import { formatDate } from '@/lib/utils';

export function EventsSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--bg-alt)] border-y border-[var(--border-soft)]">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">/ Upcoming events</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
            >
              Come find us in the field.
            </h2>
            <p className="mt-6 text-lg text-[var(--text-muted)] max-w-md">
              Public events, convenings, and open calls. Everything we do that you can join.
            </p>
          </Reveal>

          <div className="lg:col-span-7 space-y-3">
            {upcomingEvents.map((event, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="group p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] bg-[var(--bg)] transition-colors">
                  <div className="grid lg:grid-cols-12 gap-4 items-center">
                    <div className="lg:col-span-3">
                      <p
                        className="display text-3xl lg:text-4xl text-[var(--primary)]"
                        style={{ fontVariationSettings: "'opsz' 144, 'wght' 380" }}
                      >
                        {new Date(event.date).toLocaleDateString('en-US', { day: '2-digit' })}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                        {event.type}
                      </p>
                      <h3 className="mt-1.5 text-xl font-medium">{event.title}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </p>
                    </div>
                    <div className="lg:col-span-2 lg:text-right">
                      <ArrowUpRight className="h-5 w-5 inline-block text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

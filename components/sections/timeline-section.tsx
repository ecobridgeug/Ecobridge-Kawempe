'use client';

import { Reveal } from '@/components/ui/reveal';
import { timeline } from '@/data/content';

export function TimelineSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--bg-alt)] border-y border-[var(--border-soft)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow">/ Three years in</p>
          <h2
            className="mt-5 display text-4xl lg:text-6xl font-light"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
          >
            A timeline of where we have been.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12">
            <ol className="relative space-y-12 lg:space-y-16 border-l-2 border-[var(--border)] pl-8 lg:pl-12 ml-3">
              {timeline.map((item, i) => (
                <Reveal as="li" key={i} delay={i * 0.05} className="relative">
                  <span className="absolute -left-[42px] lg:-left-[54px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary)] ring-4 ring-[var(--bg-alt)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  <div className="grid lg:grid-cols-12 gap-6 items-baseline">
                    <p
                      className="display text-5xl lg:text-7xl font-light text-[var(--primary)] lg:col-span-3"
                      style={{ fontVariationSettings: "'opsz' 144, 'wght' 320" }}
                    >
                      {item.year}
                    </p>
                    <div className="lg:col-span-9">
                      <h3 className="display text-2xl lg:text-3xl">{item.title}</h3>
                      <p className="mt-2 text-base lg:text-lg leading-relaxed text-[var(--text-muted)] max-w-2xl">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

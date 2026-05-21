'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';

export function JournalSection() {
  const latest = posts.slice(0, 4);
  const [hero, ...rest] = latest;

  return (
    <section className="py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">/ The journal</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
            >
              Research, field notes,{' '}
              <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
                stories.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/blog" className="btn-ghost">
              Read the journal
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Hero post */}
          <Reveal className="lg:col-span-7">
            <Link href={`/blog/${hero.slug}`} className="group block">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-alt)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.image}
                  alt={hero.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  {hero.category}
                </span>
                <span className="text-[var(--text-muted)]">{formatDate(hero.date)}</span>
                <span className="text-[var(--text-muted)]">· {hero.readTime} read</span>
              </div>
              <h3
                className="mt-4 display text-3xl lg:text-4xl font-light leading-tight max-w-2xl group-hover:text-[var(--primary)] transition-colors"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 380" }}
              >
                {hero.title}
              </h3>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {hero.excerpt}
              </p>
            </Link>
          </Reveal>

          {/* Other posts */}
          <div className="lg:col-span-5 space-y-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={0.1 + i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group flex gap-5 items-start">
                  <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                        {post.category}
                      </span>
                      <span className="text-[var(--text-muted)]">{formatDate(post.date)}</span>
                    </div>
                    <h4 className="mt-2 text-lg font-medium leading-snug group-hover:text-[var(--primary)] transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

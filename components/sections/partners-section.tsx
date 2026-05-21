'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { partners } from '@/data/content';

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow">/ Trusted by</p>
          <h2
            className="mt-5 display text-3xl lg:text-5xl font-light"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
          >
            Partners and collaborators across research, government, and global funders.
          </h2>
        </Reveal>

        <div className="overflow-hidden mask-fade">
          <div className="flex animate-marquee gap-12 lg:gap-16 whitespace-nowrap py-6">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] min-w-[200px]"
              >
                <span
                  className="display text-xl lg:text-2xl text-[var(--text-muted)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'wght' 400" }}
                >
                  {p.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/partners" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:gap-3 transition-all">
            See all partners <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
}

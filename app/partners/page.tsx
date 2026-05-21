import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { partners } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Partners & Collaborators' };

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ Partners & collaborators"
        title={<>The{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>networks</em>{' '}we build with.</>}
        intro="We work alongside universities, councils, peer NGOs, and global funders. None of our programs are solo work."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {partners.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-center hover:border-[var(--primary)] transition-colors">
                  <div>
                    <p className="display text-2xl text-[var(--text-muted)]">{p.logo}</p>
                    <p className="mt-2 text-xs text-[var(--text-muted)]">{p.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20" id="become">
            <div className="rounded-3xl border border-[var(--border)] p-10 lg:p-16 bg-[var(--bg-alt)]">
              <p className="eyebrow">/ Become a partner</p>
              <h2 className="mt-5 display text-3xl lg:text-5xl font-light max-w-3xl" style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}>
                Funders, researchers, councils — let&apos;s talk.
              </h2>
              <p className="mt-6 text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
                We are actively building partnerships across program funding, research collaboration, and government coordination. Write to us — we read every message.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Open a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

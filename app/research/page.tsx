import Link from 'next/link';
import { ArrowUpRight, FileText, Database, Map } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';

export const metadata = { title: 'Research & Innovation' };

const research = [
  {
    icon: Map,
    title: 'Kampala Urban Heat Atlas',
    type: 'Open dataset · 2025',
    body: '189 km² of city-scale heat-island data. Combines Sentinel-2 imagery with ground-truth surveys collected by our youth ambassadors.',
  },
  {
    icon: Database,
    title: 'Flood-risk modeling for informal settlements',
    type: 'Working paper · 2025',
    body: 'A machine-learning approach to identifying high-risk wards in Kampala metro using rainfall, drainage, and built-density inputs.',
  },
  {
    icon: FileText,
    title: 'Open climate data for East Africa',
    type: 'Policy brief · 2024',
    body: 'A regional argument for shared, open environmental data infrastructure. Co-authored with three partner universities.',
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ Research & Innovation"
        title={<>Open data,{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>open methods.</em></>}
        intro="Our research team builds climate datasets, ML tools, and policy briefs for East Africa — published in the open, designed to be reused."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-6">
          {research.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="card p-8 lg:p-10 h-full">
                <div className="h-14 w-14 rounded-2xl bg-[var(--primary)] text-[var(--bg)] flex items-center justify-center">
                  <r.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">{r.type}</p>
                <h3 className="mt-3 display text-2xl lg:text-3xl">{r.title}</h3>
                <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">{r.body}</p>
                <Link href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

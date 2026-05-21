import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { projects } from '@/data/projects';

export const metadata = { title: 'Climate Action' };

export default function ClimateActionPage() {
  const climateProjects = projects.filter(
    (p) => p.category === 'Climate Action' || p.category === 'Renewable Energy'
  );
  return (
    <>
      <PageHeader
        eyebrow="/ Climate action"
        title={<>From{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>awareness</em>{' '}to installations.</>}
        intro="Campaigns, school programs, solar installs, and policy work — the practical actions that move climate ambition into community life."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-6">
          {climateProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="card overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">{p.category}</p>
                  <h3 className="mt-3 display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-base text-[var(--text-muted)] leading-relaxed">{p.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

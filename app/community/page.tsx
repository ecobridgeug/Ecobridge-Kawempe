import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { projects } from '@/data/projects';

export const metadata = { title: 'Community Outreach' };

export default function CommunityPage() {
  const communityProjects = projects.filter(
    (p) => p.category === 'Community Health' || p.category === 'Youth Leadership' || p.category === 'Waste Management'
  );
  return (
    <>
      <PageHeader
        eyebrow="/ Community outreach"
        title={<>Sanitation, health, and{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>shared infrastructure.</em></>}
        intro="Our community programs are the bedrock of Ecobridge — the work that brings volunteers, councils, and residents into the same room around real, local problems."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {communityProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="card overflow-hidden h-full flex flex-col group">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">{p.category}</p>
                  <h3 className="mt-3 display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

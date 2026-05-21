import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { team, boardAdvisors } from '@/data/team';

export const metadata = { title: 'Team & Leadership' };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ Team & leadership"
        title={<>The people{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>behind the work.</em></>}
        intro="A team of fourteen full-time staff, plus our board, advisors, and rotating cohorts of fellows and volunteers."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x">
          <p className="eyebrow mb-8">Core team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <Reveal key={person.slug} delay={i * 0.04}>
                <article className="card overflow-hidden group">
                  <div className="aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.image} alt={person.name} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="display text-xl">{person.name}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mt-1.5">{person.role}</p>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{person.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="eyebrow mt-20 mb-8">Board & advisors</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardAdvisors.map((person, i) => (
              <Reveal key={person.slug} delay={i * 0.05}>
                <article className="card overflow-hidden group">
                  <div className="aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.image} alt={person.name} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="display text-xl">{person.name}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mt-1.5">{person.role}</p>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{person.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

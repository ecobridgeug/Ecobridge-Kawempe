import { PageHeader } from '@/components/ui/page-header';
import { ValuesSection } from '@/components/sections/values-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { TeamSection } from '@/components/sections/team-section';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="/ About Ecobridge"
        title={
          <>
            We are six founders, dozens of fellows, and a city full of{' '}
            <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
              collaborators.
            </em>
          </>
        }
        intro="Ecobridge began at a kitchen table in Kampala in 2022, three weeks after the worst flooding in a decade. We have grown since — but our orientation has not changed."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              We work in the messy, hopeful space between climate science and community organizing. We are skeptical of solutions imposed from outside, and we are equally skeptical of pure grassroots work that ignores the data. The bridge is the point.
            </p>
            <p>
              We do not work alone. Our co-design partners include universities, councils, schools, peer NGOs, and — most importantly — the residents of the neighborhoods where our programs live.
            </p>
            <p>
              We are also young. The median age on our team is 26. The median age across our fellowship cohorts is 22. We believe that climate change is the inheritance of our generation, and we should be resourced to lead the response.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-3">
            <Fact label="Founded" value="2022" />
            <Fact label="Based in" value="Kampala, Uganda" />
            <Fact label="Districts served" value="9" />
            <Fact label="Team" value="14 full-time" />
            <Fact label="Fellows" value="92 alumni · 30 active" />
            <Fact label="Legal" value="Registered Ugandan NPO" />
          </div>
        </div>
      </section>
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-[var(--border-soft)]">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  );
}

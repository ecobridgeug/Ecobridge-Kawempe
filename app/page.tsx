import { Hero } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about-section';
import { ValuesSection } from '@/components/sections/values-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { PillarsSection } from '@/components/sections/pillars-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { TeamSection } from '@/components/sections/team-section';
import { JournalSection } from '@/components/sections/journal-section';
import { EventsSection } from '@/components/sections/events-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ValuesSection />
      <ProjectsSection />
      <PillarsSection />
      <TimelineSection />
      <TeamSection />
      <JournalSection />
      <EventsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}

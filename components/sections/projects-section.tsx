'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">/ Our work</p>
            <h2
              className="mt-5 display text-4xl lg:text-6xl font-light"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 350" }}
            >
              Programs that move from{' '}
              <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
                idea
              </em>{' '}
              to neighborhood.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/projects" className="btn-ghost">
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Other categories */}
        <Reveal delay={0.3} className="mt-20">
          <p className="eyebrow mb-6">More initiatives</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects#${project.slug}`}
                  className="group flex items-center justify-between gap-4 px-5 py-5 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 text-base font-medium leading-snug">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card overflow-hidden flex flex-col group"
    >
      <Link href={`/projects#${project.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-[var(--bg-alt)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {project.category}
            </span>
            <span className="text-xs text-[var(--text-muted)]">{project.location}</span>
          </div>
          <h3 className="mt-4 display text-2xl leading-tight">{project.title}</h3>
          <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{project.summary}</p>

          <div className="mt-6 pt-5 border-t border-[var(--border)] grid grid-cols-3 gap-3">
            {project.impact.slice(0, 3).map((s, i) => (
              <div key={i}>
                <p className="display text-xl">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)] mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

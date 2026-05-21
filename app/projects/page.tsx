'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="/ Projects & programs"
        title={
          <>
            From a single cleanup to{' '}
            <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
              a network of programs.
            </em>
          </>
        }
        intro="Filter by program area. Every project here is active or recently completed. Click into a project to see partners, impact metrics, and how to get involved."
      />

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-5 py-2.5 text-sm font-medium rounded-full border transition-all',
                  filter === cat
                    ? 'bg-[var(--primary)] text-[var(--bg)] border-[var(--primary)]'
                    : 'border-[var(--border)] hover:border-[var(--primary)]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.04}>
                <motion.article
                  layout
                  id={project.slug}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="card overflow-hidden h-full flex flex-col group"
                >
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
                      <span className={cn(
                        'text-xs font-mono px-2 py-0.5 rounded-full border',
                        project.status === 'Active' && 'text-[var(--primary)] border-[var(--primary)]',
                        project.status === 'Completed' && 'text-[var(--text-muted)] border-[var(--border)]',
                        project.status === 'Upcoming' && 'text-[var(--accent)] border-[var(--accent)]',
                      )}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-4 display text-2xl leading-tight">{project.title}</h3>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[var(--border)] flex items-center justify-between text-xs">
                      <span className="text-[var(--text-muted)]">{project.location} · {project.year}</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

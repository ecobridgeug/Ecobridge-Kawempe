'use client';

import { motion } from 'framer-motion';

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="pt-32 lg:pt-40 pb-12 lg:pb-20 topo-bg relative overflow-hidden">
      <div className="container-x">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1
            className="mt-6 display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light max-w-5xl"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 330, 'SOFT' 40" }}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

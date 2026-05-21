'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Microscope, Megaphone, Languages, GraduationCap, MapPin, Clock, Users } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';

const roles = [
  {
    icon: Sprout,
    title: 'Field Volunteer',
    commitment: '4–8 hrs / week',
    location: 'Kampala & peri-urban',
    description:
      'Work directly with community teams on tree planting, waste audits, sanitation drives, and household climate surveys.',
    looking: ['Reliable Saturdays', 'Comfort working outdoors', 'Basic Luganda or English'],
  },
  {
    icon: Microscope,
    title: 'Research Assistant',
    commitment: '6–10 hrs / week',
    location: 'Hybrid · Makerere area',
    description:
      'Support data collection, sensor deployment, GIS mapping, and literature reviews for our active research streams.',
    looking: ['Final-year or graduate student', 'Familiarity with Excel / Python / QGIS', 'Curiosity > credentials'],
  },
  {
    icon: Megaphone,
    title: 'Communications',
    commitment: '3–6 hrs / week',
    location: 'Remote OK',
    description:
      'Help us translate research into stories — write, design, shoot, edit. We share bylines and credit generously.',
    looking: ['Writing, design, video, or social', 'A portfolio (any size)', 'A point of view'],
  },
  {
    icon: Languages,
    title: 'Translator',
    commitment: 'Project-based',
    location: 'Remote',
    description:
      'Translate briefs, surveys, and community materials into Luganda, Runyankole, Acholi, or Lusoga.',
    looking: ['Native fluency', 'Comfort with technical language', 'Turnaround within 1 week'],
  },
  {
    icon: GraduationCap,
    title: 'Ecobridge Fellowship',
    commitment: '6 months · stipended',
    location: 'Kampala',
    description:
      'A paid fellowship for early-career researchers and organisers. Two cohorts per year, 5–7 fellows each.',
    looking: ['Under 30, Ugandan or East African', 'Sustained climate or community work', 'Application opens quarterly'],
  },
];

export default function VolunteerPage() {
  const [form, setForm] = useState({ name: '', email: '', role: 'Field Volunteer', about: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire to a real endpoint (Formspree, Resend, custom API route, Airtable, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  return (
    <>
      <PageHeader
        eyebrow="/ Volunteer"
        title={
          <>
            Give a few hours. <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>Shift</em> a system.
          </>
        }
        intro="Ecobridge runs on volunteers — researchers, organisers, designers, writers, drivers, translators. If you care, there is a place for you."
      />

      {/* Roles grid */}
      <section className="py-12 lg:py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.article
                  key={role.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="card p-8 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="eyebrow text-[10px]">0{roles.indexOf(role) + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium tracking-tight mb-3">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-5 font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {role.commitment}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} /> {role.location}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6">{role.description}</p>
                  <p className="eyebrow mb-3">We&apos;re looking for</p>
                  <ul className="space-y-1.5">
                    {role.looking.map((item) => (
                      <li key={item} className="text-sm flex gap-2">
                        <span className="text-[var(--accent)]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-16 lg:py-28 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">/ Apply</p>
              <h2 className="display text-4xl lg:text-5xl mb-6">A short note is enough.</h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                We read every application. No CV required for most roles — tell us what you care about and what
                you&apos;d like to learn. We&apos;ll reply within a week.
              </p>
              <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                <Users size={16} />
                <span>Last cohort: 47 applicants, 14 placed.</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </Field>
              </div>
              <Field label="Role you&apos;re interested in" required>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="form-input"
                >
                  {roles.map((r) => (
                    <option key={r.title}>{r.title}</option>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Tell us a little about yourself" required>
                <textarea
                  required
                  rows={6}
                  value={form.about}
                  onChange={(e) => setForm({ ...form, about: e.target.value })}
                  className="form-input resize-none"
                  placeholder="What got you interested? Anything you&apos;ve worked on, formal or not."
                />
              </Field>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="btn-primary disabled:opacity-60"
              >
                {status === 'idle' && 'Send application'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && 'Got it — we&apos;ll be in touch ✓'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 15px;
          color: var(--text);
          transition: border-color 200ms, box-shadow 200ms;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 15%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </span>
      {children}
    </label>
  );
}

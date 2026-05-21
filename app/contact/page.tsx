'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { siteConfig } from '@/data/site';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', topic: 'General', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // TODO: wire this up to your endpoint (Formspree, Resend, your own API route, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  };

  return (
    <>
      <PageHeader
        eyebrow="/ Contact"
        title={<>Say{' '}<em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>hello.</em></>}
        intro="We read every message. Partnership, press, volunteering, or just curious — drop us a line."
      />
      <section className="py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <Detail icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <Detail icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} />
            <Detail icon={MapPin} label="Office" value={siteConfig.address} />
            <div className="pt-8 border-t border-[var(--border)]">
              <p className="eyebrow mb-4">Press</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                For media inquiries write to <a href={`mailto:press@${siteConfig.email.split('@')[1]}`} className="text-[var(--primary)] underline underline-offset-4">press@{siteConfig.email.split('@')[1]}</a>.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" required>
                <input
                  type="text"
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

            <Field label="Organization (optional)">
              <input
                type="text"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="form-input"
              />
            </Field>

            <Field label="What is this about?">
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="form-input"
              >
                <option>General</option>
                <option>Partnership</option>
                <option>Press / media</option>
                <option>Volunteering</option>
                <option>Donation question</option>
                <option>Research collaboration</option>
              </select>
            </Field>

            <Field label="Message" required>
              <textarea
                rows={6}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-input resize-none"
              />
            </Field>

            <div className="pt-2">
              <button type="submit" disabled={status !== 'idle'} className="btn-primary">
                {status === 'sent' ? 'Sent ✓' : status === 'submitting' ? 'Sending…' : 'Send message'}
                {status === 'idle' && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <style jsx global>{`
        .form-input {
          width: 100%;
          padding: 14px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 15px;
          color: var(--text);
          transition: border-color 0.2s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
        }
      `}</style>
    </>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-2">
        {label}{required && <span className="text-[var(--accent)]"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Detail({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <>
      <Icon className="h-5 w-5 text-[var(--primary)]" />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{label}</p>
        <p className="mt-1 text-base">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-4 group hover:text-[var(--primary)] transition-colors">{content}</a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}

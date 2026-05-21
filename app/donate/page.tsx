'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Droplets, BookOpen, Zap, ShieldCheck, CreditCard } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';

const tiers = [
  {
    amount: 25,
    label: 'Sapling',
    impact: 'Plants and tends 10 indigenous trees in a community plot for one year.',
    icon: Leaf,
  },
  {
    amount: 50,
    label: 'Stream',
    impact: 'Provides clean water testing kits for one school in Kawempe for a term.',
    icon: Droplets,
  },
  {
    amount: 100,
    label: 'Grove',
    impact: 'Funds a youth-led climate workshop reaching ~80 secondary school students.',
    icon: BookOpen,
    popular: true,
  },
  {
    amount: 500,
    label: 'Watershed',
    impact: 'Installs a solar lighting system for one rural school. Lasts 10+ years.',
    icon: Zap,
  },
];

const allocation = [
  { label: 'Direct project costs', value: 78 },
  { label: 'Research & data', value: 11 },
  { label: 'Operations & admin', value: 8 },
  { label: 'Reserves', value: 3 },
];

export default function DonatePage() {
  const [selected, setSelected] = useState<number | 'custom'>(100);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  const finalAmount = selected === 'custom' ? Number(custom) || 0 : selected;

  return (
    <>
      <PageHeader
        eyebrow="/ Donate"
        title={
          <>
            Fund the{' '}
            <em className="italic" style={{ fontVariationSettings: "'opsz' 144, 'wght' 400, 'SOFT' 80" }}>
              quiet work.
            </em>
          </>
        }
        intro="Every shilling and dollar reaches the ground. We publish full financials each year. Reach further, faster, with us."
      />

      {/* Donation card */}
      <section className="py-12 lg:py-20">
        <div className="container-x max-w-5xl">
          <div className="card p-8 lg:p-12">
            {/* Frequency toggle */}
            <div className="inline-flex p-1 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-10">
              {(['once', 'monthly'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`px-5 py-2 text-sm rounded-full transition-colors ${
                    frequency === f ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {f === 'once' ? 'One time' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* Tiers grid */}
            <p className="eyebrow mb-4">Choose an amount (USD)</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {tiers.map((tier) => {
                const Icon = tier.icon;
                const isSelected = selected === tier.amount;
                return (
                  <motion.button
                    key={tier.amount}
                    onClick={() => setSelected(tier.amount)}
                    whileHover={{ y: -3 }}
                    className={`relative text-left p-5 rounded-xl border-2 transition-colors ${
                      isSelected
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                        : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[var(--accent)] text-[var(--ink)] font-medium">
                        Popular
                      </span>
                    )}
                    <Icon size={18} className="text-[var(--primary)] mb-3" strokeWidth={1.5} />
                    <div className="text-3xl font-display font-medium">${tier.amount}</div>
                    <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mt-1">
                      {tier.label}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-4">{tier.impact}</p>
                  </motion.button>
                );
              })}
            </div>

            {/* Custom */}
            <div
              className={`p-5 rounded-xl border-2 transition-colors ${
                selected === 'custom'
                  ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                  : 'border-[var(--border)]'
              }`}
            >
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  checked={selected === 'custom'}
                  onChange={() => setSelected('custom')}
                  className="accent-[var(--primary)]"
                />
                <span className="eyebrow flex-shrink-0">Custom</span>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-2xl font-display text-[var(--text-muted)]">$</span>
                  <input
                    type="number"
                    min="1"
                    value={custom}
                    onFocus={() => setSelected('custom')}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full bg-transparent text-2xl font-display focus:outline-none placeholder:text-[var(--text-muted)]/40"
                  />
                </div>
              </label>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-10 pt-8 border-t border-[var(--border)]">
              <div>
                <p className="text-sm text-[var(--text-muted)]">
                  You&apos;re donating
                </p>
                <p className="text-2xl font-display font-medium mt-1">
                  ${finalAmount.toLocaleString()} <span className="text-base text-[var(--text-muted)]">/ {frequency === 'once' ? 'one time' : 'month'}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  // TODO: wire this up to your real payment provider.
                  // Recommended: Stripe Checkout for international cards, Flutterwave for mobile money (MTN, Airtel) + cards across Africa.
                  alert(
                    `Demo: integrate Stripe or Flutterwave here.\n\nAmount: $${finalAmount}\nFrequency: ${frequency}`
                  );
                }}
                disabled={finalAmount <= 0}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard size={18} /> Continue to checkout
              </button>
            </div>

            <p className="text-xs text-[var(--text-muted)] mt-6 flex items-center gap-2">
              <ShieldCheck size={14} className="text-[var(--primary)]" />
              Secure payment via Stripe / Flutterwave. Receipts emailed. Tax-deductible where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Allocation */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">/ Where it goes</p>
              <h2 className="display text-4xl lg:text-5xl mb-6">
                Audited. Public. <em className="italic">Boring</em> on purpose.
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                We publish a yearly impact + financial report — every line item, every grant, every salary range.
                No glossy designer pages, no rounding up. We&apos;d rather you trust us with the second donation than
                wow you with the first.
              </p>
              <a href="/about" className="text-sm font-medium text-[var(--primary)] underline underline-offset-4">
                Read our 2024 annual report →
              </a>
            </div>

            <div className="space-y-5">
              {allocation.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-medium">{a.label}</span>
                    <span className="font-mono text-sm text-[var(--text-muted)]">{a.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full bg-[var(--primary)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Mobile money',
                body: 'Donate via MTN MoMo or Airtel Money. Pay Bill: 700700. Account: ECOBRIDGE',
              },
              {
                title: 'Bank transfer',
                body: 'Stanbic Bank Uganda · A/C 9030012345678 · SWIFT: SBICUGKX',
              },
              {
                title: 'In-kind & grants',
                body: 'Foundations, corporates, in-kind partners — write to partners@ecobridge.ug',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <Heart size={18} className="text-[var(--accent)] mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

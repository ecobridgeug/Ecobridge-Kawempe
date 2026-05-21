'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Twitter, Instagram, Linkedin, Facebook, Youtube, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--border-soft)] bg-[var(--bg-alt)]">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--bg)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M12 3C7 3 4 7 4 11c0 3 2 6 5 7-1-3 0-7 3-9 0 3 1 6 3 8 2-2 3-5 3-8 0-4-3-6-6-6Z" fill="currentColor" />
                </svg>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-display text-xl">Ecobridge</span>
            </div>
            <p className="mt-5 max-w-md text-[var(--text-muted)] leading-relaxed">
              {siteConfig.description}
            </p>
            <NewsletterForm />
            <div className="mt-8 flex gap-3">
              <SocialLink href={siteConfig.social.twitter} label="Twitter"><Twitter className="h-4 w-4" /></SocialLink>
              <SocialLink href={siteConfig.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
              <SocialLink href={siteConfig.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
              <SocialLink href={siteConfig.social.youtube} label="YouTube"><Youtube className="h-4 w-4" /></SocialLink>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-5">Work</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/projects" className="hover:text-[var(--primary)]">Projects</Link></li>
              <li><Link href="/research" className="hover:text-[var(--primary)]">Research</Link></li>
              <li><Link href="/climate-action" className="hover:text-[var(--primary)]">Climate action</Link></li>
              <li><Link href="/community" className="hover:text-[var(--primary)]">Community</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--primary)]">Gallery</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-5">Org</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[var(--primary)]">About</Link></li>
              <li><Link href="/team" className="hover:text-[var(--primary)]">Team</Link></li>
              <li><Link href="/partners" className="hover:text-[var(--primary)]">Partners</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--primary)]">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--primary)]">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-5">Get involved</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/donate" className="hover:text-[var(--primary)]">Donate / support</Link></li>
              <li><Link href="/volunteer" className="hover:text-[var(--primary)]">Volunteer / join us</Link></li>
              <li><Link href="/partners#become" className="hover:text-[var(--primary)]">Become a partner</Link></li>
            </ul>
            <div className="mt-8 space-y-2 text-sm text-[var(--text-muted)]">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{siteConfig.address}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" />{siteConfig.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-soft)] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Registered as a not-for-profit in Uganda.</p>
          <p className="font-mono">Built with care in Kampala 🇺🇬</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
    >
      {children}
    </a>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your provider (Mailchimp, ConvertKit, Buttondown, etc.)
    setSubmitted(true);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-sm">
      <label className="eyebrow block mb-3">Get the journal</label>
      <div className="flex items-center gap-2 p-1 rounded-full border border-[var(--border)] bg-[var(--bg)]">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-[var(--text-soft)]"
        />
        <button type="submit" className="btn-primary !py-2 !px-4 !text-xs">
          {submitted ? 'Thanks ✓' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}

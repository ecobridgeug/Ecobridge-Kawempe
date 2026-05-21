'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border-soft)]'
            : 'bg-transparent'
        )}
      >
        <nav className="container-x flex items-center justify-between h-20" aria-label="Primary">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logomark />
            <span className="font-display text-xl tracking-tight">
              Ecobridge
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                      active
                        ? 'text-[var(--primary)]'
                        : 'text-[var(--text)] hover:text-[var(--primary)]'
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--accent)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
            >
              <Search className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <ThemeToggle />
            <Link href="/donate" className="btn-primary !py-2.5 !px-5 ml-2">
              Donate
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-[var(--border-soft)] bg-[var(--bg)]">
            <div className="container-x py-6 space-y-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/donate" className="btn-primary w-full">
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function Logomark() {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--bg)] overflow-hidden">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3C7 3 4 7 4 11c0 3 2 6 5 7-1-3 0-7 3-9 0 3 1 6 3 8 2-2 3-5 3-8 0-4-3-6-6-6Z"
          fill="currentColor"
        />
      </svg>
      <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
    </span>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-32 px-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4">
          <Search className="h-4 w-4 text-[var(--text-muted)]" />
          <input
            autoFocus
            type="search"
            placeholder="Search projects, research, journal…"
            className="flex-1 bg-transparent py-4 text-base outline-none placeholder:text-[var(--text-soft)]"
          />
          <button onClick={onClose} className="text-xs text-[var(--text-muted)] border border-[var(--border)] rounded px-2 py-1">esc</button>
        </div>
        <p className="px-4 py-3 text-xs text-[var(--text-muted)]">
          Type to search. (Connect this input to your search index — Algolia, Pagefind, or a custom API.)
        </p>
      </div>
    </div>
  );
}

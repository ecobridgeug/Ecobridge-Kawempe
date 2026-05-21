'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
    >
      {mounted ? (
        theme === 'dark' ? (
          <Sun className="h-4 w-4" strokeWidth={1.8} />
        ) : (
          <Moon className="h-4 w-4" strokeWidth={1.8} />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}

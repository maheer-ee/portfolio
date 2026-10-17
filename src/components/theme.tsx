'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeContext = createContext({ dark: true, toggle: () => {} });

export function ThemeShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(value => !value) }}>
      <main className="app min-h-screen" data-theme={dark ? 'dark' : 'light'}>{children}</main>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <button type="button" className="toggle" onClick={toggle} aria-pressed={dark}
      aria-label={dark ? 'Enable light mode' : 'Enable dark mode'}>
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}

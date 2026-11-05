'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeContext = createContext({ dark: true, toggle: () => {} });

export function ThemeShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(value => !value) }}>
      <div className="app min-h-screen" data-theme={dark ? 'dark' : 'light'}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <button type="button" className="dock-link toggle" onClick={toggle}
      aria-label={dark ? 'Enable light mode' : 'Enable dark mode'}>
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
      <span className="dock-tooltip" aria-hidden="true">Toggle theme</span>
    </button>
  );
}

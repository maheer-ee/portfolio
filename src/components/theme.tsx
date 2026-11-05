'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';

const ThemeContext = createContext({ dark: true, toggle: () => {} });

export function ThemeShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(value => !value) }}>
      <MotionConfig reducedMotion="user"><div className="app min-h-screen" data-theme={dark ? 'dark' : 'light'}>{children}</div></MotionConfig>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <motion.button whileTap={{ scale: 0.93 }} type="button" className="dock-link toggle" onClick={toggle}
      aria-label={dark ? 'Enable light mode' : 'Enable dark mode'}>
      <span className="theme-icons" aria-hidden="true">
        <motion.span initial={false} animate={{ opacity: dark ? 1 : 0 }} transition={{ duration: 0.17 }}><Sun size={20} /></motion.span>
        <motion.span initial={false} animate={{ opacity: dark ? 0 : 1 }} transition={{ duration: 0.17 }}><Moon size={20} /></motion.span>
      </span>
      <span className="dock-tooltip" aria-hidden="true">Toggle theme</span>
    </motion.button>
  );
}

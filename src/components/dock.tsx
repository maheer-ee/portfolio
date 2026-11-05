'use client';

import { BriefcaseBusiness, CircuitBoard, FlaskConical, House, AtSign } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme';

const links = [
  { href: '/', label: 'Home', icon: House },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/projects', label: 'Projects', icon: CircuitBoard },
  { href: '/work', label: 'Work', icon: BriefcaseBusiness },
  { href: '/contact', label: 'Contact', icon: AtSign },
];

export default function Dock() {
  const pathname = usePathname();
  return (
    <nav className="dock" aria-label="Portfolio navigation">
      {links.map(({ href, label, icon: Icon }) => {
        const current = pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
        return (
          <Link key={href} href={href} className="dock-link" aria-label={label} aria-current={current ? (pathname === href ? 'page' : 'location') : undefined}>
            <Icon size={21} strokeWidth={1.65} aria-hidden="true" />
            <span className="dock-tooltip" aria-hidden="true">{label}</span>
          </Link>
        );
      })}
      <div className="dock-utility">
        <ThemeToggle />
      </div>
    </nav>
  );
}

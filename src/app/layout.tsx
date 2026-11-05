import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '../content';
import { site } from '../lib/site';
import Dock from '../components/dock';
import { ThemeShell } from '../components/theme';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url + '/',
    siteName: profile.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeShell>
          <div className="portfolio-shell">
            <a href="#content" className="skip">Skip to content</a>
            <main id="content" className="stage" tabIndex={-1}>{children}</main>
            <Dock />
          </div>
        </ThemeShell>
      </body>
    </html>
  );
}

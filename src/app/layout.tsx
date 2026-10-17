import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '../content';
import { site } from '../lib/site';
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
      <body>{children}</body>
    </html>
  );
}

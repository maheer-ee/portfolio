import type { Metadata } from 'next';
import { projects, research, work } from '../content';
import { site } from './site';

export const sections = [
  { slug: 'research', title: 'Research', description: research.summary },
  { slug: 'projects', title: 'Projects', description: 'Hardware design, sports booking, and capstone work.' },
  { slug: 'work', title: 'Work', description: work.map(item => item.role).join(' · ') },
  { slug: 'contact', title: 'Contact', description: 'Reach Maheer Ashhab Naveen by email, LinkedIn, or GitHub.' },
] as const;

export const projectEntries = projects.map((project, index) => ({
  ...project,
  slug: ['hardware', 'turfinder', 'clear-impression'][index],
  title: ['Hardware design', 'turFinder', 'Clear Impression'][index],
}));

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title + ' | Maheer Ashhab Naveen';
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'Maheer Ashhab Naveen', title: fullTitle, description, url: site.url + path },
    twitter: { card: 'summary', title: fullTitle, description },
  };
}

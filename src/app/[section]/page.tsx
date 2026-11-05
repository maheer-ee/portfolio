import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { contact, research, work } from '../../content';
import { pageMetadata, projectEntries, sections } from '../../lib/portfolio';

type Props = { params: Promise<{ section: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return sections.map(({ slug }) => ({ section: slug }));
}
async function getSection(params: Props['params']) {
  const { section } = await params;
  return sections.find(item => item.slug === section) ?? notFound();
}
export async function generateMetadata({ params }: Props) {
  const section = await getSection(params);
  return pageMetadata(section.title, section.description, '/' + section.slug);
}

export default async function SectionPage({ params }: Props) {
  const { slug, title } = await getSection(params);
  return (
    <section className="detail-view">
      <h1>{title}</h1>
      {slug === 'research' && (
        <article className="entry">
          <h2>{research.role}</h2>
          <p>{research.hook}</p>
          <p>{research.summary}</p>
        </article>
      )}
      {slug === 'projects' && projectEntries.map(project => (
        <Link className="entry entry-link" key={project.slug} href={'/projects/' + project.slug}>
          <div><h2>{project.title}</h2><p>{project.summary}</p></div>
          <ArrowUpRight aria-hidden="true" size={20} />
        </Link>
      ))}
      {slug === 'work' && work.map(item => (
        <article className="entry" key={item.role}>
          <h2>{item.role}</h2><p>{item.summary}</p>
        </article>
      ))}
      {slug === 'contact' && contact.map(item => (
        <a className="entry entry-link" key={item.label} href={(item.label === 'Email' ? 'mailto:' : 'https://') + item.value}>
          <div><h2>{item.label}</h2><p>{item.value}</p></div><ArrowUpRight aria-hidden="true" size={20} />
        </a>
      ))}
    </section>
  );
}

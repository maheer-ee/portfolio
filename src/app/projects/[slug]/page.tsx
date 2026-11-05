import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { pageMetadata, projectEntries } from '../../../lib/portfolio';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projectEntries.map(({ slug }) => ({ slug }));
}
async function getProject(params: Props['params']) {
  const { slug } = await params;
  return projectEntries.find(item => item.slug === slug) ?? notFound();
}
export async function generateMetadata({ params }: Props) {
  const project = await getProject(params);
  return pageMetadata(project.title, project.summary, '/projects/' + project.slug);
}
export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params);
  return (
    <section className="detail-view">
      <Link href="/projects" className="text-link"><ArrowLeft size={17} aria-hidden="true" /> All projects</Link>
      <h1>{project.title}</h1>
      <article className="entry">
        <h2>{project.hook}</h2>
        <p>{project.summary}</p>
        {project.detail && <p>{project.detail}</p>}
      </article>
    </section>
  );
}

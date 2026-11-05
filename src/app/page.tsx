import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { education, hobbies, profile } from '../content';
import headshot from '../assets/LinkedInHeadshotv2.jpg';

export default function Home() {
  return (
    <div className="home-view">
      <section className="intro">
        <Image src={headshot} width={128} height={128} sizes="(max-width: 680px) 96px, 128px" priority alt="" className="portrait" />
        <h1 className="home-name">
          <span>{profile.name.split(' ')[0]}</span>{' '}
          <span>{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="intro-copy">{profile.outro}</p>
        <p className="education">{education.summary} · {education.gpa}</p>
        <p className="personal">{hobbies.summary}</p>
        <Link href="/projects" className="primary-link">View projects <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}

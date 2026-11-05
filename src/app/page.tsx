import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Gamepad2 } from 'lucide-react';
import { education, profile } from '../content';
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
        <ul className="hobby-icons" aria-label="Hobbies">
          <li><Camera size={20} role="img" aria-label="Photography" /></li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Soccer">
              <circle cx="12" cy="12" r="10" />
              <path d="m12 8 4 3-1.5 4.5h-5L8 11l4-3Zm0 0V2m4 9 5.7-1.8m-7.2 6.3 3.5 4.8m-8.5-4.8L6 20.3M8 11 2.3 9.2" />
            </svg>
          </li>
          <li><Gamepad2 size={20} role="img" aria-label="Gaming" /></li>
        </ul>
        <Link href="/projects" className="primary-link">View projects <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}

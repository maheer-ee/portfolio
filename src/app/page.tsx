import { Copyright } from 'lucide-react';
import Image from 'next/image';
import { ThemeShell, ThemeToggle } from '../components/theme';
import Clock from '../components/clock';
import {
  capture,
  contact,
  consuming,
  education,
  hobbies,
  profile,
  project,
  techStack,
} from '../content';
import headshot from '../assets/LinkedInHeadshotv2.jpg';

export default function Home() {
  return (
    <ThemeShell>
      <div className='page'>
        <header className='mb-8 flex items-center justify-between'>
          <div className='headline-wrap'>
            <Image
              src={headshot}
              width={72}
              height={72}
              priority
              alt={profile.name}
              className='headline-avatar'
            />
            <div className='headline'>
              <p className='headline-name'>{profile.name}</p>
              <p className='headline-role'>{profile.role}</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <div className='grid'>
          <div className='column'>
            <section className='card card-intro'>
              <h2 className='card-title'>Fun Personal Intro</h2>
              <p className='text-base'>{profile.intro}</p>
              <p className='muted text-base'>{profile.outro}</p>
            </section>

            <section className='card card-stack'>
              <h2 className='card-title'>Tech Stack</h2>
              <div className='stack'>
                {techStack.map((group) => (
                  <div
                    className='stack-row'
                    key={group.label}>
                    <p className='item-title'>{group.label}</p>
                    <p className='stack-items'>{group.items.join(' | ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className='card card-hobbies'>
              <h2 className='card-title'>Hobby Corner</h2>
              <div className='stack'>
                <div className='stack-row'>
                  <p className='item-title'>Photography</p>
                  <p className='item-sub'>{hobbies.photography}</p>
                </div>
                <div className='stack-row'>
                  <p className='item-title'>Gaming</p>
                  <p className='item-sub'>{hobbies.gaming}</p>
                </div>
              </div>
            </section>

            <section className='card card-contact'>
              <h2 className='card-title'>Contact</h2>
              <div className='list'>
                {contact.map((item) => {
                  const label = item.label.toLowerCase();
                  const raw = item.value;
                  let href = raw;

                  if (label.includes('email')) {
                    href = `mailto:${raw}`;
                  } else if (!raw.startsWith('http')) {
                    href = `https://${raw}`;
                  }

                  return (
                    <div
                      className='list-item'
                      key={item.label}>
                      <div className='muted text-sm'>{item.label}</div>
                      <div>
                        <a
                          className='item-title link'
                          href={href}
                          target='_blank'
                          rel='noreferrer'>
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className='muted text-sm'>
                Always open to collaborations, internships, and interesting
                conversations.
              </p>
            </section>
          </div>

          <div className='column'>
            <section className='card card-project'>
              <h2 className='card-title'>Projects / Startup</h2>
              <p className='item-title'>{project.name}</p>
              <p className='item-sub'>{project.summary}</p>
              <p className='muted text-sm'>What I worked on</p>
              <ul className='bullets'>
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className='muted text-sm'>{project.takeaway}</p>
            </section>

            <section className='card card-education'>
              <h2 className='card-title'>Education</h2>
              <p className='item-title'>{education.school}</p>
              <p className='item-sub'>{education.degree}</p>
              <p className='item-sub'>{education.honors}</p>
              <p className='muted text-sm'>Relevant Coursework</p>
              <p className='item-sub'>{education.coursework.join(' | ')}</p>
              <p className='muted text-sm'>{education.graduation}</p>
            </section>

            <section className='card card-capture'>
              <h2 className='card-title'>My Capture of the Day</h2>
              <p className='item-title'>{capture.title}</p>
              <p className='item-sub'>{capture.description}</p>
              <p className='muted text-sm'>Date: <Clock mode="date" /></p>
            </section>

            <section className='card card-consuming'>
              <h2 className='card-title'>Content Consumed</h2>
              <div className='stack'>
                <div className='stack-row'>
                  <p className='item-title'>Books</p>
                  <p className='stack-items'>{consuming.books.join(' | ')}</p>
                </div>
                <div className='stack-row'>
                  <p className='item-title'>Podcasts</p>
                  <p className='stack-items'>
                    {consuming.podcasts.join(' | ')}
                  </p>
                </div>
                <div className='stack-row'>
                  <p className='item-title'>Articles and Blogs</p>
                  <p className='stack-items'>
                    {consuming.articles.join(' | ')}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className='footer'>
          <p className='footer-line'>
            <span className='item-title footer-copyright'>
              <Copyright
                size={14}
                aria-hidden='true'
              />{' '}
              {profile.name}
            </span>
            <span className='footer-meta'>
              <Clock mode="footer" />
            </span>
          </p>
        </footer>
      </div>
    </ThemeShell>
  );
}

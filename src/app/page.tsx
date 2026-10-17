import { Copyright } from 'lucide-react';
import Image from 'next/image';
import { ThemeShell, ThemeToggle } from '../components/theme';
import Clock from '../components/clock';
import {
  contact,
  education,
  hobbies,
  profile,
  projects,
  research,
  work,
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
              <h1 className='headline-name'>{profile.name}</h1>
              <p className='headline-role'>{profile.role}</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <div className='grid'>
          <div className='column'>
            <section className='card card-intro'>
              <h2 className='card-title'>intro</h2>
              <div className='card-entries'>
                <div className='card-entry'>
                  <h3 className='item-title'>{profile.intro}</h3>
                  <p className='item-sub'>{profile.outro}</p>
                </div>
                <div className='card-entry'>
                  <h3 className='item-title'>{education.summary}</h3>
                  <p className='item-sub'>{education.gpa}</p>
                </div>
                <div className='card-entry'>
                  <h3 className='item-title'>{hobbies.hook}</h3>
                  <p className='item-sub'>{hobbies.summary}</p>
                </div>
              </div>
            </section>

            <section className='card card-stack'>
              <h2 className='card-title'>tech stack</h2>
              <div className='stack'>
                {techStack.map((group) => (
                  <div
                    className='stack-row'
                    key={group.label}>
                    <p className='item-title'>{group.label}</p>
                    <p className='stack-items'>{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className='card card-contact'>
              <h2 className='card-title'>building something interesting?</h2>
              <p className='item-title'>Let&apos;s talk.</p>
              <div className='list'>
                {contact.map((item) => {
                  const href =
                    item.label === 'Email'
                      ? `mailto:${item.value}`
                      : `https://${item.value}`;

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
            </section>
          </div>

          <div className='column'>
            <section className='card card-research'>
              <h2 className='card-title'>research</h2>
              <p className='item-title'>{research.hook}</p>
              <p className='item-sub'>{research.role}</p>
              <p className='item-sub'>{research.summary}</p>
            </section>

            <section className='card card-projects'>
              <h2 className='card-title'>projects</h2>
              <div className='card-entries'>
                {projects.map((project) => (
                  <article
                    className='card-entry'
                    key={project.name}>
                    <h3 className='item-title'>{project.name}</h3>
                    <p className='item-sub'>{project.hook}</p>
                    <p className='item-sub'>{project.summary}</p>
                    {project.detail && (
                      <p className='muted text-sm'>{project.detail}</p>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section className='card card-work'>
              <h2 className='card-title'>work</h2>
              <div className='card-entries'>
                {work.map((job) => (
                  <article
                    className='card-entry'
                    key={job.role}>
                    <h3 className='item-title'>{job.role}</h3>
                    <p className='item-sub'>{job.hook}</p>
                    <p className='item-sub'>{job.summary}</p>
                  </article>
                ))}
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
              <Clock mode='footer' />
            </span>
          </p>
        </footer>
      </div>
    </ThemeShell>
  );
}

import { Copyright, Moon, Sun } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  capture,
  contact,
  consuming,
  education,
  hobbies,
  profile,
  project,
  techStack,
} from './content';
import headshot from './assets/LinkedInHeadshotv2.png';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(now),
    [now],
  );

  const timeLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now),
    [now],
  );

  return (
    <main
      className='app min-h-screen'
      data-theme={theme}>
      <div className='page'>
        <header className='mb-8 flex items-center justify-between'>
          <div className='headline-wrap'>
            <img
              src={headshot}
              alt={profile.name}
              className='headline-avatar'
            />
            <div className='headline'>
              <p className='headline-name'>{profile.name}</p>
              <p className='headline-role'>{profile.role}</p>
            </div>
          </div>
          <button
            type='button'
            className='toggle'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-pressed={theme === 'dark'}
            aria-label={
              theme === 'light' ? 'Enable dark mode' : 'Enable light mode'
            }>
            {theme === 'dark' ? (
              <Sun
                size={20}
                aria-hidden='true'
              />
            ) : (
              <Moon
                size={20}
                aria-hidden='true'
              />
            )}
          </button>
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
              <p className='muted text-sm'>Date: {dateLabel}</p>
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
              <span className='item-sub footer-date'>{dateLabel}</span>
              <span className='item-sub footer-time'>{timeLabel}</span>
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;

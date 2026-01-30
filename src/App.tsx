import { Moon, Sun } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  capture,
  contact,
  consuming,
  education,
  hobbies,
  profile,
  project,
  sideStuff,
  techStack,
} from './content';
import headshot from './assets/LinkedIn Headshot v2.JPG';

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
          <section className='card'>
            <h2 className='card-title'>Intro</h2>
            <p className='text-base'>{profile.intro}</p>
            <p className='muted mt-4 text-base'>{profile.outro}</p>
          </section>

          <section className='card'>
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

          <section className='card'>
            <h2 className='card-title'>Projects / Startup</h2>
            <p className='item-title'>{project.name}</p>
            <p className='item-sub'>{project.summary}</p>
            <p className='muted mt-4 text-sm'>What I worked on</p>
            <ul className='bullets'>
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className='muted mt-4 text-sm'>{project.takeaway}</p>
          </section>

          <section className='card'>
            <h2 className='card-title'>Education</h2>
            <p className='item-title'>{education.school}</p>
            <p className='item-sub'>{education.degree}</p>
            <p className='item-sub'>{education.honors}</p>
            <p className='muted mt-4 text-sm'>Relevant Coursework</p>
            <p className='item-sub'>{education.coursework.join(' | ')}</p>
            <p className='muted mt-4 text-sm'>{education.graduation}</p>
          </section>

          <section className='card'>
            <h2 className='card-title'>Content Consumed</h2>
            <div className='stack'>
              <div className='stack-row'>
                <p className='item-title'>Books</p>
                <p className='stack-items'>{consuming.books.join(' | ')}</p>
              </div>
              <div className='stack-row'>
                <p className='item-title'>Podcasts</p>
                <p className='stack-items'>{consuming.podcasts.join(' | ')}</p>
              </div>
              <div className='stack-row'>
                <p className='item-title'>Articles and Blogs</p>
                <p className='stack-items'>{consuming.articles.join(' | ')}</p>
              </div>
            </div>
          </section>

          <section className='card'>
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

          <section className='card'>
            <h2 className='card-title'>Contact</h2>
            <div className='list'>
              {contact.map((item) => (
                <div
                  className='list-item'
                  key={item.label}>
                  <div className='muted text-sm'>{item.label}</div>
                  <div>
                    <p className='item-title'>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className='muted mt-4 text-sm'>
              Always open to collaborations, internships, and interesting
              conversations.
            </p>
          </section>

          <section className='card'>
            <h2 className='card-title'>My Capture of the Day</h2>
            <p className='item-title'>{capture.title}</p>
            <p className='item-sub'>{capture.description}</p>
            <p className='muted mt-4 text-sm'>Date: {dateLabel}</p>
          </section>
        </div>

        <footer className='footer'>
          <p className='footer-line'>
            <span className='item-title'>(c) {profile.name}</span>
            <span className='footer-sep'>•</span>
            <span className='item-sub'>{sideStuff.todayLabel}</span>
            <span className='footer-sep'>•</span>
            <span className='item-sub'>Local Time: {timeLabel}</span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;

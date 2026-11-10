'use client';

import { useEffect, useRef, useState } from 'react';
import './motion.css';

const chapters = [
  { word: 'Learn.', title: 'One idea at a time.', copy: 'Start with a focused lesson. Understand the concept, then put it to work.', code: 'name = "world"\nprint("Hello, " + name)', output: 'Hello, world', color: '#ecdcb9' },
  { word: 'Build.', title: 'Give your idea a shape.', copy: 'Turn the lesson into something you can run, explain, and revise.', code: 'def make_story(topic):\n    return "A story about " + topic\n\nmake_story("your next adventure")', output: 'A story about your next adventure', color: '#c5d1ac' },
  { word: 'Grow.', title: 'People in your corner.', copy: 'Get feedback in moderated group sessions. Ask questions, try again, and keep moving.', code: '# Project review\n✓ Explain what it does\n✓ Try another approach\n✓ Make the next revision', output: 'A clearer idea. A stronger project.', color: '#dfb99d' },
  { word: 'Ship.', title: 'Make it yours. Share it.', copy: 'Finish a capstone, receive a structured review, and prepare approved work for publication.', code: 'project = {\n  "built_by": "you",\n  "status": "ready to share"\n}', output: 'Your first finished project.', color: '#f0e7d4' },
];

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function ScrollMotion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let renderedScroll = window.scrollY;
    const elements = [...document.querySelectorAll<HTMLElement>('.cork-stage .section-heading, .track-card, .workshop-photo, .mentor-photo, .mentor-copy, .policy-card, .mission-quote, .mission-stats, .join-heading, .role-card, footer')];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('motion-visible');
    }), { threshold: 0.12 });
    elements.forEach(element => { element.classList.add('motion-reveal'); observer.observe(element); });

    // Let the browser scroll normally. Ease only the scene's response to it.
    const render = () => {
      const target = window.scrollY;
      renderedScroll += (target - renderedScroll) * 0.16;
      if (Math.abs(target - renderedScroll) < 0.5) renderedScroll = target;
      const runway = document.querySelector<HTMLElement>('.hero-runway');
      const ship = document.querySelector<HTMLElement>('.ship-stage');
      const courses = document.querySelector<HTMLElement>('.course-runway');
      if (runway) {
        const progress = clamp((renderedScroll - runway.offsetTop) / (runway.offsetHeight - innerHeight));
        runway.style.setProperty('--hero-progress', String(progress));
      }
      if (ship) {
        const progress = clamp((renderedScroll + innerHeight * 0.6 - ship.offsetTop) / ship.offsetHeight);
        ship.style.setProperty('--ship-progress', String(progress));
      }
      if (courses) {
        const top = courses.getBoundingClientRect().top + window.scrollY;
        courses.style.setProperty('--course-progress', String(clamp((renderedScroll - top) / Math.max(1, courses.offsetHeight - innerHeight))));
      }
      document.documentElement.style.setProperty('--page-progress', String(clamp(target / Math.max(1, document.documentElement.scrollHeight - innerHeight))));
      frame = Math.abs(target - renderedScroll) > 0.5 ? requestAnimationFrame(render) : 0;
    };
    const schedule = () => { if (!frame && !preference.matches) frame = requestAnimationFrame(render); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); preference.removeEventListener('change', schedule); elements.forEach(element => element.classList.remove('motion-reveal', 'motion-visible')); };
  }, []);
  return <div className="reading-progress" aria-hidden="true" />;
}

export function CourseControls() {
  return <div className="course-controls" aria-label="Course scene navigation">{['Python','Web','Games'].map((label,index)=><button key={label} onClick={()=>{
    const root = document.querySelector<HTMLElement>('.course-runway');
    if (root) window.scrollTo({top:root.getBoundingClientRect().top + window.scrollY + (root.offsetHeight-innerHeight)*(index/2),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }}>{label} <span>↗</span></button>)}</div>;
}

export default function ScrollExperience() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let current = 0;
    let previousChapter = -1;
    const render = () => {
      const range = root.offsetHeight - innerHeight;
      const target = clamp(-root.getBoundingClientRect().top / Math.max(1, range));
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.0003) current = target;
      root.style.setProperty('--journey-progress', String(current));
      const next = Math.min(3, Math.floor(current * 4));
      if (previousChapter !== next) { setActive(next); previousChapter = next; }
      root.querySelectorAll<HTMLElement>('.chapter').forEach((element, position) => {
        const index = position % chapters.length;
        const local = current * 4 - index;
        const visibility = clamp(local / .16) * (1 - clamp((local - .84) / .16));
        const opacity = index === 0 && local < .16 ? 1 : index === 3 && local > .84 ? 1 : visibility;
        element.style.setProperty('--chapter-opacity', String(opacity));
        element.style.setProperty('--chapter-shift', `${(1 - clamp(local / .2)) * 48 - clamp((local - .8) / .2) * 48}px`);
        element.setAttribute('aria-hidden', String(next !== index));
      });
      frame = Math.abs(target - current) > .0003 ? requestAnimationFrame(render) : 0;
    };
    const schedule = () => { if (!frame && !preference.matches) frame = requestAnimationFrame(render); };
    schedule();
    window.addEventListener('scroll', schedule, { passive:true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); preference.removeEventListener('change', schedule); };
  }, []);

  return <section className="journey-runway" id="how" ref={section} aria-label="The Steppa learning journey">
    <div className="journey-stage">
      <div className="journey-top"><span>THE PATH FROM CURIOUS TO CREATOR</span><span>0{active + 1} / 04</span></div>
      <div className="chapter-text">{chapters.map((chapter, index) => <div className="chapter" key={chapter.word} style={{ '--chapter-opacity': index === 0 ? 1 : 0 } as React.CSSProperties}><h2>{chapter.word}</h2><h3>{chapter.title}</h3><p>{chapter.copy}</p></div>)}</div>
      <div className="notebook-space">
        <div className={'notebook-object' + (flipped ? ' is-flipped' : '')}>
          <div className="notebook-back"><span>YOUR FIRST<br />FINISHED PROJECT.</span><small>Built by you. Supported by Steppa.</small></div>
          <div className="notebook-front">
            <div className="book-cover"><span>STEPPA</span><strong>A place<br />to start.</strong><small>NOTES FROM YOUR NEXT CHAPTER</small></div>
            <div className="book-pages"><span className="page-label">PROJECT NOTES / 0{active + 1}</span><div className="notebook-content">{chapters.map((chapter,index) => <div className="chapter" key={chapter.word} style={{ '--chapter-opacity': index === 0 ? 1 : 0 } as React.CSSProperties}><span className="paper-tag" style={{background:chapter.color}}>{chapter.word}</span><pre>{chapter.code}</pre><div className="project-output"><span>OUTPUT</span><p>{chapter.output}</p></div></div>)}</div><small>Illustrative pilot project, not learner-submitted work</small></div>
          </div>
        </div>
      </div>
      <div className="journey-bottom"><div className="chapter-dots" aria-label="Learning chapter">{chapters.map((chapter,index) => <button key={chapter.word} aria-label={'Go to '+chapter.word} aria-pressed={active === index} onClick={() => { const root = section.current; if(root) window.scrollTo({top:root.offsetTop + (root.offsetHeight-innerHeight)*((index+.45)/4),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}); }}><span>0{index+1}</span>{chapter.word}</button>)}</div><button className="flip-notebook" onClick={()=>setFlipped(!flipped)} aria-pressed={flipped}>{flipped?'See project notes ↻':'Turn the notebook ↻'}</button><span className="journey-scroll">Keep scrolling ↓</span></div>
    </div>
    <div className="reduced-journey">{chapters.map(chapter=><article key={chapter.word}><h2>{chapter.word}</h2><h3>{chapter.title}</h3><p>{chapter.copy}</p></article>)}</div>
  </section>;
}

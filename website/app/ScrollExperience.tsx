'use client';

import { useState } from 'react';
import './motion.css';

const chapters = [
  { word: 'Learn', title: 'One idea at a time.', copy: 'Start with a focused lesson. Understand the concept, then put it to work.', code: 'name = "world"\nprint("Hello, " + name)', output: 'Hello, world' },
  { word: 'Build', title: 'Give your idea a shape.', copy: 'Turn the lesson into something you can run, explain, and revise.', code: 'def make_story(topic):\n    return "A story about " + topic\n\nprint(make_story("your next adventure"))', output: 'A story about your next adventure' },
  { word: 'Grow', title: 'People in your corner.', copy: 'Get feedback in moderated group sessions. Ask questions, try again, and keep moving.', code: '# Project review\n# Explain what it does\n# Try another approach\n# Make the next revision', output: 'A clearer idea. A stronger project.' },
  { word: 'Ship', title: 'Make it yours. Share it.', copy: 'Finish a capstone, receive a structured review, and prepare approved work for publication.', code: 'project = {\n    "built_by": "you",\n    "status": "ready to share"\n}\nprint(project["status"])', output: 'ready to share' },
];

export default function ScrollExperience() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <section className="learning-journey" id="how" aria-labelledby="journey-title">
      <div className="journey-copy">
        <h2 id="journey-title">A first line of code.<br /><em>A project of your own.</em></h2>
        <div className="chapter-controls" aria-label="Explore the learning journey">
          {chapters.map((item, index) => (
            <button key={item.word} type="button" aria-pressed={active === index} aria-controls="chapter-preview" onClick={() => setActive(index)}>
              <span aria-hidden="true">{index + 1}</span>{item.word}
            </button>
          ))}
        </div>
        <div id="chapter-preview" className="chapter-description" aria-live="polite">
          <h3>{chapter.title}</h3>
          <p>{chapter.copy}</p>
        </div>
      </div>
      <div className="project-notebook">
        <div className="notebook-heading"><span>Steppa project notes</span><span>{active + 1} / 4</span></div>
        <pre><code>{chapter.code}</code></pre>
        <div className="notebook-output"><span>Output</span><p>{chapter.output}</p></div>
        <small>Illustrative pilot project</small>
      </div>
    </section>
  );
}

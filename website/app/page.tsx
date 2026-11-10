import ScrollExperience, { ScrollMotion, CourseControls } from './ScrollExperience';

const tracks = [
  { label: 'First pilot', title: 'Python foundations', detail: 'Learn core programming concepts through four guided projects and one final capstone.', color: 'sun' },
  { label: 'Planned next', title: 'Web development', detail: 'Build the foundations of the web, then publish a complete personal portfolio.', color: 'mint' },
  { label: 'Future program', title: 'Game development', detail: 'Combine code, visual design, and storytelling to create a game other people can play.', color: 'rose' },
];

const steps = [
  ['01', 'Learn a focused concept', 'Short lessons introduce one practical idea at a time.'],
  ['02', 'Build a real project', 'Every module ends with something you made, not another passive quiz.'],
  ['03', 'Get human support', 'Moderated group sessions help learners understand problems and keep moving.'],
  ['04', 'Publish a capstone', 'Approved work receives structured feedback and practical publishing support.'],
];

const roles = [
  { id: 'learners', eyebrow: 'Learners', title: 'Join the first cohort', copy: 'A free project-based Python pilot for ages 13 to 18. Beginners are welcome.', status: 'Enrollment is closed', className: 'role-yellow' },
  { id: 'volunteers', eyebrow: 'Volunteers', title: 'Help learners progress', copy: 'Support curriculum, group mentoring, moderation, or project reviews. Mentors will be screened and trained before working with learners.', status: 'Recruitment is closed', className: 'role-green' },
  { id: 'partners', eyebrow: 'Partners', title: 'Expand access', copy: 'Schools, libraries, and technology partners can help Steppa reach learners who need a place to start.', status: 'Outreach is in preparation', className: 'role-cream' },
];

const donationUrl = 'https://hcb.hackclub.com/donations/start/steppa';

const questions = [
  { title: 'What will I build in the Python pilot?', answer: 'The planned projects cover an interactive story, a choice-based game, a small data tool, and an automation or text-generation exercise. You’ll then build a capstone of your own.' },
  { title: 'Where will the pilot happen?', answer: 'The course is planned online, with one moderated group help session per week. Any Orlando-area meetup will depend on venue and safety arrangements.' },
  { title: 'What is Ship It?', answer: 'Ship It is the final review and showcase. Learners get feedback on their capstones and can choose to share approved work with the required permissions.' },
  { title: 'When can I apply?', answer: 'There’s no opening date yet. Learners and guardians will be able to review the schedule, consent process, and privacy notice before applications open.' },
];

const policies = [
  { label: 'Privacy', title: 'Collect only what the program needs', copy: 'Steppa will explain what information is collected, why it is needed, how it is stored, and when it is deleted before applications open.' },
  { label: 'Safeguarding', title: 'Keep learner support visible', copy: 'Group sessions will be moderated. Private adult-to-minor channels will not be the default, and concerns will follow a documented reporting process.' },
  { label: 'Guardians', title: 'Share expectations before participation', copy: 'Guardians will receive the schedule, communication boundaries, publishing permissions, and program terms before a learner joins.' },
];

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <div className="hero-runway">
      <section className="paper-stage" id="top">
        <img className="desk-scene" src="/steppa-makers-desk.png" alt="A maker’s desk with a notebook, cutting mat, and laptop" fetchPriority="high" />
        <div className="desk-shade" aria-hidden="true" />
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Steppa home">
            <span className="wordmark-mark" aria-hidden="true">s.</span><span className="nav-brand">steppa</span>
          </a>
          <div className="nav-links">
            <a href="#tracks">Courses</a>
            <a href="#how">How it works</a>
            <a href="#safety">Safety</a>
            <a href="#mission">About</a>
            <a href="#support">Donate</a>
          </div>
          <a className="nav-cta" href="#join">Get involved <span aria-hidden="true">↗</span></a>
          <details className="mobile-menu"><summary>Menu</summary><div><a href="#tracks">Courses</a><a href="#how">How it works</a><a href="#safety">Safety</a><a href="#mission">About</a><a href="#join">Get involved</a><a href="#support">Donate</a></div></details>
        </nav>
        <div className="scene-title"><p>Made for curious minds. Built for real projects.</p><h1>STEPPA.</h1></div>
        <div className="hero-shell">
          <div className="hero-copy">
            <h2>Free coding.<br />Human support.<br />Finished work.</h2>
            <p className="hero-lede">A free path from first lesson to a project you’re proud to share.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#join">View the first pilot</a>
              <a className="button button-quiet" href="#how">See how Steppa works</a>
            </div>
            <p className="hero-note">Free to join · Orlando and online · Applications opening after safeguards are ready</p>
          </div>
          <p className="scene-description">A first line of code.<br />A project of your own.<br />Somewhere to start.</p>
          <div className="hero-board">
            <div className="tape tape-one" aria-hidden="true" />
            <div className="tape tape-two" aria-hidden="true" />
            <figure className="hero-photo">
              <img src="/mentor-students.jpg" width="1600" height="1067" loading="eager" fetchPriority="high" alt="A teacher and a group of teenage students collaborating around two laptops" />
              <figcaption>
                <strong>Learning works better together.</strong>
                <span>Steppa is building focused lessons, real projects, and structured human support.</span>
                <a href="https://www.pexels.com/photo/a-children-looking-the-laptop-5212687/" target="_blank" rel="noreferrer">Photo by Max Fischer on Pexels</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <a className="scene-scroll" href="#tracks">↓ Scroll to explore</a>
        <span className="scene-label">STEPPA / FIRST CHAPTER</span>
      </section>
      </div>

      <ScrollExperience />

      <section className="cork-stage" id="tracks">
        <div className="course-runway"><div className="course-stage">
        <div className="section-heading">
          <p className="eyebrow light">A focused program built to expand carefully</p>
          <h2>Start with one course. Finish with <em>real work.</em></h2>
          <p>Python launches first. New tracks follow after the pilot proves the learning and support model.</p>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <article className={"track-card " + track.color} key={track.title}>
              <span className="pushpin" aria-hidden="true" />
              <p>{track.label}</p>
              <h3>{track.title}</h3>
              <div className="project-line" aria-hidden="true"><span /><span /><span /></div>
              <p className="track-detail">{track.detail}</p>
              <a href="#join">View pilot status <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
        <span className="course-scroll-note">Scroll to explore the tracks →</span>
        <CourseControls />
        </div></div>
        <figure className="workshop-photo">
          <img src="/teen-coding.jpg" width="1600" height="1067" loading="lazy" alt="A teenager working at a computer with programming code visible on the screen" />
          <figcaption>
            <div><strong>Built around making.</strong><span>Lessons lead to code learners can run, explain, revise, and share.</span></div>
            <a href="https://www.pexels.com/photo/person-using-computer-on-table-4709292/" target="_blank" rel="noreferrer">Photo by cottonbro studio on Pexels</a>
          </figcaption>
        </figure>
      </section>

      <section className="how-stage journey-summary" id="journey-summary">
        <div className="section-kicker">How Steppa works</div>
        <div className="how-heading">
          <h2>A clear path from first lesson to <em>published capstone.</em></h2>
          <p>Each step has a purpose. Learners always know what they are building and what comes next.</p>
        </div>
        <div className="step-list">
          {steps.map(([number, title, copy]) => (
            <article className="step-row" key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ship-stage">
        <div className="ship-inner">
          <div className="ship-copy">
            <p className="eyebrow light">The Steppa difference</p>
            <h2>Turn learning into <em>finished work.</em></h2>
            <p>Learners complete a capstone, receive a structured review, and get support preparing approved projects for publication.</p>
            <ul>
              <li><span aria-hidden="true">✓</span> Human feedback using a consistent project rubric</li>
              <li><span aria-hidden="true">✓</span> Guidance polishing the project story and demonstration</li>
              <li><span aria-hidden="true">✓</span> Publishing support with permission and privacy controls</li>
            </ul>
            <a className="button button-sun" href="#join">See the pilot plan</a>
          </div>
          <div className="project-stack" aria-label="Planned examples from the Steppa pilot curriculum">
            <article className="project-card project-back"><span>Pilot project</span><strong>Weather<br/>dashboard</strong><small>Planned Python and API exercise</small></article>
            <article className="project-card project-mid"><span>Future course</span><strong>Personal<br/>portfolio</strong><small>Planned web publishing exercise</small></article>
            <article className="project-card project-front"><div className="pin" aria-hidden="true"/><span>Example capstone</span><strong>Build a small<br/>text generator</strong><small>A curriculum example, not learner-submitted work</small><b>Python pilot</b></article>
          </div>
        </div>
      </section>

      <section className="mentor-stage">
        <div className="mentor-grid">
          <figure className="mentor-photo">
            <span className="pushpin" aria-hidden="true" />
            <img src="/students-classroom.jpg" width="1600" height="1067" loading="lazy" alt="Students using computers in a classroom while a teacher supervises" />
            <figcaption>
              Moderated support in a visible learning environment
              <a href="https://www.pexels.com/photo/students-busy-using-laptops-in-the-classroom-7742816/" target="_blank" rel="noreferrer">Photo by Alena Darmel on Pexels</a>
            </figcaption>
          </figure>
          <div className="mentor-copy">
            <p className="eyebrow">Mentorship that stays safe and useful</p>
            <h2>Get help when you <em>need it.</em></h2>
            <p>Steppa combines self-paced lessons with structured, moderated support from trained peer and adult volunteers.</p>
            <div className="mentor-features">
              <div><strong>Weekly group help</strong><span>Live online sessions focused on current projects</span></div>
              <div><strong>Clear safety boundaries</strong><span>Visible moderation, documented expectations, and guardian information</span></div>
              <div><strong>Explanations that build confidence</strong><span>Support helps learners understand the problem instead of handing over the answer</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="safety-stage" id="safety">
        <div className="safety-heading">
          <p className="eyebrow">Pilot commitments</p>
          <h2>Safety and privacy come before enrollment.</h2>
          <p>These commitments will be turned into complete, reviewable policies before Steppa collects applications or runs learner sessions.</p>
        </div>
        <div className="policy-grid">
          {policies.map((policy) => (
            <article className="policy-card" key={policy.label}>
              <p>{policy.label}</p>
              <h3>{policy.title}</h3>
              <span>{policy.copy}</span>
            </article>
          ))}
        </div>
        <p className="policy-note"><strong>Program terms:</strong> Participation expectations, conduct rules, withdrawal options, project ownership, and publication consent will be shared in plain language before enrollment.</p>
      </section>

      <section className="mission-stage" id="mission">
        <div className="mission-quote">
          <p className="eyebrow light">Why Steppa exists</p>
          <blockquote>Talent is everywhere.<br/><em>Access to sustained support is not.</em></blockquote>
          <p>Steppa is building a free path from first lesson to a project a young person can confidently share.</p>
        </div>
        <div className="mission-stats">
          <div><strong>100%</strong><span>Free for learners</span></div>
          <div><strong>4</strong><span>Required pilot projects</span></div>
          <div><strong>13 to 18</strong><span>First pilot age range</span></div>
          <div><strong>1</strong><span>Published capstone goal</span></div>
        </div>
      </section>

      <section className="join-stage" id="join">
        <div className="join-heading">
          <p className="eyebrow">First pilot in Orlando and online</p>
          <h2>Steppa is preparing its first <em>small cohort.</em></h2>
          <p>Applications and partner outreach will open after the safeguarding, privacy, and contact systems are ready.</p>
        </div>
        <div className="role-grid">
          {roles.map((role) => (
            <article className={"role-card " + role.className} id={role.id} key={role.id}>
              <span className="pushpin" aria-hidden="true"/>
              <p>{role.eyebrow}</p>
              <h3>{role.title}</h3>
              <span>{role.copy}</span>
              <strong>{role.status}</strong>
            </article>
          ))}
        </div>
        <div className="join-note">
          <span>Want to understand the program first?</span>
          <a href="#safety">Review the pilot commitments</a>
        </div>
      </section>

      <section className="safety-stage launch-faq" id="faq" aria-labelledby="faq-title">
        <div className="safety-heading">
          <p className="eyebrow">Pilot FAQ</p>
          <h2 id="faq-title">Before you join</h2>
        </div>
        <div className="faq-list">
          {questions.map(({ title, answer }) => (
            <details key={title}>
              <summary>{title}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="ship-stage" id="support" aria-labelledby="support-title">
        <div className="ship-inner support-inner">
          <div className="ship-copy">
            <p className="eyebrow light">Support Steppa</p>
            <h2 id="support-title">Help keep the pilot <em>free.</em></h2>
            <p>Help us build the first Python course, prepare volunteers for moderated group sessions, and give learners a place to share their finished projects.</p>
            <a className="button button-sun" href={donationUrl}>Donate to Steppa through HCB</a>
            <p>Hack Club’s HCB handles one-time and monthly gifts on Steppa’s donation page.</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top"><span className="wordmark-mark" aria-hidden="true">S</span><span>Steppa</span></a>
        <p>Free coding courses that help teens ship real projects.</p>
        <div><a href="#tracks">Courses</a><a href="#how">How it works</a><a href="#safety">Safety</a><a href="#mission">About</a><a href="#join">Pilot</a><a href="#faq">FAQ</a><a href="#support">Donate</a></div>
        <small>© 2026 Steppa · Pilot-stage nonprofit project · Orlando and online</small>
      </footer>
    </main>
  );
}

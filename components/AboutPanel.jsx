'use client';

export default function AboutPanel({ onBack, onNext }) {
  return (
    <div className="panel about">
      <div className="about-inner">
        <div className="back-hint">‹ back</div>
        <h2>{'// about me'}</h2>
        <h1>A bit more<br />about Linkb.</h1>
        <p>
          I&apos;m Link — a developer from <strong>Amsterdam</strong> who loves building
          things that work well and feel even better. I move fast, sweat the details,
          and care about how a product actually feels to use.
        </p>
        <p>
          Mostly I build with <strong>Next.js</strong> and <strong>React</strong>, with a
          soft spot for animation and clean interfaces. From SaaS platforms to landing
          pages to AI tools — if it lives on the web, I&apos;ll build it.
        </p>
        <p>
          When I&apos;m not on a client project, I&apos;m usually vibe coding something of
          my own — building side-projects and experiments just for the fun of making things.
        </p>
        <div className="meta">
          <div><div className="k">LOCATION</div><div className="v">Amsterdam, NL</div></div>
          <div><div className="k">STACK</div><div className="v">Next.js · React · JS</div></div>
          <div><div className="k">FOCUS</div><div className="v">Web apps &amp; SaaS</div></div>
          <div><div className="k">STATUS</div><div className="v">Available for work</div></div>
        </div>
      </div>
      <button className="arrow left-a" onClick={onBack} aria-label="Back"><span className="arr-inner"><span className="arr-line" /><span className="arr-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg></span></span></button>
      <button className="arrow right-a" onClick={onNext} aria-label="Projects"><span className="arr-inner"><span className="arr-line" /><span className="arr-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span></span></button>
    </div>
  );
}
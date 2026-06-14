'use client';

import { useState, useEffect } from 'react';
import ShaderCanvas from './ShaderCanvas';

const projects = [
  {
    idx: '01',
    title: 'Lumen',
    year: '2026',
    role: 'Solo build',
    blurb: 'AI website & app builder',
    href: 'https://lumensaas.vercel.app/',
    desc: 'An AI website & app builder — type a prompt and get a working app. Morphing landing page, GitHub OAuth, and a live build view with chat sidebar.',
    tags: ['Next.js', 'NextAuth', 'AI'],
    hue: { edge: [150, 120, 255], core: [120, 70, 240], edgeLight: [140, 90, 230], coreLight: [90, 40, 200] },
  },
  {
    idx: '02',
    title: 'CorvusTiers',
    year: '2026',
    role: 'Client work',
    blurb: 'Minecraft PvP tier-ranking site',
    href: 'https://corvustiers.vercel.app/',
    desc: 'A Minecraft PvP tier-ranking site built for a client. Dark gaming UI with indigo accents, a podium layout, and a custom SVG logo.',
    tags: ['Next.js', 'CSS', 'UI Design'],
    hue: { edge: [120, 140, 255], core: [70, 90, 230], edgeLight: [90, 110, 235], coreLight: [40, 60, 200] },
  },
  {
    idx: '03',
    title: 'VisitVenice',
    year: '2026',
    role: 'Design & dev',
    blurb: 'Editorial tourism website',
    href: 'https://visit-venice-eta.vercel.app/',
    desc: 'A tourism site for Venice with a video hero, bento-grid sections, and editorial design. Built entirely in pure CSS, deployed on Vercel.',
    tags: ['Next.js', 'Pure CSS', 'Vercel'],
    hue: { edge: [255, 180, 120], core: [240, 120, 50], edgeLight: [230, 140, 60], coreLight: [200, 90, 20] },
  },
];

export default function ProjectsPanel({ onBack, onNext }) {
  const [active, setActive] = useState(0);
  const p = projects[active];

  // up/down arrows cycle projects (only matters when this panel is in view)
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(projects.length - 1, a + 1)); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="panel projects-panel">
      <div className="projects-page">
        {/* LEFT */}
        <div className="proj-left">
          <h2>{'// selected work'}</h2>
          <h1>A few things I&apos;ve built.</h1>

          <div className="proj-list">
            {projects.map((proj, i) => (
              <button
                key={proj.idx}
                className={`proj-row${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="proj-idx">{proj.idx}</span>
                <span className="proj-info">
                  <span className="proj-title">{proj.title}</span>
                  <span className="proj-blurb">{proj.blurb}</span>
                </span>
                <span className="proj-year">{proj.year}</span>
              </button>
            ))}
          </div>

          <a className="proj-github" href="https://github.com/savewinkie" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" /></svg>
            See all my projects on GitHub
          </a>
        </div>

        {/* RIGHT */}
        <div className="proj-right">
          {/* crossfade shaders: keyed so each swap remounts with a fade */}
          <div className="shader-stack">
            <ShaderCanvas variant={active} hue={p.hue} />
          </div>

          {/* giant faded project number watermark */}
          <div className="proj-watermark" key={`w-${active}`}>{p.idx}</div>

          <a className="proj-detail-overlay" key={`d-${active}`} href={p.href} target="_blank" rel="noreferrer">
            <div className="d-meta">
              <span>{p.role}</span><span className="d-dot">·</span><span>{p.year}</span>
            </div>
            <div className="d-name">{p.title}</div>
            <p>{p.desc}</p>
            <div className="d-tags">
              {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="d-cta">View project <span className="d-arrow">↗</span></div>
          </a>

          {/* progress dots */}
          <div className="proj-progress">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`pg-dot${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="arrow left-a" onClick={onBack} aria-label="Back">‹</button>
        <button className="arrow right-a" onClick={onNext} aria-label="Pricing">›</button>
      </div>
    </div>
  );
}
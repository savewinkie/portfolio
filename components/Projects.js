'use client';

const projects = [
  {
    id: '01',
    title: 'VisitVenice',
    desc: 'A cinematic, dark-themed tourism website for Venice. Premium editorial feel with full-screen video hero, discover grid, events accordion, and smooth scroll animations.',
    tech: ['Next.js', 'Pure CSS', 'Vercel', 'Mixkit Video'],
    demo: 'https://visit-venice-eta.vercel.app',
    github: 'https://github.com/savewinkie/visitvenice',
    featured: true,
  },
  {
    id: '02',
    title: 'IMAGE-TOOLZ',
    desc: 'Browser-based image editor with resizer, professional editor, layers, filters, social media presets, watermarks, and more. No signup required.',
    tech: ['Next.js', 'Supabase', 'Vercel'],
    demo: 'https://image-toolz.vercel.app',
    github: 'https://github.com/savewinkie/image-toolz',
    featured: false,
  },
  {
    id: '03',
    title: 'Lumen',
    desc: 'AI SaaS platform with multi-agent workflows that write features, open pull requests, and deploy to production. Built for ambitious engineering teams.',
    tech: ['Next.js', 'AI Agents', 'SaaS', 'Vercel'],
    demo: 'https://lumensaas.vercel.app',
    github: 'https://github.com/savewinkie/lumen',
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <section id="projects">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>projects</h2>
        <div className="sec-line" />
      </div>

      <div className="projects-grid">
        {/* Featured */}
        <div
          className="project-card featured reveal"
          onClick={() => openLink(featured.demo)}
          style={{ cursor: 'pointer' }}
        >
          <div className="project-bar">
            <div className="project-bar-dots">
              <div className="project-bar-dot" style={{ background: '#ff5f57' }} />
              <div className="project-bar-dot" style={{ background: '#ffbd2e' }} />
              <div className="project-bar-dot" style={{ background: '#28ca42' }} />
            </div>
            <span className="project-bar-title">{featured.title.toLowerCase()}</span>
            <span className="project-live-badge">● live</span>
          </div>
          <div className="project-body">
            <div className="project-num">Featured — {featured.id}</div>
            <div className="project-name">{featured.title}</div>
            <p className="project-desc">{featured.desc}</p>
            <div className="project-tech">
              {featured.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links" onClick={e => e.stopPropagation()}>
              <span onClick={() => openLink(featured.demo)} className="project-link" style={{ cursor: 'pointer' }}>↗ Live Demo</span>
              <span onClick={() => openLink(featured.github)} className="project-link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Rest */}
        {rest.map(p => (
          <div
            key={p.id}
            className="project-card reveal"
            onClick={() => openLink(p.demo)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-bar">
              <div className="project-bar-dots">
                <div className="project-bar-dot" style={{ background: '#ff5f57' }} />
                <div className="project-bar-dot" style={{ background: '#ffbd2e' }} />
                <div className="project-bar-dot" style={{ background: '#28ca42' }} />
              </div>
              <span className="project-bar-title">{p.title.toLowerCase()}</span>
              <span className="project-live-badge">● live</span>
            </div>
            <div className="project-body">
              <div className="project-num">{p.id}</div>
              <div className="project-name">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links" onClick={e => e.stopPropagation()}>
                <span onClick={() => openLink(p.demo)} className="project-link" style={{ cursor: 'pointer' }}>↗ Live Demo</span>
                <span onClick={() => openLink(p.github)} className="project-link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
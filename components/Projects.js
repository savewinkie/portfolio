const projects = [
  {
    id: '01',
    slug: 'visitvenice.js',
    title: 'VisitVenice',
    desc: 'A cinematic, dark-themed tourism website for Venice. Premium editorial feel with full-screen video hero, scroll animations, and immersive design.',
    tech: ['Next.js', 'Pure CSS', 'Vercel', 'Mixkit Video'],
    demo: 'https://visitvenice.vercel.app',
    github: 'https://github.com/savewinkie/visitvenice',
    featured: true,
  },
  {
    id: '02',
    slug: 'image-toolz.js',
    title: 'IMAGE-TOOLZ',
    desc: 'Full-featured image editor with resize, crop, filters, stickers, and text tools. Built with Next.js and deployed on Netlify.',
    tech: ['Next.js', 'Supabase', 'Netlify'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: '03',
    slug: 'portfolio.js',
    title: 'Portfolio v2',
    desc: 'This portfolio — a terminal-style dark portfolio with typewriter animations and a vibe-coder aesthetic.',
    tech: ['Next.js', 'CSS', 'Lucide', 'Vercel'],
    demo: '#',
    github: '#',
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>projects</h2>
        <div className="sec-line" />
      </div>

      <div className="projects-grid">
        <div className="project-card featured reveal">
          <div className="project-bar">
            <div className="project-bar-dots">
              <div className="project-bar-dot" style={{ background: '#ff5f57' }} />
              <div className="project-bar-dot" style={{ background: '#ffbd2e' }} />
              <div className="project-bar-dot" style={{ background: '#28ca42' }} />
            </div>
            <span className="project-bar-title">{featured.slug}</span>
          </div>
          <div className="project-body">
            <div className="project-num">Featured — {featured.id}</div>
            <div className="project-name">{featured.title}</div>
            <p className="project-desc">{featured.desc}</p>
            <div className="project-tech">
              {featured.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="project-link">↗ Live Demo</a>
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-link">⌥ GitHub</a>
            </div>
          </div>
        </div>

        {rest.map(p => (
          <div className="project-card reveal" key={p.id}>
            <div className="project-bar">
              <div className="project-bar-dots">
                <div className="project-bar-dot" />
                <div className="project-bar-dot" />
                <div className="project-bar-dot" />
              </div>
              <span className="project-bar-title">{p.slug}</span>
            </div>
            <div className="project-body">
              <div className="project-num">{p.id}</div>
              <div className="project-name">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.demo} className="project-link">↗ Demo</a>
                <a href={p.github} className="project-link">⌥ GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
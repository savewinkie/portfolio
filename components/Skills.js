'use client';

import { useState, useEffect } from 'react';
import { Code2, Server, Sparkles, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase, X, Mail } from 'lucide-react';

const groups = [
  {
    Icon: Code2,
    label: 'Frontend',
    color: '#61afef',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS'],
  },
  {
    Icon: Server,
    label: 'Backend',
    color: '#98c379',
    skills: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Auth', 'Automation'],
  },
  {
    Icon: Sparkles,
    label: 'Tools',
    color: '#c678dd',
    skills: ['VS Code', 'GitHub', 'Vercel', 'Figma', 'Claude', 'AI Tools'],
  },
];

const builds = [
  { Icon: Layers,      color: '#c678dd', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.', tags: ['Next.js', 'Node.js', 'DB'] },
  { Icon: Globe,       color: '#61afef', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',         tags: ['Next.js', 'CSS', 'Vercel'] },
  { Icon: Bot,         color: '#56b6c2', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',    tags: ['Claude API', 'Python'] },
  { Icon: PackageOpen, color: '#e5c07b', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',         tags: ['Full-Stack', 'Ship Fast'] },
  { Icon: AppWindow,   color: '#c678dd', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',        tags: ['React', 'JavaScript'] },
  { Icon: FileCode,    color: '#61afef', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.',     tags: ['Next.js', 'Design'] },
  { Icon: Briefcase,   color: '#98c379', title: 'Portfolio Sites',   desc: 'Memorable portfolios with a lasting impression.',      tags: ['Next.js', 'Animations'] },
  { Icon: Zap,         color: '#e06c75', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of work.',            tags: ['Python', 'Node.js'] },
];

export default function Skills() {
  const [open, setOpen] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="skills-bg" id="skills">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-layout reveal">
        {/* LEFT: Skills grid */}
        <div className="skills-content">
          {groups.map((g) => (
            <div className="skill-block" key={g.label}>
              <div className="skill-block-head">
                <span className="skill-block-icon" style={{ color: g.color, background: `${g.color}15`, borderColor: `${g.color}30` }}>
                  <g.Icon size={15} strokeWidth={1.8} />
                </span>
                <h3 className="skill-block-title">{g.label}</h3>
                <span className="skill-block-count">{g.skills.length}</span>
              </div>
              <div className="skill-block-tags">
                {g.skills.map((s) => (
                  <span className="skill-chip-v2" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky letter/envelope */}
        <div className="skills-side">
          <div className="letter-sticky">
            <button
              className={`letter ${open ? 'opening' : ''}`}
              onClick={() => setOpen(true)}
              aria-label="Open what I build"
            >
              <div className="letter-stamp">
                <Mail size={14} strokeWidth={1.8} />
              </div>
              <div className="letter-flap" />
              <div className="letter-body">
                <div className="letter-line" />
                <div className="letter-line short" />
                <div className="letter-line" />
                <div className="letter-line short" />
              </div>
              <div className="letter-corner">✉</div>
              <div className="letter-shadow" />
              <div className="letter-cta">
                <span className="letter-cta-label mono">// click to open</span>
                <span className="letter-cta-title">What I Build</span>
                <span className="letter-cta-meta mono">8 things →</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Foggy backdrop */}
      <div
        className={`builds-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer (slides from right with the open letter) */}
      <aside className={`builds-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="builds-drawer-header">
          <div>
            <div className="builds-drawer-pre mono">// what i build</div>
            <h3 className="builds-drawer-title">Things I ship</h3>
          </div>
          <button className="builds-drawer-close" onClick={() => setOpen(false)} aria-label="Close">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="builds-drawer-body">
          {builds.map((b, i) => (
            <div className="build-item" key={b.title} style={{ '--delay': `${i * 0.04}s` }}>
              <div className="build-item-icon" style={{ color: b.color, background: `${b.color}15`, borderColor: `${b.color}30` }}>
                <b.Icon size={16} strokeWidth={1.8} />
              </div>
              <div className="build-item-info">
                <div className="build-item-title">{b.title}</div>
                <div className="build-item-desc">{b.desc}</div>
                <div className="build-item-tags">
                  {b.tags.map(t => <span className="build-item-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="builds-drawer-footer">
          <span className="mono">{builds.length} items</span>
          <span className="mono">esc to close</span>
        </div>
      </aside>
    </section>
  );
}
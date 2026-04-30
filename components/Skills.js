'use client';

import { useState, useEffect } from 'react';
import { Code2, Server, Sparkles, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase, X, FolderOpen } from 'lucide-react';

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

  // Lock scroll when drawer open
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

      <div className="skills-list reveal">
        {groups.map((g) => (
          <div className="skill-row" key={g.label}>
            <div className="skill-row-head">
              <span className="skill-row-icon" style={{ color: g.color, background: `${g.color}15`, borderColor: `${g.color}30` }}>
                <g.Icon size={14} strokeWidth={1.8} />
              </span>
              <span className="skill-row-label">{g.label}</span>
            </div>
            <div className="skill-row-tags">
              {g.skills.map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA button to open drawer */}
      <button
        className="builds-cta reveal"
        onClick={() => setOpen(true)}
      >
        <FolderOpen size={16} strokeWidth={1.8} />
        <span>see what i build</span>
        <span className="builds-cta-arrow">→</span>
      </button>

      {/* Backdrop */}
      <div
        className={`builds-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out drawer */}
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
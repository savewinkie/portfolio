'use client';

import { useState } from 'react';
import { Code2, Server, Sparkles, FolderOpen, Folder, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase, X } from 'lucide-react';

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
  { Icon: Layers,      color: '#c678dd', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.' },
  { Icon: Globe,       color: '#61afef', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.' },
  { Icon: Bot,         color: '#56b6c2', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.' },
  { Icon: PackageOpen, color: '#e5c07b', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.' },
  { Icon: AppWindow,   color: '#c678dd', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.' },
  { Icon: FileCode,    color: '#61afef', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.' },
  { Icon: Briefcase,   color: '#98c379', title: 'Portfolio Sites',   desc: 'Memorable portfolios with a lasting impression.' },
  { Icon: Zap,         color: '#e06c75', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of work.' },
];

export default function Skills() {
  const [open, setOpen] = useState(false);

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

        {/* Folder row at the bottom */}
        <button
          className={`skill-folder-row ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="skill-row-head">
            <span className="skill-row-icon folder-icon">
              {open ? <FolderOpen size={14} strokeWidth={1.8} /> : <Folder size={14} strokeWidth={1.8} />}
            </span>
            <span className="skill-row-label">/what-i-build</span>
            <span className="folder-count">{builds.length} items</span>
          </div>
          <div className="folder-toggle">
            <span className="folder-toggle-text">{open ? 'close' : 'open'}</span>
            <span className="folder-toggle-arrow">{open ? '↑' : '↓'}</span>
          </div>
        </button>

        {/* Drawer that slides open */}
        <div className={`folder-drawer ${open ? 'open' : ''}`}>
          <div className="folder-drawer-inner">
            <div className="folder-files-bar">
              <span className="ff-label mono">// {builds.length} files — sorted by recent</span>
            </div>
            <div className="folder-files">
              {builds.map((b) => (
                <div className="folder-file" key={b.title}>
                  <span className="ff-icon" style={{ color: b.color, background: `${b.color}15`, borderColor: `${b.color}30` }}>
                    <b.Icon size={13} strokeWidth={1.8} />
                  </span>
                  <div className="ff-info">
                    <div className="ff-name">{b.title}</div>
                    <div className="ff-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
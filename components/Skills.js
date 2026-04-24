import { Monitor, Cpu, Sparkles, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase } from 'lucide-react';

const skills = [
  {
    Icon: Monitor,
    title: 'Frontend',
    color: '#61afef',
    bg: 'rgba(97,175,239,0.15)',
    desc: 'Crafting fast, responsive and accessible applications with modern frameworks.',
    tags: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'UI/UX'],
  },
  {
    Icon: Cpu,
    title: 'Backend',
    color: '#98c379',
    bg: 'rgba(152,195,121,0.15)',
    desc: 'Building robust APIs and services with scalable architecture.',
    tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation', 'Caching'],
  },
  {
    Icon: Sparkles,
    title: 'Tools & AI',
    color: '#c678dd',
    bg: 'rgba(198,120,221,0.15)',
    desc: 'Using AI and modern tools to ship faster and automate repetitive work.',
    tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'AI Tools', 'Vercel', 'Scripting'],
  },
];

const builds = [
  { Icon: Layers,      color: '#98c379', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards & billing.',     tags: ['Next.js', 'Node.js', 'PostgreSQL'] },
  { Icon: Globe,       color: '#61afef', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',          tags: ['Next.js', 'Tailwind CSS', 'TypeScript'] },
  { Icon: Bot,         color: '#c678dd', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',     tags: ['Claude API', 'Python', 'OpenAI API'] },
  { Icon: PackageOpen, color: '#e5c07b', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',          tags: ['Next.js', 'Stripe', 'Supabase'] },
  { Icon: AppWindow,   color: '#56b6c2', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',         tags: ['React', 'TypeScript', 'Tailwind CSS'] },
  { Icon: Zap,         color: '#e06c75', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of repetitive work.',  tags: ['Python', 'Node.js', 'Scripting'] },
];

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      {/* Skills — sidebar + stacked cards */}
      <div className="skills-outer reveal">
        {/* Left sidebar */}
        <div className="skills-left">
          <p className="skills-left-desc">I build products and tools that solve real problems.</p>
          <div className="skills-left-nav">
            {skills.map((s) => (
              <a href="#skills" key={s.title} className="skills-left-item" style={{ '--c': s.color }}>
                <s.Icon size={14} strokeWidth={1.5} color={s.color} />
                <span>{s.title}</span>
              </a>
            ))}
          </div>
          <a href="#projects" className="skills-left-cta">View all projects →</a>
        </div>

        {/* Right stacked cards */}
        <div className="skills-right">
          {skills.map((s) => (
            <div className="skill-card-v3" key={s.title}>
              <div className="skill-card-v3-head">
                <div className="skill-card-v3-icon" style={{ background: s.bg, border: `1px solid ${s.color}30` }}>
                  <s.Icon size={22} strokeWidth={1.5} color={s.color} />
                </div>
                <div className="skill-card-v3-info">
                  <div className="skill-card-v3-title" style={{ color: s.color }}>{s.title}</div>
                  <p className="skill-card-v3-desc">{s.desc}</p>
                </div>
                <span className="skill-card-v3-arrow">→</span>
              </div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className="skill-tag-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I Build */}
      <div className="wib-header reveal">
        <div>
          <h3 className="wib-heading">What I Build</h3>
          <p className="wib-subheading">A selection of things I&apos;ve built and shipped.</p>
        </div>
        <a href="#projects" className="wib-view-all">View all projects →</a>
      </div>

      <div className="builds-table reveal">
        {builds.map((item) => (
          <div className="build-row-new" key={item.title}>
            <div className="build-icon-wrap" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
              <item.Icon size={16} strokeWidth={1.5} color={item.color} />
            </div>
            <div className="build-info">
              <div className="build-title-new">{item.title}</div>
              <div className="build-desc-new">{item.desc}</div>
            </div>
            <div className="build-tags-new">
              {item.tags.map((t) => <span className="build-tag-new" key={t}>{t}</span>)}
            </div>
            <div className="build-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
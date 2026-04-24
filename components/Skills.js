import { Monitor, Cpu, Sparkles, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase } from 'lucide-react';

const skills = [
  {
    Icon: Monitor,
    title: 'Frontend',
    color: '#61afef',
    bg: 'rgba(97,175,239,0.12)',
    desc: 'Crafting fast, responsive and accessible applications with modern frameworks.',
    tags: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'UI Design', 'TailwindCSS', 'Responsive'],
  },
  {
    Icon: Cpu,
    title: 'Backend',
    color: '#98c379',
    bg: 'rgba(152,195,121,0.12)',
    desc: 'Building robust APIs and services with scalable architecture.',
    tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation'],
  },
  {
    Icon: Sparkles,
    title: 'Tools & AI',
    color: '#c678dd',
    bg: 'rgba(198,120,221,0.12)',
    desc: 'Using AI and modern tools to ship faster and automate repetitive work.',
    tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'AI Tools', 'Vercel'],
  },
];

const builds = [
  { Icon: Layers,      color: '#98c379', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards & billing.',     tags: ['Next.js', 'Node.js', 'DB'] },
  { Icon: Globe,       color: '#61afef', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',          tags: ['Next.js', 'CSS', 'Vercel'] },
  { Icon: Bot,         color: '#c678dd', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',     tags: ['Claude API', 'Python'] },
  { Icon: PackageOpen, color: '#e5c07b', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',          tags: ['Full-Stack', 'Ship Fast'] },
  { Icon: AppWindow,   color: '#56b6c2', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',         tags: ['React', 'JavaScript'] },
  { Icon: FileCode,    color: '#d19a66', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.',      tags: ['Next.js', 'Design'] },
  { Icon: Briefcase,   color: '#98c379', title: 'Portfolio Sites',   desc: 'Memorable portfolios that leave a lasting impression.', tags: ['Next.js', 'Animations'] },
  { Icon: Zap,         color: '#e06c75', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of repetitive work.',  tags: ['Python', 'Node.js'] },
];

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">

      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills &amp; what i build</h2>
        <div className="sec-line" />
      </div>

      <p className="skills-subtitle reveal">I build products and tools that solve real problems.</p>

      {/* Skills cards */}
      <div className="skills-cards reveal">
        {skills.map((s) => (
          <div className="skill-card-new" key={s.title}>
            <div className="skill-card-icon-wrap" style={{ background: s.bg, border: `1px solid ${s.color}30` }}>
              <s.Icon size={22} strokeWidth={1.5} color={s.color} />
            </div>
            <div className="skill-card-body">
              <div className="skill-card-title-new" style={{ color: s.color }}>{s.title}</div>
              <p className="skill-card-desc">{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className="skill-tag-new" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
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
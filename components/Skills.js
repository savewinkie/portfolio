import { Monitor, Cpu, Wrench, Layers, Globe, Bot, PackageOpen, AppWindow, FileCode, Briefcase, Zap } from 'lucide-react';

const skills = [
  { Icon: Monitor, title: 'Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'UI Design', 'Responsive'] },
  { Icon: Cpu,     title: 'Backend',  tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation'] },
  { Icon: Wrench,  title: 'Tools & AI', tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'Vercel', 'AI Tools'] },
];

const builds = [
  { Icon: Layers,      title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.',         tags: ['Next.js', 'Node.js', 'DB'] },
  { Icon: Globe,       title: 'Business Websites',  desc: 'Fast, modern websites built for conversions.',               tags: ['Next.js', 'CSS', 'Vercel'] },
  { Icon: Bot,         title: 'AI Tools',           desc: 'AI-powered apps using the latest models and APIs.',          tags: ['Claude API', 'Python'] },
  { Icon: PackageOpen, title: 'MVP Products',       desc: 'Idea to live product in days. Validate fast.',               tags: ['Full-Stack', 'Ship Fast'] },
  { Icon: AppWindow,   title: 'Web Apps',           desc: 'Interactive apps with clean UI and smooth UX.',              tags: ['React', 'JavaScript'] },
  { Icon: FileCode,    title: 'Landing Pages',      desc: 'High-converting pages with animations and speed.',           tags: ['Next.js', 'Design'] },
  { Icon: Briefcase,   title: 'Portfolio Sites',    desc: 'Memorable portfolios that leave a lasting impression.',      tags: ['Next.js', 'Animations'] },
  { Icon: Zap,         title: 'Automation Tools',   desc: 'Scripts and bots that save hours of repetitive work.',       tags: ['Python', 'Node.js'] },
];

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-grid reveal">
        {skills.map((s) => (
          <div className="skill-card" key={s.title}>
            <div className="skill-card-head">
              <span className="skill-card-icon"><s.Icon size={16} strokeWidth={1.5} /></span>
              <span className="skill-card-title">{s.title}</span>
            </div>
            <div className="skill-tags">
              {s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <div className="sec-header">
          <span className="sec-prompt">~</span>
          <h2 className="sec-title"><span>./</span>what-i-build</h2>
          <div className="sec-line" />
        </div>

        <div className="wib-grid reveal">
          {builds.map((item, i) => (
            <div className="wib-card" key={item.title}>
              <div className="wib-head">
                <span className="wib-num">0{i + 1}</span>
                <item.Icon size={15} strokeWidth={1.5} color="var(--blue)" />
              </div>
              <div className="wib-title">{item.title}</div>
              <p className="wib-desc">{item.desc}</p>
              <div className="wib-tags">
                {item.tags.map((t) => <span className="wib-tag" key={t}>{t}</span>)}
              </div>
              <div className="wib-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
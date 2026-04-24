import { Monitor, Cpu, Wrench } from 'lucide-react';

const skills = [
  {
    Icon: Monitor,
    title: 'Frontend',
    color: 'var(--blue)',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'UI Design', 'Responsive'],
  },
  {
    Icon: Cpu,
    title: 'Backend',
    color: 'var(--green)',
    tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation'],
  },
  {
    Icon: Wrench,
    title: 'Tools & AI',
    color: 'var(--purple)',
    tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'Vercel', 'AI Tools'],
  },
];

const builds = [
  { num: '01', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards & billing.',      tags: ['Next.js', 'Node.js'] },
  { num: '02', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',           tags: ['Next.js', 'CSS'] },
  { num: '03', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',      tags: ['Claude API', 'Python'] },
  { num: '04', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',           tags: ['Full-Stack'] },
  { num: '05', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',          tags: ['React', 'JavaScript'] },
  { num: '06', title: 'Landing Pages',     desc: 'High-converting pages with animations.',                 tags: ['Next.js', 'Design'] },
  { num: '07', title: 'Portfolio Sites',   desc: 'Memorable portfolios that leave a lasting impression.',  tags: ['Next.js'] },
  { num: '08', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of work.',              tags: ['Python', 'Node.js'] },
];

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">

      {/* ── Skills ── */}
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills &amp; what i build</h2>
        <div className="sec-line" />
      </div>

      {/* Skills row */}
      <div className="skills-row reveal">
        {skills.map((s) => (
          <div className="skill-pill-group" key={s.title}>
            <div className="skill-pill-head" style={{ color: s.color }}>
              <s.Icon size={14} strokeWidth={1.5} />
              <span>{s.title}</span>
            </div>
            <div className="skill-tags">
              {s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="skills-divider reveal" />

      {/* What I Build grid */}
      <div className="builds-list reveal">
        {builds.map((item) => (
          <div className="build-row" key={item.num}>
            <span className="build-num">{item.num}</span>
            <span className="build-title">{item.title}</span>
            <span className="build-desc">{item.desc}</span>
            <div className="build-tags">
              {item.tags.map((t) => <span className="build-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
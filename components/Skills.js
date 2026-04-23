import { Monitor, Cpu, Wrench } from 'lucide-react';

const skills = [
  {
    Icon: Monitor,
    title: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'UI Design', 'Responsive'],
  },
  {
    Icon: Cpu,
    title: 'Backend',
    tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation'],
  },
  {
    Icon: Wrench,
    title: 'Tools & AI',
    tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'Vercel', 'AI Tools'],
  },
];

const builds = [
  { num: '01', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.',   tags: ['Next.js', 'Node.js', 'DB'] },
  { num: '02', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',           tags: ['Next.js', 'CSS', 'Vercel'] },
  { num: '03', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',      tags: ['Claude API', 'Python'] },
  { num: '04', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',           tags: ['Full-Stack', 'Ship Fast'] },
  { num: '05', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',          tags: ['React', 'JavaScript'] },
  { num: '06', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.',       tags: ['Next.js', 'Design'] },
  { num: '07', title: 'Portfolio Sites',   desc: 'Memorable portfolios that leave a lasting impression.',  tags: ['Next.js', 'Animations'] },
  { num: '08', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of repetitive work.',  tags: ['Python', 'Node.js'] },
];

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">

      {/* ── Skills ── */}
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-grid reveal">
        {skills.map((s) => (
          <div className="skill-card" key={s.title}>
            <div className="skill-card-head">
              <span className="skill-card-icon"><s.Icon size={15} strokeWidth={1.5} /></span>
              <span className="skill-card-title">{s.title}</span>
            </div>
            <div className="skill-tags">
              {s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* ── What I Build ── */}
      <div style={{ marginTop: '80px' }}>
        <div className="sec-header">
          <span className="sec-prompt">~</span>
          <h2 className="sec-title"><span>./</span>what-i-build</h2>
          <div className="sec-line" />
        </div>

        <div className="wib-grid reveal">
          {builds.map((item) => (
            <div className="wib-card" key={item.num}>
              <div className="wib-head">
                <span className="wib-num">{item.num}</span>
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
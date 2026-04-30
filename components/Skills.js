import { Code2, Server, Sparkles } from 'lucide-react';

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

export default function Skills() {
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
    </section>
  );
}
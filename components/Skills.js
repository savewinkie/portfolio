import { Monitor, Cpu, Wrench } from 'lucide-react';

const skills = [
  {
    Icon: Monitor,
    title: 'Frontend',
    color: '#61afef',
    glow: 'rgba(97,175,239,0.4)',
    illustration: 'frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'UI Design', 'Responsive'],
  },
  {
    Icon: Cpu,
    title: 'Backend',
    color: '#98c379',
    glow: 'rgba(152,195,121,0.4)',
    illustration: 'backend',
    tags: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Authentication', 'Automation'],
  },
  {
    Icon: Wrench,
    title: 'Tools & AI',
    color: '#c678dd',
    glow: 'rgba(198,120,221,0.4)',
    illustration: 'ai',
    tags: ['VS Code', 'GitHub', 'Claude', 'ChatGPT', 'Figma', 'Vercel', 'AI Tools'],
  },
];

const builds = [
  { num: '01', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.',   tags: ['Next.js', 'Node.js', 'DB'],     ill: 'dashboard', color: '#c678dd' },
  { num: '02', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',           tags: ['Next.js', 'CSS', 'Vercel'],     ill: 'browser',   color: '#61afef' },
  { num: '03', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',      tags: ['Claude API', 'Python'],         ill: 'brain',     color: '#56b6c2' },
  { num: '04', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',           tags: ['Full-Stack', 'Ship Fast'],      ill: 'rocket',    color: '#e5c07b' },
  { num: '05', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',          tags: ['React', 'JavaScript'],          ill: 'app',       color: '#c678dd' },
  { num: '06', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.',       tags: ['Next.js', 'Design'],            ill: 'page',      color: '#61afef' },
  { num: '07', title: 'Portfolio Sites',   desc: 'Memorable portfolios that leave a lasting impression.',  tags: ['Next.js', 'Animations'],        ill: 'monitor',   color: '#98c379' },
  { num: '08', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of repetitive work.',   tags: ['Python', 'Node.js'],            ill: 'gear',      color: '#e06c75' },
];

const Illustration = ({ type, color }) => {
  const stroke = color || 'currentColor';
  const common = { fill: 'none', stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

  switch (type) {
    case 'frontend':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" {...common}>
          <rect x="6" y="10" width="48" height="36" rx="3" />
          <line x1="6" y1="18" x2="54" y2="18" />
          <circle cx="11" cy="14" r="1" fill={stroke} />
          <circle cx="15" cy="14" r="1" fill={stroke} />
          <circle cx="19" cy="14" r="1" fill={stroke} />
          <path d="M22 28 L18 32 L22 36" />
          <path d="M38 28 L42 32 L38 36" />
          <line x1="32" y1="26" x2="28" y2="38" />
        </svg>
      );
    case 'backend':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" {...common}>
          <rect x="10" y="10" width="40" height="10" rx="2" />
          <rect x="10" y="25" width="40" height="10" rx="2" />
          <rect x="10" y="40" width="40" height="10" rx="2" />
          <circle cx="16" cy="15" r="1.5" fill={stroke} />
          <circle cx="16" cy="30" r="1.5" fill={stroke} />
          <circle cx="16" cy="45" r="1.5" fill={stroke} />
          <line x1="22" y1="15" x2="44" y2="15" />
          <line x1="22" y1="30" x2="44" y2="30" />
          <line x1="22" y1="45" x2="44" y2="45" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" {...common}>
          <path d="M30 10 C20 10 14 18 14 28 C14 36 18 40 22 44 L22 50 L38 50 L38 44 C42 40 46 36 46 28 C46 18 40 10 30 10 Z" />
          <text x="30" y="32" textAnchor="middle" fill={stroke} fontSize="9" fontWeight="bold" stroke="none" fontFamily="monospace">AI</text>
        </svg>
      );
    case 'dashboard':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <rect x="6" y="8" width="44" height="40" rx="3" />
          <line x1="6" y1="16" x2="50" y2="16" />
          <rect x="10" y="20" width="14" height="10" rx="1" />
          <rect x="26" y="20" width="20" height="6" rx="1" />
          <rect x="26" y="28" width="14" height="4" rx="1" />
          <line x1="10" y1="36" x2="46" y2="36" />
          <line x1="10" y1="40" x2="40" y2="40" />
        </svg>
      );
    case 'browser':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <rect x="6" y="10" width="44" height="36" rx="3" />
          <line x1="6" y1="18" x2="50" y2="18" />
          <circle cx="11" cy="14" r="1" fill={stroke} />
          <circle cx="15" cy="14" r="1" fill={stroke} />
          <circle cx="19" cy="14" r="1" fill={stroke} />
          <rect x="10" y="22" width="36" height="4" rx="1" />
          <rect x="10" y="29" width="20" height="14" rx="1" />
          <rect x="33" y="29" width="13" height="6" rx="1" />
        </svg>
      );
    case 'brain':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <path d="M28 8 C20 8 14 14 14 22 C14 28 17 32 21 34 L21 44 L35 44 L35 34 C39 32 42 28 42 22 C42 14 36 8 28 8 Z" />
          <text x="28" y="26" textAnchor="middle" fill={stroke} fontSize="8" fontWeight="bold" stroke="none" fontFamily="monospace">AI</text>
        </svg>
      );
    case 'rocket':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <path d="M28 6 C32 12 38 20 38 30 L38 42 L18 42 L18 30 C18 20 24 12 28 6 Z" />
          <circle cx="28" cy="22" r="3" />
          <path d="M18 36 L10 42 L14 44 L18 42" />
          <path d="M38 36 L46 42 L42 44 L38 42" />
        </svg>
      );
    case 'app':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <rect x="14" y="6" width="28" height="44" rx="4" />
          <line x1="14" y1="14" x2="42" y2="14" />
          <line x1="14" y1="42" x2="42" y2="42" />
          <circle cx="28" cy="46" r="1.5" fill={stroke} />
          <rect x="18" y="18" width="20" height="6" rx="1" />
          <rect x="18" y="27" width="9" height="9" rx="1" />
          <rect x="29" y="27" width="9" height="9" rx="1" />
        </svg>
      );
    case 'page':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <path d="M12 6 L36 6 L44 14 L44 50 L12 50 Z" />
          <path d="M36 6 L36 14 L44 14" />
          <line x1="18" y1="22" x2="38" y2="22" />
          <line x1="18" y1="28" x2="38" y2="28" />
          <line x1="18" y1="34" x2="34" y2="34" />
          <rect x="18" y="40" width="16" height="6" rx="1" />
        </svg>
      );
    case 'monitor':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <rect x="6" y="10" width="44" height="30" rx="3" />
          <path d="M22 40 L22 46 L34 46 L34 40" />
          <line x1="18" y1="46" x2="38" y2="46" />
          <rect x="12" y="22" width="14" height="14" rx="1" />
          <line x1="30" y1="24" x2="44" y2="24" />
          <line x1="30" y1="28" x2="44" y2="28" />
        </svg>
      );
    case 'gear':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" {...common}>
          <circle cx="28" cy="28" r="8" />
          <circle cx="28" cy="28" r="3" />
          <line x1="28" y1="8" x2="28" y2="14" />
          <line x1="28" y1="42" x2="28" y2="48" />
          <line x1="8" y1="28" x2="14" y2="28" />
          <line x1="42" y1="28" x2="48" y2="28" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Skills() {
  return (
    <section className="skills-bg" id="skills">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-grid reveal">
        {skills.map((s, i) => (
          <div className="skill-card skill-tilt" key={s.title} style={{ '--tilt': i === 0 ? '-4deg' : i === 1 ? '0deg' : '4deg' }}>
            <div className="skill-card-head">
              <span className="skill-card-icon" style={{ color: s.color }}><s.Icon size={15} strokeWidth={1.5} /></span>
              <span className="skill-card-title">{s.title}</span>
              <div className="skill-illustration" style={{ color: s.color, filter: `drop-shadow(0 0 10px ${s.glow})` }}>
                <Illustration type={s.illustration} color={s.color} />
              </div>
            </div>
            <div className="skill-tags">
              {s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
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
            <div className="wib-card wib-tilt" key={item.num} style={{ '--tilt': (i % 2 === 0) ? '-3deg' : '3deg' }}>
              <div className="wib-head">
                <span className="wib-num">{item.num}</span>
              </div>
              <div className="wib-title">{item.title}</div>
              <p className="wib-desc">{item.desc}</p>
              <div className="wib-tags">
                {item.tags.map(t => <span className="wib-tag" key={t}>{t}</span>)}
              </div>
              <div className="wib-illustration" style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}66)` }}>
                <Illustration type={item.ill} color={item.color} />
              </div>
              <div className="wib-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
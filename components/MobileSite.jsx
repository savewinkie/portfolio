'use client';

import { useState, useEffect, useRef } from 'react';
import ShaderCanvas from './ShaderCanvas';

const projects = [
  {
    idx: '01',
    title: 'Lumen',
    year: '2026',
    role: 'Solo build',
    blurb: 'AI website & app builder',
    href: 'https://lumensaas.vercel.app/',
    desc: 'Type a prompt and get a working app. Morphing landing page, GitHub OAuth, and a live build view with chat sidebar.',
    tags: ['Next.js', 'NextAuth', 'AI'],
    hue: { edge: [150, 120, 255], core: [120, 70, 240], edgeLight: [140, 90, 230], coreLight: [90, 40, 200] },
    accent: '#9d7bff',
  },
  {
    idx: '02',
    title: 'CorvusTiers',
    year: '2026',
    role: 'Client work',
    blurb: 'Minecraft PvP tier-ranking site',
    href: 'https://corvustiers.vercel.app/',
    desc: 'A Minecraft PvP tier-ranking site built for a client. Dark gaming UI with indigo accents, a podium layout, and a custom SVG logo.',
    tags: ['Next.js', 'CSS', 'UI Design'],
    hue: { edge: [120, 140, 255], core: [70, 90, 230], edgeLight: [90, 110, 235], coreLight: [40, 60, 200] },
    accent: '#7b8cff',
  },
  {
    idx: '03',
    title: 'VisitVenice',
    year: '2026',
    role: 'Design & dev',
    blurb: 'Editorial tourism website',
    href: 'https://visit-venice-eta.vercel.app/',
    desc: 'A tourism site for Venice with a video hero, bento-grid sections, and editorial design. Built entirely in pure CSS, deployed on Vercel.',
    tags: ['Next.js', 'Pure CSS', 'Vercel'],
    hue: { edge: [255, 180, 120], core: [240, 120, 50], edgeLight: [230, 140, 60], coreLight: [200, 90, 20] },
    accent: '#f0863a',
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="m-check">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

const tiers = [
  {
    name: 'Landing',
    description: 'A single sharp page.',
    price: '€99',
    cycle: '/ one-off',
    button: 'Start a project',
    features: ['One-page website', 'Custom design', 'Mobile responsive', 'Contact form', 'Deployed & live'],
    featured: false,
  },
  {
    name: 'Website',
    description: 'A full multi-page site.',
    price: '€199',
    cycle: '/ one-off',
    button: 'Start a project',
    features: ['Up to 5 pages', 'Custom design & animation', 'Easy content editing', 'SEO basics', 'Deployed & live', '2 weeks of support'],
    featured: true,
  },
  {
    name: 'Web app',
    description: 'Something more custom.',
    price: "Let's talk",
    cycle: '',
    button: 'Get in touch',
    features: ['Full web application', 'Database & auth', 'AI / API integrations', 'Dashboards & logic', 'Ongoing collaboration'],
    featured: false,
  },
];

const MIN = 50;
const MAX = 1000;
function budgetPlan(budget) {
  if (budget < 120) return { label: 'Starter', desc: 'A clean one-page site to get you online — simple, sharp, and done right.', gets: ['One-page website', 'Custom design', 'Mobile responsive', 'Deployed & live'] };
  if (budget < 250) return { label: 'Standard', desc: 'A small multi-page site with some personality and motion.', gets: ['Up to 4 pages', 'Custom design & animation', 'Contact form', 'SEO basics', 'Deployed & live'] };
  if (budget < 500) return { label: 'Premium', desc: 'A polished site with custom interactions and content editing.', gets: ['Up to 8 pages', 'Rich animation & detail', 'Easy content editing', 'SEO + performance', '2 weeks support'] };
  return { label: 'Custom', desc: 'A full custom build — web app territory, with whatever the project needs.', gets: ['Web app / advanced site', 'Database & auth', 'AI / API integrations', 'Dashboards & logic', 'Ongoing collaboration'] };
}

const metaIcons = {
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>
  ),
  focus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>
  ),
};

export default function MobileSite({ onContact }) {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [budget, setBudget] = useState(199);
  const [showBudget, setShowBudget] = useState(false);
  const rootRef = useRef(null);

  const plan = budgetPlan(budget);
  const pct = ((budget - MIN) / (MAX - MIN)) * 100;

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  }

  // slim top bar gains a background once you scroll past the hero edge
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // reveal sections on scroll
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll('.m-reveal') ?? [];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('m-in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // lock background scroll while the budget modal is open
  useEffect(() => {
    document.body.style.overflow = showBudget ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showBudget]);

  return (
    <div className="m-site" ref={rootRef}>
      {/* ── sticky top bar ── */}
      <header className={`m-top${scrolled ? ' is-scrolled' : ''}`}>
        <a href="#top" className="m-brand">linkb<span>.dev</span></a>
        <div className="m-top-right">
          <button className="m-pill" onClick={() => onContact('')}>Email</button>
          <button className="m-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="m-hero" id="top">
        <div className="m-hero-bg"><ShaderCanvas /></div>
        <div className="m-hero-veil" />
        <div className="m-hero-content">
          <p className="m-eyebrow">developer · amsterdam</p>
          <h1 className="m-hero-title">linkb<span>.dev</span></h1>
          <p className="m-hero-sub">
            Self-taught developer building clean, fast web experiences with
            <strong> Next.js</strong> &amp; <strong>React</strong>.
          </p>
          <div className="m-hero-cta">
            <a href="#work" className="m-btn m-btn-primary">View my work</a>
            <button className="m-btn m-btn-ghost" onClick={() => onContact('')}>Get in touch</button>
          </div>
          <div className="m-hero-links">
            <a href="https://github.com/savewinkie" target="_blank" rel="noreferrer">GitHub</a>
            <span className="m-dot">·</span>
            <a href="https://x.com/linkb_" target="_blank" rel="noreferrer">X</a>
            <span className="m-dot">·</span>
            <button onClick={() => onContact('')}>Email</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="m-section m-reveal" id="about">
        <p className="m-label">// about</p>
        <h2 className="m-h2">A bit more about Linkb.</h2>
        <p className="m-body">
          I&apos;m Link — a developer from <strong>Amsterdam</strong> who loves building things
          that work well and feel even better. I move fast, sweat the details, and care about how
          a product actually feels to use.
        </p>
        <p className="m-body">
          Mostly I build with <strong>Next.js</strong> and <strong>React</strong>, with a soft spot
          for animation and clean interfaces. From SaaS platforms to landing pages to AI tools — if
          it lives on the web, I&apos;ll build it.
        </p>
        <div className="m-about-grid">
          <div className="m-at-tile" style={{ '--tint': '#5a8cff' }}>
            <span className="m-at-ico">{metaIcons.pin}</span>
            <span className="m-at-k">Location</span>
            <span className="m-at-v">Amsterdam, NL</span>
          </div>
          <div className="m-at-tile" style={{ '--tint': '#9d7bff' }}>
            <span className="m-at-ico">{metaIcons.focus}</span>
            <span className="m-at-k">Focus</span>
            <span className="m-at-v">Web apps &amp; SaaS</span>
          </div>
          <div className="m-at-tile" style={{ '--tint': '#46c8d8' }}>
            <span className="m-at-ico">{metaIcons.stack}</span>
            <span className="m-at-k">Stack</span>
            <span className="m-ac-chips"><span>Next.js</span><span>React</span><span>JavaScript</span></span>
          </div>
          <div className="m-at-tile" style={{ '--tint': '#38d66b' }}>
            <span className="m-at-ico"><span className="m-live" /></span>
            <span className="m-at-k">Status</span>
            <span className="m-at-v">Available for work</span>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="m-section" id="work">
        <div className="m-reveal">
          <p className="m-label">// selected work</p>
          <h2 className="m-h2">A few things I&apos;ve built.</h2>
        </div>
        <div className="m-cards">
          {projects.map((p) => (
            <a
              key={p.idx}
              className="m-card m-reveal"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              style={{ '--accent': p.accent }}
            >
              <span className="m-card-wm" aria-hidden="true">{p.idx}</span>
              <span className="m-card-glow" aria-hidden="true" />
              <div className="m-card-content">
                <div className="m-card-top">
                  <span className="m-card-idx">{p.idx}</span>
                  <span className="m-card-meta">{p.role} · {p.year}</span>
                  <span className="m-card-go" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                  </span>
                </div>
                <h3 className="m-card-title">{p.title}</h3>
                <p className="m-card-desc">{p.desc}</p>
                <div className="m-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
        <a className="m-github m-reveal" href="https://github.com/savewinkie" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" /></svg>
          See all my projects on GitHub
        </a>
      </section>

      {/* ── PRICING ── */}
      <section className="m-section" id="pricing">
        <div className="m-reveal">
          <p className="m-label">// pricing</p>
          <h2 className="m-h2">Simple, honest pricing.</h2>
          <p className="m-body m-center">
            Every project is different — these are starting points. Got something specific in mind?
            Just reach out.
          </p>
        </div>
        <div className="m-tiers">
          {tiers.map((tier) => (
            <div key={tier.name} className={`m-tier m-reveal${tier.featured ? ' is-featured' : ''}`}>
              {tier.featured && <div className="m-tier-badge">POPULAR</div>}
              <div className="m-tier-head">
                <h3 className="m-tier-name">{tier.name}</h3>
                <p className="m-tier-desc">{tier.description}</p>
              </div>
              <div className="m-tier-price">
                <span className="m-tier-amount">{tier.price}</span>
                {tier.cycle && <span className="m-tier-cycle">{tier.cycle}</span>}
              </div>
              <button className="m-tier-cta" onClick={() => onContact(tier.name)}>{tier.button}</button>
              <ul className="m-tier-features">
                {tier.features.map((f) => <li key={f}><CheckIcon />{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <button className="m-budget-trigger m-reveal" onClick={() => setShowBudget(true)}>
          Got a set budget? <span>Build your plan →</span>
        </button>
      </section>

      {/* ── CONTACT ── */}
      <section className="m-section m-contact m-reveal" id="contact">
        <p className="m-label">// contact</p>
        <h2 className="m-h2">Let&apos;s work together.</h2>
        <p className="m-body m-center">
          Got a project in mind or just a question? I usually reply within a day.
        </p>
        <button className="m-btn m-btn-primary m-btn-wide" onClick={() => onContact('')}>Start a project</button>
        <div className="m-contact-rows">
          <a href="mailto:contact.linkb@gmail.com" className="m-contact-row">
            <span className="m-cr-k">Email</span><span className="m-cr-v">contact.linkb@gmail.com</span>
          </a>
          <a href="https://github.com/savewinkie" target="_blank" rel="noreferrer" className="m-contact-row">
            <span className="m-cr-k">GitHub</span><span className="m-cr-v">savewinkie</span>
          </a>
          <a href="https://x.com/linkb_" target="_blank" rel="noreferrer" className="m-contact-row">
            <span className="m-cr-k">X</span><span className="m-cr-v">@linkb_</span>
          </a>
        </div>
      </section>

      <footer className="m-footer">
        <span className="m-brand">linkb<span>.dev</span></span>
        <span className="m-foot-copy">© 2026 — Amsterdam, NL</span>
      </footer>

      {/* ── budget modal (reuses existing .budget-* styles) ── */}
      {showBudget && (
        <div className="budget-modal" onClick={() => setShowBudget(false)}>
          <div className="budget-card" onClick={(e) => e.stopPropagation()}>
            <button className="budget-close" onClick={() => setShowBudget(false)} aria-label="Close">×</button>
            <div className="budget-top">
              <div className="budget-label">
                <span className="budget-q">Got a set budget?</span>
                <span className="budget-plan">{plan.label}</span>
              </div>
              <div className="budget-amount">€{budget}<span>+</span></div>
            </div>
            <div className="budget-slider">
              <input
                type="range" min={MIN} max={MAX} step={10} value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ '--pct': `${pct}%` }} aria-label="Budget"
              />
              <div className="budget-scale"><span>€{MIN}</span><span>€{MAX}+</span></div>
            </div>
            <div className="budget-result">
              <p className="budget-desc">{plan.desc}</p>
              <ul className="budget-gets">
                {plan.gets.map((g) => <li key={g}><CheckIcon />{g}</li>)}
              </ul>
              <button className="budget-cta" onClick={() => { setShowBudget(false); onContact(`Custom budget €${budget}`); }}>
                Let&apos;s build it <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

// round check icon (matches the supplied component)
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="tier-check-ico">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

// what you get for a given budget — tiers unlock as the number climbs
const MIN = 50;
const MAX = 1000;

function budgetPlan(budget) {
  if (budget < 120) {
    return {
      label: 'Starter',
      desc: 'A clean one-page site to get you online — simple, sharp, and done right.',
      gets: ['One-page website', 'Custom design', 'Mobile responsive', 'Deployed & live'],
    };
  }
  if (budget < 250) {
    return {
      label: 'Standard',
      desc: 'A small multi-page site with some personality and motion.',
      gets: ['Up to 4 pages', 'Custom design & animation', 'Contact form', 'SEO basics', 'Deployed & live'],
    };
  }
  if (budget < 500) {
    return {
      label: 'Premium',
      desc: 'A polished site with custom interactions and content editing.',
      gets: ['Up to 8 pages', 'Rich animation & detail', 'Easy content editing', 'SEO + performance', '2 weeks support'],
    };
  }
  return {
    label: 'Custom',
    desc: 'A full custom build — web app territory, with whatever the project needs.',
    gets: ['Web app / advanced site', 'Database & auth', 'AI / API integrations', 'Dashboards & logic', 'Ongoing collaboration'],
  };
}

// little icons for each plan header circle
const icons = {
  page: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2" /></svg>
  ),
};

const tiers = [
  {
    name: 'Landing',
    description: 'A single sharp page.',
    price: '€99',
    cycle: '/ one-off',
    icon: icons.page,
    button: 'Start a project',
    features: [
      'One-page website',
      'Custom design',
      'Mobile responsive',
      'Contact form',
      'Deployed & live',
    ],
    featured: false,
  },
  {
    name: 'Website',
    description: 'A full multi-page site.',
    price: '€199',
    cycle: '/ one-off',
    icon: icons.layers,
    button: 'Start a project',
    features: [
      'Up to 5 pages',
      'Custom design & animation',
      'Easy content editing',
      'SEO basics',
      'Deployed & live',
      '2 weeks of support',
    ],
    featured: true,
  },
  {
    name: 'Web app',
    description: 'Something more custom.',
    price: "Let's talk",
    cycle: '',
    icon: icons.spark,
    button: 'Get in touch',
    features: [
      'Full web application',
      'Database & auth',
      'AI / API integrations',
      'Dashboards & logic',
      'Ongoing collaboration',
    ],
    featured: false,
  },
];

export default function PricingPanel({ onBack }) {
  const [budget, setBudget] = useState(199);
  const [showBudget, setShowBudget] = useState(false);
  const plan = budgetPlan(budget);
  const pct = ((budget - MIN) / (MAX - MIN)) * 100;

  // close modal on Escape (capture so the page nav doesn't also fire)
  useEffect(() => {
    if (!showBudget) return;
    function onKey(e) {
      if (e.key === 'Escape') { e.stopPropagation(); setShowBudget(false); }
    }
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [showBudget]);

  return (
    <div className="panel pricing-panel">
      <div className="pricing-inner">
        <div className="pricing-head">
          <h2>{'// pricing'}</h2>
          <h1>Simple, honest pricing.</h1>
          <p className="pricing-sub">
            Every project is different — these are starting points. Got something
            specific in mind? Just reach out.
          </p>
        </div>

        <div className="tier-grid">
          {tiers.map((tier) => (
            <div key={tier.name} className={`tier${tier.featured ? ' featured' : ''}`}>
              {tier.featured && <div className="tier-badge">POPULAR</div>}

              <div className="tier-header">
                <div className="tier-ico">{tier.icon}</div>
                <div>
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-desc">{tier.description}</p>
                </div>
              </div>

              <div className="tier-price">
                <span className="tier-amount">{tier.price}</span>
                {tier.cycle && <span className="tier-cycle">{tier.cycle}</span>}
              </div>

              <a className="tier-cta" href="mailto:link.bernath5@gmail.com">{tier.button}</a>

              <ul className="tier-features">
                {tier.features.map((f) => (
                  <li key={f}><CheckIcon />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Custom price trigger ── */}
        <button className="budget-trigger" onClick={() => setShowBudget(true)}>
          Want a custom price? <span>click here!</span>
        </button>
      </div>

      {/* ── Custom price modal ── */}
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
                type="range"
                min={MIN}
                max={MAX}
                step={10}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ '--pct': `${pct}%` }}
                aria-label="Budget"
              />
              <div className="budget-scale">
                <span>€{MIN}</span>
                <span>€{MAX}+</span>
              </div>
            </div>

            <div className="budget-result">
              <p className="budget-desc">{plan.desc}</p>
              <ul className="budget-gets">
                {plan.gets.map((g) => (
                  <li key={g}><CheckIcon />{g}</li>
                ))}
              </ul>
              <a className="budget-cta" href="mailto:link.bernath5@gmail.com">
                Let&apos;s build it <span className="tier-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <button className="arrow left-a" onClick={onBack} aria-label="Back">‹</button>
    </div>
  );
}
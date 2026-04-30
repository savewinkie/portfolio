'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Code2, Server, Sparkles, Layers, Globe, Bot, PackageOpen, AppWindow, Zap, FileCode, Briefcase, X, Mail } from 'lucide-react';

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
  { Icon: Layers,      color: '#c678dd', title: 'SaaS Platforms',    desc: 'Full-stack apps with auth, dashboards, and billing.', tags: ['Next.js', 'Node.js', 'DB'] },
  { Icon: Globe,       color: '#61afef', title: 'Business Websites', desc: 'Fast, modern websites built for conversions.',         tags: ['Next.js', 'CSS', 'Vercel'] },
  { Icon: Bot,         color: '#56b6c2', title: 'AI Tools',          desc: 'AI-powered apps using the latest models and APIs.',    tags: ['Claude API', 'Python'] },
  { Icon: PackageOpen, color: '#e5c07b', title: 'MVP Products',      desc: 'Idea to live product in days. Validate fast.',         tags: ['Full-Stack', 'Ship Fast'] },
  { Icon: AppWindow,   color: '#c678dd', title: 'Web Apps',          desc: 'Interactive apps with clean UI and smooth UX.',        tags: ['React', 'JavaScript'] },
  { Icon: FileCode,    color: '#61afef', title: 'Landing Pages',     desc: 'High-converting pages with animations and speed.',     tags: ['Next.js', 'Design'] },
  { Icon: Briefcase,   color: '#98c379', title: 'Portfolio Sites',   desc: 'Memorable portfolios with a lasting impression.',      tags: ['Next.js', 'Animations'] },
  { Icon: Zap,         color: '#e06c75', title: 'Automation Tools',  desc: 'Scripts and bots that save hours of work.',            tags: ['Python', 'Node.js'] },
];

// Portal wrapper — renders OUTSIDE the section so transforms don't break position:fixed
function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

const LetterVisual = ({ size = 'small' }) => (
  <>
    <div className="letter-stamp">
      <Mail size={size === 'big' ? 20 : 14} strokeWidth={1.8} />
    </div>
    <div className="letter-flap" />
    <div className="letter-body">
      <div className="letter-line" />
      <div className="letter-line short" />
      <div className="letter-line" />
      <div className="letter-line short" />
      {size === 'big' && <><div className="letter-line" /><div className="letter-line short" /></>}
    </div>
    <div className="letter-corner">✉</div>
  </>
);

export default function Skills() {
  const [popupResolved, setPopupResolved] = useState(false);  // popup is done (dismissed/clicked/expired)
  const [popupVisible, setPopupVisible] = useState(false);    // center popup is visible
  const [buildsVisible, setBuildsVisible] = useState(false);  // centered builds modal
  const sectionRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const triggerTimerRef = useRef(null);
  const scrollYRef = useRef(0);

  // 5s timer when entering skills section
  useEffect(() => {
    if (popupResolved) return;
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !popupResolved && !popupVisible) {
            triggerTimerRef.current = setTimeout(() => {
              setPopupVisible(true);
            }, 5000);
          } else if (!entry.isIntersecting && triggerTimerRef.current) {
            clearTimeout(triggerTimerRef.current);
            triggerTimerRef.current = null;
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
      observer.disconnect();
    };
  }, [popupResolved, popupVisible]);

  // Auto-fade popup after 15s
  useEffect(() => {
    if (popupVisible) {
      fadeTimeoutRef.current = setTimeout(() => {
        setPopupVisible(false);
        setPopupResolved(true);
      }, 15000);
    }
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [popupVisible]);

  // Robust scroll lock — works with Lenis smooth scroll too
  useEffect(() => {
    const isLocked = popupVisible || buildsVisible;
    if (isLocked) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
      if (scrollYRef.current) {
        window.scrollTo(0, scrollYRef.current);
      }
    }
  }, [popupVisible, buildsVisible]);

  // Escape closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (buildsVisible) setBuildsVisible(false);
        else if (popupVisible) {
          setPopupVisible(false);
          setPopupResolved(true);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [popupVisible, buildsVisible]);

  const handleLetterClick = () => {
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setPopupVisible(false);
    setPopupResolved(true);
    setBuildsVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupResolved(true);
  };

  // Resting letter only shows AFTER popup has been resolved
  const showResting = popupResolved && !popupVisible && !buildsVisible;

  return (
    <section className="skills-bg" id="skills" ref={sectionRef}>
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-layout reveal">
        {/* LEFT: Skills */}
        <div className="skills-content">
          {groups.map((g) => (
            <div className="skill-block" key={g.label}>
              <div className="skill-block-head">
                <span className="skill-block-icon" style={{ color: g.color, background: `${g.color}15`, borderColor: `${g.color}30` }}>
                  <g.Icon size={15} strokeWidth={1.8} />
                </span>
                <h3 className="skill-block-title">{g.label}</h3>
                <span className="skill-block-count">{g.skills.length}</span>
              </div>
              <div className="skill-block-tags">
                {g.skills.map((s) => (
                  <span className="skill-chip-v2" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Resting letter (only after popup resolved) */}
        <div className="skills-side">
          <div className="letter-sticky">
            <button
              className={`letter letter-resting ${showResting ? 'show' : ''}`}
              onClick={() => setBuildsVisible(true)}
              aria-label="Open what I build"
              tabIndex={showResting ? 0 : -1}
            >
              <LetterVisual />
              <div className="letter-cta">
                <span className="letter-cta-label mono">// click to open</span>
                <span className="letter-cta-title">What I Build</span>
                <span className="letter-cta-meta mono">8 things →</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* CENTERED POPUP via Portal */}
      <Portal>
        <div className={`letter-popup-overlay ${popupVisible ? 'visible' : ''}`}>
          <div className="letter-popup-bg" onClick={closePopup} />

          <button
            className="letter-popup-close"
            onClick={closePopup}
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.2} />
          </button>

          <div className="letter-popup-wrap">
            <button
              className={`letter letter-big ${popupVisible ? 'pop-in' : ''}`}
              onClick={handleLetterClick}
              aria-label="Open what I build"
            >
              <LetterVisual size="big" />
            </button>
            <div className="letter-popup-caption">
              <span className="mono">// you have a new letter</span>
              <h3>What I Build</h3>
              <p className="mono">click the letter to open →</p>
            </div>
          </div>
        </div>
      </Portal>

      {/* CENTERED BUILDS MODAL via Portal */}
      <Portal>
        <div className={`builds-modal-overlay ${buildsVisible ? 'visible' : ''}`}>
          <div className="builds-modal-bg" onClick={() => setBuildsVisible(false)} />

          <div className="builds-modal">
            <div className="builds-modal-header">
              <div>
                <div className="builds-modal-pre mono">// what i build</div>
                <h3 className="builds-modal-title">Things I ship</h3>
              </div>
              <button className="builds-modal-close" onClick={() => setBuildsVisible(false)} aria-label="Close">
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="builds-modal-body" data-lenis-prevent>
              {builds.map((b, i) => (
                <div className="build-item" key={b.title} style={{ '--delay': `${i * 0.04}s` }}>
                  <div className="build-item-icon" style={{ color: b.color, background: `${b.color}15`, borderColor: `${b.color}30` }}>
                    <b.Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div className="build-item-info">
                    <div className="build-item-title">{b.title}</div>
                    <div className="build-item-desc">{b.desc}</div>
                    <div className="build-item-tags">
                      {b.tags.map(t => <span className="build-item-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="builds-modal-footer">
              <span className="mono">{builds.length} items</span>
              <span className="mono">esc to close</span>
            </div>
          </div>
        </div>
      </Portal>
    </section>
  );
}
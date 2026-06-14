'use client';

import { useState } from 'react';
import ShaderCanvas from './ShaderCanvas';

export default function HomePanel({ onNext }) {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  }

  return (
    <div className="panel home">
      <div className="page">
        <div className="left">
          <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? (
              // sun icon (click for light mode)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // moon icon (click for dark mode)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <h1>linkb<span>.dev</span></h1>

          <div className="who">
            <h2>LINKB</h2>
            <h3>DEVELOPER</h3>
          </div>

          <div className="rows">
            <div className="row"><span>Freelance</span><span>Dev</span><span>2024 → 2026</span></div>
            <div className="row"><span>Projects</span><span>Solo</span><span>2024 → 2026</span></div>
            <div className="row"><span>Self-taught</span><span>Code</span><span>2024 → 2026</span></div>
          </div>

          <div className="footer-links">
            <a href="https://github.com/savewinkie" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#">Twitter</a>
            <a href="mailto:link.bernath5@gmail.com">Email</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <div className="right">
          <ShaderCanvas />
        </div>

        <button className="arrow right-a" onClick={onNext} aria-label="About me">›</button>
      </div>
    </div>
  );
}
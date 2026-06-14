'use client';

import { useState, useEffect } from 'react';

export default function MobileNotice() {
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // only on phones/tablets (<= 1024px)
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 1024) return;

    setShow(true);
    // start fade-out after 2s
    const t1 = setTimeout(() => setFading(true), 2000);
    // fully remove after the fade finishes
    const t2 = setTimeout(() => setShow(false), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!show) return null;

  return (
    <div className={`mobile-notice${fading ? ' fade-out' : ''}`}>
      <div className="mn-inner">
        <div className="mn-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="13" rx="2" />
            <path d="M2 20h20" />
          </svg>
        </div>
        <p>For the best experience, view on a laptop or desktop.</p>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect, useCallback } from 'react';
import HomePanel from '../components/HomePanel';
import AboutPanel from '../components/AboutPanel';
import ProjectsPanel from '../components/ProjectsPanel';
import PricingPanel from '../components/PricingPanel';

const MAX = 3;

export default function Home() {
  const [page, setPage] = useState(0);

  const goTo = useCallback((p) => {
    setPage(Math.max(0, Math.min(MAX, p)));
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') setPage((p) => Math.min(MAX, p + 1));
      if (e.key === 'ArrowLeft') setPage((p) => Math.max(0, p - 1));
      if (e.key === 'Escape') setPage(0);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="stage" data-page={page === 0 ? undefined : page}>
      <HomePanel onNext={() => goTo(1)} />
      <AboutPanel onBack={() => goTo(0)} onNext={() => goTo(2)} />
      <ProjectsPanel onBack={() => goTo(1)} onNext={() => goTo(3)} />
      <PricingPanel onBack={() => goTo(2)} />
    </div>
  );
}
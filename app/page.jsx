'use client';

import { useState, useEffect, useCallback } from 'react';
import HomePanel from '../components/HomePanel';
import AboutPanel from '../components/AboutPanel';
import ProjectsPanel from '../components/ProjectsPanel';
import PricingPanel from '../components/PricingPanel';
import ContactModal from '../components/ContactModal';

const MAX = 3;

export default function Home() {
  const [page, setPage] = useState(0);
  const [contact, setContact] = useState(null); // null = closed, else string plan/label

  const goTo = useCallback((p) => {
    setPage(Math.max(0, Math.min(MAX, p)));
  }, []);

  const openContact = useCallback((plan = '') => setContact(plan), []);
  const closeContact = useCallback(() => setContact(null), []);

  useEffect(() => {
    function onKey(e) {
      if (contact !== null) return; // modal handles its own keys
      if (e.key === 'ArrowRight') setPage((p) => Math.min(MAX, p + 1));
      if (e.key === 'ArrowLeft') setPage((p) => Math.max(0, p - 1));
      if (e.key === 'Escape') setPage(0);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [contact]);

  // scroll / trackpad navigation between pages (throttled)
  useEffect(() => {
    let locked = false;
    function onWheel(e) {
      if (contact !== null) return;           // don't navigate while modal open
      if (e.target.closest('.modal-scrollable, .budget, .contact-card, textarea')) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 20 || locked) return;
      locked = true;
      if (delta > 0) setPage((p) => Math.min(MAX, p + 1));
      else setPage((p) => Math.max(0, p - 1));
      setTimeout(() => { locked = false; }, 900); // wait for the slide animation
    }
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [contact]);

  return (
    <>
      <div className="stage" data-page={page === 0 ? undefined : page}>
        <HomePanel onNext={() => goTo(1)} onContact={() => openContact('')} />
        <AboutPanel onBack={() => goTo(0)} onNext={() => goTo(2)} />
        <ProjectsPanel onBack={() => goTo(1)} onNext={() => goTo(3)} />
        <PricingPanel onBack={() => goTo(2)} onContact={openContact} />
      </div>
      <ContactModal open={contact !== null} plan={contact || ''} onClose={closeContact} />
    </>
  );
}
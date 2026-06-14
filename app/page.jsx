'use client';

import { useState, useEffect, useCallback } from 'react';
import HomePanel from '../components/HomePanel';
import AboutPanel from '../components/AboutPanel';
import ProjectsPanel from '../components/ProjectsPanel';
import PricingPanel from '../components/PricingPanel';
import ContactModal from '../components/ContactModal';
import MobileNotice from '../components/MobileNotice';

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

  // touch swipe navigation (mobile)
  useEffect(() => {
    let startX = 0, startY = 0, tracking = false;
    function onStart(e) {
      if (contact !== null) return;
      if (e.target.closest('.contact-card, .budget, textarea, input, a, button')) { tracking = false; return; }
      tracking = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
    function onEnd(e) {
      if (!tracking || contact !== null) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // horizontal swipe, and clearly more horizontal than vertical
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        if (dx < 0) setPage((p) => Math.min(MAX, p + 1)); // swipe left → next
        else setPage((p) => Math.max(0, p - 1));          // swipe right → prev
      }
    }
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [contact]);

  return (
    <>
      <MobileNotice />
      <div className="site-wrap">
        <div className="stage" data-page={page === 0 ? undefined : page}>
          <HomePanel onNext={() => goTo(1)} onContact={() => openContact('')} />
          <AboutPanel onBack={() => goTo(0)} onNext={() => goTo(2)} />
          <ProjectsPanel onBack={() => goTo(1)} onNext={() => goTo(3)} />
          <PricingPanel onBack={() => goTo(2)} onContact={openContact} />
        </div>
      </div>
      <ContactModal open={contact !== null} plan={contact || ''} onClose={closeContact} />
    </>
  );
}
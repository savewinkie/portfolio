'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorEffect() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0, mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(trail, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const onEnterButton = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'back.out(2)' });
      gsap.to(trail, { scale: 0.5, opacity: 0.3, duration: 0.3 });
    };

    const onLeaveButton = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
      gsap.to(trail, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMove);

    const buttons = document.querySelectorAll('a, button, .project-card, .pricing-card, .skill-card, .wib-card');
    buttons.forEach(b => {
      b.addEventListener('mouseenter', onEnterButton);
      b.addEventListener('mouseleave', onLeaveButton);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      buttons.forEach(b => {
        b.removeEventListener('mouseenter', onEnterButton);
        b.removeEventListener('mouseleave', onLeaveButton);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="gsap-cursor" />
      <div ref={trailRef} className="gsap-trail" />
    </>
  );
}
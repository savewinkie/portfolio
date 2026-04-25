'use client';

import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    tick();

    const onEnter = () => cursor.classList.add('hover');
    const onLeave = () => cursor.classList.remove('hover');

    const targets = document.querySelectorAll('a, button, .project-card, .pricing-card, .skill-card, .wib-card, input, textarea');
    targets.forEach(t => {
      t.addEventListener('mouseenter', onEnter);
      t.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onEnter);
        t.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="mac-cursor" />;
}
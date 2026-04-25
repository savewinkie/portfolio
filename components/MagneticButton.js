'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function MagneticButton({ children, className, href, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (href) {
    return <a ref={ref} href={href} className={className}>{children}</a>;
  }
  return <button ref={ref} className={className} onClick={onClick}>{children}</button>;
}
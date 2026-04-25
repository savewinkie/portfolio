'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SplitText({ text, className, delay = 0, tag = 'span' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = text.split('').map((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(40px) rotateX(-40deg)';
      return span;
    });

    el.innerHTML = '';
    chars.forEach(c => el.appendChild(c));

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      stagger: 0.035,
      ease: 'back.out(1.4)',
      delay: delay / 1000,
    });
  }, [text, delay]);

  const Tag = tag;
  return <Tag ref={ref} className={className} style={{ perspective: '600px', display: 'inline-block' }} />;
}
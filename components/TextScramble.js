'use client';

import { useEffect, useRef, useState } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#@$%&0123456789ABCDEFabcdef';

export default function TextScramble({ text, className, delay = 0 }) {
  const [display, setDisplay] = useState('');
  const frameRef = useRef(0);
  const resolveRef = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      resolveRef.current = Array(text.length).fill(false);

      const tick = () => {
        const output = text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (resolveRef.current[i]) return char;
          if (iteration > i * 1.5) {
            resolveRef.current[i] = true;
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

        setDisplay(output);
        iteration += 0.35;

        if (resolveRef.current.every(Boolean)) return;
        frameRef.current = requestAnimationFrame(tick);
      };

      tick();
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay]);

  return <span className={className}>{display || text}</span>;
}
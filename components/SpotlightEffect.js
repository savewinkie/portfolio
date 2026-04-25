'use client';

import { useEffect, useRef } from 'react';

export default function SpotlightEffect() {
  const spotRef = useRef(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    const onMove = (e) => {
      spot.style.left = e.clientX + 'px';
      spot.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={spotRef} className="spotlight" />;
}
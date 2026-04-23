'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('initializing...');

  useEffect(() => {
    const texts = ['initializing...', 'loading modules...', 'compiling assets...', 'ready.'];
    let textIdx = 0;

    const textTimer = setInterval(() => {
      textIdx++;
      if (textIdx < texts.length) setText(texts[textIdx]);
    }, 400);

    const progTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1600);

    return () => {
      clearInterval(textTimer);
      clearInterval(progTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">link<span>.dev</span></div>
        <div className="loader-text">{text}</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-percent">{progress}%</div>
      </div>
    </div>
  );
}
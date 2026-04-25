'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextScramble from './TextScramble';

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
    }, 380);

    const progTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(progTimer); return 100; }
        return prev + 2;
      });
    }, 28);

    const hideTimer = setTimeout(() => setVisible(false), 1600);

    return () => {
      clearInterval(textTimer);
      clearInterval(progTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-logo">
              <TextScramble text="linkb.dev" delay={100} />
            </div>
            <div className="loader-text">{text}</div>
            <div className="loader-bar-wrap">
              <motion.div
                className="loader-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="loader-percent">{progress}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
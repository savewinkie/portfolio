'use client';

import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

const lines = [
  { type: 'prompt',  text: 'whoami' },
  { type: 'name',    text: 'Link — Software Developer & Vibe Coder' },
  { type: 'blank',   text: '' },
  { type: 'prompt',  text: 'cat about.txt' },
  { type: 'comment', text: '// I build fast, ship fast, learn even faster.' },
  { type: 'comment', text: '// I turn ideas into real working products.' },
  { type: 'blank',   text: '' },
  { type: 'prompt',  text: 'ls skills/' },
  { type: 'tag',     text: 'rapid-mvp   website-builder   full-stack   ai-dev   fast-shipper' },
  { type: 'blank',   text: '' },
  { type: 'prompt2', text: 'Ready to build something?' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-scanline" />

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="terminal-titlebar">
          <div className="titlebar-dots">
            <div className="dot r" />
            <div className="dot y" />
            <div className="dot g" />
          </div>
          <div className="titlebar-title">link@portfolio: ~/home</div>
        </div>

        <Typewriter lines={lines} speed={40} />

        <div style={{ padding: '0 36px 32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ./view-projects.sh
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ./contact-me.sh
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
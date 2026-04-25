'use client';

import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import SplitText from './SplitText';

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

      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="terminal-titlebar">
          <div className="titlebar-dots">
            <motion.div
              className="dot r"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.0, type: 'spring', stiffness: 400 }}
            />
            <motion.div
              className="dot y"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.1, type: 'spring', stiffness: 400 }}
            />
            <motion.div
              className="dot g"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring', stiffness: 400 }}
            />
          </div>
          <div className="titlebar-title">
            <TextScramble text="link@portfolio: ~/home" delay={2000} />
          </div>
        </div>

        <Typewriter lines={lines} speed={38} />

        <div style={{ padding: '0 36px 32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#projects" className="btn-primary">
              ./view-projects.sh
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#contact" className="btn-outline">
              ./contact-me.sh
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
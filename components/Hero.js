'use client';

import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import TextScramble from './TextScramble';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.8 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-scanline" />

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="terminal-titlebar">
          <div className="titlebar-dots">
            <div className="dot r" />
            <div className="dot y" />
            <div className="dot g" />
          </div>
          <div className="titlebar-title">
            <TextScramble text="link@portfolio: ~/home" delay={2000} />
          </div>
        </div>

        <Typewriter lines={lines} speed={38} />

        <motion.div
          style={{ padding: '0 36px 32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(152,195,121,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            ./view-projects.sh
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            ./contact-me.sh
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
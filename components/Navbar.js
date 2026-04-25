'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navItems = [
  { href: '#home',     label: 'index' },
  { href: '#about',    label: 'about' },
  { href: '#skills',   label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#pricing',  label: 'pricing' },
  { href: '#contact',  label: 'contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href="#home"
        className="nav-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        linkb<span>.dev</span>
      </motion.a>

      <div className="nav-tabs">
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            className={`nav-tab ${item.href === '#home' ? 'active' : ''}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      <motion.div
        className="nav-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <MagneticButton
          href="https://github.com/savewinkie"
          className="nav-github"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </MagneticButton>

        <div className="nav-status-wrap">
          <div className="nav-dot" />
          <span className="nav-status">available for work</span>
        </div>
      </motion.div>
    </motion.nav>
  );
}
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

      <div className="terminal-window">
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
          <a href="#projects" className="btn-primary">./view-projects.sh</a>
          <a href="#contact"  className="btn-outline">./contact-me.sh</a>
        </div>
      </div>
    </section>
  );
}
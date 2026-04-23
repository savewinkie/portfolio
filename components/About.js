'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        if (target === '∞') { setCount('∞'); return; }
        const num = parseInt(target);
        const duration = 1500;
        const steps = 40;
        const increment = num / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            setCount(num);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-num">
      {count}{count !== '∞' && count > 0 ? suffix : count === '∞' ? '' : ''}
    </span>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>about-me</h2>
        <div className="sec-line" />
      </div>

      <div className="about-wrap">
        <div>
          <div className="about-code reveal">
            <div className="code-tabs">
              <div className="code-tab active">about.js</div>
              <div className="code-tab">bio.json</div>
            </div>
            <div className="code-body">
              <div className="c-line"><span className="t-tag">const</span>&nbsp;<span className="t-key">developer</span>&nbsp;<span className="t-fg">=</span>&nbsp;<span className="t-comment">&#123;</span></div>
              <div className="c-line c-indent"><span className="t-key">name</span><span className="t-fg">:</span>&nbsp;<span className="t-str">&quot;Link&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent"><span className="t-key">role</span><span className="t-fg">:</span>&nbsp;<span className="t-str">&quot;Software Developer & Vibe Coder&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent"><span className="t-key">focus</span><span className="t-fg">:</span>&nbsp;<span className="t-str">&quot;Build fast, ship fast&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent"><span className="t-key">loves</span><span className="t-fg">: [</span></div>
              <div className="c-line c-indent2"><span className="t-str">&quot;Rapid MVP Development&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent2"><span className="t-str">&quot;AI-Assisted Development&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent2"><span className="t-str">&quot;Shipping Real Products&quot;</span><span className="t-fg">,</span></div>
              <div className="c-line c-indent"><span className="t-fg">],</span></div>
              <div className="c-line c-indent"><span className="t-key">goal</span><span className="t-fg">:</span>&nbsp;<span className="t-str">&quot;Top Builder / Indie Developer&quot;</span></div>
              <div className="c-line"><span className="t-comment">&#125;</span></div>
            </div>
          </div>

          <div className="about-stats reveal reveal-delay-1">
            <div className="stat-box">
              <Counter target="10" suffix="+" />
              <div className="stat-lbl">Projects Shipped</div>
            </div>
            <div className="stat-box">
              <Counter target="5" suffix="+" />
              <div className="stat-lbl">Tech Stacks</div>
            </div>
            <div className="stat-box">
              <Counter target="∞" />
              <div className="stat-lbl">Ideas to Build</div>
            </div>
            <div className="stat-box">
              <Counter target="1" />
              <div className="stat-lbl">Goal: Top Builder</div>
            </div>
          </div>
        </div>

        <div className="about-text reveal reveal-delay-2">
          <p>
            I&apos;m a <span className="hl-green">Software Developer & Website Builder</span> focused
            on rapid MVP development and vibe coding. I design, build, and ship
            full-stack applications, websites, and AI-powered tools quickly.
          </p>
          <p>
            My philosophy is <span className="hl-yellow">build first, optimize later</span>. I focus
            on turning ideas into real working products — fast. I love experimenting
            with new technologies and pushing what&apos;s possible with
            <span className="hl-blue"> AI-assisted development</span>.
          </p>
          <p>
            I don&apos;t just write code — I ship products. Whether it&apos;s a
            SaaS platform, a landing page, or an AI tool — I get it done and
            get it live.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [shipped, setShipped] = useState(0);
  const [stacks, setStacks] = useState(0);
  const [ideas, setIdeas] = useState(0);
  const [goal, setGoal] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animate = (setter, target, duration = 1500) => {
              const start = Date.now();
              const tick = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                setter(Math.floor(progress * target));
                if (progress < 1) requestAnimationFrame(tick);
              };
              tick();
            };
            animate(setShipped, 10);
            animate(setStacks, 5);
            animate(setIdeas, 99);
            animate(setGoal, 1);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>about-me</h2>
        <div className="sec-line" />
      </div>

      <div className="about-wrap">
        <div className="about-left reveal">
          {/* 3D Tilted Code Editor */}
          <div className="code-editor-3d">
            <div className="code-editor-bar">
              <div className="code-editor-dots">
                <span className="cd-dot cd-r"></span>
                <span className="cd-dot cd-y"></span>
                <span className="cd-dot cd-g"></span>
              </div>
              <div className="code-editor-tab">developer.tsx</div>
            </div>
            <div className="code-editor-body">
              <div className="cl"><span className="ln">1</span><span className="ck">const</span> <span className="cf">developer</span> = {'{'}</div>
              <div className="cl"><span className="ln">2</span>&nbsp;&nbsp;<span className="cv">name</span>: <span className="cs">"Link"</span>,</div>
              <div className="cl"><span className="ln">3</span>&nbsp;&nbsp;<span className="cv">role</span>: <span className="cs">"Software Developer"</span>,</div>
              <div className="cl"><span className="ln">4</span>&nbsp;&nbsp;<span className="cv">stack</span>: [<span className="cs">"Next.js"</span>, <span className="cs">"React"</span>],</div>
              <div className="cl"><span className="ln">5</span>&nbsp;&nbsp;<span className="cv">focus</span>: <span className="cs">"shipping fast"</span>,</div>
              <div className="cl"><span className="ln">6</span>&nbsp;&nbsp;<span className="cv">available</span>: <span className="ck">true</span>,</div>
              <div className="cl"><span className="ln">7</span>{'}'}</div>
              <div className="cl"><span className="ln">8</span>&nbsp;</div>
              <div className="cl"><span className="ln">9</span><span className="cc">{'// Currently building Lumen AI'}</span></div>
              <div className="cl"><span className="ln">10</span><span className="cf">developer</span>.<span className="cf">build</span>()<span className="cb"></span></div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge fb-1">
            <div className="fb-ico">⚡</div>
            <div>
              <div className="fb-l">Build time</div>
              <div className="fb-v">3 days</div>
            </div>
          </div>
          <div className="float-badge fb-2">
            <div className="fb-ico" style={{ background: 'rgba(63,185,80,0.15)', color: '#3fb950' }}>✓</div>
            <div>
              <div className="fb-l">Status</div>
              <div className="fb-v" style={{ color: '#3fb950' }}>Shipped</div>
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">{shipped}+</div>
              <div className="stat-lbl">Projects Shipped</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{stacks}+</div>
              <div className="stat-lbl">Tech Stacks</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{ideas}+</div>
              <div className="stat-lbl">Ideas to Build</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{goal === 1 ? '∞' : '0'}</div>
              <div className="stat-lbl">Goal: Top Builder</div>
            </div>
          </div>
        </div>

        <div className="about-right reveal">
          <p className="about-p">
            I'm a <strong>Software Developer & Website Builder</strong> focused on rapid MVP development and vibe coding. I design, build, and ship full-stack applications, websites, and AI-powered tools quickly.
          </p>
          <p className="about-p">
            My philosophy is <strong>build first, optimize later</strong>. I focus on turning ideas into real working products — fast. I love experimenting with new technologies and pushing what's possible with AI-assisted development.
          </p>
          <p className="about-p">
            I don't just write code — I ship products. Whether it's a SaaS platform, a landing page, or an AI tool — I get it done and get it live.
          </p>
          <div className="about-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
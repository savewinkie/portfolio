import { Lightbulb, Pencil, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Idea',
    desc: 'A spark — a problem worth solving, a product worth building.',
    Icon: Lightbulb,
    color: '#e5c07b',
    cmd: '$ npm init idea',
    file: 'idea.md',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Sketch fast. Design the core experience. Minimal and focused.',
    Icon: Pencil,
    color: '#61afef',
    cmd: '$ figma open --new',
    file: 'design.fig',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Code it. Vibe-code it. Use every tool available — AI included.',
    Icon: Code2,
    color: '#c678dd',
    cmd: '$ code . && claude',
    file: 'build.tsx',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Deploy. Launch. Put it in front of real people. Iterate later.',
    Icon: Rocket,
    color: '#98c379',
    cmd: '$ vercel --prod',
    file: 'ship.sh',
  },
];

export default function Workflow() {
  return (
    <section className="workflow-section">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>workflow</h2>
        <div className="sec-line" />
      </div>

      <p className="workflow-subtitle reveal">
        <span className="t-comment">// Idea → Design → Build → Ship</span>
      </p>

      <div className="workflow-flow reveal">
        {steps.map((s, i) => (
          <div className="workflow-step-wrap" key={s.num}>
            <div
              className="wf-window"
              style={{
                '--step-color': s.color,
                '--tilt': i % 2 === 0 ? '-2deg' : '2deg',
              }}
            >
              {/* Mac terminal titlebar */}
              <div className="wf-titlebar">
                <div className="wf-dots">
                  <span className="wf-dot wf-r" />
                  <span className="wf-dot wf-y" />
                  <span className="wf-dot wf-g" />
                </div>
                <div className="wf-tab">
                  <s.Icon size={11} strokeWidth={1.8} color={s.color} />
                  <span>{s.file}</span>
                </div>
                <span className="wf-num">{s.num}</span>
              </div>

              {/* Body */}
              <div className="wf-body">
                <div className="wf-title-row">
                  <h3 className="wf-title">{s.title}</h3>
                </div>
                <p className="wf-desc">{s.desc}</p>

                <div className="wf-cmd">
                  <span className="wf-cmd-prompt">›</span>
                  <span className="wf-cmd-text">{s.cmd}</span>
                  <span className="wf-cmd-cursor" />
                </div>
              </div>

              {/* Status bar bottom */}
              <div className="wf-statusbar">
                <span className="wf-status-left">step {i + 1}/4</span>
                <span className="wf-status-mid">●  ready</span>
                <span className="wf-status-right">UTF-8</span>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div className="wf-connector">
                <span>›</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats banner */}
      <div className="workflow-banner reveal">
        <div className="banner-item">
          <div className="banner-icon">⚡</div>
          <div>
            <div className="banner-num">3-7</div>
            <div className="banner-label">days per project</div>
          </div>
        </div>
        <div className="banner-divider" />
        <div className="banner-item">
          <div className="banner-icon">◎</div>
          <div>
            <div className="banner-num">100%</div>
            <div className="banner-label">focus on shipping</div>
          </div>
        </div>
        <div className="banner-divider" />
        <div className="banner-item">
          <div className="banner-icon">↻</div>
          <div>
            <div className="banner-num">Iterate</div>
            <div className="banner-label">after launch</div>
          </div>
        </div>
        <div className="banner-divider" />
        <div className="banner-item">
          <div className="banner-icon">∞</div>
          <div>
            <div className="banner-num">No limits</div>
            <div className="banner-label">on creativity</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="workflow-cta reveal">
        <div className="workflow-cta-text">
          <div className="workflow-cta-pre mono">// ready when you are</div>
          <h3>Got an idea? <span>Let&apos;s ship it.</span></h3>
        </div>
        <a href="#contact" className="workflow-cta-btn">
          Start a project →
        </a>
      </div>
    </section>
  );
}
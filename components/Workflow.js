import { Lightbulb, Pencil, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Idea',
    desc: 'A spark — a problem worth solving, a product worth building.',
    Icon: Lightbulb,
    color: '#e5c07b',
    glow: 'rgba(229,192,123,0.3)',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Sketch fast. Design the core experience. Minimal and focused.',
    Icon: Pencil,
    color: '#61afef',
    glow: 'rgba(97,175,239,0.3)',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Code it. Vibe-code it. Use every tool available — AI included.',
    Icon: Code2,
    color: '#c678dd',
    glow: 'rgba(198,120,221,0.3)',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Deploy. Launch. Put it in front of real people. Iterate later.',
    Icon: Rocket,
    color: '#98c379',
    glow: 'rgba(152,195,121,0.3)',
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
              className="workflow-step-card"
              style={{
                '--step-color': s.color,
                '--step-glow': s.glow,
                '--tilt': i % 2 === 0 ? '-3deg' : '3deg',
              }}
            >
              <div className="step-card-glow" />

              <div className="step-card-head">
                <div className="step-card-num">{s.num}</div>
                <div
                  className="step-card-icon"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  <s.Icon size={20} strokeWidth={1.5} color={s.color} />
                </div>
              </div>

              <div className="step-card-body">
                <h3 className="step-card-title">{s.title}</h3>
                <p className="step-card-desc">{s.desc}</p>
              </div>

              <div className="step-card-bottom">
                <span className="step-card-meta">step {i + 1} of 4</span>
                <div className="step-card-progress">
                  <div className="step-progress-track">
                    <div
                      className="step-progress-fill"
                      style={{
                        width: `${((i + 1) / 4) * 100}%`,
                        background: s.color,
                        boxShadow: `0 0 8px ${s.glow}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div className="workflow-connector">
                <div className="connector-line" />
                <div className="connector-arrow">→</div>
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
          <div className="banner-icon">🎯</div>
          <div>
            <div className="banner-num">100%</div>
            <div className="banner-label">focus on shipping</div>
          </div>
        </div>
        <div className="banner-divider" />
        <div className="banner-item">
          <div className="banner-icon">🔁</div>
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
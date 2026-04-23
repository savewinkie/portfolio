const steps = [
  { num: '01', title: 'Idea',   desc: 'A spark — a problem worth solving, a product worth building.' },
  { num: '02', title: 'Design', desc: 'Sketch fast. Design the core experience. Minimal and focused.' },
  { num: '03', title: 'Build',  desc: 'Code it. Vibe-code it. Use every tool available — AI included.' },
  { num: '04', title: 'Ship',   desc: 'Deploy. Launch. Put it in front of real people. Iterate later.' },
];

export default function Workflow() {
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>workflow</h2>
        <div className="sec-line" />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <span className="t-comment" style={{ fontSize: '12px' }}>
          // Idea → Design → Build → Ship
        </span>
      </div>

      <div className="workflow-steps reveal">
        {steps.map(s => (
          <div className="workflow-step" key={s.num}>
            <div className="step-num">[ {s.num} ]</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
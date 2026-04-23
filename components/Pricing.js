const plans = [
  {
    id: '01',
    name: 'Starter',
    price: '€100',
    tag: 'Clean & Working',
    desc: 'A clean, fast, and fully working website. Perfect for individuals and small businesses who need a solid online presence.',
    includes: [
      'Up to 3 pages',
      'Mobile responsive design',
      'Clean modern UI',
      'Contact form',
      'Deployed on Vercel',
      'Basic SEO setup',
      '1 round of revisions',
    ],
    color: 'var(--cyan)',
    colorDim: 'rgba(86,182,194,0.1)',
    colorBorder: 'rgba(86,182,194,0.2)',
    popular: false,
  },
  {
    id: '02',
    name: 'Advanced',
    price: '€200',
    tag: 'More Features',
    desc: 'A more advanced website with extra pages, animations, and custom features. Great for growing businesses and portfolios.',
    includes: [
      'Up to 6 pages',
      'Custom animations',
      'Advanced UI/UX design',
      'API integrations',
      'Performance optimized',
      'Full SEO setup',
      'Custom domain setup',
      '3 rounds of revisions',
    ],
    color: 'var(--green)',
    colorDim: 'rgba(152,195,121,0.1)',
    colorBorder: 'rgba(152,195,121,0.25)',
    popular: true,
  },
  {
    id: '03',
    name: 'Professional',
    price: '€300',
    tag: 'Full Package',
    desc: 'A fully professional website with premium animations, full content changes, and a 6-month partnership to keep growing together.',
    includes: [
      'Unlimited pages',
      'Premium animations & effects',
      'Full-stack development',
      'CMS or admin dashboard',
      'Full content changes',
      'Priority support',
      '6-month partnership',
      'Unlimited revisions',
      'Monthly updates included',
    ],
    color: 'var(--purple)',
    colorDim: 'rgba(198,120,221,0.1)',
    colorBorder: 'rgba(198,120,221,0.25)',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>pricing</h2>
        <div className="sec-line" />
      </div>

      <p className="reveal" style={{
        color: 'var(--fg-dim)',
        fontSize: '13px',
        marginBottom: '48px',
        maxWidth: '500px',
        lineHeight: '1.8'
      }}>
        <span style={{ color: 'var(--fg-dim)' }}>// </span>
        Simple, transparent pricing. No hidden fees. You know exactly what you get.
      </p>

      <div className="pricing-grid reveal">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="pricing-card"
            style={{
              '--plan-color': plan.color,
              '--plan-dim': plan.colorDim,
              '--plan-border': plan.colorBorder,
              borderColor: plan.popular ? plan.colorBorder : 'var(--border)',
            }}
          >
            {plan.popular && (
              <div className="pricing-popular">Most Popular</div>
            )}

            <div className="pricing-top">
              <div className="pricing-id">{plan.id}</div>
              <div className="pricing-tag" style={{ color: plan.color, borderColor: plan.colorBorder, background: plan.colorDim }}>
                {plan.tag}
              </div>
            </div>

            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price" style={{ color: plan.color }}>
              {plan.price}
              <span className="pricing-per"> / project</span>
            </div>

            <p className="pricing-desc">{plan.desc}</p>

            <div className="pricing-divider" style={{ background: plan.colorBorder }} />

            <ul className="pricing-list">
              {plan.includes.map((item) => (
                <li key={item} className="pricing-item">
                  <span className="pricing-check" style={{ color: plan.color }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="pricing-btn"
              style={{
                background: plan.popular ? plan.color : 'transparent',
                color: plan.popular ? 'var(--bg)' : plan.color,
                borderColor: plan.colorBorder,
              }}
            >
              {plan.popular ? 'Get Started' : 'Contact Me'} ↗
            </a>
          </div>
        ))}
      </div>

      <p className="reveal" style={{
        color: 'var(--fg-muted)',
        fontSize: '12px',
        marginTop: '32px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '32px auto 0',
        lineHeight: '1.8'
      }}>
        // All prices are starting prices. Final price depends on project complexity.
        <br />Need something custom? <a href="#contact" style={{ color: 'var(--green)', textDecoration: 'none' }}>Let&apos;s talk ↗</a>
      </p>
    </section>
  );
}
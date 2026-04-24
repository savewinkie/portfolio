const reviews = [
  {
    name: 'Imre Bernath',
    role: 'Client',
    text: 'Great experience from start to finish. Communication was clear, he understood exactly what I needed, and delivered high-quality work on time. He also came up with smart ideas that improved the final result.',
    initial: 'I',
  },
  {
    name: 'Miranda Bernath',
    role: 'Client',
    text: 'Really happy with the outcome. He quickly understood my requirements and turned them into something even better than I expected. Everything was delivered on time and looked very professional.',
    initial: 'M',
  },
  {
    name: 'Imre Bernath',
    role: 'Client',
    text: 'Great experience from start to finish. Communication was clear, he understood exactly what I needed, and delivered high-quality work on time. He also came up with smart ideas that improved the final result.',
    initial: 'I',
  },
  {
    name: 'Miranda Bernath',
    role: 'Client',
    text: 'Really happy with the outcome. He quickly understood my requirements and turned them into something even better than I expected. Everything was delivered on time and looked very professional.',
    initial: 'M',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>testimonials</h2>
        <div className="sec-line" />
      </div>

      <div className="testimonials-track-wrap">
        <div className="testimonials-fade-left" />
        <div className="testimonials-fade-right" />
        <div className="testimonials-track">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;{r.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.initial}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-role">{r.role} via linkb.dev</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
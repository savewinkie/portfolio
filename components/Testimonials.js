const reviews = [
  {
    name: 'Imre Bernath',
    role: 'Client via linkb.dev',
    text: 'I worked with him through linkb.dev and it was a great experience from start to finish. Communication was clear, he understood exactly what I needed, and he delivered high-quality work on time. He also came up with smart ideas that improved the final result. I\'d definitely work with him again.',
  },
  {
    name: 'Miranda Bernath',
    role: 'Client via linkb.dev',
    text: 'I found him through linkb.dev for a project and I\'m really happy with the outcome. He quickly understood my requirements and turned them into something even better than I expected. Everything was delivered on time and looked very professional. Great to work with and highly recommended!',
  },
  // Duplicated for infinite loop effect
  {
    name: 'Imre Bernath',
    role: 'Client via linkb.dev',
    text: 'I worked with him through linkb.dev and it was a great experience from start to finish. Communication was clear, he understood exactly what I needed, and he delivered high-quality work on time. He also came up with smart ideas that improved the final result. I\'d definitely work with him again.',
  },
  {
    name: 'Miranda Bernath',
    role: 'Client via linkb.dev',
    text: 'I found him through linkb.dev for a project and I\'m really happy with the outcome. He quickly understood my requirements and turned them into something even better than I expected. Everything was delivered on time and looked very professional. Great to work with and highly recommended!',
  },
  {
    name: 'Imre Bernath',
    role: 'Client via linkb.dev',
    text: 'I worked with him through linkb.dev and it was a great experience from start to finish. Communication was clear, he understood exactly what I needed, and he delivered high-quality work on time.',
  },
  {
    name: 'Miranda Bernath',
    role: 'Client via linkb.dev',
    text: 'I found him through linkb.dev for a project and I\'m really happy with the outcome. He quickly understood my requirements and turned them into something even better than I expected.',
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
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-role">{r.role}</div>
                </div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
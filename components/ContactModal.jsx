'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// small plus icon for the card corners
function Plus({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// little icons for the contact info rows
const icons = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" /></svg>
  ),
};

export default function ContactModal({ open, onClose, plan = '' }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    function onKey(e) {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
    }
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xaqzaozy', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSent(true); form.reset(); }
      else { alert('Something went wrong — you can also email me directly at contact.linkb@gmail.com'); }
    } catch {
      alert('Something went wrong — you can also email me directly at contact.linkb@gmail.com');
    }
    setSending(false);
  }

  return createPortal(
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        <Plus className="cc-plus tl" />
        <Plus className="cc-plus tr" />
        <Plus className="cc-plus bl" />
        <Plus className="cc-plus br" />

        <button className="contact-close" onClick={onClose} aria-label="Close">×</button>

        {/* LEFT: info */}
        <div className="cc-info">
          <h2>Let&apos;s work together</h2>
          <p>
            Got a project in mind or a question? Fill out the form and I&apos;ll get
            back to you, usually within a day.
          </p>
          <div className="cc-rows">
            <div className="cc-row">
              <span className="cc-ico">{icons.mail}</span>
              <div><p className="cc-label">Email</p><p className="cc-value">contact.linkb@gmail.com</p></div>
            </div>
            <div className="cc-row">
              <span className="cc-ico">{icons.pin}</span>
              <div><p className="cc-label">Location</p><p className="cc-value">Amsterdam, NL</p></div>
            </div>
            <div className="cc-row">
              <span className="cc-ico">{icons.github}</span>
              <div><p className="cc-label">GitHub</p><p className="cc-value">savewinkie</p></div>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="cc-form-wrap">
          {!sent ? (
            <form onSubmit={handleSubmit} className="cc-form">
              {plan && <input type="hidden" name="plan" value={plan} />}
              {plan && <div className="cc-plan-tag">{plan}</div>}
              <label><span>Name</span><input type="text" name="name" required placeholder="Your name" /></label>
              <label><span>Email</span><input type="email" name="email" required placeholder="you@example.com" /></label>
              <label><span>Message</span><textarea name="message" rows={4} required placeholder="What do you have in mind?" /></label>
              <button type="submit" className="cc-submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          ) : (
            <div className="cc-sent">
              <div className="cc-check">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks — I&apos;ll get back to you soon.</p>
              <button className="cc-submit" onClick={onClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
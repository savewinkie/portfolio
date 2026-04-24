'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="newsletter-wrap">
      <p className="newsletter-label">
        // drop your email — i&apos;ll send you updates on new projects &amp; builds
      </p>

      {status === 'success' ? (
        <p className="newsletter-success">✓ subscribed. talk soon.</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="newsletter-input"
            required
          />
          <button
            type="submit"
            className="newsletter-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '...' : 'subscribe ↗'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="newsletter-error">✗ something went wrong. try again.</p>
      )}
    </div>
  );
}
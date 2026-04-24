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
    <section style={{ padding: '60px 40px', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <p style={{
        fontStyle: 'italic',
        fontSize: '13px',
        color: 'var(--fg-muted)',
        marginBottom: '20px',
        lineHeight: '1.7',
      }}>
        // drop your email — i&apos;ll send you updates on new projects &amp; builds
      </p>

      {status === 'success' ? (
        <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--green)' }}>
          ✓ subscribed. talk soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '480px' }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              flex: 1,
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '10px 14px',
              color: 'var(--fg-bright)',
              fontFamily: 'var(--font)',
              fontSize: '13px',
              outline: 'none',
              fontStyle: 'italic',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              fontFamily: 'var(--font)',
              fontSize: '12px',
              padding: '10px 20px',
              background: 'transparent',
              color: 'var(--green)',
              border: '1px solid rgba(152,195,121,0.3)',
              borderRadius: '4px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {status === 'loading' ? '...' : 'subscribe ↗'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p style={{ fontStyle: 'italic', fontSize: '12px', color: 'var(--red)', marginTop: '8px' }}>
          ✗ something went wrong. try again.
        </p>
      )}
    </section>
  );
}
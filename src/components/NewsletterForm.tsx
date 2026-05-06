import { useState, useCallback } from 'react';
import { useHayc } from '../hayc/config-context';

// <NewsletterForm />

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm({
  placeholder,
  submitLabel,
  inputAriaLabel = 'Email',
}: {
  placeholder: string;
  submitLabel: string;
  inputAriaLabel?: string;
}) {
  const { config } = useHayc();
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      const normalizedEmail = email.trim();
      if (!normalizedEmail || !EMAIL_PATTERN.test(normalizedEmail)) {
        setError('Please enter a valid email address.');
        return;
      }

      if (hp.trim()) {
        setSubmitted(true);
        return;
      }

      if (!apiUrl || !siteId) {
        setError('Something went wrong. Please try again.');
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            email: normalizedEmail,
            _hp: hp,
          }),
        });

        if (!res.ok) throw new Error('Request failed');
        setSubmitted(true);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [email, hp, apiUrl, siteId]
  );

  if (submitted) {
    return (
      <p role="status">
        You are subscribed. Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="_hp"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        style={{ display: 'none' }}
        aria-hidden
      />

      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className="form_control"
          aria-label={inputAriaLabel}
          aria-invalid={!!error}
        />
        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Subscribing...' : submitLabel}
          <i className="far fa-paper-plane" />
        </button>
      </div>

      {error && (
        <p role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { trackEvent } from '../hayc/use-analytics';
import type { LocaleString } from '../config';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labels = {
  fullName: { el: 'Ονοματεπώνυμο', en: 'Full name' },
  email: { el: 'Email', en: 'Email' },
  phone: { el: 'Τηλέφωνο', en: 'Phone' },
  subject: { el: 'Τι αφορά το αίτημά σας', en: 'What is your request about' },
  occasion: { el: 'Περίσταση', en: 'Occasion' },
  date: { el: 'Ημερομηνία', en: 'Date' },
  quantity: { el: 'Αριθμός ατόμων / ποσότητα', en: 'Number of guests / quantity' },
  message: { el: 'Μήνυμα', en: 'Message' },
  submit: { el: 'Υποβολη', en: 'Submit' },
  submitting: { el: 'Αποστολή...', en: 'Sending...' },
  subjectPlaceholder: { el: 'Επιλέξτε…', en: 'Select…' },
  occasionPlaceholder: { el: 'Επιλέξτε…', en: 'Select…' },
  qtyPlaceholder: { el: 'Επιλέξτε…', en: 'Select…' },
  successTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Your message was sent!' },
  successText: {
    el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    en: 'We will get back to you shortly.',
  },
  errorText: {
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
  nameRequired: { el: 'Το ονοματεπώνυμο είναι υποχρεωτικό.', en: 'Full name is required.' },
  emailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
  messageRequired: { el: 'Το μήνυμα είναι υποχρεωτικό.', en: 'Message is required.' },
};

function subjectOptions(): { value: string; label: LocaleString }[] {
  return [
    { value: 'order', label: { el: 'Παραγγελία', en: 'Order' } },
    { value: 'event', label: { el: 'Εκδήλωση / τούρτα', en: 'Event / cake' } },
    { value: 'info', label: { el: 'Γενικές πληροφορίες', en: 'General information' } },
    { value: 'other', label: { el: 'Άλλο', en: 'Other' } },
  ];
}

function occasionOptions(): { value: string; label: LocaleString }[] {
  return [
    { value: 'wedding', label: { el: 'Γάμος', en: 'Wedding' } },
    { value: 'christening', label: { el: 'Βάπτιση', en: 'Christening' } },
    { value: 'birthday', label: { el: 'Γενέθλια', en: 'Birthday' } },
    { value: 'corporate', label: { el: 'Εταιρικό', en: 'Corporate' } },
    { value: 'daily', label: { el: 'Καθημερινή παραγγελία', en: 'Everyday order' } },
    { value: 'na', label: { el: 'Δεν εφαρμόζεται', en: 'Not applicable' } },
  ];
}

function qtyOptions(): { value: string; label: LocaleString }[] {
  return [
    { value: '1-10', label: { el: '1 – 10 άτομα', en: '1 – 10 guests' } },
    { value: '11-30', label: { el: '11 – 30 άτομα', en: '11 – 30 guests' } },
    { value: '31-80', label: { el: '31 – 80 άτομα', en: '31 – 80 guests' } },
    { value: '80+', label: { el: '80+ άτομα', en: '80+ guests' } },
    { value: 'qty-small', label: { el: 'Μικρή ποσότητα γλυκών', en: 'Small dessert quantity' } },
    { value: 'qty-med', label: { el: 'Μεσαία ποσότητα', en: 'Medium quantity' } },
    { value: 'qty-large', label: { el: 'Μεγάλη ποσότητα', en: 'Large quantity' } },
  ];
}

export function StamatopoulosContactForm() {
  const { t, config } = useHayc();
  const location = useLocation();
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [occasion, setOccasion] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    message?: string;
  }>({});

  const formStartedRef = useRef(false);
  const isDirtyRef = useRef(false);

  useEffect(() => {
    isDirtyRef.current =
      fullName.trim().length > 0 ||
      email.trim().length > 0 ||
      phone.trim().length > 0 ||
      message.trim().length > 0;
  }, [fullName, email, phone, message]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && isDirtyRef.current && !submitted) {
        trackEvent(apiUrl, siteId, 'form_abandon', location.pathname, { form: 'contact' });
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [apiUrl, siteId, location.pathname, submitted]);

  const markStart = useCallback(() => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent(apiUrl, siteId, 'form_start', location.pathname, { form: 'contact' });
  }, [apiUrl, siteId, location.pathname]);

  const validate = useCallback((): boolean => {
    const errors: typeof fieldErrors = {};
    if (!fullName.trim()) errors.fullName = t(labels.nameRequired);
    if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(labels.emailInvalid);
    if (!message.trim()) errors.message = t(labels.messageRequired);
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [fullName, email, message, t]);

  const buildDetailMessage = useCallback(() => {
    const subj = subjectOptions().find((o) => o.value === subject);
    const occ = occasionOptions().find((o) => o.value === occasion);
    const qty = qtyOptions().find((o) => o.value === quantity);
    const blocks: string[] = [];
    if (phone.trim()) blocks.push(`${t({ el: 'Τηλέφωνο', en: 'Phone' })}: ${phone.trim()}`);
    if (subj) blocks.push(`${t({ el: 'Θέμα', en: 'Subject' })}: ${t(subj.label)}`);
    if (occ) blocks.push(`${t({ el: 'Περίσταση', en: 'Occasion' })}: ${t(occ.label)}`);
    if (eventDate) blocks.push(`${t({ el: 'Ημερομηνία', en: 'Date' })}: ${eventDate}`);
    if (qty) blocks.push(`${t({ el: 'Ποσότητα / άτομα', en: 'Quantity / guests' })}: ${t(qty.label)}`);
    const header = blocks.length > 0 ? `${blocks.join('\n')}\n\n` : '';
    return `${header}${t({ el: 'Μήνυμα', en: 'Message' })}:\n${message.trim()}`;
  }, [phone, subject, occasion, eventDate, quantity, message, t]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      if (!apiUrl || !siteId) {
        setError(t(labels.errorText));
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/public/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            name: fullName.trim(),
            email: email.trim(),
            message: buildDetailMessage(),
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error('Request failed');
        setSubmitted(true);
        isDirtyRef.current = false;
        trackEvent(apiUrl, siteId, 'form_submit', location.pathname, { form: 'contact' });
      } catch {
        setError(t(labels.errorText));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, fullName, email, hp, validate, t, buildDetailMessage]
  );

  if (submitted) {
    return (
      <div className="stamatopoulos-contact-form-success">
        <h3 className="stamatopoulos-contact-form-success-title">{t(labels.successTitle)}</h3>
        <p className="stamatopoulos-contact-form-success-text">{t(labels.successText)}</p>
      </div>
    );
  }

  return (
    <form className="stamatopoulos-contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="_hp"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="stamatopoulos-contact-form-honeypot"
        aria-hidden
      />

      <div className="stamatopoulos-contact-form-field stamatopoulos-contact-form-field--full">
        <label className="stamatopoulos-contact-form-label" htmlFor="spf-name">
          {t(labels.fullName)}
        </label>
        <input
          id="spf-name"
          type="text"
          className="stamatopoulos-contact-form-input"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (fieldErrors.fullName) setFieldErrors((p) => ({ ...p, fullName: undefined }));
          }}
          onFocus={markStart}
          disabled={loading}
          aria-invalid={!!fieldErrors.fullName}
          autoComplete="name"
        />
        {fieldErrors.fullName && (
          <p className="stamatopoulos-contact-form-field-error">{fieldErrors.fullName}</p>
        )}
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-email">
              {t(labels.email)}
            </label>
            <input
              id="spf-email"
              type="email"
              className="stamatopoulos-contact-form-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: undefined }));
              }}
              onFocus={markStart}
              disabled={loading}
              aria-invalid={!!fieldErrors.email}
              autoComplete="email"
            />
            {fieldErrors.email && (
              <p className="stamatopoulos-contact-form-field-error">{fieldErrors.email}</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-phone">
              {t(labels.phone)}
            </label>
            <input
              id="spf-phone"
              type="tel"
              className="stamatopoulos-contact-form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={markStart}
              disabled={loading}
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-subject">
              {t(labels.subject)}
            </label>
            <select
              id="spf-subject"
              className="stamatopoulos-contact-form-select"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onFocus={markStart}
              disabled={loading}
            >
              <option value="">{t(labels.subjectPlaceholder)}</option>
              {subjectOptions().map((o) => (
                <option key={o.value} value={o.value}>
                  {t(o.label)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-occasion">
              {t(labels.occasion)}
            </label>
            <select
              id="spf-occasion"
              className="stamatopoulos-contact-form-select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              onFocus={markStart}
              disabled={loading}
            >
              <option value="">{t(labels.occasionPlaceholder)}</option>
              {occasionOptions().map((o) => (
                <option key={o.value} value={o.value}>
                  {t(o.label)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-date">
              {t(labels.date)}
            </label>
            <input
              id="spf-date"
              type="date"
              className="stamatopoulos-contact-form-input"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              onFocus={markStart}
              disabled={loading}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="stamatopoulos-contact-form-field">
            <label className="stamatopoulos-contact-form-label" htmlFor="spf-qty">
              {t(labels.quantity)}
            </label>
            <select
              id="spf-qty"
              className="stamatopoulos-contact-form-select"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onFocus={markStart}
              disabled={loading}
            >
              <option value="">{t(labels.qtyPlaceholder)}</option>
              {qtyOptions().map((o) => (
                <option key={o.value} value={o.value}>
                  {t(o.label)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="stamatopoulos-contact-form-field stamatopoulos-contact-form-field--full">
        <label className="stamatopoulos-contact-form-label" htmlFor="spf-message">
          {t(labels.message)}
        </label>
        <textarea
          id="spf-message"
          className="stamatopoulos-contact-form-textarea"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (fieldErrors.message) setFieldErrors((p) => ({ ...p, message: undefined }));
          }}
          onFocus={markStart}
          disabled={loading}
          aria-invalid={!!fieldErrors.message}
        />
        {fieldErrors.message && (
          <p className="stamatopoulos-contact-form-field-error">{fieldErrors.message}</p>
        )}
      </div>

      <div className="stamatopoulos-contact-form-actions">
        <button type="submit" className="theme-btn style-one stamatopoulos-btn-salmon" disabled={loading}>
          {loading ? t(labels.submitting) : t(labels.submit)}
        </button>
      </div>

      {error && (
        <p className="stamatopoulos-contact-form-alert" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

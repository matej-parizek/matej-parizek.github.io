import { useEffect, useState } from 'react';
import { portfolioContent } from '../../../store/portfolioContent';
import { initEmail, sendEmail } from '../../../utils/send-email';

const emptyForm = { name: '', email: '', phone: '', company: '', message: '', contactMethod: 'Email' };

const Contact = () => {
  const { profile } = portfolioContent;
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => { initEmail(); }, []);

  const update = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.message.trim()) nextErrors.message = 'Add a short message.';
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus('invalid');
      return;
    }
    setStatus('submitting');
    const result = await sendEmail(form);
    if (result.success) {
      setForm(emptyForm);
      setStatus('success');
      return;
    }
    setStatus('error');
  };

  return (
    <section id="contact" className="section-shell contact-section" aria-labelledby="contact-heading">
      <div className="site-container section-grid">
        <header className="section-heading">
          <span className="section-number">05</span>
          <div><p>Contact</p><h2 id="contact-heading">Let’s discuss the system behind the screen.</h2><span>For backend roles or a technical conversation, email is the most direct route.</span></div>
        </header>
        <div className="contact-layout">
          <address className="contact-methods">
            <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><span>Phone</span><strong>{profile.phone}</strong></a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>matej-parizek</strong></a>
          </address>
          <form className="contact-form" onSubmit={submit} noValidate>
            <label>Name<input name="name" value={form.name} onChange={update} autoComplete="name" maxLength="100" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <small id="name-error">{errors.name}</small>}</label>
            <label>Email<input name="email" type="email" value={form.email} onChange={update} autoComplete="email" maxLength="254" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <small id="email-error">{errors.email}</small>}</label>
            <label>Phone <em>(optional)</em><input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" maxLength="32" /></label>
            <label>Company <em>(optional)</em><input name="company" value={form.company} onChange={update} autoComplete="organization" maxLength="120" /></label>
            <label>Preferred contact<select name="contactMethod" value={form.contactMethod} onChange={update}><option>Email</option><option>Phone</option></select></label>
            <label className="message-field">Message<textarea name="message" rows="5" value={form.message} onChange={update} maxLength="4000" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <small id="message-error">{errors.message}</small>}</label>
            <div className="form-submit"><button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send message'}</button><p aria-live="polite">{status === 'success' && 'Message sent. I’ll reply as soon as possible.'}{status === 'error' && 'The message could not be sent. Please use email instead.'}{status === 'invalid' && 'Check the highlighted fields.'}</p></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

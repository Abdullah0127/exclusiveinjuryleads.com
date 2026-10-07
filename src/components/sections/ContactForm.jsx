import { useState } from 'react';
import { submitContactMessageDemo } from '../../services/formSubmissions.js';
import Icon from '../ui/Icon.jsx';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await submitContactMessageDemo();
    if (result.mode === 'demo') setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-form-success" role="status">
        <Icon name="check" size={24} />
        <h3>Message demo complete</h3>
        <p>This prototype did not send or store your message. A backend must be connected before this form can receive enquiries.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field" htmlFor="contact-name"><span>Your name</span><input id="contact-name" name="name" autoComplete="name" required /></label>
        <label className="form-field" htmlFor="contact-email"><span>Email address</span><input id="contact-email" name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label className="form-field" htmlFor="contact-phone"><span>Phone (optional)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" /></label>
      <label className="form-field" htmlFor="contact-message"><span>How can we help?</span><textarea id="contact-message" name="message" rows="5" required /></label>
      <button className="button button--primary" type="submit">Send demo message <Icon name="arrow" size={17} /></button>
      <p className="form-disclaimer">Demo only — nothing is sent or retained.</p>
    </form>
  );
}

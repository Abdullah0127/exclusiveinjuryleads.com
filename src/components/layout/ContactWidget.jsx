import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../data/siteContent.js';
import Icon from '../ui/Icon.jsx';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <div className="contact-widget">
      <div className="contact-widget__panel" id="quick-contact-panel" aria-label="Quick contact options" hidden={!open}>
          <div className="contact-widget__heading">
            <div>
              <span className="contact-widget__eyebrow">Need a hand?</span>
              <h2>Quick contact</h2>
            </div>
            <button className="contact-widget__close" type="button" onClick={() => setOpen(false)} aria-label="Close contact options">
              <Icon name="close" size={19} />
            </button>
          </div>
          <a className="contact-widget__item" href={contact.phoneHref}>
            <span className="contact-widget__icon"><Icon name="phone" size={20} /></span>
            <span><strong>Call us</strong><small>{contact.phone}</small></span>
            <span className="contact-widget__arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-widget__item" href={`mailto:${contact.email}`}>
            <span className="contact-widget__icon"><Icon name="mail" size={20} /></span>
            <span><strong>Email us</strong><small>{contact.email}</small></span>
            <span className="contact-widget__arrow" aria-hidden="true">↗</span>
          </a>
          <Link className="contact-widget__item" to="/#claim-form" onClick={() => setOpen(false)}>
            <span className="contact-widget__icon"><Icon name="clipboard" size={20} /></span>
            <span><strong>Claim Form</strong><small>Go to the enquiry form</small></span>
            <span className="contact-widget__arrow" aria-hidden="true">→</span>
          </Link>
      </div>
      <button
        className={`contact-widget__toggle${open ? ' contact-widget__toggle--open' : ''}`}
        type="button"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        aria-controls="quick-contact-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'help'} size={29} />
      </button>
    </div>
  );
}

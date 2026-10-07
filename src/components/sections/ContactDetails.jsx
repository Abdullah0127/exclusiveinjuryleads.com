import { contact } from '../../data/siteContent.js';
import Icon from '../ui/Icon.jsx';

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <a className="contact-detail" href={`mailto:${contact.email}`}>
        <span className="contact-detail__icon"><Icon name="mail" /></span>
        <span><small>Email us</small><strong>{contact.email}</strong></span>
      </a>
      <a className="contact-detail" href={contact.phoneHref}>
        <span className="contact-detail__icon"><Icon name="phone" /></span>
        <span><small>Call us</small><strong>{contact.phone}</strong></span>
      </a>
    </div>
  );
}

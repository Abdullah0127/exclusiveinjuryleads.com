import { Link } from 'react-router-dom';
import { contact, disclaimer, footerLinks } from '../../data/siteContent.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" to="/">
              <span className="brand__mark" aria-hidden="true"><svg viewBox="0 0 48 48" focusable="false"><path d="m9 25 3.2-8.1a4 4 0 0 1 3.7-2.5h16.2a4 4 0 0 1 3.7 2.5L39 25l2.2 2.1a3 3 0 0 1 .9 2.2v6.2a2 2 0 0 1-2 2h-2.4a3.7 3.7 0 0 1-7.3 0H17.6a3.7 3.7 0 0 1-7.3 0H8a2 2 0 0 1-2-2v-6.2a3 3 0 0 1 .9-2.2L9 25Zm4.2-.5h21.6l-2.2-5.6a1.1 1.1 0 0 0-1-.7H16.4a1.1 1.1 0 0 0-1 .7l-2.2 5.6ZM12 34.5a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0Zm20.6 0a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0ZM10 28v3h28v-3H10Z" fill="currentColor"/></svg></span>
              <span className="brand__text"><strong>Exclusive Injury</strong><small>LEADS</small></span>
            </Link>
            <p>Clear information to help you explore your next step.</p>
            <Link className="footer-claim-link" to="/#claim-form">Claim Now <span aria-hidden="true">→</span></Link>
          </div>
          <div className="footer-column">
            <h2>Contact</h2>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            {footerLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
        </div>
        <div className="footer-disclaimer">
          <h2>{disclaimer.title}</h2>
          {disclaimer.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Exclusive Injury Leads</span>
          <span>Information only • Not legal advice</span>
        </div>
      </div>
    </footer>
  );
}

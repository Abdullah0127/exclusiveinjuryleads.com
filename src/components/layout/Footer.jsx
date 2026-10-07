import { Link } from 'react-router-dom';
import { contact, disclaimer, footerLinks } from '../../data/siteContent.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" to="/">
              <span className="brand__mark" aria-hidden="true">E</span>
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

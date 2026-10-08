import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact, navLinks } from '../../data/siteContent.js';
import Button from '../ui/Button.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>Independent accident-claim enquiry support</span>
          <a href={contact.phoneHref}>Call {contact.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header__inner">
          <Link className="brand" to="/" aria-label="Exclusive Injury Leads home" onClick={() => setMenuOpen(false)}>
            <span className="brand__mark" aria-hidden="true"><svg viewBox="0 0 48 48" focusable="false"><path d="m9 25 3.2-8.1a4 4 0 0 1 3.7-2.5h16.2a4 4 0 0 1 3.7 2.5L39 25l2.2 2.1a3 3 0 0 1 .9 2.2v6.2a2 2 0 0 1-2 2h-2.4a3.7 3.7 0 0 1-7.3 0H17.6a3.7 3.7 0 0 1-7.3 0H8a2 2 0 0 1-2-2v-6.2a3 3 0 0 1 .9-2.2L9 25Zm4.2-.5h21.6l-2.2-5.6a1.1 1.1 0 0 0-1-.7H16.4a1.1 1.1 0 0 0-1 .7l-2.2 5.6ZM12 34.5a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0Zm20.6 0a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0ZM10 28v3h28v-3H10Z" fill="currentColor"/></svg></span>
            <span className="brand__text"><strong>Exclusive Injury</strong><small>LEADS</small></span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                end={link.to === '/'}
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="header__call" href={contact.phoneHref} variant="outline">
              {contact.phone}
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}

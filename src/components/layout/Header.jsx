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
            <span className="brand__mark" aria-hidden="true">E</span>
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

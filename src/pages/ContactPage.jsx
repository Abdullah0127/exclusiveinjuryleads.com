import ContactDetails from '../components/sections/ContactDetails.jsx';
import ContactForm from '../components/sections/ContactForm.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeading from '../components/sections/SectionHeading.jsx';
import { contact, contactPage } from '../data/siteContent.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function ContactPage() {
  usePageMeta(contactPage.seo);

  return (
    <>
      <PageHero {...contactPage.hero} ctaTo="#contact-form" />
      <section className="section">
        <div className="container contact-page-grid">
          <div className="contact-page__info">
            <SectionHeading eyebrow={contactPage.form.eyebrow} title={contactPage.form.detailsTitle} text={contactPage.form.detailsText} align="left" />
            <ContactDetails />
            <div className="response-note"><span className="response-note__dot" /><p>We aim to respond {contact.responseTime}.</p></div>
          </div>
          <div className="contact-form-card">
            <h2>{contactPage.form.formTitle}</h2>
            <p>{contactPage.form.text}</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container narrow-copy">
          <p className="eyebrow">{contactPage.next.eyebrow}</p>
          <h2>{contactPage.next.title}</h2>
          <p>{contactPage.next.text}</p>
        </div>
      </section>
    </>
  );
}

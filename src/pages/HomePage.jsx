import { Link } from 'react-router-dom';
import ClaimForm from '../components/claim/ClaimForm.jsx';
import ContactDetails from '../components/sections/ContactDetails.jsx';
import CTASection from '../components/sections/CTASection.jsx';
import ClaimTypeGrid from '../components/sections/ClaimTypeGrid.jsx';
import Faq from '../components/sections/Faq.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeading from '../components/sections/SectionHeading.jsx';
import { advantages, home, whyChoose } from '../data/siteContent.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function HomePage() {
  usePageMeta(home.seo);

  return (
    <>
      <PageHero {...home.hero} variant="home" />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} text={home.why.text} />
          <FeatureGrid items={whyChoose} columns={4} />
          <p className="section-note"><span aria-hidden="true">✓</span> {home.why.note}</p>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Know your options" title={home.specialists.title} text={home.specialists.text} />
          <div className="assurance-grid">
            <article className="assurance-card">
              <div className="assurance-card__number">01</div>
              <h3>{home.specialists.title}</h3>
              <p>{home.specialists.text}</p>
            </article>
            <article className="assurance-card">
              <div className="assurance-card__number">02</div>
              <h3>{home.noWinNoFee.title}</h3>
              <p>{home.noWinNoFee.text}</p>
            </article>
            <article className="assurance-card">
              <div className="assurance-card__number">03</div>
              <h3>{home.highSuccess.title}</h3>
              <p>{home.highSuccess.text}</p>
            </article>
          </div>
        </div>
      </section>
      <HowItWorks heading={<SectionHeading eyebrow={home.steps.eyebrow} title={home.steps.title} text={home.steps.text} />} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={home.advantages.eyebrow} title={home.advantages.title} text={home.advantages.text} />
          <FeatureGrid items={advantages} columns={4} />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading title={home.claimTypes.title} text="From road incidents to workplace and care-related injuries, these are the enquiry types covered on this site." />
          <ClaimTypeGrid />
          <div className="center-action"><Link className="text-link" to="/services">Explore all service areas <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <ClaimForm />
      <Faq />
      <section className="contact-strip">
        <div className="container contact-strip__inner">
          <div>
            <p className="eyebrow">{home.contactCta.eyebrow}</p>
            <h2>{home.contactCta.title}</h2>
            <p>{home.contactCta.text}</p>
          </div>
          <ContactDetails />
        </div>
      </section>
      <CTASection {...home.contactCta} to="/contact" />
    </>
  );
}

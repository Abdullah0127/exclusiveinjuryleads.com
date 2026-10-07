import CTASection from '../components/sections/CTASection.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeading from '../components/sections/SectionHeading.jsx';
import { partnersPage } from '../data/siteContent.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function PartnersPage() {
  usePageMeta(partnersPage.seo);

  return (
    <>
      <PageHero {...partnersPage.hero} cta="Contact us" ctaTo="/contact" />
      <section className="section">
        <div className="container partner-content">
          <SectionHeading eyebrow="How introductions work" title="A directory is not proof of affiliation" text="The reference page lists organizations across legal, marketing, insurance, and health services. We have not copied that large directory or represented those organizations as partners of this new business. Verify current relationships and permission before adding any names." />
          <div className="assurance-grid">
            <article className="assurance-card"><div className="assurance-card__number">01</div><h3>Separate organizations</h3><p>Any legal professional operates independently from this enquiry service.</p></article>
            <article className="assurance-card"><div className="assurance-card__number">02</div><h3>Ask before agreeing</h3><p>Check qualifications, scope, fees, and terms directly with the provider.</p></article>
            <article className="assurance-card"><div className="assurance-card__number">03</div><h3>No promise of referral</h3><p>Submitting an enquiry does not guarantee a match, eligibility, or a particular outcome.</p></article>
          </div>
        </div>
      </section>
      <CTASection eyebrow="Questions?" title="Talk with our team" text="Contact us for general questions about how an enquiry may be handled." button="Contact us" to="/contact" />
    </>
  );
}

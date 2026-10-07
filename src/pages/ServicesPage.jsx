import CTASection from '../components/sections/CTASection.jsx';
import ClaimTypeGrid from '../components/sections/ClaimTypeGrid.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeading from '../components/sections/SectionHeading.jsx';
import { advantages, services } from '../data/siteContent.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function ServicesPage() {
  usePageMeta(services.seo);

  return (
    <>
      <PageHero {...services.hero} />
      <HowItWorks heading={<SectionHeading eyebrow={services.howWeHelp.eyebrow} title={services.howWeHelp.title} text={services.howWeHelp.text} />} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={services.competitiveAdvantage.eyebrow} title={services.competitiveAdvantage.title} text={services.competitiveAdvantage.text} />
          <FeatureGrid items={advantages} columns={2} variant="list" />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow={services.claimTypes.eyebrow} title={services.claimTypes.title} text={services.claimTypes.text} />
          <ClaimTypeGrid detailed />
          <p className="legal-note">Category descriptions are general information only. They do not establish that a claim is valid or that any particular provider can assist.</p>
        </div>
      </section>
      <CTASection {...services.cta} to="/contact" />
    </>
  );
}

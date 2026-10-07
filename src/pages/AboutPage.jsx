import CTASection from '../components/sections/CTASection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeading from '../components/sections/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { about, whyChoose } from '../data/siteContent.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function AboutPage() {
  usePageMeta(about.seo);

  return (
    <>
      <PageHero {...about.hero} />
      <section className="section">
        <div className="container about-story">
          <Reveal className="about-story__copy">
            <p className="eyebrow">{about.whatWeDo.eyebrow}</p>
            <h2>{about.whatWeDo.title}</h2>
            <p className="about-story__lead">{about.whatWeDo.intro}</p>
            {about.whatWeDo.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
          <Reveal className="about-story__visual" delay={0.12}>
            <img src="/assets/about-conversation.jpg" alt="People having a supportive conversation about next steps" loading="lazy" />
            <div className="about-story__caption"><span>01</span><strong>Clarity for the road ahead</strong></div>
          </Reveal>
        </div>
      </section>
      <section className="section support-section">
        <div className="container">
          <SectionHeading eyebrow={about.support.eyebrow} title={about.support.title} />
          <div className="support-stats">
            {about.support.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.09}>
                <article className="support-stat">
                  <span className="support-stat__index">0{index + 1}</span>
                  <p className="support-stat__value">{stat.value}</p>
                  <h3>{stat.label}</h3>
                  <p>{stat.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="support-stats__note">{about.support.note}</p>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow={about.why.eyebrow} title={about.why.title} text={about.why.text} />
          <FeatureGrid items={whyChoose} columns={2} variant="list" />
          <p className="section-note"><span aria-hidden="true">✓</span> {about.why.note}</p>
        </div>
      </section>
      <CTASection {...about.cta} />
    </>
  );
}

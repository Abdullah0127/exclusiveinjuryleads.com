import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function LegalPage({ content }) {
  usePageMeta({
    title: `${content.title} | Exclusive Injury Leads`,
    description: content.description,
  });

  return (
    <article className="legal-page">
      <div className="legal-page__heading">
        <div className="container">
          <p className="eyebrow">Important information</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      </div>
      <div className="container legal-page__body">
        <p className="legal-updated">{content.updated}</p>
        <p className="legal-alert">{content.notice}</p>
        {content.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <p className="legal-contact">For general questions, please visit our <Link to="/contact">Contact page</Link>.</p>
      </div>
    </article>
  );
}

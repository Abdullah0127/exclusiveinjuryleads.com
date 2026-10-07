import { faqs } from '../../data/faqs.js';
import SectionHeading from './SectionHeading.jsx';

export default function Faq() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionHeading eyebrow="Common questions" title="Frequently asked questions" text="Quick answers to help you understand the enquiry process." align="left" />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

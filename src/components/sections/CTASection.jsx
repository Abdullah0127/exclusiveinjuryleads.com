import { motion } from 'motion/react';
import { CLAIM_FORM_PATH } from '../../data/siteContent.js';
import Button from '../ui/Button.jsx';

export default function CTASection({ eyebrow, title, text, button = 'Check your options', to = CLAIM_FORM_PATH }) {
  return (
    <section className="cta-section">
      <motion.div
        className="container cta-section__inner"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Button to={to} variant="light">{button}</Button>
      </motion.div>
    </section>
  );
}

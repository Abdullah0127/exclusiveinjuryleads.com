import { motion } from 'motion/react';
import { CLAIM_FORM_PATH } from '../../data/siteContent.js';
import Button from '../ui/Button.jsx';

export default function PageHero({ eyebrow, title, titleAccent, text, cta, ctaTo = CLAIM_FORM_PATH, image, imageAlt, compact = false, banner, variant = 'inner' }) {
  return (
    <section className={`page-hero page-hero--${variant}${compact ? ' page-hero--compact' : ''}`}>
      {variant === 'inner' && (
        <motion.div
          className="page-hero__background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={image || '/assets/road-hero.jpg'} alt={imageAlt || 'Road scene representing accident claim support'} />
        </motion.div>
      )}
      <div className="container page-hero__grid">
        <motion.div
          className="page-hero__copy"
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}{titleAccent && <><br /><span>{titleAccent}</span></>}</h1>
          <p className="page-hero__text">{text}</p>
          {cta && <Button to={ctaTo}>{cta}</Button>}
          {cta && <p className="hero-note">No obligation to continue. This site does not provide legal advice.</p>}
        </motion.div>
        {variant !== 'inner' && (
          <motion.div
            className="page-hero__visual"
            initial={{ opacity: 0, scale: 0.96, x: 14 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={image || '/assets/road-hero.jpg'} alt={imageAlt || 'Road scene representing accident claim support'} />
            <div className="hero-float-card"><span className="hero-float-card__dot" />{banner || 'A clear first step'}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

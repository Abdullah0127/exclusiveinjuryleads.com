import { motion } from 'motion/react';
import Icon from '../ui/Icon.jsx';

export default function FeatureGrid({ items, columns = 4, variant = 'cards' }) {
  return (
    <motion.div
      className={`feature-grid feature-grid--${columns} feature-grid--${variant}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.map((item, index) => (
        <motion.article
          className="feature-card"
          key={item.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <span className="feature-card__icon"><Icon name={item.icon} size={23} /></span>
          <h3>{item.title}</h3>
          <p>{item.long || item.short}</p>
          {index === 1 && <span className="feature-card__accent" aria-hidden="true" />}
        </motion.article>
      ))}
    </motion.div>
  );
}

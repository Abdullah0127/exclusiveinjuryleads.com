import { motion } from 'motion/react';
import { claimTypes } from '../../data/services.js';
import Icon from '../ui/Icon.jsx';

export default function ClaimTypeGrid({ detailed = false }) {
  return (
    <motion.div
      className="claim-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.065 } } }}
    >
      {claimTypes.map((claim) => (
        <motion.article
          className="claim-card"
          key={claim.id}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
          }}
          whileHover={{ y: -4, transition: { duration: 0.18 } }}
        >
          <div className="claim-card__icon"><Icon name={{ 'road-traffic': 'road', motorbike: 'bike', cycle: 'bike', occupiers: 'home' }[claim.icon] || claim.icon} size={25} /></div>
          <h3>{claim.title}</h3>
          {detailed && <p>{claim.description}</p>}
        </motion.article>
      ))}
    </motion.div>
  );
}

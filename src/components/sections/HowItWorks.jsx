import { motion } from 'motion/react';
import { steps } from '../../data/siteContent.js';
import Icon from '../ui/Icon.jsx';

export default function HowItWorks({ heading }) {
  return (
    <section className="section section--tint">
      <div className="container">
        {heading}
        <motion.div
          className="steps-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((step, index) => (
            <motion.article
              className="step-item"
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="step-item__number">0{index + 1}</span>
              <div className="step-item__content">
                <div className="step-item__icon"><Icon name={['clipboard', 'scales', 'check'][index]} size={23} /></div>
                <h3>{step.title}</h3>
                <p>{step.short}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

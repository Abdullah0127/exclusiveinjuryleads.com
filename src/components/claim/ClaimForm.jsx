import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../data/siteContent.js';
import { submitClaimEnquiryDemo } from '../../services/formSubmissions.js';
import Icon from '../ui/Icon.jsx';

const steps = ['Your details', 'Accident', 'Contact & consent'];
const accidentTypes = ['Bike', 'Car', 'Commercial vehicle', 'Motorcycle', 'Pedestrian', 'Public transport'];

function Field({ label, name, type = 'text', placeholder, children, ...props }) {
  return (
    <label className="form-field" htmlFor={name}>
      <span>{label}</span>
      {children || <input id={name} name={name} type={type} placeholder={placeholder} required {...props} />}
    </label>
  );
}

function YesNo({ label, name }) {
  return (
    <Field label={label} name={name}>
      <select id={name} name={name} required defaultValue="">
        <option value="" disabled>Select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </Field>
  );
}

export default function ClaimForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const formRef = useRef(null);
  const stepRef = useRef(null);

  function nextStep() {
    if (!formRef.current.reportValidity()) return;
    setActiveStep((step) => Math.min(step + 1, steps.length - 1));
    requestAnimationFrame(() => stepRef.current?.querySelector('.claim-step__fields:not([hidden]) h3')?.focus());
  }

  function previousStep() {
    setActiveStep((step) => Math.max(step - 1, 0));
  }

  async function submitDemo(event) {
    event.preventDefault();
    if (!formRef.current.reportValidity()) return;
    const result = await submitClaimEnquiryDemo();
    if (result.mode === 'demo') setComplete(true);
  }

  return (
    <section className="section claim-section" id="claim-form">
      <div className="container claim-layout">
        <div className="claim-intro">
          <p className="eyebrow">{home.claimForm.eyebrow}</p>
          <h2>{home.claimForm.title}</h2>
          <p>{home.claimForm.text}</p>
          <img src={home.claimForm.image} alt={home.claimForm.imageAlt} loading="lazy" />
          <div className="claim-intro__note"><Icon name="check" size={18} /> Private demo — no details are transmitted.</div>
        </div>
        <div className="claim-panel">
          {complete ? (
            <div className="form-success" role="status">
              <span className="form-success__icon"><Icon name="check" size={28} /></span>
              <h3>Demo enquiry complete</h3>
              <p>Your information has not been sent or saved. Connect an approved backend and review all privacy and consent language before accepting real enquiries.</p>
              <button type="button" className="text-button" onClick={() => { setComplete(false); setActiveStep(0); formRef.current?.reset(); }}>Start another demo enquiry</button>
            </div>
          ) : (
            <>
              <div className="step-progress" aria-label={`Step ${activeStep + 1} of ${steps.length}`}>
                {steps.map((step, index) => (
                  <div className={`step-progress__item${index === activeStep ? ' is-active' : ''}${index < activeStep ? ' is-complete' : ''}`} key={step}>
                    <span>{index < activeStep ? <Icon name="check" size={14} /> : index + 1}</span>
                    <small>{step}</small>
                  </div>
                ))}
              </div>
              <form ref={formRef} noValidate>
                <div ref={stepRef} className="claim-step">
                  <fieldset className="claim-step__fields" disabled={activeStep !== 0} hidden={activeStep !== 0}>
                    <legend className="visually-hidden">{steps[0]}</legend>
                    <h3 tabIndex="-1">{steps[0]}</h3>
                    <>
                      <div className="form-row">
                        <Field label="First name" name="first-name" placeholder="Your first name" autoComplete="given-name" />
                        <Field label="Last name" name="last-name" placeholder="Your last name" autoComplete="family-name" />
                      </div>
                      <Field label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                      <Field label="ZIP code" name="zipcode" placeholder="ZIP / postal code" autoComplete="postal-code" />
                    </>
                  </fieldset>
                  <fieldset className="claim-step__fields" disabled={activeStep !== 1} hidden={activeStep !== 1}>
                    <legend className="visually-hidden">{steps[1]}</legend>
                    <h3 tabIndex="-1">{steps[1]}</h3>
                    <>
                      <Field label="Accident date" name="accident_date" type="date" />
                      <div className="form-row">
                        <YesNo label="Were you injured?" name="injured" />
                        <YesNo label="Were you at fault?" name="accident-fault" />
                      </div>
                      <div className="form-row">
                        <YesNo label="Do you have an attorney?" name="represented" />
                        <YesNo label="Did you receive medical treatment?" name="treated" />
                      </div>
                      <Field label="Accident type" name="accident-type">
                        <select id="accident-type" name="accident-type" required defaultValue="">
                          <option value="" disabled>Select a type</option>
                          {accidentTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </Field>
                      <Field label="Accident / case description" name="case-description">
                        <textarea id="case-description" name="case-description" rows="4" placeholder="Briefly describe what happened..." required />
                      </Field>
                    </>
                  </fieldset>
                  <fieldset className="claim-step__fields" disabled={activeStep !== 2} hidden={activeStep !== 2}>
                    <legend className="visually-hidden">{steps[2]}</legend>
                    <h3 tabIndex="-1">{steps[2]}</h3>
                    <>
                      <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" />
                      <label className="consent-check">
                        <input type="checkbox" name="terms-agreement" required />
                        <span>
                          I agree to the <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>, and consent to being contacted about this enquiry by the service or an independent legal partner. Consent is not a condition of purchase. <strong>Consent wording is a draft for review before any live launch.</strong> This demonstration does not send or save my details.
                        </span>
                      </label>
                    </>
                  </fieldset>
                </div>
                <div className="form-actions">
                  {activeStep > 0 && <button className="button button--back" type="button" onClick={previousStep}>Back</button>}
                  {activeStep < steps.length - 1 ? (
                    <button className="button button--primary" type="button" onClick={nextStep}>Next <Icon name="arrow" size={17} /></button>
                  ) : (
                    <button className="button button--primary" type="button" onClick={submitDemo}>Submit demo <Icon name="arrow" size={17} /></button>
                  )}
                </div>
                <p className="form-disclaimer">Mock submission only. No backend connection is configured.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

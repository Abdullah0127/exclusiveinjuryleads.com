import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | Exclusive Injury Leads',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404 — Page not found</p>
        <h1>We could not find that page.</h1>
        <p>Try one of the main pages or return to the homepage.</p>
        <Link className="button button--primary" to="/">Back to homepage <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

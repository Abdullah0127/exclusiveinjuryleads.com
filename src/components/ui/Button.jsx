import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function Button({ to, href, children, variant = 'primary', className = '', type = 'button', ...props }) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = <>{children}<Icon name="arrow" size={17} /></>;

  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{content}</a>;
  return <button className={classes} type={type} {...props}>{content}</button>;
}

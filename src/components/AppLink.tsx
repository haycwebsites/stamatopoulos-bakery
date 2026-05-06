import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes } from 'react';

export function isAppInternalHref(href: string): boolean {
  if (!href || href === '#') return false;
  if (href.startsWith('/')) return true;
  return false;
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/** Same-origin paths use React Router; mailto/tel/http stay as normal anchors. */
export function AppLink({
  href,
  ...rest
}: AnchorProps & { href: string }) {
  if (isAppInternalHref(href)) {
    return <Link to={href} {...rest} />;
  }
  return <a href={href} {...rest} />;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

/**
 * Scroll restoration + AOS refresh on every client-side navigation.
 * Without refresh, AOS never re-scans new DOM from React Router, so
 * [data-aos] sections stay opacity:0 until a full browser reload.
 * A delayed refresh catches layout/paint after React commits (esp. images).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    let cancelled = false;

    const refresh = () => {
      if (!cancelled) {
        AOS.refresh();
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(refresh);
    });

    const tShort = window.setTimeout(refresh, 100);
    const tLong = window.setTimeout(refresh, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(tShort);
      window.clearTimeout(tLong);
    };
  }, [pathname]);
  return null;
}

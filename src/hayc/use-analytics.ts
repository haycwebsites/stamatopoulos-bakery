import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from './config-context';

/*
 * useAnalytics — fire-and-forget pageview tracking hook
 *
 * Usage: call useAnalytics() once inside a component that is:
 *   1. A child of <BrowserRouter> (so useLocation() works)
 *   2. Rendered on every page (typically the root App component)
 *
 * Example in App.tsx:
 *   function AppContent() {
 *     useAnalytics();
 *     return <Routes>...</Routes>;
 *   }
 *
 *   export default function App() {
 *     return <BrowserRouter><AppContent /></BrowserRouter>;
 *   }
 *
 * POST ${apiUrl}/api/analytics/track
 *
 * Required:
 *   siteId    — resolved from config.siteConfig.siteId (backend resolves
 *               the apiKey internally from siteId)
 *   type      — always 'pageview'
 *   page      — current pathname (from useLocation)
 *
 * Optional:
 *   referrer    — document.referrer
 *   timestamp   — Date.now()
 *   sessionId   — generated once per browser session via sessionStorage
 *   deviceType  — 'Mobile' | 'Tablet' | 'Desktop' detected from userAgent
 *
 * Does not fire if siteId or apiUrl is empty (local dev without config).
 * Errors are silently ignored — never affects UI state.
 */

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem('hayc_session_id');
    if (!id) {
      id = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('hayc_session_id', id);
    }
    return id;
  } catch {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}

function getDeviceType(): string {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(ua)) return 'Tablet';
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

export function useAnalytics() {
  const { config } = useHayc();
  const location = useLocation();
  const lastTracked = useRef<string>('');

  useEffect(() => {
    const { siteId, apiUrl } = config.siteConfig;
    if (!siteId || !apiUrl) return;
    if (lastTracked.current === location.pathname) return;
    lastTracked.current = location.pathname;

    fetch(`${apiUrl}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId,
        type: 'pageview',
        page: location.pathname,
        referrer: document.referrer || null,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        deviceType: getDeviceType(),
      }),
    }).catch(() => {});
  }, [location.pathname, config.siteConfig]);
}

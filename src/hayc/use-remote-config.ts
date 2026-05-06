import {
  siteConfig,
  navigationConfig,
  footerConfig,
  homeConfig,
  aboutPageConfig,
  contactPageConfig,
  menuPageConfig,
  digitalProductsConfig,
  type DigitalProductsConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  navigationConfig: typeof navigationConfig;
  footerConfig: typeof footerConfig;
  homeConfig: typeof homeConfig;
  aboutPageConfig: typeof aboutPageConfig;
  contactPageConfig: typeof contactPageConfig;
  menuPageConfig: typeof menuPageConfig;
  digitalProductsConfig?: DigitalProductsConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  navigationConfig,
  footerConfig,
  homeConfig,
  aboutPageConfig,
  contactPageConfig,
  menuPageConfig,
  digitalProductsConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}

import { useHayc } from '../hayc/config-context';
import { NewsletterForm } from './NewsletterForm';
import { AppLink } from './AppLink';

const FOOTER_SOCIAL_ICON: Record<string, string> = {
  facebook: 'fab fa-facebook-f',
  instagram: 'fab fa-instagram',
  twitter: 'fab fa-twitter',
  linkedin: 'fab fa-linkedin-in',
  youtube: 'fab fa-youtube',
};

function footerSocialIconClass(platform: string): string {
  return FOOTER_SOCIAL_ICON[platform] ?? 'fas fa-link';
}

export default function Footer() {
  const { t, img, config, cp } = useHayc();
  const f = config.footerConfig;

  const footerClassNames = [
    'default-footer',
    'rs-footer',
    'pt-5',
    'p-r',
    'z-1',
    f.hideFooterShapes ? 'stamatopoulos-footer' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const showBrandHeadlines = f.brandHeadlineLine1 != null && f.brandHeadlineLine2 != null;

  const hasCtaColumn =
    f.ctaColumnTitle != null &&
    f.ctaColumnBody != null &&
    f.ctaColumnButtonLabel != null &&
    f.ctaColumnHref != null &&
    f.ctaColumnHref !== '';

  return (
    <section>
      <footer className={footerClassNames}>
        {!f.hideFooterShapes ? (
          <>
            <div className="shape shape-one">
              <img src={img(f.shapeOneSrc)} alt={t(f.shapeOneAlt)} />
            </div>
            <div className="shape shape-two">
              <img src={img(f.shapeTwoSrc)} alt={t(f.shapeTwoAlt)} />
            </div>
          </>
        ) : null}

        <div className="container position-relative footer-main-wrap">
          <div className="footer-widget-area py-5">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-about-widget mb-4 pb-3">
                  <div className="widget-content">
                    {showBrandHeadlines ? (
                      <AppLink href={f.brandHref} className="stamatopoulos-footer-brand d-inline-block text-decoration-none mb-4">
                        <div {...cp('footerConfig.brandHeadlineLine1')} className="stamatopoulos-footer-brand-primary">
                          {t(f.brandHeadlineLine1!)}
                        </div>
                        <div className="stamatopoulos-footer-brand-secondary-row">
                          <span className="stamatopoulos-footer-brand-hairline" aria-hidden />
                          <div {...cp('footerConfig.brandHeadlineLine2')} className="stamatopoulos-footer-brand-secondary">
                            {t(f.brandHeadlineLine2!)}
                          </div>
                          <span className="stamatopoulos-footer-brand-hairline" aria-hidden />
                        </div>
                      </AppLink>
                    ) : (
                      <AppLink href={f.brandHref} className="mb-4 d-inline-block">
                        <img src={img(f.logoSrc)} alt={t(f.logoAlt)} />
                      </AppLink>
                    )}
                    <p {...cp('footerConfig.aboutText')} className="mb-4">
                      {t(f.aboutText)}
                    </p>
                    <div className="social-box">
                      {f.socialLinks.map((link, i) => (
                        <a
                          key={`${link.platform}-${i}`}
                          href={link.href}
                          {...cp(`footerConfig.socialLinks.${i}.href`)}
                          aria-label={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                        >
                          <i className={footerSocialIconClass(link.platform)} aria-hidden />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-nav-widget mb-4 pb-3">
                  <h4 {...cp('footerConfig.linksTitle')} className="widget-title mb-3 pb-2">
                    {t(f.linksTitle)}
                  </h4>
                  <div className="widget-content">
                    <ul>
                      {f.links.map((link, i) => (
                        <li key={`${link.href}-${i}`}>
                          <AppLink {...cp(`footerConfig.links.${i}.label`)} href={link.href}>
                            {t(link.label)}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-time-widget mb-4 pb-3">
                  <h4 {...cp('footerConfig.openingTimeTitle')} className="widget-title mb-3 pb-2">
                    {t(f.openingTimeTitle)}
                  </h4>
                  <div className="widget-content">
                    <ul>
                      {f.openingHours.map((row, i) => (
                        <li key={i}>
                          <span {...cp(`footerConfig.openingHours.${i}.days`)} className="days">
                            {t(row.days)}
                          </span>
                          <span
                            {...cp(`footerConfig.openingHours.${i}.time`)}
                            className={row.isOffDay ? 'off-day' : 'time'}
                          >
                            {t(row.time)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                {hasCtaColumn ? (
                  <div className="footer-widget footer-cta-widget mb-4 pb-3">
                    <h4 {...cp('footerConfig.ctaColumnTitle')} className="widget-title mb-3 pb-2">
                      {t(f.ctaColumnTitle!)}
                    </h4>
                    <div className="widget-content">
                      <p {...cp('footerConfig.ctaColumnBody')} className="stamatopoulos-footer-cta-body">
                        {t(f.ctaColumnBody!)}
                      </p>
                      <AppLink
                        {...cp('footerConfig.ctaColumnButtonLabel')}
                        href={f.ctaColumnHref!}
                        className="theme-btn stamatopoulos-footer-cta-btn"
                      >
                        {t(f.ctaColumnButtonLabel!)}
                      </AppLink>
                    </div>
                  </div>
                ) : (
                  <div className="footer-widget footer-newsletter-widget mb-4 pb-3">
                    <h4 {...cp('footerConfig.newsletterTitle')} className="widget-title mb-3 pb-2">
                      {t(f.newsletterTitle)}
                    </h4>
                    <div className="widget-content">
                      <p {...cp('footerConfig.newsletterSubtitle')}>{t(f.newsletterSubtitle)}</p>

                      <NewsletterForm />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar copyright-area">
            {f.hideFooterLegalLinks ? (
              <div className="row align-items-center gy-3">
                <div className="col-12">
                  <div className="copyright-text text-start stamatopoulos-footer-copyright-wrap">
                    <p className="footer-copyright-line mb-0">
                      <span {...cp('footerConfig.copyrightText')} id="copyright">
                        {t(f.copyrightText)}
                      </span>
                      <span {...cp('footerConfig.madeByPrefix')}>{t(f.madeByPrefix)}</span>
                      <a
                        {...cp('footerConfig.madeByLabel')}
                        href={f.madeByHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(f.madeByLabel)}
                      </a>
                      <span {...cp('footerConfig.madeBySuffix')}>{t(f.madeBySuffix)}</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row align-items-center gy-3">
                <div className="col-12 col-md-6">
                  <div className="copyright-text text-center text-md-start">
                    <p className="footer-copyright-line mb-0">
                      <span {...cp('footerConfig.copyrightText')} id="copyright">
                        {t(f.copyrightText)}
                      </span>{' '}
                      <span {...cp('footerConfig.madeByPrefix')}>{t(f.madeByPrefix)}</span>
                      <a
                        {...cp('footerConfig.madeByLabel')}
                        href={f.madeByHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(f.madeByLabel)}
                      </a>
                      <span {...cp('footerConfig.madeBySuffix')}>{t(f.madeBySuffix)}</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <nav
                    className="copyright-link d-flex flex-wrap gap-3 justify-content-center justify-content-md-end align-items-center"
                    aria-label="Legal"
                  >
                    <AppLink {...cp('footerConfig.privacyPolicyLabel')} href={f.privacyPolicyHref}>
                      {t(f.privacyPolicyLabel)}
                    </AppLink>
                    <AppLink {...cp('footerConfig.termsLabel')} href={f.termsHref}>
                      {t(f.termsLabel)}
                    </AppLink>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
}

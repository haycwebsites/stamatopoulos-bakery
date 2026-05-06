import { useHayc } from '../hayc/config-context';
import { NewsletterForm } from './NewsletterForm';
import { AppLink } from './AppLink';

export default function Footer() {
  const { t, img, config, cp } = useHayc();
  const f = config.footerConfig;

  return (
    <section>
      <footer className="default-footer rs-footer pt-5 p-r z-1">
        <div className="shape shape-one">
          <img src={img(f.shapeOneSrc)} alt={t(f.shapeOneAlt)} />
        </div>
        <div className="shape shape-two">
          <img src={img(f.shapeTwoSrc)} alt={t(f.shapeTwoAlt)} />
        </div>

        <div className="container">
          <div className="footer-widget-area py-5">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div
                  className="footer-widget footer-about-widget mb-4 pb-3"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="widget-content">
                    <AppLink href={f.brandHref} className="mb-4">
                      <img src={img(f.logoSrc)} alt={t(f.logoAlt)} />
                    </AppLink>
                    <p {...cp('footerConfig.aboutText')} className="mb-4">
                      {t(f.aboutText)}
                    </p>
                    <div className="social-box">
                      <a href={f.socialLinks[0]?.href ?? '#'} aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href={f.socialLinks[1]?.href ?? '#'} aria-label="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href={f.socialLinks[2]?.href ?? '#'} aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href={f.socialLinks[3]?.href ?? '#'} aria-label="YouTube">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-md-6">
                <div
                  className="footer-widget footer-nav-widget mb-4 pb-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
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
                <div
                  className="footer-widget footer-time-widget mb-4 pb-3"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
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

              <div className="col-xl-4 col-md-6">
                <div
                  className="footer-widget footer-newsletter-widget mb-4 pb-3"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h4 {...cp('footerConfig.newsletterTitle')} className="widget-title mb-3 pb-2">
                    {t(f.newsletterTitle)}
                  </h4>
                  <div className="widget-content">
                    <p {...cp('footerConfig.newsletterSubtitle')}>{t(f.newsletterSubtitle)}</p>

                    <NewsletterForm
                      placeholder={t(f.newsletterEmailPlaceholder)}
                      submitLabel={t(f.newsletterSubscribeLabel)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text" data-aos="fade-right" data-aos-duration="1200">
                  <p>
                    <span {...cp('footerConfig.copyrightText')} id="copyright">
                      {t(f.copyrightText)}
                    </span>{' '}
                    <span {...cp('footerConfig.madeByPrefix')}>{t(f.madeByPrefix)}</span>
                    <a {...cp('footerConfig.madeByLabel')} href={f.madeByHref}>
                      {t(f.madeByLabel)}
                    </a>
                    <span {...cp('footerConfig.madeBySuffix')}>{t(f.madeBySuffix)}</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-link float-md-end" data-aos="fade-left" data-aos-duration="1400">
                  <a {...cp('footerConfig.privacyPolicyLabel')} href={f.privacyPolicyHref}>
                    {t(f.privacyPolicyLabel)}
                  </a>
                  <a {...cp('footerConfig.termsLabel')} href={f.termsHref}>
                    {t(f.termsLabel)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

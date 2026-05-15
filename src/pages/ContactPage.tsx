import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';
import { StamatopoulosContactForm } from '../components/StamatopoulosContactForm';

export default function ContactPage() {
  const { t, img, config, cp } = useHayc();
  const cc = config.contactPageConfig;

  const formTitle = cc.formCardTitle ? t(cc.formCardTitle).trim() : '';

  return (
    <>
      <Navbar />
      <main className="stamatopoulos-contact-page">
        <section
          className="stamatopoulos-about-hero bg-cover position-relative text-white"
          style={{ backgroundImage: `url(${img(cc.bannerBackgroundImage)})` }}
        >
          <div className="container position-relative z-1">
            <div className="stamatopoulos-about-hero-inner text-center mx-auto">
              <h1 {...cp('contactPageConfig.bannerTitle')} className="stamatopoulos-about-hero-title">
                {t(cc.bannerTitle)}
              </h1>
              {cc.bannerSubtitle ? (
                <p {...cp('contactPageConfig.bannerSubtitle')} className="stamatopoulos-about-hero-subtitle mb-0">
                  {t(cc.bannerSubtitle)}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="stamatopoulos-contact-quick py-5">
          <div className="container">
            <div className="row g-4 g-lg-5 justify-content-center">
              {cc.infoItems.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-4">
                  <div
                    className="stamatopoulos-contact-quick-item text-center text-lg-start"
                    data-aos="fade-up"
                    data-aos-duration={item.aosDurationMs ?? 800}
                  >
                    <div className="stamatopoulos-contact-quick-icon" aria-hidden>
                      <i className={item.iconClass} />
                    </div>
                    <div className="stamatopoulos-contact-quick-body">
                      <h3 {...cp(`contactPageConfig.infoItems.${i}.title`)} className="stamatopoulos-contact-quick-title">
                        {t(item.title)}
                      </h3>
                      {item.lines.map((line, j) => {
                        const content = (
                          <span {...cp(`contactPageConfig.infoItems.${i}.lines.${j}.value`)}>{t(line.value)}</span>
                        );
                        return (
                          <p key={j} className="stamatopoulos-contact-quick-detail mb-0">
                            {line.href ? (
                              <AppLink href={line.href} className="stamatopoulos-contact-quick-link">
                                {content}
                              </AppLink>
                            ) : (
                              content
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stamatopoulos-contact-main py-5">
          <div className="container py-lg-2">
            <div className="row align-items-start g-5 gx-xl-5">
              <div className="col-lg-6">
                <h2 {...cp('contactPageConfig.leftTitle')} className="stamatopoulos-contact-main-title mb-4">
                  {t(cc.leftTitle)}
                </h2>
                <p {...cp('contactPageConfig.leftSubtitle')} className="stamatopoulos-contact-main-lead mb-5">
                  {t(cc.leftSubtitle)}
                </p>

                <div className="stamatopoulos-contact-hours mb-5">
                  {cc.hoursBlocks.map((block, bi) => (
                    <div key={bi} className={bi > 0 ? 'mt-5' : ''}>
                      <h3 {...cp(`contactPageConfig.hoursBlocks.${bi}.title`)} className="stamatopoulos-contact-hours-heading">
                        {t(block.title)}
                      </h3>
                      <ul className="stamatopoulos-contact-hours-list list-unstyled mb-0">
                        {block.rows.map((row, ri) => (
                          <li key={ri} className="stamatopoulos-contact-hours-row">
                            <span {...cp(`contactPageConfig.hoursBlocks.${bi}.rows.${ri}.label`)} className="stamatopoulos-contact-hours-label">
                              {t(row.label)}
                            </span>{' '}
                            <span {...cp(`contactPageConfig.hoursBlocks.${bi}.rows.${ri}.value`)} className="stamatopoulos-contact-hours-value">
                              {t(row.value)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {cc.secondaryBlurbTitle && cc.secondaryBlurbBody ? (
                  <div className="stamatopoulos-contact-blurb">
                    <h3 {...cp('contactPageConfig.secondaryBlurbTitle')} className="stamatopoulos-contact-blurb-title">
                      {t(cc.secondaryBlurbTitle)}
                    </h3>
                    <p {...cp('contactPageConfig.secondaryBlurbBody')} className="stamatopoulos-contact-blurb-text mb-0">
                      {t(cc.secondaryBlurbBody)}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="col-lg-6">
                <div className="stamatopoulos-contact-form-card">
                  {formTitle ? (
                    <h3 {...cp('contactPageConfig.formCardTitle')} className="stamatopoulos-contact-form-card-title">
                      {formTitle}
                    </h3>
                  ) : null}
                  <StamatopoulosContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stamatopoulos-contact-map">
          <iframe
            title={t({ el: 'Χάρτης τοποθεσίας', en: 'Location map' })}
            src={cc.mapEmbedSrc}
            className="stamatopoulos-contact-map-frame"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

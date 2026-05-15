import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';

export default function AboutPage() {
  const { t, img, config, cp } = useHayc();
  const ac = config.aboutPageConfig;

  return (
    <>
      <Navbar />
      <main className="stamatopoulos-about-page">
        <section
          className="stamatopoulos-about-hero bg-cover position-relative text-white"
          style={{ backgroundImage: `url(${img(ac.bannerBackgroundImage)})` }}
        >
          <div className="container position-relative z-1">
            <div className="stamatopoulos-about-hero-inner text-center mx-auto">
              <h1 {...cp('aboutPageConfig.bannerTitle')} className="stamatopoulos-about-hero-title">
                {t(ac.bannerTitle)}
              </h1>
              {ac.bannerSubtitle ? (
                <p {...cp('aboutPageConfig.bannerSubtitle')} className="stamatopoulos-about-hero-subtitle mb-0">
                  {t(ac.bannerSubtitle)}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="stamatopoulos-about-history py-5">
          <div className="container py-lg-4">
            <div className="row align-items-start justify-content-center g-5 gx-xl-5">
              <div className="col-lg-6">
                <div className="stamatopoulos-about-history-copy">
                  <p
                    {...cp('aboutPageConfig.aboutKicker')}
                    className="stamatopoulos-about-kicker mb-2"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    {t(ac.aboutKicker)}
                  </p>
                  <h2
                    {...cp('aboutPageConfig.aboutTitle')}
                    className="stamatopoulos-about-section-title mb-4"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    {t(ac.aboutTitle)}
                  </h2>
                  <p
                    {...cp('aboutPageConfig.aboutLead')}
                    className="stamatopoulos-about-body mb-4 mb-lg-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(ac.aboutLead)}
                  </p>
                  {(ac.historyGalleryImages ?? []).length > 0 ? (
                  <div className="row g-2 g-sm-3 stamatopoulos-about-history-grid" data-aos="fade-up" data-aos-duration="1100">
                    {(ac.historyGalleryImages ?? []).map((it, i) => (
                      <div key={`${it.src}-${i}`} className="col-4">
                        <div className="stamatopoulos-about-history-thumb">
                          <img
                            src={img(it.src)}
                            alt={t(it.alt)}
                            {...cp(`aboutPageConfig.historyGalleryImages.${i}.src`)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stamatopoulos-about-history-visual" data-aos="fade-down" data-aos-duration="1000">
                  <img
                    src={img(ac.sideImage)}
                    className="stamatopoulos-about-history-main-img w-100"
                    alt={t(ac.sideImageAlt)}
                    {...cp('aboutPageConfig.sideImageAlt')}
                  />
                </div>
                <div className="stamatopoulos-about-history-aside mt-4" data-aos="fade-up" data-aos-duration="1100">
                  <p {...cp('aboutPageConfig.sideText')} className="stamatopoulos-about-body mb-4">
                    {t(ac.sideText)}
                  </p>
                  <AppLink
                    {...cp('aboutPageConfig.sideCtaLabel')}
                    href={ac.sideCtaHref}
                    className="theme-btn style-one stamatopoulos-btn-salmon"
                  >
                    {t(ac.sideCtaLabel)}
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stamatopoulos-about-stats py-5">
          <div className="container py-lg-3">
            <div className="row text-center g-4 g-lg-5 justify-content-center">
              {ac.funFacts.map((ff, i) => (
                <div
                  key={`${ff.iconSrc ?? ff.iconClass}-${i}`}
                  className="col-6 col-lg-3"
                  data-aos="fade-up"
                  data-aos-duration={ff.aosDurationMs ?? 800}
                >
                  <div className="stamatopoulos-about-stat-item">
                    <div className="stamatopoulos-about-stat-icon mb-3">
                      {ff.iconSrc ? (
                        <img
                          src={img(ff.iconSrc)}
                          alt=""
                          className="stamatopoulos-about-stat-icon-img"
                          {...cp(`aboutPageConfig.funFacts.${i}.iconSrc`)}
                          aria-hidden
                        />
                      ) : (
                        <i className={ff.iconClass ?? 'fas fa-circle'} aria-hidden />
                      )}
                    </div>
                    <div className="stamatopoulos-about-stat-value">
                      <span {...cp(`aboutPageConfig.funFacts.${i}.value`)}>{t(ff.value)}</span>
                      {t(ff.suffix).trim() ? (
                        <span {...cp(`aboutPageConfig.funFacts.${i}.suffix`)}>{t(ff.suffix)}</span>
                      ) : null}
                    </div>
                    <p className="stamatopoulos-about-stat-label mb-0" {...cp(`aboutPageConfig.funFacts.${i}.label`)}>
                      {t(ff.label)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stamatopoulos-about-philosophy py-5">
          <div className="container py-lg-4">
            <div className="row align-items-center justify-content-between g-5 gx-xl-5">
              <div className="col-lg-6">
                <div className="pe-lg-4 stamatopoulos-about-philosophy-copy">
                  <p
                    {...cp('aboutPageConfig.featureKicker')}
                    className="stamatopoulos-about-kicker mb-2"
                    data-aos="fade-down"
                    data-aos-duration="900"
                  >
                    {t(ac.featureKicker)}
                  </p>
                  <h2
                    {...cp('aboutPageConfig.featureTitle')}
                    className="stamatopoulos-about-section-title mb-4"
                    data-aos="fade-up"
                    data-aos-duration="950"
                  >
                    {t(ac.featureTitle)}
                  </h2>
                  <p
                    {...cp('aboutPageConfig.featureLead')}
                    className="stamatopoulos-about-body mb-4 mb-lg-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(ac.featureLead)}
                  </p>
                  <div className="row g-4 stamatopoulos-about-pillar-rows">
                    <div className="col-sm-6">
                      {ac.featureItemsLeft.map((it, i) => (
                        <div
                          key={`${it.iconSrc ?? it.iconClass ?? 'l'}-${i}`}
                          className="stamatopoulos-about-pillar"
                          data-aos="fade-up"
                          data-aos-duration={it.aosDurationMs ?? 1200}
                        >
                          <div className="stamatopoulos-about-pillar-icon">
                            {it.iconSrc ? (
                              <img
                                src={img(it.iconSrc)}
                                alt=""
                                className="stamatopoulos-about-pillar-icon-img"
                                {...cp(`aboutPageConfig.featureItemsLeft.${i}.iconSrc`)}
                                aria-hidden
                              />
                            ) : (
                              <i className={it.iconClass ?? 'fas fa-circle'} aria-hidden />
                            )}
                          </div>
                          <h5 {...cp(`aboutPageConfig.featureItemsLeft.${i}.title`)} className="stamatopoulos-about-pillar-title">
                            {t(it.title)}
                          </h5>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm-6">
                      {ac.featureItemsRight.map((it, i) => (
                        <div
                          key={`${it.iconSrc ?? it.iconClass ?? 'r'}-${i}`}
                          className="stamatopoulos-about-pillar"
                          data-aos="fade-up"
                          data-aos-duration={it.aosDurationMs ?? 1400}
                        >
                          <div className="stamatopoulos-about-pillar-icon">
                            {it.iconSrc ? (
                              <img
                                src={img(it.iconSrc)}
                                alt=""
                                className="stamatopoulos-about-pillar-icon-img"
                                {...cp(`aboutPageConfig.featureItemsRight.${i}.iconSrc`)}
                                aria-hidden
                              />
                            ) : (
                              <i className={it.iconClass ?? 'fas fa-circle'} aria-hidden />
                            )}
                          </div>
                          <h5 {...cp(`aboutPageConfig.featureItemsRight.${i}.title`)} className="stamatopoulos-about-pillar-title">
                            {t(it.title)}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-2" data-aos="fade-up" data-aos-duration="1100">
                    <AppLink
                      {...cp('aboutPageConfig.featureCtaLabel')}
                      href={ac.featureCtaHref}
                      className="theme-btn style-one stamatopoulos-btn-salmon"
                    >
                      {t(ac.featureCtaLabel)}
                    </AppLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000">
                <div className="stamatopoulos-about-philosophy-visual ms-lg-auto">
                  <img
                    src={img(ac.featureImage)}
                    className="stamatopoulos-about-philosophy-img w-100"
                    alt={t(ac.featureImageAlt)}
                    {...cp('aboutPageConfig.featureImageAlt')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stamatopoulos-about-gallery py-5">
          <div className="container-fluid px-2 px-md-3 px-xl-4">
            <div className="stamatopoulos-about-gallery-grid">
              {ac.instagramMarqueeImages.map((it, i) => (
                <div key={`${it.src}-${i}`} className="stamatopoulos-about-gallery-cell">
                  <img
                    src={img(it.src)}
                    alt={t(it.alt)}
                    {...cp(`aboutPageConfig.instagramMarqueeImages.${i}.src`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

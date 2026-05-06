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
      <main>
        <section
          className="bistly-page-hero page-banner bg-cover position-relative z-1 text-white"
          style={{ backgroundImage: `url(${img(ac.bannerBackgroundImage)})` }}
        >
          <div className="container position-relative">
            <div className="bistly-page-hero-content text-center mx-auto" style={{ maxWidth: '720px' }}>
              <h1 {...cp('aboutPageConfig.bannerTitle')} className="bistly-page-hero-title">
                {t(ac.bannerTitle)}
              </h1>
              <nav className="bistly-page-breadcrumb-nav" aria-label="Breadcrumb">
                <AppLink
                  {...cp('aboutPageConfig.breadcrumbHomeLabel')}
                  href={ac.breadcrumbHomeHref}
                  className="bistly-page-breadcrumb-link"
                >
                  {t(ac.breadcrumbHomeLabel)}
                </AppLink>
                <span
                  className="bistly-page-breadcrumb-current"
                  aria-current="page"
                  {...cp('aboutPageConfig.breadcrumbCurrentLabel')}
                >
                  {t(ac.breadcrumbCurrentLabel)}
                </span>
              </nav>
            </div>
          </div>
        </section>

        <section className="bistly-about-sec py-5">
          <div className="container">
            <div className="row align-items-center justify-content-center g-4 g-lg-5">
              <div className="col-lg-6 col-md-12">
                <div className="bistly-content-box">
                  <div className="section-title mb-4">
                    <span
                      {...cp('aboutPageConfig.aboutKicker')}
                      className="sub-title"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      {t(ac.aboutKicker)}
                    </span>
                    <h2 {...cp('aboutPageConfig.aboutTitle')} className="text-anm">
                      {t(ac.aboutTitle)}
                    </h2>
                  </div>
                  <p {...cp('aboutPageConfig.aboutLead')} className="mb-5" data-aos="fade-up" data-aos-duration="1000">
                    {t(ac.aboutLead)}
                  </p>

                  <section className="bistly-instagram-sec overflow-hidden">
                    <div className="instagram-marquee">
                      <div className="instagram-track">
                        {ac.aboutMarqueeImages.map((it, i) => (
                          <img
                            key={`${it.src}-${i}`}
                            src={img(it.src)}
                            alt={t(it.alt)}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="bistly-about-intro-visual" data-aos="fade-down" data-aos-duration="1000">
                  <img
                    src={img(ac.sideImage)}
                    className="img-fluid w-100 rounded-4"
                    alt={t(ac.sideImageAlt)}
                  />
                </div>
                <div className="text-box" data-aos="fade-up" data-aos-duration="1000">
                  <p {...cp('aboutPageConfig.sideText')} className="mb-3 pb-2">
                    {t(ac.sideText)}
                  </p>
                  <AppLink {...cp('aboutPageConfig.sideCtaLabel')} href={ac.sideCtaHref} className="theme-btn style-one">
                    {t(ac.sideCtaLabel)}
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bistly-fun-fact bistly-about-fun-fact py-5">
          <div className="container">
            <div className="row text-center g-4 g-lg-5 justify-content-center">
              {ac.funFacts.map((ff, i) => (
                <div
                  key={`${ff.iconClass}-${i}`}
                  className="col-6 col-lg-3"
                  data-aos="fade-up"
                  data-aos-duration={ff.aosDurationMs ?? 800}
                >
                  <div className="bistly-fun-fact-item">
                    <div className="bistly-fun-fact-icon mb-3">
                      <i className={ff.iconClass} />
                    </div>
                    <div className="bistly-fun-fact-number">
                      <span {...cp(`aboutPageConfig.funFacts.${i}.value`)}>{t(ff.value)}</span>
                      <span {...cp(`aboutPageConfig.funFacts.${i}.suffix`)}>{t(ff.suffix)}</span>
                    </div>
                    <p className="bistly-fun-fact-label mb-0" {...cp(`aboutPageConfig.funFacts.${i}.label`)}>
                      {t(ff.label)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bistly-features-sec bistly-about-features-sec py-5">
          <div className="container py-lg-4">
            <div className="row align-items-center g-4 g-xl-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="bistly-about-features-inner pe-lg-4">
                  <p
                    {...cp('aboutPageConfig.featureKicker')}
                    className="bistly-about-features-kicker mb-3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {t(ac.featureKicker)}
                  </p>
                  <p
                    {...cp('aboutPageConfig.featureLead')}
                    className="bistly-about-features-lead mb-4 mb-lg-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(ac.featureLead)}
                  </p>
                  <div className="row g-3 g-md-4">
                    <div className="col-sm-6">
                      {ac.featureItemsLeft.map((it, i) => (
                        <div
                          key={`l-${i}`}
                          className="bistly-iconic-box bistly-about-iconic-box"
                          data-aos="fade-up"
                          data-aos-duration={it.aosDurationMs ?? 1200}
                        >
                          <div className="icon">
                            <i className={it.iconClass} />
                          </div>
                          <div className="content">
                            <h5 {...cp(`aboutPageConfig.featureItemsLeft.${i}.title`)}>{t(it.title)}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm-6">
                      {ac.featureItemsRight.map((it, i) => (
                        <div
                          key={`r-${i}`}
                          className="bistly-iconic-box bistly-about-iconic-box"
                          data-aos="fade-up"
                          data-aos-duration={it.aosDurationMs ?? 1400}
                        >
                          <div className="icon">
                            <i className={it.iconClass} />
                          </div>
                          <div className="content">
                            <h5 {...cp(`aboutPageConfig.featureItemsRight.${i}.title`)}>{t(it.title)}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bistly-button mt-4 pt-2" data-aos="fade-up" data-aos-duration="1600">
                    <AppLink
                      {...cp('aboutPageConfig.featureCtaLabel')}
                      href={ac.featureCtaHref}
                      className="theme-btn style-one bistly-about-feature-cta"
                    >
                      {t(ac.featureCtaLabel)}
                    </AppLink>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 text-center"
                data-aos="fade-down"
                data-aos-duration="1800"
              >
                <div className="bistly-about-feature-image">
                  <img src={img(ac.featureImage)} className="img-fluid rounded-4" alt={t(ac.featureImageAlt)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bistly-instagram-sec py-5 overflow-hidden">
          <div className="instagram-marquee">
            <div className="instagram-track">
              {ac.instagramMarqueeImages.map((it, i) => (
                <img key={`${it.src}-${i}`} src={img(it.src)} alt={t(it.alt)} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


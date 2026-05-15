import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';

export default function MenuPage() {
  const { t, img, config, cp } = useHayc();
  const mc = config.menuPageConfig;
  const sections = mc.sections ?? [];

  return (
    <>
      <Navbar />
      <main className="stamatopoulos-menu-page">
        <section
          className="stamatopoulos-about-hero bg-cover position-relative text-white"
          style={{ backgroundImage: `url(${img(mc.bannerBackgroundImage)})` }}
        >
          <div className="container position-relative z-1">
            <div className="stamatopoulos-about-hero-inner stamatopoulos-menu-hero-inner text-center mx-auto">
              <h1 {...cp('menuPageConfig.bannerTitle')} className="stamatopoulos-about-hero-title">
                {t(mc.bannerTitle)}
              </h1>
              {mc.bannerSubtitle ? (
                <p {...cp('menuPageConfig.bannerSubtitle')} className="stamatopoulos-about-hero-subtitle mb-0">
                  {t(mc.bannerSubtitle)}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {sections.map((section, si) => (
          <section key={si} className="stamatopoulos-menu-section">
            <div className="container py-5">
              <header className="stamatopoulos-menu-section-head text-center mx-auto">
                <p
                  {...cp(`menuPageConfig.sections.${si}.kicker`)}
                  className="stamatopoulos-menu-section-kicker"
                  data-aos="fade-down"
                  data-aos-duration="700"
                >
                  {t(section.kicker)}
                </p>
                <h2
                  {...cp(`menuPageConfig.sections.${si}.title`)}
                  className="stamatopoulos-menu-section-title"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {t(section.title)}
                </h2>
              </header>

              <div className="row g-4 g-lg-5 mt-4 mt-lg-5 justify-content-center">
                {section.items.map((item, ii) => (
                  <div key={ii} className="col-lg-6">
                    <article
                      className="stamatopoulos-menu-card"
                      data-aos="fade-up"
                      data-aos-duration={item.aosDurationMs ?? 800}
                    >
                      <div className="stamatopoulos-menu-card-thumb">
                        <img
                          src={img(item.imageSrc)}
                          alt={t(item.imageAlt)}
                          className="stamatopoulos-menu-card-img"
                          {...cp(`menuPageConfig.sections.${si}.items.${ii}.imageSrc`)}
                        />
                      </div>
                      <div className="stamatopoulos-menu-card-body">
                        <h3
                          {...cp(`menuPageConfig.sections.${si}.items.${ii}.title`)}
                          className="stamatopoulos-menu-card-title"
                        >
                          {t(item.title)}
                        </h3>
                        <p
                          {...cp(`menuPageConfig.sections.${si}.items.${ii}.description`)}
                          className="stamatopoulos-menu-card-desc mb-0"
                        >
                          {t(item.description)}
                        </p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {mc.bottomCtaLabel && mc.bottomCtaHref ? (
          <section className="stamatopoulos-menu-bottom-cta-wrap">
            <div className="container py-5 text-center">
              <AppLink
                {...cp('menuPageConfig.bottomCtaLabel')}
                href={mc.bottomCtaHref}
                className="theme-btn style-one stamatopoulos-btn-salmon stamatopoulos-menu-bottom-cta"
              >
                {t(mc.bottomCtaLabel)}
              </AppLink>
            </div>
          </section>
        ) : null}

        {sections.length === 0 && mc.lead ? (
          <section className="py-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <p {...cp('menuPageConfig.lead')} className="mb-4">
                    {t(mc.lead)}
                  </p>
                  {mc.ctaLabel && mc.ctaHref ? (
                    <AppLink {...cp('menuPageConfig.ctaLabel')} href={mc.ctaHref} className="theme-btn style-one">
                      {t(mc.ctaLabel)}
                    </AppLink>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

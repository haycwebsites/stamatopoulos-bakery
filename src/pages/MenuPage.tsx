import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';

export default function MenuPage() {
  const { t, img, config, cp } = useHayc();
  const mc = config.menuPageConfig;

  return (
    <>
      <Navbar />
      <main>
        <section
          className="bistly-page-hero page-banner bg-cover position-relative z-1 text-white"
          style={{ backgroundImage: `url(${img(mc.bannerBackgroundImage)})` }}
        >
          <div className="container position-relative">
            <div className="bistly-page-hero-content text-center mx-auto" style={{ maxWidth: '720px' }}>
              <h1 {...cp('menuPageConfig.bannerTitle')} className="bistly-page-hero-title">
                {t(mc.bannerTitle)}
              </h1>
              <nav className="bistly-page-breadcrumb-nav" aria-label="Breadcrumb">
                <AppLink
                  {...cp('menuPageConfig.breadcrumbHomeLabel')}
                  href={mc.breadcrumbHomeHref}
                  className="bistly-page-breadcrumb-link"
                >
                  {t(mc.breadcrumbHomeLabel)}
                </AppLink>
                <span
                  className="bistly-page-breadcrumb-current"
                  aria-current="page"
                  {...cp('menuPageConfig.breadcrumbCurrentLabel')}
                >
                  {t(mc.breadcrumbCurrentLabel)}
                </span>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p {...cp('menuPageConfig.lead')} className="mb-4">
                  {t(mc.lead)}
                </p>
                <AppLink {...cp('menuPageConfig.ctaLabel')} href={mc.ctaHref} className="theme-btn style-one">
                  {t(mc.ctaLabel)}
                </AppLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

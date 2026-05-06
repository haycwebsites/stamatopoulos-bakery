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
          className="page-banner bg-cover position-relative z-1 text-white min-vh-50 align-content-center"
          style={{ backgroundImage: `url(${img(mc.bannerBackgroundImage)})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-content text-center py-5">
                  <h1 {...cp('menuPageConfig.bannerTitle')} className="mb-3">
                    {t(mc.bannerTitle)}
                  </h1>

                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                      <li className="breadcrumb-item">
                        <AppLink
                          {...cp('menuPageConfig.breadcrumbHomeLabel')}
                          href={mc.breadcrumbHomeHref}
                          className="text-white text-decoration-none"
                        >
                          {t(mc.breadcrumbHomeLabel)}
                        </AppLink>
                      </li>
                      <li className="breadcrumb-item active text-white" aria-current="page">
                        <span {...cp('menuPageConfig.breadcrumbCurrentLabel')}>
                          {t(mc.breadcrumbCurrentLabel)}
                        </span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
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

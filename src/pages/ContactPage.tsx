import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';
import { ContactForm } from '../components/ContactForm';

export default function ContactPage() {
  const { t, config, cp } = useHayc();
  const cc = config.contactPageConfig;

  return (
    <>
      <Navbar />
      <main>
        <section
          className="page-banner bg-cover position-relative z-1 text-white min-vh-50 align-content-center"
          style={{ backgroundImage: `url(${cc.bannerBackgroundImage})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-content text-center py-5">
                  <h1 {...cp('contactPageConfig.bannerTitle')} className="mb-3">
                    {t(cc.bannerTitle)}
                  </h1>

                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                      <li className="breadcrumb-item">
                        <AppLink
                          {...cp('contactPageConfig.breadcrumbHomeLabel')}
                          href={cc.breadcrumbHomeHref}
                          className="text-white text-decoration-none"
                        >
                          {t(cc.breadcrumbHomeLabel)}
                        </AppLink>
                      </li>
                      <li className="breadcrumb-item active text-white" aria-current="page">
                        <span {...cp('contactPageConfig.breadcrumbCurrentLabel')}>
                          {t(cc.breadcrumbCurrentLabel)}
                        </span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info-sec py-5 mt-xl-4">
          <div className="container">
            <div className="row py-5">
              {cc.infoItems.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="contact-info-box text-center mb-4"
                    data-aos="fade-up"
                    data-aos-duration={item.aosDurationMs ?? 800}
                  >
                    <div className="icon">
                      <i className={item.iconClass} />
                    </div>
                    <div className="content">
                      <h3 {...cp(`contactPageConfig.infoItems.${i}.title`)}>
                        {t(item.title)}
                      </h3>
                      {item.lines.map((line, j) => {
                        const content = (
                          <span {...cp(`contactPageConfig.infoItems.${i}.lines.${j}.value`)}>
                            {t(line.value)}
                          </span>
                        );
                        return (
                          <p key={j}>
                            {line.href ? <AppLink href={line.href}>{content}</AppLink> : content}
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

        <section className="py-5">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-6">
                <h2 {...cp('contactPageConfig.leftTitle')} className="mb-4">
                  {t(cc.leftTitle)}
                </h2>
                <p {...cp('contactPageConfig.leftSubtitle')} className="mb-4">
                  {t(cc.leftSubtitle)}
                </p>

                <div className="row">
                  {cc.hoursBlocks.map((block, bi) => (
                    <div key={bi} className="col-md-6">
                      <h6 {...cp(`contactPageConfig.hoursBlocks.${bi}.title`)}>
                        {t(block.title)}
                      </h6>
                      <ul className="list-unstyled">
                        {block.rows.map((row, ri) => (
                          <li key={ri}>
                            <span {...cp(`contactPageConfig.hoursBlocks.${bi}.rows.${ri}.label`)}>
                              {t(row.label)}
                            </span>{' '}
                            <span {...cp(`contactPageConfig.hoursBlocks.${bi}.rows.${ri}.value`)}>
                              {t(row.value)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card p-4 shadow-sm">
                  <h3 {...cp('contactPageConfig.formCardTitle')} className="mb-3">
                    {t(cc.formCardTitle)}
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map-sec">
          <div className="map-box mt-5 pt-3" data-aos="fade-up" data-aos-duration="1200">
            <iframe
              title="Map"
              src={cc.mapEmbedSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


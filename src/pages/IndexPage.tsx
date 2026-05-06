// HAYC Pipeline: This file is overwritten during
// project creation with the client's home page
// HTML converted to JSX.
// Source: index.html body content from HTML template.

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppLink } from '../components/AppLink';
import { useHayc } from '../hayc/config-context';

export default function IndexPage() {
  const { t, img, config, cp } = useHayc();
  const hc = config.homeConfig;

  return (
    <>
      <Navbar />
      <main>
        <section className="ds-hero-sec p-r z-1">
          <div className="hero-shape">
            <img src={img(hc.heroShapeImage)} alt={t(hc.heroShapeAlt)} />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 {...cp('homeConfig.heroTitle')} className="text-anm">
                    {t(hc.heroTitle)}
                  </h1>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="text-box" data-aos="fade-up" data-aos-duration="1000">
                      <p {...cp('homeConfig.heroDescription')}>{t(hc.heroDescription)}</p>
                      <AppLink
                        {...cp('homeConfig.heroCtaLabel')}
                        href={hc.heroCtaHref}
                        className="theme-btn style-one"
                      >
                        {t(hc.heroCtaLabel)}
                      </AppLink>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bistly-author-box" data-aos="fade-up" data-aos-duration="1200">
                      <div className="author-thumbs">
                        {hc.heroAuthorThumbs.map(thumb => (
                          <img key={thumb.src} src={img(thumb.src)} alt={t(thumb.alt)} />
                        ))}
                      </div>
                      <h2>
                        <span {...cp('homeConfig.heroStatsValue')}>{t(hc.heroStatsValue)}</span>{' '}
                        <span {...cp('homeConfig.heroStatsLabel')}>{t(hc.heroStatsLabel)}</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap order-1">
            <div className="hero-image">
              <img src={img(hc.heroMainImage)} alt={t(hc.heroMainImageAlt)} />
            </div>
          </div>
        </section>

        <section className="ds-categories-sec py-5">
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-xl-7">
                <div className="section-title text-center mt-3">
                  <span
                    {...cp('homeConfig.categoriesKicker')}
                    className="sub-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {t(hc.categoriesKicker)}
                  </span>
                  <h2 {...cp('homeConfig.categoriesTitle')} className="text-anm">
                    {t(hc.categoriesTitle)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="categories-wrapper py-xl-5">
              {hc.categories.map((cat, i) => (
                <div
                  key={`${cat.iconClass}-${i}`}
                  className={`bistly-category-item ${cat.bgClass} mb-4`}
                  data-aos="fade-up"
                  data-aos-duration={cat.aosDurationMs ?? 1000}
                >
                  <div className="icon">
                    <i className={cat.iconClass} />
                  </div>
                  <div className="content">
                    <h4 {...cp(`homeConfig.categories.${i}.title`)}>{t(cat.title)}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-about-sec">
          <div className="container-fluid">
            <div className="about-wrapper d-flex">
              <div
                className="about-left-wrap bg_cover"
                style={{ backgroundImage: `url(${img(hc.aboutLeftBackgroundImage)})` }}
              />

              <div className="about-right-wrap">
                <div className="bistly-about-box" data-aos="fade-up" data-aos-duration="1000">
                  <div className="shape">
                    <img src={img(hc.aboutShapeImage)} alt={t(hc.aboutShapeAlt)} />
                  </div>
                  <div className="content">
                    <div className="section-title mb-4">
                      <span {...cp('homeConfig.aboutKicker')} className="sub-title">
                        {t(hc.aboutKicker)}
                      </span>
                      <h2 {...cp('homeConfig.aboutTitle')}>{t(hc.aboutTitle)}</h2>
                    </div>

                    {hc.aboutParagraphs.map((p, i) => (
                      <p key={i} {...cp(`homeConfig.aboutParagraphs.${i}`)} className="mb-4">
                        {t(p)}
                      </p>
                    ))}

                    <div className="bistly-button">
                      <AppLink
                        {...cp('homeConfig.aboutCtaLabel')}
                        href={hc.aboutCtaHref}
                        className="theme-btn style-one"
                      >
                        {t(hc.aboutCtaLabel)}
                      </AppLink>
                    </div>
                  </div>
                </div>

                <div className="bistly-experience-box" data-aos="fade-up" data-aos-duration="1200">
                  <div className="content">
                    <div className="section-title">
                      <span {...cp('homeConfig.experienceKicker')} className="sub-title">
                        {t(hc.experienceKicker)}
                      </span>
                      <h2 {...cp('homeConfig.experienceTitle')}>{t(hc.experienceTitle)}</h2>
                    </div>
                    <p {...cp('homeConfig.experienceText')}>{t(hc.experienceText)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-promo-sec pt-5 mt-4">
          <div className="container mt-2">
            <div className="row py-xl-5 justify-content-center">
              {hc.promoCards.map((card, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="bistly-promo-item text-center mb-4 bg_cover"
                    style={{ backgroundImage: `url(${img(card.backgroundImage)})` }}
                    data-aos="fade-up"
                    data-aos-duration={card.aosDurationMs ?? 1000}
                  >
                    <div className="content">
                      <span {...cp(`homeConfig.promoCards.${i}.kicker`)}>{t(card.kicker)}</span>
                      <h2 {...cp(`homeConfig.promoCards.${i}.title`)}>{t(card.title)}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-choose-sec">
          <div className="container">
            <div className="row justify-content-center py-5">
              <div className="col-xl-7">
                <div className="section-title text-center">
                  <span
                    {...cp('homeConfig.chooseKicker')}
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(hc.chooseKicker)}
                  </span>
                  <h2 {...cp('homeConfig.chooseTitle')} className="text-anm">
                    {t(hc.chooseTitle)}
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center pb-4">
              <div className="col-lg-4">
                <div className="item-choose-list choose-list-left" data-aos="fade-right" data-aos-duration="1000">
                  {hc.chooseLeftItems.map((item, i) => (
                    <div key={i} className="bistly-choose-item mb-5">
                      <div className="content">
                        <h4 {...cp(`homeConfig.chooseLeftItems.${i}.title`)} className={item.titleBgClass}>
                          {t(item.title)}
                        </h4>
                        <p {...cp(`homeConfig.chooseLeftItems.${i}.description`)}>
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="bistly-image mb-5 d-lg-block d-none" data-aos="fade-up" data-aos-duration="1000">
                  <img src={img(hc.chooseCenterImage)} alt={t(hc.chooseCenterImageAlt)} />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="item-choose-list choose-list-right">
                  {hc.chooseRightItems.map((item, i) => (
                    <div
                      key={i}
                      className="bistly-choose-item mb-5"
                      data-aos="fade-left"
                      data-aos-duration={item.aosDurationMs ?? 1000}
                    >
                      <div className="content">
                        <h4 {...cp(`homeConfig.chooseRightItems.${i}.title`)} className={item.titleBgClass}>
                          {t(item.title)}
                        </h4>
                        <p {...cp(`homeConfig.chooseRightItems.${i}.description`)}>
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-offer-sec py-5">
          <div className="container">
            <div className="row py-5 align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-9">
                <div className="bistly-content-box text-center text-xl-start">
                  <div className="section-title mb-3">
                    <span
                      {...cp('homeConfig.offerKicker')}
                      className="sub-title"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      {t(hc.offerKicker)}
                    </span>
                    <h2 {...cp('homeConfig.offerTitle')} className="text-anm">
                      {t(hc.offerTitle)}
                    </h2>
                  </div>
                  <p {...cp('homeConfig.offerText')} className="mb-4" data-aos="fade-up" data-aos-duration="1200">
                    {t(hc.offerText)}
                  </p>
                  <div className="bistly-button pt-2" data-aos="fade-up" data-aos-duration="1400">
                    <AppLink {...cp('homeConfig.offerCtaLabel')} href={hc.offerCtaHref} className="theme-btn style-one">
                      {t(hc.offerCtaLabel)}
                    </AppLink>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 col-lg-9">
                <div className="bistly-image-box mt-5 mt-xl-5" data-aos="fade-up" data-aos-duration="1000">
                  <div className="bistly-image text-end">
                    <img src={img(hc.offerImage)} alt={t(hc.offerImageAlt)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-cta pt-5 p-r z-1 overflow-hidden">
          <div className="container">
            <div
              className="ds-cta-wrapper bg_cover mt-5"
              style={{ backgroundImage: `url(${img(hc.ctaBackgroundImage)})` }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-7">
                  <div className="ds-cta-box text-center">
                    <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                      <h2 {...cp('homeConfig.ctaTitle')}>{t(hc.ctaTitle)}</h2>
                    </div>
                    <p {...cp('homeConfig.ctaSubtitle')} data-aos="fade-up" data-aos-duration="1200">
                      {t(hc.ctaSubtitle)}
                    </p>
                    <form autoComplete="off" data-aos="fade-up" data-aos-duration="1400">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder={t(hc.ctaEmailPlaceholder)}
                          name="email"
                          required
                          {...cp('homeConfig.ctaEmailPlaceholder')}
                        />
                        <button {...cp('homeConfig.ctaButtonLabel')} className="theme-btn style-one" type="submit">
                          {t(hc.ctaButtonLabel)}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-blog py-5">
          <div className="container">
            <div className="row justify-content-center py-5">
              <div className="col-lg-7">
                <div className="section-title text-center mt-xl-4">
                  <span
                    {...cp('homeConfig.blogKicker')}
                    className="sub-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {t(hc.blogKicker)}
                  </span>
                  <h2 {...cp('homeConfig.blogTitle')} className="text-anm">
                    {t(hc.blogTitle)}
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center pb-4">
              {hc.blogPosts.map((post, i) => (
                <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                  <div className="bistly-blog-post mb-5">
                    <div className="post-thumbnail">
                      <img src={img(post.image)} alt={t(post.title)} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span {...cp(`homeConfig.blogPosts.${i}.authorLabel`)}>
                          <i className="far fa-user" /> {t(post.authorLabel)}
                        </span>
                        <span {...cp(`homeConfig.blogPosts.${i}.dateLabel`)}>
                          <i className="far fa-calendar-alt" /> {t(post.dateLabel)}
                        </span>
                      </div>
                      <h4>
                        <a {...cp(`homeConfig.blogPosts.${i}.title`)} href={post.href}>
                          {t(post.title)}
                        </a>
                      </h4>
                      <p {...cp(`homeConfig.blogPosts.${i}.excerpt`)}>{t(post.excerpt)}</p>
                    </div>
                  </div>
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

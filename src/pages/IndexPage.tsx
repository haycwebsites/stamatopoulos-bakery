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
        <section className="ds-hero-sec stamatopoulos-hero p-r z-1">
          <div className="container-fluid stamatopoulos-hero-inner">
            <div className="stamatopoulos-hero-headline text-center">
              <h1 className="stamatopoulos-hero-title text-anm">
                <span {...cp('homeConfig.heroTitle')}>{t(hc.heroTitle)}</span>
                <br />
                <span {...cp('homeConfig.heroHeadlineLine2')}>{t(hc.heroHeadlineLine2)}</span>
              </h1>
            </div>

            <div className="stamatopoulos-hero-image-block text-center" data-aos="fade-up" data-aos-duration="900">
              <div className="stamatopoulos-hero-image-frame">
                <img src={img(hc.heroMainImage)} alt={t(hc.heroMainImageAlt)} />
              </div>
            </div>

            <div className="row stamatopoulos-hero-bottom align-items-stretch gx-4 gx-xl-5 gy-5">
              <div className="col-lg-7">
                <div className="stamatopoulos-hero-copy" data-aos="fade-up" data-aos-duration="1000">
                  <p {...cp('homeConfig.heroDescription')}>{t(hc.heroDescription)}</p>
                  <div className="stamatopoulos-hero-actions">
                    <AppLink
                      {...cp('homeConfig.heroCtaLabel')}
                      href={hc.heroCtaHref}
                      className="theme-btn style-one stamatopoulos-hero-btn-primary"
                    >
                      {t(hc.heroCtaLabel)}
                    </AppLink>
                    <AppLink
                      {...cp('homeConfig.heroSecondaryCtaLabel')}
                      href={hc.heroSecondaryCtaHref}
                      className="theme-btn style-one stamatopoulos-hero-btn-secondary"
                    >
                      {t(hc.heroSecondaryCtaLabel)}
                    </AppLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <aside className="stamatopoulos-hero-highlight" data-aos="fade-up" data-aos-duration="1100">
                  <div className="stamatopoulos-hero-pills">
                    {hc.heroHighlightPills.map((pill, i) => (
                      <span key={i} {...cp(`homeConfig.heroHighlightPills.${i}`)} className="stamatopoulos-hero-pill">
                        {t(pill)}
                      </span>
                    ))}
                  </div>
                  <h2 className="stamatopoulos-hero-highlight-title">
                    <span {...cp('homeConfig.heroHighlightHeadlineLine1')}>{t(hc.heroHighlightHeadlineLine1)}</span>
                    <br />
                    <span {...cp('homeConfig.heroHighlightHeadlineLine2')}>{t(hc.heroHighlightHeadlineLine2)}</span>
                  </h2>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-categories-sec stamatopoulos-categories-sec py-5">
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-xl-10">
                <div className="section-title text-center mt-3 stamatopoulos-section-title">
                  {t(hc.categoriesKicker) ? (
                    <span
                      {...cp('homeConfig.categoriesKicker')}
                      className="sub-title stamatopoulos-sub-title stamatopoulos-categories-kicker"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      {t(hc.categoriesKicker)}
                    </span>
                  ) : null}
                  <h2 {...cp('homeConfig.categoriesTitle')} className="text-anm stamatopoulos-categories-heading">
                    {t(hc.categoriesTitle)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="categories-wrapper py-xl-5">
              {hc.categories.map((cat, i) => (
                <div
                  key={`${cat.iconSrc ?? cat.iconClass ?? 'cat'}-${i}`}
                  className={`bistly-category-item stamatopoulos-category-item${
                    cat.backgroundColor === '#79A3882B'
                      ? ' stamatopoulos-category-item--sage'
                      : cat.backgroundColor === '#FEF4EB'
                        ? ' stamatopoulos-category-item--cream'
                        : cat.backgroundColor === '#EEE9E5'
                          ? ' stamatopoulos-category-item--stone'
                          : cat.backgroundColor === '#E1D9B240'
                            ? ' stamatopoulos-category-item--daily'
                            : ''
                  }${cat.bgClass ? ` ${cat.bgClass}` : ''} mb-4`}
                  style={{
                    ...(cat.backgroundColor ? { backgroundColor: cat.backgroundColor } : {}),
                    ...(cat.textColor ? { color: cat.textColor } : {}),
                  }}
                  data-aos="fade-up"
                  data-aos-duration={cat.aosDurationMs ?? 1000}
                >
                  <div
                    className={`icon${cat.iconVariant === 'contained' ? ' icon-contained' : ''}`}
                    style={cat.iconBackgroundColor ? { backgroundColor: cat.iconBackgroundColor } : undefined}
                  >
                    {cat.iconSrc ? (
                      <img
                        src={img(cat.iconSrc)}
                        alt={cat.iconAlt ? t(cat.iconAlt) : t(cat.title)}
                        className="stamatopoulos-category-icon"
                      />
                    ) : (
                      <i className={cat.iconClass} />
                    )}
                  </div>
                  <div className="content">
                    <h4
                      {...cp(`homeConfig.categories.${i}.title`)}
                      style={cat.textColor ? { color: cat.textColor } : undefined}
                    >
                      {t(cat.title)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-about-sec">
          <div className="container-fluid p-0">
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
                      <span {...cp('homeConfig.aboutKicker')} className="sub-title stamatopoulos-sub-title">
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
                        className="theme-btn style-one stamatopoulos-btn-salmon"
                      >
                        {t(hc.aboutCtaLabel)}
                      </AppLink>
                    </div>
                  </div>
                </div>

                <div className="bistly-experience-box" data-aos="fade-up" data-aos-duration="1200">
                  <div className="content">
                    <div className="section-title mb-4">
                      <span {...cp('homeConfig.experienceKicker')} className="sub-title stamatopoulos-sub-title">
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
            <div className="row py-xl-5 justify-content-center g-4 stamatopoulos-promo-row">
              {hc.promoCards.map((card, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="bistly-promo-item stamatopoulos-promo-item text-center"
                    style={
                      {
                        backgroundColor: card.backgroundColor,
                        '--promo-bg': card.backgroundColor,
                      } as Record<string, string>
                    }
                    data-aos="fade-up"
                    data-aos-duration={card.aosDurationMs ?? 1000}
                  >
                    <div
                      className="stamatopoulos-promo-item__image bg_cover"
                      style={{ backgroundImage: `url(${img(card.backgroundImage)})` }}
                      aria-hidden
                    />
                    <div className="content">
                      <span
                        {...cp(`homeConfig.promoCards.${i}.kicker`)}
                        className="stamatopoulos-promo-kicker"
                      >
                        {t(card.kicker)}
                      </span>
                      <h2
                        {...cp(`homeConfig.promoCards.${i}.title`)}
                        className="stamatopoulos-promo-title"
                      >
                        {t(card.title)}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-choose-sec stamatopoulos-choose-sec">
          <div className="container">
            <div className="row justify-content-center py-5">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center stamatopoulos-choose-heading">
                  <span
                    {...cp('homeConfig.chooseKicker')}
                    className="stamatopoulos-choose-kicker"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(hc.chooseKicker)}
                  </span>
                  <h2
                    {...cp('homeConfig.chooseTitle')}
                    className="stamatopoulos-choose-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {t(hc.chooseTitle)}
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center pb-4 g-4">
              <div className="col-lg-4">
                <div className="item-choose-list choose-list-left" data-aos="fade-right" data-aos-duration="1000">
                  {hc.chooseLeftItems.map((item, i) => (
                    <div key={i} className="bistly-choose-item stamatopoulos-choose-item mb-4">
                      <h4 {...cp(`homeConfig.chooseLeftItems.${i}.title`)} className={item.titleBgClass}>
                        {t(item.title)}
                      </h4>
                      <p
                        {...cp(`homeConfig.chooseLeftItems.${i}.description`)}
                        className="stamatopoulos-choose-body"
                      >
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="stamatopoulos-choose-center mb-4 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src={img(hc.chooseCenterImage)}
                    alt={t(hc.chooseCenterImageAlt)}
                    className="stamatopoulos-choose-center__image"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="item-choose-list choose-list-right">
                  {hc.chooseRightItems.map((item, i) => (
                    <div
                      key={i}
                      className="bistly-choose-item stamatopoulos-choose-item mb-4"
                      data-aos="fade-left"
                      data-aos-duration={item.aosDurationMs ?? 1000}
                    >
                      <h4 {...cp(`homeConfig.chooseRightItems.${i}.title`)} className={item.titleBgClass}>
                        {t(item.title)}
                      </h4>
                      <p
                        {...cp(`homeConfig.chooseRightItems.${i}.description`)}
                        className="stamatopoulos-choose-body"
                      >
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-offer-sec stamatopoulos-offer-sec">
          <div className="container">
            <div className="row align-items-center py-5 g-4 g-xl-5">
              <div className="col-lg-5">
                <div className="stamatopoulos-offer-copy" data-aos="fade-right" data-aos-duration="1000">
                  <span {...cp('homeConfig.offerKicker')} className="stamatopoulos-offer-kicker">
                    {t(hc.offerKicker)}
                  </span>
                  <h2 {...cp('homeConfig.offerTitle')} className="stamatopoulos-offer-title">
                    {t(hc.offerTitle)}
                  </h2>
                  <p {...cp('homeConfig.offerText')} className="stamatopoulos-offer-text">
                    {t(hc.offerText)}
                  </p>
                  <div className="stamatopoulos-offer-actions">
                    <AppLink
                      {...cp('homeConfig.offerCtaLabel')}
                      href={hc.offerCtaHref}
                      className="theme-btn style-one stamatopoulos-offer-btn"
                    >
                      {t(hc.offerCtaLabel)}
                    </AppLink>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="stamatopoulos-offer-visual" data-aos="fade-left" data-aos-duration="1000">
                  <div className="stamatopoulos-offer-circle">
                    <img
                      src={img(hc.offerImage)}
                      alt={t(hc.offerImageAlt)}
                      className="stamatopoulos-offer-circle__image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-testimonials-sec stamatopoulos-testimonials-sec py-5">
          <div className="container">
            <div className="row justify-content-center g-4">
              {hc.testimonials.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <article
                    className="stamatopoulos-testimonial-card"
                    data-aos="fade-up"
                    data-aos-duration={1000 + i * 150}
                  >
                    <div className="stamatopoulos-testimonial-stars" aria-hidden="true">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <p {...cp(`homeConfig.testimonials.${i}.text`)}>{t(item.text)}</p>
                    <footer {...cp(`homeConfig.testimonials.${i}.author`)}>{t(item.author)}</footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-cta stamatopoulos-newsletter-sec pt-5 p-r z-1 overflow-hidden">
          <div className="container">
            <div
              className="ds-cta-wrapper stamatopoulos-newsletter-wrap bg_cover mt-5"
              style={{ backgroundImage: `url(${img(hc.ctaBackgroundImage)})` }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="ds-cta-box text-center">
                    <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                      <h2 className="stamatopoulos-newsletter-title" {...cp('homeConfig.ctaTitle')}>
                        {t(hc.ctaTitle)}
                      </h2>
                    </div>
                    {t(hc.ctaSubtitle) ? (
                      <p
                        className="stamatopoulos-newsletter-subtitle"
                        {...cp('homeConfig.ctaSubtitle')}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        {t(hc.ctaSubtitle)}
                      </p>
                    ) : null}
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
                        <button
                          {...cp('homeConfig.ctaButtonLabel')}
                          className="theme-btn style-one stamatopoulos-newsletter-btn"
                          type="submit"
                        >
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

        <section className="ds-blog stamatopoulos-blog-sec py-5">
          <div className="container">
            <div className="row justify-content-center py-5">
              <div className="col-lg-9">
                <div className="section-title text-center mt-xl-4 stamatopoulos-section-title">
                  <span
                    {...cp('homeConfig.blogKicker')}
                    className="sub-title stamatopoulos-sub-title"
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
                      <div className="post-meta stamatopoulos-blog-meta">
                        <span {...cp(`homeConfig.blogPosts.${i}.dateLabel`)}>{t(post.dateLabel)}</span>
                        <span className="stamatopoulos-blog-meta-sep">—</span>
                        <span {...cp(`homeConfig.blogPosts.${i}.authorLabel`)}>{t(post.authorLabel)}</span>
                      </div>
                      <h4>
                        <a {...cp(`homeConfig.blogPosts.${i}.title`)} href={post.href}>
                          {t(post.title)}
                        </a>
                      </h4>
                      <p {...cp(`homeConfig.blogPosts.${i}.excerpt`)}>{t(post.excerpt)}</p>
                      <a
                        {...cp('homeConfig.blogReadMoreLabel')}
                        href={post.href}
                        className="stamatopoulos-blog-read-more"
                      >
                        {t(hc.blogReadMoreLabel)} <i className="fas fa-arrow-right" />
                      </a>
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

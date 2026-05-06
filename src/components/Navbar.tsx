import { useTemplateInit } from '../lib/useTemplateInit';
import { useHayc } from '../hayc/config-context';
import { AppLink } from './AppLink';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  useTemplateInit();
  const { t, img, config, cp } = useHayc();
  const { pathname } = useLocation();
  const innerHeroPage =
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/menu' ||
    pathname.startsWith('/menu-');

  const nav = config.navigationConfig;
  return (
    <header
      className={`header-area header-three transparent-header${innerHeroPage ? ' header-inner-hero' : ''}`}
    >
      <div className="container-fluid">
        <div className="header-navigation">
          <div className="nav-inner-menu">
            <div className="primary-menu">
              <div className="site-branding">
                <AppLink href={nav.brandHref} className="brand-logo">
                  <img src={img(nav.logoSrc)} alt={t(nav.logoAlt)} />
                </AppLink>
              </div>

              <div className="theme-nav-menu">
                <div className="theme-menu-top d-flex justify-content-between d-block d-lg-none mb-4">
                  <div className="site-branding">
                    <AppLink href={nav.brandHref} className="brand-logo">
                      <img src={img(nav.logoSrc)} alt={t(nav.logoAlt)} />
                    </AppLink>
                  </div>
                  <div className="navbar-close">
                    <i className="far fa-times" />
                  </div>
                </div>

                <nav className="main-menu">
                  <ul>
                    {nav.items.map((item, i) => (
                      <li
                        key={`${item.href}-${i}`}
                        className={item.children?.length ? 'menu-item has-children' : 'menu-item'}
                      >
                        <AppLink {...cp(`navigationConfig.items.${i}.label`)} href={item.href}>
                          {t(item.label)}
                        </AppLink>
                        {item.children?.length ? (
                          <ul className="sub-menu">
                            {item.children.map((child, j) => (
                              <li key={`${child.href}-${j}`}>
                                <AppLink {...cp(`navigationConfig.items.${i}.children.${j}.label`)} href={child.href}>
                                  {t(child.label)}
                                </AppLink>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="theme-nav-button mt-3 d-block d-md-none">
                  <AppLink {...cp('navigationConfig.ctaLabel')} href={nav.ctaHref} className="theme-btn style-one">
                    {t(nav.ctaLabel)}
                  </AppLink>
                </div>

                <div className="theme-menu-bottom mt-5 d-block d-lg-none">
                  <h5 {...cp('navigationConfig.followUsLabel')}>{t(nav.followUsLabel)}</h5>
                  <ul className="social-link">
                    <li>
                      <a href={nav.socialLinks[0]?.href ?? '#'}>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href={nav.socialLinks[1]?.href ?? '#'}>
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href={nav.socialLinks[2]?.href ?? '#'}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href={nav.socialLinks[3]?.href ?? '#'}>
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav-right-item">
                <div className="nav-button d-none d-md-block">
                  <AppLink {...cp('navigationConfig.ctaLabel')} href={nav.ctaHref} className="theme-btn style-one">
                    {t(nav.ctaLabel)}
                  </AppLink>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
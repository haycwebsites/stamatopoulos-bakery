// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

export interface NavigationItemConfig {
  label: LocaleString;
  href: string;
  children?: NavigationItemConfig[];
}

export interface SocialLinkConfig {
  platform: string;
  href: string;
}

export interface NavigationConfig {
  logoSrc: string;
  logoAlt: LocaleString;
  brandHref: string;
  items: NavigationItemConfig[];
  ctaLabel: LocaleString;
  ctaHref: string;
  followUsLabel: LocaleString;
  socialLinks: SocialLinkConfig[];
}

export interface FooterLinkConfig {
  label: LocaleString;
  href: string;
}

export interface FooterHoursRowConfig {
  days: LocaleString;
  time: LocaleString;
  isOffDay?: boolean;
}

export interface FooterConfig {
  shapeOneSrc: string;
  shapeOneAlt: LocaleString;
  shapeTwoSrc: string;
  shapeTwoAlt: LocaleString;
  logoSrc: string;
  logoAlt: LocaleString;
  brandHref: string;
  aboutText: LocaleString;
  socialLinks: SocialLinkConfig[];

  /** Optional serif/sans stack headline instead of logo image only */
  brandHeadlineLine1?: LocaleString;
  brandHeadlineLine2?: LocaleString;

  linksTitle: LocaleString;
  links: FooterLinkConfig[];

  openingTimeTitle: LocaleString;
  openingHours: FooterHoursRowConfig[];

  newsletterTitle: LocaleString;
  newsletterSubtitle: LocaleString;
  newsletterEmailPlaceholder: LocaleString;
  newsletterSubscribeLabel: LocaleString;

  /** Fourth column: contact CTA (when set, replaces newsletter signup block) */
  ctaColumnTitle?: LocaleString;
  ctaColumnBody?: LocaleString;
  ctaColumnButtonLabel?: LocaleString;
  ctaColumnHref?: string;

  /** Omit decorative corner shapes for flat layouts */
  hideFooterShapes?: boolean;
  /** Single-row copyright (hide Privacy / Terms) */
  hideFooterLegalLinks?: boolean;

  copyrightText: LocaleString;
  madeByPrefix: LocaleString;
  madeByLabel: LocaleString;
  madeByHref: string;
  madeBySuffix: LocaleString;

  privacyPolicyLabel: LocaleString;
  privacyPolicyHref: string;
  termsLabel: LocaleString;
  termsHref: string;
}

export interface HomeCategoryConfig {
  iconClass?: string;
  iconSrc?: string;
  iconAlt?: LocaleString;
  title: LocaleString;
  bgClass?: string;
  backgroundColor?: string;
  textColor?: string;
  iconBackgroundColor?: string;
  iconVariant?: 'default' | 'contained';
  aosDurationMs?: number;
}

export interface HomeChooseItemConfig {
  title: LocaleString;
  description: LocaleString;
  titleBgClass: string;
  aosDurationMs?: number;
}

export interface HomePromoCardConfig {
  backgroundImage: string;
  backgroundColor: string;
  kicker: LocaleString;
  title: LocaleString;
  aosDurationMs?: number;
}

export interface HomeTestimonialConfig {
  text: LocaleString;
  author: LocaleString;
}

export interface HomeBlogPostConfig {
  image: string;
  authorLabel: LocaleString;
  dateLabel: LocaleString;
  title: LocaleString;
  excerpt: LocaleString;
  href: string;
}

export interface HomeConfig {
  heroShapeImage: string;
  heroShapeAlt: LocaleString;
  heroTitle: LocaleString;
  heroHeadlineLine2: LocaleString;
  heroDescription: LocaleString;
  heroCtaLabel: LocaleString;
  heroCtaHref: string;
  heroSecondaryCtaLabel: LocaleString;
  heroSecondaryCtaHref: string;
  heroHighlightPills: LocaleString[];
  heroHighlightHeadlineLine1: LocaleString;
  heroHighlightHeadlineLine2: LocaleString;
  heroAuthorThumbs: { src: string; alt: LocaleString }[];
  heroStatsValue: LocaleString;
  heroStatsLabel: LocaleString;
  heroMainImage: string;
  heroMainImageAlt: LocaleString;

  categoriesKicker: LocaleString;
  categoriesTitle: LocaleString;
  categories: HomeCategoryConfig[];

  aboutLeftBackgroundImage: string;
  aboutShapeImage: string;
  aboutShapeAlt: LocaleString;
  aboutKicker: LocaleString;
  aboutTitle: LocaleString;
  aboutParagraphs: LocaleString[];
  aboutCtaLabel: LocaleString;
  aboutCtaHref: string;

  experienceKicker: LocaleString;
  experienceTitle: LocaleString;
  experienceText: LocaleString;

  promoCards: HomePromoCardConfig[];

  chooseKicker: LocaleString;
  chooseTitle: LocaleString;
  chooseLeftItems: HomeChooseItemConfig[];
  chooseCenterImage: string;
  chooseCenterImageAlt: LocaleString;
  chooseRightItems: HomeChooseItemConfig[];

  offerKicker: LocaleString;
  offerTitle: LocaleString;
  offerText: LocaleString;
  offerCtaLabel: LocaleString;
  offerCtaHref: string;
  offerImage: string;
  offerImageAlt: LocaleString;

  testimonials: HomeTestimonialConfig[];

  galleryImages: { src: string; alt: LocaleString }[];

  ctaBackgroundImage: string;
  ctaTitle: LocaleString;
  ctaSubtitle: LocaleString;
  ctaEmailPlaceholder: LocaleString;
  ctaButtonLabel: LocaleString;

  blogKicker: LocaleString;
  blogTitle: LocaleString;
  blogReadMoreLabel: LocaleString;
  blogPosts: HomeBlogPostConfig[];
}

export interface AboutFunFactItemConfig {
  /** Font Awesome class when not using a custom SVG */
  iconClass?: string;
  /** SVG or image URL under /public (preferred for timeline icons) */
  iconSrc?: string;
  value: LocaleString;
  suffix: LocaleString;
  label: LocaleString;
  aosDurationMs?: number;
}

export interface AboutFeatureItemConfig {
  /** Font Awesome when not using a custom SVG */
  iconClass?: string;
  /** SVG under /public (Figma line icons for philosophy pillars) */
  iconSrc?: string;
  /** Solid fill behind the icon (e.g. events compass on dark brown) */
  iconBackgroundColor?: string;
  title: LocaleString;
  aosDurationMs?: number;
}

export interface AboutPageConfig {
  bannerBackgroundImage: string;
  bannerTitle: LocaleString;
  bannerSubtitle?: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;

  aboutKicker: LocaleString;
  aboutTitle: LocaleString;
  aboutLead: LocaleString;
  /** Three square thumbnails below the history column body copy */
  historyGalleryImages?: { src: string; alt: LocaleString }[];
  sideImage: string;
  sideImageAlt: LocaleString;
  sideText: LocaleString;
  sideCtaLabel: LocaleString;
  sideCtaHref: string;

  funFacts: AboutFunFactItemConfig[];

  featureKicker: LocaleString;
  featureTitle: LocaleString;
  featureLead: LocaleString;
  featureItemsLeft: AboutFeatureItemConfig[];
  featureItemsRight: AboutFeatureItemConfig[];
  featureCtaLabel: LocaleString;
  featureCtaHref: string;
  featureImage: string;
  featureImageAlt: LocaleString;

  instagramMarqueeImages: { src: string; alt: LocaleString }[];
}

export interface ContactInfoItemConfig {
  /** Font Awesome fallback when iconSrc is not set */
  iconClass?: string;
  /** Custom SVG under /public */
  iconSrc?: string;
  title: LocaleString;
  lines: { label?: LocaleString; value: LocaleString; href?: string }[];
  aosDurationMs?: number;
}

export interface ContactHoursRowConfig {
  label: LocaleString;
  value: LocaleString;
}

export interface ContactHoursBlockConfig {
  title: LocaleString;
  rows: ContactHoursRowConfig[];
}

export interface ContactPageConfig {
  bannerBackgroundImage: string;
  bannerTitle: LocaleString;
  /** Hero line below title (Stamatopoulos layout — no breadcrumb in hero) */
  bannerSubtitle?: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;

  infoItems: ContactInfoItemConfig[];

  leftTitle: LocaleString;
  leftSubtitle: LocaleString;
  hoursBlocks: ContactHoursBlockConfig[];
  /** Optional block below hours (e.g. orders & events copy) */
  secondaryBlurbTitle?: LocaleString;
  secondaryBlurbBody?: LocaleString;

  /** Heading inside the form card; omit or leave blank to hide */
  formCardTitle?: LocaleString;
  mapEmbedSrc: string;
}

export interface MenuPageCategoryItemConfig {
  imageSrc: string;
  imageAlt: LocaleString;
  title: LocaleString;
  description: LocaleString;
  aosDurationMs?: number;
}

export interface MenuPageCategorySectionConfig {
  kicker: LocaleString;
  title: LocaleString;
  items: MenuPageCategoryItemConfig[];
}

export interface MenuPageConfig {
  bannerBackgroundImage: string;
  bannerTitle: LocaleString;
  /** Hero line below title (Stamatopoulos menu — no breadcrumb in hero) */
  bannerSubtitle?: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;
  /** Legacy placeholder block — omitted when using `sections` layout */
  lead?: LocaleString;
  ctaLabel?: LocaleString;
  ctaHref?: string;
  sections?: MenuPageCategorySectionConfig[];
  bottomCtaLabel?: LocaleString;
  bottomCtaHref?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: '', en: '' },
  description: { el: '', en: '' },
  language: '',
  keywords: { el: '', en: '' },
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: 'https://hayc.gr',
};

export const navigationConfig: NavigationConfig = {
  logoSrc: '/assets/images/stamatopoulos/logo-yiannis-stella.svg',
  logoAlt: { el: 'Yiannis & Stella — Stamatopoulos Pastry', en: 'Yiannis & Stella — Stamatopoulos Pastry' },
  brandHref: '/',
  items: [
    {
      label: { el: 'Αρχική', en: 'Home' },
      href: '/',
    },
    {
      label: { el: 'Σχετικά με Εμάς', en: 'About Us' },
      href: '/about',
    },
    {
      label: { el: 'Δημιουργίες', en: 'Creations' },
      href: '/menu',
    },
    {
      label: { el: 'Επικοινωνία', en: 'Contact' },
      href: '/contact',
    },
  ],
  ctaLabel: { el: 'ΠΑΡΑΓΓΕΛΙΑ', en: 'ORDER' },
  ctaHref: '/contact',
  followUsLabel: { el: 'Follow Us', en: 'Follow Us' },
  socialLinks: [
    { platform: 'facebook', href: '#' },
    { platform: 'twitter', href: '#' },
    { platform: 'linkedin', href: '#' },
    { platform: 'youtube', href: '#' },
  ],
};

export const footerConfig: FooterConfig = {
  shapeOneSrc: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/shape1-2.png',
  shapeOneAlt: { el: 'shape', en: 'shape' },
  shapeTwoSrc: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/shape2.png',
  shapeTwoAlt: { el: 'shape', en: 'shape' },

  logoSrc: '/assets/images/stamatopoulos/logo-yiannis-stella.svg',
  logoAlt: { el: 'Yiannis & Stella — Stamatopoulos Pastry', en: 'Yiannis & Stella — Stamatopoulos Pastry' },
  brandHref: '/',

  brandHeadlineLine1: { el: 'Yiannis & Stella', en: 'Yiannis & Stella' },
  brandHeadlineLine2: { el: 'STAMATOPOULOS — PASTRY', en: 'STAMATOPOULOS — PASTRY' },

  aboutText: {
    el: 'Γλυκές δημιουργίες με ρίζες από το 1950, φτιαγμένες με φροντίδα, τεχνική και χαρακτήρα.',
    en: 'Sweet creations with roots since 1950, made with care, skill, and character.',
  },
  socialLinks: [
    { platform: 'facebook', href: '#' },
    { platform: 'instagram', href: '#' },
  ],

  linksTitle: { el: 'Χρήσιμοι Σύνδεσμοι', en: 'Useful Links' },
  links: [
    { label: { el: 'Αρχική', en: 'Home' }, href: '/' },
    { label: { el: 'Σχετικά με Εμάς', en: 'About Us' }, href: '/about' },
    { label: { el: 'Δημιουργίες', en: 'Creations' }, href: '/menu' },
    { label: { el: 'Επικοινωνία', en: 'Contact' }, href: '/contact' },
  ],

  openingTimeTitle: { el: 'Ωράριο Λειτουργίας', en: 'Opening Hours' },
  openingHours: [
    {
      days: { el: 'Δευτ - Παρ:', en: 'Mon - Fri:' },
      time: { el: '09:00 π.μ. - 10:00 μ.μ.', en: '9:00 a.m. - 10:00 p.m.' },
    },
    {
      days: { el: 'Σάββατο:', en: 'Saturday:' },
      time: { el: '09:00 π.μ. - 10:00 μ.μ.', en: '9:00 a.m. - 10:00 p.m.' },
    },
    {
      days: { el: 'Κυριακή:', en: 'Sunday:' },
      time: { el: '11:00 π.μ. - 08:00 μ.μ.', en: '11:00 a.m. - 8:00 p.m.' },
    },
  ],

  newsletterTitle: { el: 'NEWSLETTER', en: 'Newsletter' },
  newsletterSubtitle: {
    el: 'Εγγραφείτε για νέα, προσφορές και ενημερώσεις από το εργαστήριό μας.',
    en: 'Subscribe for news, offers, and updates from our workshop.',
  },
  newsletterEmailPlaceholder: { el: 'Το email σας', en: 'Your email' },
  newsletterSubscribeLabel: { el: 'ΕΓΓΡΑΦΗ', en: 'Subscribe' },

  ctaColumnTitle: {
    el: 'Για custom τούρτες & events',
    en: 'Custom cakes & events',
  },
  ctaColumnBody: {
    el: 'Επικοινώνησε μαζί μας για να σχεδιάσουμε μαζί τη δημιουργία που θέλεις.',
    en: 'Get in touch so we can design together the creation you have in mind.',
  },
  ctaColumnButtonLabel: { el: 'ΕΠΙΚΟΙΝΩΝΙΑ', en: 'CONTACT' },
  ctaColumnHref: '/contact',

  hideFooterShapes: true,
  hideFooterLegalLinks: true,

  copyrightText: {
    el: 'Copyright © 2026 Με επιφύλαξη παντός δικαιώματος.',
    en: 'Copyright © 2026 All Right Reserved.',
  },
  madeByPrefix: { el: ' Φτιαγμένο από ', en: ' Made by ' },
  madeByLabel: { el: 'hayc', en: 'hayc' },
  madeByHref: 'https://hayc.gr/',
  madeBySuffix: { el: ' με 💙', en: ' with 💙' },

  privacyPolicyLabel: { el: 'Privacy Policy', en: 'Privacy Policy' },
  privacyPolicyHref: '#',
  termsLabel: { el: 'Terms & Condition', en: 'Terms & Condition' },
  termsHref: '#',
};

export const homeConfig: HomeConfig = {
  heroShapeImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/hero-shape.png',
  heroShapeAlt: { el: 'hero shape', en: 'hero shape' },
  heroTitle: { el: 'Δεν είναι απλώς γλυκό,', en: "It's not just dessert," },
  heroHeadlineLine2: { el: 'Είναι η στιγμή σου.', en: "It's your moment." },
  heroDescription: {
    el: 'Κάθε δημιουργία έχει τη δική της θέση σε μια ξεχωριστή στιγμή. Από ένα αγαπημένο γλυκό της βιτρίνας μέχρι μια τούρτα φτιαγμένη ακριβώς όπως την έχεις φανταστεί, στον Σταματόπουλο η παράδοση τεσσάρων γενεών συναντά τη φροντίδα, τη φαντασία και την τεχνική. Το αποτέλεσμα είναι γεύσεις που μένουν, όχι μόνο για την ποιότητά τους, αλλά για όσα συνοδεύουν.',
    en: 'Every creation has its place in a special moment. From a favorite dessert from the window to a cake made exactly as you imagined it, at Stamatopoulos, four generations of tradition meet care, imagination and technique. The result is flavors that last, not only for their quality, but for what they accompany.',
  },
  heroCtaLabel: { el: 'ΔΗΜΙΟΥΡΓΗΣΕ ΤΗΝ ΤΟΥΡΤΑ ΣΟΥ', en: 'CREATE YOUR CAKE' },
  heroCtaHref: '/contact',
  heroSecondaryCtaLabel: { el: 'ΔΕΣ ΤΙΣ SIGNATURE ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ', en: 'SEE OUR SIGNATURE CREATIONS' },
  heroSecondaryCtaHref: '/menu',
  heroHighlightPills: [
    { el: 'Παράδοση', en: 'Tradition' },
    { el: 'Αγάπη', en: 'Love' },
    { el: 'Ποιότητα', en: 'Quality' },
    { el: 'Δημιουργία', en: 'Creation' },
  ],
  heroHighlightHeadlineLine1: { el: 'Από το 1950 στην τέχνη', en: 'Since 1950 in the art' },
  heroHighlightHeadlineLine2: { el: 'του γλυκού.', en: 'of sweets.' },
  heroAuthorThumbs: [
    { src: '/assets/images/home-dessert/hero/author-thumb1.png', alt: { el: 'Author', en: 'Author' } },
    { src: '/assets/images/home-dessert/hero/author-thumb2.png', alt: { el: 'Author', en: 'Author' } },
    { src: '/assets/images/home-dessert/hero/author-thumb3.png', alt: { el: 'Author', en: 'Author' } },
    { src: '/assets/images/home-dessert/hero/author-thumb4.png', alt: { el: 'Author', en: 'Author' } },
    { src: '/assets/images/home-dessert/hero/author-thumb5.png', alt: { el: 'Author', en: 'Author' } },
  ],
  heroStatsValue: { el: '217K+', en: '217K+' },
  heroStatsLabel: { el: 'Satisfied Clients', en: 'Satisfied Clients' },
  heroMainImage: '/assets/images/stamatopoulos/hero-pecan-slice.png',
  heroMainImageAlt: { el: 'Φέτα τούρτας με πεκάν', en: 'Slice of pecan tart' },

  categoriesKicker: { el: 'Οι δημιουργίες μας', en: 'Our creations' },
  categoriesTitle: {
    el: 'Γλυκά που φτιάχνονται για τις στιγμές που θέλεις να θυμάσαι',
    en: 'Sweets made for the moments you want to remember',
  },
  categories: [
    {
      iconSrc: '/assets/images/stamatopoulos/icon-daily-delights.svg',
      iconAlt: { el: 'Custom τούρτες', en: 'Custom cakes' },
      title: { el: 'Custom Τούρτες', en: 'Custom Cakes' },
      backgroundColor: '#FEF4EB',
      iconBackgroundColor: '#EF8168',
      textColor: '#512500',
      aosDurationMs: 1000,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/icon-signature-desserts.svg',
      iconAlt: { el: 'Signature desserts', en: 'Signature desserts' },
      title: { el: 'Signature Desserts', en: 'Signature Desserts' },
      backgroundColor: '#79A3882B',
      iconBackgroundColor: '#79A388',
      textColor: '#512500',
      aosDurationMs: 1100,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/icon-events.svg',
      iconAlt: { el: 'Εκδηλώσεις', en: 'Events' },
      title: { el: 'Εκδηλώσεις', en: 'Events' },
      backgroundColor: '#EEE9E5',
      textColor: '#512500',
      iconVariant: 'contained',
      iconBackgroundColor: '#512500',
      aosDurationMs: 1200,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/icon-cookie.svg',
      iconAlt: { el: 'Καθημερινές απολαύσεις', en: 'Daily delights' },
      title: { el: 'Καθημερινές Απολαύσεις', en: 'Daily Delights' },
      backgroundColor: '#E1D9B240',
      iconBackgroundColor: '#E1D9B2',
      textColor: '#4B2709',
      aosDurationMs: 1300,
    },
  ],

  aboutLeftBackgroundImage: '/public/assets/images/stamatopoulos/97fc5e805ac11e44aa93524cdede5776ead81514.jpg',
  aboutShapeImage: '/assets/images/stamatopoulos/about-history-shape.svg',
  aboutShapeAlt: { el: 'shape', en: 'shape' },
  aboutKicker: { el: 'Η ΙΣΤΟΡΙΑ ΜΑΣ', en: 'OUR STORY' },
  aboutTitle: { el: 'Τέσσερις γενιές γεύσης, φροντίδας και εξέλιξης', en: 'Four generations of taste, care, and evolution' },
  aboutParagraphs: [
    {
      el: 'Στον Σταματόπουλο, το γλυκό δεν είναι απλώς μια συνταγή. Είναι μέρος μιας οικογενειακής διαδρομής που ξεκίνησε το 1950 και συνεχίζεται μέχρι σήμερα, με την ίδια αγάπη για την ποιότητα, τη λεπτομέρεια και τη γεύση. Κάθε δημιουργία φτιάχνεται για να συνοδεύει αληθινές στιγμές και να μένει στη μνήμη.',
      en: 'At Stamatopoulos, dessert is not just a recipe. It is part of a family journey that began in 1950 and continues to this day, with the same love for quality, detail, and taste. Every creation is made to accompany real moments and to stay in memory.',
    },
  ],
  aboutCtaLabel: { el: 'ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ', en: 'LEARN MORE' },
  aboutCtaHref: '/about',

  experienceKicker: { el: 'Η εμπειρια μας', en: 'OUR EXPERIENCE' },
  experienceTitle: {
    el: 'Παράδοση στην τεχνική, σύγχρονη ματιά στη δημιουργία.',
    en: 'Tradition in technique, a modern approach to creation.',
  },
  experienceText: {
    el: 'Με εμπειρία που περνά από γενιά σε γενιά, συνδυάζουμε την καθαρότητα της ελληνικής ζαχαροπλαστικής με μια πιο σύγχρονη δημιουργική προσέγγιση. Από τις καθημερινές απολαύσεις μέχρι τις πιο ιδιαίτερες παραγγελίες, κάθε γλυκό σχεδιάζεται με φροντίδα, ισορροπία και χαρακτήρα.',
    en: 'With experience passed from generation to generation, we combine the purity of Greek pastry-making with a more modern creative approach. From everyday treats to the most special orders, every dessert is designed with care, balance, and character.',
  },

  promoCards: [
    {
      backgroundImage: '/assets/images/stamatopoulos/promo-daily-delights.png',
      backgroundColor: '#C8DDD3',
      kicker: { el: 'Για κάθε στιγμή', en: 'For every moment' },
      title: { el: 'Καθημερινές Απολαύσεις', en: 'Daily Delights' },
      aosDurationMs: 1000,
    },
    {
      backgroundImage: '/assets/images/stamatopoulos/promo-signature-desserts.png',
      backgroundColor: '#F0EBD8',
      kicker: { el: 'Η υπογραφή μας', en: 'Our signature' },
      title: { el: 'Signature Desserts', en: 'Signature Desserts' },
      aosDurationMs: 1200,
    },
    {
      backgroundImage: '/assets/images/stamatopoulos/promo-custom-cakes.png',
      backgroundColor: '#F5D8CC',
      kicker: { el: 'Φτιαγμένα για σένα', en: 'Made for you' },
      title: { el: 'Custom Cakes', en: 'Custom Cakes' },
      aosDurationMs: 1400,
    },
  ],

  chooseKicker: { el: 'Η διαφορά μας', en: 'Our difference' },
  chooseTitle: {
    el: 'Εκεί όπου η παράδοση συναντά τη δημιουργία',
    en: 'Where tradition meets creation',
  },
  chooseLeftItems: [
    {
      title: { el: 'Ελληνική Βάση', en: 'Greek Base' },
      description: {
        el: 'Καθαρότητα, δομή και σεβασμός στην τέχνη της ελληνικής ζαχαροπλαστικής.',
        en: 'Purity, structure, and respect for the art of Greek pastry-making.',
      },
      titleBgClass: 'stamatopoulos-choose-header--sage',
      aosDurationMs: 1000,
    },
    {
      title: { el: 'Τέσσερις γενιές', en: 'Four generations' },
      description: {
        el: 'Η εμπειρία μας χτίζεται μέσα στον χρόνο, με τεχνική που περνά από γενιά σε γενιά.',
        en: 'Our experience is built over time, with technique passed from generation to generation.',
      },
      titleBgClass: 'stamatopoulos-choose-header--tan',
      aosDurationMs: 1200,
    },
  ],
  chooseCenterImage: '/assets/images/stamatopoulos/choose-center-illustration.svg',
  chooseCenterImageAlt: { el: 'Χειροποίητες δημιουργίες', en: 'Handcrafted creations' },
  chooseRightItems: [
    {
      title: { el: 'Νότες Καραϊβικής', en: 'Notes of the Caribbean' },
      description: {
        el: 'Φρούτα, καρύδα και μπαχαρικά φέρνουν μια διακριτική εξωτική ένταση.',
        en: 'Fruits, coconut, and spices bring a subtle exotic intensity.',
      },
      titleBgClass: 'stamatopoulos-choose-header--coral',
      aosDurationMs: 1000,
    },
    {
      title: { el: 'Ξεχωριστές Δημιουργίες', en: 'Unique Creations' },
      description: {
        el: 'Κάθε γλυκό ξεκινά από την αρχή και παίρνει μορφή με φροντίδα και ακρίβεια.',
        en: 'Every sweet starts from scratch and takes shape with care and precision.',
      },
      titleBgClass: 'stamatopoulos-choose-header--brown',
      aosDurationMs: 1200,
    },
  ],

  offerKicker: { el: 'Τούρτες κατά παραγγελία', en: 'Cakes to order' },
  offerTitle: { el: 'Η τούρτα σου, φτιαγμένη μόνο για σένα', en: 'Your cake, made only for you' },
  offerText: {
    el: 'Κάθε τούρτα σχεδιάζεται ξεχωριστά, με βάση την περίσταση, το ύφος και αυτό που θέλεις να εκφράζει. Από γενέθλια μέχρι βαφτίσεις και ιδιαίτερες στιγμές, δημιουργούμε τούρτες με χαρακτήρα, φροντίδα και ισορροπία.',
    en: 'Every cake is designed individually, based on the occasion, the mood, and what you want to express. From birthdays to christenings and special moments, we create cakes with character, care, and balance.',
  },
  offerCtaLabel: { el: 'ΔΗΜΙΟΥΡΓΗΣΕ ΤΗ ΔΙΚΗ ΣΟΥ', en: 'CREATE YOUR OWN' },
  offerCtaHref: '/contact',
  offerImage: '/assets/images/stamatopoulos/offer-custom-cake.png',
  offerImageAlt: { el: 'Τούρτα κατά παραγγελία', en: 'Custom celebration cake' },

  testimonials: [
    {
      text: {
        el: 'Η τούρτα για τον γάμο μας ήταν ακριβώς όπως την ονειρευόμασταν. Η γεύση, η παρουσίαση και η φροντίδα ξεχώρισαν σε κάθε λεπτομέρεια.',
        en: 'Our wedding cake was exactly as we dreamed. The flavor, presentation, and care stood out in every detail.',
      },
      author: { el: 'Μαρία & Νίκος Κ.', en: 'Maria & Nikos K.' },
    },
    {
      text: {
        el: 'Τα γλυκά της βιτρίνας είναι πάντα φρέσκα και γευστικά. Έχουμε γίνει σταθεροί πελάτες για κάθε οικογενειακή γιορτή.',
        en: 'The sweets in the display are always fresh and delicious. We have become regular customers for every family celebration.',
      },
      author: { el: 'Ελένη Π.', en: 'Eleni P.' },
    },
    {
      text: {
        el: 'Εξαιρετική ποιότητα και εξυπηρέτηση. Η custom τούρτα που φτιάξατε για τα γενέθλιά μου ήταν το highlight της βραδιάς.',
        en: 'Excellent quality and service. The custom cake you made for my birthday was the highlight of the evening.',
      },
      author: { el: 'Γιώργος Α.', en: 'Giorgos A.' },
    },
  ],

  galleryImages: Array.from({ length: 6 }).map(() => ({
    src: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
    alt: { el: 'Gallery Image', en: 'Gallery Image' },
  })),

  ctaBackgroundImage: '/assets/images/stamatopoulos/newsletter-background.svg',
  ctaTitle: { el: 'Νέα από το εργαστήριό μας', en: 'News from our workshop' },
  ctaSubtitle: {
    el: 'Ανακάλυψε πρώτος νέες γεύσεις, εποχιακές προτάσεις και δημιουργίες που ξεχωρίζουν.',
    en: 'Be the first to discover new flavors, seasonal suggestions, and creations that stand out.',
  },
  ctaEmailPlaceholder: { el: 'Το email σου', en: 'Your email' },
  ctaButtonLabel: { el: 'ΕΓΓΡΑΦΗ', en: 'SUBSCRIBE' },

  blogKicker: { el: 'Τα τελευταία νέα μας', en: 'Our latest news' },
  blogTitle: {
    el: 'Ότι νέο παίρνει μορφή στο εργαστήριό μας',
    en: 'Everything new takes shape in our workshop',
  },
  blogReadMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read more' },
  blogPosts: [
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'Από τον Γιάννη', en: 'By John' },
      dateLabel: { el: '19 Μαΐου 2025', en: 'May 19, 2025' },
      title: {
        el: 'Η τέχνη του τέλειου frosting: συμβουλές από τους ζαχαροπλάστες μας',
        en: 'The Art of Perfect Frosting Tips from Our Pastry Experts',
      },
      excerpt: {
        el: 'Μια εικόνα από μέσα για το πώς δημιουργούμε λείες, γευστικές και όμορφα διακοσμημένες επικαλύψεις.',
        en: 'An insider look at creating smooth, flavorful, and beautifully piped frosting.',
      },
      href: '#',
    },
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'Από τον Γιάννη', en: 'By John' },
      dateLabel: { el: '19 Μαΐου 2025', en: 'May 19, 2025' },
      title: {
        el: 'Η τέχνη του τέλειου frosting: συμβουλές από τους ζαχαροπλάστες μας',
        en: 'The Art of Perfect Frosting Tips from Our Pastry Experts',
      },
      excerpt: {
        el: 'Μια εικόνα από μέσα για το πώς δημιουργούμε λείες, γευστικές και όμορφα διακοσμημένες επικαλύψεις.',
        en: 'An insider look at creating smooth, flavorful, and beautifully piped frosting.',
      },
      href: '#',
    },
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'Από τον Γιάννη', en: 'By John' },
      dateLabel: { el: '19 Μαΐου 2025', en: 'May 19, 2025' },
      title: {
        el: 'Η τέχνη του τέλειου frosting: συμβουλές από τους ζαχαροπλάστες μας',
        en: 'The Art of Perfect Frosting Tips from Our Pastry Experts',
      },
      excerpt: {
        el: 'Μια εικόνα από μέσα για το πώς δημιουργούμε λείες, γευστικές και όμορφα διακοσμημένες επικαλύψεις.',
        en: 'An insider look at creating smooth, flavorful, and beautifully piped frosting.',
      },
      href: '#',
    },
  ],
};

export const aboutPageConfig: AboutPageConfig = {
  bannerBackgroundImage: '/assets/images/stamatopoulos/about/hero-cupcakes.png',
  bannerTitle: { el: 'Η ιστορία μας', en: 'Our story' },
  bannerSubtitle: {
    el: 'Τέσσερις γενιές παράδοσης, φροντίδας και σύγχρονης δημιουργίας στην τέχνη του γλυκού.',
    en: 'Four generations of tradition, care, and contemporary creativity in the art of pastry.',
  },
  breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'Σχετικά με εμάς', en: 'About Us' },

  aboutKicker: { el: 'Σχετικά με εμάς', en: 'About us' },
  aboutTitle: {
    el: 'Μια οικογενειακή παράδοση που συνεχίζεται',
    en: 'A family tradition that continues',
  },
  aboutLead: {
    el: 'Από το 1950, η οικογένειά μας δίνει μορφή στο γλυκό με σεβασμό στην παράδοση και ανοιχτό βλέμμα στη σύγχρονη δημιουργία. Κάθε γενιά πρόσθεσε τη δική της πινελιά — τεχνική, φαντασία και καθημερινή φροντίδα — ώστε αυτό που σας προσφέρουμε σήμερα να είναι γεύση, μνήμη και στιγμή μαζί.',
    en: 'Since 1950, our family has shaped pastry with respect for tradition and an eye for contemporary craft. Each generation added its own touch — skill, imagination, and daily care — so what we offer today is flavor, memory, and a moment shared.',
  },
  historyGalleryImages: [
    {
      src: '/assets/images/stamatopoulos/about/history-thumb-1.png',
      alt: { el: 'Ιστορική φωτογραφία οικογένειας', en: 'Family heritage photograph' },
    },
    {
      src: '/assets/images/stamatopoulos/about/history-thumb-2.png',
      alt: { el: 'Παραδοσιακή παραγωγή στο εργαστήριο', en: 'Traditional workshop craft' },
    },
    {
      src: '/assets/images/stamatopoulos/about/history-thumb-3.png',
      alt: { el: 'Το ιστορικό κατάστημα', en: 'The historic shopfront' },
    },
  ],
  sideImage: '/assets/images/stamatopoulos/about/history-team.png',
  sideImageAlt: { el: 'Η ομάδα μας στο εργαστήριο', en: 'Our team in the workshop' },
  sideText: {
    el: 'Σήμερα, το εργαστήριό μας συνδυάζει την εμπειρία των προηγούμενων γενεών με φρέσκιες ιδέες — πάντα με τα χέρια στην πρώτη ύλη και το βλέμμα στη λεπτομέρεια.',
    en: 'Today our workshop blends the experience of past generations with fresh ideas — hands on the ingredients and an eye on every detail.',
  },
  sideCtaLabel: { el: 'ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ', en: 'DISCOVER OUR CREATIONS' },
  sideCtaHref: '/menu',

  funFacts: [
    {
      iconSrc: '/assets/images/stamatopoulos/about/icons/stat-spiral.svg',
      value: { el: '1950', en: '1950' },
      suffix: { el: '', en: '' },
      label: { el: 'Εκεί όπου ξεκινά η ιστορία μας', en: 'Where our story begins' },
      aosDurationMs: 800,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/about/icons/stat-heart.svg',
      value: { el: '4 γενιές', en: '4 generations' },
      suffix: { el: '', en: '' },
      label: { el: 'Οικογενειακής παράδοσης', en: 'Family tradition' },
      aosDurationMs: 950,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/about/icons/stat-snowflake.svg',
      value: { el: '1976', en: '1976' },
      suffix: { el: '', en: '' },
      label: { el: 'Το εργαστήριο παίρνει μορφή', en: 'The workshop takes shape' },
      aosDurationMs: 1100,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/about/icons/stat-leaf.svg',
      value: { el: 'Σήμερα', en: 'Today' },
      suffix: { el: '', en: '' },
      label: {
        el: 'Η οικογένεια Γιάννης & Στέλλα Σταματόπουλος',
        en: 'The Yiannis & Stella Stamatopoulos family',
      },
      aosDurationMs: 1250,
    },
  ],

  featureKicker: { el: 'Η φιλοσοφία μας', en: 'Our philosophy' },
  featureTitle: {
    el: 'Παράδοση, φροντίδα και γεύση με χαρακτήρα',
    en: 'Tradition, care, and flavor with character',
  },
  featureLead: {
    el: 'Κάθε δημιουργία μας ξεκινά από τον σεβασμό στην οικογενειακή παράδοση και ολοκληρώνεται με μια σύγχρονη ματιά στη γεύση, την αισθητική και την εμπειρία.',
    en: 'Every creation starts with respect for family tradition and is completed with a contemporary eye on flavor, aesthetics, and experience.',
  },
  featureItemsLeft: [
    {
      iconSrc: '/assets/images/stamatopoulos/icon-custom-cakes.svg',
      title: { el: 'Οικογενειακή παράδοση', en: 'Family tradition' },
      aosDurationMs: 1200,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/icon-signature-desserts.svg',
      title: { el: 'Ποιοτικές πρώτες ύλες', en: 'Quality ingredients' },
      aosDurationMs: 1300,
    },
  ],
  featureItemsRight: [
    {
      iconSrc: '/assets/images/stamatopoulos/icon-events.svg',
      iconBackgroundColor: '#512500',
      title: { el: 'Χειροποίητη φροντίδα', en: 'Handcrafted care' },
      aosDurationMs: 1400,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/icon-daily-delights.svg',
      title: { el: 'Σύγχρονη δημιουργία', en: 'Contemporary creation' },
      aosDurationMs: 1500,
    },
  ],
  featureCtaLabel: { el: 'ΑΝΑΚΑΛΥΨΕ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ', en: 'DISCOVER OUR CREATIONS' },
  featureCtaHref: '/menu',
  featureImage: '/assets/images/stamatopoulos/about/philosophy-cake.png',
  featureImageAlt: {
    el: 'Διακοσμημένη τούρτα σε πράσινο πιατέλο',
    en: 'Decorated celebration cake on a sage cake stand',
  },

  instagramMarqueeImages: Array.from({ length: 5 }).map(() => ({
    src: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
    alt: { el: 'Στιγμές από το εργαστήριο', en: 'Moments from our workshop' },
  })),
};

export const contactPageConfig: ContactPageConfig = {
  bannerBackgroundImage: '/assets/images/stamatopoulos/contact-hero.png',
  bannerTitle: { el: 'Μιληστε μαζι μας', en: 'Talk to us' },
  bannerSubtitle: {
    el: 'Για παραγγελίες, εκδηλώσεις ή οποιαδήποτε πληροφορία, είμαστε εδώ για να σας εξυπηρετήσουμε.',
    en: 'For orders, events, or any information, we are here to help.',
  },
  breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'Επικοινωνία', en: 'Contact' },

  infoItems: [
    {
      iconSrc: '/assets/images/stamatopoulos/contact-icon-location.svg',
      title: { el: 'Που θα μας βρείτε', en: 'Where to find us' },
      lines: [{ value: { el: 'Διεύθυνση, Τρίπολη', en: 'Address, Tripoli' } }],
      aosDurationMs: 800,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/contact-icon-phone.svg',
      title: { el: 'Καλέστε μας', en: 'Call us' },
      lines: [{ value: { el: '+30 123 456 7890', en: '+30 123 456 7890' }, href: 'tel:+301234567890' }],
      aosDurationMs: 1000,
    },
    {
      iconSrc: '/assets/images/stamatopoulos/contact-icon-send.svg',
      title: { el: 'Στείλτε μας email', en: 'Send us an email' },
      lines: [{ value: { el: 'email@example.com', en: 'email@example.com' }, href: 'mailto:email@example.com' }],
      aosDurationMs: 1200,
    },
  ],

  leftTitle: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact us' },
  leftSubtitle: {
    el: 'Έχετε κάποια ερώτηση, θέλετε να κάνετε μια παραγγελία ή σχεδιάζετε μια εκδήλωση; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
    en: 'Have a question, want to place an order, or planning an event? Fill out the form and we will get back to you as soon as possible.',
  },
  hoursBlocks: [
    {
      title: { el: 'Ωράριο Καταστήματος', en: 'Store hours' },
      rows: [
        {
          label: { el: 'Δευτέρα – Σάββατο:', en: 'Monday – Saturday:' },
          value: { el: '08:00 – 21:00', en: '8:00 a.m. – 9:00 p.m.' },
        },
        {
          label: { el: 'Κυριακή:', en: 'Sunday:' },
          value: { el: 'Κλειστά', en: 'Closed' },
        },
      ],
    },
  ],
  secondaryBlurbTitle: { el: 'Για παραγγελίες & εκδηλώσεις', en: 'For orders & events' },
  secondaryBlurbBody: {
    el: 'Τούρτες, γλυκά, candy bars και μπουφέδες για γάμους, βαφτίσεις και ξεχωριστές στιγμές. Περιγράψτε μας την περίσταση και θα επικοινωνήσουμε μαζί σας για λεπτομέρειες.',
    en: 'Cakes, desserts, candy bars, and dessert buffets for weddings, christenings, and special moments. Tell us about your event and we will follow up with details.',
  },

  formCardTitle: { el: '', en: '' },
  mapEmbedSrc: 'https://www.google.com/maps?q=Tripoli+Greece&output=embed',
};

export const menuPageConfig: MenuPageConfig = {
  bannerBackgroundImage: '/assets/images/stamatopoulos/menu-hero.png',
  bannerTitle: { el: 'Οι δημιουργίες μας', en: 'Our creations' },
  bannerSubtitle: {
    el: 'Γλυκά για την καθημερινότητα, τις γιορτές και τις ξεχωριστές στιγμές σας, φτιαγμένα με φροντίδα, ποιότητα και χαρακτήρα.',
    en: 'Everyday treats, celebrations, and special moments—made with care, quality, and character.',
  },
  breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'Δημιουργίες', en: 'Creations' },
  sections: [
    {
      kicker: { el: 'Οι γεύσεις μας', en: 'Our flavors' },
      title: { el: 'Αγαπημένες καθημερινές απολαύσεις', en: 'Favorite daily treats' },
      items: [
        {
          imageSrc: '/assets/images/stamatopoulos/promo-daily-delights.png',
          imageAlt: { el: 'Πάστες και ατομικά γλυκά', en: 'Pastries and individual desserts' },
          title: { el: 'Πάστες & ατομικά γλυκά', en: 'Pastries & individual desserts' },
          description: {
            el: 'Μικρές δημιουργίες με ισορροπημένες γεύσεις και προσεγμένη εμφάνιση.',
            en: 'Petite creations with balanced flavors and refined presentation.',
          },
          aosDurationMs: 750,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/about/history-thumb-1.png',
          imageAlt: { el: 'Κουλουράκια και βουτήματα', en: 'Cookies and dipping treats' },
          title: { el: 'Κουλουράκια & βουτήματα', en: 'Cookies & dipping treats' },
          description: {
            el: 'Ιδανικά για τον καφέ, το κέρασμα ή το τραπέζι της ημέρας.',
            en: 'Perfect with coffee, for treating guests, or the everyday table.',
          },
          aosDurationMs: 850,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/promo-signature-desserts.png',
          imageAlt: { el: 'Σιροπιαστά γλυκά', en: 'Syrupy desserts' },
          title: { el: 'Σιροπιαστά', en: 'Syrupy classics' },
          description: {
            el: 'Κλασικές γεύσεις, φτιαγμένες με την παράδοση και φροντίδα που τους αξίζει.',
            en: 'Classic flavors made with the tradition and care they deserve.',
          },
          aosDurationMs: 950,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/hero-pecan-slice.png',
          imageAlt: { el: 'Τσουρέκια και επιδόρπια', en: 'Sweet breads and desserts' },
          title: { el: 'Τσουρέκια & επιδόρπια', en: 'Sweet breads & desserts' },
          description: {
            el: 'Αγαπημένες γεύσεις που επιστρέφουν στις στιγμές και τις γιορτές τους.',
            en: 'Beloved flavors that belong to holidays and gathering moments.',
          },
          aosDurationMs: 1050,
        },
      ],
    },
    {
      kicker: { el: 'Για κάθε περίσταση', en: 'For every occasion' },
      title: { el: 'Τούρτες & custom δημιουργίες', en: 'Cakes & custom creations' },
      items: [
        {
          imageSrc: '/assets/images/stamatopoulos/promo-custom-cakes.png',
          imageAlt: { el: 'Τούρτες γενεθλίων', en: 'Birthday cakes' },
          title: { el: 'Τούρτες γενεθλίων', en: 'Birthday cakes' },
          description: {
            el: 'Γεύσεις και σχέδια που φτιάχνονται για την ηλικία, το θέμα και τη στιγμή.',
            en: 'Flavors and designs tailored to age, theme, and the moment.',
          },
          aosDurationMs: 750,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/offer-custom-cake.png',
          imageAlt: { el: 'Τούρτες γάμου', en: 'Wedding cakes' },
          title: { el: 'Τούρτες γάμου', en: 'Wedding cakes' },
          description: {
            el: 'Κομψές γλυκές συνθέσεις για την πιο ιδιαίτερη στιγμή.',
            en: 'Elegant sweet compositions for your most special day.',
          },
          aosDurationMs: 850,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/about/philosophy-cake.png',
          imageAlt: { el: 'Τούρτες βάφτισης', en: 'Christening cakes' },
          title: { el: 'Τούρτες βάφτισης', en: 'Christening cakes' },
          description: {
            el: 'Πρωτότυπες δημιουργίες για μια τρυφερή και ξεχωριστή ημέρα.',
            en: 'Original creations for a tender, unforgettable day.',
          },
          aosDurationMs: 950,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/about/history-thumb-2.png',
          imageAlt: { el: 'Custom cakes', en: 'Custom cakes' },
          title: { el: 'Custom cakes', en: 'Custom cakes' },
          description: {
            el: 'Σχέδια και γεύσεις που δημιουργούνται με βάση τη δική σας ιδέα.',
            en: 'Designs and flavors shaped around your own vision.',
          },
          aosDurationMs: 1050,
        },
      ],
    },
    {
      kicker: { el: 'Γιορτές & κεράσματα', en: 'Holidays & treats' },
      title: { el: 'Γλυκές προτάσεις για εκδηλώσεις', en: 'Sweet ideas for events' },
      items: [
        {
          imageSrc: '/assets/images/stamatopoulos/promo-signature-desserts.png',
          imageAlt: { el: 'Candy bar εκδήλωσης', en: 'Candy bar' },
          title: { el: 'Candy bars', en: 'Candy bars' },
          description: {
            el: 'Γλυκές συνθέσεις με αισθητική, ποικιλία και χαρακτήρα.',
            en: 'Sweet spreads with style, variety, and personality.',
          },
          aosDurationMs: 750,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/about/history-thumb-3.png',
          imageAlt: { el: 'Γλυκά για γάμο', en: 'Wedding sweets' },
          title: { el: 'Γλυκά για γάμο', en: 'Wedding sweets' },
          description: {
            el: 'Προτάσεις για θρησκευτικό γάμο, κεράσματα και γλυκές λεπτομέρειες.',
            en: 'Options for church weddings, favors, and sweet finishing touches.',
          },
          aosDurationMs: 850,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/about/hero-cupcakes.png',
          imageAlt: { el: 'Γλυκά για βάφτιση', en: 'Christening sweets' },
          title: { el: 'Γλυκά για βάφτιση', en: 'Christening sweets' },
          description: {
            el: 'Κεράσματα και ατομικές δημιουργίες για μια όμορφη γιορτή.',
            en: 'Favors and individual treats for a joyful celebration.',
          },
          aosDurationMs: 950,
        },
        {
          imageSrc: '/assets/images/stamatopoulos/97fc5e805ac11e44aa93524cdede5776ead81514.jpg',
          imageAlt: { el: 'Εταιρικές παραγγελίες', en: 'Corporate orders' },
          title: { el: 'Εταιρικές παραγγελίες', en: 'Corporate orders' },
          description: {
            el: 'Γλυκές επιλογές για εκδηλώσεις, δώρα και επαγγελματικές περιστάσεις.',
            en: 'Sweet selections for events, gifts, and professional occasions.',
          },
          aosDurationMs: 1050,
        },
      ],
    },
  ],
  bottomCtaLabel: { el: 'Μιληστε μαζί μας', en: 'Talk to us' },
  bottomCtaHref: '/contact',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

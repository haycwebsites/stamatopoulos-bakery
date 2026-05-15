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

  linksTitle: LocaleString;
  links: FooterLinkConfig[];

  openingTimeTitle: LocaleString;
  openingHours: FooterHoursRowConfig[];

  newsletterTitle: LocaleString;
  newsletterSubtitle: LocaleString;
  newsletterEmailPlaceholder: LocaleString;
  newsletterSubscribeLabel: LocaleString;

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
  iconClass: string;
  title: LocaleString;
  bgClass: string;
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
  blogPosts: HomeBlogPostConfig[];
}

export interface AboutFunFactItemConfig {
  iconClass: string;
  value: LocaleString;
  suffix: LocaleString;
  label: LocaleString;
  aosDurationMs?: number;
}

export interface AboutFeatureItemConfig {
  iconClass: string;
  title: LocaleString;
  aosDurationMs?: number;
}

export interface AboutPageConfig {
  bannerBackgroundImage: string;
  bannerTitle: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;

  aboutKicker: LocaleString;
  aboutTitle: LocaleString;
  aboutLead: LocaleString;
  aboutMarqueeImages: { src: string; alt: LocaleString }[];
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
  iconClass: string;
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
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;

  infoItems: ContactInfoItemConfig[];

  leftTitle: LocaleString;
  leftSubtitle: LocaleString;
  hoursBlocks: ContactHoursBlockConfig[];

  formCardTitle: LocaleString;
  mapEmbedSrc: string;
}

export interface MenuPageConfig {
  bannerBackgroundImage: string;
  bannerTitle: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrentLabel: LocaleString;
  lead: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
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

  logoSrc: '/assets/images/home-restaurant/logo/logo-white.svg',
  logoAlt: { el: 'Brand Logo', en: 'Brand Logo' },
  brandHref: '/',
  aboutText: {
    el: 'Bistly Restaurant offers flavorful dishes, cozy ambiance.',
    en: 'Bistly Restaurant offers flavorful dishes, cozy ambiance.',
  },
  socialLinks: [
    { platform: 'facebook', href: '#' },
    { platform: 'twitter', href: '#' },
    { platform: 'instagram', href: '#' },
    { platform: 'youtube', href: '#' },
  ],

  linksTitle: { el: 'Links', en: 'Links' },
  links: [
    { label: { el: 'Home', en: 'Home' }, href: '/' },
    { label: { el: 'Menu', en: 'Menu' }, href: '/menu' },
    { label: { el: 'About Us', en: 'About Us' }, href: '/about' },
    { label: { el: 'Contact', en: 'Contact' }, href: '/contact' },
  ],

  openingTimeTitle: { el: 'Opening Time', en: 'Opening Time' },
  openingHours: [
    { days: { el: 'Mon - Thu:', en: 'Mon - Thu:' }, time: { el: '10:00 am - 01:00 am', en: '10:00 am - 01:00 am' } },
    { days: { el: 'Fri - Sat:', en: 'Fri - Sat:' }, time: { el: '10:00 am - 01:00 am', en: '10:00 am - 01:00 am' } },
    { days: { el: 'Sunday:', en: 'Sunday:' }, time: { el: 'Off Day', en: 'Off Day' }, isOffDay: true },
  ],

  newsletterTitle: { el: 'Newsletter', en: 'Our Newsletter' },
  newsletterSubtitle: { el: 'Delicious Tips, Dish Updates & More', en: 'Delicious Tips, Dish Updates & More' },
  newsletterEmailPlaceholder: { el: 'Enter Email Address', en: 'Enter Email Address' },
  newsletterSubscribeLabel: { el: 'Subscribe', en: 'Subscribe' },

  copyrightText: { el: 'Copyright © 2026 All Right Reserved.', en: 'Copyright © 2026 All Right Reserved.' },
  madeByPrefix: { el: 'Made by ', en: 'Made by ' },
  madeByLabel: { el: 'hayc', en: 'hayc' },
  madeByHref: 'https://hayc.gr/',
  madeBySuffix: { el: ' with 💙', en: ' with 💙' },

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

  categoriesKicker: { el: 'Category', en: 'Category' },
  categoriesTitle: { el: 'Γλυκά που φτιάχνονται για τις στιγμές που θέλεις να θυμάσαι.', en: 'Sweets made for the moments you want to remember.' },
  categories: [
    { iconClass: 'flaticon-bread', title: { el: 'Breads', en: 'Breads' }, bgClass: 'bg_one', aosDurationMs: 1000 },
    { iconClass: 'flaticon-cake', title: { el: 'Brownies', en: 'Brownies' }, bgClass: 'bg_two', aosDurationMs: 1200 },
    { iconClass: 'flaticon-cupcake-1', title: { el: 'Desserts', en: 'Desserts' }, bgClass: 'bg_three', aosDurationMs: 1400 },
    { iconClass: 'flaticon-candy', title: { el: 'Candy', en: 'Candy' }, bgClass: 'bg_four', aosDurationMs: 1600 },
    { iconClass: 'flaticon-bread', title: { el: 'Cookie', en: 'Cookie' }, bgClass: 'bg_five', aosDurationMs: 1800 },
  ],

  aboutLeftBackgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
  aboutShapeImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/shape1-1.png',
  aboutShapeAlt: { el: 'shape', en: 'shape' },
  aboutKicker: { el: 'About Us', en: 'About Us' },
  aboutTitle: { el: 'Sweet Moments, Freshly Made.', en: 'Sweet Moments, Freshly Made.' },
  aboutParagraphs: [
    {
      el: "At [Your Shop Name], we believe dessert is more than just a treat—it's a little moment of joy.",
      en: "At [Your Shop Name], we believe dessert is more than just a treat—it's a little moment of joy.",
    },
    {
      el: 'From handcrafted cakes and pastries to melt-in-your-mouth cookies and creamy delights, every bite is made with love, using only the finest ingredients.',
      en: 'From handcrafted cakes and pastries to melt-in-your-mouth cookies and creamy delights, every bite is made with love, using only the finest ingredients.',
    },
    {
      el: 'Whether you’re here for a morning pick-me-up or a sweet evening escape, we’re here to make your day a little more delicious.',
      en: 'Whether you’re here for a morning pick-me-up or a sweet evening escape, we’re here to make your day a little more delicious.',
    },
  ],
  aboutCtaLabel: { el: 'Contact us', en: 'Contact us' },
  aboutCtaHref: '/contact',

  experienceKicker: { el: 'Our Experience', en: 'Our Experience' },
  experienceTitle: { el: 'Crafting Sweetness with Passion.', en: 'Crafting Sweetness with Passion.' },
  experienceText: {
    el: 'With years of experience in baking and coffee culture, we bring expert And craftsmanship to every dessert and drink we serve. From classic recipes to creative new flavors, our team is dedicated to delivering quality.',
    en: 'With years of experience in baking and coffee culture, we bring expert And craftsmanship to every dessert and drink we serve. From classic recipes to creative new flavors, our team is dedicated to delivering quality.',
  },

  promoCards: [
    {
      backgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/promo-bg1.jpg',
      kicker: { el: 'Shop your', en: 'Shop your' },
      title: { el: 'Best Choice', en: 'Best Choice' },
      aosDurationMs: 1000,
    },
    {
      backgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/promo-bg1.jpg',
      kicker: { el: 'Shop your', en: 'Shop your' },
      title: { el: 'Popular Item', en: 'Popular Item' },
      aosDurationMs: 1200,
    },
    {
      backgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/promo-bg1.jpg',
      kicker: { el: 'Shop your', en: 'Shop your' },
      title: { el: 'Best Combo Pack', en: 'Best Combo Pack' },
      aosDurationMs: 1400,
    },
  ],

  chooseKicker: { el: 'Why Choose Desserts', en: 'Why Choose Desserts' },
  chooseTitle: { el: 'Something Sweet for Every Craving.', en: 'Something Sweet for Every Craving.' },
  chooseLeftItems: [
    {
      title: { el: 'Authentic Ingredients', en: 'Authentic Ingredients' },
      description: { el: 'Authentic ingredients sourced globally for rich, natural flavor experiences.', en: 'Authentic ingredients sourced globally for rich, natural flavor experiences.' },
      titleBgClass: 'bg-one',
      aosDurationMs: 1000,
    },
    {
      title: { el: 'Vegan Cream Frosting', en: 'Vegan Cream Frosting' },
      description: { el: 'Deliciously smooth vegan cream frosting, perfect for guilt-free indulgence.', en: 'Deliciously smooth vegan cream frosting, perfect for guilt-free indulgence.' },
      titleBgClass: 'bg-two',
      aosDurationMs: 1200,
    },
  ],
  chooseCenterImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/shape1-1.png',
  chooseCenterImageAlt: { el: 'Image', en: 'Image' },
  chooseRightItems: [
    {
      title: { el: 'Soft And Healthy Bread', en: 'Soft And Healthy Bread' },
      description: { el: 'Soft, wholesome, and healthy bread made with nourishing natural ingredients.', en: 'Soft, wholesome, and healthy bread made with nourishing natural ingredients.' },
      titleBgClass: 'bg-three',
      aosDurationMs: 1000,
    },
    {
      title: { el: 'Keto Friendly', en: 'Keto Friendly' },
      description: { el: 'Low-carb, keto-friendly delights supporting your healthy lifestyle and goals.', en: 'Low-carb, keto-friendly delights supporting your healthy lifestyle and goals.' },
      titleBgClass: 'bg-four',
      aosDurationMs: 1200,
    },
  ],

  offerKicker: { el: 'Summer Special', en: 'Summer Special' },
  offerTitle: { el: 'Memories Made Sweeter', en: 'Memories Made Sweeter' },
  offerText: {
    el: 'Create unforgettable moments with every bite—our desserts bring people together, adding sweetness and joy to every special memory shared.',
    en: 'Create unforgettable moments with every bite—our desserts bring people together, adding sweetness and joy to every special memory shared.',
  },
  offerCtaLabel: { el: 'Order now', en: 'Order now' },
  offerCtaHref: '/menu-grid',
  offerImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/shape1-1.png',
  offerImageAlt: { el: 'offer image', en: 'offer image' },

  testimonials: [
    {
      text: {
        el: 'Every bite is a dream! I’ve never tasted desserts this fresh and flavorful. The presentation, the texture, the taste—everything is perfect.',
        en: 'Every bite is a dream! I’ve never tasted desserts this fresh and flavorful. The presentation, the texture, the taste—everything is perfect.',
      },
      author: { el: 'John Smith / Main Chef', en: 'John Smith / Main Chef' },
    },
    {
      text: {
        el: 'Every bite is a dream! I’ve never tasted desserts this fresh and flavorful. The presentation, the texture, the taste—everything is perfect.',
        en: 'Every bite is a dream! I’ve never tasted desserts this fresh and flavorful. The presentation, the texture, the taste—everything is perfect.',
      },
      author: { el: 'John Smith / Main Chef', en: 'John Smith / Main Chef' },
    },
  ],

  galleryImages: Array.from({ length: 6 }).map(() => ({
    src: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
    alt: { el: 'Gallery Image', en: 'Gallery Image' },
  })),

  ctaBackgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/cta-bg.jpg',
  ctaTitle: { el: 'Get the Inside Scoop on Sweet Offers & News!', en: 'Get the Inside Scoop on Sweet Offers & News!' },
  ctaSubtitle: { el: 'Get 10% Off Instantly! Stay in the Loop With Our Newest Offers and Treats.', en: 'Get 10% Off Instantly! Stay in the Loop With Our Newest Offers and Treats.' },
  ctaEmailPlaceholder: { el: 'Enter your email address', en: 'Enter your email address' },
  ctaButtonLabel: { el: 'Subscribe', en: 'Subscribe' },

  blogKicker: { el: 'Latest Blog', en: 'Latest Blog' },
  blogTitle: { el: 'Our Recent Posts', en: 'Our Recent Posts' },
  blogPosts: [
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'By John', en: 'By John' },
      dateLabel: { el: 'May 19, 2025', en: 'May 19, 2025' },
      title: { el: 'The Art of Perfect Frosting Tips from Our Pastry Experts', en: 'The Art of Perfect Frosting Tips from Our Pastry Experts' },
      excerpt: { el: 'An insider look at creating smooth, flavorful, and beautifully piped frosting.', en: 'An insider look at creating smooth, flavorful, and beautifully piped frosting.' },
      href: 'blog-details.html',
    },
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'By John', en: 'By John' },
      dateLabel: { el: 'May 19, 2025', en: 'May 19, 2025' },
      title: { el: 'Behind the Recipe The Story of Our Signature Cupcake', en: 'Behind the Recipe The Story of Our Signature Cupcake' },
      excerpt: { el: "Tell the story behind your best-selling cupcake ingredient inspiration, and how it's made.", en: "Tell the story behind your best-selling cupcake ingredient inspiration, and how it's made." },
      href: 'blog-details.html',
    },
    {
      image: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/about-img1.jpg',
      authorLabel: { el: 'By John', en: 'By John' },
      dateLabel: { el: 'May 19, 2025', en: 'May 19, 2025' },
      title: { el: 'Celebrating Life’s Moments, One Dessert at a Time', en: 'Celebrating Life’s Moments, One Dessert at a Time' },
      excerpt: { el: 'A heartwarming piece on how desserts bring people together for birthdays.', en: 'A heartwarming piece on how desserts bring people together for birthdays.' },
      href: 'blog-details.html',
    },
  ],
};

export const aboutPageConfig: AboutPageConfig = {
  bannerBackgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/page-bg.jpg',
  bannerTitle: { el: 'About', en: 'About' },
  breadcrumbHomeLabel: { el: 'Home', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'About', en: 'About' },

  aboutKicker: { el: 'About Us', en: 'About Us' },
  aboutTitle: { el: 'Savor Story Behind the Flavor', en: 'Savor Story Behind the Flavor' },
  aboutLead: {
    el: 'Embark on a culinary journey where tradition meets innovation. Our dishes are thoughtfully crafted with the finest ingredients.',
    en: 'Embark on a culinary journey where tradition meets innovation. Our dishes are thoughtfully crafted with the finest ingredients.',
  },
  aboutMarqueeImages: Array.from({ length: 10 }).map(() => ({
    src: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
    alt: { el: '', en: '' },
  })),
  sideImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/hero-img1.jpg',
  sideImageAlt: { el: 'about Image', en: 'about Image' },
  sideText: {
    el: 'Embark on a culinary journey where tradition meets innovation. Our dishes are thoughtfully.',
    en: 'Embark on a culinary journey where tradition meets innovation. Our dishes are thoughtfully.',
  },
  sideCtaLabel: { el: 'Contact Us', en: 'Contact Us' },
  sideCtaHref: '/contact',

  funFacts: [
    {
      iconClass: 'flaticon-chef',
      value: { el: '300', en: '300' },
      suffix: { el: '+', en: '+' },
      label: { el: 'Culinary Expert', en: 'Culinary Expert' },
      aosDurationMs: 800,
    },
    {
      iconClass: 'flaticon-dining-room',
      value: { el: '260', en: '260' },
      suffix: { el: '+', en: '+' },
      label: { el: 'Five-Star Dining', en: 'Five-Star Dining' },
      aosDurationMs: 1000,
    },
    {
      iconClass: 'flaticon-offers',
      value: { el: '5', en: '5' },
      suffix: { el: 'K+', en: 'K+' },
      label: { el: 'Food Offerings', en: 'Food Offerings' },
      aosDurationMs: 1200,
    },
    {
      iconClass: 'flaticon-happy-face',
      value: { el: '27', en: '27' },
      suffix: { el: 'K+', en: 'K+' },
      label: { el: 'Happy Customer', en: 'Happy Customer' },
      aosDurationMs: 1400,
    },
  ],

  featureKicker: { el: 'Simple, Classic, Delicious', en: 'Simple, Classic, Delicious' },
  featureTitle: { el: 'Fine Dining Rooted in the City Heartbeat', en: 'Fine Dining Rooted in the City Heartbeat' },
  featureLead: {
    el: 'Experience fine dining crafted with elegance and passion, perfectly rooted in the vibrant rhythm and soul of the city’s heartbeat.',
    en: 'Experience fine dining crafted with elegance and passion, perfectly rooted in the vibrant rhythm and soul of the city’s heartbeat.',
  },
  featureItemsLeft: [
    { iconClass: 'flaticon-chef', title: { el: 'Professional Chefs', en: 'Professional Chefs' }, aosDurationMs: 1200 },
    { iconClass: 'flaticon-chef', title: { el: 'Online Delivery Shop', en: 'Online Delivery Shop' }, aosDurationMs: 1300 },
  ],
  featureItemsRight: [
    { iconClass: 'flaticon-chef', title: { el: 'Fresh Ingredients', en: 'Fresh Ingredients' }, aosDurationMs: 1400 },
    { iconClass: 'flaticon-chef', title: { el: '24/7 Services', en: '24/7 Services' }, aosDurationMs: 1500 },
  ],
  featureCtaLabel: { el: 'View all menu', en: 'View all menu' },
  featureCtaHref: '/menu-grid',
  featureImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/hero-img1.jpg',
  featureImageAlt: { el: 'Feature Image', en: 'Feature Image' },

  instagramMarqueeImages: Array.from({ length: 10 }).map(() => ({
    src: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/gallery-img1.jpg',
    alt: { el: '', en: '' },
  })),
};

export const contactPageConfig: ContactPageConfig = {
  bannerBackgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/page-bg.jpg',
  bannerTitle: { el: 'Contact Us', en: 'Contact Us' },
  breadcrumbHomeLabel: { el: 'Home', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'Contact Us', en: 'Contact Us' },

  infoItems: [
    {
      iconClass: 'far fa-map-marker-alt',
      title: { el: 'Our Location', en: 'Our Location' },
      lines: [
        { value: { el: '456 Elm Avenue, Metropolis NY 10001', en: '456 Elm Avenue, Metropolis NY 10001' } },
      ],
      aosDurationMs: 800,
    },
    {
      iconClass: 'far fa-phone-alt',
      title: { el: 'Contact Number', en: 'Contact Number' },
      lines: [
        { value: { el: '+000 123 456 7890', en: '+000 123 456 7890' }, href: 'tel:+0001234567890' },
        { value: { el: '+000 123 756 4352', en: '+000 123 756 4352' }, href: 'tel:+0001237564352' },
      ],
      aosDurationMs: 1000,
    },
    {
      iconClass: 'far fa-envelope',
      title: { el: 'Email', en: 'Email Address' },
      lines: [
        { value: { el: 'Contact@Example.com', en: 'Contact@Example.com' }, href: 'mailto:Contact@Example.com' },
        { value: { el: 'Info@Example.com', en: 'Info@Example.com' }, href: 'mailto:Info@Example.com' },
      ],
      aosDurationMs: 1200,
    },
  ],

  leftTitle: { el: 'Talk to Us Today', en: 'Talk to Us Today' },
  leftSubtitle: { el: 'Have a question or feedback? Our team is here to help.', en: 'Have a question or feedback? Our team is here to help.' },
  hoursBlocks: [
    {
      title: { el: 'Opening Hours', en: 'Opening Hours' },
      rows: [
        { label: { el: 'Mon–Thu:', en: 'Mon–Thu:' }, value: { el: '10:00 am – 01:00 am', en: '10:00 am – 01:00 am' } },
        { label: { el: 'Fri–Sat:', en: 'Fri–Sat:' }, value: { el: '10:00 am – 01:00 am', en: '10:00 am – 01:00 am' } },
        { label: { el: 'Sunday:', en: 'Sunday:' }, value: { el: 'Off', en: 'Off' } },
      ],
    },
    {
      title: { el: 'Available Hours', en: 'Available Hours' },
      rows: [
        { label: { el: 'Breakfast:', en: 'Breakfast:' }, value: { el: '07:00 – 10:00', en: '07:00 – 10:00' } },
        { label: { el: 'Lunch:', en: 'Lunch:' }, value: { el: '12:00 – 02:00', en: '12:00 – 02:00' } },
        { label: { el: 'Dinner:', en: 'Dinner:' }, value: { el: '07:00 – 10:00', en: '07:00 – 10:00' } },
      ],
    },
  ],

  formCardTitle: { el: 'Contact Form', en: 'Contact Form' },
  mapEmbedSrc: 'https://www.google.com/maps?q=Athens,Greece&output=embed',
};

export const menuPageConfig: MenuPageConfig = {
  bannerBackgroundImage: 'https://linen-mantis-383824.hostingersite.com/wp-content/uploads/2026/02/page-bg.jpg',
  bannerTitle: { el: 'Menu', en: 'Menu' },
  breadcrumbHomeLabel: { el: 'Home', en: 'Home' },
  breadcrumbHomeHref: '/',
  breadcrumbCurrentLabel: { el: 'Menu', en: 'Menu' },
  lead: {
    el: 'Full menu pages will be added here. For now, contact us for reservations or special orders.',
    en: 'Full menu pages will be added here. For now, contact us for reservations or special orders.',
  },
  ctaLabel: { el: 'Contact us', en: 'Contact us' },
  ctaHref: '/contact',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

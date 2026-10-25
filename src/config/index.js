export const APP_CONFIG = {
  NAME: 'Online Class Writers',
  VERSION: '1.0.0',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  WHAT_WE_OFFER: '/What-We-Offe',
  SUBJECTS: '/subjects',
  PRICING: '/pricing',
  FAQ: '/faq',
  BLOG: '/blog',
  BLOG_DETAIL: '/blog/:slug',
  CONTACT: '/contact',
  TERMS_CONDITIONS: '/terms-and-conditions',
};

export const API_CONFIG = {
  BASE_URL: (typeof __API_BASE_URL__ !== 'undefined' && __API_BASE_URL__) || '',
  VITALS_ENDPOINT: '',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

export const SEO_CONFIG = {
  DEFAULT_TITLE: 'Online Class Writers',
  DEFAULT_DESCRIPTION:
    'Online class help for US college students, with support across homework, assignments, exam preparation and academic writing.',
  DEFAULT_KEYWORDS: [],
  DEFAULT_IMAGE: '/mainHero.webp',
  LOCALE: 'en_US',
  SITE_URL: typeof window !== 'undefined' ? window.location.origin : '',
};

export const PERFORMANCE_BUDGETS = {
  LCP: 2500,
  FCP: 1800,
  CLS: 0.1,
  INP: 200,
  TTFB: 800,
};

export const TOAST_CONFIG = {
  POSITION: 'top-center',
  DURATION: 3000,
};

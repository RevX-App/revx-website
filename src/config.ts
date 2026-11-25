/**
 * Site-wide constants. The web app is served at revx.website/app through the proxy in
 * vercel.json. Set PUBLIC_APP_URL to override.
 */
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL || '/app';

/** The one public inbox, shared by the founders (no paid domain yet). Support uses it too. */
export const CONTACT_EMAIL = 'revxtheapp@gmail.com';

/** Founders' Google Voice line for mechanics' questions (call or text). */
export const PHONE = { display: '(619) 780-5799', tel: '+16197805799' };

export const SITE = {
  name: 'RevX.website',
  tagline: 'The mechanic at your door.',
  // "RevX" alone is a crossbow and an ad-tech firm in AI answers; always pair it with the category.
  title: 'RevX.website: AI mechanic and mobile mechanics in San Diego',
  description:
    'RevX.website is a San Diego car-repair marketplace. Describe the problem, get an AI mechanic\'s read on it, and match with a mobile mechanic who wants the job.',
};

/** Mechanic recruitment copy, shared by Home's band and /mechanics so they can't drift. Approved 2026-11-24. */
export const MECHANIC_PITCH = {
  headline: ['Turn wrenches in San Diego?', 'Keep 100% of your quotes during launch.'],
  support: 'No lead fees. No pay-to-rank. Connect with drivers who need your expertise.',
  cta: 'Join as a founding mechanic',
  note: 'Free to join. A founder reviews every mechanic who signs up.',
};

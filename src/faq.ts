/**
 * One FAQ list for /faq (and its FAQPage markup) and the Home Q&A, so they cannot drift apart.
 * Every answer must match what the app does today; see docs/superpowers/specs/2026-11-24-website-priorities.md.
 */
export const faq: { id: string; q: string; a: string }[] = [
  {
    id: 'cost',
    q: 'What does it cost?',
    a: 'Posting and the AI read are free. Mechanics send quotes in chat, you compare them, and you agree on a price before any work starts.',
  },
  {
    id: 'vetting',
    q: 'How are mechanics checked?',
    a: 'Founders review every mechanic who signs up. Mechanics can add licenses and certifications to their profile, and reviews from past jobs build their record.',
  },
  {
    id: 'schedule',
    q: 'How do I schedule?',
    a: 'You and your mechanic pick a time in the app. Nothing is booked until you both agree.',
  },
  {
    id: 'pay',
    q: 'How do I pay?',
    a: 'You pay your mechanic directly, as agreed in chat. In-app payments are planned but not live yet.',
  },
  {
    id: 'visit',
    q: 'What happens at the appointment?',
    a: "Your mechanic comes to you or you visit their shop, as agreed. When the job's done, you both confirm it in the app, then review each other.",
  },
  {
    id: 'ai',
    q: 'How does the AI mechanic work?',
    a: 'You answer the questions a mechanic would ask, add a photo and, if you like, a recording of the noise. A rule engine turns your answers into a shortlist of likely causes, then the AI checks each one against your photo and audio. You get a plain-English read with ranked causes, severity, urgency, a confidence level and a cost range.',
  },
  {
    id: 'accuracy',
    q: 'Is the AI diagnosis accurate?',
    a: 'Every read shows its confidence level, and it is not a substitute for a hands-on inspection. Think of it as a head start: it tells you what to ask about, and the mechanic confirms it.',
  },
  {
    id: 'leads',
    q: 'Do mechanics pay for leads?',
    a: 'No. Mechanics swipe on the jobs they want and quote alongside other mechanics, with no lead fees or pay-to-rank listings. RevX takes no commission during launch; a commission may come later, alongside in-app payments. The first 100 mechanics get founding status and the best terms we ever offer.',
  },
  {
    id: 'where',
    q: 'Where does RevX work?',
    a: 'RevX is launching in San Diego, starting around UCSD and the neighborhoods near campus.',
  },
  {
    id: 'vehicles',
    q: 'Which vehicles and problems does RevX cover?',
    a: 'Cars and motorcycles, across four kinds of problems: mechanical, computer/ECU, modification and cosmetic.',
  },
  {
    id: 'location',
    q: 'Is my location shared?',
    a: "Not precisely. Your exact coordinates never leave RevX's servers. Others see a snapped area of about 0.7 miles and a distance rounded to the half mile, and only your matched mechanic gets the job-site location.",
  },
];

/** The five practical questions Home answers. */
export const homeFaq = faq.slice(0, 5);

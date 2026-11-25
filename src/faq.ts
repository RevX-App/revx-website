/**
 * One FAQ list for /faq (and its FAQPage markup) and the Home Q&A, so they cannot drift apart.
 * Every answer must match what the app does today; see docs/superpowers/specs/2026-11-24-website-priorities.md.
 */
export const faq: { id: string; group: 'trust' | 'other'; q: string; a: string }[] = [
  {
    id: 'cost',
    group: 'other',
    q: 'What does it cost?',
    a: 'Posting and the AI read are free. Mechanics send quotes in chat, you compare them, and you agree on a price before any work starts.',
  },
  {
    id: 'vetting',
    group: 'trust',
    q: 'How are mechanics checked?',
    a: 'Founders review every mechanic who signs up. Mechanics can add licenses and certifications to their profile, and reviews from past jobs build their record.',
  },
  {
    id: 'schedule',
    group: 'other',
    q: 'How do I schedule?',
    a: 'You and your mechanic pick a time in the app. Nothing is booked until you both agree.',
  },
  {
    id: 'pay',
    group: 'other',
    q: 'How do I pay?',
    a: 'You pay your mechanic directly, as agreed in chat. In-app payments are planned but not live yet.',
  },
  {
    id: 'visit',
    group: 'other',
    q: 'What happens at the appointment?',
    a: "Your mechanic comes to you or you visit their shop, as agreed. When the job's done, you both confirm it in the app, then review each other.",
  },
  {
    id: 'quotes',
    group: 'trust',
    q: 'Can a mechanic change a quote?',
    a: "Quotes list parts and labor line by line. Once sent, a quote can't be edited, only replaced by a new version you approve.",
  },
  {
    id: 'consent',
    group: 'trust',
    q: 'Can anything happen without my OK?',
    a: 'No. Matching, hiring, scheduling and closing a job each need both you and your mechanic to agree.',
  },
  {
    id: 'reviews',
    group: 'trust',
    q: 'Can I trust the reviews?',
    a: 'Reviews stay hidden until both sides submit, and ratings go public after 3 reviews. After each job, you also tell us privately whether the price matched the quote.',
  },
  {
    id: 'problems',
    group: 'trust',
    q: 'What if something goes wrong?',
    a: "You pay your mechanic directly. RevX doesn't hold your money yet, so it can't issue refunds. If something goes wrong, report or block them in the app, or email support. We aim to review reports within 24 hours.",
  },
  {
    id: 'ai',
    group: 'other',
    q: 'How does the AI mechanic work?',
    a: 'You answer the questions a mechanic would ask, add a photo and, if you like, a recording of the noise. A rule engine turns your answers into a shortlist of likely causes, then the AI checks each one against your photo and audio. You get a plain-English read with ranked causes, severity, urgency, a confidence level and a cost range.',
  },
  {
    id: 'accuracy',
    group: 'other',
    q: 'Is the AI diagnosis accurate?',
    a: 'Every read shows its confidence level, and it is not a substitute for a hands-on inspection. Think of it as a head start: it tells you what to ask about, and the mechanic confirms it.',
  },
  {
    id: 'leads',
    group: 'other',
    q: 'Do mechanics pay for leads?',
    a: 'No. Mechanics swipe on the jobs they want and quote alongside other mechanics, with no lead fees or pay-to-rank listings. RevX takes no commission during launch; a commission may come later, alongside in-app payments. The first 100 mechanics get founding status and the best terms we ever offer.',
  },
  {
    id: 'where',
    group: 'other',
    q: 'Where does RevX work?',
    a: 'RevX is launching in San Diego, starting around UCSD and the neighborhoods near campus.',
  },
  {
    id: 'vehicles',
    group: 'other',
    q: 'Which vehicles and problems does RevX cover?',
    a: 'Cars and motorcycles, across four kinds of problems: mechanical, computer/ECU, modification and cosmetic.',
  },
  {
    id: 'location',
    group: 'trust',
    q: 'Is my location shared?',
    a: "Not precisely. Your exact coordinates never leave RevX's servers. Others see a snapped area of about 0.7 miles and a distance rounded to the half mile, and only your matched mechanic gets the job-site location.",
  },
];

/** The practical questions Home answers; vetting lives in Home's trust section. */
const HOME = ['cost', 'schedule', 'pay', 'visit'];
export const homeFaq = faq.filter((f) => HOME.includes(f.id));

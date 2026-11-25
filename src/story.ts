import type { ImageMetadata } from 'astro';
import basementLogo from './assets/logos/basement.jpeg';
import tritonWebDevLogo from './assets/logos/triton-web-dev.jpeg';
import teamCall from './assets/story/team-call.jpg';

/**
 * Our Story content the founders supply. Every optional item renders nothing in production
 * until it is filled in; on the dev server a dashed placeholder marks the gap.
 * Assert only what is real: no invented events, quotes, press or endorsements.
 */
export const story: {
  groupPhoto?: { src: ImageMetadata; alt: string };
  founderNote?: { text: string[]; by: string };
  milestones: { date: string; name: string }[];
  behindTheScenes?: { src: ImageMetadata; alt: string };
  helpers: { name: string; what: string; url?: string; logo?: ImageMetadata }[]; // logo: square image in src/assets/logos/, shown in a squircle
  press: { outlet: string; title: string; url: string }[];
  mechanicQuote?: { quote: string; name: string; shop: string };
} = {
  milestones: [],
  // Cropped to the video tiles only: the original shows the Meet link, tabs and internal notes.
  behindTheScenes: { src: teamCall, alt: 'RevX teammates on a Google Meet video call.' },
  // Confirmed by the founder 2026-11-24. Supporters, not investors: never say "backed by".
  helpers: [
    { name: 'The Basement @ UCSD', what: 'Helped us get started and connected the founders.', logo: basementLogo },
    { name: 'Triton Web Developers', what: 'Built this website.', logo: tritonWebDevLogo },
  ],
  press: [],
};

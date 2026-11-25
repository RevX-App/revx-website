import type { ImageMetadata } from 'astro';
import type { Stop } from './components/BranchGraph.astro';
import basementLogo from './assets/logos/basement.jpeg';
import tritonWebDevLogo from './assets/logos/triton-web-dev.jpeg';
import teamCall from './assets/story/team-call.jpg';

/**
 * Our Story content the founders supply. Every optional item renders nothing in production
 * until it is filled in; on the dev server a dashed placeholder marks the gap.
 * Assert only what is real: no invented events, quotes, press or endorsements.
 * Press: none yet (2026-11-25). When real coverage exists, add an "In the press" list under Who's helped us.
 */
export const story: {
  groupPhoto?: { src: ImageMetadata; alt: string };
  founderNote?: { text: string[]; by: string };
  founderCar?: { src: ImageMetadata; alt: string }; // the broken car from the founder's note
  milestones: Stop[];
  behindTheScenes?: { src: ImageMetadata; alt: string };
  helpers: { name: string; what: string; url?: string; logo?: ImageMetadata }[]; // logo: square image in src/assets/logos/, shown in a squircle
  mechanicQuote?: { quote: string; name: string; shop: string };
} = {
  // Founder's story, 2026-11-25, summarised from his own words.
  founderNote: {
    text: [
      "When my car's suspension broke, I paid $4,000 for a full replacement because it felt like I had no choice. Later, a friend told me his mobile mechanic charges about half that for the same parts and labor.",
      "Most of us take a quote as it is and end up overpaying, and going to a mechanic is anxious because you never know what's fair. I don't want that to happen to anyone else.",
    ],
    by: 'Mustaqim Bin Burhanuddin, Co-Founder & CTO',
  },
  // Confirmed 2026-11-25. Marketing and recruiting run side by side, then merge into the app-store launch.
  milestones: [
    { name: 'Founded', label: 'Apr 2026', state: 'done', col: 1, lane: 'main' },
    { name: 'Published our promotional website', label: 'Oct 2026', state: 'done', col: 2, lane: 'main' },
    { name: 'Built and launched the web app', label: 'Nov 2026', state: 'done', col: 3, lane: 'main', fork: true },
    { name: 'Marketing', label: 'Dec 2026', state: 'now', col: 4, lane: 'main', parallel: true },
    { name: 'Recruiting mechanics', label: 'Dec 2026', state: 'now', col: 4, lane: 'branch' },
    { name: 'Launch on iOS & Android', label: 'In progress', state: 'next', col: 5, lane: 'main' },
    { name: 'More to come', label: 'Later', state: 'later', col: 6, lane: 'main', last: true },
  ],
  // Cropped to the video tiles only: the original shows the Meet link, tabs and internal notes.
  behindTheScenes: { src: teamCall, alt: 'RevX.website teammates on a Google Meet video call.' },
  // Confirmed by the founder 2026-11-24. Supporters, not investors: never say "backed by".
  helpers: [
    { name: 'The Basement @ UCSD', what: 'Helped us get started and connected the founders.', logo: basementLogo },
    { name: 'Triton Web Developers', what: 'Built this website.', logo: tritonWebDevLogo },
  ],
};

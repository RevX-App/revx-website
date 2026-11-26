import type { ImageMetadata } from 'astro';
import stephPhoto from './assets/steph.jpg';
import piqimPhoto from './assets/piqim.jpg';
import eliotPhoto from './assets/eliot.jpg';
import danielPhoto from './assets/daniel.jpg';
import jayniePhoto from './assets/jaynie.jpeg';

// Visible Home/Our story/Contact and the Organization markup come from this one list.
// Order is the org chart's: founders left to right, then the crew left to right.
// All are current UC San Diego students; `study` is major and class year.
// Schema `founder` is every title containing "found"; everyone else is `employee`.
export const team: {
  name: string;
  photo?: ImageMetadata; // missing = pending; Portrait shows initials
  photoFocus?: string; // object-position when the face isn't centred
  title: string;
  study: string;
  line?: string;
  linkedin?: string;
  site?: string;
}[] = [
  {
    name: 'Mustaqim Bin Burhanuddin',
    photo: piqimPhoto,
    title: 'Co-Founder & CTO',
    study: "Math-CS '28",
    line: 'Product lead; built the app.',
    linkedin: 'https://www.linkedin.com/in/piqim/',
    site: 'https://piqim.com',
  },
  {
    name: 'Stephanie Kovalchuk-Lum',
    photo: stephPhoto,
    title: 'Founder & CEO',
    study: "Cog Sci, UI/UX Design '29",
    line: 'Bridging the gap between drivers and the mechanics they can trust.',
    linkedin: 'https://www.linkedin.com/in/stephaniekovalchuk-lum/',
  },
  {
    name: 'Jaynie Schnell',
    photo: jayniePhoto,
    photoFocus: '58% 22%',
    title: 'Head of Marketing',
    study: "Clinical Psychology '27",
    line: 'Marketing works when you relate.',
    linkedin: 'https://www.linkedin.com/in/jaynie-schnell/',
    site: 'https://jaynie.me',
  },
  {
    name: 'Daniel Zhang',
    photo: danielPhoto,
    title: 'Lead Software Engineer',
    study: "AI '29",
    line: 'Builds the AI diagnosis: rule engine plus multimodal model.',
    linkedin: 'https://www.linkedin.com/in/daniel-zhang-78a2773a4/',
  },
  {
    name: 'Eliot Boda',
    photo: eliotPhoto,
    title: 'Lead Software Engineer',
    study: "CS '28",
    line: 'Polishes the app: the UI details, fixes and finish.',
    linkedin: 'https://www.linkedin.com/in/eliotboda/',
    site: 'https://eliotboda.dev/',
  },
];

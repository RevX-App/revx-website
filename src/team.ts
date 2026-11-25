import type { ImageMetadata } from 'astro';
import stephPhoto from './assets/steph.jpg';
import piqimPhoto from './assets/piqim.jpg';
import eliotPhoto from './assets/eliot.jpg';
import danielPhoto from './assets/daniel.jpg';

// Visible Home/Our story/Contact and the Organization markup come from this one list.
// All are current UC San Diego students; `study` is major and class year.
export const team: {
  name: string;
  photo?: ImageMetadata; // missing = pending; Portrait shows initials
  title: string;
  study: string;
  line?: string;
  linkedin?: string;
  site?: string;
  email?: string;
}[] = [
  {
    name: 'Stephanie Kovalchuk-Lum',
    photo: stephPhoto,
    title: 'Founder',
    study: "Cog Sci, UI/UX Design '29",
    line: 'Bridging the gap between drivers and the mechanics they can trust.',
    linkedin: 'https://www.linkedin.com/in/stephaniekovalchuk-lum/',
    email: 'stefania.ua04@gmail.com',
  },
  {
    name: 'Mustaqim Bin Burhanuddin',
    photo: piqimPhoto,
    title: 'Co-founder',
    study: "Math-CS '28",
    line: 'Product lead; built the RevX app.',
    linkedin: 'https://www.linkedin.com/in/piqim/',
    site: 'https://piqim.com',
    email: 'mbinburhanuddin@gmail.com',
  },
  {
    name: 'Eliot Boda',
    photo: eliotPhoto,
    title: 'Founding Engineer',
    study: "CS '28",
    line: 'Polishes the RevX app: the UI details, fixes and finish.',
    linkedin: 'https://www.linkedin.com/in/eliotboda/',
    site: 'https://eliotboda.dev/',
  },
  {
    name: 'Daniel Zhang',
    photo: danielPhoto,
    title: 'Founding Engineer',
    study: "AI '29",
    line: 'Builds the AI diagnosis: rule engine plus multimodal model.',
    linkedin: 'https://www.linkedin.com/in/daniel-zhang-78a2773a4/',
  },
  {
    name: 'Jaynie Schnell',
    title: 'Head of Marketing',
    study: "Clinical Psychology '27",
    line: 'Marketing works when you relate.',
  },
];

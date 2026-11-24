import type { ImageMetadata } from 'astro';
import stephPhoto from './assets/steph.jpg';
import piqimPhoto from './assets/piqim.jpg';
import eliotPhoto from './assets/eliot.jpg';
import danielPhoto from './assets/daniel.jpg';

// Visible About/Contact and the founder markup come from this one list.
export const founders: {
  name: string;
  photo: ImageMetadata;
  title: string;
  line: string;
  linkedin: string;
  site?: string;
  email?: string;
}[] = [
  {
    name: 'Stephanie Kovalchuk-Lum',
    photo: stephPhoto,
    title: 'Founder',
    line: 'Bridging the gap between drivers and the mechanics they can trust.',
    linkedin: 'https://www.linkedin.com/in/stephaniekovalchuk-lum/',
    email: 'stefania.ua04@gmail.com',
  },
  {
    name: 'Mustaqim Bin Burhanuddin',
    photo: piqimPhoto,
    title: 'Co-founder',
    line: 'Product lead; built the RevX app.',
    linkedin: 'https://www.linkedin.com/in/piqim/',
    site: 'https://piqim.com',
    email: 'mbinburhanuddin@gmail.com',
  },
  {
    name: 'Eliot Boda',
    photo: eliotPhoto,
    title: 'Founding Engineer',
    line: 'Polishes the RevX app: the UI details, fixes and finish.',
    linkedin: 'https://www.linkedin.com/in/eliotboda/',
    site: 'https://eliotboda.dev/',
  },
  {
    name: 'Daniel Zhang',
    photo: danielPhoto,
    title: 'Founding Engineer',
    line: 'Builds the AI diagnosis: rule engine plus multimodal model.',
    linkedin: 'https://www.linkedin.com/in/daniel-zhang-78a2773a4/',
  },
];

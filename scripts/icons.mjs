// Renders the PNG icon set from public/favicon.svg. Run: node scripts/icons.mjs
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const pub = (f) => new URL(`../public/${f}`, import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const svg = readFileSync(pub('favicon.svg'));

// Apple paints transparent pixels black and rounds the square itself.
const jobs = [
  ['favicon-48x48.png', 48, false],
  ['icon-192.png', 192, false],
  ['icon-512.png', 512, false],
  ['apple-touch-icon.png', 180, true],
];

for (const [file, size, opaque] of jobs) {
  let img = sharp(svg, { density: 384 }).resize(size, size);
  if (opaque) img = img.flatten({ background: '#000000' });
  await img.png().toFile(pub(file));
  console.log(`wrote public/${file} (${size}px)`);
}

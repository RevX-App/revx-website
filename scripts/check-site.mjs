// Asserts the built site's structure: shared nav and footer, one current-page link, sitemap, schema placement.
import { existsSync, readFileSync } from 'node:fs';

const NAV = { index: '/', 'how-it-works': '/how-it-works', mechanics: '/mechanics', 'our-story': '/our-story', faq: '/faq', contact: '/contact' };
const ALL = [...Object.keys(NAV), 'privacy', 'terms', 'support'];
const fails = [];
const check = (ok, msg) => ok || fails.push(msg);

for (const page of ALL) {
  const file = `dist/${page}.html`;
  if (!existsSync(file)) {
    fails.push(`${file} missing`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  check(html.includes('class="site-header'), `${page}: no site-header`);
  check(html.includes('class="site-footer'), `${page}: no site-footer`);
  check(!html.includes('data-lamp'), `${page}: still has data-lamp`);
  // A body-level <header> is a banner landmark; the site nav is the only one.
  check(!html.includes('<header class="page-head'), `${page}: page-head is a second banner landmark`);

  // Every <a> carrying aria-current="page", with its href. Astro may emit attributes in any order.
  const current = [...html.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)].map((m) => m[0].match(/href="([^"]*)"/)?.[1]);
  if (page in NAV) {
    // Desktop bar and mobile sheet both mark the page, so allow duplicates of the same href only.
    check(current.length > 0, `${page}: no aria-current="page" link`);
    check(current.every((h) => h === NAV[page]), `${page}: aria-current on ${JSON.stringify(current)}, expected ${NAV[page]}`);
  } else {
    check(current.length === 0, `${page}: legal page marks ${JSON.stringify(current)} as current`);
  }
}

const read = (f) => (existsSync(f) ? readFileSync(f, 'utf8') : '');
check(read('dist/faq.html').includes('"FAQPage"'), 'faq: no FAQPage schema');
check(!read('dist/index.html').includes('"FAQPage"'), 'index: FAQPage schema should live on /faq');
check(read('dist/index.html').includes('"Organization"'), 'index: no Organization schema');
// Founders confirmed scheduling is built; it must not be listed as unbuilt.
check(!/name: ?"?Scheduling|>Scheduling</.test(read('dist/index.html')), 'index: lists Scheduling as not built');
// P2: shared practical Q&A and the three-step journey on Home.
// Vetting moved to the trust section in P3, so Home's practical list is four; /faq keeps all five.
const QA = ['What does it cost?', 'How do I schedule?', 'How do I pay?', 'What happens at the appointment?'];
check(read('dist/faq.html').includes('How are mechanics checked?'), 'faq: missing vetting question');
check(!/<dt[^>]*>How are mechanics checked\?/.test(read('dist/index.html')), 'index: vetting still in practical Q&A');
const STEPS = ['Snap &amp; Diagnose', 'Match &amp; Compare', 'Get Fixed &amp; Review'];
const home = read('dist/index.html');
for (const q of QA) {
  check(home.includes(q), `index: missing Q&A "${q}"`);
  check(read('dist/faq.html').includes(q), `faq: missing "${q}"`);
}
for (const s of STEPS) check(home.includes(s), `index: missing step "${s}"`);
check(!home.includes('data-demo'), 'index: hero demo still present');
// P3: trust section opens with the team, links to the full trust group.
const TRUST = ['Why trust RevX?', 'five UC San Diego students', 'Mechanics are reviewed', 'Quotes you can read', 'Nothing happens without both of you', 'Reviews you can believe', 'Payment and problems', 'href="/faq#trust"', 'Meet the team'];
for (const t of TRUST) check(home.includes(t), `index: trust section missing ${t}`);
// Home owns #trust now; the old-anchor script must not bounce it to another page.
check(!/trust: ?'\/how-it-works/.test(home), 'index: /#trust still redirects away');
check(!home.includes('alumniOf'), 'index: team are current students, not alumni');
check(read('dist/faq.html').includes('id="trust"'), 'faq: no #trust group');
check(read('dist/faq.html').includes('Trust &amp; safety'), 'faq: no Trust & safety heading');
check(read('dist/our-story.html').includes('Jaynie Schnell'), 'our-story: Jaynie missing');
// P4: one recruitment headline on Home and /mechanics; the stock photo and its credit are gone.
const MECH = ['Turn wrenches in San Diego?', 'Keep 100% of your quotes during launch.', 'No lead fees. No pay-to-rank.', 'Join as a founding mechanic', 'A founder reviews every mechanic who signs up.'];
for (const t of MECH) {
  check(home.includes(t), `index: mechanic CTA missing "${t}"`);
  check(read('dist/mechanics.html').includes(t), `mechanics: missing "${t}"`);
}
for (const t of ['Earnings', 'Flexibility', 'Customers', 'Fair access']) check(read('dist/mechanics.html').includes(t), `mechanics: missing "${t}"`);
check(!/Irvin calicut|CC BY-SA|illustrative/.test(read('dist/mechanics.html')), 'mechanics: stock photo or credit still present');
for (const page of ALL) check(!/free forever/i.test(read(`dist/${page}.html`)), `${page}: still promises "free forever"`);
const sitemap = read('dist/sitemap.xml');
for (const path of Object.values(NAV)) check(sitemap.includes(`<loc>https://revx.website${path === '/' ? '/' : path}</loc>`), `sitemap: missing ${path}`);

if (fails.length) {
  console.error(`check-site: ${fails.length} failure(s)\n- ${fails.join('\n- ')}`);
  process.exit(1);
}
console.log('check-site: all assertions pass');

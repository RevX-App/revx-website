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
const sitemap = read('dist/sitemap.xml');
for (const path of Object.values(NAV)) check(sitemap.includes(`<loc>https://revx.website${path === '/' ? '/' : path}</loc>`), `sitemap: missing ${path}`);

if (fails.length) {
  console.error(`check-site: ${fails.length} failure(s)\n- ${fails.join('\n- ')}`);
  process.exit(1);
}
console.log('check-site: all assertions pass');

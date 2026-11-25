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
  // Two nav landmarks (bar + phone sheet) need distinct names.
  const navLabels = [...html.matchAll(/<nav\b[^>]*aria-label="([^"]*)"/g)].map((m) => m[1]);
  check(new Set(navLabels).size === navLabels.length, `${page}: duplicate nav labels ${JSON.stringify(navLabels)}`);
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
const TRUST = ['Why trust RevX.website?', 'five UC San Diego students', 'Mechanics are verified', 'Quotes you can read', 'Nothing happens without both of you', 'Reviews you can believe', 'Payment and problems', 'href="/faq#trust"', 'Meet the team'];
for (const t of TRUST) check(home.includes(t), `index: trust section missing ${t}`);
// Home owns #trust now; the old-anchor script must not bounce it to another page.
check(!/const to = \{[^}]*\btrust:/.test(home), 'index: /#trust still redirects away');
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
// P5: Our Story sections, real titles, and no dev-only placeholder in the build.
const story = read('dist/our-story.html');
for (const t of ["Why we started", "How we're building it", 'The team', "Who's helped us", 'The Basement', 'Triton Web Developers', 'Founder &amp; CEO', 'Co-Founder &amp; CTO', 'Lead Software Engineer', 'Marketing works when you relate.', 'Want to help?'])
  check(story.includes(t.replace("'", '&#39;')) || story.includes(t), `our-story: missing "${t}"`);
for (const page of ALL) check(!read(`dist/${page}.html`).includes('data-placeholder'), `${page}: dev placeholder leaked into the build`);
const org = [...home.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap((m) => [JSON.parse(m[1])].flat()).find((o) => o['@type'] === 'Organization');
check(JSON.stringify(org?.founder?.map((f) => f.name)) === '["Stephanie Kovalchuk-Lum","Mustaqim Bin Burhanuddin"]', `index: founders are ${JSON.stringify(org?.founder?.map((f) => f.name))}`);
// 2026-11-25: five stops; the apps branch off "App live" and merge into the San Diego launch.
for (const t of ['App live in your browser', 'Signing up mechanics', 'iOS &amp; Android apps', 'Launch in the San Diego area', 'Launch across SoCal', 'class="graph"', "We'll mark a stop done only when it's actually running."])
  check(home.includes(t) || home.includes(t.replaceAll("'", '&#39;')), `index: progress strip missing "${t}"`);
for (const gone of ['Verified mechanics', 'OBD-II', 'VIN scanner'])
  check(!home.includes(gone), `index: still lists "${gone}"`);
check(!/OBD|verified mechanics|insurance/i.test(read('dist/llms.txt')), 'llms.txt: still lists unbuilt features');
check(!read('dist/our-story.html').includes('class="press-slot'), 'our-story: empty press slot ships to production');
// One shared inbox; founders' personal addresses stay off the public site.
check(read('dist/contact.html').includes('revxtheapp@gmail.com'), 'contact: shared inbox missing');
for (const page of ALL) check(!/stefania\.ua04@|mbinburhanuddin@/.test(read(`dist/${page}.html`)), `${page}: personal email exposed`);
check(read('dist/faq.html').includes('years of experience'), 'faq: vetting answer lacks what profiles show');
// Persona pass (2026-11-25): phone line, owner expectations, plain mechanic copy, investors, damage answer.
for (const page of ['index', 'mechanics', 'contact']) check(read(`dist/${page}.html`).includes('href="tel:+16197805799"'), `${page}: no call/text line`);
check(home.includes('Post today, and we&#39;ll match you as mechanics near you sign up.') || home.includes("Post today, and we'll match you as mechanics near you sign up."), 'index: no owner expectation line');
const mech = read('dist/mechanics.html');
for (const t of ['Free to join', 'How to join', 'no download', 'how far you']) check(mech.includes(t), `mechanics: missing "${t}"`);
check(!mech.includes('service radius'), 'mechanics: still says "service radius"');
const contact = read('dist/contact.html');
for (const t of ['For investors', 'raising', 'id="investors"']) check(contact.includes(t), `contact: missing "${t}"`);
check(read('dist/our-story.html').includes('href="/contact#investors"'), 'our-story: investor row not linked to #investors');
check(read('dist/faq.html').includes('damaged'), 'faq: no damage/insurance answer');
// Renamed to RevX.website (2026-11-25): no bare "RevX" left in visible text, and the wordmark carries the suffix.
for (const page of ALL) {
  const text = read(`dist/${page}.html`).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, '');
  check(!/\bRevX\b(?!\.website)/.test(text), `${page}: visible text still says "RevX"`);
  check(read(`dist/${page}.html`).includes('class="tld'), `${page}: wordmark missing .website`);
}
// The rename also covers attributes (alt, aria-label, title, meta content) and JSON-LD.
// Allowed on purpose: the old name as a search alias, and the share image's alt (that image still shows "RevX").
const bare = /\bRevX\b(?!\.website|-App)/; // RevX-App is the real GitHub org
for (const page of ALL) {
  const html = read(`dist/${page}.html`);
  const attrs = [...html.matchAll(/\b(?:alt|aria-label|title|content)="([^"]*)"/g)].map((m) => m[1]).filter((v) => !v.startsWith('RevX wordmark under'));
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1].replace(/"alternateName":\[[^\]]*\]/g, ''));
  for (const v of [...attrs, ...ld]) check(!bare.test(v), `${page}: attribute or JSON-LD still says "RevX": ${v.slice(0, 80)}`);
}
const llms = read('dist/llms.txt');
check(!bare.test(llms.replace('(formerly RevX)', '').replace('named "RevX"', '')), 'llms.txt: bare "RevX" outside the formerly/disambiguation notes');
check(llms.includes('(formerly RevX)') && !llms.includes('formerly RevX.website'), 'llms.txt: should say "formerly RevX"');
const homeOrg = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => [JSON.parse(m[1])].flat()).find((o) => o['@type'] === 'Organization');
check(JSON.stringify(homeOrg?.alternateName) === '["RevX","RevX car repair"]', `index: alternateName is ${JSON.stringify(homeOrg?.alternateName)}`);
// Our Story 2026-11-25: dated branch timeline, founder's story, no press section, Jaynie's site.
for (const t of ['Published our promotional website', 'Built and launched the web app', 'Recruiting mechanics', 'Launch on iOS &amp; Android', 'More to come', '$4,000', 'jaynie.me', 'class="graph"'])
  check(story.includes(t), `our-story: missing "${t}"`);
check(!story.includes('In the press'), 'our-story: press section is back without press');
for (const page of ALL) check(!/free forever/i.test(read(`dist/${page}.html`)), `${page}: still promises "free forever"`);
check(!/free forever/i.test(read('dist/llms.txt')), 'llms.txt: still promises "free forever"');
const sitemap = read('dist/sitemap.xml');
for (const path of Object.values(NAV)) check(sitemap.includes(`<loc>https://revx.website${path === '/' ? '/' : path}</loc>`), `sitemap: missing ${path}`);

if (fails.length) {
  console.error(`check-site: ${fails.length} failure(s)\n- ${fails.join('\n- ')}`);
  process.exit(1);
}
console.log('check-site: all assertions pass');

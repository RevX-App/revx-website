# P1: Multi-page site and persistent nav Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the one-page RevX site into six routes that share a dark-green persistent nav (with a clear active state and the crossed-wrench mark) and a shared footer.

**Architecture:** `Base.astro` becomes the one deep module. Its props stay the same (`title`, `description`, `noindex`, `schema`), and it now renders the header, the footer and the active state from the URL, so pages learn nothing new. Existing section markup, data and scoped CSS move as-is into the page that owns them. There are no per-section wrapper components, because each section is used once and a wrapper would be a pass-through. CSS used by several pages moves to `global.css`. P1 is structure only; copy rewrites are P2–P6.

**Tech Stack:** Astro 7 (static, `build.format: 'file'`, `trailingSlash: 'never'`), plain CSS, Vercel `cleanUrls`.

**Spec:** `docs/superpowers/specs/2026-11-24-website-priorities.md` (sections "P1" and "Contact")

## Global Constraints

- Nav order: crossed-wrench mark + RevX wordmark (links `/`) · How It Works · For Mechanics · Our Story · FAQ · Contact · Open RevX (`APP_URL`). No "Home" text link.
- Routes: `/`, `/how-it-works`, `/mechanics`, `/our-story`, `/faq`, `/contact`. `/privacy`, `/terms` and `/support` keep their URLs.
- Bar background `#172C29`; links white; hover lime `#D9F266`; current page lime + 2px lime underline + `aria-current="page"`.
- Hamburger sheet below 960px, same green. Touch targets ≥ 2.75rem (existing `--target`).
- Lime is a fill or appears on dark only (DESIGN.md "Lime Is A Fill Rule"). No coloured glows. Nothing animates on its own.
- No new dependencies.
- Copy is unchanged in P1 apart from labels and links that the move breaks.

## Review Focus

1. **Old deep links** (`revx.website/#mechanics`, `/#faq` shared on socials or in pitch decks): visitors land on the matching new page, not the top of Home. Pinned in Task 3 Step 6.
2. **375px phone:** no horizontal scroll, the menu opens and closes by tap and keyboard, and the logo plus menu button fit on one row. Pinned in Task 4 Step 2.
3. **Keyboard focus on the green bar:** the focus ring is visible against `#172C29`. Pinned in Task 2 Step 3.
4. **Legal pages:** `/privacy`, `/terms` and `/support` get the shared nav without keeping their old duplicate wordmark link. Pinned by the check script (Task 1).
5. **Structured data:** `FAQPage` JSON-LD lives only on `/faq`, and `Organization` stays on `/`. Pinned by the check script.

---

### Task 1: Build-output check script

**Files:**
- Create: `scripts/check-site.mjs`
- Modify: `package.json` (add script)

**Interfaces:**
- Produces: `npm run check`, which runs `astro build` and then `node scripts/check-site.mjs`. It exits 1 and lists every failed assertion.

- [ ] **Step 1: Write `scripts/check-site.mjs`** using `node:fs` and `node:assert` only. It reads `dist/<route>.html` (`index.html` for `/`) and collects every failure before exiting:

```js
const NAV = { index: '/', 'how-it-works': '/how-it-works', mechanics: '/mechanics', 'our-story': '/our-story', faq: '/faq', contact: '/contact' };
const ALL = [...Object.keys(NAV), 'privacy', 'terms', 'support'];
// for every page in ALL: file exists; contains 'class="site-header' and 'class="site-footer'; no 'data-lamp'
// for every page in NAV: exactly one aria-current="page", on an <a> whose href === NAV[page]
// legal pages: zero aria-current="page"
// faq.html includes '"FAQPage"'; index.html does not; index.html includes '"Organization"'
// dist/sitemap.xml contains a <loc> for each NAV path (6 total)
```

- [ ] **Step 2: Add `"check": "astro build && node scripts/check-site.mjs"` to `package.json` scripts**

- [ ] **Step 3: Run `npm run check`**
Expected: FAIL, listing missing pages, missing `site-header` and `site-footer`, and `data-lamp` present.

- [ ] **Step 4: Commit** `git add scripts/check-site.mjs package.json && git commit -m "Add a build-output check for the multi-page site"`

---

### Task 2: Logo mark, dark-green header, shared footer in Base

**Files:**
- Create: `src/assets/revx-mark.svg`, from `src/assets/spanners_main_logo_white_bg.svg` with the full-canvas white `<rect>` removed and `#D3F447` → `#D9F266`. Keep `viewBox`; title "RevX".
- Create: `src/nav.ts` (replaces `src/sections.ts`, which is deleted)
- Rewrite: `src/components/SiteHeader.astro`
- Create: `src/components/SiteFooter.astro` (markup + `.foot` styles moved from `src/pages/index.astro:596-609` and its CSS)
- Modify: `src/layouts/Base.astro` (render `<SiteHeader />`, `<slot />`, `<SiteFooter />`)
- Modify: `src/components/LegalPage.astro` (drop its own wordmark home link, line 16)
- Modify: `src/pages/index.astro` (drop its `<SiteHeader />`, footer markup and footer CSS)

**Interfaces:**
- Produces: `export const NAV: { href: string; label: string }[]` in `src/nav.ts`, in the Global Constraints order (5 entries, without Home or Open RevX).
- Produces: `Base` props unchanged. Pages must not render `SiteHeader` or the footer themselves.
- Active path: in `SiteHeader`, `const path = Astro.url.pathname.replace(/(index)?\.html$/, '').replace(/\/$/, '') || '/'`, the same normalisation `Base.astro` uses for canonical. A link is current when `href === path`. The logo link is current on `/`.

- [ ] **Step 1: Run `npm run check`**
Expected: FAIL (pages missing). The header and footer assertions fail for `index` and the legal pages.

- [ ] **Step 2: Create the mark and `nav.ts`, rewrite `SiteHeader.astro`**
- Mark: import with Astro's SVG component import (`import Mark from '../assets/revx-mark.svg'`), shown at 2.25rem next to `<Wordmark size="1.6rem" />`. Wordmark text is white on the bar (override `.rev` colour via a header-scoped `:global`), and the X stays lime.
- `<nav aria-label="Main">` holds an `<ul>` of NAV links, then `.btn-primary` "Open RevX".
- Below 960px: hide the inline list and CTA, and show the existing `<details class="menu">` pattern. The summary is labelled "Menu" with an `aria-label`, and the sheet background is `#172C29`. The sheet holds the same links (with the same `aria-current`) and the Open RevX button at full width.
- Delete the lamps, the progress strip and the whole `<script>` block. No JS remains in the header.
- Keep `position: sticky; top: 0; z-index: 30`.

- [ ] **Step 3: Style the states.** Links `#fff` at rest, `#D9F266` on hover. `[aria-current="page"]` is lime with `box-shadow: inset 0 -2px 0 #D9F266` (no layout shift). Focus: `outline: 2px solid #D9F266; outline-offset: 3px` inside the header.

- [ ] **Step 4: Create `SiteFooter.astro`.** It reuses the existing `.foot` markup, puts the same `revx-mark.svg` next to the footer wordmark so the mark appears consistently, and adds a second `<nav aria-label="Pages">` with the NAV links, keeping the existing `aria-label="Legal"` nav. Root class `site-footer foot`.

- [ ] **Step 5: Wire `Base.astro` and clean `LegalPage.astro` and `index.astro`**

- [ ] **Step 6: Run `npm run check`**
Expected: header and footer assertions pass for `index`, `privacy`, `terms` and `support`, with no `data-lamp`. The new-route and sitemap assertions still fail.

- [ ] **Step 7: Commit** `git commit -am "Replace the scroll lamps with a dark-green site nav and shared footer"` (also `git add` the new files, and `git rm src/sections.ts`)

---

### Task 3: Split the homepage into six routes

**Files:**
- Create: `src/components/PageHead.astro`, `src/founders.ts`, `src/pages/how-it-works.astro`, `src/pages/mechanics.astro`, `src/pages/our-story.astro`, `src/pages/faq.astro`, `src/pages/contact.astro`
- Modify: `src/pages/index.astro`, `src/styles/global.css`, `src/pages/sitemap.xml.ts:4`, `public/llms.txt:26-28`, `src/components/Hero.astro` (any `#section` hrefs)

**Interfaces:**
- Produces: `PageHead` props `{ title: string; lede?: string }`. It renders `<header class="page-head">` on `#172C29` with white `<h1>` and lede, padding `clamp(2.5rem, 6vw, 4.5rem)` block, inside `.wrap`. This is the dark-green band from the spec.
- Produces: `export const founders` in `src/founders.ts` (the array and its type moved from `index.astro`, including photo imports). `index.astro` uses it for the `Organization` schema, and `our-story` and `contact` use it for display.

Where each piece moves (markup + its data + its CSS block from `index.astro`):

| Section | Destination | `<h1>` via PageHead |
|---|---|---|
| `#how` + `intake`/stage data + "How it works" CSS | `how-it-works.astro` | "How RevX works" |
| `#trust` + "Trust" CSS | `how-it-works.astro`, below `#how`, `id="trust"` kept | — |
| `#mechanics` + `mechSpec` + "Mechanics" CSS | `mechanics.astro` | "For mechanics" |
| `#about` + "About" CSS | `our-story.astro` | "Our story" |
| `#contact` + copy-email `<script>` + "Contact" CSS | `contact.astro` | "Contact" |
| `#faq` + `faq` data + `FAQPage` schema + "FAQ" CSS | `faq.astro` | "FAQ" |
| Hero, `#vision`, `.close` | stay in `index.astro` (P2 and P6 rewrite these) | — |

`contact.astro` also gets a short "Need help with the app?" block above the founders' panel, linking to `/support`. The founders' panel is retitled "Investing, press, partners?" (per the spec's Contact section).

Each moved section's `<h2>` becomes the PageHead `<h1>` and its old `sec-head` is dropped, so each page has one `h1`.

- [ ] **Step 1: Move shared CSS to `global.css`.** These rules are used on more than one page: `section` padding, `main > section + section` rule, `h2`, `h3`, `.sec-head`, `.lede`, `.panel-glass`, `.panel-title`, `.panel-note`, `.split`. Copy them unchanged, minus `:global()` wrappers.
- [ ] **Step 2: Create `PageHead.astro` and `founders.ts`**
- [ ] **Step 3: Create the five pages per the table.** Each is `<Base title="…" description="…"><PageHead …/><main>…</main></Base>`. Titles: "How it works", "For mechanics", "Our story", "FAQ", "Contact". Each description is one sentence lifted from that section's existing lede.
- [ ] **Step 4: Trim `index.astro`** to Hero, `#vision`, `.close`, plus the `Organization` and `WebSite` schema. Delete the moved data, markup and CSS, and remove unused imports.
- [ ] **Step 5: Fix links.** `grep -rn 'href="#\|href={`#' src` → old anchors point to their new routes (e.g. Hero's mechanic link → `/mechanics`). `sitemap.xml.ts` PATHS = the 6 NAV paths. `llms.txt` "Pages" lists each new page with a one-line summary.
- [ ] **Step 6: Old-anchor redirect.** Add an inline `<script is:inline>` at the top of `index.astro`:

```js
const to = { how: '/how-it-works', trust: '/how-it-works#trust', mechanics: '/mechanics', about: '/our-story', contact: '/contact', faq: '/faq' }[location.hash.slice(1)];
if (to) location.replace(to);
```

Manual check after build: `npm run preview`, open `/#mechanics` → lands on `/mechanics`, and `/#vision` stays on Home.

- [ ] **Step 7: Run `npm run check`**
Expected: PASS, all assertions.

- [ ] **Step 8: Commit** `git add -A src public && git commit -m "Split the landing page into How it works, Mechanics, Our story, FAQ and Contact pages"`

---

### Task 4: Visual verification and docs

**Files:**
- Modify: `PRODUCT.md` (Capabilities: scheduling and founder review built; commission none now, planned later; "Single page" → six pages; founding-mechanic wording per spec), `DESIGN.md` (header and nav section: replace the lamp nav with the green bar and its states; record the mark asset), `.impeccable/surfaces/src-pages-index-astro.md` (note that signature interaction 1 is retired, 2026-11-24)

- [ ] **Step 1: `npm run check`**, expected PASS.
- [ ] **Step 2: Screenshots** with `impeccable shot` on `/`, `/how-it-works` and `/faq` at 375px and 1440px. Check: no horizontal scroll at 375; the mark is crisp with no white halo; the current page underline is visible; the menu opens and links work; tabbing shows the lime focus ring on the bar. Fix what one look shows before looking again.
- [ ] **Step 3: Update the three docs**
- [ ] **Step 4: Commit** `git commit -am "Record the multi-page nav in PRODUCT and DESIGN docs"`
- [ ] **Step 5: Push the branch and open the PR** (branch `p1-multipage-nav`).

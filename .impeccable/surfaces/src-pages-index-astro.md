---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/Hero.astro","src/components/SiteHeader.astro"]
---

## Scope

Home page of the RevX landing site (single page, plus placeholder /privacy and /terms). Mode: Persuade.

## Audience and action

Vehicle owners and mechanics around UCSD / San Diego, equal standing; pitch judges read over their shoulder. Primary action: Open RevX (hosted web app, URL is a placeholder constant). Mechanics take the same link; the founding-mechanic offer is "first 100 mechanics free forever". No store badges ("coming to iOS & Android").

## Proof and content

Demo loop with fictional seeded personas (Sam P., Gina L. / Triton Auto), labelled as a demo. AI disclaimer mirrored from the app. Roadmap shown as unlit lamps, no figures. Team and traction are placeholder slots, visibly marked.

## User steer

User chose the cluster but asked that category-standard elements come into it: the garage hero photo, a plain headline with two clear CTAs, a phone/app view, and a how-it-works sequence, all rendered in cluster vocabulary.

## Linear restructure (user-approved, 2026-10-22)

A ui-ux-pro-max review found the page non-linear and overwhelming. The user approved this order: hero, how it works (3 stages), trust, mechanics, roadmap, UCSD (launch + traction + team placeholders, compact and visible), close. The hero demo is click-to-advance only, the dials are removed, and the header lamps become sticky scroll-progress navigation with a menu below 640px. Headings sit on one left edge, labels are 14px or larger, and the CTAs are reduced.

## Direction contract

THESIS: The page is an instrument cluster. RevX is the moment the check-engine lamp comes on and you finally get a real readout. It refuses the category arrangement of garage photo + headline + two buttons + phone mockup + three feature cards.

OWN-WORLD: The RevX app palette (src/styles/palette.css), dark-only until a light-mode redesign, hero on #172C29. Lime (#D9F266) for lit lamps and the primary action, with #3D6554 standing in for lime as text on light. Urgent (#FF6B42) only for warning tell-tales. Red only for "stop driving". Barlow / Barlow Condensed (California-plate DIN lineage) with tabular numerals. Bezels as thin rules, dial arcs with tick scales, and LCD message-centre panels. State vocabulary: unlit, lit, warning, dimmed-not-wired. The chosen cause or quote is solid and lit; alternates are dashed and dim. Ranked items step down strictly by size.

STORY: The visitor reads one direction, top to bottom: what RevX is, how it works in three stages (post & diagnose, both sides choose, done & reviewed blind), why to trust it, trusts it from the mechanisms (blind reviews, snapped location, honest AI disclaimer), sees the roadmap as lamps not wired yet, then opens RevX as an owner or as a founding mechanic.

FIRST VIEWPORT: A sticky header carries the wordmark, five section lamps (How it works, Trust, Mechanics, Roadmap, UCSD) that light as you scroll, and Open RevX. The hero is a 5/6 split. Left: the H1 "The mechanic at your door.", the lede, Open RevX (primary) plus a quiet "I'm a mechanic" link, and the platforms line. Right: the message-centre panel with a seven-lamp step row, the step title, the LCD screen resting on Diagnose, and a Next button. The garage photo sits behind as a dim backdrop.

FORM: Instrument cluster, position 7 of the ordered grounded list (raised by indoor-sun palette commitment, sewing-pattern solid/dashed state, zoot billing hierarchy, one-bit state vocabulary, Fletcher demonstrating-object leads). seed:d814220abff297f3. Signature interactions: (1) the header lamps as scroll progress (passed sections accent-rimmed, the current one lit); (2) a click-to-advance message-centre demo of the seven-step loop (lamps or Next), with a draggable swipe card. Nothing moves on its own.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Multi-page split (user-approved, 2026-11-24)

The site became six pages under a dark-green persistent nav (see DESIGN.md "Navigation: Site Header"). Signature interaction (1), header lamps as scroll progress, is retired. The instrument-cluster world otherwise stays. This brief now covers Home only; P2 rewrites it around the customer journey and removes the hero demo.

## Unresolved

Final web app URL, team names, real traction, legal text, custom domain.

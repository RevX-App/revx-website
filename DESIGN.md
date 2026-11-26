---
name: RevX
description: The mechanic at your door. An instrument cluster in the RevX app palette for a two-sided repair marketplace.
colors:
  bg: "#121413"
  panel: "#1c1f1e"
  sand: "#2a2e2c"
  rule: "#3a3f3c"
  rule-strong: "#4a504d"
  unlit: "#5c635f"
  heading: "#edefeb"
  body: "#cdd3cf"
  muted: "#a6aea9"
  accent: "#d9f266"
  on-accent: "#172c29"
  accent-edge: "#c5de4a"
  accent-text: "#d9f266"
  accent-wash: "#2a3015"
  urgent: "#ff6b42"
  on-urgent: "#172c29"
  urgent-text: "#ff8a68"
  error: "#f87171"
  brand-deep: "#172c29"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  panel-heading:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.02
  readout:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 700
    fontFeature: "tnum"
  reading-lead:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.1
  value:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    fontFeature: "tnum"
  item:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
  reading:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  button-compact:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  nav-label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  tag: "4px"
  row-tight: "0.4rem"
  row: "0.5rem"
  screen: "0.9rem"
  sheet: "1.25rem"
  panel: "1.5rem"
  bezel: "1.75rem"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 8vw, 7rem)"
  container: "82rem"
  header: "4.25rem"
  target: "2.75rem"
  panel-pad: "clamp(1.25rem, 3vw, 2rem)"
  split-gap: "clamp(2rem, 5vw, 5rem)"
  head-gap: "clamp(2.5rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-text}"
    textColor: "{colors.on-accent}"
  button-primary-compact:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-compact}"
    rounded: "{rounded.pill}"
    height: "{spacing.target}"
  button-ghost:
    textColor: "{colors.heading}"
    typography: "{typography.button-compact}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
    height: "{spacing.target}"
  menu-toggle:
    textColor: "{colors.heading}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: "0 0.9rem"
    height: "{spacing.target}"
  menu-sheet:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body}"
    rounded: "{rounded.sheet}"
    padding: "0.75rem"
    width: "18rem"
  lamp-off:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.muted}"
    rounded: "{rounded.circle}"
  lamp-done:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.accent}"
    rounded: "{rounded.circle}"
  lamp-on:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.circle}"
  lamp-warning:
    backgroundColor: "{colors.urgent}"
    textColor: "{colors.on-urgent}"
    rounded: "{rounded.circle}"
  lamp-not-wired:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.muted}"
    rounded: "{rounded.circle}"
    size: "{spacing.target}"
  instrument-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-pad}"
  message-centre:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body}"
    rounded: "{rounded.bezel}"
    padding: "clamp(1.1rem, 2.2vw, 1.75rem)"
  screen:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.heading}"
    rounded: "{rounded.screen}"
    padding: "1.1rem 1.2rem"
  reading-row-lead:
    textColor: "{colors.heading}"
    typography: "{typography.reading-lead}"
    rounded: "{rounded.row}"
  reading-row-alternate:
    textColor: "{colors.muted}"
    typography: "{typography.reading}"
    rounded: "{rounded.row}"
  chip:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.heading}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.7rem"
  chip-hypothesis:
    textColor: "{colors.muted}"
    typography: "{typography.small}"
    rounded: "{rounded.row-tight}"
    padding: "0.2rem 0.7rem"
  disclaimer-strip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.urgent}"
    padding: "1rem clamp(1.5rem, 3vw, 2.5rem)"
  placeholder-tag:
    textColor: "{colors.urgent}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.15rem 0.55rem"
  start-button:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.heading}"
    rounded: "{rounded.circle}"
    size: "8.5rem"
---

# Design System: RevX

## Overview

**Creative North Star: "The Instrument Cluster"**

Every RevX surface is a dashboard: thin bezel rules, tick scales, and message-centre screens, lit by one lime accent, in the app's palette. Content is presented as readouts, not marketing blocks. A step in a process is a lit bulb; a ranked list is a set of readings where the lead is lit and the alternates sit dashed and muted; something not built yet is a lamp with no wire behind it.

The system runs on a state vocabulary that every component speaks: **off** (sand fill, unlit rim, muted glyph), **done** (sand fill, accent-text rim and glyph), **on** (flat lime bulb, on-accent glyph), **warning** (flat urgent bulb, on-urgent glyph), and **not wired / sealed** (dashed rim). Solid means chosen, confirmed, or live. Dashed means alternate, sealed, pending, placeholder, or not built. The page reads in one direction, top to bottom, with headings on one left edge; density is that of a cluster, compact readouts inside generous margins.

Photography is allowed only as a dim backdrop behind the glass (the hero garage at 0.4 opacity over black, masked to transparent below its midpoint) or as a framed image inside an instrument screen. Depth comes from soft, long drop shadows under panels, never from glow. Nothing moves on its own: every state change follows scroll position or a click.

**Key Characteristics:**
- The app's warm neutral ramp in light and dark; lime carries every lit state and the primary action.
- Barlow Condensed for everything printed on the dash (headings, legends, readings, numerals, buttons); Barlow for prose; tabular numerals everywhere.
- Five lamp states (off, done, on, warning, not wired) and a solid/dashed distinction reused across the demo, ranked readings, quotes, seals, roadmap and placeholders.
- Circles for anything that lights up; nested rounded rectangles for glass and screens; pills for buttons, chips and the menu toggle.
- Motion is mechanical and user-driven: bulbs light over 0.3s, screens settle from a slight blur over 0.4s, all on one long ease-out.

## Colors

The palette mirrors `src/theme/palette.js` in the RevX app repo, which stays the source of truth; its dark values are drafts until the designer decides. Every colour lives in `src/styles/palette.css` as `light-dark(light, dark)`. The site ships dark-only for now: `:root` sets `color-scheme: dark`, and the light values wait for a light-mode redesign. Setting `color-scheme` on an element flips its subtree. Frontmatter lists the dark values.

| Token | Light | Dark | Job |
|---|---|---|---|
| bg | #fbfbf8 | #121413 | Page ground, screens inset in panels |
| panel | #ffffff | #1c1f1e | Instrument panels, cards, menu sheet |
| sand | #eceee9 | #2a2e2c | Lamp fills, filled chips, the roadmap band |
| rule | #e0e3dc | #3a3f3c | Dividers and screen borders |
| rule-strong | #d4d8d4 | #4a504d | Panel outlines, dashed alternates, the privacy grid |
| unlit | #b4bab5 | #5c635f | Unlit and sealed lamp rims, unlit progress segments |
| heading | #172c29 | #edefeb | Headings, lit readout values, "Rev" (the "X" is ink on light, lime on dark) |
| body | #28463f | #cdd3cf | Prose |
| muted | #5c6762 | #a6aea9 | Ledes, captions, legends, off-lamp glyphs |
| accent | #d9f266 | #d9f266 | Lit lamps, primary button, owner chat bubble, selection |
| on-accent | #172c29 | #172c29 | Text and glyphs on lime |
| accent-edge | #c5de4a | #c5de4a | Primary button hover |
| accent-text | #3d6554 | #d9f266 | Lime's job as text, icons, rims, needles, links, focus rings |
| accent-wash | #f5f9e3 | #2a3015 | Lead reading tint, snapped cell, founding-mechanic frame, close band |
| urgent | #ff6b42 | #ff6b42 | Lit warning lamps |
| on-urgent | #172c29 | #172c29 | Glyphs on urgent |
| urgent-text | #c74424 | #ff8a68 | Warning readouts, locks, the AI disclaimer strip, placeholder tags |
| error | #b91c1c | #f87171 | The exact-location point in the privacy grid |
| brand-deep | #172c29 | #172c29 | Favicon tile |

### Named Rules
**The Lime Is A Fill Rule.** Lime carries dark text and never appears as text on a light ground. Anything that needs lime's meaning as a line or letter uses accent-text.

**The One Accent Rule.** Lime is the only colour that means "lit". If something is on, chosen, current, or the primary action, it is lime; nothing else competes for that job.

**The Signal Reserve Rule.** Urgent means caution or unresolved; error means private or stop. Neither is ever decoration, a brand accent, or a hover colour.

**The Dark Hero Rule.** The hero sets `color-scheme: dark` on a black ground in both themes, because the garage photo needs a dark backdrop.

## Typography

**Display Font:** Barlow Condensed (with Barlow, system-ui)
**Body Font:** Barlow (with system-ui)

**Character:** A California-plate, DIN-lineage pairing: the condensed cut is what is printed on the dash, the regular cut is what you read in the manual. Tabular numerals are on globally so readouts and prices align like gauges.

### Hierarchy
- **Display** (800, clamp(3rem, 6vw, 5.5rem), 0.92): the single H1, in the hero copy column.
- **Headline** (800, clamp(2.25rem, 4.4vw, 4rem), 1.02): section H2s, every one on the container's left edge.
- **Title** (700, clamp(1.5rem, 2.2vw, 2rem)): the stage H3s in How it works.
- **Panel Heading** (700, 1.5rem): headings that live inside an instrument: the demo's step title and the trust panel's H3s.
- **Readout** (700, clamp(1.25rem, 1.8vw, 1.5rem)): stat values and the lead verdict on a readout.
- **Reading Lead** (700, 1.375rem): the lead cause in the demo, the match pair, the mechanic job title.
- **Value** (700, 1.25rem): quote prices and spec-sheet terms.
- **Item** (600 to 700, 1.125rem): roadmap lamp names, route stop names and the founder title line.
- **Reading** (600 to 700, 1.0625rem): alternate causes and trace step names; the size a lead steps down from.
- **Lede** (400, clamp(1.0625rem, 1.3vw, 1.25rem), muted, 52ch max): the paragraph under a section headline. The hero lede sits in body over the photo, 40ch max.
- **Body** (400, 1.0625rem, 1.6): prose in body or muted, 52 to 56ch.
- **Small** (400, 0.9375rem): captions, panel titles, chips, the demo note, the step counter, footer text.
- **Button** (700, 1.125rem, 0.06em, uppercase): primary button labels and the quiet "I'm a mechanic" link. **Button Compact** (1rem) is the header CTA and the demo's Next.
- **Nav Label** (600, 1rem, 0.06em, uppercase): header page links and the menu toggle.
- **Label** (600, 0.875rem, 0.08em, uppercase): printed legends on readouts and placeholder tags. Nothing on the page is set smaller.

### Named Rules
**The Printed Legend Rule.** Uppercase condensed caps label a reading inside an instrument (a readout term, a lamp, the menu toggle, a placeholder tag). They never float above a section headline as a kicker.

**The Billing Rule.** Ranked readings are billed by rank: the lead is set a step larger, in heading, and lit; alternates are smaller and muted; a ruled-out reading is struck through in muted.

**The Label Floor Rule.** Label (0.875rem) is the smallest text role. No legend, caption or tag goes below it.

## Layout

One centred container (82rem max, fluid gutter clamp(1rem, 4vw, 3.5rem)) and a fluid section rhythm (clamp(4rem, 8vw, 7rem) block padding). Sections are separated by 1px rules, not background blocks; the only tinted bands are the hero (black), the roadmap (sand) and the close (an accent-wash radial rising from the lower right). Section heads sit on one left edge, 46rem max, with clamp(2.5rem, 5vw, 4rem) below them. The site is six pages under one nav: Home (hero, roadmap, close), How it works (stages, trust), For mechanics, Our story, FAQ and Contact. Inner pages open on a page-head band in brand green (#172C29) carrying the single H1 and a lede; only Home has the garage hero.

**Header.** Sticky, 4.25rem tall, on brand green: crossed-wrench mark and wordmark left (the home link), five page links and a compact Open RevX right.

**Hero.** A 5/6 split, copy left (H1, lede, actions, platforms line) and the message centre right, vertically centred, gap clamp(2rem, 5vw, 5rem). The garage photo fills the section behind both.

**How it works.** Three staged rows, each a 5/7 split of copy (lit stage lamps, H3, prose) and an instrument panel, aligned to the top, rows spaced clamp(3.5rem, 7vw, 6rem) apart.

**Trust.** One wide instrument panel split 1.4/1 by a vertical strong rule (privacy left, ratings right), with the disclaimer strip spanning its base.

**Mechanics.** A 7/5 split; the mechanic's-side panel is sticky at 6rem from the top.

**Roadmap.** An auto-fill grid of not-wired lamps, 13rem minimum columns, then the milestone route in five equal columns. **About.** Four founder gauges in four equal columns, each topped by a strong rule, no boxes. **Contact.** A 5/7 split: section head left, message-centre screen right, vertically centred. **Close.** Headline left, start button right.

**Breakpoints.**
- **960px:** the header links and CTA give way to a "Menu" pill toggle and a green menu sheet carrying the same links and a full-width Open RevX.
- **1000px:** every split stacks to one column: hero (message centre capped at 40rem), stages, mechanics (panel unstuck, 28rem max), contact and close. The founder gauges go to two columns and the route turns vertical, its wire running down the left. The trust panel stacks and its divider turns horizontal.
- **640px:** hero actions stretch, demo field grids go to one column and readout grids to two, the Next label drops its destination, the seal sequence turns vertical, spec rows stack, the roadmap goes to two columns, founder gauges and contact lines go to one.

## Elevation & Depth

Panels sit forward on soft, long drop shadows in the --shadow colour (deep green in light, black in dark), with a 1px inner highlight on the top edge; nothing glows. Lit state is a flat fill, as in the app, not an outer bloom.

### Shadow Vocabulary
- **Panel glass** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05), 0 24px 36px -24px var(--shadow)`): every instrument panel below the hero.
- **Message centre** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05), 0 30px 60px -24px var(--shadow)`): the hero instrument, the one panel lifted further forward.
- **Menu sheet** (`box-shadow: 0 24px 50px -20px var(--shadow)`): the dropdown section menu.
- **Backlit key** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35), 0 6px 16px -6px var(--shadow)`): the primary button only.
- **Start button** (`box-shadow: inset 0 0 0 6px var(--bg), 0 18px 36px -12px var(--shadow)`): a recessed ring inside a lime gradient border.

### Named Rules
**The No-Bloom Rule.** Light lives inside a shape (fill, coloured rim, coloured glyph). Shadows use --shadow and fall downward; they are never bright.

## Shapes

Anything that lights up or turns is a circle: the crossed-wrench mark (2.25rem in the header), demo step lamps (2.25rem bulbs in 2.75rem targets), stage lamps (2.5rem), seals, rating lamps, roadmap lamps and swipe buttons (2.75rem), route stops (2.75rem), copy lamps (1.9rem), founder portraits (5rem), the 8.5rem start button. Glass is a softly rounded rectangle, nested so the radius tightens inward: the message-centre bezel (1.75rem) holds a screen (0.9rem) holds reading rows (0.4rem). Below the hero, instrument panels round at 1.5rem; the menu sheet and founding-mechanic frame at 1.25rem; padded reading rows, quotes and seals at 0.5rem; single-line rows and hypothesis chips at 0.4rem. Buttons, filled chips and the menu toggle are full pills. Placeholder tags and focus rings use a 4px corner.

Strokes are thin: 1px rules and panel outlines, 1.5px lamp rims and scale lines, 1.75px icon strokes on a 24px grid with round caps. Dashed strokes carry meaning (alternate, sealed, placeholder, not wired) and are never ornament.

## Components

### Buttons
- **Shape:** full pill (999px), 3rem minimum height; compact buttons drop to the 2.75rem target.
- **Primary:** lime fill, on-accent label, backlit-key shadow, padding 0.7rem 1.4rem, condensed uppercase label. Hover lifts to accent-edge.
- **Ghost:** transparent with a strong-rule border and heading label; hover turns the border lime. Used for the demo's Next.
- **Quiet link:** condensed uppercase heading text with a trailing arrow, no box; hover turns accent-edge. The secondary hero action.
- **Press:** buttons translate down 1px on `:active`. Transitions run 0.2s on the shared ease-out.
- **Focus:** a 2px lime outline offset 3px with a 4px corner, global to every focusable element.

### Navigation: Site Header
Every page shares one sticky header on brand green (#172C29). Left: the crossed-wrench mark (`src/assets/revx-mark.svg`, derived from the founder's `spanners_main_logo_white_bg.svg` with the white canvas removed and its lime set to #D9F266) beside the wordmark, white "Rev" and lime "X"; it links Home. Right: How It Works, For Mechanics, Our Story, FAQ, Contact in nav-label type, then Open RevX. Links are white, lime on hover; the current page is lime with a 2px inset lime underline and `aria-current="page"`, set from the URL with no script. Focus is a 2px lime outline at 3px offset. At 960px and below the links fold into a pill "Menu" toggle and a green sheet. The footer repeats the mark, the page links and the legal links on every page.

### Message Centre (signature)
The hero instrument: a bezel-radius glass panel holding a seven-lamp step row, the step title with an "n of 7" counter, a screen, and a footer with the demo note and Next. It rests on Diagnose (the one warning lamp, urgent). Advancing is click-only: a lamp, Next, arrow keys, or a drag of the swipe card. Each screen fades in from a 3px blur over 0.4s. Inside the screen: printed legends over ink values, ranked causes, a swipe card with two round buttons (pass in muted, right in lime), chat bubbles with a 0.2rem speech tail, quote rows, lime checks, and dashed sealed reviews with urgent locks.

### Stage Rows
Each How it works stage leads with its loop lamps lit (lime, or urgent for Diagnose) at 2.5rem, then the stage H3 and body prose, beside an instrument panel. The first panel is an AI trace: a strong-rule spine with lime dots, filled chips (facts the user supplied), dashed chips (hypotheses), ranked verdicts, and a stat row over a rule.

### Instrument Panels
- **Corner Style:** panel (1.5rem) below the hero; bezel (1.75rem) for the message centre.
- **Background:** flat panel.
- **Shadow Strategy:** panel glass (see Elevation).
- **Border:** 1px strong rule.
- **Internal Padding:** clamp(1.25rem, 3vw, 2rem). A small muted panel title sits on top.

### Trust Instruments (signature)
- **Snapped grid:** a 6 by 4 grid of strong-rule cells, one snapped cell tinted and outlined in lime, the exact point a red dot inside it.
- **Distance scale:** a half-mile tick scale from 0 to 5 (strong-rule minors, muted majors with condensed numerals) with a lime arrow needle at 2.5.
- **Review-release lamps:** two lit lime lamps and one dashed sealed lamp with an urgent lock; the public rating waits for the third.
- **Seal sequence:** two dashed sealed lamps, an arrow, two solid lime lamps: sealed until both reviews are in, released together.

### Ranked Readings (signature)
Causes, verdicts and quotes. The lead row has a solid 1px lime border, an 8 percent lime tint and a larger size; alternates have a 1px dashed strong-rule border and muted text; a ruled-out reading is struck through in muted. A counter numeral precedes each cause, lime on the lead.

### Chips
- **Filled:** pill, sand, heading text, small size. Facts the user supplied.
- **Hypothesis:** row-tight corner, dashed strong-rule border, muted text. Candidates not yet checked.

### Disclaimer Strip
A full-width screen band at the base of a panel: bg fill, strong-rule top border, urgent text with a leading glyph. Carries the AI disclaimer.

### Not-wired Lamps
Roadmap entries: a 2.75rem sand circle with a dashed muted rim and muted glyph beside a muted item name.

### Milestone Route
The road to launch, under the not-wired lamps and never tied to them. Each stop is a 2.75rem circle in a lamp state: **done** (accent-text rim, lime check), **now** (lit lime bulb, on-accent pin, `aria-current="step"`), **next** (sand fill, dashed unlit rim, no glyph). A wire joins each stop to the next: solid accent-text after a done stop, dashed unlit ahead. Below each stop, the name in display weight (muted when next) and a printed legend (Done / Now / Next, lime on Now), so state never rests on colour alone.

### Founder Gauges
About section entries: a 5rem done-lamp portrait (accent-text rim around the founder's grayscale photo), then name (display, 1.625rem), title (muted display), one line of body prose (32ch max) and text links to LinkedIn and a personal site in 2.75rem targets. No card boxes.

### Founders' Line (contact screen)
A message-centre screen (bg fill, rule border, 0.9rem corner) inside instrument glass. One row per founder: a printed legend (name and title), the email in lime display type as a mailto link, and a ghost pill copy button with a 1.9rem lamp. The lamp is unlit at rest and lights lime only on a successful click; the label changes to Copied and a polite live region announces it. Nothing in the panel moves on its own.

### Placeholder Tag
Dashed urgent 1px border, 4px corner, urgent label caps. Marks content that must be replaced before launch.

### Start Button
The closing action: an 8.5rem circle with an accent to accent-text gradient ring, a flat panel face, "OPEN" in 800-weight heading caps and "REVX" in lime at 0.24em tracking. Scales to 1.03 on hover and 0.98 on press.

## Do's and Don'ts

### Do:
- **Do** express every status through the lamp states: off, done (lime rim), on (lime bulb), warning (urgent bulb), not wired (dashed, dim).
- **Do** draw the chosen or confirmed item solid and lit, and its alternates dashed and muted.
- **Do** bill ranked items by rank: the lead larger and in heading, alternates smaller and muted.
- **Do** put lit text in that light's ink (on-accent #172c29 on lime, on-urgent #172c29 on urgent).
- **Do** use Barlow Condensed caps for anything printed on an instrument and keep tabular numerals on for every readout and price.
- **Do** nest radii inward (1.75rem bezel, 0.9rem screen, 0.4rem row) and make anything that lights a circle.
- **Do** keep every interactive target at least 2.75rem and every text role at least 0.875rem.
- **Do** keep motion on the one ease-out (cubic-bezier(0.16, 1, 0.3, 1)) and drive every state change from scroll or a click.

### Don't:
- **Don't** use urgent or red for anything but caution and private or stop.
- **Don't** add coloured glows or outer blooms; light fills shapes and shadows stay dark and soft.
- **Don't** use a dashed stroke as decoration; dashed always means alternate, sealed, placeholder or not built.
- **Don't** place uppercase legends above section headlines as kickers; legends label instrument readings only.
- **Don't** show photography at full strength behind content; it is a dim masked backdrop or an image framed inside a screen.
- **Don't** put white text on a lit lime or urgent surface.
- **Don't** auto-advance or autoplay anything; the visitor drives the demo.

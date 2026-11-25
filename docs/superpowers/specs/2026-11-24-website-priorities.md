# RevX website priorities: agreed decisions

Source: marketing team's six priorities, grilled with the founder on 2026-11-24.
Rule over everything: **assert only what runs.**

## Product truths (confirmed by founder)

- **Consent is the principle:** both sides match, both agree to take the job, both confirm, both review.
- **Pricing:** mechanic and owner discuss in chat; the mechanic sends quotes in the app; they agree on one.
- **Scheduling:** appointments are set in the app with both parties' agreement. (Built. `PRODUCT.md` was wrong.)
- **Payment:** directly between owner and mechanic. In-app payments and escrow are roadmap.
- **Verification:** mechanics sign up; founders review each one. Mechanics may optionally attach licenses and certifications. **No verified badge or marker exists in the app**; never say "verified badge".
- **Arrival / shop visit:** both confirm the job in the app, then both leave reviews.
- **Commission:** none now, during launch. A commission is planned later, likely alongside escrow.
- **Account deletion** exists in the app (Profile → Account & Security → Delete account).

## Copy rules

- Mechanic headline: "Turn wrenches in San Diego? Keep 100% of your quotes during launch." Support: "No lead fees. No pay-to-rank. Connect with drivers who need your expertise." The FAQ says plainly that a commission may come later with in-app payments.
- "First 100 mechanics free forever" is replaced with founding-status wording, e.g. "Founding mechanics: the first 100 sign-ups get founding status and the best terms we ever offer."
- Verification copy: "Founders review every mechanic who signs up. Mechanics can add licenses and certifications to their profile."

## P1: navigation and branding

- Real routes: `/`, `/how-it-works`, `/mechanics`, `/our-story`, `/faq`, `/contact`. Keep `/privacy`, `/terms`, `/support`.
- Old `/#how`-style links still land somewhere. URL fragments never reach the server, so a small script on `/` handles them, not `vercel.json`.
- Keep the instrument-cluster visual world (palette, Barlow, panels). Retire only the scroll-progress header lamps. Update `DESIGN.md` rather than replace it.
- Nav: `[crossed-wrench mark + RevX wordmark] · How It Works · For Mechanics · Our Story · FAQ · Contact · [Open RevX]`. The logo is Home; there is no "Home" text link.
- Bar `#172C29`, white links, lime `#D9F266` hover; the current page is lime with a 2px lime underline and `aria-current="page"`. Below ~960px, a hamburger sheet in the same green.
- Header mark: `spanners_main_logo_white_bg.svg` with its white background removed and its lime recoloured `#D3F447` → `#D9F266`. The black-background file stays the app/favicon source.
- Only Home keeps the garage-photo hero; inner pages open on a compact dark-green band (title + one line).
- Header and footer live in `Base.astro`, so every page (legal included) gets the same nav and footer (page links + Privacy, Terms, Support).

## P2: homepage

- Delete the hero's interactive seven-step demo; Home shows one real screenshot instead.
- Home order: hero → 3-step journey (Snap & Diagnose / Match & Compare / Get Fixed & Review, ≤2 sentences each, real screenshots) → practical Q&A (pricing, verification, scheduling, payment, arrival/shop visit) → Why Trust RevX → mechanic CTA → progress strip → closing CTA.
- Technical detail (rule engine, Mia's eliminated causes, blind-review timing, location snapping) moves to How It Works or the FAQ.
- Screenshots: Claude creates two real accounts on the live app (plus-addresses on the founder's email), captures the screens, and deletes both accounts in-app right after. The founder approves the screenshots before they ship.

## P3: trust

- Compact "Why Trust RevX?" on Home: vetting, quote transparency, mutual consent and accountability, blind reviews, payment and disputes. Each links to a full Trust group at `/faq#trust`. No protections that aren't operational.
- The section opens with the team (marketing, 2026-11-24): five UC San Diego students, with small portraits linking to `/our-story`. Origin, in the founder's words: shared bad mechanic experiences, realising too late there were more options, and wanting to help people avoid that.
- Team: Stephanie Kovalchuk-Lum (Cog Sci, UI/UX Design '29), Mustaqim Bin Burhanuddin (Math-CS '28), Eliot Boda (CS '28), Daniel Zhang (AI '29), Jaynie Schnell, Head of Marketing (Clinical Psychology '27; photo pending). All are current students, so the markup says `affiliation`, not `alumniOf`.
- Five items: Mechanics are reviewed · Quotes you can read (itemized, frozen once sent) · Nothing happens without both of you · Reviews you can believe (hidden until both submit, public after 3 reviews, private price-vs-quote feedback) · Payment and problems (paid directly, RevX can't refund yet, report/block or email support, 24-hour review target).
- No testimonials until real ones exist, with the reviewer's consent.
- `/faq` splits into "Trust & safety" (`#trust`) and "Everything else". "How are mechanics checked?" moves from Home's practical bits to the trust group.

## P4: mechanic recruitment

- High-contrast CTA using the headline above. Emphasise earnings, flexibility, customer acquisition, fair access. Move the photo credit off the promo card to a credits spot.
- Decided 2026-11-24: a full-lime band on Home after "Why trust RevX?", with the headline, support line and "Join as a founding mechanic" (to `/app`). `/mechanics` opens with the same headline, which comes from one shared constant.
- `/mechanics` four lines: Earnings · Flexibility · Customers · Fair access (copy approved in chat), replacing the three spec rows.
- The illustrative job card and its Wikimedia brake photo are replaced by the real mechanic swipe screen, so no photo credit is needed anywhere.
- Founding status: no counter, no end date. Under the button: "A founder reviews every mechanic who signs up." (No turnaround promised.)

## P5: Our Story

- Page structure built now, with clearly marked placeholders; the founders write the story. Uses the team photos (Jaynie's pending).
- Decided 2026-11-24. Order: Why we started → How we're building it → So far (milestones) → The team → Who's helped us → mechanic quote → Want to help?
- Titles: Stephanie Founder & CEO, Mustaqim Co-Founder & CTO, Eliot and Daniel Lead Software Engineer, Jaynie Head of Marketing ("Marketing works when you relate."). Only the two founders go under schema `founder`.
- Helped by, live now: The Basement @ UCSD (helped us get started and connected the founders) and Triton Web Developers (built this website). Never "backed by".
- Slots the founders fill: group photo, one quote per person, founder's note, milestones, first-mechanic quote (Our Story and /mechanics), press, behind-the-scenes photo. An empty slot shows a dashed placeholder on the dev server only and renders nothing in production; check-site fails if a placeholder reaches `dist/`.
- Origin copy is limited to the founder's words: shared bad mechanic experiences, finding out too late there were better options.

## P6: roadmap

- Remove the unbuilt-feature list from the public site. A progress strip on Home: mechanic onboarding **Now**, UCSD/La Jolla launch **Next**, Greater San Diego + mobile apps **Later**. Nothing is marked live until it is operationally confirmed.

## Contact

- `/contact` splits into "Need help with the app?" (links to `/support`) and "Investing, press, partners?" (founders' emails).

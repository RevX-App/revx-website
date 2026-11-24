# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static-first; islands only where interactivity is needed). Hosted as its own Vercel project, separate from the app's Expo web deploy. No secrets, no backend.

## Users

The landing site serves two equal audiences, plus a third reading over their shoulder:

- **Vehicle owners** (cars and motorcycles) around UCSD and San Diego who have a problem with their vehicle and don't know who to trust to fix it.
- **Mechanics**: independent mobile mechanics, students doing side work, and small shops in San Diego who want jobs that match their specialties without paying for leads.
- **Pitch judges and investors** evaluating the UCSD founding team for a pitch competition. They are served by the vision and team sections, not a separate path.

## Product Purpose

RevX is a two-sided vehicle-repair marketplace with AI diagnosis. An owner posts a problem through a structured five-step intake, then gets an AI read on it. Owners and mechanics swipe on each other for that post. A reciprocal right-swipe makes a match, and the two sides chat, quote, run the job, and leave blind reviews. Success for the landing site is a visitor understanding that loop within seconds and opening the web app, either as an owner or as a founding mechanic.

## Positioning

Between Tinder's discovery loop and TaskRabbit's marketplace mechanics, built for car culture. What neighbours can't truthfully copy:

- **Bidirectional matching**: mechanics choose the jobs they want; owners choose who they trust.
- **Structured intake feeding a real model**: the questions a good mechanic asks, turned into structured data plus photo and optional audio, then sent to Gemini. The output is a plain-English explanation, ranked likely causes, severity, urgency and a USD cost band. A deterministic rule engine proposes hypotheses first, and the model confirms or rules them out.
- **No pay-per-lead bias.**
- **Blind reviews** with a 3-review minimum before public ratings.
- **Privacy by construction**: precise coordinates never leave the server. Others see a snapped ~0.7-mile area and distance banded to 0.5 mi. Only the matched mechanic gets the job-site point.

## Operating Context

The core loop is Post → Diagnose → Swipe → Match → Chat & quote → Job → Review. Problem categories are Mechanical, Computer/ECU, Modification and Cosmetic. Alongside the loop sit a GPS map of nearby mechanics and posts and a Reddit-style community (ranked feed, brand/topic groups, votes, threaded comments, moderation). Launch is San Diego, centred on UCSD.

## Capabilities and Constraints

Built and live (v0.1.1): AI diagnosis (multimodal; on by default with an owner opt-out; returns explanation, ranked causes, severity, urgency up to "stop driving", a confidence level and a USD cost band; posting never waits on it, per handoff §1), structured intake, mechanic-only technical briefing, two-way swiping, multiple quotes per post, realtime chat, job tracking (honor system, both confirm), blind reviews, location privacy, map, community, push notifications (match, message, job completed), and iOS/Android/web builds.

Not built. Never imply these exist; they may appear only as labelled roadmap: payments/escrow/Stripe, background checks, verified-mechanic badges, insurance, VIN scanner, OBD-II Bluetooth, image/voice messages in chat, Pro subscriptions, Instant Book, e-bikes/scooters.

Constraints:
- **No App Store / Play Store badges.** The apps are not public. Copy may say "coming to iOS & Android".
- **Primary CTA opens the hosted web app.** That URL is not final, so it lives in one config constant as a placeholder. Mechanics use the same link and sign up as a Mechanic account.
- **The roadmap is shown and labelled as roadmap, with no figures.** No Pro pricing, commission, or funding numbers.
- **AI disclaimer is mirrored from the app:** "AI-generated from your photos and answers… not a substitute for a hands-on inspection." Diagnosis is never called certified or guaranteed.
- Six pages (Home, How it works, For mechanics, Our story, FAQ, Contact) under one persistent nav, plus Privacy, Terms and Support. No analytics.
- **Confirmed by the founders (2026-11-24):** appointments are scheduled in the app with both parties' agreement, and mutual consent runs the whole loop (both match, both agree to the job, both confirm, both review). Quotes are discussed and sent in chat, and owner and mechanic agree on one. Payment happens directly between owner and mechanic; in-app payments and escrow are roadmap. Founders review every mechanic sign-up, and mechanics may optionally attach licenses and certifications; the app shows **no** verified marker. RevX takes no commission during launch; a commission is planned later, likely with escrow.

## Brand Commitments

- Name **RevX**. Wordmark: "Rev" bold + "X" extra-bold with tight tracking, heading colour + accent text (lime on dark). It is text, recreated in HTML/CSS. The favicon is a lime `#D9F266` X on `#172C29`.
- Tagline in the app: *"The mechanic at your door."*
- App palette: lime `#D9F266` with `#172C29` ink, warm neutrals, urgent `#FF6B42`, in light and dark. `src/theme/palette.js` in the app repo is the source of truth, its dark values are drafts until the designer decides, and the site mirrors it in `src/styles/palette.css`.
- Voice: direct and plain-English, car-culture literate, honest about limits.

## Evidence on Hand

- `welcome-hero.png` from the app repo (RevX-App/RevX, `prod-branch`, `assets/`): a dark garage with a black sedan front-on and amber headlights.
- `assets/icon.png` in the app repo is the stock Expo template icon, **not** a RevX mark. Do not use it.
- No device screenshots exist yet. UI mockups on the site are authored, illustrative, and labelled as such.
- Demo personas (fictional, from `scripts/seed.mjs`): Sam P. (owner, brake-grinding post), Gina L. of "Triton Auto" (mechanic, UCSD, mechanical + computer/ECU, 12 mi radius), Mia, Jay.
- **Team:** placeholder cards only. Names, roles and consent are pending.
- **Traction:** placeholder entries only, visibly marked as placeholders (e.g. pitch placements, mechanics signed, beta users). Never present them as real.
- "First 100 mechanics free forever" is retired: commissions are planned, so "forever" would be broken. Use founding-status wording instead (e.g. "the first 100 sign-ups get founding status and the best terms we ever offer").

## Product Principles

1. **Assert only what runs.** Every claim traces to a built feature. The vision is labelled as vision.
2. **Both sides choose.** Owners and mechanics get equal standing in story and calls to action.
3. **Real data over vague noise.** Show the structured intake and diagnosis doing their job, not adjectives about them.
4. **Trust is engineered, not asserted.** Blind reviews, the review minimum and location snapping are mechanisms to show.
5. **Local first.** San Diego and UCSD are the launch, said plainly.

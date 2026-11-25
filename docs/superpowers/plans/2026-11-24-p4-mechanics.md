# P4: Mechanic recruitment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** A high-contrast lime recruitment band on Home, and `/mechanics` rebuilt around the same headline, four approved lines and a real app screen.

**Architecture:** `MECHANIC_PITCH` (headline, support, cta, note) in `src/config.ts` feeds both pages. `/mechanics` reuses `swipe.png`. `disc-brake.jpg` and its credit are deleted.

**Tech Stack:** Astro 7, plain CSS. **Spec:** `docs/superpowers/specs/2026-11-24-website-priorities.md` (P4).

## Global Constraints

- Copy exactly as approved. No counter, no end date, no review turnaround.
- Lime band text uses `--on-accent`. The button inverts to dark on lime and keeps a ≥44px target.

## Review Focus

1. Contrast of text and button on the lime band (AA).
2. Focus ring visible on lime (the default lime outline would vanish).
3. 375px: the headline wraps without overflow.
4. No orphan reference to `disc-brake` after the delete.
5. `/mechanics` H1 is the headline, and Home's band uses an H2.

### Task 1
- [ ] check-site assertions (P4 block). `npm run check` → FAIL.
- [ ] Add `MECHANIC_PITCH`, the Home band, and the `/mechanics` rewrite. Delete the photo. `npm run check` → PASS.
- [ ] Screenshots at 1440 and 375. Commit, push, PR with base `p3-trust`.

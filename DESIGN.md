# Matej Parizek Portfolio Design System

## 1. Atmosphere & Identity

A calm engineering notebook: precise, candid, and evidence-led. The signature is a warm editorial canvas structured by strong rules, numbered sections, and compact technical annotations; credibility comes from work history and project detail rather than decorative effects.

## 2. Color

| Role | Token | Light | Dark | Usage |
|---|---|---|---|---|
| Canvas | `--paper` | `#f3f0e8` | `#171714` | Page background |
| Raised canvas | `--paper-raised` | `#faf8f2` | `#20201c` | Inputs and selected rows |
| Ink | `--ink` | `#20201c` | `#f0ede4` | Headlines and body |
| Muted ink | `--ink-muted` | `#6d6960` | `#aaa59a` | Metadata and supporting copy |
| Rule | `--rule` | `#cbc5b8` | `#46423a` | Dividers and focus boundaries |
| Accent | `--accent` | `#9d3f2b` | `#d9785f` | Links, focus, selected states |
| Accent strong | `--accent-strong` | `#762c1e` | `#ef947d` | Hover and active states |
| Error | `--error` | `#9b2c22` | `#ff8f80` | Form errors |
| Success | `--success` | `#2f6650` | `#77c69f` | Submission confirmation |
| Field surface | `--field-surface` | `transparent` | `#d8d4ca` | Contact form controls |
| Field ink | `--field-ink` | `#20201c` | `#26241f` | Text inside contact form controls |
| Field rule | `--field-rule` | `#767168` | `#6f6a61` | Contact form control boundaries |
| Contrast surface | `--contrast-surface` | `#20201c` | `#20201c` | Background and education section |
| Contrast ink | `--contrast-ink` | `#f3f0e8` | `#f0ede4` | Text on the contrast section |
| Contrast muted | `--contrast-muted` | `#aaa59a` | `#aaa59a` | Supporting copy on the contrast section |
| Contrast rule | `--contrast-rule` | `#5a564e` | `#46423a` | Dividers on the contrast section |

Rules: color is semantic, never ornamental. The oxide accent is reserved for interaction and small wayfinding marks. There are no decorative gradients, glows, or translucent surfaces.

## 3. Typography

| Level | Size | Weight | Line height | Tracking | Usage |
|---|---|---|---|---|---|
| Display | `clamp(2.75rem, 8vw, 7.5rem)` | 500 | 0.92 | `-0.055em` | Hero statement |
| H1 | `clamp(2.25rem, 5vw, 4.75rem)` | 500 | 0.98 | `-0.04em` | Section titles |
| H2 | `clamp(1.4rem, 2.5vw, 2.25rem)` | 500 | 1.1 | `-0.025em` | Project and role titles |
| H3 | `1.125rem` | 600 | 1.3 | `-0.01em` | Expertise headings |
| Lead | `clamp(1.125rem, 2vw, 1.5rem)` | 400 | 1.55 | `-0.01em` | Introductions |
| Body | `1rem` | 400 | 1.65 | `0` | Default copy |
| Small | `0.875rem` | 400 | 1.5 | `0` | Metadata |
| Label | `0.75rem` | 500 | 1.35 | `0.08em` | Section numbers and labels |

- Primary: `"IBM Plex Sans", "Segoe UI", sans-serif`.
- Mono: `"IBM Plex Mono", "SFMono-Regular", Consolas, monospace`.
- Use mono only for metadata, dates, and technical annotations.
- Paragraphs stay below 68 characters; headings use balanced wrapping.

## 4. Spacing & Layout

Base unit: 4px. Tokens: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-6` 24px, `--space-8` 32px, `--space-10` 40px, `--space-12` 48px, `--space-16` 64px, `--space-20` 80px, `--space-24` 96px, `--space-32` 128px.

- Max width: `--content-max: 80rem`; reading width: `--measure: 42rem`.
- Desktop: 12-column grid with a narrow annotation rail and broad content field.
- Mobile: one column, 20px inline gutters, section metadata above content.
- Breakpoints are content-driven near 48rem and 68rem. No primary horizontal scrolling.
- Sections use asymmetric rhythm: compact introductions followed by generous lower whitespace.

## 5. Components

### Site header
- Structure: identity link, role descriptor, anchor navigation, theme control.
- States: solid canvas at rest; accent underline on hover/current; visible outline on focus.
- Layout: horizontal cluster above 48rem, compact identity plus menu below.
- Accessibility: semantic `header`/`nav`, skip link precedes it, 44px minimum controls.

### Text action
- Structure: text, optional directional arrow.
- Variants: primary accent, quiet ink, external.
- States: underline/arrow shift on hover, 1px press translation, strong focus outline, muted disabled.
- Motion: 140ms transform/color; removed under reduced motion.

### Section frame
- Structure: numbered label rail plus titled content region.
- Variants: standard, compact, closing.
- Accessibility: semantic section with labelled heading; source order matches reading order.

### Evidence row
- Structure: metadata, title, concise proof, technology line, optional expandable detail/actions.
- States: tonal shift on hover/focus-within, accessible native `details` expansion.
- Layout: two-column row on desktop, single readable column on mobile.

### Contact form
- Structure: labelled native controls, inline errors, submit status.
- States: default, hover, focus, invalid, submitting, success, error, disabled.
- Accessibility: labels stay visible, errors use `aria-describedby`, status uses `aria-live`.

## 6. Motion & Interaction

- Micro: 140ms ease-out for links, buttons, and controls.
- Standard: 220ms ease-in-out for navigation and disclosure state.
- No scroll-triggered reveals, parallax, counters, floating actions, or decorative loops.
- Only transform, opacity, color, and background-color transition.
- `prefers-reduced-motion: reduce` disables smooth scrolling and transitions.

## 7. Depth & Surface

Strategy: borders-only with tonal shifts. Structure comes from 1px rules, whitespace, and typography. No box shadows, card elevation, glass, blur, or border-radius above 4px.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- WCAG 2.2 AA target: 4.5:1 body contrast, 3:1 large text and UI boundaries.
- Every interaction is keyboard reachable with visible `:focus-visible` treatment.
- Touch targets are at least 44px; layout remains usable at 200% zoom and 375px width.
- Respect reduced motion and color-scheme preferences; color never carries meaning alone.
- Form errors are plain-language, field-associated, and recoverable.

### Accepted Debt

None. Any unresolved accessibility issue blocks completion rather than entering debt silently.

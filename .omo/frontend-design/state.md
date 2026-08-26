# Frontend Design State

## Current Objective

Redesign the portfolio into a professional, technically credible Backend Software Engineer profile while preserving factual source content and existing contact behavior.

The English CV at `public/assets/Matej_Parizek_Resume.pdf` is the primary factual source; the Czech CV is the cross-check.

## Locked Decisions

- Warm editorial engineering aesthetic; light/dark modes share the same restrained system.
- Experience, selected projects, technical expertise, and contact lead the information hierarchy.
- No glass, gradients, glow, badge clouds, fake terminals, decorative animation, or SaaS card grids.
- Existing React/Vite/Tailwind stack only; no new dependencies or dev-tooling packages.

## Design Brief

- Primary visitors: engineering managers, backend leads, and technical recruiters.
- Primary journey: understand backend focus, verify commercial experience, inspect representative projects, make contact.
- Tone: specific, direct, modest; improve clarity without inventing achievements.
- Inclusive personas: keyboard-only reviewer; low-vision visitor at 200% zoom; motion-sensitive visitor; mobile recruiter scanning quickly.
- Success: all personas can reach evidence and contact details without hidden content or motion burden.

## Adaptive Preferences

System color scheme initializes theme; explicit theme control persists choice. Reduced motion disables transitions and smooth scrolling. Layout supports 375px, 768px, 1280px, and 200% zoom.

## Verification Matrix

- Production build.
- Fresh screenshots at 375px, 768px, and 1280px.
- Keyboard navigation, theme toggle, project disclosures, resume link, contact validation/status.
- Independent design-system/functional and visual/accessibility review.

## Design Debt Register

None accepted.

## Evidence Index

- `.omo/evidence/portfolio-redesign/final-build-result.md` — successful final production build result.
- `.omo/evidence/portfolio-redesign/desktop-1280.png` — final desktop surface.
- `.omo/evidence/portfolio-redesign/tablet-768.png` — final tablet surface.
- `.omo/evidence/portfolio-redesign/mobile-375.png` — final mobile surface without horizontal overflow.
- `.omo/evidence/portfolio-redesign/mobile-menu-open.png` — mobile navigation state.
- `.omo/evidence/portfolio-redesign/mobile-dark.png` — dark mobile navigation state.
- `.omo/evidence/portfolio-redesign/mobile-dark-full.png` — complete dark-theme page.
- Browser checks cover legacy/current anchors, theme, disclosure, invalid form associations, visible focus, and console state.

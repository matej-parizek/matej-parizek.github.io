# LANDING PAGE KNOWLEDGE BASE

## OVERVIEW

Single-page portfolio composition: section-specific rendering lives in `components/`, while shared navigation and controls remain outside this feature directory.

## STRUCTURE

- `index.jsx` owns document metadata, smooth-scroll setup, and the page composition.
- Active order: `HeroSection` (`hero`), `AboutSection` (`about`), `SkillsSection` (`skills`), `ProjectsSection` (`projects`), `ExperienceSection` (`experience`), `ContactSection` (`contact`).
- `FooterSection` follows `main`; `SectionNavigator`, `ScrollProgressIndicator`, and `ContactFloatingAction` wrap the page-level content.
- `components/` contains section implementations plus dormant `TestimonialsSection`, `ServicesSection`, and `PreviewBanner` files.
- Testimonials and Services are currently commented out in `index.jsx`; they are not part of the rendered page or active navigation.

## WHERE TO LOOK

| Task | Location | Notes |
|---|---|---|
| Change active sections or order | `index.jsx` | Keep JSX order, section IDs, and navigation anchors aligned. |
| Change hero CTA or resume behavior | `components/HeroSection.jsx` | Preserve the existing user edit in this file. |
| Change portfolio content rendering | `components/AboutSection.jsx`, `SkillsSection.jsx`, `ProjectsSection.jsx`, `ExperienceSection.jsx` | These consume storage data; section-specific interaction state stays local. |
| Change contact form or contact cards | `components/ContactSection.jsx` | Form submission crosses the EmailJS utility seam. |
| Change footer links or social actions | `components/FooterSection.jsx` | Quick links target the same section IDs as the navigator. |
| Change global navigation/scroll primitives | `src/components/ui/SectionNavigator.jsx` and sibling controls | Shared UI boundary; do not copy these controls into this directory. |

## CONVENTIONS

- Treat `id="hero"`, `about`, `skills`, `projects`, `experience`, and `contact` as public anchors. `SectionNavigator` and footer quick links depend on them.
- `useStorage()` is the content seam: Hero reads `hero`, `projects`, `experiences`; About reads `about`, `experiences`; Skills reads `skills`; Projects reads `projects`; Experience reads `experiences`; Contact reads `contactMethods`.
- Keep editable portfolio facts in `src/store/data/`; keep section layout, animation state, filtering, modal state, and form state in the matching component.
- Use shared primitives from `src/components/` and `src/components/ui/` for controls; add a local component only when behavior is landing-page-specific.
- `ContactSection` calls `initEmail()` on mount and submits through `sendEmail(formData)` from `src/utils/send-email.js`; preserve that seam and its environment-backed configuration.
- Re-enabling a dormant section requires both its import/render entry in `index.jsx` and matching navigation/footer anchors; do not activate one side alone.
- Keep existing smooth-scroll behavior and explicit cleanup in `index.jsx`; section navigation assumes an 80px header offset.

## ANTI-PATTERNS

- Do not reorder active sections or rename their IDs without updating `SectionNavigator`, footer quick links, and scroll-to-contact callers together.
- Do not duplicate storage data as new literals inside sections when the corresponding `useStorage()` slice already exists.
- Do not call EmailJS directly from the form or inline its keys; `send-email.js` is the integration boundary.
- Do not move shared navigation, progress, or floating-action controls into `components/` here.
- Do not uncomment Testimonials/Services (or PreviewBanner) without restoring their complete composition and anchor contract.
- Do not overwrite or reformat `HeroSection.jsx` in unrelated work; its current user edit is intentional.

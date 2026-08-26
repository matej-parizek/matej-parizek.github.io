# PROJECT KNOWLEDGE BASE

**Generated:** 2026-08-24 19:22 +02:00  
**Commit:** aeca1a1  
**Branch:** try-fix

## OVERVIEW

Single-page portfolio built with React 18, Vite 5, Tailwind CSS 3, React Router, and EmailJS. Content is static JavaScript data exposed through a React context; there is no backend or automated test suite.

## STRUCTURE

```text
./
├── src/                         # Browser application; see src/AGENTS.md
├── public/                      # Deploy-as-is assets, resume, manifest, SPA redirects
├── .github/workflows/static.yml # GitHub Pages build and deployment
├── index.html                   # Vite HTML entry
├── vite.config.js               # React plugin and source aliases
└── vite.config.mjs              # Competing Rocket/Vite server and output settings
```

## WHERE TO LOOK

| Task | Location | Notes |
|---|---|---|
| Change routes or providers | `src/Routes.jsx`, `src/App.jsx` | `StorageProvider` wraps the router |
| Edit landing-page content | `src/store/data/` | Keep the existing `expirience.js` spelling in imports |
| Edit landing-page layout | `src/pages/landing-page/` | Local instructions apply |
| Change reusable controls | `src/components/`, `src/components/ui/` | Shared beyond individual page sections |
| Change theme tokens | `src/styles/tailwind.css`, `tailwind.config.js` | Dark mode uses the `class` strategy |
| Change contact delivery | `src/utils/send-email.js` | Requires five `VITE_EMAILJS_*` variables |
| Change deployment | `.github/workflows/static.yml` | Node 20; GitHub Pages artifact is `dist/` |

## CODE MAP

LSP and callable code-graph services were unavailable during generation; references are import-trace estimates, not measured language-server counts.

| Symbol | Type | Location | Refs | Role |
|---|---|---|---:|---|
| `App` | component | `src/App.jsx` | 1 | Root provider/router composition |
| `Routes` | component | `src/Routes.jsx` | 1 | Browser routing, error boundary, scroll reset |
| `LandingPage` | component | `src/pages/landing-page/index.jsx` | 2 routes | Main page composition |
| `StorageProvider` | provider | `src/store/useStorage.jsx` | 1 | Publishes all portfolio data |
| `useStorage` | hook | `src/store/useStorage.jsx` | 5+ sections | Main content-data seam |
| `AppIcon` | component | `src/components/AppIcon.jsx` | many | Most reused visual primitive |
| `Button` | component | `src/components/ui/Button.jsx` | many | Shared interactive primitive |
| `sendEmail` | async function | `src/utils/send-email.js` | 1 | EmailJS integration boundary |

## CONVENTIONS

- Use npm and the committed `package-lock.json`; CI installs with `npm install` on Node 20.
- Source is JavaScript/JSX, not TypeScript. Components are functional components with hooks.
- Imports may use `components/...`, `pages/...`, or `@/...` aliases from `vite.config.js`; `jsconfig.json` also resolves from `src`.
- Styling is primarily Tailwind utilities backed by CSS variables in `src/styles/tailwind.css`.
- Formatting is not tool-enforced: no Prettier, Biome, `.editorconfig`, or lint script exists. Match the touched file.
- Treat `.env` and all `VITE_EMAILJS_*` values as secrets; never commit or echo their contents.

## ANTI-PATTERNS (THIS PROJECT)

- Do not remove or modify the dependencies, devDependencies, or scripts named in `package.json#rocketCritical`.
- Do not rename `src/store/data/expirience.js` in an unrelated change; the misspelling is part of current imports.
- Do not assume README testing claims are accurate: no test command, test files, or Jest/Vitest configuration exists.
- Do not edit both Vite configs as though they are merged. They conflict; verify which config the invoked Vite command selects.

## UNIQUE STYLES

- `src/index.jsx` imports both global stylesheets; keep global style loading at the bootstrap boundary.
- Portfolio content belongs in `src/store/data`, while section behavior and rendering belong under the landing page.
- Dormant sections remain in source but are commented out in `src/pages/landing-page/index.jsx`.

## COMMANDS

```bash
npm install
npm start
npm run build
npm run serve
docker compose up
```

`npm run build` is the only configured validation command. The Pages workflow expects `dist/index.html` and uploads `dist/`; confirm that output when changing Vite configuration.

## NOTES

- Normal `npm run build` currently selects `vite.config.js` and produces `dist/`; `vite.config.mjs` remains an alternate config with port `4028` and output `build/`.
- Docker Compose overrides the dev server to port `5173` and mounts source plus a container-owned `node_modules` volume.
- Preserve unrelated worktree edits, especially the existing change in `src/pages/landing-page/components/HeroSection.jsx`.

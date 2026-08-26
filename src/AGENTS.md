# SRC KNOWLEDGE BASE

## OVERVIEW

Browser-side React source for the portfolio: bootstrap, providers, routes, shared primitives, page sections, static content, styles, and small utilities.
The source has no backend; runtime data crosses the UI through `StorageProvider`/`useStorage`.

## STRUCTURE

```text
src/
├── index.jsx                 # React root and global stylesheet imports
├── App.jsx, Routes.jsx       # provider composition and route boundary
├── components/               # cross-page primitives and controls
├── pages/                    # routed screens and screen-local sections
├── store/data/               # portfolio content records
├── store/useStorage.jsx      # content context seam
├── styles/                   # Tailwind tokens and global CSS
└── utils/                    # class, date, theme, selection, email helpers
```

## WHERE TO LOOK

| Task | Location | Notes |
|---|---|---|
| Change application startup | `index.jsx`, `App.jsx` | Chain is `createRoot` → `App` → `StorageProvider` → `Routes`. |
| Change navigation or fallback | `Routes.jsx`, `components/ScrollToTop.jsx`, `components/ErrorBoundary.jsx` | `BrowserRouter` owns route-level behavior. |
| Change landing composition | `pages/landing-page/index.jsx` | Section order and page metadata live here. |
| Change a landing section | `pages/landing-page/components/` | Sections render the page; content belongs in `store/data`. |
| Change reusable UI | `components/`, especially `components/ui/` | `AppIcon` and `Button` are high-fan-out primitives. |
| Change portfolio content | `store/data/`, `store/useStorage.jsx` | Keep the context value keys aligned with consumers. |
| Change visual foundation | `styles/tailwind.css`, `styles/index.css` | Tailwind tokens/dark mode and base browser rules are separate layers. |
| Change contact delivery | `utils/send-email.js`, `pages/landing-page/components/ContactSection.jsx` | EmailJS boundary and its form consumer. |

## CONVENTIONS

- `index.jsx` loads `tailwind.css` before `index.css`; preserve this bootstrap order.
- Route imports use configured `components/...`, `pages/...`, and `@/...` aliases; relative imports remain common inside nested page sections.
- Add portfolio records under `store/data` and expose them from `useStorage.jsx`; do not make sections import data files directly.
- Landing sections consume only the context slice they need (`hero`, `about`, `skills`, `projects`, `experiences`, or `contactMethods`).
- Shared controls compose Tailwind classes through `utils/cn.js`; `Button` uses CVA variants and can render through Radix `Slot`.
- `AppIcon` resolves Lucide names dynamically and renders `HelpCircle` when a name is missing.

## ANTI-PATTERNS

- Do not mount routes outside the `StorageProvider`/`BrowserRouter` chain or call `useStorage` from an unwrapped subtree.
- Do not put durable portfolio copy or records in landing section component state.
- Do not move global CSS imports out of `index.jsx`, reorder them casually, or duplicate them in page components.
- Do not couple `components/` primitives to landing-page-only data or route assumptions.
- Do not add new context keys without updating the consuming sections that destructure the storage value.

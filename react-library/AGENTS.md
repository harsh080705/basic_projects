# AGENTS.md

This is the portfolio root. All commands run from inside `portfolio/`.

## Stack

- React 19 + Vite 8 (`@vitejs/plugin-react`)
- Tailwind CSS v4 (CSS-based config via `@tailwindcss/vite`; **no `tailwind.config.js`**)
- Framer Motion v12, Lenis 1.3, lucide-react 1.25, three.js, vanta (NET mesh)
- Oxlint for linting (rules in `.oxlintrc.json`); no TypeScript, no Jest

## Commands

From `portfolio/`:

```bash
npm run dev       # vite dev server
npm run build     # production build (rolldown)
npm run lint      # oxlint
npm run preview   # vite preview
```

## Gotchas

- **Tailwind v4**: theme tokens (`--color-ink-*`, `--font-sans`, etc.) and global resets live in `src/index.css` under `@theme {}` and `@layer base {}`. Editing a non-existent `tailwind.config.js` or `tailwind.config.cjs` does nothing.
- **Custom fonts**: loaded externally via Fontshare `<link>` in `index.html` (Clash Display @ 500/600/700, Satoshi @ 400/500/700). Mapped in `index.css` under `@theme {}` as `--font-serif: "Clash Display"` and `--font-sans: "Satoshi"`.
- **Hero assets**:
  - **`/image_87b87f.jpg` requested as `<img src>` does not exist** — the real bundled portrait is `src/assets/hero.png` (imported in `Hero.jsx`).
  - Carousel images in `public/` use **uppercase** extensions: `IMG_4636.JPG`, `IMG_5970.JPG`, `IMG_5989.JPG`, plus `IMG-20250801-WA0010.jpg`. Linux/macOS autodeploy will fail if a reference uses `.jpg` lowercase.
- **VantaBackground**: mounts its fixed canvas via `ReactDOM.createPortal(..., document.body)` with inline `style={{ position: 'fixed', zIndex: -1 }}`. If a parent adds an opaque background, the canvas cannot show — `html, body, #root, main, section, header, footer` are all forced `background: transparent !important` in `index.css`. Keep new section wrappers `bg-transparent`.
- **Hero wheel handler**: `onMouseEnter` sets `document.body.style.overflow = "hidden"` (scroll lock). Always restore in `onMouseLeave`. Wheel listener uses `{ passive: false }` so `preventDefault()` works — required against Lenis.
- **`@vercel/analytics`** is listed in `package.json` but unused (the side-effecting `npx plugins add vercel/vercel-plugin` step earlier left it behind). Don't re-introduce `<Analytics />` from `@vercel/analytics/react` — it triggers a Rolldown CJS-interop `MISSING_EXPORT` error during `vite build`.
- **Cursor**: global `*, *::before, *::after { cursor: none !important }` reset lives in `index.css`. Touch devices escape via `@media (pointer: coarse)`. Don't override per-element.
- **Sticky pinned sections** (`Projects`, `About`): outer wrappers are `h-[300vh]`/`h-[400vh]` with `sticky top-0 h-screen` children driving `useScroll({ target, offset: ['start start', 'end end'] })`. Don't shrink the sticky's parent or the scroll math breaks.
- **Lenis init**: in `App.jsx` `useEffect`. Must `cancelAnimationFrame` and `lenis.destroy()` on cleanup — WebGL/Vanta contexts leak otherwise.
- **oxlint rules**: `react/rules-of-hooks` is `error`; `react/only-export-components` is `warn` (constants are allowed out of components — e.g. `carouselImages` in `Hero.jsx`).

## Layout

```
portfolio/
├── index.html                # Fontshare link, #root
├── vite.config.js            # react() + tailwindcss() (@tailwindcss/vite)
├── .oxlintrc.json
├── public/                   # served at /. Uppercase extensions, e.g. IMG_4636.JPG
└── src/
    ├── main.jsx              # createRoot + StrictMode
    ├── App.jsx               # Lenis init + composition of fixed UI layers
    ├── index.css             # Tailwind v4 @theme + global resets + keyframes (marquee, slideDown/Right/Up)
    ├── assets/               # bundled by Vite (hero.png is the headshot)
    ├── components/           # Navbar, Footer, HUD, VantaBackground, SocialLinks,
    │                         # CustomCursor, InitialLoader, SessionTimer, SplitText,
    │                         # TiltCard, ImageCarousel, Background
    └── sections/             # Hero, Projects, About, Contact, HeroPortrait (orphan)
```

Mount order in `App.jsx` matters: portal-first `<VantaBackground />` → `<InitialLoader />` (z:9999) → content wrapper `z-10` containing `Navbar` / sections / `Footer` / `HUD`.

<div align="center">

<img src="public/favicon.svg" width="64" height="64" alt="KR favicon" />

# Khalifatur Raihan — Portfolio

**Backend Software Engineer · Java · Spring Boot · Microservices**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=20232a)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=2b2b2b)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)

[Live Demo](https://khalifaturraihan.dev) · [LinkedIn](https://linkedin.com/in/khalifaturraihan) · [Email](mailto:raihankhalifatur7@gmail.com)

</div>

---

## Overview

Personal portfolio showcasing 3+ years of backend engineering experience across aviation and government sectors. Built with React and Vite — no UI library, all styling is hand-crafted with inline styles and CSS animations.

## Features

- **3 Themes** — Dark (terminal), Light (clean), Amber — switchable live via the theme panel
- **Animated Hero** — typewriter effect, mouse-parallax 3D photo card, orbit tech chips
- **Infinite Tech Marquee** — smooth CSS-only scrolling ticker
- **Experience Timeline** — accordion-style work history with expandable bullet points
- **Architecture Diagrams** — custom SVG diagrams visualizing each backend project
- **Scroll-reveal Animations** — IntersectionObserver-based staggered reveal
- **Mobile Responsive** — hamburger nav, single-column hero, adaptive layouts
- **Optimized Images** — WebP profile photo (67 KB vs 1.2 MB PNG original)
- **SVG Favicon** — resolution-independent, renders sharp on all displays

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Bundler | Vite 6 |
| Fonts | Space Grotesk · JetBrains Mono · Instrument Serif |
| Styling | Inline styles + CSS animations |
| Deployment | — |

## Project Structure

```
portfolio/
├── public/
│   ├── profile.webp       # Optimized profile photo (67 KB WebP)
│   └── favicon.svg        # SVG favicon
├── src/
│   ├── components/
│   │   ├── Nav.jsx        # Fixed nav with hamburger menu (mobile)
│   │   ├── Hero.jsx       # Animated hero, parallax, typewriter
│   │   ├── TechMarquee.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx # Accordion timeline
│   │   ├── Projects.jsx   # Tabbed projects + architecture diagrams
│   │   ├── Diagrams.jsx   # Custom SVG architecture diagrams
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── TweaksPanel.jsx # Live theme switcher
│   │   └── shared.jsx     # SectionWrap, Tag, SectionLabel
│   ├── App.jsx
│   ├── data.js            # All content (experience, projects, skills)
│   ├── themes.js          # Theme tokens + font variables
│   ├── hooks.js           # useReveal, useCountUp, useIsMobile
│   ├── index.css          # Global styles + keyframe animations
│   └── main.jsx
└── index.html
```

## Getting Started

```bash
# Clone
git clone https://github.com/raihan/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, animated role titles, profile photo, stats counter |
| **Skills** | Tech stack grouped by category (Languages, Frameworks, Databases, DevOps, Architecture) |
| **Experience** | PT Aero System Indonesia · DPR RI · PT Kebun Maju Bersama |
| **Projects** | HRIS (Go/HTMX) · Aviation API · Pension Fund · Parliament System |
| **Education** | Universitas Gunadarma — Informatics Engineering (GPA 3.74) |
| **Contact** | Copy-to-clipboard email · LinkedIn link |

## Performance Notes

- Hero parallax is throttled to one update per `requestAnimationFrame` (no unbounded `mousemove` re-renders)
- Blob decorations use `will-change: transform` for GPU layer promotion
- All images served as WebP; PNG kept as fallback in `public/`
- CSS animations use `transform` and `opacity` only — no layout-triggering properties

## License

MIT — feel free to fork and adapt for your own portfolio.

---

<div align="center">
  <sub>Built by <a href="https://linkedin.com/in/khalifaturraihan">Khalifatur Raihan</a> · Tangerang Selatan, Indonesia</sub>
</div>

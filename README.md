# FootballVerse '26

A broadcast-grade, Swiss sports editorial web platform engineered to chronicle the 2026 FIFA World Cup across the United States, Mexico, and Canada.

Built with **React 18**, **TypeScript**, **React Router v6**, and a **custom CSS Grid layout system**.

## Features

- **Top Highlights Reel:** Interactive moments with custom SVG tactical trajectory mapping (curves, shot velocity, and timeline breakdown).
- **The '26 Pantheon:** Huge collectible player cards with procedural SVG national kit patterns, jersey number watermarks, telemetry stats, and 6-axis custom SVG radar polygons.
- **Head-to-Head (H2H) Comparator:** Modal overlay comparing any two tournament athletes across pace, shooting, passing, dribbling, defending, and physicality with dual radar polygon rendering.
- **Knockout & Tournament Chronicle:** Full elimination tree inspector covering Round of 16 through the Final at MetLife Stadium.
- **Atmosphere Engine:** Switchable high-contrast stadium photography backdrops and full-bleed 4K view mode.

## Project Structure

```text
footballverse-26/
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── KitPatternSVG.tsx
│   │   │   ├── MomentCard.tsx
│   │   │   └── PlayerGiantCard.tsx
│   │   ├── charts/
│   │   │   ├── PitchTrajectorySVG.tsx
│   │   │   └── RadarPolygonSVG.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── LiveTicker.tsx
│   │   │   └── Navbar.tsx
│   │   └── modals/
│   │       └── H2HCompareModal.tsx
│   ├── data/
│   │   ├── bracket.ts
│   │   ├── moments.ts
│   │   ├── players.ts
│   │   └── wallpapers.ts
│   ├── pages/
│   │   ├── KnockoutChronicle.tsx
│   │   ├── PlayerPantheon.tsx
│   │   └── VerseHub.tsx
│   ├── styles/
│   │   └── grid-system.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Routing:** React Router DOM (v6)
- **Styling:** Tailwind CSS + Custom CSS Grid
- **Icons:** Lucide React
- **Bundler:** Vite

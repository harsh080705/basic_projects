# 🚀 Basic Web Development Projects (`basic_projects`)

Welcome to my **Basic Projects** collection! This repository contains a structured showcase of hands-on web development projects built during my early journey learning front-end development, JavaScript programming, DOM manipulation, REST APIs, and UI design.

---

## 🌐 Live Demos & Master Bifurcation Matrix

Below is a detailed breakdown of all projects included in this repository, along with live demo links powered by **GitHub Pages**:

| # | Project Name | Directory | Key Tech Stack | Category & Primary Concepts Learned | Live Demo | Docs |
| :-: | :--- | :--- | :--- | :--- | :-: | :-: |
| 1 | **Amazon Home Page Clone** | [`amazon-clone`](./amazon-clone) | `HTML5`, `CSS3`, `FontAwesome` | **UI / Layout Cloning**<br>• Multi-level header & nav styling<br>• Product grid positioning<br>• Comprehensive footer layout | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/amazon-clone/) | [View README](./amazon-clone/README.md) |
| 2 | **Real-Time Currency Converter** | [`currency-converter`](./currency-converter) | `HTML5`, `CSS3`, `JS (ES6)`, `APIs` | **API Integration & Async JS**<br>• Real-time REST API consumption (`Frankfurter API`)<br>• Dynamic country flags (`FlagsAPI`)<br>• Form handling & validation | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/currency-converter/) | [View README](./currency-converter/README.md) |
| 3 | **Rock Paper Scissors Game** | [`rock-paper-scissors`](./rock-paper-scissors) | `HTML5`, `CSS3`, `JavaScript` | **DOM Manipulation & State**<br>• Scoreboard state tracking<br>• Random choice generator<br>• Dynamic UI win/loss feedback | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/rock-paper-scissors/) | [View README](./rock-paper-scissors/README.md) |
| 4 | **Tic-Tac-Toe Game** | [`tic-tac-toe`](./tic-tac-toe) | `HTML5`, `CSS3`, `JavaScript` | **Game Algorithms & Logic**<br>• 2D/3D matrix win pattern matching<br>• Turn alternation logic (`O` vs `X`)<br>• Winner & draw detection overlays | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/tic-tac-toe/) | [View README](./tic-tac-toe/README.md) |
| 5 | **Animated Landing Page** | [`animated-landing-page`](./animated-landing-page) | `HTML5`, `CSS3`, `JS`, `Node.js` | **Modern UI & Node.js Server**<br>• Glassmorphism panels & ambient glows<br>• Scroll reveals (`IntersectionObserver`)<br>• Custom Node.js HTTP server | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/animated-landing-page/) | [View README](./animated-landing-page/README.md) |
| 6 | **React Library Showcase** | [`react-library`](./react-library) | `React 19`, `Vite`, `Tailwind v4`, `Framer Motion`, `Three.js` | **Modern React Component Library & Motion**<br>• React 19 SPA with Lenis smooth scroll<br>• Tailwind CSS v4 design tokens<br>• Vanta.js & Three.js WebGL background effects | [🔗 Live Demo](https://harsh080705.github.io/basic_projects/react-library/dist/) | [View README](./react-library/README.md) |

> [!TIP]
> **To enable these Live Demos on GitHub:** Go to repository **Settings** &rarr; **Pages**, set source branch to **`main`**, and click **Save**.

---

## 📈 Learning Progression Roadmap

```
[Level 1: Structure & Styling]
  └── amazon-clone
       • HTML5 semantics, CSS Flexbox & Grid layouts, navigation headers & footer design.

[Level 2: Interactive Game Logic]
  ├── rock-paper-scissors
  │    • Event handlers, player vs. computer logic, live scoreboard state management.
  └── tic-tac-toe
       • Grid matrix win-pattern matching algorithms, draw detection, overlay triggers.

[Level 3: Asynchronous Web APIs & Dynamic DOM]
  └── currency-converter
       • Fetching live JSON exchange rates, mapping country/currency codes, dynamic images.

[Level 4: Advanced CSS & Local Node.js Tooling]
  └── animated-landing-page
       • Glassmorphism, CSS variables, IntersectionObserver animations, custom Node.js HTTP server.

[Level 5: Modern React 19 & WebGL Graphics]
  └── react-library
       • React 19 + Vite, Tailwind v4 design system, Lenis smooth scrolling, Framer Motion v12, Three.js WebGL net shaders.
```

---

## 📂 Repository Organization

```
basic_projects/
├── amazon-clone/               # Amazon home page layout clone
│   ├── index.html
│   ├── style.css
│   ├── assets/images...
│   └── README.md
├── currency-converter/         # Live exchange rate converter app
│   ├── index.html
│   ├── app.js
│   ├── codes.js
│   ├── style.css
│   └── README.md
├── rock-paper-scissors/        # Interactive Rock Paper Scissors game
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── images/
│   └── README.md
├── tic-tac-toe/                # 2-Player Tic-Tac-Toe game
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   └── README.md
├── animated-landing-page/      # Modern Glassmorphism page & Node server
│   ├── index.html
│   ├── script.js
│   ├── app.js
│   ├── server.js
│   ├── style.css
│   └── README.md
├── react-library/              # React 19 + Vite + Tailwind v4 portfolio & UI library
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
└── README.md                   # Master portfolio overview
```

---

## 💻 Getting Started

To explore or run any of these projects locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Harsh080705/basic_projects.git
   cd basic_projects
   ```

2. **Open any project**:
   - Navigate into any project folder (e.g. `cd currency-converter`) and open `index.html` in your browser.
   - For `animated-landing-page`, you can run `node server.js` to serve the app locally at `http://localhost:3000/`.

---

## 🎯 Future Improvements

- Add responsive mobile navigation drawer to `amazon-clone`.
- Implement AI opponent (Minimax algorithm) in `tic-tac-toe`.
- Add local storage persistence for win scores in `rock-paper-scissors`.
- Build currency exchange rate visual charts in `currency-converter`.

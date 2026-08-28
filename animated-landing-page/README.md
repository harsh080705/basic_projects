# 🎨 Animated Landing Page

A modern, fluid web page featuring glassmorphism design, ambient background gradient glows, scroll-triggered reveal animations, and a Node.js web server.

---

## 📌 Project Overview

This project showcases contemporary UI/UX design trends in modern front-end web development. It implements multi-layered ambient background glows, floating CSS shapes, glassmorphism panel cards with backdrop filters, scroll-based element reveals using `IntersectionObserver`, and a lightweight built-in Node.js HTTP server.

---

## ⚡ Key Features

- **Glassmorphism UI**: Backdrop filters (`backdrop-filter: blur()`), subtle border highlights, and semi-transparent dark containers.
- **Scroll-Triggered Reveals**: Smooth fade-in and slide-up animations powered by JavaScript's native `IntersectionObserver` API.
- **Dynamic Gradient Glows**: Multi-layered glowing gradients creating a modern, fluid visual aura.
- **Custom Typing Text Effect**: Interactive text typing animation built in `app.js`.
- **Node.js HTTP Web Server**: Custom built-in server (`server.js`) using native Node.js `http` and `fs` modules with MIME-type handling.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document layout (`<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Custom properties (CSS variables), Glassmorphism, Keyframe animations, Flexbox & Grid.
- **JavaScript (ES6+)**: `IntersectionObserver`, custom Promises & Async/Await loops for typing animations.
- **Node.js**: Native `http`, `fs`, `path` modules for local development server.

---

## 📂 Project Structure

```
animated-landing-page/
├── index.html            # Main landing page HTML
├── style.css             # Gradient glow, glassmorphism & responsive CSS
├── script.js             # Scroll reveals using IntersectionObserver
├── app.js                # Typing animation module
├── server.js             # Built-in Node.js HTTP web server
└── README.md             # Project documentation
```

---

## 🚀 How to Run

### Method 1: Direct Browser Access
Simply double-click or open `animated-landing-page/index.html` in any web browser.

### Method 2: Node.js HTTP Server
1. Open terminal and navigate to the project directory:
   ```bash
   cd animated-landing-page
   ```
2. Start the Node.js server:
   ```bash
   node server.js
   ```
3. Open your browser and go to `http://localhost:3000/`.

---

## 🔮 Future Enhancements

- Integrate interactive 3D WebGL background effects using Three.js.
- Add dark/light theme toggle.
- Expand interactive showcase elements into live preview modals.

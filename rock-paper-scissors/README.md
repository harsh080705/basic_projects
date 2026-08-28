# ✊✋✌️ Rock Paper Scissors Game

An interactive browser-based Rock Paper Scissors game with dynamic score tracking and visual feedback.

---

## 📌 Project Overview

This project implements the classic Rock Paper Scissors game against a computer opponent using vanilla JavaScript. It demonstrates key frontend fundamentals including event delegation, state maintenance (user score vs. computer score), conditional logic, and dynamic CSS styling based on round outcomes.

---

## ⚡ Key Features

- **Interactive Selection**: Choose between Rock, Paper, or Scissors via image cards.
- **Randomized Computer AI**: Generates computer moves unpredictably using `Math.random()`.
- **Live Scoreboard**: Persistent score tracking across rounds for both player and computer.
- **Visual Feedback**: Dynamic banner color transitions (Green for Win, Red for Loss, Dark Navy for Draw) and detailed round summaries.

---

## 🛠️ Tech Stack

- **HTML5**: Game board container, choice triggers, and score display elements.
- **CSS3**: Circular image framing, hover transforms, flexbox alignment, and dynamic background colors.
- **JavaScript (ES6+)**: Event Listeners (`addEventListener`), DOM updates (`innerText`, `style`), and conditional control structures.

---

## 📂 Project Structure

```
rock-paper-scissors/
├── index.html            # Game layout structure
├── style.css             # Visual styling & hover animations
├── app.js                # Game engine logic & score state
├── images/               # Choice assets (rock.jpg, paper.jpg, scissor.jpg)
└── README.md             # Project documentation
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `rock-paper-scissors/index.html` in any web browser.
3. Click on any of the choices (Rock, Paper, or Scissors) to trigger a round!

---

## 🔮 Future Enhancements

- Add sound effects for win/loss/draw events.
- Implement "Best of 5" or "Best of 10" tournament mode.
- Add smooth flip/shake animations when choices are revealed.


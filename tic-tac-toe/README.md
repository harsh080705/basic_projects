# ❌⭕ Tic-Tac-Toe Game

A classic 2-player interactive Tic-Tac-Toe game built with HTML5, CSS3, and JavaScript.

---

## 📌 Project Overview

This project features a clean, responsive 3x3 grid game board where two players alternate turns as **"O"** and **"X"**. The application automatically detects winning combinations (horizontal, vertical, diagonal), detects draw conditions, and displays a victory overlay with restart capabilities.

---

## ⚡ Key Features

- **2-Player Alternating Turns**: Turn indicator switching between Player O and Player X.
- **Automated Win Detection**: Evaluates 8 3D matrix win patterns (`[0,1,2]`, `[0,3,6]`, `[0,4,8]`, `[1,4,7]`, `[2,5,8]`, `[2,4,6]`, `[3,4,5]`, `[6,7,8]`) after every move.
- **Draw Condition Detection**: Automatically detects full grids without a winner and displays a Draw message.
- **Victory Overlay & Game Reset**: Overlay banner announcing the winner with instantaneous "New Game" and "Reset Game" state resets.

---

## 🛠️ Tech Stack

- **HTML5**: Grid buttons, game main layout, and winner message overlay container.
- **CSS3**: CSS Grid layout, button states (`:hover`, `:disabled`), overlay positioning, and modern styling.
- **JavaScript (ES6+)**: Array pattern matching, event handling, state control, and class updates.

---

## 📂 Project Structure

```
tic-tac-toe/
├── index.html            # Game HTML board & overlay layout
├── style.css             # Grid styling, typography & colors
├── app.js                # Win detection algorithm & turn state
└── README.md             # Project documentation
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `tic-tac-toe/index.html` in any web browser.
3. Click any box on the grid to place **"O"** or **"X"** and start playing!

---

## 🔮 Future Enhancements

- Add Single Player mode against an Unbeatable AI (Minimax algorithm).
- Add score counters for Player O and Player X.
- Include custom mark icons and victory animations.

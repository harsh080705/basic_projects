// Clean typing animation for browser
(function () {
  const el = document.getElementById('typing-effect');
  if (!el) return; // gracefully exit if element missing

  const phrases = [
    'Front‑end Developer',
    'Motion Designer',
    'Interactive Websites'
  ];

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  async function typeAndDelete(text) {
    // type (slower, more human)
    for (let i = 1; i <= text.length; i++) {
      el.textContent = text.slice(0, i);
      await wait(90 + Math.random() * 70);
    }
    await wait(1400); // linger longer on completed phrase
    // delete (slightly slower)
    for (let i = text.length; i >= 0; i--) {
      el.textContent = text.slice(0, i);
      await wait(50 + Math.random() * 40);
    }
    await wait(300);
  }

  async function loop() {
    let i = 0;
    while (true) {
      const text = phrases[i % phrases.length];
      await typeAndDelete(text);
      i++;
    }
  }

  // start the animation
  loop().catch((err) => console.error('Typing animation error:', err));
})();

const revealItems = document.querySelectorAll('.reveal');
const gradient = document.querySelector('.gradient-glow');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

revealItems.forEach((item) => observer.observe(item));

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.documentElement.style.setProperty('--scroll', scroll);
});

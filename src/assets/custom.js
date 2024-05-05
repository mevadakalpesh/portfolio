// In your script.js file
document.addEventListener("DOMContentLoaded", function() {
  const total = 10;
  const wrap = document.querySelector('.wrap');

  for (let i = 1; i <= total; i++) {
    const scale = Math.random() * 2 - 0.4;
    const left = Math.random() * 120 - 20;
    const delay = Math.random() * 5 - 5;

    const svg = document.createElement('div');
    svg.classList.add('svg');
    svg.style.left = left + '%';
    svg.style.animation = `raise${i} ${6 + Math.random() * 15}s linear infinite`;
    svg.style.animationDelay = delay + 's';
    svg.style.transform = `scale(${0.3 * i - 0.6}) rotate(${Math.random() * 360}deg)`;
    svg.style.zIndex = i - 7;
    svg.style.filter = `blur(${i - 6}px)`;
    svg.innerHTML = `<svg> <!-- Your SVG code here --> </svg>`;

    wrap.appendChild(svg);

    const keyframes = `@keyframes raise${i} {
      to {
        bottom: 150vh;
        transform: scale(${0.3 * i - 0.6}) rotate(${Math.random() * 360}deg);
      }
    }`;

    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
  }
});

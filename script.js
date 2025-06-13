
document.addEventListener('DOMContentLoaded', () => {
  const pages = Array.from(document.querySelectorAll('.page'));
  let index = 0;
  const update = () => pages.forEach((p, i) => p.classList.toggle('active', i === index));
  document.getElementById('next').addEventListener('click', () => { index = (index + 1) % pages.length; update(); });
  document.getElementById('prev').addEventListener('click', () => { index = (index - 1 + pages.length) % pages.length; update(); });
  const createHeart = () => {
    const h = document.createElement('span');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = 4 + Math.random() * 4 + 's';
    h.style.animationDelay = Math.random() * 4 + 's';
    h.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9000);
  };
  setInterval(createHeart, 400);
  update();
});
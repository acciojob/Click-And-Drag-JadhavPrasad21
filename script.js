// Your code here.
const items = document.querySelector('.items');
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

items.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  scrollLeft = items.scrollLeft;

  items.classList.add('active');
});

items.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const distance = e.clientX - startPosition;
  items.scrollLeft = scrollLeft - distance;
});

items.addEventListener('mouseup', () => {
  isDragging = false;
  items.classList.remove('active');
});

items.addEventListener('mouseleave', () => {
  isDragging = false;
  items.classList.remove('active');
});
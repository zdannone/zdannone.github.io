const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('site-menu');

function setOpen(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
}

toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
document.addEventListener('click', e => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
});

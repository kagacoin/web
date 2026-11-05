document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    toggle.focus();
  }
});
const navLinks = [...nav.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main > section')];
let pending = false;
function updateCurrent() {
  const offset = document.querySelector('.site-header').offsetHeight + 40;
  let current = 'home';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) current = section.id;
  }
  if (['memory', 'vision', 'repurchase'].includes(current)) current = 'home';
  if (current === 'coin-details' && document.querySelector('#vip-ecosystem').getBoundingClientRect().top <= offset) current = 'vip-ecosystem';
  for (const link of navLinks) {
    if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  pending = false;
}
window.addEventListener('scroll', () => {
  if (!pending) { pending = true; requestAnimationFrame(updateCurrent); }
}, { passive: true });
window.addEventListener('resize', updateCurrent);
updateCurrent();

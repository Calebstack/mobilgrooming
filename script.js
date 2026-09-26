lucide.createIcons();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  lucide.createIcons();
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  lucide.createIcons();
}));

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thank you. Your enquiry is ready to be confirmed by Mariana.';
  event.target.reset();
});
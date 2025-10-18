document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryMenu = document.querySelector('#primary-menu');

  if (navToggle && primaryMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryMenu.classList.toggle('open');
    });

    primaryMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryMenu.classList.remove('open');
      });
    });
  }

  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

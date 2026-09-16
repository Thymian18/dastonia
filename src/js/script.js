// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Hamburger menu toggle (mobile nav) =====
const navToggle = document.getElementById('nav-toggle');
const navEl = document.querySelector('header nav');
const navList = document.getElementById('nav-list');

function closeNav() {
  navEl.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function openNav() {
  navEl.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
}

navToggle.addEventListener('click', () => {
  const isOpen = navEl.classList.contains('open');
  isOpen ? closeNav() : openNav();
});

// Close the mobile menu after tapping a link
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Close the mobile menu if the viewport is resized up to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeNav();
  }
});

// ===== Basic scroll-spy: highlight active nav link based on visible section =====
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#nav-list a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
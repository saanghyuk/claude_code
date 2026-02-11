document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileNav();
  initScrollAnimations();
  initScrollSpy();
  initProgressBars();
  initBackToTop();
  initContactForm();
});

/* ===== Dark Mode ===== */
function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  const html = document.documentElement;

  // Check saved preference or system preference
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
    updateDarkModeIcon();
  });

  updateDarkModeIcon();

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
      html.classList.toggle('dark', e.matches);
      updateDarkModeIcon();
    }
  });
}

function updateDarkModeIcon() {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const isDark = document.documentElement.classList.contains('dark');
  sunIcon.classList.toggle('hidden', !isDark);
  moonIcon.classList.toggle('hidden', isDark);
}

/* ===== Mobile Navigation ===== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* ===== Scroll Animations (Intersection Observer) ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ===== Scroll Spy ===== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ===== Progress Bars ===== */
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
        bar.classList.add('is-filled');
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.5
  });

  bars.forEach(bar => observer.observe(bar));
}

/* ===== Back to Top ===== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.remove('hidden');
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
      btn.classList.add('hidden');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== Contact Form Validation ===== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();

    if (!name || !email || !message) {
      showFormMessage('모든 필드를 입력해주세요.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage('올바른 이메일 주소를 입력해주세요.', 'error');
      return;
    }

    showFormMessage('메시지가 전송되었습니다! 감사합니다.', 'success');
    form.reset();
  });
}

function showFormMessage(text, type) {
  const msgEl = document.getElementById('form-message-status');
  msgEl.textContent = text;
  msgEl.className = `mt-4 text-sm font-medium ${type === 'error' ? 'text-red-500' : 'text-green-500'}`;
  setTimeout(() => {
    msgEl.textContent = '';
    msgEl.className = '';
  }, 4000);
}

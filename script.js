const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.getElementById('quoteForm');
const message = document.getElementById('formMessage');

function setFieldState(el, isValid) {
  const field = el.closest('.field');
  if (field) field.classList.toggle('error', !isValid);
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(el => {
      const ok = el.type === 'checkbox' ? el.checked : Boolean(el.value.trim());
      setFieldState(el, ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      message.textContent = 'Проверьте обязательные поля — они отмечены звёздочкой.';
      message.classList.add('visible');
      return;
    }

    message.textContent = 'Спасибо. Это тестовый прототип: данные не отправлены, но форма и валидация работают.';
    message.classList.add('visible');
    form.reset();
    form.querySelectorAll('.field.error').forEach(el => el.classList.remove('error'));
  });

  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      if (el.required) {
        const ok = el.type === 'checkbox' ? el.checked : Boolean(el.value.trim());
        setFieldState(el, ok);
      }
    });
  });
}

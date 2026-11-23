/* script.js */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  if (hamburger && navUl) {
    hamburger.addEventListener('click', function () {
      navUl.classList.toggle('show');
    });
  }

  // Simple client‑side form validation for any form with the class "validate"
  const forms = document.querySelectorAll('form.validate');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(el => {
        if (!el.value.trim()) {
          valid = false;
          el.style.border = '2px solid #ff4d4f';
        } else {
          el.style.border = '';
        }
      });
      if (!valid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });
});

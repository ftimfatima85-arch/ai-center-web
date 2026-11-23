/* Main JavaScript for navigation, smooth scroll, and form validation */

document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle for mobile
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Registration form validation
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = regForm.elements['fullName'].value.trim();
      const email = regForm.elements['email'].value.trim();
      const phone = regForm.elements['phone'].value.trim();
      const course = regForm.elements['course'].value;
      let valid = true;
      let messages = [];

      if (name.length < 2) { valid = false; messages.push('Please enter a valid name.'); }
      if (!/^\S+@\S+\.\S+$/.test(email)) { valid = false; messages.push('Please enter a valid email address.'); }
      if (!/^\d{7,15}$/.test(phone)) { valid = false; messages.push('Please enter a valid phone number (7‑15 digits).'); }
      if (!course) { valid = false; messages.push('Please select a course.'); }

      const msgDiv = document.getElementById('formMessage');
      if (valid) {
        msgDiv.style.color = 'var(--teal)';
        msgDiv.textContent = '✅ Registration successful! We will contact you soon.';
        regForm.reset();
      } else {
        msgDiv.style.color = 'var(--amber)';
        msgDiv.textContent = '❌ ' + messages.join(' ');
      }
    });
  }
});

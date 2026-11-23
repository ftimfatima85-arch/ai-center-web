/* ------------------------------------------------------------
   Arkaan AI Center – Main JavaScript
   Features:
   - Mobile Nav Toggle
   - Animated Statistics Counter (IntersectionObserver)
   - Interactive FAQ Accordion
   - Registration Form Client-Side Validation
   - Smooth Scroll
------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Animated Statistics Counters
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let hasAnimated = false;

    const animateCounters = () => {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const counterInterval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(counterInterval);
          }
          const numSpan = stat.querySelector('.num');
          if (numSpan) {
            numSpan.textContent = Math.floor(current).toLocaleString();
          }
        }, stepTime);
      });
    };

    const statsSection = document.getElementById('impact');
    if (statsSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounters();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(statsSection);
    } else {
      animateCounters();
    }
  }

  // 3. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other accordion items for clean UX
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 5. Registration Form Client-Side Validation
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = regForm.elements['fullName']?.value.trim() || '';
      const email = regForm.elements['email']?.value.trim() || '';
      const phone = regForm.elements['phone']?.value.trim() || '';
      const course = regForm.elements['course']?.value || '';
      let valid = true;
      let messages = [];

      if (name.length < 2) { 
        valid = false; 
        messages.push('Fadlan geli magac sax ah (Please enter a valid name).'); 
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) { 
        valid = false; 
        messages.push('Fadlan geli email sax ah (Please enter a valid email address).'); 
      }
      if (!/^\+?\d{7,15}$/.test(phone)) { 
        valid = false; 
        messages.push('Fadlan geli lambar taleefon sax ah (Please enter a valid phone number).'); 
      }
      if (!course) { 
        valid = false; 
        messages.push('Fadlan dooro koorsada aad rabto (Please select a course).'); 
      }

      const msgDiv = document.getElementById('formMessage');
      if (msgDiv) {
        if (valid) {
          msgDiv.style.color = 'var(--teal)';
          msgDiv.style.fontWeight = '600';
          msgDiv.textContent = `✅ Mahadsanid ${name}! Codsigaaga waa la helay. Waan kula soo xiriiri doonnaa dhowaan.`;
          regForm.reset();
        } else {
          msgDiv.style.color = '#DC2626';
          msgDiv.style.fontWeight = '500';
          msgDiv.textContent = '❌ ' + messages.join(' ');
        }
      }
    });
  }
});

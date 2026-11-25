/**
 * Arkaan AI Center – Main Application Script (v=7)
 * Auto-Swiping Carousel & Smooth Interactions inspired by http://arkaan.so/
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileDrawer();
  initHeroSlider();
  initNewsCarousel();
  initImpactCounters();
  initArticlePage();
  initNewsGridPage();
  initAdminPanel();
});

/* --------------------------------------------------------------------------
   NAVBAR & SCROLL BEHAVIOR
-------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* --------------------------------------------------------------------------
   MOBILE NAV DRAWER
-------------------------------------------------------------------------- */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");

  if (!hamburgerBtn || !mobileDrawer || !mobileBackdrop) return;

  function openDrawer() {
    mobileDrawer.classList.add("open");
    mobileBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    mobileBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  mobileBackdrop.addEventListener("click", closeDrawer);

  const drawerLinks = mobileDrawer.querySelectorAll("a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   HERO SLIDER WITH AUTO-SWIPE & MOTION PAUSE
-------------------------------------------------------------------------- */
function initHeroSlider() {
  const dots = document.querySelectorAll(".hero-dot");
  const pauseBtn = document.getElementById("heroPauseBtn");
  if (!dots.length) return;

  let currentSlide = 0;
  let isPaused = false;
  let slideInterval = null;

  function setActiveSlide(index) {
    currentSlide = index;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentSlide);
    });
  }

  function nextSlide() {
    if (isPaused) return;
    const next = (currentSlide + 1) % dots.length;
    setActiveSlide(next);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      setActiveSlide(idx);
    });
  });

  slideInterval = setInterval(nextSlide, 5000);

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      isPaused = !isPaused;
      pauseBtn.innerHTML = isPaused
        ? '<i class="fa-solid fa-play"></i> Resume motion'
        : '<i class="fa-solid fa-pause"></i> Pause motion';
    });
  }
}

/* --------------------------------------------------------------------------
   LATEST FROM ARKAAN – AUTO-SWIPING NEWS CAROUSEL
-------------------------------------------------------------------------- */
function initNewsCarousel() {
  const track = document.getElementById("newsCarouselTrack");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const pauseBtn = document.getElementById("carouselPauseBtn");
  if (!track) return;

  const articles = typeof getNews === "function" ? getNews() : [];
  if (articles.length === 0) return;

  // Render cards with direct click navigation to story
  track.innerHTML = articles.map(item => `
    <article class="news-card" onclick="window.location.href='news-article.html?id=${item.id}'" role="button" tabindex="0">
      <div class="news-card-img">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='images/arkaan_hero_bg.jpg'">
        <span class="news-category-badge" style="background:${item.categoryColor || '#00A3E0'}">${item.category}</span>
      </div>
      <div class="news-card-body">
        <h3 class="news-card-title">
          <a href="news-article.html?id=${item.id}" onclick="event.stopPropagation();">${item.title}</a>
        </h3>
        <p class="news-card-desc">${item.excerpt}</p>
        <div class="news-card-footer">
          <span class="news-card-date">${item.date}</span>
          <span class="read-story-link">
            Read story <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </article>
  `).join("");

  let currentIndex = 0;
  let isAutoPlay = true;
  let carouselInterval = null;

  function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    const cardsPerView = getCardsPerView();
    return Math.max(0, articles.length - cardsPerView);
  }

  function updateCarousel() {
    const card = track.querySelector(".news-card");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 26;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  function moveNext() {
    const maxIndex = getMaxIndex();
    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }

  function movePrev() {
    const maxIndex = getMaxIndex();
    if (currentIndex <= 0) {
      currentIndex = maxIndex;
    } else {
      currentIndex--;
    }
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); moveNext(); });
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); movePrev(); });

  // Automatic swiping continuous animation
  function startAutoPlay() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      if (isAutoPlay) moveNext();
    }, 4000);
  }

  startAutoPlay();

  if (pauseBtn) {
    pauseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isAutoPlay = !isAutoPlay;
      pauseBtn.innerHTML = isAutoPlay
        ? '<i class="fa-solid fa-pause"></i> Pause'
        : '<i class="fa-solid fa-play"></i> Play';
    });
  }

  // Pause on hover, resume on mouse leave
  const viewport = document.querySelector(".news-carousel-viewport");
  if (viewport) {
    viewport.addEventListener("mouseenter", () => { isAutoPlay = false; });
    viewport.addEventListener("mouseleave", () => { 
      if (pauseBtn && !pauseBtn.innerHTML.includes("Play")) {
        isAutoPlay = true; 
      }
    });
  }

  window.addEventListener("resize", updateCarousel);
}

/* --------------------------------------------------------------------------
   ANIMATED IMPACT COUNTERS
-------------------------------------------------------------------------- */
function initImpactCounters() {
  const counterElements = document.querySelectorAll(".counter-val");
  if (!counterElements.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector(".stats-banner");
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   DEDICATED ARTICLE PAGE
-------------------------------------------------------------------------- */
function initArticlePage() {
  const articleContainer = document.getElementById("articleDetailContainer");
  if (!articleContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id") || "1";

  const article = typeof getArticleById === "function" ? getArticleById(articleId) : null;

  if (!article) {
    articleContainer.innerHTML = `
      <div style="text-align:center; padding: 100px 20px;">
        <h2>Article Not Found</h2>
        <p style="color:#64748B; margin: 16px 0 24px;">The story you are looking for does not exist or has been moved.</p>
        <a href="news.html" class="btn btn-baby-blue">Back to News & Updates</a>
      </div>
    `;
    return;
  }

  document.title = `${article.title} – Arkaan AI Center`;

  articleContainer.innerHTML = `
    <div class="article-header">
      <span class="news-category-badge" style="position:static; display:inline-block; margin-bottom:16px; background:${article.categoryColor || '#00A3E0'}">${article.category}</span>
      <h1 class="article-title" style="font-family:var(--font-heading); color:var(--navy); font-size:clamp(1.8rem, 3.8vw, 2.6rem); margin-bottom:18px;">${article.title}</h1>
      <div class="article-meta" style="color:var(--muted-text); font-size:0.9rem; margin-bottom:28px;">
        <span><i class="fa-regular fa-calendar"></i> ${article.date}</span> &nbsp;•&nbsp;
        <span><i class="fa-regular fa-clock"></i> ${article.readTime || '4 min read'}</span> &nbsp;•&nbsp;
        <span><i class="fa-regular fa-user"></i> ${article.author || 'Arkaan Communications'}</span>
      </div>
    </div>

    <img src="${article.image}" alt="${article.title}" style="width:100%; max-height:480px; object-fit:cover; border-radius:18px; box-shadow:var(--shadow-md); margin-bottom:34px;" onerror="this.src='images/arkaan_hero_bg.jpg'">

    <div class="article-content" style="font-size:1.08rem; line-height:1.85; color:#334155; margin-bottom:40px;">
      ${article.content}
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #E2E8F0; padding-top:24px; flex-wrap:wrap; gap:16px;">
      <a href="news.html" class="btn btn-baby-blue btn-sm"><i class="fa-solid fa-arrow-left"></i> All News & Insights</a>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-weight:600; font-size:0.9rem;">Share story:</span>
        <a href="https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}" target="_blank" class="social-icon-btn whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon-btn facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon-btn linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   NEWS LISTING PAGE (news.html)
-------------------------------------------------------------------------- */
function initNewsGridPage() {
  const gridContainer = document.getElementById("allNewsGrid");
  const filterPills = document.querySelectorAll(".news-filter-pill");
  if (!gridContainer) return;

  const allArticles = typeof getNews === "function" ? getNews() : [];

  function renderFiltered(category = "All") {
    const filtered = category === "All"
      ? allArticles
      : allArticles.filter(item => item.category.toLowerCase().includes(category.toLowerCase()));

    gridContainer.innerHTML = filtered.map(item => `
      <article class="news-card" onclick="window.location.href='news-article.html?id=${item.id}'">
        <div class="news-card-img">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='images/arkaan_hero_bg.jpg'">
          <span class="news-category-badge" style="background:${item.categoryColor || '#00A3E0'}">${item.category}</span>
        </div>
        <div class="news-card-body">
          <h3 class="news-card-title"><a href="news-article.html?id=${item.id}">${item.title}</a></h3>
          <p class="news-card-desc">${item.excerpt}</p>
          <div class="news-card-footer">
            <span class="news-card-date">${item.date}</span>
            <span class="read-story-link">Read story <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </article>
    `).join("");
  }

  renderFiltered("All");

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const cat = pill.getAttribute("data-category");
      renderFiltered(cat);
    });
  });
}

/* --------------------------------------------------------------------------
   ADMIN PANEL (admin.html)
-------------------------------------------------------------------------- */
function initAdminPanel() {
  const loginSection = document.getElementById("adminLoginSection");
  const dashboardSection = document.getElementById("adminDashboardSection");
  const loginForm = document.getElementById("adminLoginForm");
  const loginError = document.getElementById("loginError");
  const newsTableBody = document.getElementById("adminNewsTableBody");
  const newsForm = document.getElementById("newsArticleForm");

  if (!dashboardSection || !loginForm) return;

  if (sessionStorage.getItem("arkaan_admin_auth") === "true") {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    renderAdminTable();
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass = document.getElementById("adminPassword").value;
    if (pass === "arkaan2026") {
      sessionStorage.setItem("arkaan_admin_auth", "true");
      loginSection.style.display = "none";
      dashboardSection.style.display = "block";
      renderAdminTable();
    } else {
      loginError.style.display = "block";
    }
  });

  function renderAdminTable() {
    if (!newsTableBody) return;
    const articles = typeof getNews === "function" ? getNews() : [];
    newsTableBody.innerHTML = articles.map(item => `
      <tr>
        <td><strong>#${item.id}</strong></td>
        <td>
          <div style="font-weight:600; color:var(--navy);">${item.title}</div>
        </td>
        <td><span class="news-category-badge" style="position:static; display:inline-block; background:${item.categoryColor || '#00A3E0'}">${item.category}</span></td>
        <td>${item.date}</td>
        <td>
          <button class="btn btn-sm btn-baby-blue" onclick="editNewsArticle(${item.id})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn btn-sm" style="background:#EF4444; color:#fff;" onclick="deleteNewsArticle(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `).join("");
  }
}

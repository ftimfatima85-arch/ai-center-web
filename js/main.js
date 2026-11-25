/**
 * Arkaan AI Center – Main Application Script
 * Inspired by Arkaan.so visual interaction and animations
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
    if (window.scrollY > 40) {
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

  // Close when clicking a link
  const drawerLinks = mobileDrawer.querySelectorAll("a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   HERO SECTION SLIDER & MOTION PAUSE (arkaan.so style)
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

  slideInterval = setInterval(nextSlide, 6000);

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
   LATEST FROM ARKAAN - NEWS CAROUSEL (arkaan.so style)
-------------------------------------------------------------------------- */
function initNewsCarousel() {
  const track = document.getElementById("newsCarouselTrack");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const pauseBtn = document.getElementById("carouselPauseBtn");
  if (!track) return;

  // Render news cards from getNews()
  const articles = typeof getNews === "function" ? getNews() : [];
  if (articles.length === 0) return;

  track.innerHTML = articles.map(item => `
    <article class="news-card">
      <div class="news-card-img">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='images/news_launch.jpg'">
        <span class="news-category-badge" style="background:${item.categoryColor || '#0284C7'}">${item.category}</span>
      </div>
      <div class="news-card-body">
        <h3 class="news-card-title">
          <a href="news-article.html?id=${item.id}">${item.title}</a>
        </h3>
        <p class="news-card-desc">${item.excerpt}</p>
        <div class="news-card-footer">
          <span class="news-card-date">${item.date}</span>
          <a href="news-article.html?id=${item.id}" class="read-story-link">
            Read story <i class="fa-solid fa-arrow-right"></i>
          </a>
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
    const gap = 26; // CSS gap
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

  if (nextBtn) nextBtn.addEventListener("click", () => { moveNext(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { movePrev(); });

  function startAutoPlay() {
    carouselInterval = setInterval(() => {
      if (isAutoPlay) moveNext();
    }, 5000);
  }

  startAutoPlay();

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      isAutoPlay = !isAutoPlay;
      pauseBtn.innerHTML = isAutoPlay
        ? '<i class="fa-solid fa-pause"></i> Pause'
        : '<i class="fa-solid fa-play"></i> Play';
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
   DEDICATED NEWS ARTICLE PAGE (news-article.html)
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
        <p style="color:#64748B; margin: 16px 0 24px;">The article you are looking for does not exist or has been removed.</p>
        <a href="news.html" class="btn btn-primary">Back to News & Updates</a>
      </div>
    `;
    return;
  }

  document.title = `${article.title} – Arkaan AI Center`;

  articleContainer.innerHTML = `
    <div class="article-header">
      <span class="article-category" style="background:${article.categoryColor || '#0284C7'}">${article.category}</span>
      <h1 class="article-title">${article.title}</h1>
      <div class="article-meta">
        <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
        <span><i class="fa-regular fa-clock"></i> ${article.readTime || '4 min read'}</span>
        <span><i class="fa-regular fa-user"></i> ${article.author || 'Arkaan Editorial'}</span>
      </div>
    </div>

    <img src="${article.image}" alt="${article.title}" class="article-featured-img" onerror="this.src='images/news_launch.jpg'">

    <div class="article-content">
      ${article.content}
    </div>

    <!-- Social Sharing Bar -->
    <div class="article-share-bar">
      <div>
        <a href="news.html" class="btn btn-navy btn-sm"><i class="fa-solid fa-arrow-left"></i> Back to News</a>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-weight:600; font-size:0.9rem; color:var(--navy);">Share:</span>
        <a href="https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}" target="_blank" class="social-icon-btn whatsapp" title="Share on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon-btn facebook" title="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon-btn linkedin" title="Share on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>

    <!-- Related News -->
    <div style="margin-top:70px;">
      <h3 style="font-family:var(--font-heading); font-size:1.6rem; color:var(--navy); margin-bottom:24px;">Related News & Stories</h3>
      <div class="card-grid-3" id="relatedNewsGrid"></div>
    </div>
  `;

  // Render 3 related articles
  const allNews = typeof getNews === "function" ? getNews() : [];
  const related = allNews.filter(a => String(a.id) !== String(article.id)).slice(0, 3);
  const relatedGrid = document.getElementById("relatedNewsGrid");

  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(item => `
      <div class="news-card">
        <div class="news-card-img">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='images/news_launch.jpg'">
          <span class="news-category-badge" style="background:${item.categoryColor || '#0284C7'}">${item.category}</span>
        </div>
        <div class="news-card-body">
          <h4 class="news-card-title"><a href="news-article.html?id=${item.id}">${item.title}</a></h4>
          <p class="news-card-desc">${item.excerpt}</p>
          <div class="news-card-footer">
            <span class="news-card-date">${item.date}</span>
            <a href="news-article.html?id=${item.id}" class="read-story-link">Read story <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `).join("");
  }
}

/* --------------------------------------------------------------------------
   NEWS LISTING PAGE WITH CATEGORY FILTER (news.html)
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
      <article class="news-card">
        <div class="news-card-img">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='images/news_launch.jpg'">
          <span class="news-category-badge" style="background:${item.categoryColor || '#0284C7'}">${item.category}</span>
        </div>
        <div class="news-card-body">
          <h3 class="news-card-title"><a href="news-article.html?id=${item.id}">${item.title}</a></h3>
          <p class="news-card-desc">${item.excerpt}</p>
          <div class="news-card-footer">
            <span class="news-card-date">${item.date}</span>
            <a href="news-article.html?id=${item.id}" class="read-story-link">Read story <i class="fa-solid fa-arrow-right"></i></a>
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
   NEWS MANAGEMENT SYSTEM (admin.html)
-------------------------------------------------------------------------- */
function initAdminPanel() {
  const loginSection = document.getElementById("adminLoginSection");
  const dashboardSection = document.getElementById("adminDashboardSection");
  const loginForm = document.getElementById("adminLoginForm");
  const loginError = document.getElementById("loginError");
  const newsTableBody = document.getElementById("adminNewsTableBody");
  const newsForm = document.getElementById("newsArticleForm");
  const formTitle = document.getElementById("formActionTitle");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  if (!dashboardSection || !loginForm) return;

  // Check existing session
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

  const logoutBtn = document.getElementById("adminLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("arkaan_admin_auth");
      window.location.reload();
    });
  }

  function renderAdminTable() {
    if (!newsTableBody) return;
    const articles = typeof getNews === "function" ? getNews() : [];
    newsTableBody.innerHTML = articles.map(item => `
      <tr>
        <td><strong>#${item.id}</strong></td>
        <td>
          <div style="font-weight:600; color:var(--navy);">${item.title}</div>
          <small style="color:#64748B;">${item.excerpt ? item.excerpt.substring(0, 60) + '...' : ''}</small>
        </td>
        <td><span class="news-category-badge" style="background:${item.categoryColor || '#0284C7'}">${item.category}</span></td>
        <td>${item.date}</td>
        <td>
          <button class="btn btn-navy btn-sm" onclick="editNewsArticle(${item.id})"><i class="fa-solid fa-pen"></i> Edit</button>
          <button class="btn btn-sm" style="background:#EF4444; color:#fff;" onclick="deleteNewsArticle(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `).join("");
  }

  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editArticleId").value;
      const title = document.getElementById("newsTitle").value.trim();
      const category = document.getElementById("newsCategory").value;
      const categoryColor = document.getElementById("newsCategoryColor").value;
      const image = document.getElementById("newsImage").value.trim() || "images/news_launch.jpg";
      const excerpt = document.getElementById("newsExcerpt").value.trim();
      const content = document.getElementById("newsContent").value.trim();

      const articlePayload = {
        title,
        category,
        categoryColor,
        image,
        excerpt,
        content,
        author: "Arkaan Editorial"
      };

      if (editId) {
        updateArticle(editId, articlePayload);
      } else {
        addArticle(articlePayload);
      }

      newsForm.reset();
      document.getElementById("editArticleId").value = "";
      if (formTitle) formTitle.textContent = "Publish New Article";
      if (cancelEditBtn) cancelEditBtn.style.display = "none";
      renderAdminTable();
      alert("Article saved and published successfully!");
    });
  }

  window.editNewsArticle = function(id) {
    const article = getArticleById(id);
    if (!article) return;
    document.getElementById("editArticleId").value = article.id;
    document.getElementById("newsTitle").value = article.title;
    document.getElementById("newsCategory").value = article.category;
    document.getElementById("newsCategoryColor").value = article.categoryColor || "#0284C7";
    document.getElementById("newsImage").value = article.image;
    document.getElementById("newsExcerpt").value = article.excerpt;
    document.getElementById("newsContent").value = article.content;

    if (formTitle) formTitle.textContent = `Editing Article #${article.id}`;
    if (cancelEditBtn) cancelEditBtn.style.display = "inline-block";
    window.scrollTo({ top: newsForm.offsetTop - 100, behavior: "smooth" });
  };

  window.deleteNewsArticle = function(id) {
    if (confirm("Are you sure you want to delete this article? This cannot be undone.")) {
      deleteArticle(id);
      renderAdminTable();
    }
  };

  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", () => {
      newsForm.reset();
      document.getElementById("editArticleId").value = "";
      formTitle.textContent = "Publish New Article";
      cancelEditBtn.style.display = "none";
    });
  }
}

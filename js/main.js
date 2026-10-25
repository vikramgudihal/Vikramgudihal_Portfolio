/**
 * ==============================================================================
 * VIKRAM GUDIHAL — PORTFOLIO CORE SCRIPTS
 * Theme Toggle (Cyber Dark & White Ghost), ATS Resume Mode, and Interactions
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initScrollReveal();
  initProjectFilters();
  initCertificateLightbox();
  initCertificatePagination();
  initContactActions();
  initYear();
  initSecurityShield();
});

/* ==============================================================================
   THEME TOGGLE: CYBER DARK <-> WHITE GHOST THEME
   ============================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeBtn = document.getElementById('mobileThemeBtn');
  const toggleLabel = toggleBtn?.querySelector('.theme-toggle-label');
  
  function applyTheme(theme, showNotice = false) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'ghost' ? '#f8fafc' : '#0b0d12');
    }
    
    if (toggleLabel) {
      toggleLabel.textContent = theme === 'ghost' ? 'Dark' : 'Ghost';
    }
    const labelText = theme === 'ghost' ? 'Switch to Cyber Dark Theme' : 'Switch to White Ghost Theme';
    if (toggleBtn) {
      toggleBtn.setAttribute('title', labelText);
      toggleBtn.setAttribute('aria-label', labelText);
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.setAttribute('title', labelText);
      mobileThemeBtn.setAttribute('aria-label', labelText);
    }

    if (showNotice) {
      showToast(theme === 'ghost' ? '👻 White Ghost Theme activated' : '🌙 Cyber Dark Theme activated');
    }
  }

  // Current theme from html attribute or localStorage or preference
  const saved = localStorage.getItem('portfolio-theme');
  const activeTheme = document.documentElement.getAttribute('data-theme') || 
                      saved || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'ghost' : 'dark');
  
  applyTheme(activeTheme, false);

  function toggleThemeHandler() {
    const current = document.documentElement.getAttribute('data-theme');
    const nextTheme = current === 'ghost' ? 'dark' : 'ghost';
    applyTheme(nextTheme, true);
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleThemeHandler);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleThemeHandler);

  // Handle OS dark/light mode preference change if no explicit choice saved
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        applyTheme(e.matches ? 'dark' : 'ghost', true);
      }
    });
  }
}

/* ==============================================================================
   NAVIGATION & ACTIVE LINK TRACKING (FLOATING DOCK + RESPONSIVE MOBILE DRAWER)
   ============================================================================== */
function initNavigation() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  // Mobile menu toggle
  if (menuBtn && mobileNavDrawer) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavDrawer.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when clicking any link inside it
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (mobileNavDrawer.classList.contains('open') && !mobileNavDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileNavDrawer.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavDrawer.classList.contains('open')) {
        mobileNavDrawer.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scrollspy: update active link based on scroll position across dock and mobile drawer
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const allNavLinks = Array.from(document.querySelectorAll('.dock-item[href^="#"], .mobile-nav-link[href^="#"]'));

  function updateActiveNav() {
    if (!allNavLinks.length) return;
    const scrollY = window.scrollY;
    let currentId = '';
    const offset = window.innerWidth >= 1025 ? 120 : 140;

    sections.forEach(section => {
      const top = section.offsetTop - offset;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });
  updateActiveNav();
}

/* ==============================================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }
}

/* ==============================================================================
   PROJECT FILTERING & NUMBERED PAGINATION (6 per page)
   ============================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
  const allCards = Array.from(document.querySelectorAll('.project-grid .project-card'));
  const pageNumbersContainer = document.getElementById('pageNumbers');
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  const paginationWrapper = document.getElementById('projectPaginationWrapper');
  const pageCounter = document.getElementById('pageCounter');

  if (!allCards.length) return;

  const ITEMS_PER_PAGE = 6;
  let currentFilter = 'all';
  let currentPage = 1;

  function getMatchingCards() {
    return allCards.filter(card => {
      const category = card.getAttribute('data-category') || '';
      return currentFilter === 'all' || category.includes(currentFilter);
    });
  }

  function renderPage(shouldScroll = false) {
    const matchingCards = getMatchingCards();
    const totalItems = matchingCards.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Show only the 6 cards for the active page, hide all others
    allCards.forEach(card => {
      const matchIndex = matchingCards.indexOf(card);
      const isVisibleOnPage = matchIndex >= startIndex && matchIndex < endIndex;

      if (isVisibleOnPage) {
        card.style.display = 'flex';
        card.classList.add('visible');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
      }
    });

    // Generate page numbers: 1, 2, 3...
    if (pageNumbersContainer) {
      pageNumbersContainer.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `page-btn page-num ${i === currentPage ? 'active' : ''}`;
        btn.textContent = String(i);
        btn.setAttribute('aria-label', `Go to project page ${i}`);
        if (i === currentPage) {
          btn.setAttribute('aria-current', 'page');
        }
        btn.addEventListener('click', () => {
          if (currentPage !== i) {
            currentPage = i;
            renderPage(true);
          }
        });
        pageNumbersContainer.appendChild(btn);
      }
    }

    // Prev / Next button states
    if (prevBtn) {
      prevBtn.disabled = currentPage <= 1;
    }
    if (nextBtn) {
      nextBtn.disabled = currentPage >= totalPages;
    }

    // Update Counter Summary
    if (pageCounter) {
      if (totalItems === 0) {
        pageCounter.textContent = 'No projects found in this category';
      } else {
        const start = startIndex + 1;
        const end = Math.min(endIndex, totalItems);
        pageCounter.textContent = `Showing ${start}–${end} of ${totalItems} projects (Page ${currentPage} of ${totalPages})`;
      }
    }

    // Toggle pagination wrapper visibility
    if (paginationWrapper) {
      paginationWrapper.style.display = totalPages > 1 ? 'flex' : 'none';
    }

    // Smooth scroll back to top of projects section
    if (shouldScroll) {
      const workSection = document.getElementById('work');
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 80;
        if (window.scrollY > targetY) {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }
  }

  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(true);
      }
    });
  }

  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const matching = getMatchingCards();
      const totalPages = Math.ceil(matching.length / ITEMS_PER_PAGE);
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(true);
      }
    });
  }

  // Category filter tabs click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      currentPage = 1; // Reset to page 1 on filter change
      renderPage(false);
    });
  });

  // Initial render (Page 1: 1st 6 projects shown, rest hidden)
  renderPage(false);
}

/* ==============================================================================
   CERTIFICATE LIGHTBOX VIEWER
   ============================================================================== */
const CERTIFICATES_DATA = [
  {
    id: "cet17",
    title: "🏆 Tech Escape Room: \"Unlock the System\" (Winner)",
    issuer: "Chetan Business School • CodeCrafters",
    date: "Oct 2026",
    image: "./imgs/cet17.png"
  },
  {
    id: "cet15",
    title: "🏆 HackLite-2026 Winner (Full-Stack Dev)",
    issuer: "Chetan Business School • CodeCrafters Club",
    date: "Jan 2026",
    image: "./imgs/cet15.png"
  },
  {
    id: "cet14",
    title: "Microsoft Azure (25-Hour Course Completion)",
    issuer: "Microsoft Learn & FICE",
    date: "Jan 2026",
    image: "./imgs/cet14.png"
  },
  {
    id: "cet9",
    title: "SOC Analyst Career Demand in 2026",
    issuer: "WsCube Tech",
    date: "Aug 2026",
    image: "./imgs/cet9.png"
  },
  {
    id: "cet10",
    title: "Spark Tank Startup Pitch (CampusHub)",
    issuer: "Chetan Business School",
    date: "2026",
    image: "./imgs/cet10.png"
  },
  {
    id: "cet11",
    title: "Career in DevOps, Cloud Computing & Cyber Security",
    issuer: "Scaler Masterclass",
    date: "Jun 2026",
    image: "./imgs/cet11.png"
  },
  {
    id: "cet12",
    title: "HackLite 2.0 (24-Hour Web Dev Hackathon)",
    issuer: "Chetan Business School",
    date: "2026",
    image: "./imgs/cet12.png"
  },
  {
    id: "cet13",
    title: "National Level Tech Connect 2026 (Power BI)",
    issuer: "Chetan Business School",
    date: "Mar 2026",
    image: "./imgs/cet13.png"
  },
  {
    id: "cet1",
    title: "Web Development Internship Completion",
    issuer: "Grow Rank Info Pvt Ltd",
    date: "Jun 2025",
    image: "./imgs/cet1.png"
  },
  {
    id: "cet16",
    title: "Build a Free Website with WordPress",
    issuer: "Coursera Project Network",
    date: "Jul 2025",
    image: "./imgs/cet16.png"
  },
  {
    id: "cet2",
    title: "Java Programming",
    issuer: "Great Learning Academy",
    date: "Nov 2023",
    image: "./imgs/cet2.png"
  },
  {
    id: "cet3",
    title: "OOPs in Java",
    issuer: "Great Learning Academy",
    date: "Oct 2023",
    image: "./imgs/cet3.png"
  },
  {
    id: "cet4",
    title: "Web Development Fundamentals",
    issuer: "Great Learning Academy",
    date: "Aug 2022",
    image: "./imgs/cet4.png"
  },
  {
    id: "cet5",
    title: "Data Structures in C",
    issuer: "Great Learning Academy",
    date: "Aug 2022",
    image: "./imgs/cet5.png"
  },
  {
    id: "cet6",
    title: "Digital Literacy Course",
    issuer: "KEONICS Yuva.Com",
    date: "Jun 2022",
    image: "./imgs/cet6.png"
  },
  {
    id: "cet7",
    title: "C for Beginners",
    issuer: "Great Learning Academy",
    date: "Oct 2022",
    image: "./imgs/cet7.png"
  },
  {
    id: "cet8",
    title: "Cyber Security: Basics, Case Studies & Research",
    issuer: "A2Z EduLearningHub",
    date: "Nov 2022",
    image: "./imgs/cet8.png"
  }
];

function initCertificateLightbox() {
  const modal = document.getElementById('certModal');
  if (!modal) return;

  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalIssuer = document.getElementById('lightboxIssuer');
  const modalCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentIndex = 0;

  function showCert(index) {
    const allCards = Array.from(document.querySelectorAll('.cert-grid .cert-card'));
    const totalCount = Math.max(CERTIFICATES_DATA.length, allCards.length);
    if (totalCount === 0) return;

    if (index < 0) index = totalCount - 1;
    if (index >= totalCount) index = 0;
    currentIndex = index;

    let cert = CERTIFICATES_DATA[currentIndex];
    if (!cert && allCards[currentIndex]) {
      const card = allCards[currentIndex];
      const img = card.querySelector('.cert-media img');
      const title = card.querySelector('.cert-info h4');
      const issuer = card.querySelector('.cert-issuer');
      const date = card.querySelector('.cert-date');
      cert = {
        title: title ? title.textContent : 'Certificate',
        issuer: issuer ? issuer.textContent : '',
        date: date ? date.textContent : '',
        image: img ? img.src : ''
      };
    }
    if (!cert) return;

    if (modalImg) {
      modalImg.src = cert.image;
      modalImg.alt = cert.title;
    }
    if (modalTitle) modalTitle.textContent = cert.title;
    if (modalIssuer) modalIssuer.textContent = `${cert.issuer} • ${cert.date}`;
    if (modalCounter) modalCounter.textContent = `${currentIndex + 1} / ${totalCount}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click listeners to certificate cards
  document.querySelectorAll('.cert-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      showCert(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', () => showCert(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showCert(currentIndex + 1));

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showCert(currentIndex - 1);
    if (e.key === 'ArrowRight') showCert(currentIndex + 1);
  });
}

/* ==============================================================================
   CERTIFICATE NUMBERED PAGINATION (8 per page, auto-adjusts when new certificates are added)
   ============================================================================== */
function initCertificatePagination() {
  const allCards = Array.from(document.querySelectorAll('.cert-grid .cert-card'));
  const pageNumbersContainer = document.getElementById('certPageNumbers');
  const prevBtn = document.getElementById('prevCertPageBtn');
  const nextBtn = document.getElementById('nextCertPageBtn');
  const paginationWrapper = document.getElementById('certPaginationWrapper');
  const pageCounter = document.getElementById('certPageCounter');

  if (!allCards.length) return;

  const ITEMS_PER_PAGE = 8;
  let currentPage = 1;

  function renderPage(shouldScroll = false) {
    const totalItems = allCards.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Show only the 8 cards for the active page, hide all older ones onto next pages
    allCards.forEach((card, index) => {
      const isVisibleOnPage = index >= startIndex && index < endIndex;

      if (isVisibleOnPage) {
        card.style.display = 'flex';
        card.classList.add('visible');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
      }
    });

    // Generate page numbers: 1, 2, 3...
    if (pageNumbersContainer) {
      pageNumbersContainer.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `page-btn page-num ${i === currentPage ? 'active' : ''}`;
        btn.textContent = String(i);
        btn.setAttribute('aria-label', `Go to certificates page ${i}`);
        if (i === currentPage) {
          btn.setAttribute('aria-current', 'page');
        }
        btn.addEventListener('click', () => {
          if (currentPage !== i) {
            currentPage = i;
            renderPage(true);
          }
        });
        pageNumbersContainer.appendChild(btn);
      }
    }

    // Prev / Next button states
    if (prevBtn) {
      prevBtn.disabled = currentPage <= 1;
    }
    if (nextBtn) {
      nextBtn.disabled = currentPage >= totalPages;
    }

    // Update Counter Summary
    if (pageCounter) {
      const start = startIndex + 1;
      const end = Math.min(endIndex, totalItems);
      pageCounter.textContent = `Showing ${start}–${end} of ${totalItems} certificates (Page ${currentPage} of ${totalPages})`;
    }

    // Toggle pagination wrapper visibility: auto-hides if <= 8, auto-shows if > 8
    if (paginationWrapper) {
      paginationWrapper.style.display = totalPages > 1 ? 'flex' : 'none';
    }

    // Smooth scroll back to top of certificates section
    if (shouldScroll) {
      const certSection = document.getElementById('certificates');
      if (certSection) {
        const rect = certSection.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 80;
        if (window.scrollY > targetY) {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }
  }

  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(true);
      }
    });
  }

  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(allCards.length / ITEMS_PER_PAGE);
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(true);
      }
    });
  }

  // Initial render (Page 1: 1st 8 certificates shown, rest hidden if > 8)
  renderPage(false);
}

/* ==============================================================================
   CONTACT ACTIONS & TOAST
   ============================================================================== */
let toastTimeout;
function showToast(message, icon = '✓', variant = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.className = 'toast';
  if (variant) {
    toast.classList.add(`toast-${variant}`);
  }

  let iconHtml = `<span style="color:var(--cyan)">✓</span>`;
  if (icon === '🛡️') {
    iconHtml = `<span style="color:#38bdf8;font-size:16px;">🛡️</span>`;
  } else if (icon === '🔒') {
    iconHtml = `<span style="color:#ef4444;font-size:16px;">🔒</span>`;
  } else if (icon === '⚠️') {
    iconHtml = `<span style="color:#f59e0b;font-size:16px;">⚠️</span>`;
  } else if (icon !== '✓') {
    iconHtml = `<span>${icon}</span>`;
  }

  toast.innerHTML = `${iconHtml} <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initContactActions() {
  // Copy Email button
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'vikramgudihal@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Email: ' + email);
        });
      } else {
        showToast('Email: ' + email);
      }
    });
  }

  // Resume Download buttons
  document.querySelectorAll('.cv-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Downloading Vikram Gudihal Resume (PDF)...');
    });
  });

  // Contact quick message form
  const contactForm = document.getElementById('quickContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || '';
      const email = document.getElementById('formEmail')?.value || '';
      const message = document.getElementById('formMessage')?.value || '';

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Vikram,\n\n${message}\n\nFrom: ${name} (${email})`);

      showToast('Opening your email client to send message...');

      setTimeout(() => {
        window.location.href = `mailto:vikramgudihal@gmail.com?subject=${subject}&body=${body}`;
      }, 700);

      contactForm.reset();
    });
  }
}

/* ==============================================================================
   CURRENT YEAR
   ============================================================================== */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==============================================================================
   PORTFOLIO SECURITY SHIELD
   - Disables Right Click (Inspect Context Menu) with security notice
   - Disables DevTools Keyboard Shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S) with security notice
   - Prevents unauthorized general text copying while keeping legitimate copy buttons & forms functional
   - Alerts on Developer Mode / DevTools opening
   ============================================================================== */
function initSecurityShield() {
  let lastToastTime = 0;
  function rateLimitedToast(message, icon = '🛡️', variant = 'warn') {
    const now = Date.now();
    if (now - lastToastTime > 1800) {
      lastToastTime = now;
      showToast(message, icon, variant);
    }
  }

  // 1. Disable Right Click Context Menu (inspect element prevention)
  document.addEventListener('contextmenu', (e) => {
    const targetTag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '';
    // Allow right click ONLY inside text inputs if user is filling contact form
    if (targetTag === 'input' || targetTag === 'textarea') {
      return;
    }
    e.preventDefault();
    rateLimitedToast('Right-click & inspect element are disabled to protect assets.', '🛡️', 'warn');
  });

  // 2. Disable DevTools Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S)
  window.addEventListener('keydown', (e) => {
    const isCtrl = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const key = (e.key || '').toUpperCase();
    const keyCode = e.keyCode || e.which;

    const isF12 = key === 'F12' || keyCode === 123;
    const isInspect = isCtrl && isShift && (key === 'I' || keyCode === 73);
    const isConsole = isCtrl && isShift && (key === 'J' || keyCode === 74);
    const isElementSelect = isCtrl && isShift && (key === 'C' || keyCode === 67);
    const isViewSource = isCtrl && !isShift && (key === 'U' || keyCode === 85);
    const isSavePage = isCtrl && !isShift && (key === 'S' || keyCode === 83);

    if (isF12 || isInspect || isConsole || isElementSelect || isViewSource || isSavePage) {
      e.preventDefault();
      e.stopPropagation();
      rateLimitedToast('Developer tools & page inspection are restricted.', '🔒', 'security');
      return false;
    }
  }, true);

  // 3. Disable Text Copying / Cutting (Except legitimate inputs & copy buttons)
  document.addEventListener('copy', (e) => {
    const activeEl = document.activeElement;
    const activeTag = activeEl && activeEl.tagName ? activeEl.tagName.toLowerCase() : '';
    // Allow copy inside form inputs/textareas
    if (activeTag === 'input' || activeTag === 'textarea') {
      return;
    }

    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      e.preventDefault();
      rateLimitedToast('Content copying is disabled. Use the official copy buttons instead.', '⚠️', 'warn');
    }
  });

  document.addEventListener('cut', (e) => {
    const activeEl = document.activeElement;
    const activeTag = activeEl && activeEl.tagName ? activeEl.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea') {
      return;
    }
    e.preventDefault();
    rateLimitedToast('Content cutting is disabled.', '⚠️', 'warn');
  });

  // 4. DevTools Open Detection (Window Dimension Analysis)
  let devToolsWarned = false;
  function checkDevTools() {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if ((widthDiff > threshold || heightDiff > threshold) && !devToolsWarned) {
      devToolsWarned = true;
      rateLimitedToast('Developer tools detected. Portfolio content is protected.', '🛡️', 'security');
      try {
        console.clear();
        console.log(
          '%c🛡️ VIKRAM GUDIHAL PORTFOLIO SECURITY%c\nUnauthorized source scraping or reverse-engineering is restricted.',
          'color: #06b6d4; font-size: 16px; font-weight: 800; padding: 6px 12px; background: #0b0f17; border-radius: 6px;',
          'color: #94a3b8; font-size: 12px; margin-top: 4px;'
        );
      } catch (err) {}
    }
  }

  window.addEventListener('resize', checkDevTools);
  setTimeout(checkDevTools, 1500);
}

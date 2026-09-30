/**
 * Portfolio JavaScript - Sonita
 * Interactive features, modals, animations, and controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initSkillBars();
  initCounters();
  initModals();
  initTestimonialSlider();
  initSmoothScroll();
  initMobileNav();
});

/* ----------------- Animated Skill Bars ----------------- */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetPercent = bar.getAttribute('data-percent');
        bar.style.width = targetPercent + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

/* ----------------- Animated Counters ----------------- */
function initCounters() {
  const stats = [
    { id: 'statProjects', target: 10, suffix: '+' },
    { id: 'statClients', target: 5, suffix: '+' },
    { id: 'statReach', target: 100, suffix: 'K+' }
  ];

  stats.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    let start = 0;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / item.target));

    const timer = setInterval(() => {
      start += 1;
      el.textContent = start + item.suffix;
      if (start >= item.target) {
        clearInterval(timer);
        el.textContent = item.target + item.suffix;
      }
    }, Math.max(stepTime, 20));
  });
}

/* ----------------- Case Studies Data ----------------- */
const caseStudiesData = {
  ecommerce: {
    title: "E-commerce Brand Growth",
    category: "Social Media & Content Strategy",
    metrics: [
      { label: "Follower Growth", value: "+250%" },
      { label: "Sales Increase", value: "+140%" },
      { label: "ROAS Achieved", value: "4.8x" }
    ],
    overview: "Formulated and executed a full-funnel social media content calendar and aesthetic rebranding for a contemporary fashion label.",
    challenge: "The brand struggled with low organic reach, inconsistent posting cadence, and an audience that wasn't converting to paying customers.",
    strategy: "Introduced engaging short-form lookbook videos, micro-influencer gifting partnerships, and targeted retargeting ads focusing on high-intent cart abandoners.",
    results: "Grew Instagram and TikTok community from 12K to 42K active engaged followers, generating over $85,000 in direct online revenue within 4 months."
  },
  seo: {
    title: "Website SEO Optimization",
    category: "Technical SEO & Inbound Marketing",
    metrics: [
      { label: "Organic Traffic", value: "+180%" },
      { label: "Page 1 Keywords", value: "34+" },
      { label: "Domain Authority", value: "+14 pts" }
    ],
    overview: "Comprehensive search engine optimization and topic-cluster content revamp for a SaaS and services portal.",
    challenge: "High bounce rates, slow site load times, and missing keyword indexing caused the company to lose valuable organic inbound leads to competitors.",
    strategy: "Audited and resolved core web vitals issues, updated metadata architecture, cleaned backlink profiles, and deployed 15 in-depth topical articles addressing key search intent.",
    results: "Organic search visits skyrocketed by 180% in 90 days. Boosted 34 competitive commercial keywords to Google's Top 5 search positions."
  },
  tiktok: {
    title: "TikTok Ads Campaign",
    category: "Paid Advertising & Creative Production",
    metrics: [
      { label: "Video Views", value: "1.2M+" },
      { label: "First Month ROI", value: "5.2%" },
      { label: "CTR Average", value: "3.4%" }
    ],
    overview: "Scripted, produced, and managed dynamic spark ads and direct-response video campaigns on TikTok for a consumer lifestyle startup.",
    challenge: "Traditional static graphic ads were delivering declining conversion rates and high customer acquisition costs among Gen Z / millennial demographics.",
    strategy: "Created native UGC (User-Generated Content) style video hooks, relatable storytelling formats, and optimized A/B creative testing variants with localized audio trends.",
    results: "Achieved over 1.2 Million impressions and lowered Cost-Per-Click by 38%, producing 5.2% blended return-on-investment within the introductory 30 days."
  }
};

/* ----------------- Modals Management ----------------- */
function initModals() {
  const contactModal = document.getElementById('contactModal');
  const caseStudyModal = document.getElementById('caseStudyModal');
  const servicesModal = document.getElementById('servicesModal');
  const cvModal = document.getElementById('cvModal');

  // Open Contact Modal buttons
  const contactTriggers = document.querySelectorAll('.open-contact-modal');
  contactTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(contactModal);
    });
  });

  // Open Services Modal
  const servicesBtn = document.getElementById('btnViewAllServices');
  if (servicesBtn) {
    servicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(servicesModal);
    });
  }

  // Open CV Modal / Download
  const downloadCvBtn = document.getElementById('btnDownloadCV');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(cvModal);
    });
  }

  // Open Case Studies
  const caseStudyButtons = document.querySelectorAll('[data-case-study]');
  caseStudyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute('data-case-study');
      loadCaseStudy(studyKey);
      openModal(caseStudyModal);
    });
  });

  // Close modals on click overlay or close button
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close-btn')) {
        closeModal(overlay);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m));
    }
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        closeModal(contactModal);
        showToast("Message sent successfully! Sonita will reply to you soon.");
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 700);
    });
  }
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

function loadCaseStudy(key) {
  const data = caseStudiesData[key];
  if (!data) return;

  document.getElementById('modalCaseTitle').textContent = data.title;
  document.getElementById('modalCaseCategory').textContent = data.category;
  document.getElementById('modalCaseOverview').textContent = data.overview;
  document.getElementById('modalCaseChallenge').textContent = data.challenge;
  document.getElementById('modalCaseStrategy').textContent = data.strategy;
  document.getElementById('modalCaseResults').textContent = data.results;

  const metricsContainer = document.getElementById('modalCaseMetrics');
  if (metricsContainer) {
    metricsContainer.innerHTML = data.metrics.map(m => `
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 12px 14px; text-align: center;">
        <div style="font-size: 1.35rem; font-weight: 800; color: #3356A1;">${m.value}</div>
        <div style="font-size: 0.72rem; font-weight: 600; color: #64748B;">${m.label}</div>
      </div>
    `).join('');
  }
}

/* ----------------- Toast Notification ----------------- */
function showToast(text) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> ${text}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ----------------- Testimonial Carousel ----------------- */
function initTestimonialSlider() {
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const testimonials = document.querySelectorAll('.testimonial-card-item');

  let activeIndex = 0;

  function updateCards() {
    testimonials.forEach((card, idx) => {
      if (window.innerWidth <= 860) {
        card.style.display = (idx === activeIndex) ? 'flex' : 'none';
      } else {
        card.style.display = 'flex';
      }
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex === 0) ? testimonials.length - 1 : activeIndex - 1;
      updateCards();
    });

    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex === testimonials.length - 1) ? 0 : activeIndex + 1;
      updateCards();
    });
  }

  window.addEventListener('resize', updateCards);
  updateCards();
}

/* ----------------- Smooth Navigation & Active State ----------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('.nav-item a');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          links.forEach(l => l.parentElement.classList.remove('active'));
          link.parentElement.classList.add('active');
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ----------------- Mobile Navigation ----------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-links');

  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  }
}

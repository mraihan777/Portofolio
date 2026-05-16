'use strict';

// ═══════════════════════════════════════════════════════════════
// CASE STUDY — Dynamic Content Engine
// ═══════════════════════════════════════════════════════════════

const PROJECTS = {
  'rahata-store': {
    tag: 'Web App',
    tagColor: 'var(--lime)',
    title: 'RAHATA STORE',
    subtitle: 'A full-featured e-commerce web application built for Rahata Store — delivering a seamless shopping experience from product browsing to checkout.',
    role: 'Full-Stack Developer',
    year: '2025',
    type: 'E-Commerce Platform',
    image: 'assets/images/project1.png',
    demoUrl: 'https://rahata-store-777.vercel.app/',
    overview: [
      'Rahata Store is a comprehensive e-commerce web application designed to provide a complete online shopping experience. The project was born from the need to create a modern, responsive, and user-friendly platform that handles everything from product catalog management to order fulfillment.',
      'Built with a mobile-first approach, the application serves both customers and sellers through distinct interfaces — shoppers can browse products, manage carts, and track orders, while sellers get a powerful dashboard for inventory and sales management.',
      'The platform emphasizes performance, clean UI, and a smooth checkout flow to maximize conversion and user satisfaction.'
    ],
    stats: [
      { number: '50+', label: 'Product Catalog Items' },
      { number: '100%', label: 'Mobile Responsive' },
      { number: '4', label: 'Core Modules' }
    ],
    features: [
      {
        icon: '🛒',
        title: 'Shopping Cart System',
        desc: 'Real-time cart management with quantity controls, price calculations, and persistent storage across sessions.'
      },
      {
        icon: '🔐',
        title: 'User Authentication',
        desc: 'Secure login and registration flow with input validation and session management for both buyers and sellers.'
      },
      {
        icon: '📦',
        title: 'Order Management',
        desc: 'Complete order lifecycle from checkout to fulfillment, with status tracking and transaction history.'
      },
      {
        icon: '📊',
        title: 'Seller Dashboard',
        desc: 'Admin interface for managing product listings, monitoring orders, and controlling inventory levels.'
      },
      {
        icon: '🔍',
        title: 'Product Search & Filter',
        desc: 'Dynamic filtering system with category-based browsing and keyword search for quick product discovery.'
      },
      {
        icon: '📱',
        title: 'Responsive Design',
        desc: 'Mobile-first layout that adapts seamlessly from phone screens to desktop, ensuring accessibility everywhere.'
      }
    ],
    techStack: [
      { icon: '🌐', name: 'HTML5', primary: true },
      { icon: '🎨', name: 'CSS3', primary: true },
      { icon: '⚡', name: 'JavaScript', primary: true },
      { icon: '💾', name: 'LocalStorage', primary: false },
      { icon: '🚀', name: 'Vercel', primary: false },
      { icon: '🐙', name: 'Git', primary: false }
    ],
    challenges: [
      {
        challenge: 'Managing complex cart state across different pages without a backend database or state management library.',
        solution: 'Implemented a custom state management layer using LocalStorage with event-driven updates, ensuring cart data persists and syncs across all pages.'
      },
      {
        challenge: 'Building a responsive layout that works across all device sizes while maintaining the visual richness of the design.',
        solution: 'Adopted a mobile-first CSS strategy with fluid typography, CSS Grid for layouts, and strategic breakpoints for each component.'
      },
      {
        challenge: 'Creating a smooth and intuitive checkout flow that minimizes user friction and cart abandonment.',
        solution: 'Designed a multi-step checkout process with clear progress indicators, form validation feedback, and order summary confirmations.'
      }
    ],
    results: {
      summary: 'Rahata Store demonstrates a complete e-commerce solution built entirely with frontend technologies. The project showcases the ability to create complex, production-ready applications without relying on heavy frameworks.',
      learnings: [
        'Deep understanding of state management patterns in vanilla JavaScript applications',
        'Mastery of responsive design principles and mobile-first CSS architecture',
        'Experience building multi-role user interfaces (buyer vs. seller views)',
        'Practical skills in deployment and hosting with Vercel'
      ]
    }
  },

  'bank-sampah': {
    tag: 'Web App',
    tagColor: 'var(--blue)',
    title: 'BANK SAMPAH',
    subtitle: 'A web-based waste bank management system that digitizes waste collection, point tracking, and community engagement for environmental sustainability.',
    role: 'Full-Stack Developer',
    year: '2025',
    type: 'Management System',
    image: 'assets/images/project2.png',
    demoUrl: 'https://bank-sampah-tan.vercel.app/',
    overview: [
      'Bank Sampah (Waste Bank) is a digital platform designed to manage and streamline waste bank operations at the community level. In Indonesia, Bank Sampah is a community-driven initiative where residents collect, sort, and deposit recyclable waste in exchange for monetary credit or points.',
      'This application replaces the traditional paper-based tracking system with a modern web interface that handles user registration, waste deposits, point calculations, and transaction history — making the entire process transparent, efficient, and environmentally impactful.',
      'The platform encourages recycling participation through a gamified point system and provides administrators with clear visibility into collection volumes and community engagement metrics.'
    ],
    stats: [
      { number: '♻️', label: 'Environmental Impact' },
      { number: '5+', label: 'Waste Categories' },
      { number: '100%', label: 'Digital Tracking' }
    ],
    features: [
      {
        icon: '📋',
        title: 'User Registration',
        desc: 'Community members can register and maintain profiles, tracking their personal recycling contributions over time.'
      },
      {
        icon: '♻️',
        title: 'Waste Collection Tracking',
        desc: 'Record each waste deposit with category, weight, and timestamp — providing a complete history of community recycling efforts.'
      },
      {
        icon: '⭐',
        title: 'Point Calculation System',
        desc: 'Automated point calculation based on waste type and weight, with configurable pricing for different material categories.'
      },
      {
        icon: '📊',
        title: 'Transaction History',
        desc: 'Detailed logs of all deposits and withdrawals, giving both users and admins full transparency into operations.'
      },
      {
        icon: '👥',
        title: 'Community Dashboard',
        desc: 'Overview of total collections, active members, and environmental impact metrics at a glance.'
      },
      {
        icon: '📱',
        title: 'Responsive Interface',
        desc: 'Works smoothly on mobile devices, ideal for field workers recording waste collections in real-time.'
      }
    ],
    techStack: [
      { icon: '🌐', name: 'HTML5', primary: true },
      { icon: '🎨', name: 'CSS3', primary: true },
      { icon: '⚡', name: 'JavaScript', primary: true },
      { icon: '💾', name: 'LocalStorage', primary: false },
      { icon: '🚀', name: 'Vercel', primary: false },
      { icon: '🐙', name: 'Git', primary: false }
    ],
    challenges: [
      {
        challenge: 'Designing a pricing system flexible enough to handle different waste categories with varying rates and units.',
        solution: 'Created a configurable pricing engine that allows admins to set per-kilogram rates for each waste category, with automatic total calculations on deposit.'
      },
      {
        challenge: 'Making the app usable by community workers with varying levels of tech literacy.',
        solution: 'Focused on simplicity — large touch targets, clear visual hierarchy, minimal text input, and instant visual feedback for every action.'
      },
      {
        challenge: 'Tracking cumulative statistics and generating meaningful environmental impact reports.',
        solution: 'Built a real-time aggregation system that computes totals, averages, and trends from transaction data, displayed in an intuitive dashboard.'
      }
    ],
    results: {
      summary: 'Bank Sampah represents a meaningful application of technology for social and environmental good. The project demonstrates how web development skills can be applied to solve real community challenges — digitizing traditional processes and encouraging sustainable behavior.',
      learnings: [
        'Understanding of domain-specific business logic and workflow automation',
        'Experience designing for non-technical users and accessibility considerations',
        'Skills in data aggregation and dashboard visualization',
        'Appreciation for technology\'s role in environmental sustainability'
      ]
    }
  },

  'martmut-pictures': {
    tag: 'Web App + SPK',
    tagColor: 'var(--pink)',
    title: 'MARTMUT PICTURES',
    subtitle: 'A dual-purpose platform combining photographer service selection with a Decision Support System (SPK) using the Weighted Product method for promotional channel optimization.',
    role: 'Full-Stack Developer',
    year: '2026',
    type: 'Service Platform + DSS',
    image: 'assets/images/project3.png',
    image2: 'assets/images/project4.png',
    demoUrl: 'https://martmutpictures.vercel.app/',
    demoUrl2: 'https://martmut-pictures-website-spk.vercel.app/',
    overview: [
      'MartmutPictures is a comprehensive platform designed for a photography business. It consists of two interconnected systems: a public-facing website for showcasing services and a protected gallery, plus a Decision Support System (SPK) that helps the business owner determine optimal promotional channels.',
      'The SPK module implements the Weighted Product (WP) method — a multi-criteria decision-making technique that evaluates promotional platforms (social media, marketplaces, etc.) based on weighted criteria such as reach, cost, engagement rate, and conversion potential.',
      'This project bridges creative service presentation with data-driven business intelligence, providing actionable insights for marketing strategy.'
    ],
    stats: [
      { number: 'WP', label: 'Weighted Product Method' },
      { number: '2', label: 'Integrated Systems' },
      { number: '5+', label: 'Decision Criteria' }
    ],
    features: [
      {
        icon: '📸',
        title: 'Service Showcase',
        desc: 'Beautiful gallery of photography packages with pricing, descriptions, and portfolio samples for client browsing.'
      },
      {
        icon: '🧠',
        title: 'SPK Engine (Weighted Product)',
        desc: 'Fully functional DSS that ranks promotional channels using multi-criteria analysis with configurable weights and alternatives.'
      },
      {
        icon: '🔒',
        title: 'Protected Gallery',
        desc: 'Client photo gallery with right-click and download protection, ensuring customer privacy and content security.'
      },
      {
        icon: '📊',
        title: 'Ranking Dashboard',
        desc: 'Visual display of SPK results with ranked alternatives, scores, and comparative analysis charts.'
      },
      {
        icon: '⚙️',
        title: 'Admin Configuration',
        desc: 'Interface for managing criteria weights, adding alternatives, and running decision calculations on demand.'
      },
      {
        icon: '🎨',
        title: 'Brand-Consistent Design',
        desc: 'Custom visual identity reflecting the MartmutPictures brand across both the public site and SPK dashboard.'
      }
    ],
    techStack: [
      { icon: '🌐', name: 'HTML5', primary: true },
      { icon: '🎨', name: 'CSS3', primary: true },
      { icon: '⚡', name: 'JavaScript', primary: true },
      { icon: '🧠', name: 'WP Method', primary: true },
      { icon: '🚀', name: 'Vercel', primary: false },
      { icon: '🐙', name: 'Git', primary: false }
    ],
    challenges: [
      {
        challenge: 'Implementing the Weighted Product mathematical formula accurately in JavaScript with proper normalization and vector computation.',
        solution: 'Broke down the WP algorithm into discrete steps — weight normalization (Σwj = 1), vector S calculation (Πxij^wj), and vector V ranking — with validation at each stage.'
      },
      {
        challenge: 'Protecting gallery images from unauthorized downloading while keeping the browsing experience smooth.',
        solution: 'Implemented multiple layers: CSS overlay to block right-click, disabled context menu, prevented drag operations, and used CSS properties to disable selection.'
      },
      {
        challenge: 'Designing two distinct but visually connected systems (public site + SPK dashboard) under one cohesive brand.',
        solution: 'Created a shared design system with consistent typography, color palette, and component patterns, while allowing each system to have its own layout optimized for its purpose.'
      }
    ],
    results: {
      summary: 'MartmutPictures demonstrates the intersection of creative web design and analytical decision-making systems. The project showcases the ability to implement complex mathematical models in a user-friendly web interface while maintaining strong visual identity.',
      learnings: [
        'Deep understanding of Decision Support System methodologies (SAW, WP, TOPSIS)',
        'Skills in implementing mathematical algorithms in frontend JavaScript',
        'Experience in content protection and digital rights management on the web',
        'Ability to design cohesive multi-system platforms with shared design languages'
      ]
    }
  }
};

// ─── ROUTE LOOKUP ────────────────────────────────────────────────
const PROJECT_KEYS = Object.keys(PROJECTS);

function getProjectSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('project') || PROJECT_KEYS[0];
}

function getAdjacentProjects(currentSlug) {
  const idx = PROJECT_KEYS.indexOf(currentSlug);
  const prev = idx > 0 ? PROJECT_KEYS[idx - 1] : PROJECT_KEYS[PROJECT_KEYS.length - 1];
  const next = idx < PROJECT_KEYS.length - 1 ? PROJECT_KEYS[idx + 1] : PROJECT_KEYS[0];
  return { prev, next };
}

// ─── RENDER ENGINE ───────────────────────────────────────────────
function renderCaseStudy() {
  const slug = getProjectSlug();
  const project = PROJECTS[slug];

  if (!project) {
    document.querySelector('.case-hero-inner').innerHTML = `
      <a href="index.html#projects" class="case-back-link">← Back to Projects</a>
      <h1 class="case-hero-title">PROJECT NOT FOUND</h1>
      <p class="case-hero-subtitle">The requested project does not exist.</p>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} — Case Study | Muhammad Raihan`;

  // Hero
  document.getElementById('case-tag').textContent = project.tag;
  document.getElementById('case-tag').style.background = project.tagColor;
  document.getElementById('case-title').textContent = project.title;
  document.getElementById('case-subtitle').textContent = project.subtitle;
  document.getElementById('case-role').textContent = project.role;
  document.getElementById('case-year').textContent = project.year;
  document.getElementById('case-type').textContent = project.type;

  // Showcase Image(s)
  const showcaseContainer = document.getElementById('case-showcase-container');
  if (project.image2) {
    // Dual image layout for projects with two systems
    showcaseContainer.innerHTML = `
      <div class="case-showcase-dual fade-up">
        <div class="case-showcase-card">
          <div class="case-showcase-card-label">
            <span class="case-showcase-card-dot" style="background:var(--lime);"></span>
            Web App — Photographer Service
          </div>
          <div class="case-showcase-img">
            <img src="${project.image}" alt="${project.title} — Web App screenshot" loading="lazy" />
            <div class="case-showcase-overlay"></div>
          </div>
          <div class="case-showcase-card-footer">
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="case-showcase-card-link">
              View Live Demo →
            </a>
          </div>
        </div>
        <div class="case-showcase-card">
          <div class="case-showcase-card-label">
            <span class="case-showcase-card-dot" style="background:var(--pink);"></span>
            SPK System — Weighted Product Method
          </div>
          <div class="case-showcase-img">
            <img src="${project.image2}" alt="${project.title} — SPK system screenshot" loading="lazy" />
            <div class="case-showcase-overlay"></div>
          </div>
          <div class="case-showcase-card-footer">
            <a href="${project.demoUrl2}" target="_blank" rel="noopener noreferrer" class="case-showcase-card-link">
              View SPK Demo →
            </a>
          </div>
        </div>
      </div>
    `;
  } else {
    // Single image layout
    showcaseContainer.innerHTML = `
      <div class="case-showcase-img fade-up">
        <img src="${project.image}" alt="${project.title} screenshot" loading="lazy" />
        <div class="case-showcase-overlay"></div>
      </div>
    `;
  }

  // Overview Text
  const overviewContainer = document.getElementById('case-overview-text');
  overviewContainer.innerHTML = project.overview.map(p => `<p>${p}</p>`).join('');

  // Overview Stats
  project.stats.forEach((stat, i) => {
    const card = document.getElementById(`case-stat-${i + 1}`);
    card.querySelector('.case-stat-number').textContent = stat.number;
    card.querySelector('.case-stat-label').textContent = stat.label;
  });

  // Features
  const featuresGrid = document.getElementById('case-features-grid');
  featuresGrid.innerHTML = project.features.map((feat, i) => `
    <div class="case-feature-card" style="transition-delay: ${i * 0.08}s;">
      <span class="case-feature-icon">${feat.icon}</span>
      <h3 class="case-feature-title">${feat.title}</h3>
      <p class="case-feature-desc">${feat.desc}</p>
      <span class="case-feature-number">${String(i + 1).padStart(2, '0')}</span>
    </div>
  `).join('');

  // Tech Stack
  const techGrid = document.getElementById('case-tech-grid');
  techGrid.innerHTML = project.techStack.map((tech, i) => `
    <div class="case-tech-item${tech.primary ? ' tech-primary' : ''}" style="transition-delay: ${i * 0.06}s;">
      <span class="tech-icon">${tech.icon}</span>
      ${tech.name}
    </div>
  `).join('');

  // Challenges
  const challengesList = document.getElementById('case-challenges-list');
  challengesList.innerHTML = project.challenges.map((item, i) => `
    <div class="case-challenge-item" style="transition-delay: ${i * 0.1}s;">
      <div class="case-challenge-left">
        <span class="case-challenge-label">Challenge</span>
        <p class="case-challenge-text">${item.challenge}</p>
      </div>
      <div class="case-challenge-right">
        <span class="case-solution-label">Solution</span>
        <p class="case-solution-text">${item.solution}</p>
      </div>
    </div>
  `).join('');

  // Results
  const resultsContent = document.getElementById('case-results-content');
  resultsContent.innerHTML = `
    <h3>Project Outcome</h3>
    <p>${project.results.summary}</p>
    <h3 style="margin-top:1.5rem;">Key Learnings</h3>
    <ul class="case-learning-list">
      ${project.results.learnings.map(l => `<li>${l}</li>`).join('')}
    </ul>
  `;

  // CTA Links
  document.getElementById('case-demo-link').href = project.demoUrl;

  // If project has 2 demo URLs (MartmutPictures), add second button
  if (project.demoUrl2) {
    const ctaButtons = document.querySelector('.case-cta-buttons');
    const secondBtn = document.createElement('a');
    secondBtn.href = project.demoUrl2;
    secondBtn.target = '_blank';
    secondBtn.rel = 'noopener noreferrer';
    secondBtn.className = 'btn btn-pink';
    secondBtn.style.fontSize = '0.9rem';
    secondBtn.textContent = 'View SPK Demo →';
    ctaButtons.insertBefore(secondBtn, ctaButtons.children[1]);
  }

  // Navigation
  const { prev, next } = getAdjacentProjects(slug);
  document.getElementById('case-prev-link').href = `project.html?project=${prev}`;
  document.getElementById('case-prev-title').textContent = PROJECTS[prev].title;
  document.getElementById('case-next-link').href = `project.html?project=${next}`;
  document.getElementById('case-next-title').textContent = PROJECTS[next].title;

  // ── Re-observe dynamically injected .fade-up elements ──
  // (script.js observer runs at page load before this content exists)
  const newFadeEls = document.querySelectorAll('.fade-up:not(.visible)');
  const dynamicObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        dynamicObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  newFadeEls.forEach(el => dynamicObserver.observe(el));

  // ── Trigger animations after render ──
  requestAnimationFrame(() => {
    setTimeout(() => {
      // Animate feature cards
      document.querySelectorAll('.case-feature-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 100);
      });

      // Animate tech items
      document.querySelectorAll('.case-tech-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 80);
      });

      // Animate challenge items
      document.querySelectorAll('.case-challenge-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 120);
      });
    }, 300);
  });
}

// ─── INTERSECTION OBSERVER for scroll animations ─────────────────
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.case-feature-card, .case-tech-item, .case-challenge-item'
  );

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  animatedElements.forEach(el => scrollObserver.observe(el));
}

// ─── INIT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCaseStudy();

  // Delay observer setup to let DOM render
  setTimeout(initScrollAnimations, 100);
});

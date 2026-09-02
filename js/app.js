const langToggle = document.getElementById("langToggle");
const langText = document.getElementById("langText");
const projectGrid = document.getElementById("projectGrid");
const filtersEl = document.getElementById("filters");
const techChips = document.getElementById("techChips");
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");

let currentLang = "ar";
let currentFilter = "all";

const categoryLabel = {
  web: { ar: "ويب", en: "Web" },
  desktop: { ar: "سطح مكتب", en: "Desktop" },
  mobile: { ar: "موبايل", en: "Mobile" }
};

const projects = [
  {
    id: "advo",
    category: "web",
    featured: true,
    image: "images/advo.jpg",
    url: "https://advopassion.uaedv.com/",
    ar: {
      name: "ADVO PASSION",
      desc: "منصة سياحية لحجز المغامرات داخل الإمارات: اكتشاف الفعاليات حسب الإمارة والفئة، حجز موعد، ودفع عبر Stripe، مع لوحة إدارة للمغامرات والحجوزات والمستخدمين والخصومات.",
      tech: ["Web", "Stripe", "Full-stack"]
    },
    en: {
      name: "ADVO PASSION",
      desc: "A tourism platform for booking adventures across the UAE: discover activities by emirate and category, book a slot, and pay via Stripe, with an admin panel for adventures, bookings, users, and discounts.",
      tech: ["Web", "Stripe", "Full-stack"]
    }
  },
  {
    id: "balance",
    category: "web",
    image: "images/balance.jpg",
    url: "https://balancetrain.uaedv.com/",
    ar: {
      name: "Balance",
      desc: "منصة PWA تربط المدربين الشخصيين بالمتدربين: خطط تدريب وتغذية، تتبع تقدم، محادثات فورية، جلسات فيديو مباشرة، واشتراكات مدفوعة — ثنائية اللغة (عربي/إنجليزي).",
      tech: ["PWA", "Stripe", "Real-time", "Gemini"]
    },
    en: {
      name: "Balance",
      desc: "A PWA platform connecting personal trainers with trainees: training and nutrition plans, progress tracking, instant chat, live video sessions, and paid subscriptions — bilingual (Arabic/English).",
      tech: ["PWA", "Stripe", "Real-time", "Gemini"]
    }
  },
  {
    id: "carrental",
    category: "web",
    image: "images/carrental.jpg",
    url: "https://carrental.axeesports.com/",
    ar: {
      name: "Dubai Car Rental",
      desc: "منصة تأجير سيارات فاخرة في دبي: تطبيق عميل (Flutter) ولوحة إدارة. مصادقة، حجوزات متعددة الخطوات، رفع وثائق، موافقات، ودفع، مع أمان RLS على Supabase.",
      tech: ["Flutter", "Supabase", "Chart.js"]
    },
    en: {
      name: "Dubai Car Rental",
      desc: "A luxury car rental platform in Dubai: customer app (Flutter) and admin panel. Auth, multi-step bookings, document upload, approvals, and payments, with RLS security on Supabase.",
      tech: ["Flutter", "Supabase", "Chart.js"]
    }
  },
  {
    id: "hihfad-web",
    category: "web",
    image: "images/hihfad-web.jpg",
    url: "https://com-example-medical-booking-app.en.uptodown.com/android",
    ar: {
      name: "HIHFAD",
      desc: "نظام حجز مواعيد طبية متعدد المراكز (RTL عربي): المريض والمدير والمسؤول العام. قواعد حقيقية (تقييد العمر/الجنس)، إشعارات فورية، ومساعد محادثة عربي.",
      tech: ["Web", "RTL", "Alerts", "Chatbot"]
    },
    en: {
      name: "HIHFAD",
      desc: "A multi-center medical appointment booking system (Arabic RTL) for patients, center managers, and super admins. Real rules (age/gender limits), instant notifications, and an Arabic chatbot.",
      tech: ["Web", "RTL", "Alerts", "Chatbot"]
    }
  },
  {
    id: "qwick",
    category: "web",
    image: "images/qwick.jpg",
    url: "https://quick-sha3ban.netlify.app/",
    ar: {
      name: "Qwick",
      desc: "إدارة طوابير المحلات بدون طابعة أرقام: انضمام عبر QR، لوحة موظف (استدعاء/تخطي)، شاشة عرض، وتقدير وقت الانتظار. Supabase Realtime وWeb Push وثنائي اللغة.",
      tech: ["Supabase", "Real-time", "Web Push", "PWA"]
    },
    en: {
      name: "Qwick",
      desc: "A hardware-free queue management web app: join via QR, staff dashboard (next/skip), public TV display, and wait-time estimation. Supabase Realtime, Web Push, and bilingual.",
      tech: ["Supabase", "Real-time", "Web Push", "PWA"]
    }
  },
  {
    id: "dentassist",
    category: "desktop",
    image: "images/dentassist.jpg",
    url: "https://dentassist-pro1.netlify.app/",
    ar: {
      name: "DentAssist Pro",
      desc: "نظام إدارة عيادة أسنان (Desktop + PWA): المخطط السني FDI، الخطط العلاجية، الفوترة، الصندوق، المخابر، والتقارير. يعمل محلياً دون سحابة للبيانات الطبية.",
      tech: ["React", "TypeScript", "Electron", "SQLite"]
    },
    en: {
      name: "DentAssist Pro",
      desc: "A dental clinic management system (Desktop + PWA): FDI dental chart, treatment plans, billing, cashbox, labs, and reports. Runs locally with medical data kept off the cloud.",
      tech: ["React", "TypeScript", "Electron", "SQLite"]
    }
  },
  {
    id: "pos",
    category: "desktop",
    image: "images/pos.jpg",
    url: "https://sha3ban-pos.en.uptodown.com/android",
    ar: {
      name: "نقطة بيع (POS)",
      desc: "نظام نقطة بيع Offline-first للمحلات الصغيرة والمتوسطة: مسح باركود، طباعة إيصالات Bluetooth، 3 عملات، تقارير، مرتجعات، ونسخ احتياطي JSON.",
      tech: ["Offline-first", "Bluetooth", "PDF", "Multi-currency"]
    },
    en: {
      name: "POS (Point of Sale)",
      desc: "An offline-first POS system for small/medium shops: barcode scanning, Bluetooth receipt printing, 3 currencies, reports, returns, and JSON backup.",
      tech: ["Offline-first", "Bluetooth", "PDF", "Multi-currency"]
    }
  },
  {
    id: "cvpro",
    category: "web",
    image: "images/cvpro.jpg",
    url: "https://mohammed940.github.io/CV-Sha3ban",
    ar: {
      name: "CV Pro",
      desc: "منشئ سيرة ذاتية عربي يعمل على جهاز المستخدم (localStorage فقط): 4 قوالب، 8 ألوان، عربي/إنجليزي، وصفة غلاف، ووضع ATS — بخصوصية كاملة دون خادم.",
      tech: ["Client-side", "localStorage", "RTL", "PDF"]
    },
    en: {
      name: "CV Pro",
      desc: "An Arabic CV builder that runs entirely on the user's device (localStorage only): 4 templates, 8 colors, Arabic/English, cover letter, and ATS mode — fully private with no server.",
      tech: ["Client-side", "localStorage", "RTL", "PDF"]
    }
  },
  {
    id: "abien",
    category: "web",
    image: "images/abien.jpg",
    url: "https://abien-phc.netlify.app/",
    ar: {
      name: "أبين الصحي",
      desc: "نظام إدارة أدوار المرضى في مركز رعاية صحية أولية: حجز إلكتروني، عيادات، مخبر، طوارئ، صيدلية، وشاشة عرض مع إعلان صوتي عربي — Real-time عبر Supabase.",
      tech: ["Supabase", "Real-time", "RTL", "Excel export"]
    },
    en: {
      name: "Abien Health",
      desc: "A patient queue and service-flow management system for a primary care center: e-booking, clinics, lab, ER, pharmacy, and TV display with Arabic voice announcements — real-time via Supabase.",
      tech: ["Supabase", "Real-time", "RTL", "Excel export"]
    }
  },
  {
    id: "hihfad-app",
    category: "mobile",
    image: "images/hihfad-app.jpg",
    url: "https://wondrous-rugelach-c9309b.netlify.app",
    ar: {
      name: "HIHFAD Booking",
      desc: "تطبيق موبايل (Flutter) لحجز المواعيد الطبية: تصفح المراكز والعيادات، حجز بيانات المريض، منع الحجز المزدوج، إشعارات، قفل أمان، ولوحة إدارة — بخلفية Supabase.",
      tech: ["Flutter", "Supabase", "RTL", "Notifications"]
    },
    en: {
      name: "HIHFAD Booking",
      desc: "A mobile app (Flutter) for medical appointment booking: browse centers and clinics, book patient data, prevent duplicate bookings, notifications, security lock, and admin panel — backed by Supabase.",
      tech: ["Flutter", "Supabase", "RTL", "Notifications"]
    }
  }
];

const filters = {
  all: { ar: "الكل", en: "All" },
  web: { ar: "ويب", en: "Web" },
  desktop: { ar: "تطبيقات سطح المكتب", en: "Desktop" },
  mobile: { ar: "تطبيقات موبايل", en: "Mobile" }
};

const globalTech = ["React", "TypeScript", "Flutter", "Supabase", "Stripe", "SQLite", "RTL/LTR", "PWA", "Node.js", "PostgreSQL"];

langToggle.addEventListener("click", () => {
  if (currentLang === "ar") {
    currentLang = "en";
    document.body.classList.add("lang-en");
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    langText.textContent = "العربية";
  } else {
    currentLang = "ar";
    document.body.classList.remove("lang-en");
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    langText.textContent = "English";
  }
  renderChips();
  renderFilters();
  renderNav();
  renderGrid();
  closeNav();
  navToggle.setAttribute("aria-label", currentLang === "ar" ? "القائمة" : "Menu");
  const toTop = document.getElementById("toTop");
  if (toTop) toTop.setAttribute("aria-label", currentLang === "ar" ? "العودة للأعلى" : "Back to top");
});

navToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeNav);
});

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function renderChips() {
  techChips.innerHTML = globalTech.map(t => `<span>${t}</span>`).join("");
}

function renderFilters() {
  filtersEl.innerHTML = Object.entries(filters)
    .map(([key, val]) => {
      const label = currentLang === "ar" ? val.ar : val.en;
      return `<button type="button" class="filter-btn ${currentFilter === key ? "active" : ""}" data-filter="${key}">${label}</button>`;
    })
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      renderFilters();
      renderGrid();
    });
  });
}

function renderNav() {
  nav.querySelectorAll("a").forEach(a => {
    const isAr = !a.classList.contains("en");
    const showAr = currentLang === "ar";
    a.style.display = (isAr === showAr) ? "" : "none";
  });
}

function renderGrid() {
  const filtered = currentFilter === "all"
    ? projects
    : projects.filter(p => p.category === currentFilter);

  projectGrid.innerHTML = filtered.map((p, i) => {
    const d = currentLang === "ar" ? p.ar : p.en;
    const viewLabel = currentLang === "ar" ? "معاينة المشروع ←" : "Live demo →";
    const peekLabel = currentLang === "ar" ? "معاينة" : "View";
    const cat = currentLang === "ar" ? categoryLabel[p.category].ar : categoryLabel[p.category].en;
    const featured = currentFilter === "all" && p.featured ? " featured" : "";
    return `
      <article class="project-card${featured} reveal" style="--d:${i * 70}ms" data-category="${p.category}">
        <a class="card-thumb" href="${p.url}" target="_blank" rel="noopener">
          <img src="${p.image}" alt="${d.name}" loading="${i < 2 ? "eager" : "lazy"}" width="800" height="500">
          <span class="thumb-veil"></span>
          <span class="thumb-shine"></span>
          <span class="cat-badge">${cat}</span>
          <span class="thumb-view">${peekLabel}</span>
        </a>
        <div class="card-body">
          <h3 class="project-name">${d.name}</h3>
          <p class="project-desc">${d.desc}</p>
          <div class="card-tech">${d.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="card-links">
            <a href="${p.url}" class="btn-view" target="_blank" rel="noopener">${viewLabel}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  bindCardTilt();
  observeReveals(projectGrid.querySelectorAll(".reveal"));
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function observeReveals(nodes) {
  const els = nodes instanceof NodeList || Array.isArray(nodes)
    ? [...nodes]
    : [...document.querySelectorAll(".js-reveal")];

  if (reduceMotion) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -36px 0px" });

  els.forEach(el => io.observe(el));
}

function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (!target) return;
  const duration = 1100;
  const start = performance.now();

  const tick = now => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function bindCardTilt() {
  if (reduceMotion || !canHover) return;
  projectGrid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 7;
      const ry = (x - 0.5) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function setupMotion() {
  const progress = document.getElementById("scrollProgress");
  const topbar = document.querySelector(".topbar");
  const toTop = document.getElementById("toTop");
  const glow = document.getElementById("pointerGlow");
  const stats = document.querySelectorAll("[data-count]");
  let counted = false;

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    if (progress) progress.style.transform = `scaleX(${p})`;
    topbar.classList.toggle("is-scrolled", window.scrollY > 12);
    if (toTop) toTop.classList.toggle("is-on", window.scrollY > 480);

    if (!counted && window.scrollY < 400) {
      counted = true;
      if (!reduceMotion) stats.forEach(animateCount);
      else stats.forEach(el => { el.textContent = el.dataset.count + (el.dataset.suffix || ""); });
    }

    const ids = [
      { id: "about", keys: ["ar-about", "en-about"] },
      { id: "projects", keys: ["ar-projects", "en-projects"] },
      { id: "contact", keys: ["ar-contact", "en-contact"] }
    ];
    let current = "about";
    ids.forEach(s => {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top < 140) current = s.id;
    });
    nav.querySelectorAll("a").forEach(a => {
      const key = a.getAttribute("data-nav");
      const match = ids.find(s => s.id === current);
      a.classList.toggle("is-active", match && match.keys.includes(key));
    });
  };

  if (!counted) {
    counted = true;
    if (!reduceMotion) stats.forEach(animateCount);
    else stats.forEach(el => { el.textContent = el.dataset.count + (el.dataset.suffix || ""); });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  if (canHover && !reduceMotion && glow) {
    let gx = innerWidth / 2;
    let gy = innerHeight / 2;
    let tx = gx;
    let ty = gy;
    window.addEventListener("mousemove", e => {
      glow.classList.add("is-on");
      tx = e.clientX;
      ty = e.clientY;
    }, { passive: true });
    document.addEventListener("mouseleave", () => glow.classList.remove("is-on"));
    const follow = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";
      requestAnimationFrame(follow);
    };
    follow();
  }

  observeReveals();
}

function init() {
  renderChips();
  renderFilters();
  renderNav();
  renderGrid();
  setupMotion();
}

init();

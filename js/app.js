(() => {
  "use strict";

  // ===== BILINGUAL TRANSLATIONS (EN / AR) =====
  const i18n = {
    en: {
      skip: "Skip to work",
      brandWord: "SHAABAN",
      navHome: "Home",
      navWork: "Work",
      navAbout: "About",
      navJourney: "Journey",
      navContact: "Contact",
      letsTalk: "Let’s talk",
      heroTop1: "FULL-STACK WEB & APP DEVELOPER",
      heroTop2: "SYSTEMS · UI / UX ARCHITECT",
      availShort: "AVAILABLE",
      availLong: " FOR NEW PROJECTS",
      heroHello: "Hello, I’m",
      heroName: "SHAABAN",
      heroRole: "FULL-STACK DEVELOPER & <br />SYSTEMS ARCHITECT",
      heroDesc:
        "Designing interfaces. Shipping products. <br />I turn ideas into fast web platforms, desktop systems, and mobile apps people actually enjoy using — from first wireframe to launch day.",
      seeWork: "See my work",
      heroLocation: "SYRIA — ALEPPO · REMOTE WORLDWIDE",
      heroManifesto: "Every pixel. <br />A purpose.",
      stat1Label: "SHIPPED PRODUCTS <br />IN PRODUCTION",
      stat2Label: "PLATFORMS BUILT <br />WEB · DESKTOP · MOBILE",
      stat3Label: "FULL-STACK & RTL <br />ARABIC / ENGLISH",
      viewFeatured: "VIEW FEATURED BUILD",
      appWeb: "APP / WEB",
      scrollDiscover: "SCROLL TO DISCOVER",
      heroEdition: "SELECTED WORK / 2020–2026",
      workEyebrow: "01 / SELECTED WORK",
      workTitle: "WORK THAT SPEAKS",
      allWork: "ALL WORK (10)",
      featuredWork: "FEATURED WORK (3)",
      searchLabel: "Search",
      searchPlaceholder: "Title or tech…",
      resetSearch: "Reset search",
      showAllProjects: "Show all 10 projects",
      showFeaturedOnly: "Show featured only",
      builtWith: "BUILT WITH",
      toolsTrust: "THE TOOLS I TRUST.",
      seeAllTools: "SEE ALL (12)",
      showRowTools: "SHOW ROW",
      breakdownEyebrow: "DESIGN UNDER THE HOOD",
      fromWireframe: "FROM WIREFRAME.",
      toLive: "TO LIVE.",
      breakdownDesc:
        "One page. Every layer of thinking. <br />Drag to see a grey-box wireframe become a finished, live operational interface.",
      breakdownCredit:
        "SHAABAN FULL-STACK STUDIO / 2026 <br />UI/UX · ARCHITECTURE · PRODUCTION",
      wireframeLabel: "WIREFRAME",
      finalLabel: "FINAL DESIGN",
      dragProcess: "DRAG TO SEE THE PROCESS",
      dragScroll: "DRAG / SCROLL",
      aboutEyebrow: "02 / BEHIND THE CRAFT",
      moreThanCode: "MORE THAN CODE.",
      crafting: "CRAFTING ",
      experiences: "EXPERIENCES.",
      aboutBio:
        "I’m Eng. Mohammed Shaaban Rima, a flexible Full-Stack Developer who designs and builds complete operational products — frontend, backend, databases, and payments (Stripe) — with deep experience in Supabase platforms, offline-first desktop/POS apps, and bilingual Arabic/English RTL systems used daily in clinics, tourism, shops, and training.",
      expertiseHeading: "EXPERTISE & SKILLS",
      eduHeading: "ENGINEERING & ARCHITECTURE",
      edu1Title: "Full-Stack Product Engineer",
      edu1Desc: "End-to-end web, desktop (Electron), and mobile (Flutter) application engineering.",
      edu2Title: "Operational & Offline-First Systems",
      edu2Badge: "PRODUCTION",
      edu2Desc: "React · TypeScript · Flutter · Supabase · Stripe · SQLite · Bilingual RTL",
      toolkitHeading: "CREATIVE & TECH TOOLKIT",
      processHeading: "FROM CONCEPT TO LAUNCH",
      quoteText:
        "From concept <br />and user flows, <br /><em>to pixel-perfect <br />digital products.</em>",
      quoteSig: "Mohammed Shaaban",
      quoteBottom: "LET’S BUILD <br />SOMETHING EXCEPTIONAL.",
      journeyEyebrow: "03 / THE JOURNEY",
      journeyTitle: "KEEP BUILDING. KEEP SHIPPING",
      journeySub: "EXPERIENCE & MILESTONES",
      milestonesEyebrow: "A FEW MILESTONES",
      shippedWord: "SHIPPED.",
      liveUsedWord: "LIVE. USED.",
      contactEyebrow: "04 / YOUR NEXT PROJECT",
      letsBuild: "LET’S BUILD",
      together: "TOGETHER",
      contactLead:
        "Got a website, clinic system, or mobile app in mind? <br />Let’s make something people love to use.",
      startConversation: "START A CONVERSATION",
      emailLabel: "EMAIL",
      phoneLabel: "PHONE / WHATSAPP",
      flagshipLabel: "FLAGSHIP PRODUCTION",
      basedInLabel: "BASED IN",
      basedInVal: "Syria — Aleppo · Available Remote",
      reelCaption: "MOHAMMED SHAABAN — FULL-STACK STUDIO",
      tellProject: "Tell me about your project",
      yourName: "Your Name",
      projectType: "Project type",
      aboutProject: "About the project",
      continueWhatsapp: "Continue on WhatsApp",
      briefNote: "Brief will open as a draft message in WhatsApp.",
      briefReady: "Message draft is ready in WhatsApp. Press Send there to begin!",
      footerCopy: "© 2026 ENG. MOHAMMED SHAABAN RIMA · EVERY PIXEL HAS A PURPOSE.",
      visitWebsite: "Visit live project"
    },
    ar: {
      skip: "تخطي إلى الأعمال",
      brandWord: "محمد شعبان",
      navHome: "الرئيسية",
      navWork: "الأعمال",
      navAbout: "عنّي",
      navJourney: "المسيرة",
      navContact: "تواصل",
      letsTalk: "تواصل معي",
      heroTop1: "مطور منتجات ويب وتطبيقات FULL-STACK",
      heroTop2: "مهندس أنظمة · واجهات وتجربة مستخدم",
      availShort: "متاح",
      availLong: " للمشاريع الجديدة عن بُعد",
      heroHello: "مرحباً، أنا",
      heroName: "محمد شعبان",
      heroRole: "مطور FULL-STACK <br />ومهندس أنظمة تشغيلية",
      heroDesc:
        "أصمّم الواجهات وأطلق المنتجات الكاملة. <br />أحوّل الأفكار إلى منصات ويب، أنظمة سطح مكتب، وتطبيقات موبايل سريعة وعملية — من أول مخطط Wireframe حتى يوم الإطلاق.",
      seeWork: "استعرض أعمالي",
      heroLocation: "سوريا — حلب · عمل عن بُعد حول العالم",
      heroManifesto: "كل بكسل. <br />له هدف.",
      stat1Label: "منتجات مطلقة <br />تعمل في الإنتاج",
      stat2Label: "منصات متكاملة <br />ويب · سطح مكتب · موبايل",
      stat3Label: "دعم كامل AR/EN <br />أنظمة ثنائية اللغة وRTL",
      viewFeatured: "معاينة العمل المميز",
      appWeb: "تطبيق / ويب",
      scrollDiscover: "مرّر للاستكشاف",
      heroEdition: "أعمال مختارة / 2020–2026",
      workEyebrow: "01 / أعمال مختارة",
      workTitle: "أعمال تتحدث عن نفسها",
      allWork: "كل الأعمال (10)",
      featuredWork: "الأعمال المميزة (3)",
      searchLabel: "بحث",
      searchPlaceholder: "الاسم أو التقنية…",
      resetSearch: "إعادة ضبط البحث",
      showAllProjects: "عرض جميع المشاريع (10)",
      showFeaturedOnly: "عرض المختارة فقط",
      builtWith: "بُنيت باستخدام",
      toolsTrust: "التقنيات والأدوات التي أثق بها.",
      seeAllTools: "عرض الكل (12)",
      showRowTools: "عرض الشريط",
      breakdownEyebrow: "الهندسة خلف التصميم",
      fromWireframe: "من المخطط المبدئي.",
      toLive: "إلى المنتج الحي.",
      breakdownDesc:
        "صفحة واحدة، وكل طبقة من التفكير الهندسي. <br />اسحب المؤشر لترى كيف يتحول المخطط الهيكلي (Wireframe) إلى واجهة حية متكاملة.",
      breakdownCredit:
        "استوديو م. محمد شعبان / 2026 <br />واجهات المستخدم · هندسة الأنظمة · الإنتاج",
      wireframeLabel: "مخطط هيكلي",
      finalLabel: "التصميم النهائي",
      dragProcess: "اسحب المؤشر لمشاهدة التحول",
      dragScroll: "اسحب / مرّر",
      aboutEyebrow: "02 / خلف الكواليس",
      moreThanCode: "أكثر من مجرد كود.",
      crafting: "نصنع ",
      experiences: "تجارب متكاملة.",
      aboutBio:
        "أنا م. محمد شعبان ريمه، مطور Full-Stack مرن أصمّم وأبني منتجات ويب وتطبيقات متكاملة تشمل الواجهة، الباكند، قواعد البيانات، والدفع الإلكتروني (Stripe)، مع خبرة عميقة في منصات Supabase والتطبيقات المحلية (Offline-first) والـ PWA باللغتين العربية والإنجليزية.",
      expertiseHeading: "الخبرات والمهارات",
      eduHeading: "الهندسة وتطوير الأنظمة",
      edu1Title: "مهندس برمجيات Full-Stack",
      edu1Desc: "هندسة وتطوير تطبيقات الويب وسطح المكتب (Electron) والموبايل (Flutter).",
      edu2Title: "أنظمة تشغيلية وتطبيقات Offline-First",
      edu2Badge: "إنتاج فعلي",
      edu2Desc: "React · TypeScript · Flutter · Supabase · Stripe · SQLite · RTL",
      toolkitHeading: "حقيبة التقنيات والأدوات",
      processHeading: "من الفكرة حتى الإطلاق",
      quoteText:
        "من الفكرة الأولى <br />وتدفق المستخدم، <br /><em>إلى منتجات رقمية <br />متقنة بأدق التفاصيل.</em>",
      quoteSig: "محمد شعبان",
      quoteBottom: "لنبنِ معاً <br />منتجاً استثنائياً.",
      journeyEyebrow: "03 / المسيرة المهنية",
      journeyTitle: "مستمرون في البناء والإطلاق",
      journeySub: "الخبرات والإنجازات",
      milestonesEyebrow: "أبرز المحطات",
      shippedWord: "مشاريع أُطلقت.",
      liveUsedWord: "حيّة وتُستخدم يومياً.",
      contactEyebrow: "04 / مشروعك القادم",
      letsBuild: "لنبنِ مشروعك",
      together: "معاً",
      contactLead:
        "هل لديك فكرة موقع، نظام عيادة، أو تطبيق موبايل؟ <br />دعنا نحولها إلى منتج يحبه المستخدمون.",
      startConversation: "ابدأ محادثة الآن",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "واتساب / هاتف",
      flagshipLabel: "مشروع حي في الإنتاج",
      basedInLabel: "الموقع",
      basedInVal: "سوريا — حلب · متاح للعمل عن بُعد",
      reelCaption: "م. محمد شعبان — استوديو تطوير متكامل",
      tellProject: "أخبرني عن تفاصيل مشروعك",
      yourName: "الاسم الكريم",
      projectType: "نوع المشروع",
      aboutProject: "تفاصيل المشروع",
      continueWhatsapp: "متابعة عبر واتساب",
      briefNote: "سيتم فتح ملخص المشروع كرسالة جاهزة في واتساب.",
      briefReady: "تم تجهيز الرسالة في واتساب — اضغط إرسال لبدء المحادثة!",
      footerCopy: "© 2026 م. محمد شعبان ريمه · كل بكسل له هدف.",
      visitWebsite: "معاينة المشروع الحي"
    }
  };

  // ===== REAL PROJECTS DATA (10 SHIPPED PRODUCTS) =====
  const projects = [
    {
      id: "advo",
      category: "Web",
      featured: true,
      year: "2025",
      image: "images/advo.jpg",
      url: "https://advopassion.uaedv.com/",
      tech: ["Web", "Stripe", "Full-stack"],
      en: {
        title: "ADVO PASSION",
        role: "Full-Stack Tourism Platform · Stripe · UAE",
        desc: "A tourism platform for booking adventures across the UAE: discover activities by emirate and category, book a slot, and pay via Stripe, with a complete admin panel for adventures, bookings, users, and discounts."
      },
      ar: {
        title: "ADVO PASSION",
        role: "منصة سياحية متكاملة · Stripe · الإمارات",
        desc: "منصة سياحية لحجز المغامرات داخل الإمارات: اكتشاف الفعاليات حسب الإمارة والفئة، حجز موعد، ودفع عبر Stripe، مع لوحة إدارة للمغامرات والحجوزات والمستخدمين والخصومات."
      }
    },
    {
      id: "balance",
      category: "Web",
      featured: true,
      year: "2025",
      image: "images/balance.jpg",
      url: "https://balancetrain.uaedv.com/",
      tech: ["PWA", "Stripe", "Real-time", "Gemini"],
      en: {
        title: "BALANCE PWA",
        role: "Coaching & Fitness Platform · Stripe · AI",
        desc: "A bilingual PWA connecting personal trainers with trainees: custom training and nutrition plans, progress tracking, instant real-time chat, live video sessions, and paid Stripe subscriptions."
      },
      ar: {
        title: "منصة BALANCE",
        role: "منصة تدريب ولياقة PWA · Stripe · ذكاء اصطناعي",
        desc: "منصة PWA تربط المدربين الشخصيين بالمتدربين: خطط تدريب وتغذية، تتبع تقدم، محادثات فورية، جلسات فيديو مباشرة، واشتراكات مدفوعة — ثنائية اللغة (عربي/إنجليزي)."
      }
    },
    {
      id: "dentassist",
      category: "Desktop",
      featured: true,
      year: "2025",
      image: "images/dentassist.jpg",
      url: "https://dentassist-pro1.netlify.app/",
      tech: ["React", "TypeScript", "Electron", "SQLite"],
      en: {
        title: "DENTASSIST PRO",
        role: "Dental Clinic System · Electron + SQLite",
        desc: "A complete dental clinic management system (Desktop + PWA): interactive FDI dental chart, treatment plans, billing, cashbox, lab orders, and financial reports — running locally with offline privacy."
      },
      ar: {
        title: "DENTASSIST PRO",
        role: "نظام إدارة عيادة أسنان · Electron + SQLite",
        desc: "نظام إدارة عيادة أسنان (Desktop + PWA): المخطط السني FDI، الخطط العلاجية، الفوترة، الصندوق، المخابر، والتقارير. يعمل محلياً دون سحابة لخصوصية البيانات الطبية."
      }
    },
    {
      id: "carrental",
      category: "Web",
      featured: false,
      year: "2025",
      image: "images/carrental.jpg",
      url: "https://carrental.axeesports.com/",
      tech: ["Flutter", "Supabase", "Chart.js"],
      en: {
        title: "DUBAI CAR RENTAL",
        role: "Luxury Fleet Platform · Flutter & Supabase",
        desc: "A luxury car rental platform in Dubai with customer app and admin dashboard: multi-step bookings, KYC document upload, approvals, payments, and Row-Level Security (RLS) on Supabase."
      },
      ar: {
        title: "DUBAI CAR RENTAL",
        role: "منصة تأجير سيارات فاخرة · Flutter & Supabase",
        desc: "منصة تأجير سيارات فاخرة في دبي: تطبيق عميل (Flutter) ولوحة إدارة. مصادقة، حجوزات متعددة الخطوات، رفع وثائق، موافقات، ودفع، مع أمان RLS على Supabase."
      }
    },
    {
      id: "hihfad-web",
      category: "Web",
      featured: false,
      year: "2024",
      image: "images/hihfad-web.jpg",
      url: "https://com-example-medical-booking-app.en.uptodown.com/android",
      tech: ["Web", "RTL", "Alerts", "Chatbot"],
      en: {
        title: "HIHFAD MEDICAL",
        role: "Multi-Center Medical Booking · RTL & Chatbot",
        desc: "A multi-center medical appointment booking system for patients, center managers, and super admins. Includes clinical age/gender rules, instant notifications, and an Arabic medical chatbot."
      },
      ar: {
        title: "نظام HIHFAD الطبي",
        role: "حجز مواعيد طبية متعدد المراكز · RTL ومساعد ذكي",
        desc: "نظام حجز مواعيد طبية متعدد المراكز (RTL عربي): المريض والمدير والمسؤول العام. قواعد حقيقية (تقييد العمر/الجنس)، إشعارات فورية، ومساعد محادثة عربي."
      }
    },
    {
      id: "qwick",
      category: "Web",
      featured: false,
      year: "2025",
      image: "images/qwick.jpg",
      url: "https://quick-sha3ban.netlify.app/",
      tech: ["Supabase", "Real-time", "Web Push", "PWA"],
      en: {
        title: "QWICK QUEUE",
        role: "Hardware-Free Smart Queue · Supabase Realtime",
        desc: "A hardware-free queue management web app: customers join via QR code, staff control calls/skips from a live dashboard, public TV screen updates in real time, plus Web Push alerts."
      },
      ar: {
        title: "منصة QWICK للطوابير",
        role: "إدارة طوابير ذكية عبر QR · Supabase Realtime",
        desc: "إدارة طوابير المحلات بدون طابعة أرقام: انضمام عبر QR، لوحة موظف (استدعاء/تخطي)، شاشة عرض، وتقدير وقت الانتظار. Supabase Realtime وWeb Push وثنائي اللغة."
      }
    },
    {
      id: "pos",
      category: "Desktop",
      featured: false,
      year: "2024",
      image: "images/pos.jpg",
      url: "https://sha3ban-pos.en.uptodown.com/android",
      tech: ["Offline-first", "Bluetooth", "PDF", "Multi-currency"],
      en: {
        title: "SHAABAN POS",
        role: "Offline-First Point of Sale · Multi-Currency",
        desc: "An offline-first POS system for retail shops: barcode scanning, Bluetooth thermal receipt printing, 3-currency accounting, sales reports, returns management, and one-click JSON backups."
      },
      ar: {
        title: "نقطة بيع (SHAABAN POS)",
        role: "نظام مبيعات Offline-First · متعدد العملات",
        desc: "نظام نقطة بيع Offline-first للمحلات الصغيرة والمتوسطة: مسح باركود، طباعة إيصالات Bluetooth، 3 عملات، تقارير، مرتجعات، ونسخ احتياطي JSON."
      }
    },
    {
      id: "cvpro",
      category: "Web",
      featured: false,
      year: "2024",
      image: "images/cvpro.jpg",
      url: "https://mohammed940.github.io/CV-Sha3ban",
      tech: ["Client-side", "localStorage", "RTL", "PDF"],
      en: {
        title: "CV PRO BUILDER",
        role: "Privacy-First Bilingual ATS Resume Builder",
        desc: "An Arabic/English CV builder that runs 100% on the user's device: 4 professional templates, 8 color themes, cover letter generator, and ATS-friendly PDF export with zero server tracking."
      },
      ar: {
        title: "منشئ السيرة الذاتية CV PRO",
        role: "منشئ سيرة ذاتية عربي/إنجليزي يدعم ATS",
        desc: "منشئ سيرة ذاتية عربي يعمل على جهاز المستخدم (localStorage فقط): 4 قوالب، 8 ألوان، عربي/إنجليزي، صفحة غلاف، ووضع ATS — بخصوصية كاملة دون خادم."
      }
    },
    {
      id: "abien",
      category: "Web",
      featured: false,
      year: "2025",
      image: "images/abien.jpg",
      url: "https://abien-phc.netlify.app/",
      tech: ["Supabase", "Real-time", "RTL", "Voice TTS"],
      en: {
        title: "ABIEN HEALTH CENTER",
        role: "Patient Flow & Voice Queue · Primary Care",
        desc: "A patient queue and clinical flow management system for a primary care center: e-booking, clinics, laboratory, emergency, pharmacy, and TV display with automated Arabic voice announcements."
      },
      ar: {
        title: "مركز أبين الصحي",
        role: "إدارة أدوار المرضى والنداء الصوتي · Supabase",
        desc: "نظام إدارة أدوار المرضى في مركز رعاية صحية أولية: حجز إلكتروني، عيادات، مخبر، طوارئ، صيدلية، وشاشة عرض مع إعلان صوتي عربي — Real-time عبر Supabase."
      }
    },
    {
      id: "hihfad-app",
      category: "Mobile",
      featured: false,
      year: "2025",
      image: "images/hihfad-app.jpg",
      url: "https://wondrous-rugelach-c9309b.netlify.app",
      tech: ["Flutter", "Supabase", "RTL", "Notifications"],
      en: {
        title: "HIHFAD MOBILE APP",
        role: "Flutter Medical Booking App · iOS & Android",
        desc: "A cross-platform Flutter mobile app for medical appointment booking: browse centers and clinics, book slots, prevent duplicate bookings, push notifications, security lock, and admin panel."
      },
      ar: {
        title: "تطبيق HIHFAD موبايل",
        role: "تطبيق Flutter لحجز المواعيد الطبية",
        desc: "تطبيق موبايل (Flutter) لحجز المواعيد الطبية: تصفح المراكز والعيادات، حجز بيانات المريض، منع الحجز المزدوج، إشعارات، قفل أمان، ولوحة إدارة — بخلفية Supabase."
      }
    }
  ];

  const categories = [
    { key: "All", en: "All", ar: "الكل" },
    { key: "Web", en: "Websites & Platforms", ar: "منصات الويب" },
    { key: "Desktop", en: "Desktop & POS", ar: "سطح المكتب وPOS" },
    { key: "Mobile", en: "Mobile Apps", ar: "تطبيقات الموبايل" }
  ];

  // ===== 12 TOOLS & TECHNOLOGIES WITH INLINE SVGS =====
  const toolsList = [
    {
      name: "React",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>`
    },
    {
      name: "TypeScript",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11h6M11 11v7M18 13.5c-.6-.6-2-.8-2.4.2-.4.9.6 1.4 1.6 1.8 1 .4 1.4 1.3.8 2.1-.6.8-2 .6-2.6-.1"/></svg>`
    },
    {
      name: "Flutter",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 3 5 12l3 3 12-12h-6Z"/><path d="m14 12-5 5 5 5h6l-5-5 5-5h-6Z"/></svg>`
    },
    {
      name: "Supabase",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 4 14h7v8l9-12h-7V2Z"/></svg>`
    },
    {
      name: "Stripe",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>`
    },
    {
      name: "Electron",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v4M4.2 16.5l3.5-2M19.8 16.5l-3.5-2"/></svg>`
    },
    {
      name: "SQLite",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>`
    },
    {
      name: "Node.js",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="M9 9v6l6-3-6-3Z"/></svg>`
    },
    {
      name: "PostgreSQL",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c-5 0-8 3-8 7v5c0 3 2 5 5 5h6c3 0 5-2 5-5v-5c0-4-3-7-8-7Z"/><path d="M8 10h.01M16 10h.01M9 15c1.5 1.2 4.5 1.2 6 0"/></svg>`
    },
    {
      name: "PWA / Offline",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01M9 6h6"/></svg>`
    },
    {
      name: "Figma UI/UX",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8.5 2h7a3.5 3.5 0 0 1 0 7h-7a3.5 3.5 0 0 1 0-7Z"/><path d="M8.5 9h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 0 1 0-7Z"/><path d="M8.5 16h3.5v3.5a3.5 3.5 0 1 1-3.5-3.5Z"/></svg>`
    },
    {
      name: "RTL / Arabic",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg>`
    }
  ];

  const skillTagsData = {
    en: [
      "Full-Stack Web",
      "Flutter Mobile Apps",
      "React & TypeScript",
      "Supabase & RLS",
      "Stripe Payments",
      "Electron Desktop",
      "Offline-First POS",
      "Bilingual RTL / LTR",
      "Clinic & Queue Systems"
    ],
    ar: [
      "تطوير ويب Full-Stack",
      "تطبيقات Flutter للموبايل",
      "React & TypeScript",
      "منصات Supabase & RLS",
      "بوابات الدفع Stripe",
      "تطبيقات سطح المكتب Electron",
      "أنظمة نقاط البيع POS",
      "دعم كامل للعربية وRTL",
      "أنظمة العيادات والطوابير"
    ]
  };

  const processStepsData = {
    en: [
      ["01", "DISCOVER", "Understanding your operational workflow, users, and the exact problem the product needs to solve."],
      ["02", "WIREFRAME", "Mapping database schema, permissions, and screen flows before a single pixel is polished."],
      ["03", "DESIGN", "Turning the wireframe into a clean, responsive, bilingual (RTL/LTR) interface for every device."],
      ["04", "BUILD", "Developing frontend, backend, real-time sync, and payments fast, secure, and offline-ready."],
      ["05", "LAUNCH", "Testing in real-world scenarios, deploying live, and supporting your team after launch."]
    ],
    ar: [
      ["01", "الاستكشاف والتحليل", "فهم دورة العمل التشغيلية، احتياجات المستخدمين، والمشكلة الحقيقية التي يحلها المنتج."],
      ["02", "التخطيط الهيكلي", "بناء مخططات الواجهات وقواعد البيانات والصلاحيات قبل البدء بالتفاصيل البصرية."],
      ["03", "تصميم التجربة UI/UX", "تحويل المخطط إلى واجهة عصرية سريعة الاستجابة تدعم العربية (RTL) والإنجليزية بسلاسة."],
      ["04", "التطوير الهندسي", "برمجة الواجهة والباكند والمزامنة اللحظية والدفع الإلكتروني بأعلى معايير الأداء والأمان."],
      ["05", "الإطلاق والدعم", "الاختبار الميداني، النشر على الخوادم، ومتابعة الأداء والتطوير بعد الإطلاق."]
    ]
  };

  const journeyData = {
    en: [
      {
        date: "2023 · NOW",
        title: "Full-Stack Product Architect",
        place: "Independent · Remote Worldwide",
        text: "Designing and shipping complete production web platforms, booking engines, and SaaS tools with React, TypeScript, Supabase, and Stripe — including ADVO PASSION (UAE), Balance PWA, and Dubai Car Rental."
      },
      {
        date: "2022 · NOW",
        title: "Healthcare & Clinic Systems Engineer",
        place: "DentAssist Pro · HIHFAD · Abien",
        text: "Building offline-first desktop dental software (Electron + SQLite) with FDI charting and financial management, alongside multi-center medical appointment & voice-announced patient queue systems."
      },
      {
        date: "2021 · NOW",
        title: "Mobile & POS Application Developer",
        place: "Flutter · Offline-First Systems",
        text: "Developing cross-platform Flutter mobile apps and hardware-integrated Point of Sale (POS) systems featuring barcode scanning, Bluetooth thermal receipt printing, and multi-currency accounting."
      },
      {
        date: "2020 · NOW",
        title: "Creator of Open Web Tools",
        place: "CV Pro · Qwick Queue",
        text: "Creating fast, privacy-first Arabic/English web utilities such as CV Pro (client-side ATS resume builder) and Qwick (QR-based smart queue system without ticket printers)."
      }
    ],
    ar: [
      {
        date: "2023 · الآن",
        title: "مطور ومهندس منتجات Full-Stack",
        place: "عمل حر عن بُعد · مشاريع دولية",
        text: "تصميم وإطلاق منصات ويب إنتاجية متكاملة تشمل الحجز والدفع عبر Stripe ولوحات التحكم باستخدام React وTypeScript وSupabase — مثل منصة ADVO PASSION في الإمارات ومنصة Balance وتأجير السيارات في دبي."
      },
      {
        date: "2022 · الآن",
        title: "مهندس أنظمة طبية وإدارة عيادات",
        place: "DentAssist Pro · HIHFAD · أبين الصحي",
        text: "بناء أنظمة إدارة عيادات الأسنان المكتبية (Electron + SQLite) مع المخطط السني FDI والمحاسبة، بالإضافة إلى أنظمة حجز المواعيد الطبية متعددة المراكز وإدارة طوابير المرضى بالنداء الصوتي العربي."
      },
      {
        date: "2021 · الآن",
        title: "مطور تطبيقات موبايل وأنظمة نقاط بيع POS",
        place: "Flutter · أنظمة Offline-First",
        text: "تطوير تطبيقات موبايل (Flutter) وأنظمة نقاط بيع تعمل دون إنترنت مع دعم قارئ الباركود، طباعة الفواتير عبر Bluetooth، وإدارة المستودعات بثلاث عملات."
      },
      {
        date: "2020 · الآن",
        title: "مبتكر أدوات ومنصات ويب ذكية",
        place: "CV Pro · Qwick Queue",
        text: "ابتكار أدوات ويب عملية مثل منشئ السيرة الذاتية CV Pro (يعمل بالكامل على جهاز المستخدم بخصوصية تامة) ومنصة Qwick لإدارة الطوابير عبر رمز QR."
      }
    ]
  };

  // ===== STATE =====
  let currentLang = "en";
  let currentCategory = "All";
  let searchQuery = "";
  let showAllProjects = false;
  let openExperienceIndex = 0;
  let motionEnabled = true;
  let brandSeeAll = false;
  let brandPaused = false;
  let userDraggedComparison = false;

  // ===== DOM ELEMENTS =====
  const readingProgress = document.getElementById("readingProgress");
  const langToggle = document.getElementById("langToggle");
  const langText = document.getElementById("langText");
  const motionToggle = document.getElementById("motionToggle");
  const motionText = document.getElementById("motionText");
  const motionIconPause = document.getElementById("motionIconPause");
  const motionIconPlay = document.getElementById("motionIconPlay");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIconOpen = document.getElementById("menuIconOpen");
  const menuIconClose = document.getElementById("menuIconClose");

  const portfolioFilters = document.getElementById("portfolioFilters");
  const projectSearch = document.getElementById("projectSearch");
  const projectGrid = document.getElementById("projectGrid");
  const emptyState = document.getElementById("emptyState");
  const emptyStateText = document.getElementById("emptyStateText");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const loadMoreWrap = document.getElementById("loadMoreWrap");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showMoreText = document.getElementById("showMoreText");
  const projectCountStatus = document.getElementById("projectCountStatus");
  const toggleAllWorkBtn = document.getElementById("toggleAllWorkBtn");
  const toggleAllWorkText = document.getElementById("toggleAllWorkText");

  const brandCollection = document.getElementById("brandCollection");
  const brandSeeAllBtn = document.getElementById("brandSeeAllBtn");
  const brandSeeAllText = document.getElementById("brandSeeAllText");
  const brandPauseBtn = document.getElementById("brandPauseBtn");
  const brandPrevBtn = document.getElementById("brandPrevBtn");
  const brandNextBtn = document.getElementById("brandNextBtn");

  const comparisonStage = document.getElementById("comparisonStage");
  const comparisonRange = document.getElementById("comparisonRange");
  const breakdownSection = document.getElementById("breakdownSection");
  const breakdownTitle = document.getElementById("breakdownTitle");

  const skillTags = document.getElementById("skillTags");
  const softwareRow = document.getElementById("softwareRow");
  const processRows = document.getElementById("processRows");
  const processPanel = document.getElementById("processPanel");
  const processTrackFill = document.getElementById("processTrackFill");

  const experienceList = document.getElementById("experienceList");
  const milestoneList = document.getElementById("milestoneList");

  const projectModal = document.getElementById("projectModal");
  const dialogCategory = document.getElementById("dialogCategory");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogRole = document.getElementById("dialogRole");
  const dialogDesc = document.getElementById("dialogDesc");
  const dialogImage = document.getElementById("dialogImage");
  const dialogLink = document.getElementById("dialogLink");
  const dialogCloseBtn = document.getElementById("dialogCloseBtn");

  // ===== APPLY TRANSLATIONS =====
  function applyTranslations() {
    const dict = i18n[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    langText.textContent = currentLang === "ar" ? "English" : "العربية";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    if (projectSearch) {
      projectSearch.placeholder = dict.searchPlaceholder;
    }

    renderFilters();
    renderProjects();
    renderBrands();
    renderAboutPanels();
    renderJourney();
  }

  // ===== RENDER FILTERS & PROJECTS =====
  function renderFilters() {
    portfolioFilters.innerHTML = categories
      .map((cat) => {
        const isSel = currentCategory === cat.key;
        const label = currentLang === "ar" ? cat.ar : cat.en;
        return `
          <button type="button" class="${isSel ? "selected" : ""}" aria-pressed="${isSel}" data-cat="${cat.key}">
            ${label}
            ${isSel ? '<span class="filter-line"></span>' : ""}
          </button>
        `;
      })
      .join("");

    portfolioFilters.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-cat");
        if (currentCategory !== "All") showAllProjects = true;
        renderFilters();
        renderProjects();
      });
    });
  }

  function getFilteredProjects() {
    return projects.filter((p) => {
      const d = p[currentLang];
      const matchesCat = currentCategory === "All" || p.category === currentCategory;
      const hay = `${d.title} ${d.role} ${d.desc} ${p.category} ${p.tech.join(" ")}`.toLowerCase();
      const matchesQuery = !searchQuery || hay.includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }

  function renderProjects() {
    const dict = i18n[currentLang];
    const filtered = getFilteredProjects();
    const isFiltering = currentCategory !== "All" || searchQuery.trim().length > 0;
    const visible = showAllProjects || isFiltering ? filtered : filtered.filter((p) => p.featured);

    toggleAllWorkText.textContent = showAllProjects ? dict.featuredWork : dict.allWork;

    if (visible.length === 0) {
      projectGrid.innerHTML = "";
      emptyState.hidden = false;
      emptyStateText.textContent =
        currentLang === "ar"
          ? `لم يتم العثور على نتائج مطابقة لـ "${searchQuery}"`
          : `No work found for “${searchQuery}”.`;
      loadMoreWrap.style.display = "none";
      return;
    }

    emptyState.hidden = true;
    loadMoreWrap.style.display = isFiltering ? "none" : "flex";
    showMoreText.textContent = showAllProjects ? dict.showFeaturedOnly : dict.showAllProjects;
    projectCountStatus.textContent =
      currentLang === "ar"
        ? `عرض ${visible.length} من أصل ${projects.length} مشاريع`
        : `Showing ${visible.length} of ${projects.length} projects`;

    projectGrid.innerHTML = visible
      .map((p, idx) => {
        const d = p[currentLang];
        const num = String(idx + 1).padStart(2, "0");
        const badgeType = p.category === "Web" ? "WEBSITE" : p.category === "Desktop" ? "DESKTOP / POS" : "MOBILE APP";
        return `
          <article class="project-card js-reveal is-in" data-project-id="${p.id}" data-real-img="${p.image}" data-agent-layer="Card ${num} · ${d.title}">
            <button type="button" class="project-open" data-open-id="${p.id}" aria-label="View ${d.title}">
              <div class="project-picture">
                <span class="media-image loaded">
                  <img src="${p.image}" alt="${d.title}" width="800" height="500" loading="${idx < 3 ? "eager" : "lazy"}" />
                </span>
              </div>
              <span class="project-type">${badgeType}</span>
              <div class="project-tech-badges">
                ${p.tech.map((t) => `<span>${t}</span>`).join("")}
              </div>
              <span class="project-hover">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </span>
              <span class="project-frame" aria-hidden="true"></span>
            </button>
            <span class="instance-dim-pill">384 × 240</span>
            <button type="button" class="project-caption" data-open-id="${p.id}">
              <span class="project-number display">${num}</span>
              <span>
                <h3>${d.title}</h3>
                <span class="project-category">${d.role} / ${p.year}</span>
              </span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
              </svg>
            </button>
          </article>
        `;
      })
      .join("");

    projectGrid.querySelectorAll("[data-open-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-open-id");
        const proj = projects.find((item) => item.id === id);
        if (proj) openProjectModal(proj);
      });
    });

    bindProjectCardsInteractive();
    if (motionEnabled) runWorkShowcaseBuildAnimation();
  }

  // Video 00:05s - 00:08s: 5-stage Work Showcase animation (Single Wireframe -> Single Studio Portrait -> 3 Cloned Studio Portraits -> Swap Blur -> Live Cards)
  let workBuildTimers = [];
  function runWorkShowcaseBuildAnimation() {
    workBuildTimers.forEach((t) => clearTimeout(t));
    workBuildTimers = [];
    const cards = [...projectGrid.querySelectorAll(".project-card")];
    if (!cards.length) return;

    // Stage 1 (0ms - 360ms, like 00:05.2s in video): Card 1 is an empty dark wireframe box; Cards 2 & 3 are hidden
    cards.forEach((card, i) => {
      card.classList.remove("is-instance-red", "is-instance-blue", "is-swapping", "is-card-hidden");
      const imgEl = card.querySelector(".project-picture img");
      if (imgEl) {
        imgEl.src = "images/studio-final.webp";
      }
      if (i === 0) {
        card.classList.add("is-wireframe");
      } else {
        card.classList.add("is-card-hidden");
      }
    });

    // Stage 2 (360ms - 780ms, like 00:05.8s in video): Card 1 reveals the studio portrait image with blue Figma frame
    workBuildTimers.push(
      setTimeout(() => {
        const firstCard = cards[0];
        if (firstCard) {
          firstCard.classList.remove("is-wireframe");
          firstCard.classList.add("is-instance-blue");
          const r = firstCard.querySelector(".project-open")?.getBoundingClientRect();
          const pill = firstCard.querySelector(".instance-dim-pill");
          if (pill && r && r.width > 0) {
            pill.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
          }
        }
      }, 360)
    );

    // Stage 3 (780ms - 1350ms, like 00:06.4s in video): Card 1 is cloned across all 3 columns with red Figma component frames
    workBuildTimers.push(
      setTimeout(() => {
        cards.forEach((card) => {
          card.classList.remove("is-wireframe", "is-card-hidden", "is-instance-blue");
          card.classList.add("is-instance-red");
          const r = card.querySelector(".project-open")?.getBoundingClientRect();
          const pill = card.querySelector(".instance-dim-pill");
          if (pill && r && r.width > 0) {
            pill.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
          }
        });
      }, 780)
    );

    // Stage 4 (1350ms - 1720ms, like 00:07.0s in video): Cards 2+ briefly blur/flash with blue frame as their image swaps
    workBuildTimers.push(
      setTimeout(() => {
        cards.forEach((card, i) => {
          if (i > 0) {
            card.classList.remove("is-instance-red");
            card.classList.add("is-instance-blue", "is-swapping");
          }
        });
      }, 1350)
    );

    // Stage 5 (1720ms+, like 00:07.6s in video): Morph into each card's distinct real project image & remove instance borders
    workBuildTimers.push(
      setTimeout(() => {
        cards.forEach((card) => {
          card.classList.remove("is-wireframe", "is-card-hidden", "is-instance-red", "is-instance-blue", "is-swapping");
          const realImg = card.getAttribute("data-real-img");
          const imgEl = card.querySelector(".project-picture img");
          if (imgEl && realImg) imgEl.src = realImg;
        });
      }, 1720)
    );
  }

  // Interactive 3D hover tilt on each project card in Work Showcase
  function bindProjectCardsInteractive() {
    const cards = projectGrid.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        if (!motionEnabled || e.pointerType !== "mouse") return;
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        const rx = (-ny * 6.5).toFixed(2);
        const ry = (nx * 6.5).toFixed(2);
        card.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // ===== PROJECT MODAL =====
  function openProjectModal(proj) {
    const d = proj[currentLang];
    dialogCategory.textContent = `${proj.category.toUpperCase()} / ${proj.year} · ${proj.tech.join(" · ")}`;
    dialogTitle.textContent = d.title;
    dialogRole.textContent = d.role;
    dialogDesc.textContent = d.desc;
    dialogImage.src = proj.image;
    dialogImage.alt = d.title;
    dialogLink.href = proj.url;
    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
    dialogCloseBtn.focus();
  }

  function closeProjectModal() {
    projectModal.hidden = true;
    document.body.style.overflow = "";
  }

  dialogCloseBtn.addEventListener("click", closeProjectModal);
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // ===== BRAND / TOOLS MARQUEE =====
  function renderBrands() {
    const dict = i18n[currentLang];
    brandSeeAllText.textContent = brandSeeAll ? dict.showRowTools : dict.seeAllTools;

    if (brandSeeAll) {
      brandCollection.className = "brand-full-grid";
      brandCollection.innerHTML = toolsList
        .map(
          (t) => `
          <div class="brand-logo" role="listitem">
            ${t.svg}
            <span>${t.name}</span>
          </div>
        `
        )
        .join("");
    } else {
      brandCollection.className = "brand-viewport";
      const setHtml = toolsList
        .map(
          (t) => `
          <div class="brand-logo" title="${t.name}">
            ${t.svg}
            <span>${t.name}</span>
          </div>
        `
        )
        .join("");
      brandCollection.innerHTML = `
        <div class="brand-rail" id="brandRail">
          <div class="brand-set">${setHtml}</div>
          <div class="brand-set" aria-hidden="true">${setHtml}</div>
        </div>
      `;
    }
  }

  let lastMarqueeTime = performance.now();
  function tickMarquee(now) {
    const dt = Math.min(now - lastMarqueeTime, 40);
    lastMarqueeTime = now;
    if (motionEnabled && !brandPaused && !brandSeeAll && brandCollection) {
      const firstSet = brandCollection.querySelector(".brand-set");
      if (firstSet) {
        const setWidth = firstSet.getBoundingClientRect().width;
        brandCollection.scrollLeft += dt * 0.038;
        if (setWidth > 0 && brandCollection.scrollLeft >= setWidth) {
          brandCollection.scrollLeft -= setWidth;
        }
      }
    }
    requestAnimationFrame(tickMarquee);
  }
  requestAnimationFrame(tickMarquee);

  brandSeeAllBtn.addEventListener("click", () => {
    brandSeeAll = !brandSeeAll;
    brandSeeAllBtn.setAttribute("aria-expanded", String(brandSeeAll));
    renderBrands();
  });

  brandPauseBtn.addEventListener("click", () => {
    brandPaused = !brandPaused;
    brandPauseBtn.setAttribute("aria-pressed", String(brandPaused));
    brandPauseBtn.innerHTML = brandPaused
      ? `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6 3 20 12 6 21 6 3"/></svg>`
      : `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
  });

  brandPrevBtn.addEventListener("click", () => {
    brandPaused = true;
    brandCollection.scrollBy({ left: -brandCollection.clientWidth * 0.65, behavior: "smooth" });
  });

  brandNextBtn.addEventListener("click", () => {
    brandPaused = true;
    brandCollection.scrollBy({ left: brandCollection.clientWidth * 0.65, behavior: "smooth" });
  });

  // ===== ABOUT PANELS (SKILLS, SOFTWARE ICONS, PROCESS) =====
  function renderAboutPanels() {
    skillTags.innerHTML = skillTagsData[currentLang].map((s) => `<span>${s}</span>`).join("");

    softwareRow.innerHTML = toolsList
      .slice(0, 7)
      .map((t) => `<span title="${t.name}">${t.svg}</span>`)
      .join("");

    processRows.innerHTML = processStepsData[currentLang]
      .map(
        ([num, title, desc]) => `
        <div class="process-row">
          <span class="process-num display">${num}</span>
          <span class="process-node"></span>
          <div>
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // ===== JOURNEY ACCORDION & MILESTONES =====
  function renderJourney() {
    const items = journeyData[currentLang];
    experienceList.innerHTML = items
      .map((item, idx) => {
        const isOpen = openExperienceIndex === idx;
        return `
          <div class="experience-row ${isOpen ? "is-open" : ""}">
            <button type="button" aria-expanded="${isOpen}" data-exp-idx="${idx}">
              <span class="experience-date">${item.date}</span>
              <span>
                <h3>${item.title}</h3>
                <span class="experience-place">${item.place}</span>
              </span>
              ${
                isOpen
                  ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>`
                  : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`
              }
            </button>
            <div class="experience-body">
              <p>${item.text}</p>
            </div>
          </div>
        `;
      })
      .join("");

    experienceList.querySelectorAll("[data-exp-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-exp-idx"));
        openExperienceIndex = openExperienceIndex === idx ? -1 : idx;
        renderJourney();
      });
    });

    const featuredProjects = projects.slice(0, 4);
    milestoneList.innerHTML = featuredProjects
      .map((p, idx) => {
        const d = p[currentLang];
        return `
          <button type="button" data-milestone-id="${p.id}">
            <span>${String(idx + 1).padStart(2, "0")}</span>
            <span>
              ${d.title}
              <small>${p.category} · ${p.year}</small>
            </span>
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </button>
        `;
      })
      .join("");

    milestoneList.querySelectorAll("[data-milestone-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-milestone-id");
        const proj = projects.find((item) => item.id === id);
        if (proj) openProjectModal(proj);
      });
    });
  }

  // ===== INTERACTIVE WIREFRAME SLIDER =====
  if (comparisonRange && comparisonStage) {
    comparisonRange.addEventListener("input", (e) => {
      userDraggedComparison = true;
      const val = Number(e.target.value);
      comparisonStage.style.setProperty("--cut", `${val}%`);
    });
  }

  // ===== MAGNETIC BUTTONS & HERO MOUSE PARALLAX =====
  function setupMagneticButtons() {
    document.querySelectorAll(".js-magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        if (!motionEnabled || e.pointerType !== "mouse") return;
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.14;
        const dy = (e.clientY - r.top - r.height / 2) * 0.22;
        el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ===== SCROLL PARALLAX, PROGRESS & COUNTERS =====
  const heroSection = document.getElementById("home");
  const heroTitle = document.getElementById("heroTitle");
  const heroPortrait = document.getElementById("heroPortrait");
  const heroIntro = document.getElementById("heroIntro");
  let statsCounted = false;
  let heroMouseX = 0;
  let heroMouseY = 0;

  if (heroSection) {
    heroSection.addEventListener("pointermove", (e) => {
      if (!motionEnabled || e.pointerType !== "mouse") return;
      const r = heroSection.getBoundingClientRect();
      heroMouseX = (e.clientX - r.left) / r.width - 0.5;
      heroMouseY = (e.clientY - r.top) / r.height - 0.5;
      updateHeroTransform();
    });
    heroSection.addEventListener("pointerleave", () => {
      heroMouseX = 0;
      heroMouseY = 0;
      updateHeroTransform();
    });
  }

  function updateHeroTransform() {
    if (!motionEnabled || !heroSection) return;
    const heroRect = heroSection.getBoundingClientRect();
    if (heroRect.bottom <= 0) return;
    const p = Math.min(Math.max(-heroRect.top / Math.max(heroRect.height, 1), 0), 1);
    const titleX = (-heroMouseX * 22).toFixed(1);
    const titleY = (p * 165 - heroMouseY * 14).toFixed(1);
    const portX = (heroMouseX * 18).toFixed(1);
    const portY = (p * 78 + heroMouseY * 12).toFixed(1);
    const portScale = (1 + p * 0.075).toFixed(3);

    if (heroTitle) heroTitle.style.transform = `translate3d(${titleX}px, ${titleY}px, 0)`;
    if (heroPortrait) heroPortrait.style.transform = `translate3d(${portX}px, ${portY}px, 0) scale(${portScale})`;
    if (heroIntro) heroIntro.style.transform = `translate3d(0, ${(-p * 48).toFixed(1)}px, 0)`;
  }

  function animateStatCounters() {
    if (statsCounted) return;
    statsCounted = true;
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = Number(el.getAttribute("data-count"));
      if (!target || !motionEnabled) {
        el.textContent = String(target);
        return;
      }
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function onScroll() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
    if (readingProgress) {
      readingProgress.style.transform = `scaleX(${scrollProgress.toFixed(4)})`;
    }

    updateHeroTransform();

    // Project cards internal image scroll parallax (just like Framer Motion in video)
    if (motionEnabled && projectGrid) {
      const vh = window.innerHeight;
      projectGrid.querySelectorAll(".project-card").forEach((card) => {
        const r = card.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const prog = (vh - r.top) / (vh + r.height);
          const shiftY = ((prog - 0.5) * 26).toFixed(1);
          const pic = card.querySelector(".project-picture");
          if (pic) pic.style.transform = `translateY(${shiftY}px)`;
        }
      });
    }

    // Wireframe breakdown scroll-driven cut & title parallax
    if (motionEnabled && breakdownSection) {
      const r = breakdownSection.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top < vh && r.bottom > 0) {
        const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
        if (!userDraggedComparison && comparisonStage && comparisonRange) {
          const cutVal = Math.round(86 - p * 68);
          comparisonStage.style.setProperty("--cut", `${cutVal}%`);
          comparisonRange.value = String(cutVal);
        }
        if (breakdownTitle) {
          const shiftX = (0.5 - p) * 48;
          breakdownTitle.style.transform = `translateX(${shiftX.toFixed(1)}px)`;
        }
      }
    }

    // Process track vertical scroll fill
    if (processPanel && processTrackFill) {
      const r = processPanel.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh * 0.78 - r.top) / Math.max(r.height, 1), 0.08), 1);
      processTrackFill.style.transform = `scaleY(${p.toFixed(3)})`;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // ===== INTERSECTION OBSERVERS (REVEALS, WORK SHOWCASE BUILD & NAV) =====
  function setupObservers() {
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".js-reveal").forEach((el) => revealIo.observe(el));

    const portfolioSec = document.getElementById("portfolio");
    if (portfolioSec) {
      const workIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && motionEnabled) {
              runWorkShowcaseBuildAnimation();
            }
          });
        },
        { threshold: 0.16 }
      );
      workIo.observe(portfolioSec);
    }

    if (heroSection) {
      let heroFirstObserve = true;
      const heroIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && motionEnabled) {
              if (heroFirstObserve) {
                heroFirstObserve = false;
                return;
              }
              runHeroPortraitBuildAnimation();
            }
          });
        },
        { threshold: 0.25 }
      );
      heroIo.observe(heroSection);
    }

    if (breakdownSection) {
      const breakdownIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && motionEnabled) {
              runBreakdownBuildAnimation();
            }
          });
        },
        { threshold: 0.2 }
      );
      breakdownIo.observe(breakdownSection);
    }

    const contactSec = document.getElementById("contact");
    if (contactSec) {
      const contactIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && motionEnabled) {
              runFooterPreviewBuildAnimation();
            }
          });
        },
        { threshold: 0.18 }
      );
      contactIo.observe(contactSec);
    }

    const navLinks = document.querySelectorAll("#desktopNav a");
    const secIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("data-section") === id);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    document.querySelectorAll("main > section[id]").forEach((sec) => secIo.observe(sec));
  }

  // ===== HEADER & FORM EVENTS =====
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyTranslations();
  });

  motionToggle.addEventListener("click", () => {
    motionEnabled = !motionEnabled;
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
    motionToggle.setAttribute("aria-pressed", String(!motionEnabled));
    motionText.textContent = motionEnabled ? "Motion on" : "Motion off";
    motionIconPause.style.display = motionEnabled ? "" : "none";
    motionIconPlay.style.display = motionEnabled ? "none" : "";
  });

  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.hasAttribute("hidden");
    if (isHidden) {
      mobileMenu.removeAttribute("hidden");
      menuToggle.setAttribute("aria-expanded", "true");
      menuIconOpen.style.display = "none";
      menuIconClose.style.display = "";
    } else {
      mobileMenu.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
      menuIconOpen.style.display = "";
      menuIconClose.style.display = "none";
    }
  });

  document.querySelectorAll("[data-mobile-link]").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
      menuIconOpen.style.display = "";
      menuIconClose.style.display = "none";
    });
  });

  if (projectSearch) {
    projectSearch.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      showAllProjects = true;
      renderProjects();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      searchQuery = "";
      currentCategory = "All";
      if (projectSearch) projectSearch.value = "";
      renderFilters();
      renderProjects();
    });
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      showAllProjects = !showAllProjects;
      renderProjects();
    });
  }

  if (toggleAllWorkBtn) {
    toggleAllWorkBtn.addEventListener("click", () => {
      showAllProjects = !showAllProjects;
      if (!showAllProjects) {
        currentCategory = "All";
        searchQuery = "";
        if (projectSearch) projectSearch.value = "";
      }
      renderFilters();
      renderProjects();
    });
  }

  document.getElementById("heroFeaturedBtn")?.addEventListener("click", () => {
    openProjectModal(projects[0]);
  });

  document.getElementById("contactReelBtn")?.addEventListener("click", () => {
    openProjectModal(projects[0]);
  });

  const briefForm = document.getElementById("briefForm");
  const formNote = document.getElementById("formNote");
  if (briefForm) {
    briefForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(briefForm);
      const msg = `Hello Eng. Mohammed Shaaban, I'm ${fd.get("name")}.\n\nProject Type: ${fd.get("type")}\nDetails: ${fd.get("message")}`;
      window.open(`https://wa.me/963981061026?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
      if (formNote) {
        formNote.textContent = i18n[currentLang].briefReady;
        formNote.style.color = "#ef4151";
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!projectModal.hidden) closeProjectModal();
      if (!mobileMenu.hasAttribute("hidden")) {
        mobileMenu.setAttribute("hidden", "");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // =========================================================================
  // ===== MULTI-AGENT LIVE BUILDER & TOURING ENGINE (EXACT VIDEO MATCH) =====
  // =========================================================================
  const agentSplash = document.getElementById("agentIntroSplash");
  const agentSplashSparkles = document.getElementById("agentSplashSparkles");
  const agentStageOverlay = document.getElementById("agentStageOverlay");
  const agentCursorsContainer = document.getElementById("agentCursorsContainer");
  const agentSelectionBox = document.getElementById("agentSelectionBox");

  const agentHudCount = document.getElementById("agentHudCount");
  const agentHudLayers = document.getElementById("agentHudLayers");
  const agentHudFill = document.getElementById("agentHudFill");
  const agentTourBtn = document.getElementById("agentTourBtn");
  const agentSpeedBtn = document.getElementById("agentSpeedBtn");
  const agentReplayBtn = document.getElementById("agentReplayBtn");
  const agentCloseBtn = document.getElementById("agentCloseBtn");
  const agentToggleBtn = document.getElementById("agentToggleBtn");
  const agentToggleLabel = document.getElementById("agentToggleLabel");

  const AGENT_PROFILES = [
    { name: "UI", color: "#ef4151" },
    { name: "Motion", color: "#38bdf8" },
    { name: "Layout", color: "#a855f7" },
    { name: "Arch", color: "#22c55e" },
    { name: "Grid", color: "#f59e0b" },
    { name: "RTL", color: "#ec4899" },
    { name: "Type", color: "#06b6d4" },
    { name: "Dev", color: "#6366f1" },
    { name: "Style", color: "#f43f5e" },
    { name: "Copy", color: "#10b981" }
  ];

  let agentsActive = true;
  let agentSpeed = 1;
  let layerProgress = 18;
  const totalLayers = 309;
  let agentElements = [];
  let agentTimer = null;

  function initAgentCursors() {
    agentCursorsContainer.innerHTML = "";
    agentElements = AGENT_PROFILES.map((prof, i) => {
      const el = document.createElement("div");
      el.className = "agent-cursor";
      el.style.setProperty("--agent-color", prof.color);
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      el.style.transform = `translate3d(${startX.toFixed(0)}px, ${startY.toFixed(0)}px, 0)`;
      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="${prof.color}" stroke="#090909" stroke-width="1.6">
          <path d="M4 3l16 7.5-7.2 2.1L9.5 20 4 3z"/>
        </svg>
      `;
      agentCursorsContainer.appendChild(el);
      return { el, prof, x: startX, y: startY, idx: i };
    });
  }

  function spawnSparkle(x, y, color) {
    if (!agentsActive || !motionEnabled) return;
    const sp = document.createElement("span");
    sp.className = "agent-sparkle";
    sp.style.left = `${x}px`;
    sp.style.top = `${y}px`;
    sp.style.setProperty("--c", color);
    sp.textContent = Math.random() > 0.35 ? "+" : "✦";
    agentStageOverlay.appendChild(sp);
    setTimeout(() => sp.remove(), 750);
  }

  let heroPortraitTimers = [];
  function runHeroPortraitBuildAnimation() {
    if (!heroPortrait || !motionEnabled) return;
    heroPortraitTimers.forEach((t) => clearTimeout(t));
    heroPortraitTimers = [];

    // Stage 1 (0ms - 880ms, Video 00:00.6s - 00:01.2s):
    // Photo completely DISAPPEARS (opacity: 0); Figma grey frame expands in center!
    heroPortrait.classList.remove("is-stage-photo-in-box", "is-stage-unmasking");
    heroPortrait.classList.add("is-stage-box");
    if (heroTitle) {
      heroTitle.classList.add("is-title-hidden");
      heroPortraitTimers.push(
        setTimeout(() => {
          heroTitle.classList.remove("is-title-hidden");
        }, 380)
      );
    }

    // Stage 2 (880ms - 1580ms, Video 00:01.4s - 00:01.6s):
    // Photo smoothly APPEARS inside the solid opaque grey Figma box (grey box still hides PORTFOLIO behind it!)
    heroPortraitTimers.push(
      setTimeout(() => {
        heroPortrait.classList.remove("is-stage-box");
        heroPortrait.classList.add("is-stage-photo-in-box");
      }, 880)
    );

    // Stage 3 (1580ms - 2150ms, Video 00:01.8s - 00:02.0s):
    // Solid grey box DISAPPEARS revealing PORTFOLIO behind cutout portrait!
    heroPortraitTimers.push(
      setTimeout(() => {
        heroPortrait.classList.remove("is-stage-box", "is-stage-photo-in-box");
        heroPortrait.classList.add("is-stage-unmasking");
        const r = heroPortrait.getBoundingClientRect();
        if (r.width > 0 && r.bottom > 0) {
          for (let i = 0; i < 8; i++) {
            const sx = r.left + r.width * (0.28 + Math.random() * 0.44);
            const sy = r.top + r.height * (0.05 + Math.random() * 0.32);
            spawnSparkle(sx, sy, AGENT_PROFILES[i % AGENT_PROFILES.length].color);
          }
        }
      }, 1580)
    );

    heroPortraitTimers.push(
      setTimeout(() => {
        heroPortrait.classList.remove("is-stage-unmasking");
      }, 2150)
    );
  }

  heroPortrait?.addEventListener("click", () => {
    runHeroPortraitBuildAnimation();
  });

  // Video 00:11.25s - 00:12.5s: Breakdown stage wireframe-to-live portrait appear animation
  let breakdownTimers = [];
  function runBreakdownBuildAnimation() {
    if (!comparisonStage || !motionEnabled) return;
    breakdownTimers.forEach((t) => clearTimeout(t));
    breakdownTimers = [];

    comparisonStage.classList.remove("is-stage-darkbox", "is-stage-splitbox");
    comparisonStage.classList.add("is-stage-wirebox");

    breakdownTimers.push(
      setTimeout(() => {
        comparisonStage.classList.remove("is-stage-wirebox");
        comparisonStage.classList.add("is-stage-darkbox");
      }, 360)
    );

    breakdownTimers.push(
      setTimeout(() => {
        comparisonStage.classList.remove("is-stage-darkbox");
        comparisonStage.classList.add("is-stage-splitbox");
      }, 680)
    );

    breakdownTimers.push(
      setTimeout(() => {
        comparisonStage.classList.remove("is-stage-wirebox", "is-stage-darkbox", "is-stage-splitbox");
        if (!userDraggedComparison && comparisonRange) {
          comparisonStage.style.setProperty("--cut", "88%");
          comparisonRange.value = "88";
          setTimeout(() => {
            if (!userDraggedComparison) {
              comparisonStage.style.setProperty("--cut", "54%");
              comparisonRange.value = "54";
            }
          }, 260);
        }
      }, 1020)
    );
  }

  // Video 00:24.6s - 00:25.2s: Footer studio preview wireframe-to-portrait appear animation
  let footerPreviewTimer = null;
  function runFooterPreviewBuildAnimation() {
    const reelScreen = document.querySelector("#contactReelBtn .reel-screen");
    if (!reelScreen || !motionEnabled) return;
    if (footerPreviewTimer) clearTimeout(footerPreviewTimer);
    reelScreen.classList.add("is-wireframe");
    footerPreviewTimer = setTimeout(() => {
      reelScreen.classList.remove("is-wireframe");
    }, 680);
  }

  function runIntroSplash() {
    if (!agentSplash || !motionEnabled) return;
    agentSplashSparkles.innerHTML = "";
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    for (let i = 0; i < 22; i++) {
      const st = document.createElement("span");
      st.className = "splash-star";
      const ang = (i / 22) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const dist = 120 + Math.random() * 240;
      st.style.left = `${cx}px`;
      st.style.top = `${cy}px`;
      st.style.setProperty("--sx", `${(Math.cos(ang) * dist).toFixed(0)}px`);
      st.style.setProperty("--sy", `${(Math.sin(ang) * dist).toFixed(0)}px`);
      st.style.setProperty("--c", AGENT_PROFILES[i % AGENT_PROFILES.length].color);
      st.textContent = "+";
      agentSplashSparkles.appendChild(st);
    }
    agentSplash.classList.add("is-visible");
    agentHudCount.textContent = "Scanning page…";
    agentHudLayers.textContent = "0 / 309 layers";
    agentHudFill.style.width = "6%";
    // Match reference video splash hold (~0.7s) before hero Figma build
    setTimeout(() => runHeroPortraitBuildAnimation(), 420);
    setTimeout(() => {
      agentSplash.classList.remove("is-visible");
    }, 780);
  }

  function getVisibleLayerTargets() {
    const candidates = [...document.querySelectorAll("[data-agent-layer]")];
    const vh = window.innerHeight;
    const visible = candidates.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 20 && r.height > 15 && r.bottom > 60 && r.top < vh - 60;
    });
    return visible.length > 0 ? visible : candidates.slice(0, 5);
  }

  let orbitRaf = null;
  function startOrbitLoop() {
    if (orbitRaf) cancelAnimationFrame(orbitRaf);
    const animateOrbit = (now) => {
      if (!agentsActive || !motionEnabled || layerProgress < totalLayers) {
        orbitRaf = null;
        return;
      }
      const cx = window.innerWidth * 0.56;
      const cy = window.innerHeight * 0.54;
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.14;
      const baseAngle = now * 0.0024;
      agentElements.forEach((ag, idx) => {
        const ang = baseAngle + (idx / agentElements.length) * Math.PI * 2;
        const ox = cx + Math.cos(ang) * radius;
        const oy = cy + Math.sin(ang) * radius;
        ag.el.style.transitionDuration = "0.08s";
        ag.el.style.transform = `translate3d(${ox.toFixed(1)}px, ${oy.toFixed(1)}px, 0)`;
      });
      orbitRaf = requestAnimationFrame(animateOrbit);
    };
    orbitRaf = requestAnimationFrame(animateOrbit);
  }

  function placeSelectionBox(el) {
    if (!agentSelectionBox || !el) {
      agentSelectionBox?.classList.remove("is-active");
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.width < 24 || r.height < 18) {
      agentSelectionBox.classList.remove("is-active");
      return;
    }
    agentSelectionBox.style.left = `${r.left - 4}px`;
    agentSelectionBox.style.top = `${r.top - 4}px`;
    agentSelectionBox.style.width = `${r.width + 8}px`;
    agentSelectionBox.style.height = `${r.height + 8}px`;
    const badge = agentSelectionBox.querySelector(".sel-badge");
    if (badge) badge.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
    agentSelectionBox.classList.add("is-active");
  }

  function stepAgents() {
    if (!agentsActive || !motionEnabled) return;

    const visibleTargets = getVisibleLayerTargets();

    // Update HUD counters just like the video
    layerProgress = Math.min(totalLayers, layerProgress + Math.floor(Math.random() * 14) + 7);
    const activeCount = 18 + Math.floor((layerProgress / totalLayers) * 11);
    const pct = Math.round((layerProgress / totalLayers) * 100);
    agentHudFill.style.width = `${pct}%`;

    if (layerProgress >= totalLayers) {
      if (!orbitRaf) startOrbitLoop();
      placeSelectionBox(null);

      agentHudCount.textContent = "Built by 29 agents";
      agentHudLayers.textContent = "in 34.2s";
      agentTourBtn.textContent = "Go live";
      agentTourBtn.classList.add("is-done");
      setTimeout(() => {
        if (layerProgress >= totalLayers) {
          layerProgress = 24;
          if (orbitRaf) {
            cancelAnimationFrame(orbitRaf);
            orbitRaf = null;
          }
        }
      }, 5200);
    } else {
      const focusEl = visibleTargets[Math.floor(Math.random() * visibleTargets.length)];
      placeSelectionBox(focusEl);

      agentElements.forEach((ag, idx) => {
        const targetEl = visibleTargets[idx % visibleTargets.length];
        let tx = Math.random() * (window.innerWidth - 100) + 50;
        let ty = Math.random() * (window.innerHeight - 160) + 80;
        if (targetEl) {
          const tr = targetEl.getBoundingClientRect();
          tx = tr.left + Math.random() * Math.max(tr.width, 40);
          ty = tr.top + Math.random() * Math.max(tr.height, 30);
          tx = Math.min(Math.max(tx, 28), window.innerWidth - 60);
          ty = Math.min(Math.max(ty, 74), window.innerHeight - 80);
        }
        ag.x = tx;
        ag.y = ty;
        ag.el.style.transitionDuration = `${(0.65 / agentSpeed).toFixed(2)}s`;
        ag.el.style.transform = `translate3d(${tx.toFixed(0)}px, ${ty.toFixed(0)}px, 0)`;

        if (Math.random() > 0.55) {
          spawnSparkle(tx, ty, ag.prof.color);
        }
      });

      agentHudCount.textContent = `${activeCount} agents`;
      agentHudLayers.textContent = `${layerProgress} / ${totalLayers} layers`;
      agentTourBtn.textContent = "Touring";
      agentTourBtn.classList.remove("is-done");
    }
  }

  function startAgentLoop() {
    if (agentTimer) clearInterval(agentTimer);
    agentTimer = setInterval(stepAgents, Math.round(780 / agentSpeed));
  }

  function setAgentsVisible(visible) {
    agentsActive = visible;
    document.body.classList.toggle("agents-hidden", !visible);
    document.body.classList.toggle("agents-paused", !visible);
    if (agentToggleLabel) {
      agentToggleLabel.textContent = visible ? "Agents live" : "Agents off";
    }
    if (visible) {
      stepAgents();
      startAgentLoop();
    } else if (agentTimer) {
      clearInterval(agentTimer);
    }
  }

  agentToggleBtn?.addEventListener("click", () => {
    setAgentsVisible(!agentsActive);
  });

  agentCloseBtn?.addEventListener("click", () => {
    setAgentsVisible(false);
  });

  agentSpeedBtn?.addEventListener("click", () => {
    agentSpeed = agentSpeed === 1 ? 2 : 1;
    agentSpeedBtn.textContent = `${agentSpeed}x`;
    if (agentsActive) startAgentLoop();
  });

  agentReplayBtn?.addEventListener("click", () => {
    layerProgress = 12;
    setAgentsVisible(true);
    runIntroSplash();
    runWorkShowcaseBuildAnimation();
    runBreakdownBuildAnimation();
    runFooterPreviewBuildAnimation();
  });

  agentTourBtn?.addEventListener("click", () => {
    if (agentTourBtn.classList.contains("is-done")) {
      setAgentsVisible(false);
      return;
    }
    const sections = ["home", "portfolio", "breakdownSection", "about", "experience", "contact"];
    const nextSec = sections
      .map((id) => document.getElementById(id))
      .find((el) => el && el.getBoundingClientRect().top > 120);
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: "smooth" });
      if (nextSec.id === "portfolio") runWorkShowcaseBuildAnimation();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    layerProgress = Math.min(totalLayers - 20, layerProgress + 25);
    stepAgents();
  });

  // ===== INITIALIZE EVERYTHING =====
  function init() {
    applyTranslations();
    setupMagneticButtons();
    setupObservers();
    animateStatCounters();
    onScroll();
    initAgentCursors();
    runIntroSplash();
    setTimeout(() => {
      stepAgents();
      startAgentLoop();
    }, 650);
  }

  init();
})();

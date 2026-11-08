/* kyomufs.github.io — bilingual single page, no build step */

const I18N = {
  en: {
    "meta.title": "Matvey Samodurov — kyomufs",
    "meta.desc": "Applied Informatics student, NixOS user, Go and TypeScript developer. Local-first AI tooling, Wayland desktops and reproducible infrastructure.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.first": "Matvey",
    "hero.last": "Samodurov",
    "hero.eyebrow": "Applied Informatics · Tula State University",
    "hero.lead": "I build tooling where infrastructure meets AI — reproducible systems, local-first services and interfaces that stay out of the way.",
    "hero.ctaProjects": "View projects",
    "hero.metaLocation": "Tula, Russia",
    "hero.metaYear": "3rd year",
    "hero.metaStatus": "Open to internships",
    "hero.avatarRole": "systems · tooling · AI",
    "about.title": "About",
    "about.p1": "I am a third-year Applied Informatics student at Tula State University, specializing in intelligent and domain-oriented automated systems. My daily driver is NixOS: the entire machine — desktop, services, secrets — lives in a single flake, so a clean install is one command away.",
    "about.p2": "Most of what I build sits between infrastructure and tooling: local-first AI gateways, Wayland desktop shells, Go services and Flutter apps. I like systems that can be rebuilt, explained and handed over — not ones that only work on the machine they were born on.",
    "about.educationLabel": "Education",
    "about.university": "Tula State University",
    "about.program": "Applied Informatics · 09.03.03",
    "about.profile": "Intelligent and Domain-Oriented Automated Systems",
    "about.year": "3rd year · 2023 — 2027",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "projects.all": "All repositories on GitHub",
    "contact.title": "Contact",
    "contact.text": "The fastest way to reach me is GitHub. Issues, discussions and pull requests are all welcome.",
    "footer.built": "Built with plain HTML, CSS and a little JavaScript."
  },
  ru: {
    "meta.title": "Матвей Самодуров — kyomufs",
    "meta.desc": "Студент «Прикладной информатики», NixOS, Go и TypeScript. Локальные AI-инструменты, Wayland-окружения и воспроизводимая инфраструктура.",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "hero.first": "Матвей",
    "hero.last": "Самодуров",
    "hero.eyebrow": "Прикладная информатика · ТулГУ",
    "hero.lead": "Делаю инструменты на стыке инфраструктуры и AI: воспроизводимые системы, локальные сервисы и интерфейсы, которые не мешают работать.",
    "hero.ctaProjects": "Смотреть проекты",
    "hero.metaLocation": "Тула, Россия",
    "hero.metaYear": "3 курс",
    "hero.metaStatus": "Открыт к стажировкам",
    "hero.avatarRole": "системы · инструменты · AI",
    "about.title": "Обо мне",
    "about.p1": "Студент третьего курса «Прикладной информатики» Тульского государственного университета, профиль «Интеллектуальные и предметно-ориентированные автоматизированные системы». Основная система — NixOS: вся машина, от рабочего стола до сервисов и секретов, описана одним flake, поэтому чистая установка занимает одну команду.",
    "about.p2": "Большая часть проектов находится на стыке инфраструктуры и инструментов: локальные AI-шлюзы, оболочки для Wayland, сервисы на Go и приложения на Flutter. Люблю системы, которые можно пересобрать, объяснить и передать — а не те, что работают только на своей машине.",
    "about.educationLabel": "Образование",
    "about.university": "Тульский государственный университет",
    "about.program": "Прикладная информатика · 09.03.03",
    "about.profile": "Интеллектуальные и предметно-ориентированные автоматизированные системы",
    "about.year": "3 курс · 2023 — 2027",
    "skills.title": "Навыки",
    "projects.title": "Проекты",
    "projects.all": "Все репозитории на GitHub",
    "contact.title": "Контакты",
    "contact.text": "Быстрее всего связаться через GitHub: issues, discussions и pull requests открыты.",
    "footer.built": "Сделано на чистом HTML, CSS и небольшом количестве JavaScript."
  }
};

const ICONS = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  server: '<rect x="2.5" y="3.5" width="19" height="7" rx="2"/><rect x="2.5" y="13.5" width="19" height="7" rx="2"/><line x1="6.5" y1="7" x2="6.6" y2="7"/><line x1="6.5" y1="17" x2="6.6" y2="17"/>',
  layers: '<polygon points="12 2.5 22 8 12 13.5 2 8"/><polyline points="2 13 12 18.5 22 13"/><polyline points="2 17.5 12 23 22 17.5"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3.2"/><path d="M4 5.5v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6"/><path d="M4 11.5v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6"/>',
  network: '<circle cx="12" cy="5" r="2.6"/><circle cx="5" cy="19" r="2.6"/><circle cx="19" cy="19" r="2.6"/><path d="M12 7.6v4.2M10.2 13.4 6.4 16.8M13.8 13.4l3.8 3.4"/>',
  spark: '<path d="M12 3v3.4M12 17.6V21M4.9 4.9l2.4 2.4M16.7 16.7l2.4 2.4M3 12h3.4M17.6 12H21M4.9 19.1l2.4-2.4M16.7 7.3l2.4-2.4"/><circle cx="12" cy="12" r="3.1"/>'
};

const SKILLS = [
  {
    icon: "code",
    en: "Languages",
    ru: "Языки",
    items: ["C", "C++", "ASM", "Go", "TypeScript", "JavaScript", "Python", "Bash", "R", "Dart", "Kotlin"]
  },
  {
    icon: "server",
    en: "Systems & infrastructure",
    ru: "Системы и инфраструктура",
    items: ["NixOS", "Linux", "Docker", "Caddy", "Gitea", "Git", "GitHub"]
  },
  {
    icon: "layers",
    en: "Web & mobile",
    ru: "Веб и мобильная разработка",
    items: ["React", "Node.js", "Flutter", "Jetpack Compose", "QML"]
  },
  {
    icon: "database",
    en: "Data",
    ru: "Данные",
    items: ["PostgreSQL", "MySQL", "SQLite", "SQLAlchemy"]
  },
  {
    icon: "network",
    en: "Networks",
    ru: "Сети",
    items: ["KeeneticOS", "RouterOS", "OpenWrt", "VLAN", "DHCP/DNS"]
  },
  {
    icon: "spark",
    en: "AI tooling",
    ru: "AI-инструменты",
    items: ["Copilot", "Hermes", "OpenCode", "Crush", "DeepSeek Harness", "LoRA"]
  }
];

const PROJECTS = [
  {
    name: "proxprobe",
    lang: "Go",
    color: "#00ADD8",
    url: "https://github.com/kyomufs/proxprobe",
    en: "Collects servers from proxy subscriptions, probes them through mihomo and exports a ready-to-use Clash profile.",
    ru: "Собирает серверы из прокси-подписок, проверяет их через mihomo и выгружает готовый Clash-профиль."
  },
  {
    name: "tulgusch",
    lang: "Dart",
    color: "#00B4AB",
    url: "https://github.com/kyomufs/tulgusch",
    en: "Tulgusch — a Material 3 Expressive schedule, grade journal and deadlines companion for Android and iOS, shipped through CI-built releases.",
    ru: "Tulgusch — расписание, журнал оценок и дедлайны в Material 3 Expressive для Android и iOS, релизы собираются в CI."
  },
  {
    name: "free-ai-router",
    lang: "Go",
    color: "#00ADD8",
    url: "https://github.com/kyomufs/free-ai-router",
    en: "OpenAI-compatible gateway for free AI providers: one local endpoint, many services, each spoken to the way its own client speaks.",
    ru: "OpenAI-совместимый шлюз к бесплатным AI-провайдерам: одна локальная точка входа, много сервисов, каждый — на своём протоколе."
  },
  {
    name: "free-ai-router-dshplugin",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/free-ai-router-dshplugin",
    en: "DeepSeek Harness plugin that exposes every provider served by the local free-ai-router daemon as its own route.",
    ru: "Плагин DeepSeek Harness: каждый провайдер локального демона free-ai-router становится отдельным маршрутом."
  },
  {
    name: "dsh-md3-theme",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/dsh-md3-theme",
    en: "Material Design 3 theme for DeepSeek Harness: HCT-generated light and dark palettes with seven accent presets, applied through the theme token layer.",
    ru: "Тема Material Design 3 для DeepSeek Harness: светлые и тёмные палитры на HCT, семь акцентов, подключение через слой токенов."
  },
  {
    name: "dsh-home-guard",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/dsh-home-guard",
    en: "Home structure map, session archive and delete, cleanup rules, purge timer and audit log for DeepSeek Harness, with a settings tab.",
    ru: "Карта домашнего каталога, архивация и удаление сессий, правила очистки, таймер и аудит для DeepSeek Harness, плюс вкладка настроек."
  }
];

const state = {
  lang: localStorage.getItem("kyomufs.lang") || (navigator.language.startsWith("ru") ? "ru" : "en"),
  theme: document.documentElement.dataset.theme || "dark"
};

const $ = (sel) => document.querySelector(sel);

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("kyomufs.lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.title = dict["meta.title"];
  document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  $("#langBtn").textContent = lang === "en" ? "RU" : "EN";
  renderSkills();
  renderProjects();
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem("kyomufs.theme", theme);
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#121316" : "#faf8fd");
}

function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = SKILLS.map((group) => `
    <article class="skill">
      <h3 class="skill__title">
        <svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[group.icon]}</svg>
        ${group[state.lang]}
      </h3>
      <div class="skill__chips">
        ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = $("#projectsGrid");
  grid.innerHTML = PROJECTS.map((project) => `
    <a class="project" href="${project.url}" target="_blank" rel="noopener">
      <div class="project__top">
        <h3 class="project__name">${project.name}</h3>
        <svg class="project__arrow icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
      </div>
      <p class="project__desc">${project[state.lang]}</p>
      <div class="project__foot">
        <span class="project__lang"><span class="lang-dot" style="background:${project.color}"></span>${project.lang}</span>
        <span class="project__stars" data-repo="${project.name}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9Z"/></svg>
          <span>—</span>
        </span>
      </div>
    </a>
  `).join("");

  hydrateStars();
}

async function hydrateStars() {
  await Promise.all(PROJECTS.map(async (project) => {
    try {
      const res = await fetch(`https://api.github.com/repos/kyomufs/${project.name}`, { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) return;
      const data = await res.json();
      const node = document.querySelector(`[data-repo="${project.name}"] span`);
      if (node) node.textContent = String(data.stargazers_count);
    } catch {
      /* rate limit or offline — the dash stays */
    }
  }));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => observer.observe(el));
}

function setupNav() {
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = Array.from(document.querySelectorAll(".nav__links a"));
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  // Тонкая полоса в середине экрана: активна та секция, что сейчас её пересекает.
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute("aria-current"));
      const active = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      if (active) active.setAttribute("aria-current", "page");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((section) => spy.observe(section));
}

function init() {
  applyTheme(state.theme);
  applyLanguage(state.lang);
  setupReveal();
  setupNav();
  $("#year").textContent = String(new Date().getFullYear());

  $("#langBtn").addEventListener("click", () => applyLanguage(state.lang === "en" ? "ru" : "en"));
  $("#themeBtn").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
}

init();

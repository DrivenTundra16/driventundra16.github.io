/* kyomufs.github.io — bilingual single page.
   Разметку компонентов даёт @m3e/web, здесь только данные и состояния. */

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
    "projects.filterLabel": "Filter projects by language",
    "ui.langLabel": "Language",
    "ui.themeTip": "Switch theme",
    "ui.toTop": "Back to top",
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
    "projects.filterLabel": "Фильтр проектов по языку",
    "ui.langLabel": "Язык",
    "ui.themeTip": "Сменить тему",
    "ui.toTop": "Наверх",
    "contact.title": "Контакты",
    "contact.text": "Быстрее всего связаться через GitHub: issues, discussions и pull requests открыты.",
    "footer.built": "Сделано на чистом HTML, CSS и небольшом количестве JavaScript."
  }
};

const SKILLS = [
  {
    icon: "code",
    en: "Languages",
    ru: "Языки",
    items: ["C", "C++", "ASM", "Go", "TypeScript", "JavaScript", "Python", "Bash", "R", "Dart", "Kotlin"]
  },
  {
    icon: "dns",
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
    icon: "hub",
    en: "Networks",
    ru: "Сети",
    items: ["KeeneticOS", "RouterOS", "OpenWrt", "VLAN", "DHCP/DNS"]
  },
  {
    icon: "auto_awesome",
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

const FILTERS = [
  { key: "all", en: "All", ru: "Все" },
  { key: "Go", label: "Go" },
  { key: "Dart", label: "Dart" },
  { key: "JavaScript", label: "JS" }
];

const state = {
  lang: localStorage.getItem("kyomufs.lang") || (navigator.language.startsWith("ru") ? "ru" : "en"),
  theme: document.documentElement.dataset.theme || "dark",
  filter: "all"
};

const $ = (sel) => document.querySelector(sel);
const themeEl = $("#theme");

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

  const seg = $("#langGroup");
  seg.setAttribute("aria-label", dict["ui.langLabel"]);
  seg.querySelectorAll("m3e-button-segment").forEach((btn) => {
    btn.selected = btn.value === lang;
  });

  const themeBtn = $("#themeBtn");
  themeBtn.setAttribute("aria-label", dict["ui.themeTip"]);
  $("#themeTip").textContent = dict["ui.themeTip"];

  const toTop = $("#toTop");
  toTop.setAttribute("aria-label", dict["ui.toTop"]);
  $("#toTopTip").textContent = dict["ui.toTop"];
  $("#projectFilters").setAttribute("aria-label", dict["projects.filterLabel"]);

  renderSkills();
  renderFilters();
  renderProjects();
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem("kyomufs.theme", theme);
  document.documentElement.dataset.theme = theme;
  themeEl.scheme = theme;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0d0e12" : "#faf9fe");

  const icon = $("#themeBtn m3e-icon");
  if (icon) icon.name = theme === "dark" ? "dark_mode" : "light_mode";
}

function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = SKILLS.map((group, index) => `
    <m3e-card class="skill${index === 0 ? " skill--lead" : ""}" variant="filled">
      <div slot="content">
        <h3 class="skill__title">
          <span class="skill__badge"><m3e-icon name="${group.icon}"></m3e-icon></span>
          ${group[state.lang]}
          <span class="skill__count">${group.items.length}</span>
        </h3>
        <div class="skill__chips">
          ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>
    </m3e-card>
  `).join("");
}

function renderFilters() {
  const set = $("#projectFilters");
  set.innerHTML = FILTERS.map((item) => {
    const label = item[state.lang] || item.label;
    const selected = state.filter === item.key ? " selected" : "";
    return `<m3e-filter-chip value="${item.key}"${selected}>${label}</m3e-filter-chip>`;
  }).join("");
}

function renderProjects() {
  const grid = $("#projectsGrid");
  const visible = state.filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.lang === state.filter);
  const featured = state.filter === "all" ? PROJECTS[0].name : null;
  grid.innerHTML = visible.map((project) => {
    const isFeatured = project.name === featured;
    return `
    <a class="project-link" href="${project.url}" target="_blank" rel="noopener">
      <m3e-card class="project${isFeatured ? " project--featured" : ""}" variant="${isFeatured ? "filled" : "outlined"}">
        <div slot="content" class="project__inner">
          <div class="project__top">
            <h3 class="project__name">${project.name}</h3>
            <m3e-icon class="project__arrow" name="arrow_outward"></m3e-icon>
          </div>
          <p class="project__desc">${project[state.lang]}</p>
          <div class="project__foot">
            <span class="project__lang"><span class="lang-dot" style="background:${project.color}"></span>${project.lang}</span>
            <span class="project__stars" data-repo="${project.name}">
              <m3e-icon name="star"></m3e-icon>
              <m3e-loading-indicator class="star-loader"></m3e-loading-indicator>
              <span class="project__stars-count"></span>
            </span>
          </div>
        </div>
      </m3e-card>
    </a>
  `;
  }).join("");

  hydrateStars();
}

/* Звёзды кешируются на сессию: фильтр и язык перерисовывают карточки,
   а GitHub отдаёт анонимно 60 запросов в час на IP. */
const STARS = new Map();

function paintStars(node, name) {
  const loader = node.querySelector(".star-loader");
  const count = node.querySelector(".project__stars-count");
  if (loader) loader.remove();
  if (count) count.textContent = STARS.get(name);
}

async function hydrateStars() {
  await Promise.all(PROJECTS.map(async (project) => {
    const node = document.querySelector(`[data-repo="${project.name}"]`);
    if (!node) return;
    if (STARS.has(project.name)) {
      paintStars(node, project.name);
      return;
    }
    try {
      const res = await fetch(`https://api.github.com/repos/kyomufs/${project.name}`, { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      STARS.set(project.name, String(data.stargazers_count));
    } catch {
      /* rate limit or offline — show a dash instead of a spinner that never stops */
      STARS.set(project.name, "—");
    }
    if (node.isConnected) paintStars(node, project.name);
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

function setupFab() {
  const fab = $("#toTop");
  const onScroll = () => fab.classList.toggle("is-shown", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  fab.addEventListener("click", () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
}

function init() {
  applyTheme(state.theme);
  applyLanguage(state.lang);
  setupReveal();
  setupNav();
  setupFab();
  $("#year").textContent = String(new Date().getFullYear());

  $("#langGroup").addEventListener("change", (event) => {
    const value = event.target.value;
    if (value && value !== state.lang) applyLanguage(value);
  });

  $("#projectFilters").addEventListener("change", (event) => {
    const value = event.target.value;
    const next = Array.isArray(value) ? value[0] : value;
    if (!next || next === state.filter) return;
    state.filter = next;
    renderProjects();
  });

  $("#themeBtn").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
}

init();

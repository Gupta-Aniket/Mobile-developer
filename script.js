import portfolioData from "./data.js";

const projects = portfolioData.projects;

// DOMContentLoaded Event
// window.addEventListener("DOMContentLoaded", () => {
//   renderHeroSection();
//   renderAboutSection();
//   renderSkillsSection();
//   renderContactInfo();
//   renderProjects();
//   attachModalHandlers();
//   checkHashSituation(); //* <- sharing links
// });
window.addEventListener("DOMContentLoaded", () => {
  renderHeroSection();
  renderAboutSection();
  renderContactInfo();
  renderProjects();
  attachModalHandlers();
  // renderSkillsSection();
  renderExperience();
  activateScrollAnimations();
  renderSkillsList();
  renderDeploymentSection();
  checkHashSituation();

  const hamburger = document.getElementById("nav-hamburger");
  const dropdown = document.getElementById("nav-dropdown");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("show");
  });

  // Close after picking a destination — same-page anchors don't reload, so the
  // dropdown would otherwise stay open over the section you just jumped to.
  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  // Remove after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 2000);
}

function checkHashSituation() {
  const fullHash = window.location.hash; // e.g., #projects#flutter-xylophone
  if (!fullHash) return;

  const parts = fullHash.split("#").filter(Boolean);
  // parts: ['projects', 'flutter-xylophone']

  parts.forEach((part) => {
    if (part === "projects") {
      // Scroll to Projects section
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Check if this part matches a project ID
      const project = projects.find((p) => p.id === part);
      if (project) {
        // Rewrite the landing entry to the section first, so the modal's own
        // history entry has somewhere to go back to on a shared deep link.
        history.replaceState(null, "", "#projects");
        openProjectModal(project.id);
      }
    }
  });
}

function renderHeroSection() {
  const { title, subtitle, contact } = portfolioData.personalInfo;
  document.getElementById("hero-title").textContent = title;
  document.getElementById("hero-subtitle").textContent = subtitle;
  const resumeButton = document.getElementById("resumeButton");
  resumeButton.href = contact.resume;
  resumeButton.target = "_blank";
}

function renderAboutSection() {
  const about = portfolioData.about;
  document.getElementById("about-title").textContent = about.title;
  document.getElementById("about-subtitle").textContent = about.subtitle;
  document.getElementById("about-quote").textContent = `"${about.quote}"`;

  const bioContainer = document.getElementById("about-bio");
  bioContainer.innerHTML = "";
  about.bio.forEach((para) => {
    const p = document.createElement("p");
    p.className = "about-text";
    p.textContent = para;
    bioContainer.appendChild(p);
  });

  // const stackContainer = document.getElementById("tech-stack");
  // stackContainer.innerHTML = "";
  // about.techStack.forEach((tech) => {
  //   const div = document.createElement("div");
  //   div.className = "tech-pill";
  //   div.dataset.level = tech.level;
  //   div.textContent = tech.name;
  //   stackContainer.appendChild(div);
  // });

  const avatarContainer = document.getElementById("about-avatar");
  avatarContainer.innerHTML = "";
  if (about.image) {
    const img = document.createElement("img");
    img.src = about.image + "freelance.jpg";
    img.alt = "Avatar Image";
    img.className = "avatar-image";
    avatarContainer.appendChild(img);
  }
}

function getIconColor() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "ffffff" : "333333"; // white on dark, dark grey on light
}

// Returns CDN URL for a slug
function cdn(slug) {
  return `https://cdn.simpleicons.org/${slug}/${getIconColor()}`;
}

// Render Deployment Section
function renderDeploymentSection() {
  const main = document.getElementById("deploymentMain");
  const support = document.getElementById("deploymentSupport");
  main.innerHTML = "";
  support.innerHTML = "";

  portfolioData.deployment.forEach((item, index) => {
    const isFeatured = index < 2; // App Store & Play Store
    const iconSize = isFeatured ? "icon-big" : "icon-small";
    const container = isFeatured ? main : support;

    const div = document.createElement("div");
    div.className = `tech-item`;
    div.innerHTML = `
      <img src="${cdn(item.slug)}" alt="${item.name}" class="${iconSize}" />
      <span class="tech-name">${item.detail}</span>
    `;
    container.appendChild(div);
  });
}
function renderSkillsList() {
  const main = document.getElementById("skillsMain");
  const support = document.getElementById("skillsSupport");
  main.innerHTML = "";
  support.innerHTML = "";

  portfolioData.skills.forEach((skill, index) => {
    const isFeatured = ["flutter", "react", "swift"].includes(skill.slug);
    const iconSize = isFeatured ? "icon-big" : "icon-small";
    const container = isFeatured ? main : support;

    const div = document.createElement("div");
    div.className = `tech-item`;
    div.innerHTML = `
      <img src="${cdn(skill.slug)}" alt="${
        skill.name
      }" class="${iconSize}" title="${skill.name}" />
      <span class="tech-name">${skill.name}</span>
    `;
    container.appendChild(div);
  });
}

// Re-render icons on theme change
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    renderDeploymentSection();
    renderSkillsList();
  });

function activateScrollAnimations() {
  const items = document.querySelectorAll(".exp-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15, // triggers early, shows smoother
      rootMargin: "0px 0px -50px 0px",
    },
  );

  items.forEach((item) => observer.observe(item));
}

// The manifesto isn't on the page — it's here, for the 0.1% who inspect.
let __consoleSigned = false;
function signConsole() {
  if (__consoleSigned) return;
  __consoleSigned = true;
  try {
    console.log(
      "%cAniket",
      "font:700 24px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;color:#007aff;",
    );
    console.log(
      "%cBuilt to a standard — 10x is the floor, not the ceiling.\n" +
        "The parts you never see are the ones I cared about most.\n" +
        "You opened the console. That makes you the 0.1%. Hey. 👋",
      "font:400 13px/1.7 -apple-system,BlinkMacSystemFont,sans-serif;color:#8a8a8e;",
    );
  } catch (e) {}
}

// A native detail sheet — the full breakdown of a tenure, on demand.
let __expSheet = null;
function buildExpSheet() {
  const overlay = document.createElement("div");
  overlay.className = "exp-sheet-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="exp-sheet" role="dialog" aria-modal="true" tabindex="-1">
      <div class="exp-sheet-grip"></div>
      <button class="exp-sheet-close" aria-label="Close">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="exp-sheet-scroll">
        <header class="exp-sheet-head">
          <span class="exp-icon" data-letter=""><img alt="" onerror="this.remove()"></span>
          <div class="exp-sheet-title">
            <h3 class="exp-sheet-role"></h3>
            <p class="exp-sheet-company"></p>
            <p class="exp-sheet-tech"></p>
          </div>
        </header>
        <div class="exp-sheet-sections"></div>
        <p class="exp-sheet-shipped"></p>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeExpSheet();
  });
  overlay
    .querySelector(".exp-sheet-close")
    .addEventListener("click", closeExpSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open"))
      closeExpSheet();
  });
  __expSheet = overlay;
  return overlay;
}

function openExpSheet(exp) {
  const overlay = __expSheet || buildExpSheet();
  const letter = (exp.company || exp.role || "•")
    .trim()
    .charAt(0)
    .toUpperCase();
  const icon = overlay.querySelector(".exp-icon");
  icon.setAttribute("data-letter", letter);
  let img = icon.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    img.alt = "";
    img.onerror = function () {
      this.remove();
    };
    icon.appendChild(img);
  }
  img.src = exp.icon;
  overlay.querySelector(".exp-sheet-role").textContent = exp.role;
  overlay.querySelector(
    ".exp-sheet-company",
  ).textContent = `${exp.company} · ${exp.period}`;
  overlay.querySelector(".exp-sheet-tech").textContent = (exp.tech || "")
    .split("|")
    .map((t) => t.trim())
    .filter(Boolean)
    .join("  ·  ");
  overlay.querySelector(".exp-sheet-sections").innerHTML = (exp.details || [])
    .map(
      (s, si) => `
      <section class="exp-sheet-section" style="--d:${si}">
        <h4>${s.title}</h4>
        <ul>${(s.points || []).map((p) => `<li>${p}</li>`).join("")}</ul>
      </section>`,
    )
    .join("");
  const shipped = overlay.querySelector(".exp-sheet-shipped");
  shipped.textContent = exp.shipped || "";
  shipped.style.display = exp.shipped ? "" : "none";
  overlay.querySelector(".exp-sheet-scroll").scrollTop = 0;
  document.body.style.overflow = "hidden";
  pushOverlayState("exp", "#experience");
  overlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => overlay.classList.add("open"));
  overlay.querySelector(".exp-sheet").focus();
}

// UI-only close, called by the popstate handler.
function closeExpSheetUI() {
  if (!__expSheet || !__expSheet.classList.contains("open")) return;
  __expSheet.classList.remove("open");
  __expSheet.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// What the ✕ / backdrop / Escape call: goes through history so back and the
// close button unwind the same way.
function closeExpSheet() {
  dismissOverlay(closeExpSheetUI, "#experience");
}

function renderExperience() {
  const list = document.getElementById("experienceTimeline");
  if (!list) return;
  list.innerHTML = "";

  portfolioData.experience.forEach((exp, index) => {
    const card = document.createElement("article");
    card.className = "exp-card";
    if (index === 0) card.classList.add("open");

    const highlights = (exp.highlights || [])
      .map((h, i) => `<li style="--d:${i}">${h}</li>`)
      .join("");

    // tech as one quiet line — no chip soup
    const techLine = (exp.tech || "")
      .split("|")
      .map((t) => t.trim())
      .filter(Boolean)
      .join("  ·  ");

    // Shipped apps — pressable button-links with a tinted 45° redirect arrow
    // (blue = App Store / iOS, green = Play Store / Android). Whole tag clicks.
    const storeArrow = `<svg class="exp-app-arrow" viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M5 11L11 5M11 5H6.2M11 5V9.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const apps = (exp.apps || [])
      .map((app) => {
        const stores = [];
        if (app.appstore) stores.push({ url: app.appstore, ios: true });
        if (app.playstore) stores.push({ url: app.playstore, ios: false });
        const segs = stores
          .map((s, i) => {
            const label = s.ios ? "the App Store" : "Google Play";
            const name =
              i === 0 ? `<span class="exp-app-name">${app.name}</span>` : "";
            return `<a class="exp-app-link ${
              s.ios ? "is-ios" : "is-android"
            }" href="${s.url}" target="_blank" rel="noopener" aria-label="${
              app.name
            } on ${label}">${name}${storeArrow}</a>`;
          })
          .join("");
        return segs ? `<span class="exp-app">${segs}</span>` : "";
      })
      .join("");
    const appsHtml = apps
      ? `<div class="exp-apps" style="--d:${
          (exp.highlights || []).length
        }"><span class="exp-apps-label">Shipped</span>${apps}</div>`
      : "";

    const letter = (exp.company || exp.role || "•")
      .trim()
      .charAt(0)
      .toUpperCase();

    card.innerHTML = `
      <button class="exp-head" type="button" aria-expanded="${
        index === 0 ? "true" : "false"
      }">
        <span class="exp-icon" data-letter="${letter}">
          <img src="${exp.icon}" alt="${exp.company}" loading="lazy"
               onerror="this.remove()">
        </span>
        <span class="exp-meta">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-company">${exp.company} · ${exp.period}</span>
          ${techLine ? `<span class="exp-tech">${techLine}</span>` : ""}
        </span>
        <svg class="exp-chevron" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="exp-body">
        <div class="exp-body-inner">
          <ul class="exp-highlights">${highlights}</ul>
          ${appsHtml}
          ${
            exp.details
              ? `<button class="exp-more" type="button">Full breakdown <span aria-hidden="true">→</span></button>`
              : ""
          }
        </div>
      </div>
    `;

    const head = card.querySelector(".exp-head");
    head.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    });

    const moreBtn = card.querySelector(".exp-more");
    if (moreBtn) moreBtn.addEventListener("click", () => openExpSheet(exp));

    list.appendChild(card);
  });

  // Arrow-key navigation between roles — a native-feeling detail.
  list.addEventListener("keydown", (e) => {
    const heads = Array.from(list.querySelectorAll(".exp-head"));
    const i = heads.indexOf(document.activeElement);
    if (i === -1) return;
    let next = null;
    if (e.key === "ArrowDown") next = heads[Math.min(i + 1, heads.length - 1)];
    else if (e.key === "ArrowUp") next = heads[Math.max(i - 1, 0)];
    else if (e.key === "Home") next = heads[0];
    else if (e.key === "End") next = heads[heads.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
    }
  });

  signConsole();
}

function renderProjects() {
  const filterContainer = document.getElementById("filterButtonsContainer");
  const grid = document.getElementById("projectsGrid");
  // 🔁 Extract unique categories
  const categorySet = new Set();
  projects.forEach((p) => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    categories.forEach((cat) => categorySet.add(cat.toLowerCase()));
  });
  const categories = ["all", ...Array.from(categorySet)];

  // 🧱 Render filter buttons
  filterContainer.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = category;
    btn.textContent =
      category === "all" ? "All Projects" : capitalize(category);
    if (category === "all") btn.classList.add("active");
    btn.addEventListener("click", () => filterProjects(category));
    filterContainer.appendChild(btn);
  });

  // 📦 Render project cards
  grid.innerHTML = "";
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card"; // Apple-style card

    const categoryArray = Array.isArray(project.category)
      ? project.category
      : [project.category];
    card.dataset.categories = categoryArray
      .map((c) => c.toLowerCase())
      .join(",");
    card.dataset.project = project.id;

    card.addEventListener("click", () => openProjectModal(project.id));

    // 🖼 Image or placeholder
    // const hasImage = project.images && project.images.length > 0;
    const imageHTML = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? `<img src="../${project.showcaseDark}" 
               alt="${project.title}image" 
               class="project-image" loading="lazy"/>`
      : `<img src="../${project.showcaseLight}" 
               alt="${project.title}image" 
               class="project-image" loading="lazy"/>`;

    card.innerHTML = `
    <div>
      <div class="image-container">
        ${imageHTML}
        <div class="status-indicator ${project.status}"></div>
      </div>
      <div class="content">
        <h3 class="title">${project.title}</h3>
        <p class="description">${project.description}</p>
        <div class="tags">
          ${project.tags
            .map(
              (tag, i) =>
                `<span class="tag ${i === 0 ? "primary" : ""}">${tag}</span>`,
            )
            .join("")}
        </div>
        
      </div>
      <div class="arrow"></div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Default to show featured..
  filterProjects("featured");
}

function filterProjects(selectedCategory) {
  document.getElementById("section-title").innerText = `${capitalize(
    selectedCategory,
  )} Projects`;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === selectedCategory);
  });

  document.querySelectorAll(".card").forEach((card) => {
    const cardCategories = card.dataset.categories?.split(",") || [];
    const show =
      selectedCategory === "all" ||
      cardCategories.includes(selectedCategory.toLowerCase());

    card.style.display = show ? "block" : "none";
  });
}

function renderContactInfo() {
  const { contact, socialLinks } = portfolioData.personalInfo;
  const emailLink = document.getElementById("emailLink");
  const phoneLink = document.getElementById("phoneLink");
  const resumeLink = document.getElementById("resumeLink");

  emailLink.href = `mailto:${contact.email}`;
  document.getElementById("emailText").textContent = contact.email;

  // Phone privacy: never put the number in the DOM up front. It's stored
  // base64-encoded and only decoded on a real user click, so crawlers and
  // marketing scrapers can't harvest it into a profile.
  const phoneText = document.getElementById("phoneText");
  phoneText.textContent = "Tap to reveal";
  phoneLink.href = "#";
  phoneLink.setAttribute("rel", "nofollow");
  phoneLink.addEventListener("click", (e) => {
    if (phoneLink.dataset.revealed) return; // revealed → let tel: link work
    e.preventDefault();
    const num = atob(contact.phoneEnc || "");
    phoneText.textContent = num;
    phoneLink.href = `tel:${num.replace(/\s+/g, "")}`;
    phoneLink.dataset.revealed = "1";
  });

  resumeLink.href = contact.resume;
  resumeLink.target = "_blank";

  const socialContainer = document.getElementById("socialLinksContainer");
  socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.className = "social-link";
    a.textContent = link.name;
    socialContainer.appendChild(a);
  });
}

// Project Modal Functions
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  pushOverlayState("project", `#projects#${projectId}`);

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  modalTitle.innerText = project.title;

  const statusClass =
    project.status === "live"
      ? "live"
      : project.status === "ongoing"
        ? "ongoing"
        : "deprecated";

  const tagsHTML = project.tags
    .map((tag) => `<span class="modal-tag">${tag}</span>`)
    .join("");

  const techStackHTML = project.techStack
    ? `
      <div class="modal-section-title">Technologies</div>
      <div class="modal-tech-grid">
          ${project.techStack
            .map((tech) => `<div class="modal-tech-item">${tech}</div>`)
            .join("")}
      </div>
    `
    : "";

  const buttonsHTML = `
  <div class="modal-actions">
    ${
      project.caseStudy
        ? `
      <a href="${project.caseStudy}" target="_blank" class="modal-button highlight">
        <span>Show Case Study</span>
        <span class="modal-button-icon">📄</span>
      </a>`
        : ""
    }
    ${
      project.github
        ? `
      <a href="${project.github}" target="_blank" class="modal-button secondary">
        <span>View on GitHub</span>
        <span class="modal-button-icon">↗</span>
      </a>`
        : ""
    }
    ${
      project.live
        ? `
      <a href="${project.live}" target="_blank" class="modal-button">
        <span>Try it Out</span>
        <span class="modal-button-icon">🚀</span>
      </a>`
        : ""
    }
  </div>
`;

  // --- YouTube Parser ---
  const extractYouTubeId = (url) => {
    const match =
      url.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/)([^&\n?#]+)/) || [];
    return match[1];
  };

  const mediaSlides = [
    ...(project.videoLinks || []).map((url, i) => {
      const videoId = extractYouTubeId(url);
      return `
    <div class="modal-slide${i === 0 ? " active" : ""}" data-type="youtube">
      <iframe
      height="100%"
        width="100%"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        loading="lazy"
        allowfullscreen
        title="YouTube video ${i + 1}"
      ></iframe>
    </div>
  `;
    }),

    ...(project.images || []).map((img, i) => {
      const indexOffset = project.videoLinks?.length || 0;
      const isActive = i === 0 && indexOffset === 0;
      return `
        <div class="modal-slide${isActive ? " active" : ""}" data-type="image">
          <img src="../assets/${img}" alt="${project.title} Screenshot ${
            i + 1
          }" loading="lazy" />
        </div>`;
    }),
  ];

  const indicatorsHTML = Array.from({ length: mediaSlides.length })
    .map(
      (_, i) =>
        `<button type="button" class="modal-indicator${
          i === 0 ? " active" : ""
        }" data-index="${i}" aria-label="Go to media ${i + 1}"></button>`,
    )
    .join("");

  const mediaCount = mediaSlides.length;

  const arrowSVG = (dir) =>
    `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M${
      dir === "left" ? "15 5l-7 7 7 7" : "9 5l7 7-7 7"
    }"/></svg>`;

  const sliderHTML =
    mediaSlides.length > 0
      ? `
    <div class="modal-slider-wrapper">
      ${
        mediaCount > 1
          ? `<button class="slider-arrow left" aria-label="Previous media">${arrowSVG(
              "left",
            )}</button>`
          : ""
      }
      <div class="modal-slider" tabindex="0" role="group" aria-label="${
        project.title
      } media">
        ${mediaSlides.join("")}
      </div>
      ${
        mediaCount > 1
          ? `<button class="slider-arrow right" aria-label="Next media">${arrowSVG(
              "right",
            )}</button>`
          : ""
      }
      ${
        mediaCount > 1
          ? `<div class="modal-indicators">${indicatorsHTML}</div>
             <p class="modal-slider-hint">
               <span class="hint-desktop">Use ← / → to browse</span>
               <span class="hint-touch">Swipe to browse</span>
             </p>`
          : ""
      }
    </div>
  `
      : `<div class="modal-hero-placeholder">No previews available</div>`;

  modalBody.innerHTML = `
    ${sliderHTML}
    <div class="modal-status ${statusClass}">
      <span class="status-dot"></span>
      <span class="status-text">${
        project.status.charAt(0).toUpperCase() + project.status.slice(1)
      }</span>
    </div>
    <p class="modal-description">${project.description}</p>
    ${
      project.details && Array.isArray(project.details)
        ? `<ul class="modal-details modal-bullets">
         ${project.details.map((point) => `<li>${point}</li>`).join("")}
       </ul>`
        : project.details
          ? `<p class="modal-details">${project.details}</p>`
          : ""
    }

    ${project.tags?.length ? `<div class="modal-tags">${tagsHTML}</div>` : ""}
    ${techStackHTML}
    ${buttonsHTML}
  `;

  requestAnimationFrame(() => modal.classList.add("active"));

  setupModalSlider(modal);
  attachProjectShare(project);
  modal.focus();
}

/* Swipe/scroll carousel for the project media: the first slide is the main
   one, the slide nearest the centre is the hero, and pointer devices get
   arrows + ← / → keys. Same behaviour as the blog's Dream Space carousel. */
function setupModalSlider(modal) {
  const track = modal.querySelector(".modal-slider");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".modal-slide"));
  const indicators = Array.from(modal.querySelectorAll(".modal-indicator"));
  const leftArrow = modal.querySelector(".slider-arrow.left");
  const rightArrow = modal.querySelector(".slider-arrow.right");
  if (!slides.length) return;

  let current = 0;
  let raf = null;

  // Slide widths are content-driven, so the room needed to centre the first
  // and last slide has to be measured rather than hard-coded.
  const setEdgePadding = () => {
    const first = slides[0].getBoundingClientRect().width;
    const last = slides[slides.length - 1].getBoundingClientRect().width;
    track.style.paddingLeft = `${Math.max(0, (track.clientWidth - first) / 2)}px`;
    track.style.paddingRight = `${Math.max(0, (track.clientWidth - last) / 2)}px`;
  };

  const centerSlide = (i, smooth) => {
    const s = slides[i];
    if (!s) return;
    const left = s.offsetLeft - (track.clientWidth - s.clientWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  };

  const update = () => {
    raf = null;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    current = best;
    slides.forEach((s, i) => s.classList.toggle("is-hero", i === best));
    indicators.forEach((d, i) => d.classList.toggle("active", i === best));
    if (leftArrow) leftArrow.disabled = best === 0;
    if (rightArrow) rightArrow.disabled = best === slides.length - 1;
    loadYouTubeIframe(slides[best]);
  };

  track.addEventListener(
    "scroll",
    () => {
      if (!raf) raf = requestAnimationFrame(update);
    },
    { passive: true },
  );

  indicators.forEach((dot) =>
    dot.addEventListener("click", () =>
      centerSlide(parseInt(dot.dataset.index, 10), true),
    ),
  );
  const step = (dir) =>
    centerSlide(Math.max(0, Math.min(slides.length - 1, current + dir)), true);
  leftArrow?.addEventListener("click", () => step(-1));
  rightArrow?.addEventListener("click", () => step(1));

  // Arrow keys drive the carousel whenever the modal is open — the share menu
  // and any focused text field keep their own key handling.
  modal.__sliderKeys = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (!modal.classList.contains("active")) return;
    e.preventDefault();
    step(e.key === "ArrowRight" ? 1 : -1);
  };
  window.addEventListener("keydown", modal.__sliderKeys);

  const relayout = () => {
    setEdgePadding();
    centerSlide(current, false);
    update();
  };
  window.addEventListener("resize", relayout);
  modal.__sliderResize = relayout;

  // Images arrive after render and change slide widths, so re-measure as
  // each one lands.
  slides.forEach((s) => {
    const img = s.querySelector("img");
    if (img && !img.complete) img.addEventListener("load", relayout, { once: true });
  });

  requestAnimationFrame(() => {
    setEdgePadding();
    centerSlide(0, false); // first slide is the main one
    update();
  });
}

function loadYouTubeIframe(slide) {
  if (!slide) return;
  if (slide.dataset.type === "youtube" && !slide.querySelector("iframe")) {
    const videoId = slide.dataset.videoId;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.className = "modal-video-iframe";
    slide.innerHTML = "";
    slide.appendChild(iframe);
  }
}

/* ---------------------------------------------------------------
   Overlay history: opening the project modal or the experience sheet
   pushes one history entry, so the browser/Android back gesture closes
   the overlay instead of leaving the site. Exactly one entry is kept —
   opening a second overlay replaces the first rather than stacking.
   --------------------------------------------------------------- */
function pushOverlayState(kind, url) {
  if (history.state && history.state.overlay) {
    history.replaceState({ overlay: kind }, "", url);
  } else {
    history.pushState({ overlay: kind }, "", url);
  }
}

// Ask to close: rewind history if we own the current entry, which fires
// popstate and closes the overlay there. Otherwise close directly.
function dismissOverlay(closeFn, fallbackURL) {
  if (history.state && history.state.overlay) {
    history.back();
  } else {
    closeFn();
    history.replaceState(null, "", fallbackURL);
  }
}

function closeProjectModalUI() {
  const modal = document.getElementById("projectModal");
  if (!modal || !modal.classList.contains("active")) return;
  modal.classList.remove("active");
  if (modal.__sliderKeys) {
    window.removeEventListener("keydown", modal.__sliderKeys);
    modal.__sliderKeys = null;
  }
  if (modal.__sliderResize) {
    window.removeEventListener("resize", modal.__sliderResize);
    modal.__sliderResize = null;
  }
  // Stops any playing YouTube embed dead.
  const body = document.getElementById("modalBody");
  if (body) body.innerHTML = "";
}

function attachModalHandlers() {
  const modal = document.getElementById("projectModal");
  const requestClose = () => dismissOverlay(closeProjectModalUI, "#projects");

  modal
    .querySelector(".modal-close")
    .addEventListener("click", requestClose);

  document.addEventListener("click", (e) => {
    if (e.target === modal) requestClose();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape" || e.key === "Backspace") {
      e.preventDefault();
      requestClose();
    }
  });

  // One listener closes whichever overlay is open — back always unwinds the
  // topmost thing on screen first.
  window.addEventListener("popstate", () => {
    closeProjectModalUI();
    closeExpSheetUI();
  });
}

/* Share the open project by its deep link, using the same menu as the blog. */
function attachProjectShare(project) {
  const wrap = document.getElementById("projectShare");
  if (!wrap) return;
  const btn = document.getElementById("projectShareBtn");
  const menu = document.getElementById("projectShareMenu");
  const label = document.getElementById("projectShareLabel");

  // Absolute, so a copied link works off-site (location.href would carry
  // whatever hash happens to be current).
  const url = `${location.origin}${location.pathname}#projects#${project.id}`;
  const text = `${project.title} — ${project.description || "Check this out"}`;

  document.getElementById("projectShareLinkedIn").href =
    "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
  document.getElementById("projectShareX").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(project.title) +
    "&url=" +
    encodeURIComponent(url);
  document.getElementById("projectShareWhatsApp").href =
    "https://wa.me/?text=" + encodeURIComponent(text + "\n" + url);

  const close = () => {
    menu.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
  };

  // Rebuilt per project, so replace the node to drop the previous listeners.
  const freshBtn = btn.cloneNode(true);
  btn.replaceWith(freshBtn);
  freshBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("show");
    freshBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  if (!wrap.__wired) {
    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    wrap.__wired = true;
  }
  menu.querySelectorAll("a").forEach((a) => (a.onclick = close));

  let flashTimer;
  const flash = (msg) => {
    const el = document.getElementById("projectShareLabel") || label;
    el.textContent = msg;
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      el.textContent = "Share";
    }, 1800);
  };

  document.getElementById("projectShareCopy").onclick = async () => {
    close();
    try {
      await navigator.clipboard.writeText(url);
      flash("Copied");
      return;
    } catch (err) {
      // navigator.clipboard needs a secure context; fall back to a selection.
    }
    const ta = document.createElement("textarea");
    ta.value = url;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      flash("Copied");
    } catch (err) {
      flash("Copy failed");
    }
    ta.remove();
  };

  const nativeBtn = document.getElementById("projectShareNative");
  if (navigator.share) {
    nativeBtn.hidden = false;
    nativeBtn.onclick = async () => {
      close();
      try {
        await navigator.share({ title: project.title, text, url });
      } catch (err) {
        /* user dismissed the sheet */
      }
    };
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("visible");
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   { threshold: 0.15 }
  // );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.01, // 🔽 Lowered
      rootMargin: "0px 0px -20% 0px", // 🔁 Helps with mobile viewport oddities
    },
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

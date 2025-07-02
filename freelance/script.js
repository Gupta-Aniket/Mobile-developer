// freelance/script.js (Clean Fixed Version)

import portfolioData from "../data.js";

const projects = portfolioData.projects;

window.addEventListener("DOMContentLoaded", () => {
  renderHeroSection();
  loadContactSection();
  renderAboutSection();
  loadSkills();
  renderProjects();
  attachProjectShareButtons();
  loadStats();
  attachModalHandlers();
  checkHashSituation();
  observeSections();
});

function loadStats() {
  const statsGrid = document.querySelector(".stats-grid");
  if (!statsGrid || !portfolioData.finalStats) return;

  portfolioData.finalStats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";

    const icon = document.createElement("div");
    icon.className = "stat-icon";
    icon.textContent = stat.icon;

    const value = document.createElement("div");
    value.className = "stat-value";
    value.textContent = "0"; // starting point for animation
    value.setAttribute("data-target", stat.target);

    const label = document.createElement("div");
    label.className = "stat-label";
    label.textContent = stat.label;

    card.appendChild(icon);
    card.appendChild(value);
    card.appendChild(label);
    statsGrid.appendChild(card);
  });

  animateStats(); // Call animation after loading
}

function loadSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid || !portfolioData.skills) return;

  portfolioData.skills.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";

    // Category Title
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "skill-category-title";
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);

    // Skill Items
    category.items.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";

      const skillInfo = document.createElement("div");
      skillInfo.className = "skill-info";

      const skillName = document.createElement("span");
      skillName.className = "skill-name";
      skillName.textContent = skill.name;

      const skillPercent = document.createElement("span");
      skillPercent.className = "skill-percentage";
      skillPercent.textContent = `${skill.percentage}%`;

      skillInfo.appendChild(skillName);
      skillInfo.appendChild(skillPercent);

      const skillBar = document.createElement("div");
      skillBar.className = "skill-bar";

      const skillProgress = document.createElement("div");
      skillProgress.className = "skill-progress";
      skillProgress.style.width = `${skill.percentage}%`;

      skillBar.appendChild(skillProgress);

      skillItem.appendChild(skillInfo);
      skillItem.appendChild(skillBar);
      categoryDiv.appendChild(skillItem);
    });

    skillsGrid.appendChild(categoryDiv);
  });
}
function renderAboutSection() {
  const about = portfolioData.about;
  const avatarContainer = document.getElementById("about-avatar");
  const initial = portfolioData.personalInfo.name?.[0] || "A";

  // Clear previous avatar content
  avatarContainer.innerHTML = "";

  if (about.image && about.image.trim() !== "") {
    const img = document.createElement("img");
    img.src = about.image + "freelance.jpg";
    img.alt = "Avatar-image";
    img.className = "avatar-image"; // style this in CSS
    img.onerror = () => {
      avatarContainer.textContent = initial; // fallback if image fails to load
    };
    avatarContainer.appendChild(img);
  } else {
    avatarContainer.textContent = initial;
  }

  // Title & subtitle
  document.getElementById("about-title").textContent = about.title;
  document.getElementById("about-subtitle").textContent = about.subtitle;

  // Quote
  document.getElementById("about-quote").textContent = `"${about.quote}"`;

  // Bio
  const bioContainer = document.getElementById("about-bio");
  bioContainer.innerHTML = "";
  about.bio.forEach((para) => {
    const p = document.createElement("p");
    p.className = "about-text";
    p.textContent = para;
    bioContainer.appendChild(p);
  });

  // Tech Stack
  const stackContainer = document.getElementById("tech-stack");
  stackContainer.innerHTML = "";
  about.techStack.forEach((tech) => {
    const div = document.createElement("div");
    div.className = "tech-pill";
    div.dataset.level = tech.level;
    div.textContent = tech.name;
    stackContainer.appendChild(div);
  });
}
function loadContactSection() {
  const { contact, socialLinks } = portfolioData.personalInfo;
  const { projectTypes, budgets } = portfolioData.formOptions;

  // Email, Phone, Resume Links
  const emailLink = document.querySelector("a[href^='mailto']");
  const phoneLink = document.querySelector("a[href^='tel']");
  const resumeLink = document.querySelector("a[onclick*='downloadResume']");
  const emailText = emailLink?.querySelector(".contact-text");
  const phoneText = phoneLink?.querySelector(".contact-text");

  if (emailLink && contact.email) {
    emailLink.href = `mailto:${contact.email}`;
    emailText.textContent = contact.email;
  }

  if (phoneLink && contact.phone) {
    phoneLink.href = `tel:${contact.phone.replace(/\s+/g, "")}`;
    phoneText.textContent = contact.phone;
  }

  if (resumeLink && contact.resume) {
    resumeLink.setAttribute("href", contact.resume);
    resumeLink.setAttribute("download", "");
    resumeLink.onclick = null; // remove old JS handler
  }

  // Social Links
  const socialLinksContainer = document.querySelector(".social-links");
  if (socialLinksContainer && socialLinks.length > 0) {
    socialLinksContainer.innerHTML = "";
    socialLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.className = "social-link";
      a.textContent = link.name;
      socialLinksContainer.appendChild(a);
    });
  }

  // Dynamic select options: Project Type
  const projectSelect = document.getElementById("project");
  if (projectSelect && projectTypes) {
    projectSelect.innerHTML = `<option value="">Select project type</option>`;
    projectTypes.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      projectSelect.appendChild(option);
    });
  }

  // Dynamic select options: Budget Range
  const budgetSelect = document.getElementById("budget");
  if (budgetSelect && budgets) {
    budgetSelect.innerHTML = `<option value="">Select budget range</option>`;
    budgets.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      budgetSelect.appendChild(option);
    });
  }
}

function renderHeroSection() {
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroStatsContainer = document.getElementById("hero-stats");

  const { title, subtitle } = portfolioData.personalInfo;
  const stats = portfolioData.heroStats;

  // Set text content
  heroTitle.textContent = title;
  heroSubtitle.textContent = subtitle;

  // Generate stats dynamically
  heroStatsContainer.innerHTML = ""; // Clear if needed

  stats.forEach((stat) => {
    const statDiv = document.createElement("div");
    statDiv.classList.add("hero-stat");

    statDiv.innerHTML = `
      <span class="hero-stat-number">${stat.value}</span>
      <span class="hero-stat-label">${stat.label}</span>
    `;

    heroStatsContainer.appendChild(statDiv);
  });
}

function renderProjects() {
  const filterContainer = document.getElementById("filterButtonsContainer");
  const grid = document.getElementById("projectsGrid");

  if (!grid || !filterContainer) {
    console.error("❌ Missing projectsGrid or filterButtonsContainer");
    return;
  }

  // 🔁 Extract unique categories from all project.category arrays
  const categorySet = new Set();
  projects.forEach((p) => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    categories.forEach((cat) => cat && categorySet.add(cat.toLowerCase()));
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
    card.className = "project-card";

    const categoryArray = Array.isArray(project.category)
      ? project.category
      : [project.category];
    card.dataset.categories = categoryArray
      .map((c) => c.toLowerCase())
      .join(",");
    card.dataset.project = project.id;

    card.addEventListener("click", () => openProjectModal(project.id));

    card.innerHTML = `
      <div class="project-card-content">
        <div class="project-status ${project.status}"></div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${(project.tags || [])
            .map((tag) => `<span class="project-tag">${tag}</span>`)
            .join("")}
        </div>
        <div class="project-actions">
          <button class="project-link">View Details</button>
        </div>
      </div>
    `;

    const button = card.querySelector(".project-link");
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      openProjectModal(project.id);
    });

    grid.appendChild(card);
  });

  filterProjects("all");
}
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  history.replaceState(null, null, `#projects#${projectId}`);

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
        project.github
          ? `<a href="${project.github}" target="_blank" class="modal-button secondary">
              <span>View on GitHub</span>
              <span class="modal-button-icon">↗</span>
            </a>`
          : ""
      }
      ${
        project.live
          ? `<a href="${project.live}" target="_blank" class="modal-button">
              <span>Try it Out</span>
              <span class="modal-button-icon">🚀</span>
            </a>`
          : ""
      }
    </div>
  `;

  const sliderHTML =
    project.images && project.images.length
      ? `
      <div class="modal-slider-wrapper">
        <button class="slider-arrow left" aria-label="Previous image"> ➱ </button>
        <div class="modal-slider">
          ${project.images
            .map(
              (img, i) => `
              <div class="modal-slide${i === 0 ? " active" : ""}">
                <img src="../assets/${img}" alt="${project.title} Screenshot ${
                i + 1
              }" />
              </div>`
            )
            .join("")}
        </div>
        <button class="slider-arrow right" aria-label="Next image"> ➱ </button>
        <div class="modal-indicators">
          ${project.images
            .map(
              (_, i) =>
                `<span class="modal-indicator${
                  i === 0 ? " active" : ""
                }" data-index="${i}"></span>`
            )
            .join("")}
        </div>
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

  const slides = modal.querySelectorAll(".modal-slide");
  const indicators = modal.querySelectorAll(".modal-indicator");
  const leftArrow = modal.querySelector(".slider-arrow.left");
  const rightArrow = modal.querySelector(".slider-arrow.right");

  let activeIndex = 0;

  function setActiveSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    indicators.forEach((d, i) => d.classList.toggle("active", i === index));
    activeIndex = index;
  }

  indicators.forEach((dot) => {
    dot.addEventListener("click", () => {
      setActiveSlide(parseInt(dot.dataset.index));
    });
  });

  leftArrow?.addEventListener("click", () => {
    setActiveSlide((activeIndex - 1 + slides.length) % slides.length);
  });

  rightArrow?.addEventListener("click", () => {
    setActiveSlide((activeIndex + 1) % slides.length);
  });

  document.addEventListener("keydown", attachModalHandlers);

  modal.focus();
}

function attachModalHandlers() {
  const modal = document.getElementById("projectModal");
  const closeModal = () => {
    modal.classList.remove("active");
    history.replaceState(null, null, `#projects`);
  };

  // 1️⃣ Close on modal close button
  document.querySelector(".modal-close").addEventListener("click", closeModal);

  document.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && modal.classList.contains("active")) {
      e.preventDefault();
      closeModal();
    }
  });

  window.addEventListener("popstate", () => {
    if (modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function filterProjects(selectedCategory) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === selectedCategory);
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    const cardCategories = card.dataset.categories?.split(",") || [];
    const show =
      selectedCategory === "all" ||
      cardCategories.includes(selectedCategory.toLowerCase());

    card.style.display = show ? "block" : "none";
  });
}

function attachProjectShareButtons() {
  document.querySelectorAll(".share-project-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const project = portfolioData.projects[idx];
      const slug =
        project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      // const projectURL = `${window.location.origin}/#${slug}`;
      const projectURL = window.location.href;

      const shareModal = document.getElementById("shareModal");
      shareModal.style.display = "block";

      shareModal.querySelectorAll(".share-option").forEach((option) => {
        option.onclick = () => {
          const platform = option.dataset.platform;
          const shareText = `${project.title} - ${
            project.description || "Check this out"
          }`;

          switch (platform) {
            case "linkedin":
              window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  projectURL
                )}`
              );
              break;
            case "twitter":
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(projectURL)}`
              );
              break;
            case "whatsapp":
              window.open(
                `https://wa.me/?text=${encodeURIComponent(
                  shareText + "\n" + projectURL
                )}`
              );
              break;
            case "copy":
              navigator.clipboard
                .writeText(projectURL)
                .then(() => alert("Copied to clipboard"));
              break;
            case "markdown":
              navigator.clipboard
                .writeText(`[${project.title}](${projectURL})`)
                .then(() => alert("Markdown copied"));
              break;
            case "devto":
              const devContent = `---\ntitle: ${project.title}\ndescription: ${project.description}\n---\n\nCheck it out 👉 ${projectURL}`;
              navigator.clipboard
                .writeText(devContent)
                .then(() => alert("Dev.to blog draft copied!"));
              break;
          }

          shareModal.style.display = "none";
        };
      });

      shareModal.querySelector(".modal-close").onclick = () => {
        shareModal.style.display = "none";
      };
    });
  });
}

function checkHashSituation() {
  const fullHash = window.location.hash;
  if (!fullHash) return;
  const parts = fullHash.split("#").filter(Boolean);

  parts.forEach((part) => {
    if (part === "projects") {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      const project = projects.find((p) => p.id === part);
      if (project) openProjectModal(project.id);
    }
  });
}

function observeSections() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((section) => observer.observe(section));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import portfolioData from "../data.js";

const projects = portfolioData.projects;

// DOMContentLoaded Event
window.addEventListener("DOMContentLoaded", () => {
  renderHeroSection();
  renderAboutSection();
  renderSkillsSection();
  renderContactInfo();
  renderProjects();
  attachModalHandlers();
  checkHashSituation(); //* <- sharing links
});

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

  const stackContainer = document.getElementById("tech-stack");
  stackContainer.innerHTML = "";
  about.techStack.forEach((tech) => {
    const div = document.createElement("div");
    div.className = "tech-pill";
    div.dataset.level = tech.level;
    div.textContent = tech.name;
    stackContainer.appendChild(div);
  });

  const avatarContainer = document.getElementById("about-avatar");
  avatarContainer.innerHTML = "";
  if (about.image) {
    const img = document.createElement("img");
    img.src = about.image + "hire.jpg";
    img.alt = "Avatar Image";
    img.className = "avatar-image";
    avatarContainer.appendChild(img);
  }
}

function renderSkillsSection() {
  const skillsGrid = document.getElementById("skillsGrid");
  portfolioData.skills.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";

    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "skill-category-title";
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);

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

function renderProjects() {
  const filterContainer = document.getElementById("filterButtonsContainer");
  const grid = document.getElementById("projectsGrid");
  const categories = Array.from(
    new Set(projects.map((p) => p.category.toLowerCase()))
  );
  categories.unshift("all");

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

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.category = project.category;
    card.dataset.project = project.id;

    card.addEventListener("click", () => openProjectModal(project.id));

    card.innerHTML = `
      <div class="project-card-content">
        <div class="project-status ${project.status}"></div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags
            .map((tag) => `<span class="project-tag">${tag}</span>`)
            .join("")}
        </div>
        <div class="project-actions">
          <button class="project-link">View Details</button>
        </div>
      </div>
    `;

    grid.appendChild(card);

    const button = card.querySelector(".project-link");
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      openProjectModal(project.id);
    });
  });

  filterProjects("all");
}

function filterProjects(category) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.display =
      category === "all" || card.dataset.category === category
        ? "block"
        : "none";
  });
}

function renderContactInfo() {
  const { contact, socialLinks } = portfolioData.personalInfo;
  const emailLink = document.getElementById("emailLink");
  const phoneLink = document.getElementById("phoneLink");
  const resumeLink = document.getElementById("resumeLink");

  emailLink.href = `mailto:${contact.email}`;
  document.getElementById("emailText").textContent = contact.email;

  phoneLink.href = `tel:${contact.phone.replace(/\s+/g, "")}`;

  document.getElementById("phoneText").textContent = contact.phone;

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

  document.addEventListener("keydown", handleModalKeyEvents);

  modal.focus();
}

function attachModalHandlers() {
  document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("projectModal").classList.remove("active");
    history.replaceState(null, null, `#projects`);
  });
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
      history.replaceState(null, null, `#projects`);
      modal.classList.remove("active");
    }
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
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

  sections.forEach((section) => {
    observer.observe(section);
  });
});

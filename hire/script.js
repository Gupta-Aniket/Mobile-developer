import portfolioData from "../data.js";

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
  renderSkillsSection();
  renderContactInfo();
  renderProjects();
  attachModalHandlers();
  attachProjectShareButtons();
  checkHashSituation();
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
      // skillPercent.textContent = `${skill.percentage}%`; // !<- stopped percentage !! too much cognitive load

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

  // 🔁 Extract unique categories from all project.category arrays
  const categorySet = new Set();
  projects.forEach((p) => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    categories.forEach((cat) => categorySet.add(cat.toLowerCase()));
  });
  const categories = ["all", ...Array.from(categorySet)];

  // 🧱 Render filter buttons
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
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // 🏷 Set data-categories (for filtering later)
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
        `<span class="modal-indicator${
          i === 0 ? " active" : ""
        }" data-index="${i}"></span>`
    )
    .join("");

  const mediaCount =
    (project.images?.length || 0) + (project.videoLinks?.length || 0);

  const sliderHTML =
    mediaSlides.length > 0
      ? `
    <div class="modal-slider-wrapper">
      ${
        mediaCount > 1
          ? `<button class="slider-arrow left" aria-label="Previous media">➱</button>`
          : ""
      }
      <div class="modal-slider">
        ${mediaSlides.join("")}
      </div>
      ${
        mediaCount > 1
          ? `<button class="slider-arrow right" aria-label="Next media">➱</button>`
          : ""
      }
      <div class="modal-indicators">
        ${indicatorsHTML}
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

  function loadYouTubeIframe(slide) {
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

  function setActiveSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    indicators.forEach((d, i) => d.classList.toggle("active", i === index));
    activeIndex = index;
    loadYouTubeIframe(slides[activeIndex]);
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
  loadYouTubeIframe(slides[activeIndex]); // preload first slide
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function attachProjectShareButtons() {
  document.querySelectorAll(".share-project-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const project = portfolioData.projects[idx];
      const slug =
        project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const projectURL = `${window.location.href}`;

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

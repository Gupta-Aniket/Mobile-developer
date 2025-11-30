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
  renderContactInfo();
  renderProjects();
  attachModalHandlers();
  // renderSkillsSection();
  renderExperience();
  activateScrollAnimations();
  renderSkillsList();
  renderDeploymentSection();
  attachProjectShareButtons();
  checkHashSituation();

  const hamburger = document.getElementById("nav-hamburger");
  const dropdown = document.getElementById("nav-dropdown");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("show");
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
    const isFeatured = ["flutter", "react"].includes(skill.slug);
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
  const items = document.querySelectorAll(".timeline-item");

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
    }
  );

  items.forEach((item) => observer.observe(item));
}

function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");

  portfolioData.experience.forEach((exp, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const bullets = exp.description.map((desc) => `<li>${desc}</li>`).join("");
    const icon = exp.icon || "🏢";

    // Odd items: spacer - icon - content
    // Even items: content - icon - spacer
    const isOdd = index % 2 === 0;

    item.innerHTML = `
      ${isOdd ? '<div class="timeline-spacer"></div>' : ""}
      ${!isOdd ? '<div class="timeline-content">' : ""}
        ${
          !isOdd
            ? `<h3 class="timeline-project">${exp.project} *</h3>
        <div class="timeline-company">${exp.company}</div>
        <span class="timeline-tech">${exp.tech}</span>
        <div class="timeline-desc"><ul>${bullets}</ul></div>`
            : ""
        }
        ${
          !isOdd && (exp.links.playstore || exp.links.appstore)
            ? `
          <div class="timeline-links">
            ${
              exp.links.playstore
                ? `<a href="${
                    exp.links.playstore
                  }" target="_blank" class="timeline-btn">
         <img src="${cdn(
           "googleplay"
         )}" class="timeline-link-icon" alt="Play Store">
         <span>Play Store</span>
       </a>`
                : ""
            }
${
  exp.links.appstore
    ? `<a href="${exp.links.appstore}" target="_blank" class="timeline-btn">
         <img src="${cdn(
           "appstore"
         )}" class="timeline-link-icon" alt="App Store">
         <span>App Store</span>
       </a>`
    : ""
}

          </div>
        `
            : ""
        }
      ${!isOdd ? "</div>" : ""}
      <img src="${icon}" alt="${exp.project}" class="timeline-icon">
      ${isOdd ? '<div class="timeline-content">' : ""}
        ${
          isOdd
            ? `<h3 class="timeline-project">${exp.project}*</h3>
        <div class="timeline-company">${exp.company}</div>
        <span class="timeline-tech">${exp.tech}</span>
        <div class="timeline-desc"><ul>${bullets}</ul></div>`
            : ""
        }
        ${
          isOdd && (exp.links.playstore || exp.links.appstore)
            ? `
          <div class="timeline-links">
            ${
              exp.links.playstore
                ? `<a href="${
                    exp.links.playstore
                  }" target="_blank" class="timeline-btn">
         <img src="${cdn(
           "googleplay"
         )}" class="timeline-link-icon" alt="Play Store">
         <span>Play Store</span>
       </a>`
                : ""
            }
${
  exp.links.appstore
    ? `<a href="${exp.links.appstore}" target="_blank" class="timeline-btn">
         <img src="${cdn(
           "appstore"
         )}" class="timeline-link-icon" alt="App Store">
         <span>App Store</span>
       </a>`
    : ""
}
          </div>
        `
            : ""
        }
      ${isOdd ? "</div>" : ""}
      ${!isOdd ? '<div class="timeline-spacer"></div>' : ""}
    `;

    timeline.appendChild(item);
  });
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
                `<span class="tag ${i === 0 ? "primary" : ""}">${tag}</span>`
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
    selectedCategory
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
                .then(() => showToast("Copied to clipboard"));
              break;
            case "markdown":
              navigator.clipboard
                .writeText(`[${project.title}](${projectURL})`)
                .then(() => showToast("Markdown copied"));
              break;
            case "devto":
              const devContent = `---\ntitle: ${project.title}\ndescription: ${project.description}\n---\n\nCheck it out 👉 ${projectURL}`;
              navigator.clipboard
                .writeText(devContent)
                .then(() => showToast ("Dev.to blog draft copied!"));
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
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

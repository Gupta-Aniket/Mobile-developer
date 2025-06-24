import portfolioData from "../data.js";

const projects = portfolioData.projects;
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".projects-grid");
  const filterContainer = document.getElementById("filterButtonsContainer");

  renderHeroSection();
  loadContactSection();
  renderAboutSection();
  loadSkills();
  loadTestimonials();
  loadStats();
  checkHashSituation(); // <- sharing links

  const resumeAnchor = document.getElementById("resumeLink");
  if (resumeAnchor) {
    const resumeUrl = portfolioData.personalInfo.contact.resume;
    resumeAnchor.href = resumeUrl;
    resumeAnchor.target = "_blank";
    resumeAnchor.rel = "noopener noreferrer";
  }

  if (!grid || !filterContainer) {
    console.error("⚠️ Required elements missing in DOM");
    return;
  }

  // 🔁 Get unique categories from projects
  const categories = Array.from(
    new Set(projects.map((p) => p.category.toLowerCase()))
  );
  categories.unshift("all"); // Add "all" to the beginning

  // 🛠️ Render filter buttons dynamically
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    if (category === "all") btn.classList.add("active");
    btn.dataset.filter = category;
    btn.textContent =
      category === "all"
        ? "All Projects"
        : category
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");
    filterContainer.appendChild(btn);
  });

  // 🔃 Load projects dynamically
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

  // ✅ Attach filter logic AFTER buttons are rendered
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const selectedCategory = btn.dataset.filter;
      filterProjects(selectedCategory);
    });
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

  // 🧠 Filtering logic
  function filterProjects(category) {
    console.log("🔍 Filtering projects by category:", category);
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // 👇 Trigger default filter
  filterProjects("all");
});

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

function loadTestimonials() {
  const subtitleEl = document.querySelector(".testimonials .section-subtitle");
  const testimonialsGrid = document.querySelector(".testimonials-grid");

  if (!portfolioData.testimonialsSection || !subtitleEl || !testimonialsGrid)
    return;

  const { subtitle, testimonials } = portfolioData.testimonialsSection;
  subtitleEl.textContent = subtitle;

  testimonials.forEach((t) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";

    const content = document.createElement("div");
    content.className = "testimonial-content";

    const quote = document.createElement("p");
    quote.className = "testimonial-text";
    quote.textContent = `"${t.quote}"`;

    const author = document.createElement("div");
    author.className = "testimonial-author";

    const avatar = document.createElement("div");
    avatar.className = "author-avatar";

    if (t.avatarImage && t.avatarImage.trim() !== "") {
      const img = document.createElement("img");
      img.src = t.avatarImage;
      img.alt = t.authorName;
      avatar.appendChild(img);
    } else {
      avatar.textContent = getInitials(t.authorName);
    }

    const info = document.createElement("div");
    info.className = "author-info";

    const name = document.createElement("div");
    name.className = "author-name";
    name.textContent = t.authorName;

    const role = document.createElement("div");
    role.className = "author-role";
    role.textContent = t.authorRole;

    info.appendChild(name);
    info.appendChild(role);

    author.appendChild(avatar);
    author.appendChild(info);

    content.appendChild(quote);
    content.appendChild(author);
    card.appendChild(content);
    testimonialsGrid.appendChild(card);
  });
}

// Utility to generate initials from full name
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
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

document.querySelector(".modal-close").addEventListener("click", () => {
  closeProjectModal();
});
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  history.replaceState(null, null, `#projects`);
}

// Close modal when clicking outside
document.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});

function handleModalKeyEvents(e) {
  const modal = document.getElementById("projectModal");
  if (!modal.classList.contains("active")) return;

  const slides = modal.querySelectorAll(".modal-slide");
  const indicators = modal.querySelectorAll(".modal-indicator");
  let activeIndex = [...slides].findIndex((s) =>
    s.classList.contains("active")
  );

  function setActiveSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    indicators.forEach((d, i) => d.classList.toggle("active", i === index));
  }
  if (e.key === "Escape") {
    closeProjectModal();
  }

  if (e.key === "ArrowRight") {
    setActiveSlide((activeIndex + 1) % slides.length);
  } else if (e.key === "ArrowLeft") {
    setActiveSlide((activeIndex - 1 + slides.length) % slides.length);
  }
}

// Theme toggle functionality
// const themeToggle = document.getElementById("themeToggle");
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");
//   const isDark = document.body.classList.contains("dark-theme");
//   themeToggle.textContent = isDark ? "☀️" : "🌙";
// });

// Animate stats counters
function animateStats() {
  const statValues = document.querySelectorAll(".stat-value");

  statValues.forEach((stat) => {
    const target = +stat.getAttribute("data-target");
    const duration = 2000; // Animation duration in ms
    const step = target / (duration / 16); // 16ms per frame

    let current = 0;
    const increment = () => {
      current += step;
      if (current < target) {
        stat.textContent = Math.round(current);
        requestAnimationFrame(increment);
      } else {
        stat.textContent = target;
      }
    };

    increment();
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  animateStats();

  // Initialize filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
    });

    const filter = button.dataset.filter;
    filterProjects(filter);
  });
  filterProjects("all");
});

// Filter projects based on category
function filterProjects(category) {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required";
      nameError.classList.add("visible");
      nameInput.classList.add("error");
      isValid = false;
    } else {
      nameError.classList.remove("visible");
      nameInput.classList.remove("error");
      nameInput.classList.add("valid");
    }

    // Validate email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      isValid = false;
    } else {
      emailError.classList.remove("visible");
      emailInput.classList.remove("error");
      emailInput.classList.add("valid");
    }

    // Validate project type
    const projectInput = document.getElementById("project");
    const projectError = document.getElementById("projectError");
    if (!projectInput.value) {
      projectError.textContent = "Please select a project type";
      projectError.classList.add("visible");
      projectInput.classList.add("error");
      isValid = false;
    } else {
      projectError.classList.remove("visible");
      projectInput.classList.remove("error");
      projectInput.classList.add("valid");
    }

    // Validate message
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (!messageInput.value.trim()) {
      messageError.textContent = "Please describe your project";
      messageError.classList.add("visible");
      messageInput.classList.add("error");
      isValid = false;
    } else {
      messageError.classList.remove("visible");
      messageInput.classList.remove("error");
      messageInput.classList.add("valid");
    }

    if (isValid) {
      // Form is valid, submit it (in a real app, you would send to a server)
      const submitButton = contactForm.querySelector(".form-submit");
      submitButton.classList.add("loading");

      // Simulate form submission
      setTimeout(() => {
        submitButton.classList.remove("loading");
        alert("Thank you for your message! I'll get back to you soon.");
        contactForm.reset();

        // Remove valid classes
        document
          .querySelectorAll(".form-input, .form-textarea")
          .forEach((input) => {
            input.classList.remove("valid");
          });
      }, 1500);
    }
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
window.closeProjectModal = closeProjectModal;

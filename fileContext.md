## 📂 Project Structure

```
└── ./
    └── freelance/
        ├── 1.js
        ├── index.html
        ├── script.js
        └── wizard.js
```

### 1.js
```javascript
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
  renderProjects();
  loadStats();
  attachModalHandlers();

  checkHashSituation(); // <- sharing links

  // 👇 Trigger default filter
  // filterProjects("all");
});
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

// // Run when page loads
// document.addEventListener("DOMContentLoaded", () => {
//   animateStats();

//   // Initialize filter buttons
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Remove active class from all buttons
//       filterButtons.forEach((btn) => btn.classList.remove("active"));
//       // Add active class to clicked button
//       button.classList.add("active");
//     });

//     const filter = button.dataset.filter;
//     filterProjects(filter);
//   });
//   filterProjects("all");
// });

// // Filter projects based on category
// function filterProjects(category) {
//   const projectCards = document.querySelectorAll(".project-card");

//   projectCards.forEach((card) => {
//     if (category === "all" || card.dataset.category === category) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

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

```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aniket - Mobile App Developer</title>
    <link
      href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700;800&family=SF+Pro+Text:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../style.css" />
    <link id="favicon" rel="icon" href="../assets/fav-icon/bear-awake.png" />
    <script>
      const favicon = document.getElementById("favicon");

      // 1) While page is loading → bear-loading
      // beforeunload fires when you start navigating away or refreshing
      window.addEventListener("beforeunload", () => {
        favicon.href = "../assets/fav-icon/bear-loading.png";
      });

      // after fully loaded → back to awake
      window.addEventListener("load", () => {
        favicon.href = "../assets/fav-icon/bear-awake.png";
      });

      // 2) Tab visibility (sleeping/awake)
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          favicon.href = "../assets/fav-icon/bear-sleeping.png";
        } else {
          favicon.href = "../assets/fav-icon/bear-awake.png";
        }
      });
    </script>
  </head>
  <body>
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-content">
        <div class="nav-title">Aniket</div>
        <div class="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title" id="hero-title"></h1>
          <p class="hero-subtitle" id="hero-subtitle"></p>

          <div class="hero-stats" id="hero-stats"></div>

          <a href="#projects" class="cta-button" id="cta-button"
            >View My Work</a
          >
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" id="about-title"></h2>
          <p class="section-subtitle" id="about-subtitle"></p>
        </div>

        <div class="about-content">
          <div class="about-avatar" id="about-avatar"></div>

          <div>
            <div class="about-quote" id="about-quote"></div>

            <div id="about-bio"></div>

            <div class="modal-section">
              <h3 class="modal-section-title">Tech Stack & Expertise</h3>
              <div class="tech-stack" id="tech-stack"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Progress Section -->
    <section class="section skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Proficiency</h2>
          <p class="section-subtitle">
            My expertise across different technologies and platforms
          </p>
        </div>

        <div class="skills-grid" id="skillsGrid"></div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            A showcase of my recent work across different platforms and
            industries
          </p>
        </div>
        <div class="project-filters" id="filterButtonsContainer">
          <!-- Filter buttons will be inserted here dynamically -->
        </div>

        <div class="projects-grid" id="projectsGrid">
          <!-- Projects will be dynamically inserted here -->
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <!-- 
    <section class="section testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Clients Say</h2>
          <p class="section-subtitle"></p>
        </div>
        <div class="testimonials-grid"></div>
      </div>
    </section> -->

    <!-- Stats Section -->

    <!-- <section class="section stats">
      <div class="container">
        <div class="stats-grid"></div>
      </div>
    </section> -->

    <!-- Contact Section -->
    <section class="section contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let's Work Together</h2>
          <p class="section-subtitle">
            Ready to bring your mobile app idea to life? Let's discuss your
            project and create something amazing.
          </p>
        </div>
        <div class="contact-content">
          <div class="contact-form">
            <!-- <form id="contactForm"></form> -->
            <div style="margin-top: 20px">
              <button
                onclick="document.querySelector('.wizard-overlay').classList.add('active')"
                class="cta-button"
              >
                Start Conversational Wizard
              </button>
            </div>
          </div>
        </div>
        <div class="social-links">
          <a
            href="https://github.com/aniket"
            class="social-link"
            target="_blank"
            >GitHub</a
          >
          <a
            href="https://linkedin.com/in/aniket"
            class="social-link"
            target="_blank"
            >LinkedIn</a
          >
          <a
            href="https://twitter.com/aniket"
            class="social-link"
            target="_blank"
            >Twitter</a
          >
        </div>
      </div>
    </section>


    <!-- Project Modal -->
    <div id="projectModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modalTitle" class="modal-title">Project Title</h2>
          <div class="modal-share-row">
            <div class="share-project-btn" title="Share this">
              <img src="../assets/share.svg" height="30rem" alt="Share icon" />
            </div>
            

            <button class="modal-close" aria-label="Close modal">✕</button>
          </div>
        </div>
        <div class="modal-body" id="modalBody"></div>
        <div class="modal share-modal" id="shareModal" style="display: none">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Share This Project</h3>
              <button class="modal-close">✕</button>
            </div>

            <div class="share-options">
              <button class="share-option" data-platform="linkedin">
                📇 LinkedIn
              </button>
              <button class="share-option" data-platform="twitter">
                🐦 Twitter
              </button>
              <button class="share-option" data-platform="whatsapp">
                💬 WhatsApp
              </button>
              <button class="share-option" data-platform="copy">
                📋 Copy Link
              </button>
              <button class="share-option" data-platform="markdown">
                📄 Copy Markdown
              </button>
              <button class="share-option" data-platform="devto">
                📝 Dev.to
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wizard Modal -->
    <div
      class="wizard-overlay"
      onclick="if(event.target.classList.contains('wizard-overlay')) this.classList.remove('active')"
    >
      <div class="wizard-container">
        <button id="closeBtn" class="wizard-close-btn">✕</button>

        <div class="wizard-question" id="question">Loading...</div>
        <div class="wizard-input-area" id="inputArea"></div>
        <div class="wizard-hint" id="hint"></div>

        <div class="wizard-buttons">
          <button id="backBtn" class="btn-secondary">Back</button>
          <button id="nextBtn" class="btn-primary">Next</button>
        </div>
        <div class="wizard-progress">
          <div class="wizard-progress-bar" id="progressBar"></div>
        </div>
      </div>
    </div>

    <script src="script.js" type="module"></script>
    <script src="wizard.js" type="module"></script>
  </body>
</html>

```

### script.js
```javascript
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

```

### wizard.js
```javascript
// wizard.js - FINAL V1.5 PRO CLEAN FIX

let state = {
  name: "",
  projectType: "",
  appName: "",
  description: "",
  audience: "",
  country: "IN",
  currency: "INR",
  budget: "",
  customBudget: "",
  urgency: "",
  customUrgency: "",
  links: "",
  email: "",
  phone: "",
};

const countries = [
  {
    code: "IN",
    name: "India",
    currency: "INR",
    budgets: ["₹10k–25k", "₹25k–50k", "₹50k–1L", "₹1L+"],
  },
  {
    code: "US",
    name: "United States",
    currency: "USD",
    budgets: ["$500–1500", "$1500–3000", "$3000–8000", "$8000+"],
  },
  {
    code: "UK",
    name: "United Kingdom",
    currency: "GBP",
    budgets: ["£400–1200", "£1200–2500", "£2500–7000", "£7000+"],
  },
  {
    code: "EU",
    name: "Europe",
    currency: "EUR",
    budgets: ["€400–1200", "€1200–2500", "€2500–7000", "€7000+"],
  },
  {
    code: "AU",
    name: "Australia",
    currency: "AUD",
    budgets: ["A$700–2000", "A$2000–4000", "A$4000–9000", "A$9000+"],
  },
  {
    code: "CA",
    name: "Canada",
    currency: "CAD",
    budgets: ["C$600–1800", "C$1800–3500", "C$3500–8500", "C$8500+"],
  },
  {
    code: "SG",
    name: "Singapore",
    currency: "SGD",
    budgets: ["S$700–2000", "S$2000–4000", "S$4000–9000", "S$9000+"],
  },
];

// const questions = [
//   {
//     key: "name",
//     question:
//       "Hey, thanks for reaching out! Before we dive in, may I know your name?",
//     type: "text",
//   },
//   {
//     key: "country",
//     question: (s) =>
//       `Hi, ${s.name ? s.name.split(" ")[0] : "there"}. Where are you based?`,
//     type: "country",
//   },
//   {
//     key: "budget",
//     question: "What budget range are you considering?",
//     type: "budget",
//   },
//   {
//     key: "urgency",
//     question: "By the way, how soon are you hoping to launch?",
//     type: "urgency",
//   },
//   {
//     key: "projectType",
//     question: "What kind of project is this?",
//     type: "projectType",
//   },
//   {
//     key: "appName",
//     question: (s) =>
//       `Awesome${
//         s.name ? ", " + s.name : ""
//       }. What would you like to call your ${
//         s.projectType === "Web" ? "website" : "app"
//       }?`,
//     type: "text",
//     condition: (s) => s.projectType !== "Consultation",
//     optional: true,
//   },
//   {
//     key: "description",
//     question: "Perfect. Tell me a bit more — what will this help people do?",
//     type: "textarea",
//     optional: true,
//   },
//   { key: "audience", question: "Who would mostly use this?", type: "text" },
//   {
//     key: "links",
//     question:
//       "If you have any links (Figma, Docs, Github, etc) please share them:",
//     type: "textarea",
//     optional: true,
//   },
//   {
//     key: "contact",
//     question: "Finally, how can I reach you?",
//     type: "contact",
//   },
// ];
const questions = [
  {
    key: "name",
    question: "Hey 👋 Nice to meet you! What should I call you?",
    type: "text",
    hint: "This helps us personalize our conversation. You can just enter your first name.",
  },
  {
    key: "country",
    question: (s) =>
      `Hi ${s.name ? s.name.split(" ")[0] : "friend"}! Where are you based?`,
    type: "country",
    hint: "We adjust budgets & timelines depending on your location.",
  },
  {
    key: "projectType",
    question: "What are we building together?",
    type: "projectType",
    hint: "Don't worry, you can always update this later.",
  },
  {
    key: "appName",
    question: (s) =>
      `Do you have a name in mind for your ${
        s.projectType === "Web" ? "website" : "app"
      }?`,
    type: "text",
    hint: "If you haven’t decided yet, you can skip this for now.",
    condition: (s) => s.projectType !== "Consultation",
    optional: true,
  },
  {
    key: "description",
    question: "Tell me a little more — what’s your vision for this project?",
    type: "textarea",
    hint: "A simple 1-2 line overview helps us understand your idea better.",
    optional: true,
  },
  {
    key: "audience",
    question: "Who are you building this for? Who will use it most?",
    type: "text",
    hint: "Example: College students, small businesses, working professionals, etc.",
  },
  {
    key: "links",
    question:
      "If you have any designs, sketches, or references, feel free to share links here:",
    type: "textarea",
    hint: "Figma, Google Docs, Notion, Github — anything helps!",
    optional: true,
  },
  {
    key: "budget",
    question: "Let’s talk budget — where does your comfort zone roughly sit?",
    type: "budget",
    hint: "This helps us recommend solutions that fit your expectations.",
  },
  {
    key: "urgency",
    question: "And when are you hoping to see it go live?",
    type: "urgency",
    hint: "If you're flexible, that's totally fine too.",
  },
  {
    key: "contact",
    question: "Finally, how can I get in touch with you?",
    type: "contact",
    hint: "We’ll only use your contact info to discuss your project.",
  },
];

let currentStep = 0;
const progressBar = document.getElementById("progressBar");
const questionEl = document.getElementById("question");
const inputArea = document.getElementById("inputArea");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

function renderStep() {
  const step = questions[currentStep];
  const totalSteps = questions.filter(
    (q) => !q.condition || q.condition(state)
  ).length;
  const progress = (getVisibleStepIndex() / totalSteps) * 100;
  progressBar.style.width = `${progress}%`;

  questionEl.textContent =
    typeof step.question === "function" ? step.question(state) : step.question;
  inputArea.innerHTML = "";
  hint.innerHTML = "";
  if (step.type === "text") {
    inputArea.innerHTML = `<input class="wizard-input" type="text" id="inputField" value="${
      state[step.key] || ""
    }" />`;
  } else if (step.type === "textarea") {
    inputArea.innerHTML = `<textarea class="wizard-input" rows="4" allow id="inputField">${
      state[step.key] || ""
    }</textarea>`;
  } else if (step.type === "projectType") {
    inputArea.innerHTML = `<select class="wizard-input" id="inputField">
      <option value="">Select Type</option>
      <option value="Web">Web Development</option>
      <option value="App">Mobile App</option>
      <option value="Consultation">Consultation</option>
    </select>`;
  } else if (step.type === "country") {
    inputArea.innerHTML = `<select class="wizard-input" id="inputField">
      ${countries
        .map(
          (c) =>
            `<option value="${c.code}" ${
              state.country === c.code ? "selected" : ""
            }>${c.name}</option>`
        )
        .join("")}
    </select>`;
  } else if (step.type === "budget") {
    const selectedCountry = countries.find((c) => c.code === state.country);
    inputArea.innerHTML = `<select class="wizard-input" id="inputField">
      ${selectedCountry.budgets
        .map(
          (b) =>
            `<option value="${b}" ${
              state.budget === b ? "selected" : ""
            }>${b}</option>`
        )
        .join("")}
      <option value="Other">Other...</option>
    </select>
    <div id="customInput" style="margin-top:10px;"></div>`;
  } else if (step.type === "urgency") {
    inputArea.innerHTML = `<select class="wizard-input" id="inputField">
      <option value="">Select Timeline</option>
      <option value="Urgent">Urgent</option>
      <option value="1 Month">1 Month</option>
      <option value="Flexible">Flexible</option>
      <option value="Other">Other...</option>
    </select>
    <div id="customInput" style="margin-top:10px;"></div>`;
  } else if (step.type === "contact") {
    const countryName =
      countries.find((c) => c.code === state.country)?.name || "";
    inputArea.innerHTML = `
    <input class="wizard-input" type="email" placeholder="Email" id="emailField" value="${
      state.email || ""
    }" /><br/><br/>

    <input class="wizard-input" type="text" placeholder="Phone" id="phoneField" value="${
      state.phone || ""
    }"   
      />
      <p class="sub-text">ⓘ You selected your country as ${countryName}. If your number is different, feel free to enter full number with country code</p>`;
  }

  backBtn.style.display = "inline-block";
  backBtn.style.visibility = getVisibleStepIndex() === 0 ? "hidden" : "visible";

  updateNextButton();
  hint.innerHTML = step.hint;

  const inputField = document.getElementById("inputField");
  if (inputField) {
    inputField.addEventListener("input", updateNextButton);
    inputField.addEventListener("change", (e) => {
      if (e.target.value === "Other") {
        document.getElementById(
          "customInput"
        ).innerHTML = `<input class="wizard-input" type="text" id="customField" placeholder="Please specify..." />`;

        // Also attach listener to customField for real-time button update
        const customField = document.getElementById("customField");
        customField.addEventListener("input", updateNextButton);
      } else {
        if (document.getElementById("customInput"))
          document.getElementById("customInput").innerHTML = "";
      }
    });
  }

  if (step.type === "contact") {
    const emailField = document.getElementById("emailField");
    emailField.addEventListener("input", updateNextButton);
  }
}

function updateNextButton() {
  const step = questions[currentStep];

  if (step.type === "contact") {
    const emailField = document.getElementById("emailField");
    nextBtn.innerHTML = emailField.value.trim() ? "Next" : "Skip";
    return;
  }

  if (step.optional) {
    let value = document.getElementById("inputField")?.value.trim();

    // Special case: budget/urgency "Other"
    if (
      (step.type === "budget" || step.type === "urgency") &&
      value === "Other"
    ) {
      const customValue = document.getElementById("customField")?.value.trim();
      value = customValue;
    }

    nextBtn.innerHTML = value ? "Next" : "Skip";
  } else {
    nextBtn.innerHTML =
      getVisibleStepIndex() === questions.length - 1 ? "Finish" : "Next";
  }
}

function handleNext() {
  const step = questions[currentStep];

  if (
    step.type === "text" ||
    step.type === "textarea" ||
    step.type === "projectType" ||
    step.type === "country" ||
    step.type === "budget" ||
    step.type === "urgency"
  ) {
    const value = document.getElementById("inputField").value.trim();
    const customValue = document.getElementById("customField")?.value.trim();

    if (!value && !step.optional) return showPopup("Please fill this field.");

    if (step.type === "budget" && value === "Other") {
      if (!customValue) return showPopup("Please enter your custom budget.");
      state.customBudget = customValue;
      state.budget = value;
    } else if (step.type === "urgency" && value === "Other") {
      if (!customValue) return showPopup("Please enter your custom timeline.");
      state.customUrgency = customValue;
      state.urgency = value;
    } else {
      state[step.key] = value;
    }

    const selectedCountry = countries.find((c) => c.code === state.country);
    state.currency = selectedCountry.currency;
  } else if (step.type === "contact") {
    const email = document.getElementById("emailField").value.trim();
    const phone = document.getElementById("phoneField").value.trim();
    if (!email) return showPopup("Email required.");
    state.email = email;
    state.phone = phone;
  }

  moveNextVisibleStep();
}

function handleBack() {
  movePrevVisibleStep();
}
function getVisibleStepIndex() {
  return (
    questions.filter(
      (q, i) => i <= currentStep && (!q.condition || q.condition(state))
    ).length - 1
  );
}
function moveNextVisibleStep() {
  do {
    currentStep++;
  } while (
    currentStep < questions.length &&
    questions[currentStep].condition &&
    !questions[currentStep].condition(state)
  );
  if (currentStep >= questions.length) submitData();
  else renderStep();
}
function movePrevVisibleStep() {
  do {
    currentStep--;
  } while (
    currentStep > 0 &&
    questions[currentStep].condition &&
    !questions[currentStep].condition(state)
  );
  renderStep();
}

function submitData() {
  console.log("Collected Data Summary:");
  console.log(`1. Name - ${state.name}`);
  console.log(`2. Project Type - ${state.projectType}`);
  if (state.projectType !== "Consultation")
    console.log(`3. App Name - ${state.appName}`);
  console.log(`4. Description - ${state.description}`);
  console.log(`5. Audience - ${state.audience}`);
  console.log(`6. Country - ${state.country} (${state.currency})`);
  console.log(
    `7. Budget - ${
      state.budget === "Other" ? state.customBudget : state.budget
    }`
  );
  console.log(
    `8. Urgency - ${
      state.urgency === "Other" ? state.customUrgency : state.urgency
    }`
  );
  console.log(`9. Links - ${state.links}`);
  console.log(`10. Email - ${state.email}`);
  console.log(`11. Phone - ${state.phone}`);

  progressBar.style.width = `100%`;
  setTimeout(() => {
    showPopup(
      "✅ Your idea has been recorded. We'll reach out to you shortly.",
      true
    );
  }, 300);
}

function showPopup(message, closeAfter) {
  const popup = document.createElement("div");
  popup.className = "wizard-popup";
  popup.innerHTML = `<div class="popup-content">${message}</div>`;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
    if (closeAfter)
      document.querySelector(".wizard-overlay").classList.remove("active");
  }, 2000);
}

function showQuitConfirmation() {
  const stepIndex = getVisibleStepIndex();
  let msg = "Are you sure you want to quit?";
  if (stepIndex <= 1)
    msg =
      "You're giving up too early. Stick for a bit — you'll thank yourself!";
  else if (stepIndex >= questions.length - 2)
    msg = "You're almost done — why quit now?";
  else msg = "You're making good progress — just a few more steps!";

  const confirmBox = document.createElement("div");
  confirmBox.className = "wizard-confirm";
  confirmBox.innerHTML = `<div class="confirm-content">
    <p>${msg}</p>
    <div class="wizard-popup-buttons">
    <button id="quitYes">Leave it, <br>I want to quit</button>
    <button id="quitNo">Actually,<br>let's continue</button>
    </div>
  </div>`;
  document.body.appendChild(confirmBox);

  document.getElementById("quitYes").onclick = () => {
    document.querySelector(".wizard-overlay").classList.remove("active");
    confirmBox.remove();
  };
  document.getElementById("quitNo").onclick = () => {
    confirmBox.remove();
  };
}

backBtn.addEventListener("click", handleBack);
nextBtn.addEventListener("click", handleNext);
closeBtn.addEventListener("click", showQuitConfirmation);

renderStep();

```


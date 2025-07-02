## 📂 Project Structure

```
└── ./
    ├── data.js
    ├── fileContext.txt
    ├── freelance/
    │   ├── 1.js
    │   ├── index.html
    │   ├── script.js
    │   └── wizard.js
    ├── hire/
    │   ├── index.html
    │   └── script.js
    ├── shared-data.js
    └── style.css
```

### data.js
```javascript
import sharedData from "./shared-data.js";

const portfolioData = {
  personalInfo: sharedData.personalInfo,

  formOptions: {
    projectTypes: [
      { value: "flutter", label: "Flutter App" },
      { value: "react-native", label: "React Native App" },
      { value: "ios", label: "iOS Native App" },
      { value: "android", label: "Android Native App" },
      { value: "consultation", label: "Consultation" },
    ],
    budgets: [
      { value: "5k-10k", label: "$5,000 - $10,000" },
      { value: "10k-25k", label: "$10,000 - $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k+", label: "$50,000+" },
    ],
  },

  heroStats: [
    { value: "20+", label: "Projects Shipped" },
    { value: "4", label: "Platforms" },
    { value: "2-4", label: "Weeks to MVP" },
    // { value: "98%", label: "Client Satisfaction" },
  ],

  about: {
    title: "About Me",
    subtitle:
      "Passionate about creating mobile experiences that make a difference in people's daily lives.",
    image: "../assets/profile-image/",
    quote:
      "The best mobile experiences seamlessly blend innovation, functionality, and user delight",
    bio: [
      "I'm Aniket, and I'm all about creating mobile apps that make a difference. My journey into development started with a simple fascination: how can tech truly simplify things and bring a bit of joy to people's daily lives? I've explored this extensively through my many real-world personal projects.",
      "I specialize in Flutter and React Native, always keeping an eye on performance, clean code, and crafting pixel-perfect UIs. What I really enjoy is blending strong technical execution with user-centered design – it's how I'm able to quickly prototype concepts and deliver engaging, reliable mobile solutions.",
      "My 30+ GitHub repos are a testament to my hands-on experience, showcasing my diverse skills and my commitment to consistently building and learning.",
    ],
    techStack: [
      { name: "Flutter", level: "expert" },
      { name: "React Native", level: "expert" },
      { name: "Dart", level: "expert" },
      { name: "JavaScript", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
      { name: "Supabase", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "WebRTC", level: "intermediate" },
      { name: "Shell Scripting", level: "intermediate" },
      { name: "MVC", level: "expert" },
      { name: "UI/UX Design", level: "expert" },
      { name: "MVVM", level: "intermediate" },
    ],
  },

  skills: [
    {
      category: "Frontend & UI/UX",
      items: [
        { name: "Flutter", percentage: 95 },
        { name: "React Native", percentage: 90 },
        { name: "UI/UX Design", percentage: 95 },
      ],
    },
    {
      category: "Backend & Cloud Services",
      items: [
        { name: "Firebase", percentage: 90 },
        { name: "Supabase", percentage: 75 },
        { name: "REST APIs", percentage: 90 },
      ],
    },
    {
      category: "Automation, DevOps & Tooling",
      items: [
        { name: "Python", percentage: 80 },
        { name: "Shell/Bash", percentage: 75 },
        { name: "WebRTC", percentage: 70 },
      ],
    },
  ],
  projects: sharedData.projectData,

  testimonialsSection: {
    subtitle: "Feedback from amazing people I've had the pleasure to work with",
    testimonials: [
      {
        quote:
          "Aniket delivered an exceptional Flutter app that exceeded our expectations. His attention to detail and user experience is remarkable.",
        authorName: "Sarah Johnson",
        authorRole: "Product Manager, TechCorp",
        avatarImage: "",
      },
      {
        quote:
          "not with Aniket was a game-changer. He transformed our complex requirements into a beautiful, intuitive mobile app.",
        authorName: "Michael Chen",
        authorRole: "CEO, StartupX",
        avatarImage: "",
      },
      {
        quote:
          "Professional, reliable, and incredibly skilled. Aniket's React Native expertise helped us launch on time and under budget.",
        authorName: "Emily Rodriguez",
        authorRole: "CTO, InnovateLab",
        avatarImage: "",
      },
    ],
  },

  finalStats: [
    { icon: "\ud83d\udcf1", target: 15, label: "Apps Shipped" },
    { icon: "\u2b50", target: 98, label: "Client Satisfaction" },
    { icon: "\ud83d\ude80", target: 50, label: "Features Delivered" },
    { icon: "\ud83c\udf1f", target: 14, label: "Years Experience" },
  ],
};

export default portfolioData;

```

### fileContext.txt
```
data.js-----------------------------------------------------
import sharedData from "./shared-data.js";

const portfolioData = {
  personalInfo: sharedData.personalInfo,

  formOptions: {
    projectTypes: [
      { value: "flutter", label: "Flutter App" },
      { value: "react-native", label: "React Native App" },
      { value: "ios", label: "iOS Native App" },
      { value: "android", label: "Android Native App" },
      { value: "consultation", label: "Consultation" },
    ],
    budgets: [
      { value: "5k-10k", label: "$5,000 - $10,000" },
      { value: "10k-25k", label: "$10,000 - $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k+", label: "$50,000+" },
    ],
  },

  heroStats: [
    { value: "20+", label: "Projects Shipped" },
    { value: "4", label: "Platforms" },
    { value: "2-4", label: "Weeks to MVP" },
    // { value: "98%", label: "Client Satisfaction" },
  ],

  about: {
    title: "About Me",
    subtitle:
      "Passionate about creating mobile experiences that make a difference in people's daily lives.",
    image: "../assets/profile-image/",
    quote:
      "The best mobile experiences seamlessly blend innovation, functionality, and user delight",
    bio: [
      "I'm Aniket, and I'm all about creating mobile apps that make a difference. My journey into development started with a simple fascination: how can tech truly simplify things and bring a bit of joy to people's daily lives? I've explored this extensively through my many real-world personal projects.",
      "I specialize in Flutter and React Native, always keeping an eye on performance, clean code, and crafting pixel-perfect UIs. What I really enjoy is blending strong technical execution with user-centered design – it's how I'm able to quickly prototype concepts and deliver engaging, reliable mobile solutions.",
      "My 30+ GitHub repos are a testament to my hands-on experience, showcasing my diverse skills and my commitment to consistently building and learning.",
    ],
    techStack: [
      { name: "Flutter", level: "expert" },
      { name: "React Native", level: "expert" },
      { name: "Dart", level: "expert" },
      { name: "JavaScript", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
      { name: "Supabase", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "WebRTC", level: "intermediate" },
      { name: "Shell Scripting", level: "intermediate" },
      { name: "MVC", level: "expert" },
      { name: "UI/UX Design", level: "expert" },
      { name: "MVVM", level: "intermediate" },
    ],
  },

  skills: [
    {
      category: "Frontend & UI/UX",
      items: [
        { name: "Flutter", percentage: 95 },
        { name: "React Native", percentage: 90 },
        { name: "UI/UX Design", percentage: 95 },
      ],
    },
    {
      category: "Backend & Cloud Services",
      items: [
        { name: "Firebase", percentage: 90 },
        { name: "Supabase", percentage: 75 },
        { name: "REST APIs", percentage: 90 },
      ],
    },
    {
      category: "Automation, DevOps & Tooling",
      items: [
        { name: "Python", percentage: 80 },
        { name: "Shell/Bash", percentage: 75 },
        { name: "WebRTC", percentage: 70 },
      ],
    },
  ],
  projects: sharedData.projectData,

  testimonialsSection: {
    subtitle: "Feedback from amazing people I've had the pleasure to work with",
    testimonials: [
      {
        quote:
          "Aniket delivered an exceptional Flutter app that exceeded our expectations. His attention to detail and user experience is remarkable.",
        authorName: "Sarah Johnson",
        authorRole: "Product Manager, TechCorp",
        avatarImage: "",
      },
      {
        quote:
          "not with Aniket was a game-changer. He transformed our complex requirements into a beautiful, intuitive mobile app.",
        authorName: "Michael Chen",
        authorRole: "CEO, StartupX",
        avatarImage: "",
      },
      {
        quote:
          "Professional, reliable, and incredibly skilled. Aniket's React Native expertise helped us launch on time and under budget.",
        authorName: "Emily Rodriguez",
        authorRole: "CTO, InnovateLab",
        avatarImage: "",
      },
    ],
  },

  finalStats: [
    { icon: "\ud83d\udcf1", target: 15, label: "Apps Shipped" },
    { icon: "\u2b50", target: 98, label: "Client Satisfaction" },
    { icon: "\ud83d\ude80", target: 50, label: "Features Delivered" },
    { icon: "\ud83c\udf1f", target: 14, label: "Years Experience" },
  ],
};

export default portfolioData;

------------------------------------------------------------------

freelance/1.js----------------------------------------------
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

------------------------------------------------------------------

freelance/index.html----------------------------------------
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

    <!-- Project Detail Modal -->
    <div id="projectModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modalTitle" class="modal-title">Project Title</h2>
          <button class="modal-close" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body" id="modalBody">
          <!-- Dynamic content will be inserted here -->
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

------------------------------------------------------------------

freelance/script.js-----------------------------------------
// freelance/script.js (Clean Fixed Version)

import portfolioData from "../data.js";

const projects = portfolioData.projects;

window.addEventListener("DOMContentLoaded", () => {
  renderHeroSection();
  loadContactSection();
  renderAboutSection();
  loadSkills();

  renderProjects();
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

function attachModalHandlers() {
  const modal = document.getElementById("projectModal");
  const closeModal = () => {
    modal.classList.remove("active");
    history.replaceState(null, null, `#projects`);
  };

  document.querySelector(".modal-close")?.addEventListener("click", closeModal);

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
    if (modal.classList.contains("active")) closeModal();
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

------------------------------------------------------------------

freelance/wizard.js-----------------------------------------
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

  showPopup(
    "✅ Your idea has been recorded. We'll reach out to you shortly.",
    true
  );
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

------------------------------------------------------------------

hire/index.html---------------------------------------------
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
    <!-- HEAD of your index.html -->
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
          <a id="resumeButton" class="cta-button">Download Resume</a>
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

    <!-- Skills Section -->
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

    <!-- Contact Info Section -->
    <section class="section contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact Me</h2>
          <p class="section-subtitle">Direct ways to reach out to me</p>
        </div>
        <div class="contact-alternatives">
          <div class="contact-methods">
            <a href="#" id="emailLink" class="contact-method">
              <span class="contact-icon">📧</span>
              <span class="contact-text" id="emailText"></span>
            </a>
            <a href="#" id="phoneLink" class="contact-method">
              <span class="contact-icon">📞</span>
              <span class="contact-text" id="phoneText"></span>
            </a>
            <a id="resumeLink" class="contact-method">
              <span class="contact-icon">📄</span>
              <span class="contact-text">Download Resume</span>
            </a>
          </div>
        </div>
        <div class="social-links" id="socialLinksContainer"></div>
      </div>
    </section>

    <!-- Project Modal -->
    <div id="projectModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modalTitle" class="modal-title">Project Title</h2>
          <button class="modal-close" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    </div>

    <script src="script.js" type="module"></script>
  </body>
</html>

------------------------------------------------------------------

hire/script.js----------------------------------------------
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

------------------------------------------------------------------

shared-data.js----------------------------------------------
const sharedData = {
  personalInfo: {
    name: "Aniket",
    title: "Mobile App Developer",
    subtitle:
      "Building exceptional iOS and Android experiences with Flutter, React Native, and modern development practices that users love and businesses rely on.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Gupta-Aniket/" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/work-gupta-aniket/",
      },
      { name: "Twitter", url: "https://x.com/adbhut_praani/" },
    ],
    contact: {
      email: "work.gupta.aniket@gmail.com",
      phone: "+91 8319906162",
      resume:
        "https://drive.google.com/uc?export=download&id=1R5J3xVJJfHgzsf7KzFWopaorKfpB_N2R",
    },
  },

  projectData: [
    //    "live"
    //    "ongoing"
    //    "deprecated";

    // *kabootar
    {
      id: "kabootar",
      title: "WebRTC Pin Based Video-call",
      description:
        "A pin-based video calling app built with WebRTC and Firebase, offering secure, anonymous connections without login or signup.",
      category: "react-native",
      status: "live",
      tags: ["React-Native", "Firebase", "WebRTC", "Video-Call", "Anonymous"],
      details: [
        "Secure, anonymous video calls using a shared PIN (no login/signup)",
        "Leverages WebRTC for direct peer-to-peer connections",
        "Firebase for real-time data synchronization and signaling",
        "Efficient database cleanup to prevent clutter",
        "Utilizes Google's STUN server for robust peer-to-peer setup",
      ],
      images: [
        "kabootar/1.jpeg",
        "kabootar/2.jpeg",
        "kabootar/3.jpeg",
        "kabootar/4.jpeg",
      ],
      github: "https://github.com/Gupta-Aniket/Kabootar",
      live: "https://github.com/Gupta-Aniket/Kabootar/releases/download/android/app-release.apk",
    },

    // * gemini chatbot
    {
      id: "cancer",
      title: "Gemini Chatbot with Advanced UX",
      description:
        "A Gemini AI chatbot designed for enhanced accessibility and a superior user experience, extending beyond the original app's features.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
      tags: [
        "Flutter",
        "Hive",
        "Share-Intent",
        "Gen-AI",
        "Lottie-Animations",
        "Image-upload",
      ],
      details: [
        "Improved accessibility with pinch-to-zoom gestures for text",
        "Ability to share specific chatbot responses directly",
        "Supports image uploads for multimodal conversations",
        "Integrates Google Gen-AI for intelligent responses",
        "Local storage for persistent chat history using Hive",
        "Text-to-Speech (TTS) and Speech-to-Text (STT) for better accessibility",
        "Unique 'water-spent meter' for playful server cooling insights",
      ],
      images: ["gemini/1.png", "gemini/2.png", "gemini/3.png", "gemini/4.png"],
      github: "https://github.com/Gupta-Aniket/Cancer",
      live: "https://github.com/Gupta-Aniket/Cancer/releases/download/android/cancer.gemini.apk",
    },

    // *bmi
    {
      id: "bmi-calculator",
      title: "BMI Calculator App (Flutter)",
      description:
        "A sleek Flutter-based Body Mass Index calculator with intuitive UI/UX for tracking BMI based on gender, height, and weight.",
      category: "flutter",
      status: "live",
      tags: [
        "Flutter",
        "BMI",
        "SleekSlider",
        "UI/UX",
        "Dart",
        "State Management",
      ],
      details: [
        "Real-time BMI calculation with gender selection and interactive controls",
        "Provides category-based feedback (Underweight, Normal, Overweight, Obese)",
        "Custom color-coded results with dynamic styling for clear feedback",
        "Utilizes `SleekCircularSlider` for a beautiful progress indicator",
        "Features a clean, component-based architecture for reusability",
        "Robust input validation and error handling for a smooth experience",
        "Implemented with enums and Flutter best practices for state management",
      ],
      images: [
        "bmi-calculator/1.jpg",
        "bmi-calculator/2.jpg",
        "bmi-calculator/3.jpg",
        "bmi-calculator/4.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/bmi-app",
      live: "https://github.com/Gupta-Aniket/bmi-app/releases/download/v2/BMI.v0.2.apk",
    },

    // * corporate-mask-app
    {
      id: "corporate-mask-app",
      title: "Corporate Mask (Flutter App)",
      description:
        "An Android Flutter application providing instant, AI-powered professional rewrites for messages using the Google Gemini API.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
      tags: [
        "Flutter",
        "Gemini API",
        "UI/UX",
        "Dart",
        "Cupertino",
        "SharedPreferences",
      ],
      details: [
        "Integrates Google Gemini API for real-time professional rewrites",
        "Secure local API key storage using `shared_preferences`",
        "iOS-inspired dark mode UI built with Cupertino widgets",
        "Includes robust error handling for API interactions",
        "Copy-to-clipboard functionality for rewritten text",
        "Simple, single-screen architecture using `setState` for state management",
        "Dedicated API key setup screen with input validation",
      ],
      images: [
        "corporate-mask-app/1.jpg",
        "corporate-mask-app/2.jpg",
        "corporate-mask-app/3.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/corporate-mask.apk",
    },

    // * corporate-mask-extension
    {
      id: "corporate-mask-extension",
      title: "Corporate Mask (Chrome Extension)",
      description:
        "A browser extension for instant, AI-powered corporate message rewriting, bringing the 'Corporate Mask' functionality to the web.",
      category: ["extension", "Gen-Ai"],
      status: "live",
      tags: [
        "Chrome Extension",
        "JavaScript",
        "HTML",
        "CSS",
        "Gemini API",
        "Content Scripts",
      ],
      details: [
        "Adds a floating button overlay to editable web fields",
        "Context-sensitive message rewriting via the Gemini API",
        "Utilizes `chrome.storage.local` for secure API key persistence",
        "Separation of concerns with `background.js` and `content.js`",
        "Modal options page for convenient API key management",
        "Minimalist dark UI injected directly into web pages",
        "Supports text fields on any web-based platform",
      ],
      images: [
        "corporate-mask-extension/1.png",
        "corporate-mask-extension/2.png",
        "corporate-mask-extension/3.png",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/extension.zip",
    },

    // * file-context
    {
      id: "file-context-generator",
      title: "File Context Generator (Python CLI)",
      description:
        "A Python-based interactive command-line tool for generating comprehensive file contexts from directories, ideal for LLM inputs.",
      category: ["python","utility"],
      status: "live",
      tags: [
        "Python",
        "File Scanner",
        "Automation",
        "Context Generator",
        "AI Prompting",
        "CLI Tool",
      ],
      details: [
        "Recursively scans entire directory structures",
        "Supports granular selection of files, folders, or full trees",
        "Includes `all except (...)` logic for flexible inclusion/exclusion",
        "Generates `fileContext.txt` with formatted file headers",
        "Gracefully handles file permission errors during scanning",
        "User-friendly interactive CLI with numeric selection",
        "Automates preparation of AI input contexts or dataset snapshots",
      ],
      // images: ["file-context-generator/1.jpg", "file-context-generator/2.jpg"], // Keeping original for image count
      github: "https://github.com/Gupta-Aniket/file-context",
      // live: "", // No live URL since it's a CLI tool
    },

    // * switch-mode
    {
      id: "workspace-launcher",
      title: "Workspace Launcher (macOS Bash Automation)",
      description:
        "A macOS bash automation script designed to instantly switch between 'Home' and 'Work' coding environments for enhanced productivity.",
      category: ["automation","utility"],
      status: "live",
      tags: [
        "Bash",
        "macOS",
        "Automation",
        "Productivity",
        "CLI Tool",
        "VS Code",
        "Simulator",
      ],
      details: [
        "Interactive CLI for seamless 'Work' or 'Home' mode selection",
        "Scans project directories for easy project opening",
        "Automatically hides non-essential applications (e.g., all except Terminal/Finder)",
        "Cleanly closes VS Code before launching new projects",
        "Opens Brave for 'Home' mode and Firefox for 'Work' mode",
        "Launches iOS Simulator post-environment setup",
        "Includes error handling for missing folders or invalid inputs",
      ],
      github: "https://github.com/Gupta-Aniket/switch_mode",
    },

    //* dream space
    {
      id: "dream-space",
      title: "DreamSpace — Mood & Dream Tracker",
      description:
        "A modern mobile app for logging dreams and moods with persistent authentication, real-time analytics, and a visually immersive observatory.",
      category: "react-native",
      status: "live",
      tags: [
        "React Native",
        "Expo Router",
        "Firebase",
        "Realtime Database",
        "Auth Persistence",
        "Analytics",
        "Chart Kit",
      ],
      images: [
        "dream-space/1.png",
        "dream-space/2.png",
        "dream-space/2.5.png",
        "dream-space/3.png",
        "dream-space/4.png",
      ],

      details: [
        "Persistent user authentication via Firebase Auth and AsyncStorage",
        "Real-time logging of moods and dreams with detailed input",
        "Comprehensive monthly analytics: pie charts, line charts, mood trends",
        "Observatory view for Browse historical dream logs with a card-based UI",
        "Responsive dark UI design optimized for mobile-first experience",
        "Firebase Realtime Database secured with per-user access rules",
        "Automated session restoration on app relaunch for seamless experience",
      ],
      github: "https://github.com/Gupta-Aniket/dream-space",
    },

    // * youtube-downloader-cli
    {
      id: "youtube-downloader-cli",
      title: "YouTube Downloader (Python CLI Utility)",
      description:
        "A command-line utility in Python, using Pytube, to download YouTube videos and playlists in the highest available resolution.",
      category: ["python","utility"],
      status: "deprecated",
      tags: ["Python", "Pytube", "YouTube", "CLI", "Downloader", "Scripting"],
      details: [
        "CLI for downloading single videos or entire playlists",
        "Automatically fetches the highest resolution stream available",
        "Organizes downloads into separate folders for each playlist",
        "Includes error handling for YouTube connection issues",
        "Lightweight Python script with no external UI dependencies",
        "Utilizes the Pytube library for video extraction",
        "Currently deprecated due to frequent YouTube API changes breaking `Pytube`",
      ],
      github: "https://github.com/Gupta-Aniket/Youtube-playlist-downloader",
    },

    // * travel-companion
    {
      id: "travel-companion",
      title: "Travel Companion (React Native Ticket Organizer)",
      description:
        "An ongoing mobile utility app for organizing travel tickets, generating dynamic forms, managing trips, and exploring travel analytics.",
      category: ["react-native", "Gen-Ai"],
      status: "ongoing",
      tags: [
        "React Native",
        "Supabase",
        "Firebase",
        "OTP Auth",
        "Parallax UI",
        "Dynamic Forms",
      ],
      images: [
        "travel-companion/1.jpg",
        "travel-companion/2.jpg",
        "travel-companion/3.jpg",
        "travel-companion/4.jpg",
      ],
      details: [
        "Simulated OTP-based user authentication (extendable)",
        "Organizes tickets for various transportation modes (flights, trains, buses)",
        "Dynamic forms for entering type-specific ticket details",
        "Supports managing multiple passengers and seat assignments",
        "Real-time UI with Parallax Scroll, Bottom Sheets, and Custom FAB",
        "Data persistence powered by Supabase for backend storage",
        "Integrates Unsplash API for location-based image exploration",
        "Includes Lottie animations for an improved onboarding experience",
      ],
      github: "https://github.com/Gupta-Aniket/travel-companion",
    },

    // * xylophone app
    {
      id: "flutter-xylophone",
      title: "Xylophone (Flutter Mini Piano App)",
      description:
        "A simple, engaging Flutter app simulating a colorful xylophone, allowing users to play musical notes by tapping vibrant keys.",
      category: "flutter",
      status: "live",
      tags: [
        "Flutter",
        "Dart",
        "AudioPlayer",
        "UI Design",
        "Music App",
        "Interactive UI",
      ],
      images: ["xylophone/1.jpg"],
      details: [
        "Color-coded piano keys with rounded corners for visual appeal",
        "Plays 8 distinct musical notes using the `audioplayers` package",
        "Simple, one-screen `SafeArea` layout for mobile-first design",
        "Provides instant sound playback for interactive fun",
        "Lightweight Flutter project with minimal dependencies",
        "A beloved project, especially enjoyed by my younger sister!",
      ],
      github: "https://github.com/Gupta-Aniket/Xylophone-app",
      live: "https://github.com/Gupta-Aniket/Xylophone-app/releases/download/android/xylophone.apk",
    },

    // * jobtrail
    {
      id: "job-trail-chrome-extension",
      title: "JobTrail (Job Search Automation Chrome Extension)",
      description:
        "A Chrome extension that scans webpages for job-related opportunities, injects actionable links, and enhances search inputs with customizable quick-search buttons for faster job discovery.",
      category: "extension",
      status: "live",
      tags: [
        "Chrome Extension",
        "Content Script",
        "MutationObserver",
        "Job Search Ease",
        "JavaScript",
        "Fuse.js",
        "Dynamic DOM Injection",
      ],
      images: ["jobtrail/1.png"],
      details: [
        "Injects a floating overlay panel with job search tools into any webpage",
        "Uses Fuse.js for fuzzy keyword matching to detect job-related links",
        "Scans all clickable elements for job-related text content",
        "Dynamically injects search term buttons into detected search inputs",
        "Works seamlessly with dynamic websites using MutationObserver",
        "Fully isolated UI via Shadow DOM to prevent style conflicts",
        "Chrome storage integration to allow users to customize search terms",
      ],
      github: "https://github.com/Gupta-Aniket/job-trail",
      live: "https://github.com/Gupta-Aniket/job-trail/releases/download/Extension/job-trail.zip",
    },
  ],
};
export default sharedData;

------------------------------------------------------------------

style.css---------------------------------------------------
.modal-image-wrapper {
  margin-bottom: 1.5rem;
}
.modal-image {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.modal-description {
  font-size: 16px;
  color: #333;
  margin-bottom: 0.5rem;
}
.modal-details {
  font-size: 14px;
  color: #666;
  margin-bottom: 1rem;
}

.modal-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1rem;
}
.modal-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #999;
}
.dot.green {
  background-color: #28a745;
}
.dot.orange {
  background-color: #f39c12;
}

.modal-links a {
  text-decoration: none;
  color: #007aff;
  font-weight: 500;
  margin-right: 16px;
}

.modal-tags {
  margin-top: 1rem;
}
.project-tag {
  display: inline-block;
  background: #f0f0f5;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 999px;
  margin: 0 8px 8px 0;
}

.project-card {
display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        border-radius: 16px;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        height: 100%;
        background-color: var(--tertiary-background);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        border: 1px solid var(--separator);
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        box-shadow: var(--shadow-sm);
}
:root {
  /* iOS System Colors */
  --primary: #007aff;
  --secondary: #5856d6;
  --success: #34c759;
  --warning: #ff9500;
  --error: #ff3b30;
  --label: #000000;
  --secondary-label: #3c3c43;
  --tertiary-label: #3c3c4399;
  --quaternary-label: #3c3c432e;
  --system-background: #ffffff;
  --secondary-background: #f2f2f7;
  --tertiary-background: #ffffff;
  --grouped-background: #f2f2f7;
  --separator: #3c3c4349;
  --fill-quaternary: #78788033;

  /* Typography */
  --font-display: "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
  --font-text: "SF Pro Text", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;

  /* Spacing Grid */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Touch Targets */
  --touch-target: 44px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
}

@media (prefers-color-scheme: dark) {
  :root {
    --label: #ffffff;
    --secondary-label: #ebebf5;
    --tertiary-label: #ebebf599;
    --quaternary-label: #ebebf52e;
    --system-background: #000000;
    --secondary-background: #1c1c1e;
    --tertiary-background: #2c2c2e;
    --grouped-background: #000000;
    --separator: #54545899;
    --fill-quaternary: #78788066;
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-text);
  background-color: var(--grouped-background);
  color: var(--label);
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Navigation with enhanced blur */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(248, 248, 248, 0.8);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-bottom: 0.5px solid var(--separator);
  z-index: 1000;
  height: 52px;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .nav {
    background-color: rgba(28, 28, 30, 0.8);
  }
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.nav-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--label);
  transition: transform 0.2s ease;
}

.nav-title:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.2s ease;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.nav-link:hover {
  background-color: var(--fill-quaternary);
  transform: translateY(-1px);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background-color: var(--fill-quaternary);
  transform: scale(1.1);
}

/* Enhanced Hero Section */
.hero {
  padding: calc(52px + var(--spacing-xxl)) var(--spacing-md)
    var(--spacing-xxl);
  background: linear-gradient(
    135deg,
    var(--system-background) 0%,
    var(--secondary-background) 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 20%,
    rgba(0, 122, 255, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(34px, 6vw, 56px);
  font-weight: 800;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
  animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
  font-size: 21px;
  font-weight: 400;
  color: var(--secondary-label);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-stat {
  text-align: center;
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.hero-stat:hover {
  transform: translateY(-2px);
}

.hero-stat-number {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.hero-stat-label {
  font-size: 15px;
  color: var(--secondary-label);
  margin-top: var(--spacing-xs);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 17px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  animation: fadeInUp 0.8s ease 0.6s both;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cta-button:active {
  transform: translateY(0);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    box-shadow: 0 0 20px currentColor;
  }
}

/* Section */
.section {
  padding: var(--spacing-xxl) 0;
}

.section-header {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.section-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 19px;
  color: var(--secondary-label);
  max-width: 600px;
  margin: 0 auto;
}

/* Enhanced About Section */
.about {
  background-color: var(--secondary-background);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.about-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 700;
  color: white;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease;
}

.about-avatar:hover {
  transform: scale(1.05) ;
}

.about-text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
}

.about-quote {
  font-size: 21px;
  font-weight: 500;
  color: var(--primary);
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-left: var(--spacing-lg);
}

.about-quote::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 40px;
  color: var(--primary);
  opacity: 0.3;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-pill {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-xl);
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  transition: all 0.2s ease;
  cursor: pointer;
}

.tech-pill:hover {
  /* background-color: var(--primary);   */
  color: white;
  transform: translateY(-2px);
}

/* Enhanced Projects Grid */
.projects {
  background-color: var(--secondary-background);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

/* .project-card {
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--separator);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadow-sm);
} */
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--separator);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadow-sm);
}

.project-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}


.project-actions {
  margin-top: auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #007aff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0051cc;
}

.btn-secondary {
  background-color: #f0f0f5;
  color: #333;
}

.btn-secondary:hover {
  background-color: #d8d8e0;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-status {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* animation: pulse 2s infinite; */
}

.project-status.live {
  background-color: var(--success);
  /* animation: glow 2s infinite; */
}

.project-status.ongoing {
  background-color: var(--warning);
}

.project-status.deprecated,
.project-status.notworking {
  background-color: var(--error);
}

.project-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
  padding-right: var(--spacing-lg);
}

.project-description {
  font-size: 15px;
  line-height: 1.5;
  color: var(--secondary-label);
  margin-bottom: var(--spacing-md);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.project-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--secondary-background);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-label);
}

.project-actions {
  display: flex;
  gap: var(--spacing-sm);
}

.project-link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  animation: fadeInUp 0.8s ease 0.6s both;
}

.project-link:hover {
  /* font-weight: 600; */
  font-size: 17px;
  background-color: var(--secondary);
  transform: scale(1.02);
}

/* Project Detail Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: var(--system-background);
  border-radius: var(--radius-lg);
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--separator);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--label);
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--secondary-label);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: var(--fill-quaternary);
  color: var(--label);
}

.modal-body {
  padding: var(--spacing-lg);
  max-height: calc(90vh - 140px);
  overflow-y: auto;
}

.modal-section {
  margin-bottom: var(--spacing-lg);
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
}

.modal-description {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-md);
}

.modal-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.modal-image {
  aspect-ratio: 16/9;
  background-color: var(--secondary-background);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-label);
  font-size: 14px;
  border: 1px solid var(--separator);
}

.modal-buttons {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.modal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 17px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.modal-button:hover {
  background-color: var(--secondary);
  transform: translateY(-1px);
}

.modal-button.secondary {
  background-color: var(--secondary-background);
  color: var(--label);
  border: 1px solid var(--separator);
}

.modal-button.secondary:hover {
  background-color: var(--tertiary-background);
}

/* Stats Section */
.stats {
  background-color: var(--secondary-background);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.stat-card {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-md);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 15px;
  color: var(--secondary-label);
}

/* Enhanced Contact Section */
.contact {
  background-color: var(--system-background);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  margin-bottom: var(--spacing-sm);

}

.form-input,
.form-textarea {
  width: 100%;
  min-height: var(--touch-target);
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-md);
  font-family: var(--font-text);
  font-size: 17px;
  color: var(--label);
  transition: all 0.2s ease;

}
select.form-input {
  padding-right: 2.5rem; /* Space for arrow */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  cursor: pointer;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-submit {
  width: 100%;
  margin-bottom: var(--spacing-lg);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--separator);
  padding-bottom: var(--spacing-lg);

}

.social-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  min-height: var(--touch-target);
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: var(--fill-quaternary);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-stats {
    gap: var(--spacing-md);
    flex-direction: column;
  }

  .hero-stat {
    padding: var(--spacing-sm);
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }

  .about-avatar {
    width: 120px;
    height: 120px;
    font-size: 48px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
.questionnaire-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  z-index: 9999;
}

.questionnaire-modal.hidden {
  display: none;
}
.hidden {
  display: none !important;
}

.questionnaire-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
}

.questionnaire-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

  .modal-content {
    width: 95vw;
    max-height: 95vh;
  }

  .modal-buttons {
    flex-direction: column;
  }

  .modal-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }

  .hero {
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .modal-body {
    padding: var(--spacing-md);
  }

  .modal-header {
    padding: var(--spacing-md);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
.cta-button:focus-visible,
.nav-link:focus-visible,
.project-link:focus-visible,
.social-link:focus-visible,
.modal-button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.form-input:focus-visible,
.form-textarea:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: -2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* Loading states */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid var(--primary);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
/* Apple HIG Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 12px;
  max-width: min(90vw, 640px);
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.1);
  transform: scale(0.95) translateY(8px);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: 16px 24px;
  border-bottom: 0.5px solid rgba(60, 60, 67, 0.29);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #ffffff;
}

.modal-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  line-height: 1.2;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  color: rgba(60, 60, 67, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  font-size: 18px;
  font-weight: 500;
}

.modal-close:hover {
  background-color: rgba(120, 120, 128, 0.08);
  color: #000000;
}

.modal-body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.modal-hero-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #f2f2f7 0%, #e5e5ea 100%);
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

.modal-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-hero-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(60, 60, 67, 0.6);
  font-size: 14px;
  font-weight: 500;
}

.modal-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: rgba(52, 199, 89, 0.1);
  border-radius: 16px;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 600;
  
}

.modal-status.live {
  background-color: var(--success);
  /* animation: glow 2s infinite; */
  color: #34c759;
}

.modal-status.deprecated,
.modal-status.ongoing {
  background-color: var(--warning);
}

.modal-status.notworking {
  background-color: var(--error);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
}
.status-text {
  color: white;
}

.modal-description {
  font-size: 17px;
  line-height: 1.47;
  color: #000000;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.modal-details {
  font-size: 15px;
  line-height: 1.47;
  color: rgba(60, 60, 67, 0.6);
  margin-bottom: 24px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.modal-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(60, 60, 67, 0.8);
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

.modal-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.modal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 0 20px;
  background-color: #007aff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  transition: all 0.15s ease;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}

.modal-button:hover {
  background-color: #0056cc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.modal-button:active {
  transform: translateY(0);
}

.modal-button.secondary {
  background-color: rgba(120, 120, 128, 0.12);
  color: #000000;
  border: 0.5px solid rgba(60, 60, 67, 0.29);
}

.modal-button.secondary:hover {
  background-color: rgba(120, 120, 128, 0.16);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.modal-button-icon {
  font-size: 14px;
  opacity: 0.8;
}

.modal-divider {
  height: 0.5px;
  background-color: rgba(60, 60, 67, 0.29);
  margin: 24px 0;
}

.modal-section-title {
  font-size: 15px;
  font-weight: 600;
  color: rgba(60, 60, 67, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.modal-tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.modal-tech-item {
  padding: 12px;
  background-color: #f2f2f7;
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: rgba(60, 60, 67, 0.8);
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .modal-content {
    background-color: #1c1c1e;
  }

  .modal-header {
    background-color: #1c1c1e;
    border-bottom-color: rgba(84, 84, 88, 0.6);
  }

  .modal-title {
    color: #ffffff;
  }

  .modal-close {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-close:hover {
    background-color: rgba(120, 120, 128, 0.16);
    color: #ffffff;
  }

  .modal-hero-image {
    background: linear-gradient(135deg, #2c2c2e 0%, #3a3a3c 100%);
    border-color: rgba(84, 84, 88, 0.2);
  }

  .modal-hero-placeholder {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-description {
    color: #ffffff;
  }

  .modal-details {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-tag {
    background-color: rgba(120, 120, 128, 0.24);
    color: rgba(235, 235, 245, 0.8);
    border-color: rgba(84, 84, 88, 0.2);
  }

  .modal-button.secondary {
    background-color: rgba(120, 120, 128, 0.24);
    color: #ffffff;
    border-color: rgba(84, 84, 88, 0.6);
  }

  .modal-button.secondary:hover {
    background-color: rgba(120, 120, 128, 0.32);
  }

  .modal-divider {
    background-color: rgba(84, 84, 88, 0.6);
  }

  .modal-section-title {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-tech-item {
    background-color: #2c2c2e;
    color: rgba(235, 235, 245, 0.8);
    border-color: rgba(84, 84, 88, 0.2);
  }
}

/* Responsive design */
@media (max-width: 480px) {
  .modal-overlay {
    padding: 8px;
  }

  .modal-content {
    max-height: 95vh;
  }

  .modal-header {
    padding: 12px 16px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-body {
    padding: 16px;
  }

  .modal-hero-image {
    margin-bottom: 16px;
  }

  .modal-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .modal-button {
    width: 100%;
    justify-content: center;
  }
}

/* Additional CSS for new sections */

/* Skills Section */
.skills {
  background-color: var(--system-background);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.skill-category {
  background-color: var(--tertiary-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.skill-category-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
}

.skill-item {
  margin-bottom: var(--spacing-lg);
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.skill-name {
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
}

.skill-percentage {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
}

.skill-bar {
  height: 6px;
  background-color: var(--secondary-background);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 3px;
  transition: width 2s ease;
  animation: slideIn 2s ease;
}

@keyframes slideIn {
  from {
    width: 0;
  }
}

/* Tech Pills with Levels */
.tech-pill {
  position: relative;
  overflow: hidden;
}

.tech-pill::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.tech-pill[data-level="expert"]::after {
  width: 100%;
}
.tech-pill[data-level="advanced"]::after {
  width: 80%;
}
.tech-pill[data-level="intermediate"]::after {
  width: 60%;
}
.tech-pill[data-level="beginner"]::after {
  width: 40%;
}

/* Project Filters */
.project-filters {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-xl);
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background-color: var(--secondary-background);
  transform: translateY(-1px);
}

.filter-btn.active {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* Testimonials */
.testimonials {
  background-color: var(--system-background);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.testimonial-card {
  background-color: var(--tertiary-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-2px);
}

.testimonial-text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 18px;
}

.author-name {
  font-weight: 600;
  color: var(--label);
  margin-bottom: 2px;
}

.author-role {
  font-size: 14px;
  color: var(--secondary-label);
}

.contact-form {

  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; Ensure the container takes full height */
  /* min-height: 300px; Optional: set a reasonable min height */
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  /* height: 100vh; Full viewport height if you want full page center */
}



.form-error {
  color: var(--error);
  font-size: 14px;
  margin-top: var(--spacing-xs);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.form-error.visible {
  opacity: 1;
}

.form-input.error,
.form-textarea.error {
  border-color: var(--error);
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1);
}

.form-input.valid,
.form-textarea.valid {
  border-color: var(--success);
  box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
}

.contact-alternatives {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--separator);
  padding-bottom: var(--spacing-sm);
}

.contact-alt-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--label);
  transition: all 0.2s ease;
}

.contact-method:hover {
  background-color: var(--secondary-background);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 20px;
}

.contact-text {
  font-size: 15px;
  font-weight: 500;
}

/* Enhanced animations and micro-interactions */
.project-card {
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}



@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px currentColor;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 15px currentColor;
    transform: scale(1.1);
  }
}

/* Responsive enhancements */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .project-filters {
    gap: var(--spacing-xs);
  }

  .filter-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 14px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .contact-methods {
    gap: var(--spacing-xs);
  }
}

/* Loading state for form */
.form-submit.loading {
  position: relative;
  color: transparent;
}

.form-submit.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.about-avatar {
  width: 300px;                /* or whatever size you prefer */
  height: 300px;
  border-radius: 50%;
  border: 3px solid #007bff;  /* Blue outline */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #e0f0ff;  /* fallback background for initials */
  color: #007bff;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.modal-slider-wrapper {
  position: relative;
  margin-bottom: var(--spacing-lg);
}
.modal-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--spacing-md);
  scroll-behavior: smooth;
}
.modal-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.3s ease;
}
.modal-slide img {
  width: 100%;
  height: auto;
  display: block;
}
.modal-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.modal-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--quaternary-label);
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-indicator.active {
  background-color: var(--primary);
}

.modal-slider-wrapper {
  position: relative;
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
  border-radius: var(--radius-md);
}

.modal-slider {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  height: clamp(200px, 45vh, 360px);
}

.modal-slide {
  flex: 0 0 100%;
  transition: transform 0.3s ease;
  display: none;
}
.modal-slide.active {
  display: block;
}
.modal-slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: auto;
}


.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.slider-arrow:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.slider-arrow.left {
  left: 12px;
  transform: translateY(-50%) rotate(180deg); 
}
.slider-arrow.right {
  right: 12px;
}

.modal-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.modal-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--quaternary-label);
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-indicator.active {
  background-color: var(--primary);
}
.modal-bullets {
  list-style: disc inside;
  padding-left: 0;
  margin: 12px 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--label);
}

.modal-bullets li {
  margin-bottom: 6px;
}
/* WIZARD MODAL */

.wizard-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.3s ease;
}

.wizard-overlay.active {
  display: flex;
}

.wizard-container {
  width: 90%;
  max-width: 600px;
  background: var(--secondary-background);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  padding: 2rem 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.wizard-progress {
  height: 8px;
  background: var(--separator);
  border-radius: 50px;
  overflow: hidden;
}

.wizard-progress-bar {
  height: 100%;
  width: 2%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.4s ease;
}

.wizard-question {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--label);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.wizard-input {
  width: 100%;
  padding: 0.9rem 1rem;
  padding-right: 4rem;

  font-size: 1rem;
  border: 1px solid var(--separator);
  border-radius: var(--radius-md);
  background-color: var(--tertiary-background);
  color: var(--label);
  font-family: var(--font-text);
  transition: border 0.2s ease, background-color 0.2s ease;
}
.wizard-hint{
  margin-top: -1rem;
  padding-left: 0.2rem;
  font-size: 0.8rem;
  color: var(--secondary-label);
}

.cta-button:hover{
  font-size: 17px;
  background-color: var(--secondary);
  transform: scale(1.02);
}
select.wizard-input{
  appearance: none; /* <-- this removes the native arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Add custom arrow */
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23666" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

.wizard-input::placeholder {
  color: var(--tertiary-label);
}

.wizard-input:focus {
  border-color: var(--primary);
  outline: none;
  background-color: var(--system-background);
}

.wizard-buttons {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wizard-popup-buttons{
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.wizard-close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
}
.skip-btn {
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 400; /* lighter weight */
  color: #666; /* assume you have a subtle text color var */
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-left: 90%;
  transition: all 0.2s ease;
  font-family: var(--font-text);
  background: transparent; /* subtle look */
}

#fileStatus {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary-label);
}
/* Wizard Popup (small message bubble) */
.wizard-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--system-background);
  color: var(--label);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 10001;
  font-size: 1.1rem;
  text-align: center;
  max-width: 90%;
  transition: opacity 0.3s ease;
  font-family: var(--font-text);
}

.wizard-popup .popup-content {
  font-weight: 500;
  color: var(--label);
}

/* Wizard Quit Confirmation Modal */
.wizard-confirm {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px) saturate(140%);
  background-color: rgba(0, 0, 0, 0.4); /* optional override: add a var if you want */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10002;
}

.wizard-confirm .confirm-content {
  background: var(--system-background);
  padding: var(--spacing-xl) calc(var(--spacing-xl) + 0.5rem);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
  max-width: 500px;
  width: 90%;
  font-family: var(--font-text);
}

.wizard-confirm .confirm-content p {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
  color: var(--label);
}

.wizard-confirm .confirm-content button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  margin: 0 var(--spacing-sm);
  transition: all 0.2s ease;
  font-family: var(--font-text);
}

.wizard-confirm .confirm-content button#quitYes {
  background: var(--fill-quaternary);
  color: var(--label);
  margin: 0.2rem ;
}

.wizard-confirm .confirm-content button#quitNo {
  background: var(--primary);
  color: var(--label);
  margin: 0.2rem ;
}

.wizard-confirm .confirm-content button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.sub-text{
  padding : 0.2rem 0.4rem;
  font-size: 0.8rem;
  color: var(--secondary-label);
}

.section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
------------------------------------------------------------------


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

    <!-- Project Detail Modal -->
    <div id="projectModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modalTitle" class="modal-title">Project Title</h2>
          <button class="modal-close" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body" id="modalBody">
          <!-- Dynamic content will be inserted here -->
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

  document.addEventListener("keydown", handleModalKeyEvents);

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

  showPopup(
    "✅ Your idea has been recorded. We'll reach out to you shortly.",
    true
  );
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
    <!-- HEAD of your index.html -->
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
          <a id="resumeButton" class="cta-button">Download Resume</a>
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

    <!-- Skills Section -->
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

    <!-- Contact Info Section -->
    <section class="section contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact Me</h2>
          <p class="section-subtitle">Direct ways to reach out to me</p>
        </div>
        <div class="contact-alternatives">
          <div class="contact-methods">
            <a href="#" id="emailLink" class="contact-method">
              <span class="contact-icon">📧</span>
              <span class="contact-text" id="emailText"></span>
            </a>
            <a href="#" id="phoneLink" class="contact-method">
              <span class="contact-icon">📞</span>
              <span class="contact-text" id="phoneText"></span>
            </a>
            <a id="resumeLink" class="contact-method">
              <span class="contact-icon">📄</span>
              <span class="contact-text">Download Resume</span>
            </a>
          </div>
        </div>
        <div class="social-links" id="socialLinksContainer"></div>
      </div>
    </section>

    <!-- Project Modal -->
    <div id="projectModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modalTitle" class="modal-title">Project Title</h2>
          <button class="modal-close" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    </div>

    <script src="script.js" type="module"></script>

    <!-- 100% privacy-first analytics -->
    <script
      data-collect-dnt="true"
      async
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    ></script>
  </body>
</html>

```

### script.js
```javascript
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

```

### shared-data.js
```javascript
const sharedData = {
  personalInfo: {
    name: "Aniket",
    title: "Mobile App Developer",
    subtitle:
      "Building exceptional iOS and Android experiences with Flutter, React Native, and modern development practices that users love and businesses rely on.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Gupta-Aniket/" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/work-gupta-aniket/",
      },
      { name: "Twitter", url: "https://x.com/adbhut_praani/" },
    ],
    contact: {
      email: "work.gupta.aniket@gmail.com",
      phone: "+91 8319906162",
      resume:
        "https://drive.google.com/uc?export=download&id=1R5J3xVJJfHgzsf7KzFWopaorKfpB_N2R",
    },
  },

  projectData: [
    //    "live"
    //    "ongoing"
    //    "deprecated";

    // *kabootar
    {
      id: "kabootar",
      title: "WebRTC Pin Based Video-call",
      description:
        "A pin-based video calling app built with WebRTC and Firebase, offering secure, anonymous connections without login or signup.",
      category: "react-native",
      status: "live",
      tags: ["React-Native", "Firebase", "WebRTC", "Video-Call", "Anonymous"],
      details: [
        "Secure, anonymous video calls using a shared PIN (no login/signup)",
        "Leverages WebRTC for direct peer-to-peer connections",
        "Firebase for real-time data synchronization and signaling",
        "Efficient database cleanup to prevent clutter",
        "Utilizes Google's STUN server for robust peer-to-peer setup",
      ],
      images: [
        "kabootar/1.jpeg",
        "kabootar/2.jpeg",
        "kabootar/3.jpeg",
        "kabootar/4.jpeg",
      ],
      github: "https://github.com/Gupta-Aniket/Kabootar",
      live: "https://github.com/Gupta-Aniket/Kabootar/releases/download/android/app-release.apk",
    },

    // * gemini chatbot
    {
      id: "cancer",
      title: "Gemini Chatbot with Advanced UX",
      description:
        "A Gemini AI chatbot designed for enhanced accessibility and a superior user experience, extending beyond the original app's features.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
      tags: [
        "Flutter",
        "Hive",
        "Share-Intent",
        "Gen-AI",
        "Lottie-Animations",
        "Image-upload",
      ],
      details: [
        "Improved accessibility with pinch-to-zoom gestures for text",
        "Ability to share specific chatbot responses directly",
        "Supports image uploads for multimodal conversations",
        "Integrates Google Gen-AI for intelligent responses",
        "Local storage for persistent chat history using Hive",
        "Text-to-Speech (TTS) and Speech-to-Text (STT) for better accessibility",
        "Unique 'water-spent meter' for playful server cooling insights",
      ],
      images: ["gemini/1.png", "gemini/2.png", "gemini/3.png", "gemini/4.png"],
      github: "https://github.com/Gupta-Aniket/Cancer",
      live: "https://github.com/Gupta-Aniket/Cancer/releases/download/android/cancer.gemini.apk",
    },

    // *bmi
    {
      id: "bmi-calculator",
      title: "BMI Calculator App (Flutter)",
      description:
        "A sleek Flutter-based Body Mass Index calculator with intuitive UI/UX for tracking BMI based on gender, height, and weight.",
      category: "flutter",
      status: "live",
      tags: [
        "Flutter",
        "BMI",
        "SleekSlider",
        "UI/UX",
        "Dart",
        "State Management",
      ],
      details: [
        "Real-time BMI calculation with gender selection and interactive controls",
        "Provides category-based feedback (Underweight, Normal, Overweight, Obese)",
        "Custom color-coded results with dynamic styling for clear feedback",
        "Utilizes `SleekCircularSlider` for a beautiful progress indicator",
        "Features a clean, component-based architecture for reusability",
        "Robust input validation and error handling for a smooth experience",
        "Implemented with enums and Flutter best practices for state management",
      ],
      images: [
        "bmi-calculator/1.jpg",
        "bmi-calculator/2.jpg",
        "bmi-calculator/3.jpg",
        "bmi-calculator/4.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/bmi-app",
      live: "https://github.com/Gupta-Aniket/bmi-app/releases/download/v2/BMI.v0.2.apk",
    },

    // * corporate-mask-app
    {
      id: "corporate-mask-app",
      title: "Corporate Mask (Flutter App)",
      description:
        "An Android Flutter application providing instant, AI-powered professional rewrites for messages using the Google Gemini API.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
      tags: [
        "Flutter",
        "Gemini API",
        "UI/UX",
        "Dart",
        "Cupertino",
        "SharedPreferences",
      ],
      details: [
        "Integrates Google Gemini API for real-time professional rewrites",
        "Secure local API key storage using `shared_preferences`",
        "iOS-inspired dark mode UI built with Cupertino widgets",
        "Includes robust error handling for API interactions",
        "Copy-to-clipboard functionality for rewritten text",
        "Simple, single-screen architecture using `setState` for state management",
        "Dedicated API key setup screen with input validation",
      ],
      images: [
        "corporate-mask-app/1.jpg",
        "corporate-mask-app/2.jpg",
        "corporate-mask-app/3.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/corporate-mask.apk",
    },

    // * corporate-mask-extension
    {
      id: "corporate-mask-extension",
      title: "Corporate Mask (Chrome Extension)",
      description:
        "A browser extension for instant, AI-powered corporate message rewriting, bringing the 'Corporate Mask' functionality to the web.",
      category: ["extension", "Gen-Ai"],
      status: "live",
      tags: [
        "Chrome Extension",
        "JavaScript",
        "HTML",
        "CSS",
        "Gemini API",
        "Content Scripts",
      ],
      details: [
        "Adds a floating button overlay to editable web fields",
        "Context-sensitive message rewriting via the Gemini API",
        "Utilizes `chrome.storage.local` for secure API key persistence",
        "Separation of concerns with `background.js` and `content.js`",
        "Modal options page for convenient API key management",
        "Minimalist dark UI injected directly into web pages",
        "Supports text fields on any web-based platform",
      ],
      images: [
        "corporate-mask-extension/1.png",
        "corporate-mask-extension/2.png",
        "corporate-mask-extension/3.png",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/extension.zip",
    },

    // * file-context
    {
      id: "file-context-generator",
      title: "File Context Generator (Python CLI)",
      description:
        "A Python-based interactive command-line tool for generating comprehensive file contexts from directories, ideal for LLM inputs.",
      category: ["python", "utility"],
      status: "live",
      tags: [
        "Python",
        "File Scanner",
        "Automation",
        "Context Generator",
        "AI Prompting",
        "CLI Tool",
      ],
      details: [
        "Recursively scans entire directory structures",
        "Supports granular selection of files, folders, or full trees",
        "Includes `all except (...)` logic for flexible inclusion/exclusion",
        "Generates `fileContext.txt` with formatted file headers",
        "Gracefully handles file permission errors during scanning",
        "User-friendly interactive CLI with numeric selection",
        "Automates preparation of AI input contexts or dataset snapshots",
      ],
      // images: ["file-context-generator/1.jpg", "file-context-generator/2.jpg"], // Keeping original for image count
      github: "https://github.com/Gupta-Aniket/file-context",
      // live: "", // No live URL since it's a CLI tool
    },

    // * switch-mode
    {
      id: "workspace-launcher",
      title: "Workspace Launcher (macOS Bash Automation)",
      description:
        "A macOS bash automation script designed to instantly switch between 'Home' and 'Work' coding environments for enhanced productivity.",
      category: ["automation", "utility"],
      status: "live",
      tags: [
        "Bash",
        "macOS",
        "Automation",
        "Productivity",
        "CLI Tool",
        "VS Code",
        "Simulator",
      ],
      details: [
        "Interactive CLI for seamless 'Work' or 'Home' mode selection",
        "Scans project directories for easy project opening",
        "Automatically hides non-essential applications (e.g., all except Terminal/Finder)",
        "Cleanly closes VS Code before launching new projects",
        "Opens Brave for 'Home' mode and Firefox for 'Work' mode",
        "Launches iOS Simulator post-environment setup",
        "Includes error handling for missing folders or invalid inputs",
      ],
      github: "https://github.com/Gupta-Aniket/switch_mode",
    },

    //* dream space
    {
      id: "dream-space",
      title: "DreamSpace — Mood & Dream Tracker",
      description:
        "A modern mobile app for logging dreams and moods with persistent authentication, real-time analytics, and a visually immersive observatory.",
      category: "react-native",
      status: "live",
      tags: [
        "React Native",
        "Expo Router",
        "Firebase",
        "Realtime Database",
        "Auth Persistence",
        "Analytics",
        "Chart Kit",
      ],
      images: [
        "dream-space/1.png",
        "dream-space/2.png",
        "dream-space/2.5.png",
        "dream-space/3.png",
        "dream-space/4.png",
      ],

      details: [
        "Persistent user authentication via Firebase Auth and AsyncStorage",
        "Real-time logging of moods and dreams with detailed input",
        "Comprehensive monthly analytics: pie charts, line charts, mood trends",
        "Observatory view for Browse historical dream logs with a card-based UI",
        "Responsive dark UI design optimized for mobile-first experience",
        "Firebase Realtime Database secured with per-user access rules",
        "Automated session restoration on app relaunch for seamless experience",
      ],
      github: "https://github.com/Gupta-Aniket/dream-space",
    },

    // * youtube-downloader-cli
    {
      id: "youtube-downloader-cli",
      title: "YouTube Downloader (Python CLI Utility)",
      description:
        "A command-line utility in Python, using Pytube, to download YouTube videos and playlists in the highest available resolution.",
      category: ["python", "utility"],
      status: "deprecated",
      tags: ["Python", "Pytube", "YouTube", "CLI", "Downloader", "Scripting"],
      details: [
        "CLI for downloading single videos or entire playlists",
        "Automatically fetches the highest resolution stream available",
        "Organizes downloads into separate folders for each playlist",
        "Includes error handling for YouTube connection issues",
        "Lightweight Python script with no external UI dependencies",
        "Utilizes the Pytube library for video extraction",
        "Currently deprecated due to frequent YouTube API changes breaking `Pytube`",
      ],
      github: "https://github.com/Gupta-Aniket/Youtube-playlist-downloader",
    },

    // * travel-companion
    {
      id: "travel-companion",
      title: "Travel Companion (React Native Ticket Organizer)",
      description:
        "An ongoing mobile utility app for organizing travel tickets, generating dynamic forms, managing trips, and exploring travel analytics.",
      category: ["react-native", "Gen-Ai"],
      status: "ongoing",
      tags: [
        "React Native",
        "Supabase",
        "Firebase",
        "OTP Auth",
        "Parallax UI",
        "Dynamic Forms",
      ],
      images: [
        "travel-companion/1.jpg",
        "travel-companion/2.jpg",
        "travel-companion/3.jpg",
        "travel-companion/4.jpg",
      ],
      details: [
        "Simulated OTP-based user authentication (extendable)",
        "Organizes tickets for various transportation modes (flights, trains, buses)",
        "Dynamic forms for entering type-specific ticket details",
        "Supports managing multiple passengers and seat assignments",
        "Real-time UI with Parallax Scroll, Bottom Sheets, and Custom FAB",
        "Data persistence powered by Supabase for backend storage",
        "Integrates Unsplash API for location-based image exploration",
        "Includes Lottie animations for an improved onboarding experience",
      ],
      github: "https://github.com/Gupta-Aniket/travel-companion",
    },

    // * xylophone app
    {
      id: "flutter-xylophone",
      title: "Xylophone (Flutter Mini Piano App)",
      description:
        "A simple, engaging Flutter app simulating a colorful xylophone, allowing users to play musical notes by tapping vibrant keys.",
      category: "flutter",
      status: "live",
      tags: [
        "Flutter",
        "Dart",
        "AudioPlayer",
        "UI Design",
        "Music App",
        "Interactive UI",
      ],
      images: ["xylophone/1.jpg"],
      details: [
        "Color-coded piano keys with rounded corners for visual appeal",
        "Plays 8 distinct musical notes using the `audioplayers` package",
        "Simple, one-screen `SafeArea` layout for mobile-first design",
        "Provides instant sound playback for interactive fun",
        "Lightweight Flutter project with minimal dependencies",
        "A beloved project, especially enjoyed by my younger sister!",
      ],
      github: "https://github.com/Gupta-Aniket/Xylophone-app",
      live: "https://github.com/Gupta-Aniket/Xylophone-app/releases/download/android/xylophone.apk",
    },

    // * jobtrail
    {
      id: "job-trail-chrome-extension",
      title: "JobTrail (Job Search Automation Chrome Extension)",
      description:
        "A Chrome extension that scans webpages for job-related opportunities, injects actionable links, and enhances search inputs with customizable quick-search buttons for faster job discovery.",
      category: "extension",
      status: "live",
      tags: [
        "Chrome Extension",
        "Content Script",
        "MutationObserver",
        "Job Search Ease",
        "JavaScript",
        "Fuse.js",
        "Dynamic DOM Injection",
      ],
      images: ["jobtrail/1.png"],
      details: [
        "Injects a floating overlay panel with job search tools into any webpage",
        "Uses Fuse.js for fuzzy keyword matching to detect job-related links",
        "Scans all clickable elements for job-related text content",
        "Dynamically injects search term buttons into detected search inputs",
        "Works seamlessly with dynamic websites using MutationObserver",
        "Fully isolated UI via Shadow DOM to prevent style conflicts",
        "Chrome storage integration to allow users to customize search terms",
      ],
      github: "https://github.com/Gupta-Aniket/job-trail",
      live: "https://github.com/Gupta-Aniket/job-trail/releases/download/Extension/job-trail.zip",
    },
    {
      id: "project-sharer",
      title: "Project Sharer (Gemini-powered Shareable Content Generator)",
      description:
        "A sleek Flutter app that helps developers instantly generate platform-specific shareable content for their projects using the Gemini API. Includes token tracking, offline-first form flow, image uploads, and a beautiful UI.",
      category: ["flutter", "gen-ai"],
      status: "live",
      tags: [
        "Flutter",
        "Dart",
        "Gemini API",
        "GetX",
        "AI Content Generation",
        "Shareable Posts",
        "Platform-Specific Output",
        "Base64 Images",
      ],
      images: ["project-sharer/1.png", "project-sharer/2.png"],
      details: [
        "User provides basic project data like title, description, GitHub, live link, and optional social URLs",
        "User answers questions via a smooth, paginated form interface",
        "Token usage is recorded and shown to the user from the first setup screen",
        "Token count is persisted using SharedPreferences and resets monthly",
        "Up to 4 screenshots (base64 encoded) can be uploaded and sent to Gemini",
        "Multi-step GetX navigation (Input → Clarifying Qs → Generated Results)",
        "Content is streamed for each selected platform in markdown-like format",
        "Results are shown in horizontally scrollable cards per platform",
        "Includes reset API key functionality to wipe config and restart setup",
        "Built with modular MVC architecture: clean controller/view separation",
        "Supports 7+ platforms: LinkedIn, X, GitHub, Reddit, Hacker News, Discord, Hashnode",
      ],
      github: "https://github.com/Gupta-Aniket/promoten/",
      live: "https://github.com/Gupta-Aniket/promoten/releases/download/android/promoten.apk",
    },
  ],
};
export default sharedData;

```

### style.css
```css
.modal-image-wrapper {
  margin-bottom: 1.5rem;
}
.modal-image {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.modal-description {
  font-size: 16px;
  color: #333;
  margin-bottom: 0.5rem;
}
.modal-details {
  font-size: 14px;
  color: #666;
  margin-bottom: 1rem;
}

.modal-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1rem;
}
.modal-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #999;
}
.dot.green {
  background-color: #28a745;
}
.dot.orange {
  background-color: #f39c12;
}

.modal-links a {
  text-decoration: none;
  color: #007aff;
  font-weight: 500;
  margin-right: 16px;
}

.modal-tags {
  margin-top: 1rem;
}
.project-tag {
  display: inline-block;
  background: #f0f0f5;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 999px;
  margin: 0 8px 8px 0;
}

.project-card {
display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        border-radius: 16px;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        height: 100%;
        background-color: var(--tertiary-background);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        border: 1px solid var(--separator);
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        box-shadow: var(--shadow-sm);
}
:root {
  /* iOS System Colors */
  --primary: #007aff;
  --secondary: #5856d6;
  --success: #34c759;
  --warning: #ff9500;
  --error: #ff3b30;
  --label: #000000;
  --secondary-label: #3c3c43;
  --tertiary-label: #3c3c4399;
  --quaternary-label: #3c3c432e;
  --system-background: #ffffff;
  --secondary-background: #f2f2f7;
  --tertiary-background: #ffffff;
  --grouped-background: #f2f2f7;
  --separator: #3c3c4349;
  --fill-quaternary: #78788033;

  /* Typography */
  --font-display: "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
  --font-text: "SF Pro Text", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;

  /* Spacing Grid */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Touch Targets */
  --touch-target: 44px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
}

@media (prefers-color-scheme: dark) {
  :root {
    --label: #ffffff;
    --secondary-label: #ebebf5;
    --tertiary-label: #ebebf599;
    --quaternary-label: #ebebf52e;
    --system-background: #000000;
    --secondary-background: #1c1c1e;
    --tertiary-background: #2c2c2e;
    --grouped-background: #000000;
    --separator: #54545899;
    --fill-quaternary: #78788066;
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-text);
  background-color: var(--grouped-background);
  color: var(--label);
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Navigation with enhanced blur */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(248, 248, 248, 0.8);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-bottom: 0.5px solid var(--separator);
  z-index: 1000;
  height: 52px;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .nav {
    background-color: rgba(28, 28, 30, 0.8);
  }
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.nav-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--label);
  transition: transform 0.2s ease;
}

.nav-title:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.2s ease;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.nav-link:hover {
  background-color: var(--fill-quaternary);
  transform: translateY(-1px);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background-color: var(--fill-quaternary);
  transform: scale(1.1);
}

/* Enhanced Hero Section */
.hero {
  padding: calc(52px + var(--spacing-xxl)) var(--spacing-md)
    var(--spacing-xxl);
  background: linear-gradient(
    135deg,
    var(--system-background) 0%,
    var(--secondary-background) 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 20%,
    rgba(0, 122, 255, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(34px, 6vw, 56px);
  font-weight: 800;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
  animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
  font-size: 21px;
  font-weight: 400;
  color: var(--secondary-label);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-stat {
  text-align: center;
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.hero-stat:hover {
  transform: translateY(-2px);
}

.hero-stat-number {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.hero-stat-label {
  font-size: 15px;
  color: var(--secondary-label);
  margin-top: var(--spacing-xs);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 17px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  animation: fadeInUp 0.8s ease 0.6s both;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cta-button:active {
  transform: translateY(0);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    box-shadow: 0 0 20px currentColor;
  }
}

/* Section */
.section {
  padding: var(--spacing-xxl) 0;
}

.section-header {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.section-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 19px;
  color: var(--secondary-label);
  max-width: 600px;
  margin: 0 auto;
}

/* Enhanced About Section */
.about {
  background-color: var(--secondary-background);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.about-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 700;
  color: white;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease;
}

.about-avatar:hover {
  transform: scale(1.05) ;
}

.about-text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
}

.about-quote {
  font-size: 21px;
  font-weight: 500;
  color: var(--primary);
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-left: var(--spacing-lg);
}

.about-quote::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 40px;
  color: var(--primary);
  opacity: 0.3;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-pill {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-xl);
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  transition: all 0.2s ease;
  cursor: pointer;
}

.tech-pill:hover {
  /* background-color: var(--primary);   */
  color: white;
  transform: translateY(-2px);
}

/* Enhanced Projects Grid */
.projects {
  background-color: var(--secondary-background);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

/* .project-card {
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--separator);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadow-sm);
} */
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--separator);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadow-sm);
}

.project-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}


.project-actions {
  margin-top: auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #007aff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0051cc;
}

.btn-secondary {
  background-color: #f0f0f5;
  color: #333;
}

.btn-secondary:hover {
  background-color: #d8d8e0;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-status {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* animation: pulse 2s infinite; */
}

.project-status.live {
  background-color: var(--success);
  /* animation: glow 2s infinite; */
}

.project-status.ongoing {
  background-color: var(--warning);
}

.project-status.deprecated,
.project-status.notworking {
  background-color: var(--error);
}

.project-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
  padding-right: var(--spacing-lg);
}

.project-description {
  font-size: 15px;
  line-height: 1.5;
  color: var(--secondary-label);
  margin-bottom: var(--spacing-md);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.project-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--secondary-background);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-label);
}

.project-actions {
  display: flex;
  gap: var(--spacing-sm);
}

.project-link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  animation: fadeInUp 0.8s ease 0.6s both;
}

.project-link:hover {
  /* font-weight: 600; */
  font-size: 17px;
  background-color: var(--secondary);
  transform: scale(1.02);
}

/* Project Detail Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: var(--system-background);
  border-radius: var(--radius-lg);
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--separator);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--label);
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--secondary-label);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: var(--fill-quaternary);
  color: var(--label);
}

.modal-body {
  padding: var(--spacing-lg);
  max-height: calc(90vh - 140px);
  overflow-y: auto;
}

.modal-section {
  margin-bottom: var(--spacing-lg);
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-sm);
}

.modal-description {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-md);
}

.modal-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.modal-image {
  aspect-ratio: 16/9;
  background-color: var(--secondary-background);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-label);
  font-size: 14px;
  border: 1px solid var(--separator);
}

.modal-buttons {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.modal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target);
  padding: 0 var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 17px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.modal-button:hover {
  background-color: var(--secondary);
  transform: translateY(-1px);
}

.modal-button.secondary {
  background-color: var(--secondary-background);
  color: var(--label);
  border: 1px solid var(--separator);
}

.modal-button.secondary:hover {
  background-color: var(--tertiary-background);
}

/* Stats Section */
.stats {
  background-color: var(--secondary-background);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.stat-card {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-md);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 15px;
  color: var(--secondary-label);
}

/* Enhanced Contact Section */
.contact {
  background-color: var(--system-background);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  margin-bottom: var(--spacing-sm);

}

.form-input,
.form-textarea {
  width: 100%;
  min-height: var(--touch-target);
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-md);
  font-family: var(--font-text);
  font-size: 17px;
  color: var(--label);
  transition: all 0.2s ease;

}
select.form-input {
  padding-right: 2.5rem; /* Space for arrow */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  cursor: pointer;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-submit {
  width: 100%;
  margin-bottom: var(--spacing-lg);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--separator);
  padding-bottom: var(--spacing-lg);

}

.social-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  min-height: var(--touch-target);
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: var(--fill-quaternary);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-stats {
    gap: var(--spacing-md);
    flex-direction: column;
  }

  .hero-stat {
    padding: var(--spacing-sm);
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }

  .about-avatar {
    width: 120px;
    height: 120px;
    font-size: 48px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
.questionnaire-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  z-index: 9999;
}

.questionnaire-modal.hidden {
  display: none;
}
.hidden {
  display: none !important;
}

.questionnaire-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
}

.questionnaire-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

  .modal-content {
    width: 95vw;
    max-height: 95vh;
  }

  .modal-buttons {
    flex-direction: column;
  }

  .modal-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }

  .hero {
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .modal-body {
    padding: var(--spacing-md);
  }

  .modal-header {
    padding: var(--spacing-md);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
.cta-button:focus-visible,
.nav-link:focus-visible,
.project-link:focus-visible,
.social-link:focus-visible,
.modal-button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.form-input:focus-visible,
.form-textarea:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: -2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* Loading states */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid var(--primary);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
/* Apple HIG Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 12px;
  max-width: min(90vw, 640px);
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.1);
  transform: scale(0.95) translateY(8px);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: 16px 24px;
  border-bottom: 0.5px solid rgba(60, 60, 67, 0.29);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #ffffff;
}

.modal-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  line-height: 1.2;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  color: rgba(60, 60, 67, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  font-size: 18px;
  font-weight: 500;
}

.modal-close:hover {
  background-color: rgba(120, 120, 128, 0.08);
  color: #000000;
}

.modal-body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.modal-hero-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #f2f2f7 0%, #e5e5ea 100%);
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

.modal-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-hero-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(60, 60, 67, 0.6);
  font-size: 14px;
  font-weight: 500;
}

.modal-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: rgba(52, 199, 89, 0.1);
  border-radius: 16px;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 600;
  
}

.modal-status.live {
  background-color: var(--success);
  /* animation: glow 2s infinite; */
  color: #34c759;
}

.modal-status.deprecated,
.modal-status.ongoing {
  background-color: var(--warning);
}

.modal-status.notworking {
  background-color: var(--error);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
}
.status-text {
  color: white;
}

.modal-description {
  font-size: 17px;
  line-height: 1.47;
  color: #000000;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.modal-details {
  font-size: 15px;
  line-height: 1.47;
  color: rgba(60, 60, 67, 0.6);
  margin-bottom: 24px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.modal-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(60, 60, 67, 0.8);
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

.modal-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.modal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 0 20px;
  background-color: #007aff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  transition: all 0.15s ease;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}

.modal-button:hover {
  background-color: #0056cc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.modal-button:active {
  transform: translateY(0);
}

.modal-button.secondary {
  background-color: rgba(120, 120, 128, 0.12);
  color: #000000;
  border: 0.5px solid rgba(60, 60, 67, 0.29);
}

.modal-button.secondary:hover {
  background-color: rgba(120, 120, 128, 0.16);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.modal-button-icon {
  font-size: 14px;
  opacity: 0.8;
}

.modal-divider {
  height: 0.5px;
  background-color: rgba(60, 60, 67, 0.29);
  margin: 24px 0;
}

.modal-section-title {
  font-size: 15px;
  font-weight: 600;
  color: rgba(60, 60, 67, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.modal-tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.modal-tech-item {
  padding: 12px;
  background-color: #f2f2f7;
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: rgba(60, 60, 67, 0.8);
  border: 0.5px solid rgba(60, 60, 67, 0.1);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .modal-content {
    background-color: #1c1c1e;
  }

  .modal-header {
    background-color: #1c1c1e;
    border-bottom-color: rgba(84, 84, 88, 0.6);
  }

  .modal-title {
    color: #ffffff;
  }

  .modal-close {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-close:hover {
    background-color: rgba(120, 120, 128, 0.16);
    color: #ffffff;
  }

  .modal-hero-image {
    background: linear-gradient(135deg, #2c2c2e 0%, #3a3a3c 100%);
    border-color: rgba(84, 84, 88, 0.2);
  }

  .modal-hero-placeholder {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-description {
    color: #ffffff;
  }

  .modal-details {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-tag {
    background-color: rgba(120, 120, 128, 0.24);
    color: rgba(235, 235, 245, 0.8);
    border-color: rgba(84, 84, 88, 0.2);
  }

  .modal-button.secondary {
    background-color: rgba(120, 120, 128, 0.24);
    color: #ffffff;
    border-color: rgba(84, 84, 88, 0.6);
  }

  .modal-button.secondary:hover {
    background-color: rgba(120, 120, 128, 0.32);
  }

  .modal-divider {
    background-color: rgba(84, 84, 88, 0.6);
  }

  .modal-section-title {
    color: rgba(235, 235, 245, 0.6);
  }

  .modal-tech-item {
    background-color: #2c2c2e;
    color: rgba(235, 235, 245, 0.8);
    border-color: rgba(84, 84, 88, 0.2);
  }
}

/* Responsive design */
@media (max-width: 480px) {
  .modal-overlay {
    padding: 8px;
  }

  .modal-content {
    max-height: 95vh;
  }

  .modal-header {
    padding: 12px 16px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-body {
    padding: 16px;
  }

  .modal-hero-image {
    margin-bottom: 16px;
  }

  .modal-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .modal-button {
    width: 100%;
    justify-content: center;
  }
}

/* Additional CSS for new sections */

/* Skills Section */
.skills {
  background-color: var(--system-background);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.skill-category {
  background-color: var(--tertiary-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.skill-category-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
}

.skill-item {
  margin-bottom: var(--spacing-lg);
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.skill-name {
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
}

.skill-percentage {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
}

.skill-bar {
  height: 6px;
  background-color: var(--secondary-background);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 3px;
  transition: width 2s ease;
  animation: slideIn 2s ease;
}

@keyframes slideIn {
  from {
    width: 0;
  }
}

/* Tech Pills with Levels */
.tech-pill {
  position: relative;
  overflow: hidden;
}

.tech-pill::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.tech-pill[data-level="expert"]::after {
  width: 100%;
}
.tech-pill[data-level="advanced"]::after {
  width: 80%;
}
.tech-pill[data-level="intermediate"]::after {
  width: 60%;
}
.tech-pill[data-level="beginner"]::after {
  width: 40%;
}

/* Project Filters */
.project-filters {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--tertiary-background);
  border: 1px solid var(--separator);
  border-radius: var(--radius-xl);
  font-size: 15px;
  font-weight: 500;
  color: var(--label);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background-color: var(--secondary-background);
  transform: translateY(-1px);
}

.filter-btn.active {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* Testimonials */
.testimonials {
  background-color: var(--system-background);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.testimonial-card {
  background-color: var(--tertiary-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-2px);
}

.testimonial-text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--label);
  margin-bottom: var(--spacing-lg);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 18px;
}

.author-name {
  font-weight: 600;
  color: var(--label);
  margin-bottom: 2px;
}

.author-role {
  font-size: 14px;
  color: var(--secondary-label);
}

.contact-form {

  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; Ensure the container takes full height */
  /* min-height: 300px; Optional: set a reasonable min height */
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  /* height: 100vh; Full viewport height if you want full page center */
}



.form-error {
  color: var(--error);
  font-size: 14px;
  margin-top: var(--spacing-xs);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.form-error.visible {
  opacity: 1;
}

.form-input.error,
.form-textarea.error {
  border-color: var(--error);
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1);
}

.form-input.valid,
.form-textarea.valid {
  border-color: var(--success);
  box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
}

.contact-alternatives {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--separator);
  padding-bottom: var(--spacing-sm);
}

.contact-alt-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--label);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--tertiary-background);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--label);
  transition: all 0.2s ease;
}

.contact-method:hover {
  background-color: var(--secondary-background);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 20px;
}

.contact-text {
  font-size: 15px;
  font-weight: 500;
}

/* Enhanced animations and micro-interactions */
.project-card {
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}



@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px currentColor;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 15px currentColor;
    transform: scale(1.1);
  }
}

/* Responsive enhancements */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .project-filters {
    gap: var(--spacing-xs);
  }

  .filter-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 14px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .contact-methods {
    gap: var(--spacing-xs);
  }
}

/* Loading state for form */
.form-submit.loading {
  position: relative;
  color: transparent;
}

.form-submit.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.about-avatar {
  width: 300px;                /* or whatever size you prefer */
  height: 300px;
  border-radius: 50%;
  border: 3px solid #007bff;  /* Blue outline */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #e0f0ff;  /* fallback background for initials */
  color: #007bff;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.modal-slider-wrapper {
  position: relative;
  margin-bottom: var(--spacing-lg);
}
.modal-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--spacing-md);
  scroll-behavior: smooth;
}
.modal-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.3s ease;
}
.modal-slide img {
  width: 100%;
  height: auto;
  display: block;
}
.modal-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.modal-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--quaternary-label);
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-indicator.active {
  background-color: var(--primary);
}

.modal-slider-wrapper {
  position: relative;
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
  border-radius: var(--radius-md);
}

.modal-slider {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  height: clamp(200px, 45vh, 360px);
}

.modal-slide {
  flex: 0 0 100%;
  transition: transform 0.3s ease;
  display: none;
}
.modal-slide.active {
  display: block;
}
.modal-slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: auto;
}


.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.slider-arrow:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.slider-arrow.left {
  left: 12px;
  transform: translateY(-50%) rotate(180deg); 
}
.slider-arrow.right {
  right: 12px;
}

.modal-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.modal-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--quaternary-label);
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-indicator.active {
  background-color: var(--primary);
}
.modal-bullets {
  list-style: disc inside;
  padding-left: 0;
  margin: 12px 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--label);
}

.modal-bullets li {
  margin-bottom: 6px;
}
/* WIZARD MODAL */

.wizard-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.3s ease;
}

.wizard-overlay.active {
  display: flex;
}

.wizard-container {
  width: 90%;
  max-width: 600px;
  background: var(--secondary-background);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  padding: 2rem 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.wizard-progress {
  height: 8px;
  background: var(--separator);
  border-radius: 50px;
  overflow: hidden;
}

.wizard-progress-bar {
  height: 100%;
  width: 2%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.4s ease;
}

.wizard-question {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--label);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.wizard-input {
  width: 100%;
  padding: 0.9rem 1rem;
  padding-right: 4rem;

  font-size: 1rem;
  border: 1px solid var(--separator);
  border-radius: var(--radius-md);
  background-color: var(--tertiary-background);
  color: var(--label);
  font-family: var(--font-text);
  transition: border 0.2s ease, background-color 0.2s ease;
}
.wizard-hint{
  margin-top: -1rem;
  padding-left: 0.2rem;
  font-size: 0.8rem;
  color: var(--secondary-label);
}

.cta-button:hover{
  font-size: 17px;
  background-color: var(--secondary);
  transform: scale(1.02);
}
select.wizard-input{
  appearance: none; /* <-- this removes the native arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Add custom arrow */
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23666" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

.wizard-input::placeholder {
  color: var(--tertiary-label);
}

.wizard-input:focus {
  border-color: var(--primary);
  outline: none;
  background-color: var(--system-background);
}

.wizard-buttons {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wizard-popup-buttons{
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.wizard-close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
}
.skip-btn {
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 400; /* lighter weight */
  color: #666; /* assume you have a subtle text color var */
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-left: 90%;
  transition: all 0.2s ease;
  font-family: var(--font-text);
  background: transparent; /* subtle look */
}

#fileStatus {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary-label);
}
/* Wizard Popup (small message bubble) */
.wizard-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--system-background);
  color: var(--label);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 10001;
  font-size: 1.1rem;
  text-align: center;
  max-width: 90%;
  transition: opacity 0.3s ease;
  font-family: var(--font-text);
}

.wizard-popup .popup-content {
  font-weight: 500;
  color: var(--label);
}

/* Wizard Quit Confirmation Modal */
.wizard-confirm {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px) saturate(140%);
  background-color: rgba(0, 0, 0, 0.4); /* optional override: add a var if you want */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10002;
}

.wizard-confirm .confirm-content {
  background: var(--system-background);
  padding: var(--spacing-xl) calc(var(--spacing-xl) + 0.5rem);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
  max-width: 500px;
  width: 90%;
  font-family: var(--font-text);
}

.wizard-confirm .confirm-content p {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
  color: var(--label);
}

.wizard-confirm .confirm-content button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  margin: 0 var(--spacing-sm);
  transition: all 0.2s ease;
  font-family: var(--font-text);
}

.wizard-confirm .confirm-content button#quitYes {
  background: var(--fill-quaternary);
  color: var(--label);
  margin: 0.2rem ;
}

.wizard-confirm .confirm-content button#quitNo {
  background: var(--primary);
  color: var(--label);
  margin: 0.2rem ;
}

.wizard-confirm .confirm-content button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.sub-text{
  padding : 0.2rem 0.4rem;
  font-size: 0.8rem;
  color: var(--secondary-label);
}

.section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
```


import portfolioData from "./data.js";

const projects = portfolioData.projects;
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!grid) {
    console.error("⚠️ .projects-grid element not found");
    return;
  }

  // Load projects dynamically
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

  // Filter logic
  function filterProjects(category) {
    // ! print () literally invode cmd+p
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

  // Attach filter button click events
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const selectedCategory = btn.dataset.filter;
      filterProjects(selectedCategory);
    });
  });

  // 👇 Trigger default filter on page load
  filterProjects("all");
});

// Project Modal Functions
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.innerText = project.title;

  // Generate status with appropriate styling
  const statusClass =
    project.status === "working"
      ? ""
      : project.status === "ongoing"
      ? "ongoing"
      : "depricated";

  // Generate tags HTML
  const tagsHTML = project.tags
    .map((tag) => `<span class="modal-tag">${tag}</span>`)
    .join("");

  // Generate tech stack if available
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

  // Generate action buttons
  const buttonsHTML = `
    <div class="modal-actions">
        ${
          project.live
            ? `
            <a href="${project.live}" target="_blank" class="modal-button">
                <span>View Live</span>
                <span class="modal-button-icon">↗</span>
            </a>
        `
            : ""
        }
        ${
          project.github
            ? `
            <a href="${project.github}" target="_blank" class="modal-button secondary">
                <span>GitHub</span>
                <span class="modal-button-icon">↗</span>
            </a>
        `
            : ""
        }
        ${
          project.demo
            ? `
            <a href="${project.demo}" target="_blank" class="modal-button secondary">
                <span>Demo</span>
                <span class="modal-button-icon">↗</span>
            </a>
        `
            : ""
        }
        ${
          project.documentation
            ? `
            <a href="${project.documentation}" target="_blank" class="modal-button secondary">
                <span>Docs</span>
                <span class="modal-button-icon">↗</span>
            </a>
        `
            : ""
        }
    </div>
  `;

  modalBody.innerHTML = `
    <div class="modal-hero-image">
        ${
          project.image
            ? `<img src="${project.image}" alt="${project.title}" />`
            : `<div class="modal-hero-placeholder">No preview available</div>`
        }
    </div>
    
    <div class="modal-status ${statusClass}">
        <span class="status-dot"></span>
        <span>${
          project.status.charAt(0).toUpperCase() + project.status.slice(1)
        }</span>
    </div>
    
    <p class="modal-description">${project.description}</p>
    
    ${project.details ? `<p class="modal-details">${project.details}</p>` : ""}
    
    ${
      project.tags && project.tags.length > 0
        ? `
        <div class="modal-tags">
            ${tagsHTML}
        </div>
    `
        : ""
    }
    
    ${techStackHTML}
    
    ${techStackHTML && buttonsHTML ? '<div class="modal-divider"></div>' : ""}
    
    ${buttonsHTML}
  `;

  // Add smooth entrance animation
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });
}
document.querySelector(".modal-close").addEventListener("click", () => {
  closeProjectModal();
});
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
}

// Close modal when clicking outside
document.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

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
  // You can safely remove this if you're not using stats
  // animateStats();

  // Optional: Scroll to top on refresh
  window.scrollTo(0, 0);

  // Any other initializations can go here
});
// Resume download function
function downloadResume() {
  // In a real implementation, this would link to a PDF
  alert("Downloading resume...");
  // window.location.href = "path/to/resume.pdf";
}
window.closeProjectModal = closeProjectModal;

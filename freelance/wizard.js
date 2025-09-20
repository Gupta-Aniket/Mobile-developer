import sharedData from "../shared-data.js";
/**
 * Sends an email via EmailJS with a custom HTML summary.
 *
 * @param {string} summaryHTML - The HTML content of the summary
 * @param {Object} options
 * @param {string} [options.serviceID="service_jqritth"] - EmailJS service ID
 * @param {string} [options.templateID="template_9wuq71a"] - EmailJS template ID
 * @param {Function} [options.onSuccess] - Callback after successful send
 * @param {Function} [options.onError] - Callback on failure
 */
function sendEmailWithSummary(summary, user_email, options = {}) {
  const {
    serviceID = "service_jqritth",
    templateID = "template_9wuq71a",
    onSuccess,
    onError,
  } = options;

  if (!window.emailjs) {
    console.error("❌ EmailJS not initialized");
    if (onError) onError(new Error("EmailJS not initialized"));
    return;
  }

  // Build the payload — your template can have {{summary}} and {{user_email}}
  const payload = {
    summary,
    user_email, // This will be used in your EmailJS template as {{user_email}}
  };

  emailjs
    .send(serviceID, templateID, payload)
    .then((res) => {
      console.log("✅ Email sent", res.status, res.text);
      if (onSuccess) onSuccess(res);
    })
    .catch((err) => {
      console.error("❌ Failed to send email:", err);
      if (onError) onError(err);
    });
}



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
  const data = {
    user_name: state.name?.trim() || "",
    user_email: state.email?.trim() || "",
    project_type: state.projectType?.trim() || "",
    app_name: state.appName?.trim() || "",
    description: state.description?.trim() || "",
    audience: state.audience?.trim() || "",
    country: state.country?.trim() || "",
    budget:
      state.budget === "Other"
        ? state.customBudget?.trim() || ""
        : state.budget?.trim() || "",
    urgency:
      state.urgency === "Other"
        ? state.customUrgency?.trim() || ""
        : state.urgency?.trim() || "",
    links: state.links?.trim() || "",
    user_phone: state.phone?.trim() || "",
    submission_time: new Date().toLocaleString(),
    // Add your PDF links here or get them dynamically if needed
    onboarding_pdf:
      state.onboardingPDF || "https://example.com/client-onboarding.pdf",
    working_conditions_pdf:
      state.workingConditionsPDF ||
      "https://example.com/working-conditions.pdf",
  };

  // Define sections
  const sections = [
    {
      title: "Personal Information",
      fields: ["user_name", "user_email", "user_phone", "country"],
    },
    {
      title: "Project Details",
      fields: ["project_type", "app_name", "description", "audience", "links"],
    },
    {
      title: "Administrative",
      fields: ["budget", "urgency", "submission_time"],
    },
  ];

  // Generate the HTML
  const summaryHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Submission Summary</title>
  <style>
    :root {
      --primary-color: #007aff;
      --bg-color: #f5f5f7;
      --section-alt-bg: #f2f2f7;
      --text-color: #1c1c1e;
      --label-color: #6e6e73;
      --border-color: #d1d1d6;
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    body { margin:0; background:#ffffff; font-family: var(--font-family); }
    .summary-wrapper { max-width:680px; margin:30px auto; background: var(--bg-color); border-radius:16px; color: var(--text-color); overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);}
    .header { padding:20px 30px; text-align:center;}
    .header h2 { margin:0 0 5px; font-size:24px; font-weight:600;}
    .header p { margin:0; font-size:14px; color:#636366;}
    .section { padding:20px 30px; border-top:1px solid var(--border-color);}
    .section.alt-bg { background: var(--section-alt-bg);}
    .section-title-wrapper { display:flex; align-items:center; gap:10px; margin-bottom:12px;}
    .section-accent { width:4px; height:20px; background:var(--primary-color); border-radius:2px;}
    .section-title { font-size:16px; font-weight:600; color: var(--text-color);}
    .section-fields { display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:12px 20px;}
    .field { display:flex; flex-direction:column; }
    .field.wide { grid-column:1/-1;}
    .label { font-size:13px; font-weight:600; color: var(--label-color); margin-bottom:4px;}
    .value { font-size:15px; font-weight:500; color: var(--text-color); word-wrap:break-word;}
    .value.key-field { font-weight:600;}
    .value a { color: var(--primary-color); text-decoration:none;}
    .value a:hover { text-decoration:underline;}
    .footer-message { padding:20px 30px; font-size:15px; color:#3a3a3c; line-height:1.6; text-align:center; max-width:640px; margin:0 auto;}
    .resource-cards { display:flex; flex-direction:column; gap:16px; padding:0 30px 30px; max-width:640px; margin:0 auto;}
    .resource-card { display:flex; align-items:center; justify-content:space-between; padding:18px 20px; border-radius:14px; background:#ffffff; border:1px solid #e5e5ea; text-decoration:none; color:inherit; transition: background 0.3s ease, color 0.3s ease; box-shadow:0 4px 14px rgba(0,0,0,0.05);}
    .resource-card:hover { background: var(--primary-color); color:#ffffff;}
    .resource-card:hover .card-content h4, .resource-card:hover .card-content p, .resource-card:hover .card-arrow { color:#ffffff;}
    .card-content h4 { margin:0; font-size:16px; font-weight:600; color:#1c1c1e; transition:color 0.3s ease;}
    .card-content p { margin:4px 0 0; font-size:14px; color:#6e6e73; transition:color 0.3s ease;}
    .card-arrow { font-size:20px; color: #007aff; transition:color 0.3s ease;}
  </style>
</head>
<body>

<div class="summary-wrapper">
  <div class="header">
    <h2>Submission Summary</h2>
    <p>Here’s what we received from you:</p>
  </div>

  ${sections
    .map((section, idx) => {
      const alt = idx % 2 === 1 ? "alt-bg" : "";
      return `
    <div class="section ${alt}">
      <div class="section-title-wrapper">
        <span class="section-accent"></span>
        <h3 class="section-title">${section.title}</h3>
      </div>
      <div class="section-fields">
        ${section.fields
          .map((key) => {
            if (!data[key]) return "";
            const isWide =
              key === "description" || key === "links" ? "wide" : "";
            const value =
              key === "links" && data[key]
                ? `<a href="${data[key]}" target="_blank">${data[key]}</a>`
                : data[key];
            const keyField =
              key === "user_name" ||
              key === "app_name" ||
              key === "project_type"
                ? "key-field"
                : "";
            return `<div class="field ${isWide}">
                      <span class="label">${key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}</span>
                      <span class="value ${keyField}">${value}</span>
                    </div>`;
          })
          .join("")}
      </div>
    </div>`;
    })
    .join("")}

  <div class="footer-message">
    <p>Thank you — we’ve received your submission.</p>
    <p>To help you prepare for what comes next, we’ve included two resources below. These documents outline our process and working principles.</p>
    <p>We recommend reviewing them before our first call.</p>
  </div>

  <div class="resource-cards">
    <a href="${
      sharedData.files.onboarding_pdf
    }" target="_blank" class="resource-card">
      <div class="card-content">
        <h4>Onboarding Guide</h4>
        <p>Overview of our process, tools, and what to expect.</p>
      </div>
      <div class="card-arrow">→</div>
    </a>

    <a href="${
      sharedData.files.working_conditions_pdf
    }" target="_blank" class="resource-card">
      <div class="card-content">
        <h4>Working Agreement</h4>
        <p>Terms, responsibilities, and scope of collaboration.</p>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </div>

</div>

</body>
</html>
`;

  // Send email with this HTML
  sendEmailWithSummary(summaryHTML, data.user_email, {
    onSuccess: () =>
      showPopup(
        "✅ Your submission has been recorded. Please check the resources.",
        true
      ),
    onError: () => alert("❌ Something went wrong. Please try again."),
  });

  console.group("📩 Collected Data Summary");
  Object.entries(data).forEach(([key, value]) => {
    if (value) console.log(`${key}:`, value);
  });
  console.groupEnd();

  progressBar.style.width = "100%";
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

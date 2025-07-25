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

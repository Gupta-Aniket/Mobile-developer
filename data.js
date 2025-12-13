import sharedData from "./shared-data.js";

const cdn = (slug, color = "fff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

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
      "Hi, I’m Aniket — a mobile developer who loves building tools that solve real problems. I don’t sing, I don’t dance. I write code and ship it.",

      "I’ve built things like a no-login video calling system (WebRTC + Firebase), a full-stack group chat app (WebSockets + Node.js), and JobTrail, a Chrome extension that tracks job listings as you browse.",

      "Over the past couple of years, I’ve shipped 10+ tools and maintained 30+ public repos. I care about performance, usability, and design principles that make apps feel intuitive and reliable.",
    ],
  },

  deployment: [
    { name: "App Store", detail: "iOS publishing", slug: "appstore" },
    { name: "Play Store", detail: "Android publishing", slug: "googleplay" },
    { name: "Firebase", detail: "Backend & Cloud services", slug: "firebase" },
    {
      name: "Supabase",
      detail: "Realtime database & authentication",
      slug: "supabase",
    },
    {
      name: "CI/CD",
      detail: "Fastlane / GitHub Actions for mobile apps",
      slug: "bento",
    },
    { name: "Docker", detail: "Can create docker images for handling CI/CD", slug: "docker" },
  ],
  skills: [
    // Core frameworks
    { name: "Swift", level: "expert", slug: "swift" },
    { name: "Flutter", level: "expert", slug: "flutter" },
    { name: "React Native", level: "expert", slug: "react" },

    // Languages
    { name: "Dart", level: "expert", slug: "dart" },
    { name: "JavaScript", level: "advanced", slug: "javascript" },
    { name: "TypeScript", level: "advanced", slug: "typescript" },
    { name: "Python", level: "intermediate", slug: "python" },

    // Backend / APIs
    { name: "REST APIs", level: "advanced", slug: "boxysvg" },
    { name: "WebRTC", level: "intermediate", slug: "webrtc" },
    { name: "Git", level: "intermediate", slug: "git" },
    { name: "Shell Scripting", level: "intermediate", slug: "shell" },

    // UI / Architecture
    { name: "UI/UX Design", level: "expert", slug: "figma" },
    { name: "MVVM / Clean Architecture", level: "intermediate", slug: "googlecontaineroptimizedos" },

    // Supporting / other tools
    { name: "Redux / Provider", level: "intermediate", slug: "redux" },
    { name: "GraphQL", level: "intermediate", slug: "graphql" },
    { name: "Postman / Insomnia", level: "advanced", slug: "postman" },
  ],

  projects: sharedData.projectData,

  experience: sharedData.experienceData,

  filStats: [
    { icon: "\ud83d\udcf1", target: 15, label: "Apps Shipped" },
    { icon: "\u2b50", target: 98, label: "Client Satisfaction" },
    { icon: "\ud83d\ude80", target: 50, label: "Features Delivered" },
    { icon: "\ud83c\udf1f", target: 14, label: "Years Experience" },
  ],
};

export default portfolioData;

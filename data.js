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
      "Hi, I’m Aniket — a mobile developer who loves building tools that solve real problems. I don’t sing, I don’t dance. I write code and ship it.",

      "I’ve built things like a no-login video calling system (WebRTC + Firebase), a full-stack group chat app (WebSockets + Node.js), and JobTrail, a Chrome extension that tracks job listings as you browse.",

      "Over the past couple of years, I’ve shipped 10+ tools and maintained 30+ public repos. I care about performance, usability, and design principles that make apps feel intuitive and reliable.",
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

  finalStats: [
    { icon: "\ud83d\udcf1", target: 15, label: "Apps Shipped" },
    { icon: "\u2b50", target: 98, label: "Client Satisfaction" },
    { icon: "\ud83d\ude80", target: 50, label: "Features Delivered" },
    { icon: "\ud83c\udf1f", target: 14, label: "Years Experience" },
  ],
};

export default portfolioData;

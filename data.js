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
      "Hi, I’m Aniket. I’m a mobile developer who loves building tools that solve real problems for real people. I don’t sing, I don’t dance. I write code and ship it. That’s how I create value.",

      "One of the projects I’m proud of is a video calling system that works without any login. It uses WebRTC and Google's realtime database to connect two people through a unique PIN. No accounts, no hassle. I built it because I didn’t like sharing personal info just to have a quick call.",

      "I’ve also created a full-stack group chat app with real-time messaging using WebSockets and a custom Node.js backend. It even works in the terminal. I like building things that feel reliable anywhere, not just in flashy UIs.",

      "There’s JobTrail too. It’s a Chrome extension I built to help track job listings while browsing. It quietly sticks around on every relevant page, reminding you to apply. It’s persistent... Just like me. Gets the job done... Just like me.",

      "Over the past couple of years, I’ve shipped around 10 tools that people actually use and maintained more than 30 public repositories. Some are experiments, some are finished products, all of them reflect my habit of building, testing, and improving things.",

      "I care about performance and usability. I follow design principles that make apps feel thoughtful and intuitive. A lot of that comes from how much I respect Apple’s Human Interface Guidelines and their focus on simplicity.",
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

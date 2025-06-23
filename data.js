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
    { value: "80+", label: "Projects Shipped" },
    { value: "4", label: "Platforms" },
    { value: "2-4", label: "Weeks to MVP" },
    { value: "98%", label: "Client Satisfaction" },
  ],

 

  about: {
    title: "About Me",
    subtitle:
      "Passionate about creating mobile experiences that make a difference in people's daily lives.",
    image: "../assets/profile-image/",
    quote:
      "Great mobile apps don't just work – they feel magical and solve real problems elegantly.",
    bio: [
      "I'm Aniket, a passionate mobile app developer with over 4 years of experience crafting exceptional iOS and Android applications. My journey began with a fascination for how technology can simplify complex tasks and create delightful user experiences.",
      "I specialize in Flutter and React Native development, with a strong focus on performance optimization, clean architecture, and pixel-perfect UI implementations. My approach combines technical excellence with user-centered design thinking.",
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

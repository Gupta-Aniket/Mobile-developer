import sharedData from "./shared-data.js";

const portfolioData = {
  //* Data for the navigation and hero section
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

  // Hero section statistics
  heroStats: [
    { value: "80+", label: "Projects Shipped" },
    { value: "4", label: "Platforms" },
    { value: "2-4", label: "Weeks to MVP" },
    { value: "98%", label: "Client Satisfaction" },
  ],

  // About Me section data
  about: {
    title: "About Me",
    subtitle:
      "Passionate about creating mobile experiences that make a difference in people's daily lives.",
    image: "https://picsum.photos/300/300",
    quote:
      "Great mobile apps don't just work – they feel magical and solve real problems elegantly.",
    bio: [
      "I'm Aniket, a passionate mobile app developer with over 4 years of experience crafting exceptional iOS and Android applications. My journey began with a fascination for how technology can simplify complex tasks and create delightful user experiences.",
      "I specialize in Flutter and React Native development, with a strong focus on performance optimization, clean architecture, and pixel-perfect UI implementations. My approach combines technical excellence with user-centered design thinking.",
    ],
    // Tech stack with proficiency levels for tooltips or styling
    techStack: [
      { name: "Flutter", level: "advanced" },
      { name: "React Native", level: "expert" },
      { name: "iOS Native", level: "advanced" },
      { name: "Android Native", level: "advanced" },
      { name: "Dart", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Swift", level: "intermediate" },
      { name: "Kotlin", level: "intermediate" },
      { name: "Firebase", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
      { name: "GraphQL", level: "intermediate" },
      { name: "State Management", level: "advanced" },
      { name: "UI/UX Design", level: "expert" },
    ],
  },

  // Skills organized by category with proficiency percentages
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "Flutter", percentage: 90 },
        { name: "React Native", percentage: 90 },
        // { name: "iOS Native", percentage: 80 },
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        { name: "Firebase", percentage: 85 },
        { name: "REST APIs", percentage: 90 },
        // { name: "GraphQL", percentage: 70 },
      ],
    },
  ],

  // Featured projects with details for the modal view

  projects: sharedData.projectData,

  // Client testimonials
  //! omit for now
  testimonialsSection: {
    subtitle: "Feedback from amazing people I've had the pleasure to work with",
    testimonials: [
      {
        quote:
          "Aniket delivered an exceptional Flutter app that exceeded our expectations. His attention to detail and user experience is remarkable.",
        authorName: "Sarah Johnson",
        authorRole: "Product Manager, TechCorp",
        avatarImage: "", // optional
      },
      {
        quote:
          "not with Aniket was a game-changer. He transformed our complex requirements into a beautiful, intuitive mobile app.",
        authorName: "Michael Chen",
        authorRole: "CEO, StartupX",
        avatarImage: "", // optional
      },
      {
        quote:
          "Professional, reliable, and incredibly skilled. Aniket's React Native expertise helped us launch on time and under budget.",
        authorName: "Emily Rodriguez",
        authorRole: "CTO, InnovateLab",
        avatarImage: "", // optional
      },
    ],
  },

  // Animated stats for the bottom section
  finalStats: [
    { icon: "📱", target: 15, label: "Apps Shipped" },
    { icon: "⭐", target: 98, label: "Client Satisfaction" },
    { icon: "🚀", target: 50, label: "Features Delivered" },
    { icon: "🌟", target: 14, label: "Years Experience" },
  ],
};
export default portfolioData;

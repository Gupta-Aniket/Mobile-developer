const portfolioData = {
  name: "Aniket",
  tagline: "Mobile App Developer",
  about: "I build elegant, performant apps using Flutter & React Native.",

  stats: {
    apps: 10,
    downloads: "50K+",
    uptime: "99.9%",
    satisfaction: "98%",
  },

  skills: ["Flutter", "React Native", "Firebase", "Python", "Git", "Figma"],

  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Mobile App",
      description:
        "A full-featured shopping app with real-time inventory, secure payments, and personalized recommendations built with Flutter.",
      category: "flutter",
      status: "working",
      tags: ["Flutter", "Firebase", "Stripe", "BLoC"],
      details:
        "This app supports seamless UX, cart sync across devices, and secure checkout. Admin dashboard and promo system included.",
      image: "placeholder-ecommerce.jpg",
    },
    {
      id: "fitness",
      title: "Fitness Tracking App",
      description:
        "Cross-platform fitness app with workout tracking, nutrition logging, and social features for fitness enthusiasts.",
      category: "react-native",
      status: "working",
      tags: ["React Native", "Redux", "HealthKit", "Charts"],
      details:
        "Users can log workouts, track macros, sync data with Apple Health or Google Fit, and compete with friends.",
      image: "placeholder-fitness.jpg",
    },
    {
      id: "fintech",
      title: "FinTech Banking App",
      description:
        "Secure banking application with biometric authentication, transaction history, and investment portfolio management.",
      category: "flutter",
      status: "ongoing",
      tags: ["Flutter", "Biometrics", "Encryption", "Charts"],
      details:
        "Biometric login, encrypted local storage, detailed charts for investments. Robust backend with Firebase Firestore.",
      image: "placeholder-fintech.jpg",
    },
    {
      id: "healthcare",
      title: "Healthcare Management",
      description:
        "iOS native app for patient management with appointment scheduling, medical records, and telemedicine features.",
      category: "ios",
      status: "working",
      tags: ["Swift", "HealthKit", "Core Data", "Video Call"],
      details:
        "Built-in calendar sync, chat with doctors, and a secure medical report repository. Integrated with HealthKit.",
      image: "placeholder-healthcare.jpg",
    },
    {
      id: "social",
      title: "Social Media Platform",
      description:
        "Modern social app with real-time messaging, media sharing, and community features built for Gen Z users.",
      category: "flutter",
      status: "working",
      tags: ["Flutter", "WebSocket", "Media Upload", "Push Notifications"],
      details:
        "Full-fledged DM system, public feeds, and algorithmic timeline. Firebase and WebSockets for real-time comms.",
      image: "placeholder-social.jpg",
    },
    {
      id: "delivery",
      title: "Food Delivery App",
      description:
        "On-demand food delivery platform with real-time tracking, multiple payment options, and restaurant management.",
      category: "react-native",
      status: "deprecated",
      tags: ["React Native", "Maps", "Real-time", "Payments"],
      details:
        "GPS driver tracking, real-time order updates, Stripe integration, and restaurant management dashboard.",
      image: "placeholder-delivery.jpg",
    },
  ],
};

export default portfolioData;

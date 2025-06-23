const sharedData = {
  personalInfo: {
    name: "Aniket",
    title: "Mobile App Developer",
    subtitle:
      "Building exceptional iOS and Android experiences with Flutter, React Native, and modern development practices that users love and businesses rely on.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Gupta-Aniket/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/work-gupta-aniket/" },
      { name: "Twitter", url: "https://x.com/adbhut_praani/" },
    ],
    contact: {
      email: "work.gupta.aniket@gmail.com",
      // phone: "+91 8319906162",
      resume:
        "https://drive.google.com/uc?export=download&id=1R5J3xVJJfHgzsf7KzFWopaorKfpB_N2R",
    },
  },

  projectData: [
    //    "working"
    //    "ongoing"
    //    "deprecated";
    {
      id: "REFERENCE APP",
      title: "E-Commerce Mobile App",
      description:
        "A full-featured shopping app with real-time inventory, secure payments, and personalized recommendations built with Flutter.",
      category: "flutter",
      status: "working",
      tags: ["Flutter", "Firebase", "Stripe", "BLoC"],

      details: [
        "Seamless user experience across screens",
        "Cart sync across devices via Firebase",
        "Secure checkout with Stripe integration",
        "Admin dashboard with promo code system",
      ],
      images: ["ecommerce/1.png", "ecommerce/2.png", "ecommerce/3.png"],
      github: "https://github.com/aniket/ecommerce-app",
      live: "https://ecommerce-app.netlify.app/",
    },

    // *kabootar
    {
      id: "kabootar",
      title: "WebRTC Pin Based Video-call",
      description:
        "A pin based video calling app made using webRTC and firebase, no login, no signup just a shared pin",
      category: "react-native",
      status: "working",
      tags: ["React-Native", "Firebase", "WebRTC", "Video-Call"],
      details: [
        "Secure No-Login No-Signup anonymous video-calling app",
        "Utilizing WebRTC for peer-to-peer video-calling",
        "Firebase for real-time data sync",
        "Cleanup functions to avoid cluttered database",
        "Google's Stun server for peer-to-peer connection and ice-exchange",
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
      title: "Gemini chat-bot",
      description:
        "A chat bot desinged for better accessibility and user experience",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "Hive",
        "Share-Intent",
        "Gen-AI",
        "Lottie-Animations",
        "Image-upload",
      ],
      details: [
        "Designed for better accessibilty with pinch-to-zoom gesture not available in original app",
        "Can share specific responses to user's queries",
        "Can upload images to the chat-bot",
        "Uses Google Gen-AI to generate responses",
        "Custom Loader and error messages for better user experience",
        "Keeps and maintains chat history in local storage",
        "TTS and STT for better accessibility",
        "Has a unique water-spent meter so that users know how much water they have spent cooling the servers!",
      ],
      images: ["gemini/1.png", "gemini/2.png", "gemini/3.png", "gemini/4.png"],
      github: "https://github.com/Gupta-Aniket/Cancer",
      live: "https://github.com/Gupta-Aniket/Cancer/releases/download/android/cancer.gemini.apk",
    },

    // *bmi
    {
      id: "bmi-calculator",
      title: "BMI Calculator App",
      description:
        "A Flutter-based Body Mass Index calculator app with sleek UI and smooth UX for tracking BMI based on gender, height, and weight.",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "BMI",
        "SleekSlider",
        "UI/UX",
        "Dart",
        "StatelessWidget",
      ],
      details: [
        "Real-time BMI calculation with gender selection",
        "Interactive height/weight/age controls using plus-minus buttons and sliders",
        "Category-based feedback: Underweight, Normal, Overweight, Obese",
        "Custom color-coded result feedback with dynamic styling",
        "Beautiful circular progress indicator using SleekCircularSlider",
        "Clean component-based architecture with reusable widgets",
        "Responsive error handling and input validation (e.g., gender not selected)",
        "Uses enums and best practices in Flutter state management",
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
        "Corporate Mask - Instant Professional Rewrites. For Android",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "Gemini API",
        "UI/UX",
        "Dart",
        "Cupertino",
        "SharedPreferences",
      ],
      details: [
        "Google Gemini API integration with full error handling",
        "Local API key storage using shared_preferences",
        "iOS-inspired dark mode UI using Cupertino widgets",
        "Real-time AI powered professional rewrites",
        "Copy-to-clipboard functionality",
        "Simple one-screen app using pure setState state management",
        "Separate API key setup screen with validation",
        "Clean component-less architecture (fully single file logic)",
      ],
      images: [
        "corporate-mask-app/1.jpg",
        "corporate-mask-app/2.jpg",
        "corporate-mask-app/3.jpg",
        // "corporate-mask-app/4.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask", // <-- Replace with your actual repo URL
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/corporate-mask.apk",
      // <-- Your APK link in GitHub releases
    },

    // * corporate-mask-extension
    {
      id: "corporate-mask-extension",
      title: "Corporate Mask (Chrome Extension)",
      description:
        "Corporate Mask - Browser Extension version for instant corporate message rewriting. ",
      category: "extension",
      status: "working",
      tags: [
        "Chrome Extension",
        "JavaScript",
        "HTML",
        "CSS",
        "Gemini API",
        "Popup UI",
        "Content Scripts",
      ],
      details: [
        "Floating button overlay inside editable fields",
        "Context-sensitive message rewriting using Gemini API",
        "Browser storage of API key using chrome.storage.local",
        "Separate background.js and content.js for event handling",
        "Modal options page to manage API key",
        "Minimal dark UI design directly injected into web pages",
        "Supports any web-based editable text fields",
        "Directly loaded as unpacked extension via chrome://extensions",
      ],
      images: [
        "corporate-mask-extension/1.png",
        "corporate-mask-extension/2.png",
        "corporate-mask-extension/3.png",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask", // <-- Replace with your actual repo URL
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/extension.zip", // <-- Your extension zip link
    },

    // * file-context
    {
      id: "file-context-generator",
      title: "File Context Generator",
      description:
        "A Python-based interactive tool that automatically scans your directory and generates a context that you can send to any llms",
      category: "utility",
      status: "working",
      tags: [
        "Python",
        "File Scanner",
        "Automation",
        "Data Preparation",
        "Context Generator",
        "AI Prompting",
        "CLI Tool",
      ],
      details: [
        "Scans entire directory structure recursively",
        "Supports selecting individual files, folders, or full directory trees",
        "Supports inclusion & exclusion logic with commands like `all except (...)`",
        "Generates a well-formatted fileContext.txt with file headers",
        "Handles file permission errors gracefully",
        "Easy interactive CLI based interface with simple numeric selection",
        "Automatically handles nested folders up to 1 level deep",
        "Useful for preparing AI input context or dataset snapshots",
      ],
      // images: ["file-context-generator/1.jpg", "file-context-generator/2.jpg"],
      github: "https://github.com/Gupta-Aniket/file-context", // <-- Replace with actual repo URL
      // live: "", // No live URL since it's a CLI tool
    },

    // * switch-mode
    {
      id: "workspace-launcher",
      title: "Workspace Launcher (macOS Bash Automation)",
      description:
        "A macOS bash automation script to instantly switch between Home and Work coding environments. ",
      category: "utility",
      status: "working",
      tags: [
        "Bash",
        "macOS",
        "Automation",
        "Productivity",
        "CLI Tool",
        "VS Code",
        "Simulator",
        "Browser Automation",
      ],
      details: [
        "Interactive CLI to select work or home mode",
        "Scans project directories and allows easy project selection",
        "Automatically hides all other apps except Terminal and Finder",
        "Closes VS Code cleanly before opening new project",
        "Opens Brave for Home mode, Firefox for Work mode",
        "Launches iOS Simulator after environment setup",
        "Error handling for missing folders or invalid input",
        "Fully self-contained single bash script file",
      ],
      github: "https://github.com/Gupta-Aniket/switch_mode", // <-- Replace with your actual repo URL
    },

    //* dream space
    {
      id: "dream-space",
      title: "DreamSpace — Mood & Dream Tracker",
      description:
        "A modern mobile app for logging dreams and moods with persistent authentication, real-time analytics, and a visually immersive observatory to reflect on past experiences.",
      category: "react-native",
      status: "working",
      tags: [
        "React Native",
        "Expo Router",
        "Firebase",
        "Realtime Database",
        "Auth Persistence",
        "Analytics",
        "Data Visualization",
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
        "Persistent user authentication (email/password) with Firebase Auth + AsyncStorage",
        "Realtime mood and dream logging with mood selection and text input",
        "Full monthly analytics: pie charts, line charts, and mood trends",
        "Observatory view: card-based interface for browsing historical dream logs",
        "Responsive dark UI designed for mobile-first with custom components",
        "Firebase Realtime Database fully secured with per-user access rules",
        "Auto session restoration on app relaunch (no re-login needed)",
        "Fully working Expo Router based dynamic navigation structure",
        "Proper async-safe backend API handling with error logging",
        "Firebase Modular SDK (v9+) production-ready architecture",
      ],
      github: "https://github.com/Gupta-Aniket/dream-space",
    },

    // * youtube-downloader-cli
    {
      id: "youtube-downloader-cli",
      title: "YouTube Downloader (Python CLI Utility)",
      description:
        "A simple command-line utility built in Python using Pytube to download YouTube videos and playlists in the highest available resolution.",
      category: "utility",
      status: "deprecated",
      tags: [
        "Python",
        "Pytube",
        "YouTube",
        "CLI",
        "Downloader",
        "Batch Download",
        "Scripting",
        "Automation",
      ],
      details: [
        "Command-line interface for downloading single videos or entire playlists",
        "Automatically fetches highest resolution stream for each video",
        "Folder management: creates separate folders for each playlist",
        "Error handling for YouTube server connection issues",
        "Blocking wait with retry simulation to handle transient failures",
        "Lightweight Python script with no UI dependencies",
        "Utilizes the Pytube library for YouTube video extraction",
        "Now deprecated due to frequent YouTube API changes breaking Pytube",
      ],
      github: "https://github.com/Gupta-Aniket/Youtube-playlist-downloader",
    },

    // * travel-companion
    {
      id: "travel-companion",
      title: "Travel Companion (React Native Smart Ticket Organizer)",
      description:
        "A utility mobile app to organize travel tickets, generate dynamic ticket forms, manage trips with multiple transportation modes, and explore analytics through custom interfaces.",
      category: "react-native",
      status: "ongoing",
      tags: [
        "React Native",
        "Supabase",
        "Firebase",
        "OTP Auth",
        "Travel Tickets",
        "Parallax UI",
        "Dynamic Forms",
        "Data Management",
      ],
      images: [
        "travel-companion/1.jpg",
        "travel-companion/2.jpg",
        "travel-companion/3.jpg",
        "travel-companion/4.jpg",
      ],
      details: [
        "OTP-based user authentication (simulated and extendable)",
        "Upload and organize tickets for flights, trains, buses, ferries",
        "Dynamic ticket details form with type-specific fields",
        "Support for multiple passengers per ticket with seat management",
        "Realtime UI with Parallax Scroll, Bottom Sheets and Custom FAB",
        "Data persistence using Supabase for backend storage",
        "Unsplash API integration for location-based image exploration",
        "Google Gemini API integrated for AI-powered ticket validation (in progress)",
        "Lottie onboarding animations for better onboarding experience",
        "Dark-mode ready, fully responsive and mobile-first design",
      ],
      github: "https://github.com/Gupta-Aniket/travel-companion",
    },

    // * xylophone app
    {
      id: "flutter-xylophone",
      title: "Xylophone (Flutter Mini Piano App)",
      description:
        "A simple yet engaging Flutter app that simulates a colorful xylophone allowing users to play musical notes by tapping on vibrant keys.",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "Dart",
        "AudioPlayer",
        "UI Design",
        "Music App",
        "Beginners Project",
        "Interactive UI",
      ],
      details: [
        "Color-coded piano keys with rounded corners for a pleasing visual design",
        "Plays 8 musical notes using the audioplayers package",
        "Simple one-screen safe-area layout for mobile-first design",
        "Instant sound playback for interactive learning or casual fun",
        "Lightweight Flutter project with minimal dependencies",
        "One of the most loved projects by my little sister!",
      ],
      github: "https://github.com/Gupta-Aniket/Xylophone-app",
      live: "https://github.com/Gupta-Aniket/Xylophone-app/releases/download/android/xylophone.apk",
    },
  ],
};
export default sharedData;

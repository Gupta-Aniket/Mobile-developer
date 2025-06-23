const sharedData = {
  personalInfo: {
    name: "Aniket",
    title: "Mobile App Developer",
    subtitle:
      "Building exceptional iOS and Android experiences with Flutter, React Native, and modern development practices that users love and businesses rely on.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Gupta-Aniket/" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/work-gupta-aniket/",
      },
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

    // *kabootar
    {
      id: "kabootar",
      title: "WebRTC Pin Based Video-call",
      description:
        "A pin-based video calling app built with WebRTC and Firebase, offering secure, anonymous connections without login or signup.",
      category: "react-native",
      status: "working",
      tags: ["React-Native", "Firebase", "WebRTC", "Video-Call", "Anonymous"],
      details: [
        "Secure, anonymous video calls using a shared PIN (no login/signup)",
        "Leverages WebRTC for direct peer-to-peer connections",
        "Firebase for real-time data synchronization and signaling",
        "Efficient database cleanup to prevent clutter",
        "Utilizes Google's STUN server for robust peer-to-peer setup",
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
      title: "Gemini Chatbot with Advanced UX",
      description:
        "A Gemini AI chatbot designed for enhanced accessibility and a superior user experience, extending beyond the original app's features.",
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
        "Improved accessibility with pinch-to-zoom gestures for text",
        "Ability to share specific chatbot responses directly",
        "Supports image uploads for multimodal conversations",
        "Integrates Google Gen-AI for intelligent responses",
        "Local storage for persistent chat history using Hive",
        "Text-to-Speech (TTS) and Speech-to-Text (STT) for better accessibility",
        "Unique 'water-spent meter' for playful server cooling insights",
      ],
      images: ["gemini/1.png", "gemini/2.png", "gemini/3.png", "gemini/4.png"],
      github: "https://github.com/Gupta-Aniket/Cancer",
      live: "https://github.com/Gupta-Aniket/Cancer/releases/download/android/cancer.gemini.apk",
    },

    // *bmi
    {
      id: "bmi-calculator",
      title: "BMI Calculator App (Flutter)",
      description:
        "A sleek Flutter-based Body Mass Index calculator with intuitive UI/UX for tracking BMI based on gender, height, and weight.",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "BMI",
        "SleekSlider",
        "UI/UX",
        "Dart",
        "State Management",
      ],
      details: [
        "Real-time BMI calculation with gender selection and interactive controls",
        "Provides category-based feedback (Underweight, Normal, Overweight, Obese)",
        "Custom color-coded results with dynamic styling for clear feedback",
        "Utilizes `SleekCircularSlider` for a beautiful progress indicator",
        "Features a clean, component-based architecture for reusability",
        "Robust input validation and error handling for a smooth experience",
        "Implemented with enums and Flutter best practices for state management",
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
        "An Android Flutter application providing instant, AI-powered professional rewrites for messages using the Google Gemini API.",
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
        "Integrates Google Gemini API for real-time professional rewrites",
        "Secure local API key storage using `shared_preferences`",
        "iOS-inspired dark mode UI built with Cupertino widgets",
        "Includes robust error handling for API interactions",
        "Copy-to-clipboard functionality for rewritten text",
        "Simple, single-screen architecture using `setState` for state management",
        "Dedicated API key setup screen with input validation",
      ],
      images: [
        "corporate-mask-app/1.jpg",
        "corporate-mask-app/2.jpg",
        "corporate-mask-app/3.jpg",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/corporate-mask.apk",
    },

    // * corporate-mask-extension
    {
      id: "corporate-mask-extension",
      title: "Corporate Mask (Chrome Extension)",
      description:
        "A browser extension for instant, AI-powered corporate message rewriting, bringing the 'Corporate Mask' functionality to the web.",
      category: "extension",
      status: "working",
      tags: [
        "Chrome Extension",
        "JavaScript",
        "HTML",
        "CSS",
        "Gemini API",
        "Content Scripts",
      ],
      details: [
        "Adds a floating button overlay to editable web fields",
        "Context-sensitive message rewriting via the Gemini API",
        "Utilizes `chrome.storage.local` for secure API key persistence",
        "Separation of concerns with `background.js` and `content.js`",
        "Modal options page for convenient API key management",
        "Minimalist dark UI injected directly into web pages",
        "Supports text fields on any web-based platform",
      ],
      images: [
        "corporate-mask-extension/1.png",
        "corporate-mask-extension/2.png",
        "corporate-mask-extension/3.png",
      ],
      github: "https://github.com/Gupta-Aniket/corporate-mask",
      live: "https://github.com/Gupta-Aniket/corporate-mask/releases/download/android/extension.zip",
    },

    // * file-context
    {
      id: "file-context-generator",
      title: "File Context Generator (Python CLI)",
      description:
        "A Python-based interactive command-line tool for generating comprehensive file contexts from directories, ideal for LLM inputs.",
      category: "utility",
      status: "working",
      tags: [
        "Python",
        "File Scanner",
        "Automation",
        "Context Generator",
        "AI Prompting",
        "CLI Tool",
      ],
      details: [
        "Recursively scans entire directory structures",
        "Supports granular selection of files, folders, or full trees",
        "Includes `all except (...)` logic for flexible inclusion/exclusion",
        "Generates `fileContext.txt` with formatted file headers",
        "Gracefully handles file permission errors during scanning",
        "User-friendly interactive CLI with numeric selection",
        "Automates preparation of AI input contexts or dataset snapshots",
      ],
      // images: ["file-context-generator/1.jpg", "file-context-generator/2.jpg"], // Keeping original for image count
      github: "https://github.com/Gupta-Aniket/file-context",
      // live: "", // No live URL since it's a CLI tool
    },

    // * switch-mode
    {
      id: "workspace-launcher",
      title: "Workspace Launcher (macOS Bash Automation)",
      description:
        "A macOS bash automation script designed to instantly switch between 'Home' and 'Work' coding environments for enhanced productivity.",
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
      ],
      details: [
        "Interactive CLI for seamless 'Work' or 'Home' mode selection",
        "Scans project directories for easy project opening",
        "Automatically hides non-essential applications (e.g., all except Terminal/Finder)",
        "Cleanly closes VS Code before launching new projects",
        "Opens Brave for 'Home' mode and Firefox for 'Work' mode",
        "Launches iOS Simulator post-environment setup",
        "Includes error handling for missing folders or invalid inputs",
      ],
      github: "https://github.com/Gupta-Aniket/switch_mode",
    },

    //* dream space
    {
      id: "dream-space",
      title: "DreamSpace — Mood & Dream Tracker",
      description:
        "A modern mobile app for logging dreams and moods with persistent authentication, real-time analytics, and a visually immersive observatory.",
      category: "react-native",
      status: "working",
      tags: [
        "React Native",
        "Expo Router",
        "Firebase",
        "Realtime Database",
        "Auth Persistence",
        "Analytics",
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
        "Persistent user authentication via Firebase Auth and AsyncStorage",
        "Real-time logging of moods and dreams with detailed input",
        "Comprehensive monthly analytics: pie charts, line charts, mood trends",
        "Observatory view for Browse historical dream logs with a card-based UI",
        "Responsive dark UI design optimized for mobile-first experience",
        "Firebase Realtime Database secured with per-user access rules",
        "Automated session restoration on app relaunch for seamless experience",
      ],
      github: "https://github.com/Gupta-Aniket/dream-space",
    },

    // * youtube-downloader-cli
    {
      id: "youtube-downloader-cli",
      title: "YouTube Downloader (Python CLI Utility)",
      description:
        "A command-line utility in Python, using Pytube, to download YouTube videos and playlists in the highest available resolution.",
      category: "utility",
      status: "deprecated",
      tags: ["Python", "Pytube", "YouTube", "CLI", "Downloader", "Scripting"],
      details: [
        "CLI for downloading single videos or entire playlists",
        "Automatically fetches the highest resolution stream available",
        "Organizes downloads into separate folders for each playlist",
        "Includes error handling for YouTube connection issues",
        "Lightweight Python script with no external UI dependencies",
        "Utilizes the Pytube library for video extraction",
        "Currently deprecated due to frequent YouTube API changes breaking `Pytube`",
      ],
      github: "https://github.com/Gupta-Aniket/Youtube-playlist-downloader",
    },

    // * travel-companion
    {
      id: "travel-companion",
      title: "Travel Companion (React Native Ticket Organizer)",
      description:
        "An ongoing mobile utility app for organizing travel tickets, generating dynamic forms, managing trips, and exploring travel analytics.",
      category: "react-native",
      status: "ongoing",
      tags: [
        "React Native",
        "Supabase",
        "Firebase",
        "OTP Auth",
        "Parallax UI",
        "Dynamic Forms",
      ],
      images: [
        "travel-companion/1.jpg",
        "travel-companion/2.jpg",
        "travel-companion/3.jpg",
        "travel-companion/4.jpg",
      ],
      details: [
        "Simulated OTP-based user authentication (extendable)",
        "Organizes tickets for various transportation modes (flights, trains, buses)",
        "Dynamic forms for entering type-specific ticket details",
        "Supports managing multiple passengers and seat assignments",
        "Real-time UI with Parallax Scroll, Bottom Sheets, and Custom FAB",
        "Data persistence powered by Supabase for backend storage",
        "Integrates Unsplash API for location-based image exploration",
        "Includes Lottie animations for an improved onboarding experience",
      ],
      github: "https://github.com/Gupta-Aniket/travel-companion",
    },

    // * xylophone app
    {
      id: "flutter-xylophone",
      title: "Xylophone (Flutter Mini Piano App)",
      description:
        "A simple, engaging Flutter app simulating a colorful xylophone, allowing users to play musical notes by tapping vibrant keys.",
      category: "flutter",
      status: "working",
      tags: [
        "Flutter",
        "Dart",
        "AudioPlayer",
        "UI Design",
        "Music App",
        "Interactive UI",
      ],
      details: [
        "Color-coded piano keys with rounded corners for visual appeal",
        "Plays 8 distinct musical notes using the `audioplayers` package",
        "Simple, one-screen `SafeArea` layout for mobile-first design",
        "Provides instant sound playback for interactive fun",
        "Lightweight Flutter project with minimal dependencies",
        "A beloved project, especially enjoyed by my younger sister!",
      ],
      github: "https://github.com/Gupta-Aniket/Xylophone-app",
      live: "https://github.com/Gupta-Aniket/Xylophone-app/releases/download/android/xylophone.apk",
    },
  ],
};
export default sharedData;

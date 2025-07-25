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
      phone: "+91 8319906162",
      resume:
        "https://drive.google.com/uc?export=download&id=1R5J3xVJJfHgzsf7KzFWopaorKfpB_N2R",
    },
  },

  projectData: [
    //    "live"
    //    "ongoing"
    //    "deprecated";

    // *kabootar
    {
      id: "kabootar",
      title: "WebRTC Pin Based Video-call",
      description:
        "A pin-based video calling app built with WebRTC and Firebase, offering secure, anonymous connections without login or signup.",
      category: "react-native",
      status: "live",
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

    // * corporate-mask-app
    {
      id: "corporate-mask-app",
      title: "Corporate Mask (Flutter App)",
      description:
        "An Android Flutter application providing instant, AI-powered professional rewrites for messages using the Google Gemini API.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
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
     // * jobtrail
    {
      id: "job-trail-chrome-extension",
      title: "JobTrail (Job Search Automation Chrome Extension)",
      description:
        "A Chrome extension that scans webpages for job-related opportunities, injects actionable links, and enhances search inputs with customizable quick-search buttons for faster job discovery.",
      category: "extension",
      status: "live",
      tags: [
        "Chrome Extension",
        "Content Script",
        "MutationObserver",
        "Job Search Ease",
        "JavaScript",
        "Fuse.js",
        "Dynamic DOM Injection",
      ],
      images: ["jobtrail/1.png"],

      details: [
        "Injects a floating overlay panel with job search tools into any webpage",
        "Uses Fuse.js for fuzzy keyword matching to detect job-related links",
        "Scans all clickable elements for job-related text content",
        "Dynamically injects search term buttons into detected search inputs",
        "Works seamlessly with dynamic websites using MutationObserver",
        "Fully isolated UI via Shadow DOM to prevent style conflicts",
        "Chrome storage integration to allow users to customize search terms",
      ],
      github: "https://github.com/Gupta-Aniket/job-trail",
      live: "https://github.com/Gupta-Aniket/job-trail/releases/download/Extension/job-trail.zip",
    },

    // * kundali-crypt
    {
      id: "kundali-lock",
      title: "Kundali Lock (Vault App with Astro-Based Pattern Unlock)",
      description:
        "A secure Flutter app that combines Vedic astrology with AES-encrypted vault storage. Users unlock their vault using a unique planetary pattern based on their birth chart. Features include honeypot mode, dynamic UI themes, and birth chart generation.",
      category: ["flutter", "encryption"],
      status: "live", // e.g. "live" or "in-development"
      tags: [
        "Flutter",
        "Dart",
        "Astrology",
        "Kundali",
        "Vault",
        "AES Encryption",
        "Pattern Unlock",
        "Vedic System",
        "Provider",
        "SharedPreferences",
      ],
      images: [
        "kundali-crypt/1.jpeg",
        "kundali-crypt/2.5.jpeg",
        "kundali-crypt/2.jpeg",
        "kundali-crypt/3.jpeg",
        "kundali-crypt/4.5.jpeg",
        "kundali-crypt/5.jpeg",
        "kundali-crypt/6.jpeg",
      ],
      videoLinks: [], // e.g. ["https://youtu.be/..."]
      details: [
        "Users input birth data (date, time, location) to generate a Vedic kundali using sidereal astrology.",
        "Birth chart includes planetary positions, ascendant, and nakshatra.",
        "Vault is locked using a pattern of planets (Moon → Mars → Saturn → Ketu) [fixed for now]",
        "AES key is derived from deterministic segments of planetary data + fixed pepper string.",
        "Includes honeypot vault mode that triggers if the wrong pattern is entered.",
        "Secure items can be stored in the vault as notes, passwords, files, or images.",
        "Pattern and data are persisted locally using SharedPreferences.",
        "Built with modular architecture (controllers/models/services/views) and state managed via Provider.",
        "Includes animated UI for pattern drawing, vault item listing, and kundali display.",
        "Hidden gestures (long press, triple tap) trigger access transitions between modes.",
      ],
      github: "https://github.com/Gupta-Aniket/kundali-crypt",
      live: "https://github.com/Gupta-Aniket/kundali-crypt/releases/download/Android/app-release.apk",
    },

    // *slate
    {
      id: "slate-todo-app",
      title: "Slate (Minimalist Offline ToDo App)",
      description:
        "Slate is a focused, offline-first ToDo list app built with Flutter — fast, clean, and distraction-free. No login, no clutter — just simple task management with swipe-to-delete, dark mode, and instant state persistence.",
      category: "flutter",
      status: "live",
      tags: [
        "Flutter",
        "Provider",
        "Offline First",
        "Task Manager",
        "Minimal UI",
        "Dark Theme",
        "State Management",
      ],
      images: ["slate/1.png", "slate/2.png", "slate/3.png"], // replace with real paths
      videoLinks: [],
      details: [
        "Built with Flutter and Provider for state management",
        "Offline-first architecture with no backend dependency",
        "Swipe to delete tasks with smooth animations",
        "Dark mode support with clean minimalist design",
        "No sign-in or setup required — open and use instantly",
        "Designed for simplicity and focus in daily task management",
      ],
      github: "https://github.com/Gupta-Aniket/ToDo-List", // replace later
      live: "https://github.com/Gupta-Aniket/ToDo-List/releases/download/Android/slate.apk", // replace if approved
    },

    // * promoten
    {
      id: "project-sharer",
      title: "Project Sharer (Gemini-powered Shareable Content Generator)",
      description:
        "A sleek Flutter app that helps developers instantly generate platform-specific shareable content for their projects using the Gemini API. Includes token tracking, offline-first form flow, image uploads, and a beautiful UI.",
      category: ["flutter", "gen-ai"],
      status: "live",
      tags: [
        "Flutter",
        "Dart",
        "Gemini API",
        "GetX",
        "Shared Preferences",
        "AI Content Generation",
        "Shareable Posts",
        "Platform-Specific Output",
      ],

      videoLinks: ["https://youtu.be/eAcLKQD8AXU"],

      details: [
        "Generated content stays there until you quit or enter a new project, to make sure that app resets dont cut off the sharing",
        "User provides basic project data like title, description, GitHub, live link, and optional social URLs",
        "User answers questions via a smooth, paginated form interface",
        "Token usage is recorded and shown to the user from the first setup screen",
        "Token count is persisted using SharedPreferences and resets monthly",
        "Multi-step GetX navigation (Input → Clarifying Qs → Generated Results)",
        "Content is streamed for each selected platform in markdown-like format",
        "Results are shown in horizontally scrollable cards per platform",
        "Includes reset API key functionality to wipe config and restart setup",
        "Built with modular MVC architecture: clean controller/view separation",
        "Supports 7+ platforms: LinkedIn, X, GitHub, Reddit, Hacker News, Discord, Hashnode",
      ],
      github: "https://github.com/Gupta-Aniket/promoten/",
      live: "https://github.com/Gupta-Aniket/promoten/releases/download/android2/promoten.apk",
    },

    // *websocket chat app
    {
      id: "group-chat-socket-app",
      title: "WebSocket Chat app",
      description:
        "A realtime group chat system powered by a custom Node.js backend using WebSockets (socket.io), with both terminal and React Native interfaces. Lightweight, minimal, and demonstrates the power of unified connection handling across platforms.",
      category: ["React-Native"],
      status: "live",
      tags: [
        "React Native",
        "Node.js",
        "Socket.io",
        "WebSocket",
        "Group Chat",
        "Terminal App",
        "Realtime Communication",
        "Custom Backend",
      ],
      // images: ["group-chat/1.jpg", "group-chat/2.jpg"],
      videoLinks: ["https://youtu.be/gEgVYEn6UiE"],
      details: [
        "Built with React Native frontend and a custom Node.js backend",
        "Uses socket.io to establish real-time communication between all clients",
        "Users connect to a shared group chat room without authentication",
        "Also supports terminal-based chatting using Node.js CLI interface",
        "Stores the latest 20 messages in memory for context on join",
        "Perfect demo for fullstack WebSocket architecture across platforms",
      ],
      github: "https://github.com/your-username/group-chat-socket", // replace later
      live: "", // leave empty or add future deployment link
    },

    // * corporate-mask-extension
    {
      id: "corporate-mask-extension",
      title: "Corporate Mask (Chrome Extension)",
      description:
        "A browser extension for instant, AI-powered corporate message rewriting, bringing the 'Corporate Mask' functionality to the web.",
      category: ["extension", "Gen-Ai"],
      status: "live",
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
    // * gemini chatbot
    {
      id: "cancer",
      title: "Gemini Chatbot with Advanced UX",
      description:
        "A Gemini AI chatbot designed for enhanced accessibility and a superior user experience, extending beyond the original app's features.",
      category: ["flutter", "Gen-Ai"],
      status: "live",
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
      status: "live",
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

    // * file-context
    {
      id: "file-context-generator",
      title: "File Context Generator (Python CLI)",
      description:
        "A Python-based interactive command-line tool for generating comprehensive file contexts from directories, ideal for LLM inputs.",
      category: ["python", "utility"],
      status: "live",
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
      category: ["automation", "utility"],
      status: "live",
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
      status: "live",
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
      category: ["python", "utility"],
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
      category: ["react-native", "Gen-Ai"],
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
      status: "live",
      tags: [
        "Flutter",
        "Dart",
        "AudioPlayer",
        "UI Design",
        "Music App",
        "Interactive UI",
      ],
      images: ["xylophone/1.jpg"],
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

/**
 * ==============================================================================
 * VIKRAM GUDIHAL - PORTFOLIO DATA HUB
 * ==============================================================================
 * This file is designed for EASY DAILY UPDATES!
 * Whenever you want to add a new project, daily log/status, certificate, or skill,
 * simply edit or add an entry in this file. The entire website will update automatically!
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  dataVersion: 12,
  // Personal & Bio Information
  personal: {
    name: "Vikram Gudihal",
    firstName: "Vikram",
    lastName: "Gudihal",
    headline: "Cybersecurity & SOC Analyst (L1) | Front-End Developer",
    roles: [
      "SOC Analyst (L1)",
      "Cybersecurity Analyst",
      "Front-End Developer",
      "Network Defense Specialist"
    ],
    status: {
      isAvailable: false,
      text: "",
      location: "Hubli-Dharwad, Karnataka, India"
    },
    bio: [
      "Hi! I'm Vikram Gudihal, a cybersecurity enthusiast and frontend developer focused on SOC (Security Operations Center) Level 1 analysis, proactive threat detection, and modern, high-performance web engineering.",
      "Currently pursuing Master of Computer Applications (MCA 2025–2027) at Chetan Business School, Hubli. Graduated with a Bachelor of Computer Applications (BCA) with an 8.46 CGPA. I combine security awareness, network fundamentals, and clean interface development to build secure digital experiences."
    ],
    avatar: "./imgs/mypic2.jpg",
    aboutAvatar: "./imgs/mypic.png",
    resumeUrl: "./vikram-G.pdf",
    resumeFilename: "Vikram_Gudihal_CV.pdf",
    contact: {
      email: "vikramgudihal@gmail.com",
      whatsappUrl: "https://wa.me/917022367376",
      location: "Hubli-Dharwad, Karnataka, India",
      formSubmitEndpoint: "https://formsubmit.co/ajax/vikramgudihal@gmail.com"
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/student-vG",
        icon: "fa-brands fa-github",
        color: "#f0f6fc"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vikramgudihal",
        icon: "fa-brands fa-linkedin-in",
        color: "#0a66c2"
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/917022367376",
        icon: "fa-brands fa-whatsapp",
        color: "#25d366"
      }
    ]
  },

  // Key Fact Highlights displayed in Portfolio
  stats: [
    { label: "MCA Program", value: "2025–27", icon: "fa-solid fa-graduation-cap" },
    { label: "BCA Score", value: "8.46", icon: "fa-solid fa-award", unit: "CGPA" },
    { label: "Web Projects", value: "9+", icon: "fa-solid fa-layer-group" },
    { label: "Certifications", value: "16+", icon: "fa-solid fa-certificate" }
  ],

  /**
   * ============================================================================
   * 🌟 DAILY UPDATES & ACTIVITY LOG
   * ============================================================================
   * Easily add your daily/weekly progress, what you are building, or announcements!
   * Just copy-paste a block and put today's date:
   */
  dailyUpdates: [
    {
      date: "26th Oct 2026",
      badge: "Redesign",
      title: "Portfolio 2.0 with Dark Theme & Interactive Photo Switcher",
      description: "Updated portfolio with clean typography, responsive project views, verified certificates, and direct contact options.",
      linkText: "Explore Projects",
      linkUrl: "#projects"
    },
    {
      date: "Recent",
      badge: "Learning & Practice",
      title: "Cyber Security Practical Tasks & System Hardening",
      description: "Engaged in hands-on tasks focusing on web security principles, secure forms, OWASP awareness, and responsive privacy tools.",
      linkText: "View SheSecure Project",
      linkUrl: "https://vg-shesecure.netlify.app/"
    },
    {
      date: "Jun 2025",
      badge: "Milestone",
      title: "Completed Web Development Internship at Grow Rank Info",
      description: "Successfully delivered client-oriented modules, UI refinements, and responsive layouts during intensive internship training.",
      linkText: "View Certificate",
      linkUrl: "#certificates"
    }
  ],

  /**
   * ============================================================================
   * 🚀 PROJECTS SHOWCASE
   * ============================================================================
   * Categories: "all" (default), "webapp", "tool", "clone", "design"
   * Adding a project here automatically adds its card and interactive details modal!
   */
  projects: [
    {
      id: "securepass",
      title: "SecurePass",
      category: "tool",
      badge: "Cybersecurity & Password Tool",
      tagline: "Privacy-focused password security analyzer with entropy & dictionary vulnerability detection.",
      description: "A privacy-focused password strength checker that evaluates length, character variety, common dictionary words, repeated characters, and predictable sequences with actionable feedback.",
      image: "./imgs/securepass-img.png",
      liveUrl: "https://passwordstrengthchecker-securepass.vercel.app/",
      tags: ["Python", "HTML5", "CSS3", "JavaScript", "Unit Testing", "Privacy-first"],
      featured: true
    },
    {
      id: "phishguard",
      title: "Phishing Awareness Analyzer",
      category: "tool",
      badge: "SOC Threat Analysis Tool",
      tagline: "Flask-based security tool reviewing emails and URLs for heuristic risk scoring.",
      description: "A Flask-based learning tool designed to review synthetic or sanitized emails and URLs, explain suspicious signals, and present a heuristic risk score with a false-positive disclaimer.",
      image: "./imgs/phishguard-img.png",
      liveUrl: "https://phishguard-threat-analyzer.vercel.app/",
      tags: ["Python Flask", "HTML5", "CSS3", "JavaScript", "Heuristics", "Threat Intelligence"],
      featured: true
    },
    {
      id: "placementcell",
      title: "Placement Cell Management System",
      category: "webapp",
      badge: "Enterprise Web App / PWA",
      tagline: "College-focused placement drive & recruiter management platform with RBAC.",
      description: "A college-focused platform concept for managing placement opportunities, announcements, role-based access, approvals, and student information with a progressive web app approach.",
      image: "./imgs/placementcell-img.png",
      tags: ["Flask", "MongoDB Atlas", "PWA", "Role-based access", "Full-Stack"],
      featured: true
    },
    {
      id: "gitvora",
      title: "GitVora",
      category: "webapp",
      badge: "Developer Learning Platform",
      tagline: "Interactive Git & GitHub workflow learning platform with PWA concepts.",
      description: "A Git and GitHub learning resource project focused on helping learners navigate version control concepts and workflows through structured, beginner-friendly content.",
      image: "./imgs/gitvora-img.png",
      liveUrl: "https://gitvoramaster.vercel.app/",
      tags: ["Git", "GitHub", "PWA concepts", "Documentation", "JavaScript"],
      featured: true
    },
    {
      id: "solarguard",
      title: "SolarGuard",
      category: "tool",
      badge: "Machine Learning & Telemetry",
      tagline: "Applied ML solar telemetry and environmental anomaly detection dashboard.",
      description: "An academic ML project exploring solar-panel performance and anomaly detection by comparing expected and actual generation using solar and environmental data.",
      image: "./imgs/solarguard-img.png",
      tags: ["Python", "Machine Learning", "Data Preprocessing", "Evaluation"],
      featured: true
    },
    {
      id: "codemat",
      title: "codeMat",
      category: "webapp",
      badge: "Learning Platform",
      tagline: "Free educational coding platform for learners breaking economic barriers.",
      description: "An open learning portal designed to help aspiring coders access structured materials, responsive modules, and guided concepts to embark on tech journeys without cost hurdles.",
      image: "./imgs/codemat-img.png",
      liveUrl: "https://vg-codemat.netlify.app/",
      githubUrl: "https://github.com/student-vG",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "EdTech"],
      features: [
        "Curated interactive coding roadmaps and resource hub",
        "Community oriented design for accessibility",
        "Fluid responsiveness across desktop, tablet, and mobile",
        "Clean navigation and categorized lesson views"
      ],
      featured: true
    },
    {
      id: "pfdbook",
      title: "PFD Book (Personal Financial Diary)",
      category: "webapp",
      badge: "Financial Web App",
      tagline: "Local storage driven financial tracker with live balance calculations.",
      description: "An intuitive web application allowing individuals to log income, track expenses, calculate live running balances, and export transaction data directly from local storage.",
      image: "./imgs/pfdbook-img.png",
      liveUrl: "https://vg-pfdbook.netlify.app",
      githubUrl: "https://github.com/student-vG",
      tags: ["JavaScript", "Local Storage", "CSS3", "Finance", "Data Export"],
      features: [
        "Real-time expense and income accounting balance",
        "Downloadable / Exportable transaction logs",
        "Persistent offline storage using browser LocalStorage",
        "Quick search and category filtering for past entries"
      ],
      featured: true
    },
    {
      id: "shesecure",
      title: "SheSecure",
      category: "webapp",
      badge: "Cyber Safety & Security",
      tagline: "Safety awareness portal and emergency assistance web concept for women.",
      description: "A digital security application addressing physical safety and online cyber defense, featuring emergency alerts, scam guidance, and trusted helpline directories.",
      image: "./imgs/shesecure-img.png",
      liveUrl: "https://vg-shesecure.netlify.app/",
      githubUrl: "https://github.com/student-vG",
      tags: ["Cyber Security", "UI/UX", "JavaScript", "Emergency Tool"],
      features: [
        "Quick-access SOS emergency layout",
        "Cyber threat protection guides & response playbooks",
        "Curated emergency helpline numbers & location assistance",
        "High-contrast, mobile-first emergency UX"
      ],
      featured: true
    },
    {
      id: "codegradientmagic",
      title: "code-GradientMagic",
      category: "tool",
      badge: "Developer Tool",
      tagline: "Interactive CSS gradient generator with real-time visual sandbox.",
      description: "A fast utility tool for designers and front-end devs to blend colors, adjust angles, test linear & radial gradients, and copy production-ready CSS with one click.",
      image: "./imgs/codegradientmagic-img.png",
      liveUrl: "https://codemat-gradientmagic.netlify.app/",
      githubUrl: "https://github.com/student-vG",
      tags: ["CSS3 Generator", "Color Tool", "JavaScript", "Dev Utility"],
      features: [
        "Live real-time gradient canvas preview",
        "Angle, color-stop, and multi-color palette adjustment",
        "Instant one-click CSS code copy to clipboard",
        "Curated preset gradients for inspiration"
      ],
      featured: true
    },
    {
      id: "javascriptcheatsheet",
      title: "JavaScript Cheatsheet",
      category: "tool",
      badge: "Developer Reference",
      tagline: "Comprehensive quick-reference guide for modern JavaScript methods.",
      description: "An organized, interactive cheat sheet documenting ES6+ features, array methods, DOM manipulation, promises, and string algorithms with runnable code snippets.",
      image: "./imgs/javascriptcheatsheet-img.png",
      liveUrl: "https://vg-jscheatsheet.netlify.app",
      githubUrl: "https://github.com/student-vG",
      tags: ["JavaScript ES6+", "Documentation", "Frontend", "Cheatsheet"],
      features: [
        "Searchable categories for arrays, objects, functions, and async JS",
        "Syntax-highlighted code samples",
        "Instant snippet copy buttons",
        "Mobile optimized reading layout"
      ],
      featured: true
    },
    {
      id: "brockway",
      title: "Brockway Business School",
      category: "webapp",
      badge: "Academic Portal",
      tagline: "Comprehensive institutional website for campus admissions and courses.",
      description: "A feature-rich academic portal designed for college students and faculty, featuring course curriculums, scholarship guidance, event schedules, and admissions inquiries.",
      image: "./imgs/brockway-img.png",
      liveUrl: "https://chetancollegeofcom4.wixsite.com/brockwaycollege",
      githubUrl: "https://github.com/student-vG",
      tags: ["Wix", "Web Design", "Education", "CMS", "Admissions"],
      features: [
        "Complete department and curriculum listings",
        "Online student inquiry and admission forms",
        "Scholarship and campus activities announcements",
        "Clean, reputable academic aesthetic"
      ],
      featured: false
    },
    {
      id: "amazonclone",
      title: "Amazon.in Static Clone",
      category: "clone",
      badge: "E-Commerce Clone",
      tagline: "Faithful front-end replica of Amazon India's desktop & mobile portal.",
      description: "A detailed front-end study replicating Amazon's complex navigation bar, deals carousel, product grid layout, shopping cart UI, and authentic promotional banners.",
      image: "./imgs/amazon.inclone-img.png",
      liveUrl: "https://vg-amazonclone.netlify.app",
      githubUrl: "https://github.com/student-vG",
      tags: ["HTML5", "CSS3 Flexbox/Grid", "Responsive UI", "E-Commerce"],
      features: [
        "Complex multi-level header with location, language & cart icons",
        "Multi-product promotional showcase grid",
        "Responsive styling mimicking actual Amazon look & feel",
        "Optimized asset loading"
      ],
      featured: false
    },
    {
      id: "firstcalc",
      title: "Interactive Web Calculator",
      category: "tool",
      badge: "Web Tool",
      tagline: "Responsive arithmetic calculator with smooth keypad feedback.",
      description: "A fast, responsive web calculator built with clean JavaScript logic, handling compound operations, decimals, keyboard entries, and error handling.",
      image: "./imgs/firstcalc-img.png",
      liveUrl: "https://student-vg.github.io/Project_Calculator-/",
      githubUrl: "https://github.com/student-vG/Project_Calculator-",
      tags: ["JavaScript Logic", "CSS3 Grid", "UI Feedback"],
      features: [
        "Arithmetic operations and chained calculations",
        "Responsive touch-friendly button layout",
        "Keypress and screen click event listeners",
        "Zero-state and division by zero protection"
      ],
      featured: false
    },
    {
      id: "firstportfolio",
      title: "First Portfolio v1.0",
      category: "design",
      badge: "Personal Showcase",
      tagline: "The original personal portfolio that marked the beginning of the journey.",
      description: "The initial portfolio website constructed from scratch to demonstrate early web development proficiency, layout techniques, and animation experimentation.",
      image: "./imgs/firstportfolio-img.png",
      liveUrl: "https://vg-myportfolio.netlify.app/",
      githubUrl: "https://github.com/student-vG",
      tags: ["HTML5", "CSS3", "JavaScript", "Animation"],
      features: [
        "Early project gallery and skill progress bars",
        "Theme toggling experiment",
        "Contact form layout",
        "Smooth scroll navigation"
      ],
      featured: false
    }
  ],

  /**
   * ============================================================================
   * 📜 CERTIFICATIONS VAULT
   * ============================================================================
   */
  certificates: [
    {
      id: "cet17",
      title: "🏆 Tech Escape Room: \"Unlock the System\" (Winner)",
      issuer: "Chetan Business School • CodeCrafters",
      date: "Oct 2026",
      image: "./imgs/cet17.png",
      badge: "Winner Award",
      description: "Secured Winner position in the TECH ESCAPE ROOM 'Unlock the System' challenge organized by CodeCrafters at Chetan Business School, Hubli (October 24, 2026)."
    },
    {
      id: "cet15",
      title: "🏆 HackLite-2026 Winner (Full-Stack Dev)",
      issuer: "Chetan Business School • CodeCrafters Club",
      date: "Jan 2026",
      image: "./imgs/cet15.png",
      badge: "Hackathon Winner",
      description: "Secured Winner position in HackLite-2026 24-hour hackathon for outstanding problem-solving, technical excellence, and full-stack development."
    },
    {
      id: "cet14",
      title: "Microsoft Azure (25-Hour Course Completion)",
      issuer: "Microsoft Learn & FICE",
      date: "Jan 2026",
      image: "./imgs/cet14.png",
      badge: "Cloud Computing",
      description: "Comprehensive 25-hour course on Microsoft Azure cloud infrastructure, services, security, and deployments."
    },
    {
      id: "cet9",
      title: "SOC Analyst Career Demand in 2026",
      issuer: "WsCube Tech",
      date: "Aug 2026",
      image: "./imgs/cet9.png",
      badge: "Cyber Security",
      description: "Security Operations Center fundamentals, threat detection, SIEM workflows, and incident triage."
    },
    {
      id: "cet10",
      title: "Spark Tank Startup Pitch (CampusHub)",
      issuer: "Chetan Business School",
      date: "2026",
      image: "./imgs/cet10.png",
      badge: "Innovation",
      description: "Product pitch & startup competition for the CampusHub centralized university ecosystem."
    },
    {
      id: "cet11",
      title: "Career in DevOps, Cloud Computing & Cyber Security",
      issuer: "Scaler Masterclass",
      date: "Jun 2026",
      image: "./imgs/cet11.png",
      badge: "DevOps & Cloud",
      description: "CI/CD pipelines, container orchestration, cloud security posture, and infrastructure scalability."
    },
    {
      id: "cet12",
      title: "HackLite 2.0 (24-Hour Web Dev Hackathon)",
      issuer: "Chetan Business School",
      date: "2026",
      image: "./imgs/cet12.png",
      badge: "Hackathon",
      description: "24-hour rapid product prototyping, full-stack implementation, and competitive live judging."
    },
    {
      id: "cet13",
      title: "National Level Tech Connect 2026 (Power BI)",
      issuer: "Chetan Business School",
      date: "Mar 2026",
      image: "./imgs/cet13.png",
      badge: "Data Analytics",
      description: "Data visualization, DAX calculations, interactive reporting, and business intelligence dashboards."
    },
    {
      id: "cet1",
      title: "Web Development Internship Completion",
      issuer: "Grow Rank Info Pvt Ltd",
      date: "Jun 2025",
      image: "./imgs/cet1.png",
      badge: "Internship",
      description: "Successful completion of hands-on industry internship in front-end web development and live project workflows."
    },
    {
      id: "cet16",
      title: "Build a Free Website with WordPress",
      issuer: "Coursera Project Network",
      date: "Jul 2025",
      image: "./imgs/cet16.png",
      badge: "Web CMS",
      description: "Hands-on guided project building and configuring responsive websites using WordPress."
    },
    {
      id: "cet2",
      title: "Java Programming",
      issuer: "Great Learning Academy",
      date: "Nov 2023",
      image: "./imgs/cet2.png",
      badge: "Programming",
      description: "Core syntax, data types, control flow, functions, and memory handling in Java."
    },
    {
      id: "cet3",
      title: "OOPs in Java",
      issuer: "Great Learning Academy",
      date: "Oct 2023",
      image: "./imgs/cet3.png",
      badge: "Object-Oriented",
      description: "Classes, objects, polymorphism, inheritance, encapsulation, and abstraction."
    },
    {
      id: "cet4",
      title: "Web Development Fundamentals",
      issuer: "Great Learning Academy",
      date: "Aug 2022",
      image: "./imgs/cet4.png",
      badge: "Web Dev",
      description: "Comprehensive foundation in HTML5 semantic structure, CSS styling, and responsive web pages."
    },
    {
      id: "cet5",
      title: "Data Structures in C",
      issuer: "Great Learning Academy",
      date: "Aug 2022",
      image: "./imgs/cet5.png",
      badge: "Computer Science",
      description: "Arrays, stacks, queues, linked lists, and basic algorithm complexity analysis."
    },
    {
      id: "cet6",
      title: "Digital Literacy Course",
      issuer: "KEONICS Yuva.Com",
      date: "Jun 2022",
      image: "./imgs/cet6.png",
      badge: "Certification",
      description: "Comprehensive computer operations, operating systems, and digital workplace essentials."
    },
    {
      id: "cet7",
      title: "C for Beginners",
      issuer: "Great Learning Academy",
      date: "Oct 2022",
      image: "./imgs/cet7.png",
      badge: "Programming",
      description: "Foundational programming constructs, pointers, functions, and memory management."
    },
    {
      id: "cet8",
      title: "Cyber Security: Basics, Case Studies & Research",
      issuer: "A2Z EduLearningHub",
      date: "Nov 2022",
      image: "./imgs/cet8.png",
      badge: "Security",
      description: "Network vulnerabilities, malware types, data defense tactics, and ethical security methodologies."
    }
  ],

  /**
   * ============================================================================
   * 🛠️ SKILLS MATRIX & PROFICIENCY
   * ============================================================================
   */
  skills: [
    {
      id: "cybersecurity-soc",
      category: "Cybersecurity & SOC Operations",
      shortName: "Cybersecurity & SOC",
      badge: "Core Focus • L1 Ready",
      icon: "fa-solid fa-shield-halved",
      color: "#38bdf8",
      featured: true,
      description: "Hands-on monitoring, event triage, Kali Linux hardening, and network protocol defense.",
      items: [
        { 
          name: "SOC Monitoring & Triage", 
          sub: "SIEM Logs • Alert Handling (L1)",
          icon: "fa-solid fa-shield-virus", 
          color: "#38bdf8",
          level: 85,
          tags: ["SIEM Logs", "Event Triage", "Alert Analysis"]
        },
        { 
          name: "Network Security & Protocols", 
          sub: "TCP/IP • DNS • Traffic Inspection",
          icon: "fa-solid fa-network-wired", 
          color: "#818cf8",
          level: 82,
          tags: ["TCP/IP", "DNS / HTTP(S)", "Traffic Inspection"]
        },
        { 
          name: "Linux / Kali Linux Security", 
          sub: "CLI Admin • Permissions • Hardening",
          icon: "fa-brands fa-linux", 
          color: "#f59e0b",
          level: 85,
          tags: ["CLI Admin", "Permissions", "Security Tools"]
        },
        { 
          name: "OWASP Top 10 Web Defense", 
          sub: "XSS & SQLi Defense • Sanitization",
          icon: "fa-solid fa-lock", 
          color: "#10b981",
          level: 80,
          tags: ["XSS & SQLi", "CSRF Defense", "Sanitization"]
        },
        { 
          name: "Vulnerability Scanning", 
          sub: "Nmap Scans • Wireshark Audits",
          icon: "fa-solid fa-magnifying-glass", 
          color: "#ec4899",
          level: 78,
          tags: ["Packet Capture", "Port Auditing", "Network Scans"]
        }
      ]
    },
    {
      id: "frontend-ui",
      category: "Frontend Development",
      shortName: "Frontend Engineering",
      badge: "Modern Web • Clean UI",
      icon: "fa-solid fa-code",
      color: "#06b6d4",
      featured: false,
      description: "Crafting fast, accessible, responsive interfaces using modern CSS layouts and vanilla JavaScript.",
      items: [
        { 
          name: "HTML5", 
          sub: "Semantic Elements • Web Accessibility",
          icon: "fa-brands fa-html5", 
          color: "#e34f26",
          level: 98,
          tags: ["Semantic HTML", "Accessibility", "SEO Best Practices"]
        },
        { 
          name: "CSS3", 
          sub: "Flexbox • CSS Grid • Micro-Animations",
          icon: "fa-brands fa-css3-alt", 
          color: "#1572b6",
          level: 95,
          tags: ["Flexbox & Grid", "Variables", "Micro-Animations"]
        },
        { 
          name: "JavaScript", 
          sub: "DOM Manipulation • Async Fetch • Events",
          icon: "fa-brands fa-js", 
          color: "#f7df1e",
          level: 75,
          tags: ["DOM Logic", "Async / Fetch", "Event Handling"]
        },
        { 
          name: "Responsive Design", 
          sub: "Mobile-First • Fluid UI • Cross-Browser",
          icon: "fa-solid fa-mobile-screen-button", 
          color: "#38bdf8",
          level: 90,
          tags: ["Mobile-First", "Fluid Layouts", "Cross-Browser"]
        },
        { 
          name: "UI/UX & Wireframing", 
          sub: "Visual Hierarchy • Component Flow",
          icon: "fa-solid fa-pen-ruler", 
          color: "#a855f7",
          level: 82,
          tags: ["Visual Hierarchy", "Prototyping", "Clean Spacing"]
        }
      ]
    },
    {
      id: "backend-databases",
      category: "Backend & Databases",
      shortName: "Backend & Data",
      badge: "Data & Systems",
      icon: "fa-solid fa-server",
      color: "#8b5cf6",
      featured: false,
      description: "Scripting, relational database schemas, cloud data storage, and backend handlers.",
      items: [
        { 
          name: "Python", 
          sub: "Automation • Security Scripts • Parsing",
          icon: "fa-brands fa-python", 
          color: "#3776ab",
          level: 75,
          tags: ["Security Scripts", "Automation", "Data Parsing"]
        },
        { 
          name: "MySQL", 
          sub: "Relational Schemas • CRUD • Queries",
          icon: "fa-solid fa-database", 
          color: "#4479a1",
          level: 80,
          tags: ["Relational Schema", "CRUD Queries", "Data Integrity"]
        },
        { 
          name: "Firebase", 
          sub: "Realtime DB • User Auth • Hosting",
          icon: "fa-solid fa-fire-flame-curved", 
          color: "#ffca28",
          level: 72,
          tags: ["Realtime DB", "Authentication", "Hosting"]
        },
        { 
          name: "PHP", 
          sub: "Server-Side Handlers • Form Validation",
          icon: "fa-brands fa-php", 
          color: "#777bb4",
          level: 68,
          tags: ["Server Handlers", "Form Processing", "DB Link"]
        },
        { 
          name: "Java", 
          sub: "OOP Architecture • Foundational Logic",
          icon: "fa-brands fa-java", 
          color: "#ea2d2e",
          level: 65,
          tags: ["OOP Principles", "Methods & Classes", "Logic"]
        }
      ]
    },
    {
      id: "tools-environment",
      category: "Developer Tools & Environment",
      shortName: "Tools & Systems",
      badge: "DevOps & Workflow",
      icon: "fa-solid fa-screwdriver-wrench",
      color: "#f59e0b",
      featured: false,
      description: "Daily developer workflow, version control, Unix terminal administration, and deployment.",
      items: [
        { 
          name: "Git & GitHub", 
          sub: "Version Control • Commits • Branching",
          icon: "fa-brands fa-github", 
          color: "#f05032",
          level: 88,
          tags: ["Version Control", "Branching", "Open Source"]
        },
        { 
          name: "VS Code", 
          sub: "Extensions • Debugging • Productivity",
          icon: "fa-solid fa-laptop-code", 
          color: "#007acc",
          level: 90,
          tags: ["Extensions", "Debugging", "Productivity"]
        },
        { 
          name: "Linux / Kali Environment", 
          sub: "Bash Commands • Services • Config",
          icon: "fa-brands fa-linux", 
          color: "#fcc624",
          level: 85,
          tags: ["Bash Commands", "Environment Config", "Services"]
        },
        { 
          name: "Netlify / Vercel", 
          sub: "Cloud Deployment • SSL Security",
          icon: "fa-solid fa-cloud-arrow-up", 
          color: "#00c7b7",
          level: 85,
          tags: ["CI/CD Pipelines", "SSL Security", "Instant Deploy"]
        },
        { 
          name: "XAMPP / Apache", 
          sub: "Local MariaDB • Testing Environment",
          icon: "fa-solid fa-server", 
          color: "#fb7a24",
          level: 78,
          tags: ["Local Apache", "MariaDB", "Testing Env"]
        }
      ]
    }
  ],

  /**
   * ============================================================================
   * 🎓 EDUCATION & TIMELINE
   * ============================================================================
   */
  education: [
    {
      period: "2025 - 2027",
      degree: "Master of Computer Applications (MCA)",
      institution: "Chetan Business School, Hubli",
      university: "Karnatak University Dharwad (KUD)",
      score: "Pursuing (1st Year)",
      status: "Pursuing",
      highlights: [
        "Advanced specialization in Enterprise Computing, Cybersecurity Systems, Network Security, and Threat Intelligence.",
        "Deep focus on SOC (Security Operations Center) Level 1 operations, log analysis, vulnerability assessments, and incident response.",
        "Developing defensive security automation and production-grade secure web applications."
      ]
    },
    {
      period: "2022 - 2025",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Chetan College of Commerce and BCA, Taj Nagar, Hubli",
      university: "Karnatak University Dharwad (KUD)",
      score: "CGPA: 8.46",
      status: "Graduated",
      highlights: [
        "Specialized in Software Engineering, Web Technologies, Database Management Systems, and Object-Oriented Programming.",
        "Consistently maintained high academic standing (CGPA: 8.46).",
        "Developed full-featured academic and self-driven coding projects."
      ]
    },
    {
      period: "2020 - 2022",
      degree: "Pre-University Course (PUC)",
      institution: "Govt PU College, Gopankoppa, Hubli",
      university: "Department of Pre-University Education, Karnataka",
      score: "Percentage: 64%",
      status: "Completed",
      highlights: [
        "Focused on foundational science and mathematics principles.",
        "Participated in regional computer science seminars."
      ]
    },
    {
      period: "2018 - 2020",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Shri Ramlingeshwara High School, Gokul Road, Hubli",
      university: "Karnataka School Examination and Assessment Board",
      score: "Percentage: 67.84%",
      status: "Completed",
      highlights: [
        "Developed early affinity for computer technology and logical problem solving."
      ]
    }
  ],

  /**
   * ============================================================================
   * 💼 WORK & INTERNSHIP EXPERIENCE
   * ============================================================================
   */
  experience: [
    {
      role: "Web Development Intern",
      company: "Grow Rank Info Pvt Ltd",
      period: "May 2025 - Jun 2025",
      location: "Hubli, Karnataka",
      type: "Internship",
      description: "Collaborated on responsive front-end deliverables, bug resolution, and user experience enhancements for web properties.",
      keyPoints: [
        "Created responsive page layouts adhering strictly to modern mobile-first guidelines.",
        "Refactored legacy HTML/CSS structures to optimize render speed and visual consistency.",
        "Received letter of completion and positive appraisal for proactive delivery."
      ]
    },
    {
      role: "Freelance / Independent Frontend Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote / Hubli",
      type: "Projects & Freelance",
      description: "Designed, engineered, and deployed customized web tools, educational apps, and portfolio showcases.",
      keyPoints: [
        "Launched 9+ production web applications on Netlify, GitHub Pages, and Wix.",
        "Integrated client forms, local storage databases, and third-party APIs.",
        "Maintained continuous learning across JavaScript, cybersecurity, and UI systems."
      ]
    }
  ]
};

// Make accessible to window
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

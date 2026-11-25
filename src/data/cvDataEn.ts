import type { ProjectItem } from "./projectsData";

export const projectFiltersEn = [
    { id: "all", label: "All" },
    { id: "astro", label: "Astro" },
    { id: "ia", label: "AI & Agents" },
    { id: "react-native", label: "React Native" },
    { id: "javascript", label: "JavaScript / TS" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux" },
    { id: "nvim", label: "Neovim" },
    { id: "bash", label: "Bash" },
    { id: "docker", label: "Docker" },
    { id: "api", label: "APIs" },
];

export const projectsEn: ProjectItem[] = [
    {
        title: "atom-viladecans-dashboard",
        href: "https://github.com/AndreaKinder/atom-viladecans-dashboard",
        description:
            "Interactive decision-support dashboard for managing ATOM Modular emergency deployment units.",
        tag: "astro javascript api",
        date: "2026-11",
    },
    {
        title: "KinderNvim",
        href: "https://github.com/AndreaKinder/KinderNvim",
        description:
            "Modular Lua Neovim configuration and developer environment optimized for Linux productivity.",
        tag: "nvim linux",
        date: "2026-11",
    },
    {
        title: "RomsManager",
        href: "https://github.com/AndreaKinder/RomsManager",
        description:
            "Modern desktop application for organizing and managing retro gaming ROM collections across multiple console systems.",
        tag: "javascript linux",
        date: "2026-10",
        homepage: "https://rommanager.pages.dev/",
    },
    {
        title: "KinderDots",
        href: "https://github.com/AndreaKinder/KinderDots",
        description:
            "Personal dotfiles and automated Linux desktop setup (CachyOS + Niri + foot + fish + chezmoi).",
        tag: "linux python bash",
        date: "2026-11",
    },
    {
        title: "kinder-agent",
        href: "https://github.com/AndreaKinder/kinder-agent",
        description:
            "Interactive Bash REPL for Ollama featuring a 5-layer persistent memory engine built on SQLite and FTS5.",
        tag: "ia bash linux",
        date: "2026-10",
    },
    {
        title: "Portfolio Kinder",
        href: "https://github.com/AndreaKinder/porfolio-kinder",
        description:
            "Personal engineering portfolio and technical blog built with Astro 5, monochrome editorial design, and a multi-agent publishing pipeline.",
        tag: "astro javascript",
        date: "2026-10",
    },
    {
        title: "mcp-rag-notes",
        href: "https://github.com/AndreaKinder/mcp-rag-notes",
        description:
            "Model Context Protocol (MCP) server providing RAG-powered semantic search and context retrieval over personal notes.",
        tag: "ia python api linux",
        date: "2026-10",
    },
    {
        title: "skills-notes",
        href: "https://github.com/AndreaKinder/skills-notes",
        description:
            "Modular AI agent skills and utilities for automating, organizing, and querying personal note vaults.",
        tag: "ia python linux",
        date: "2026-10",
    },
    {
        title: "templates-path-notes",
        href: "https://github.com/AndreaKinder/templates-path-notes",
        description:
            "Python utility for resolving paths, structural contracts, and standardized templates across note-taking systems.",
        tag: "python linux",
        date: "2026-10",
    },
    {
        title: "nvim-plugin-notes",
        href: "https://github.com/AndreaKinder/nvim-plugin-notes",
        description:
            "Lua Neovim plugin integrated with a contract-governed personal knowledge ecosystem and local AI agents.",
        tag: "nvim linux ia",
        date: "2026-10",
    },
    {
        title: "agy-togle.nvim",
        href: "https://github.com/AndreaKinder/agy-togle.nvim",
        description:
            "Lua Neovim plugin to toggle and integrate the Antigravity CLI directly inside the editor workflow.",
        tag: "nvim ia linux",
        date: "2026-05",
    },
    {
        title: "pi-togle.nvim",
        href: "https://github.com/AndreaKinder/pi-togle.nvim",
        description:
            "Neovim plugin to toggle the Pi Code CLI in a vertical or horizontal split window.",
        tag: "nvim ia linux",
        date: "2026-05",
    },
    {
        title: "LandingPage-RomManager",
        href: "https://github.com/AndreaKinder/LandingPage-RomManager",
        description:
            "Official product showcase and download landing page for RomsManager built with Astro.",
        tag: "astro javascript",
        date: "2026-05",
    },
    {
        title: "NodeRomCover",
        href: "https://github.com/AndreaKinder/NodeRomCover",
        description:
            "Node.js library for converting images into customizable retro and modern console game covers.",
        tag: "javascript",
        date: "2025-12",
    },
    {
        title: "Construhack 2025 · EcoHabita",
        href: "https://github.com/AndreaKinder/construhack2025",
        description:
            "React Native and TypeScript mobile app prototype for smart management of sustainable housing communities.",
        tag: "react-native javascript",
        date: "2025-12",
    },
    {
        title: "human-drawings-ui",
        href: "https://github.com/AndreaKinder/human-drawings-ui",
        description:
            "Web UI and database interface for AI-generated image detection powered by open-api-mydetector-image-ai.",
        tag: "ia javascript api",
        date: "2025-10",
    },
    {
        title: "open-api-mydetector-image-ai",
        href: "https://github.com/AndreaKinder/open-api-mydetector-image-ai",
        description:
            "Open JavaScript API wrapper for analyzing and detecting AI-generated images.",
        tag: "ia api javascript",
        date: "2025-10",
    },
    {
        title: "nodejs-neovim-environment",
        href: "https://github.com/AndreaKinder/nodejs-neovim-environment",
        description:
            "Reproducible Dockerized Node.js + Neovim development environment published on Docker Hub.",
        tag: "docker nvim linux",
        date: "2025-03",
    },
    {
        title: "SecureWallet",
        href: "https://github.com/AndreaKinder/secureWallet",
        description:
            "4th place at Open Gateway Hackathon 2025: banking security SaaS integrating SIM Swap and Location Verification APIs.",
        tag: "react-native api javascript",
        date: "2025-03",
    },
    {
        title: "Construhack 2024",
        href: "https://github.com/AndreaKinder/construhack2024",
        description:
            "AI pilot application for automated classification of surplus civil-works materials promoting circular economy.",
        tag: "react-native ia javascript",
        date: "2024-10",
    },
    {
        title: "music-classification-script",
        href: "https://github.com/AndreaKinder/music-classification-script",
        description:
            "Bash automation script for classifying and organizing music libraries by directory structure.",
        tag: "bash linux",
        date: "2024-09",
    },
    {
        title: "AI-Notebook",
        href: "https://github.com/AndreaKinder/AI-Notebook",
        description:
            "Python AI-powered note generation assistant integrating HuggingFace and GPT Chat API.",
        tag: "ia python api",
        date: "2024-07",
    },
    {
        title: "Wowfinder",
        href: "https://github.com/edurne85/wowfinder",
        description:
            "React web utilities suite built for the Wowfinder tabletop RPG campaign (Pathfinder 1e / Warcraft universe).",
        tag: "javascript",
        date: "2024-06",
    },
];

export const cvEn = {
    role: "Full Stack Developer · Web, Mobile & Cloud",
    availability: "Available · Remote / Hybrid",
    heroSummary:
        "Design, development, and deployment of cross-platform web and mobile applications, connecting reactive interfaces with secure backend APIs and containerized Linux infrastructure.",
    aboutSummary:
        "Full Stack software developer with nearly 2 years of production experience (including 1 year and 8 months as sole developer at GoalmedGroup, plus freelance delivery). Specialized in Vue.js, React Native, PHP/Symfony, and self-managed cloud infrastructure (Docker, GitHub Actions, Traefik, Cloudflare R2, Linux).",
    yearsExperience: "2+ years",
    industry: "Software Development",
    willingToTravel: "Yes",
    aboutCards: [
        {
            title: "End-to-End Product Ownership",
            subtitle: "From UI design to production servers",
            description:
                "Hands-on across frontend, mobile, backend, and DevOps—eliminating silos and delivering production features with testing, security, and maintainability.",
            tags: ["Full Stack", "Product", "Architecture", "Quality"],
        },
        {
            title: "Analytical Chemistry Background",
            subtitle: "Scientific method applied to software engineering",
            description:
                "Formal laboratory training handling regulated medical data under GDPR brings experimental rigor, process traceability, systematic debugging, and clear documentation.",
            tags: ["Analytical Thinking", "GDPR", "STEM"],
        },
        {
            title: "Organization & Collaboration",
            subtitle: "Technical ownership, hackathons & Open Source",
            description:
                "Experience coordinating technical deliveries, competing in innovation hackathons (ConstruHack, Open Gateway), and maintaining Open Source developer tools.",
            tags: ["Leadership", "Organization", "Open Source", "Travel: Yes"],
        },
    ],
    experienceBanner: {
        role: "Full Stack Developer (Web & Mobile)",
        company: "GoalmedGroup",
        location: "Badalona, Barcelona",
        period: "March 2025 – October 2026",
        summary:
            "Sole developer responsible for the full product lifecycle at GoalmedGroup: modular Vue.js web interfaces, cross-platform React Native mobile app, Symfony/MySQL REST APIs under GDPR, and containerized Linux infrastructure with Docker, GitHub Actions, Traefik, and Cloudflare R2.",
    },
    experienceItems: [
        {
            title: "Frontend & Mobile Development",
            subtitle: "GoalmedGroup · Interfaces & Cross-Platform App",
            period: "Mar 2025 – Oct 2026",
            description:
                "Designed and built modular, reactive user interfaces with Vue.js and Bootstrap alongside the cross-platform React Native mobile application architecture.",
            tags: ["Vue.js", "React Native", "Bootstrap", "CSS", "Responsive UI"],
        },
        {
            title: "Backend & RESTful APIs",
            subtitle: "GoalmedGroup · Core Services & GDPR Medical Data",
            period: "Mar 2025 – Oct 2026",
            description:
                "Developed and maintained 20+ secure REST endpoints in PHP (Symfony) and MySQL for authentication, entity management, and client synchronization under GDPR compliance.",
            tags: ["PHP", "Symfony", "MySQL", "REST API", "GDPR"],
        },
        {
            title: "Infrastructure, CI/CD & Cloud",
            subtitle: "GoalmedGroup · Containers & Encrypted Storage",
            period: "Mar 2025 – Oct 2026",
            description:
                "Containerized development and staging environments with Docker, automated deployments with GitHub Actions and Dockploy, configured TLS routing via Traefik, and integrated Cloudflare R2 storage.",
            tags: ["Docker", "GitHub Actions", "Traefik", "Cloudflare R2", "Linux"],
        },
        {
            title: "Web Platforms & Code Refactoring",
            subtitle: "GoalmedGroup · Architecture & Performance",
            period: "Mar 2025 – Oct 2026",
            description:
                "Refactored legacy codebases into clean, modular architectures and built fast, accessible web platforms on Astro and WordPress.",
            tags: ["Astro", "WordPress", "Refactoring", "Accessibility", "WPO"],
        },
    ],
    skillGroups: [
        {
            title: "Frontend & Mobile",
            subtitle: "Reactive Interfaces & Cross-Platform Apps",
            description:
                "Reusable component systems, SPAs, high-performance static sites, and cross-platform mobile applications.",
            tags: ["Vue.js", "React Native", "Astro", "Bootstrap", "CSS", "WordPress"],
        },
        {
            title: "Backend & Databases",
            subtitle: "Service Architecture & Data Persistence",
            description:
                "Secure RESTful API design, authentication, relational modeling, query optimization, and web/mobile synchronization.",
            tags: ["PHP", "Symfony", "MySQL", "REST APIs"],
        },
        {
            title: "DevOps, Cloud & Security",
            subtitle: "Containers, Reverse Proxies & Linux Servers",
            description:
                "Linux server administration, reproducible Docker environments, CI/CD with GitHub Actions, TLS routing with Traefik, and Cloudflare R2.",
            tags: ["Docker", "GitHub Actions", "Traefik", "Linux", "Cloudflare R2", "GDPR"],
        },
        {
            title: "Engineering Practices & Soft Skills",
            subtitle: "Ownership, Organization & Product Vision",
            description:
                "End-to-end technical ownership, structured documentation, systematic refactoring, and cross-functional problem solving.",
            tags: ["Leadership", "Organization", "Git", "Testing", "Problem Solving"],
        },
    ],
    educationItems: [
        {
            title: "Higher Technical Diploma in Laboratory Analysis & Quality Control",
            subtitle: "Centro Público Comte de Rius · Tarragona",
            period: "Sep 2021 – Jun 2023",
            description:
                "Higher-level vocational degree in analytical chemistry: laboratory precision, quality assurance, instrumentation, and systematic data analysis.",
            tags: ["Comte de Rius", "Tarragona", "2021 – 2023"],
        },
        {
            title: "Technical Diploma in Laboratory Operations",
            subtitle: "Centro Público Joan Oró · Martorell",
            period: "Sep 2016 – Jun 2018",
            description:
                "Vocational degree covering chemical processes, safety protocols, technical environment organization, and metrology.",
            tags: ["Joan Oró", "Martorell", "2016 – 2018"],
        },
        {
            title: "From Laboratory to Software Engineering",
            subtitle: "Self-Taught Full Stack Track & STEM Rigor",
            period: "STEM Transition",
            description:
                "Self-taught Full Stack development (JavaScript, PHP, mobile) completed alongside laboratory studies and freelance web delivery.",
            tags: ["Analytical Rigor", "Automation", "Quality", "STEM"],
        },
    ],
};

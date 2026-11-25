export interface ProjectItem {
    title: string;
    href: string;
    description: string;
    tag: string;
    date: string;
    homepage?: string;
}

export const projectFilters = [
    { id: "all", label: "Todos" },
    { id: "astro", label: "Astro" },
    { id: "ia", label: "IA & Agentes" },
    { id: "react-native", label: "React Native" },
    { id: "javascript", label: "JavaScript / TS" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux" },
    { id: "nvim", label: "Neovim" },
    { id: "bash", label: "Bash" },
    { id: "docker", label: "Docker" },
    { id: "api", label: "APIs" },
];

export const projects: ProjectItem[] = [
    {
        title: "atom-viladecans-dashboard",
        href: "https://github.com/AndreaKinder/atom-viladecans-dashboard",
        description:
            "Cuadro de mando interactivo para la toma de decisiones y gestión de módulos de emergencia ATOM Modular.",
        tag: "astro javascript api",
        date: "2026-11",
    },
    {
        title: "KinderNvim",
        href: "https://github.com/AndreaKinder/KinderNvim",
        description:
            "Configuración modular de Neovim en Lua y entorno de desarrollo optimizado para productividad en Linux.",
        tag: "nvim linux",
        date: "2026-11",
    },
    {
        title: "RomsManager",
        href: "https://github.com/AndreaKinder/RomsManager",
        description:
            "Aplicación de escritorio moderna para organizar y gestionar colecciones de videojuegos retro en múltiples sistemas.",
        tag: "javascript linux",
        date: "2026-10",
        homepage: "https://rommanager.pages.dev/",
    },
    {
        title: "KinderDots",
        href: "https://github.com/AndreaKinder/KinderDots",
        description:
            "Dotfiles personales y automatización completa de escritorio Linux (CachyOS + Niri + foot + fish + chezmoi).",
        tag: "linux python bash",
        date: "2026-11",
    },
    {
        title: "kinder-agent",
        href: "https://github.com/AndreaKinder/kinder-agent",
        description:
            "REPL interactivo en Bash para Ollama con motor de memoria persistente de 5 capas en SQLite y búsqueda FTS5.",
        tag: "ia bash linux",
        date: "2026-10",
    },
    {
        title: "Portfolio Kinder",
        href: "https://github.com/AndreaKinder/porfolio-kinder",
        description:
            "Portfolio profesional y blog técnico desarrollado con Astro 5, diseño editorial monocromo y pipeline multi-agente.",
        tag: "astro javascript",
        date: "2026-10",
    },
    {
        title: "mcp-rag-notes",
        href: "https://github.com/AndreaKinder/mcp-rag-notes",
        description:
            "Servidor Model Context Protocol (MCP) con búsqueda semántica RAG para recuperar contexto de notas personales.",
        tag: "ia python api linux",
        date: "2026-10",
    },
    {
        title: "skills-notes",
        href: "https://github.com/AndreaKinder/skills-notes",
        description:
            "Habilidades y utilidades modulares para agentes de IA orientadas a automatizar y consultar bóvedas de notas.",
        tag: "ia python linux",
        date: "2026-10",
    },
    {
        title: "templates-path-notes",
        href: "https://github.com/AndreaKinder/templates-path-notes",
        description:
            "Utilidad en Python para resolver rutas, contratos de estructura y plantillas en sistemas de gestión de notas.",
        tag: "python linux",
        date: "2026-10",
    },
    {
        title: "nvim-plugin-notes",
        href: "https://github.com/AndreaKinder/nvim-plugin-notes",
        description:
            "Plugin de Neovim en Lua integrado con el ecosistema de notas gobernado por contratos y agentes locales.",
        tag: "nvim linux ia",
        date: "2026-10",
    },
    {
        title: "agy-togle.nvim",
        href: "https://github.com/AndreaKinder/agy-togle.nvim",
        description:
            "Plugin de Neovim en Lua para alternar e integrar el CLI de Antigravity directamente en el flujo del editor.",
        tag: "nvim ia linux",
        date: "2026-05",
    },
    {
        title: "pi-togle.nvim",
        href: "https://github.com/AndreaKinder/pi-togle.nvim",
        description:
            "Plugin de Neovim para abrir y alternar el CLI de Pi Code en ventana dividida vertical u horizontal.",
        tag: "nvim ia linux",
        date: "2026-05",
    },
    {
        title: "LandingPage-RomManager",
        href: "https://github.com/AndreaKinder/LandingPage-RomManager",
        description:
            "Landing page oficial de presentación y descarga de RomsManager desarrollada con Astro.",
        tag: "astro javascript",
        date: "2026-05",
    },
    {
        title: "NodeRomCover",
        href: "https://github.com/AndreaKinder/NodeRomCover",
        description:
            "Librería Node.js para transformar imágenes en carátulas profesionales de videojuegos con estilos retro y modernos.",
        tag: "javascript",
        date: "2025-12",
    },
    {
        title: "Construhack 2025 · EcoHabita",
        href: "https://github.com/AndreaKinder/construhack2025",
        description:
            "Aplicación móvil en React Native y TypeScript para la gestión inteligente de viviendas y comunidades sostenibles.",
        tag: "react-native javascript",
        date: "2025-12",
    },
    {
        title: "human-drawings-ui",
        href: "https://github.com/AndreaKinder/human-drawings-ui",
        description:
            "Interfaz web y gestión de base de datos para la detección de imágenes generadas por inteligencia artificial.",
        tag: "ia javascript api",
        date: "2025-10",
    },
    {
        title: "open-api-mydetector-image-ai",
        href: "https://github.com/AndreaKinder/open-api-mydetector-image-ai",
        description:
            "API abierta en JavaScript para analizar y detectar imágenes generadas mediante modelos de IA.",
        tag: "ia api javascript",
        date: "2025-10",
    },
    {
        title: "nodejs-neovim-environment",
        href: "https://github.com/AndreaKinder/nodejs-neovim-environment",
        description:
            "Entorno de desarrollo reproducible en Docker con Node.js y Neovim preconfigurado, publicado en Docker Hub.",
        tag: "docker nvim linux",
        date: "2025-03",
    },
    {
        title: "SecureWallet",
        href: "https://github.com/AndreaKinder/secureWallet",
        description:
            "4.º puesto en Hackathon Open Gateway 2025: SaaS de seguridad bancaria con SIM Swap API y Location Verification API.",
        tag: "react-native api javascript",
        date: "2025-03",
    },
    {
        title: "Construhack 2024",
        href: "https://github.com/AndreaKinder/construhack2024",
        description:
            "Prueba piloto con IA para la clasificación automática de sobrantes de obras civiles orientada a economía circular.",
        tag: "react-native ia javascript",
        date: "2024-10",
    },
    {
        title: "music-classification-script",
        href: "https://github.com/AndreaKinder/music-classification-script",
        description:
            "Script en Bash para automatizar la clasificación y organización de bibliotecas musicales por directorios.",
        tag: "bash linux",
        date: "2024-09",
    },
    {
        title: "AI-Notebook",
        href: "https://github.com/AndreaKinder/AI-Notebook",
        description:
            "Aplicación de generación inteligente de notas con Python integrando HuggingFace y GPT Chat API.",
        tag: "ia python api",
        date: "2024-07",
    },
    {
        title: "Wowfinder",
        href: "https://github.com/edurne85/wowfinder",
        description:
            "Paquete de utilidades web en React para la campaña de rol Wowfinder (sistema Pathfinder 1ed en universo Warcraft).",
        tag: "javascript",
        date: "2024-06",
    },
];

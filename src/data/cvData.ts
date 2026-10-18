export interface CvSubItem {
    id: string;
    title: string;
    subtitle?: string;
    period?: string;
    description: string;
    tags: string[];
    href?: string;
    linkLabel?: string;
}

export interface CvStation {
    index: string;
    id: string;
    navLabel: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    organization?: string;
    location?: string;
    period?: string;
    summary: string;
    position: [number, number, number];
    cameraOffset: [number, number, number];
    sculptureType:
        | 'egg'
        | 'fullstack'
        | 'projects-web'
        | 'projects-linux'
        | 'skills'
        | 'education'
        | 'blog'
        | 'contact';
    items: CvSubItem[];
}

export const cvPersonalInfo = {
    fullName: 'Andrea Villar Torres',
    role: 'Desarrolladora Full Stack (Web & Mobile)',
    postalCode: '43720',
    city: "L'Arboç, Tarragona",
    phone: '+34 621 21 41 27',
    phoneHref: 'tel:+34621214127',
    email: 'andreavillartr@gmail.com',
    emailHref: 'mailto:andreavillartr@gmail.com',
    github: 'https://github.com/AndreaKinder',
    linkedin: 'https://www.linkedin.com/in/andrea-villar-torres-395909270/',
    currentlyWorking: 'No (Disponible)',
    willingToTravel: 'Sí',
    highestEducation: 'FP Grado Superior',
    industry: 'Desarrollo de software',
    yearsExperience: '2 años',
    summary:
        'Desarrolladora de software con experiencia en el diseño, desarrollo y despliegue de aplicaciones web y móviles multiplataforma, así como en la administración de entornos contenerizados y arquitectura en la nube. Especializada en conectar interfaces reactivas con servicios backend seguros y flujos de despliegue automatizados sobre servidores Linux.',
    allSkills: [
        'MySQL',
        'Astro',
        'CSS',
        'Habilidades organizativas',
        'Cloud',
        'Symfony',
        'Cloudflare R2',
        'Liderazgo',
        'Traefik',
        'Linux',
        'Bootstrap',
        'Docker',
        'Vue.js',
        'Cloudflare',
        'PHP',
        'Python',
        'React Native',
    ],
};

export const cvStations: CvStation[] = [
    {
        index: '01',
        id: 'inicio',
        navLabel: 'Inicio',
        eyebrow: 'Inicio',
        title: 'Andrea Villar',
        titleAccent: 'Torres',
        organization: 'Desarrolladora Full Stack · Web & Mobile',
        period: '2 años de experiencia',
        summary:
            'Diseño, desarrollo y despliegue de aplicaciones web y móviles multiplataforma, integrando interfaces reactivas con servicios backend e infraestructura en contenedores sobre Linux.',
        position: [0, 0, 0],
        cameraOffset: [-1.8, 0.55, 6.6],
        sculptureType: 'egg',
        items: [
            {
                id: 'arquitectura-fullstack',
                title: 'Arquitectura Web & Mobile',
                subtitle: 'Vue.js · React Native · Astro · Symfony',
                description:
                    'Construcción de aplicaciones multiplataforma conectadas a APIs RESTful en PHP (Symfony) y MySQL, cuidando el rendimiento, la mantenibilidad y la experiencia de usuario.',
                tags: ['Vue.js', 'React Native', 'Astro', 'Symfony', 'MySQL'],
            },
            {
                id: 'infraestructura-cloud',
                title: 'Contenedores & Cloud sobre Linux',
                subtitle: 'Docker · Traefik · Cloudflare R2',
                description:
                    'Despliegue reproducible de servicios mediante Docker, proxy inverso y certificados con Traefik, almacenamiento distribuido en Cloudflare R2 y administración de sistemas Linux.',
                tags: ['Docker', 'Traefik', 'Cloudflare R2', 'Linux'],
            },
        ],
    },
    {
        index: '02',
        id: 'sobre-mi',
        navLabel: 'Sobre mí',
        eyebrow: 'Sobre mí',
        title: 'Sobre',
        titleAccent: 'mí',
        organization: 'Trayectoria, Método y Enfoque Técnico',
        period: 'Full Stack & STEM',
        summary:
            'Desarrolladora de software con base técnica en Química y experiencia en el ciclo completo de producto: desde el diseño de interfaces y aplicaciones móviles hasta la administración de servidores Linux y despliegues en la nube.',
        position: [2.4, 0.3, -9],
        cameraOffset: [1.0, 0.85, -3.2],
        sculptureType: 'egg',
        items: [
            {
                id: 'enfoque-producto',
                title: 'Visión de Ciclo Completo',
                subtitle: 'Del diseño de interfaz al servidor en producción',
                description:
                    'Trabajo de forma transversal entre frontend, mobile, backend e infraestructura, evitando silos técnicos y asegurando que cada funcionalidad llegue a producción con pruebas y observabilidad.',
                tags: ['Full Stack', 'Producto', 'Arquitectura', 'Calidad'],
            },
            {
                id: 'base-analitica',
                title: 'Base Analítica en Química',
                subtitle: 'Método científico aplicado al software',
                description:
                    'Mi formación previa en Química aporta rigor experimental, trazabilidad de procesos, diagnóstico metódico de errores y documentación clara en entornos complejos.',
                tags: ['Pensamiento analítico', 'Rigor técnico', 'STEM'],
            },
            {
                id: 'colaboracion-equipos',
                title: 'Organización y Trabajo en Equipo',
                subtitle: 'Liderazgo técnico y participación en hackathons',
                description:
                    'Experiencia coordinando entregas técnicas, participando en hackathons de innovación (ConstruHack, Open Gateway) y manteniendo herramientas Open Source para desarrolladores.',
                tags: ['Liderazgo', 'Organización', 'Open Source', 'Viajes: Sí'],
            },
        ],
    },
    {
        index: '03',
        id: 'experiencia',
        navLabel: 'Experiencia',
        eyebrow: 'Experiencia laboral',
        title: 'Goalmed',
        titleAccent: 'Group',
        organization: 'Desarrolladora Full Stack (Web & Mobile)',
        location: 'Badalona, Barcelona',
        period: 'Marzo 2025 – Octubre 2026',
        summary:
            'Responsable del ciclo completo de desarrollo en GoalmedGroup: desde interfaces modulares en Vue.js y aplicaciones móviles en React Native hasta APIs RESTful en Symfony/MySQL e infraestructura contenerizada con Docker, Traefik y Cloudflare R2.',
        position: [4.2, 0.6, -18],
        cameraOffset: [2.2, 1.15, -11.2],
        sculptureType: 'fullstack',
        items: [
            {
                id: 'goalmed-frontend',
                title: 'Desarrollo Frontend y Mobile',
                subtitle: 'GoalmedGroup · Interfaces & App Multiplataforma',
                period: 'Marzo 2025 – Octubre 2026',
                description:
                    'Diseñé e implementé interfaces de usuario modulares y reactivas con Vue.js y Bootstrap, junto con la arquitectura de la aplicación móvil multiplataforma en React Native, asegurando un rendimiento fluido y una experiencia homogénea.',
                tags: ['Vue.js', 'React Native', 'Bootstrap', 'CSS', 'UI Reactiva'],
            },
            {
                id: 'goalmed-backend',
                title: 'Backend y APIs RESTful',
                subtitle: 'GoalmedGroup · Servicios Centrales & Datos',
                period: 'Marzo 2025 – Octubre 2026',
                description:
                    'Desarrollé y mantuve los servicios centrales en PHP (Symfony) y MySQL, estructurando endpoints seguros para la autenticación, gestión de entidades y sincronización de datos con las aplicaciones cliente.',
                tags: ['PHP', 'Symfony', 'MySQL', 'REST API', 'Autenticación'],
            },
            {
                id: 'goalmed-infra',
                title: 'Infraestructura y Despliegue',
                subtitle: 'GoalmedGroup · Contenedores & Almacenamiento Cloud',
                period: 'Marzo 2025 – Octubre 2026',
                description:
                    'Contenericé los entornos de desarrollo y staging mediante Docker, configurando el enrutamiento y certificados con Traefik e integrando almacenamiento distribuido seguro a través de Cloudflare R2.',
                tags: ['Docker', 'Traefik', 'Cloudflare R2', 'Cloudflare', 'Linux'],
            },
            {
                id: 'goalmed-web',
                title: 'Gestión y Optimización Web',
                subtitle: 'GoalmedGroup · Rendimiento & Accesibilidad',
                period: 'Marzo 2025 – Octubre 2026',
                description:
                    'Desarrollé y optimicé plataformas web sobre Astro y WordPress, mejorando tiempos de carga, modularidad y accesibilidad.',
                tags: ['Astro', 'WordPress', 'WPO', 'Accesibilidad', 'CSS'],
            },
        ],
    },
    {
        index: '04',
        id: 'proyectos-apps',
        navLabel: 'Apps & Mobile',
        eyebrow: 'Proyectos web y mobile',
        title: 'Apps &',
        titleAccent: 'Hackathons',
        organization: 'Proyectos Full Stack, Mobile e IA',
        location: 'React · React Native · Astro · APIs REST',
        period: '2024 – 2026',
        summary:
            'Aplicaciones móviles y web creadas en hackathons tecnológicos y proyectos colaborativos. Haz clic en los satélites en órbita o usa las flechas para inspeccionar cada proyecto.',
        position: [-4.0, -0.5, -36],
        cameraOffset: [-5.8, 0.2, -29.0],
        sculptureType: 'projects-web',
        items: [
            {
                id: 'construhack-2025',
                title: 'Construhack 2025',
                subtitle: 'App Mobile · Viviendas y Comunidades Sostenibles',
                period: '2025',
                description:
                    'Proyecto para ConstruHack 2025. Muestra con React Native de app para solución integral de gestión inteligente para viviendas y comunidades sostenibles.',
                tags: ['React Native', 'React', 'JavaScript', 'Android', 'Git'],
                href: 'https://github.com/AndreaKinder/construhack2025',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'secure-wallet',
                title: 'SecureWallet',
                subtitle: '4.º Lugar · Hackathon Open Gateway 2025',
                period: '2025',
                description:
                    'Proyecto presentado en el Hackathon Open Gateway 2025, obteniendo el 4.º lugar en la competencia mediante integración de APIs de red y seguridad móvil.',
                tags: ['React Native', 'APIs REST', 'Android', 'JavaScript', 'Git'],
                href: 'https://github.com/AndreaKinder/secureWallet/tree/main',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'construhack-2024',
                title: 'Construhack 2024',
                subtitle: 'IA & Economía Circular en Obras Civiles',
                period: '2024',
                description:
                    'Prueba piloto de una aplicación con inteligencia artificial para la clasificación automática de sobrantes de obras civiles, promoviendo un sistema de economía circular.',
                tags: ['React Native', 'React', 'IA', 'Android', 'JavaScript'],
                href: 'https://github.com/AndreaKinder/construhack2024',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'wowfinder',
                title: 'Wowfinder',
                subtitle: 'Utilidades Web · Campaña Pathfinder 1ed / Warcraft',
                period: '2024 – 2025',
                description:
                    'Paquete de utilidades web en React para la campaña "Wowfinder" (sistema Pathfinder 1ed ambientado en el universo Warcraft de Blizzard).',
                tags: ['React', 'JavaScript', 'HTML & CSS', 'Git'],
                href: 'https://github.com/edurne85/wowfinder',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'portfolio-kinder',
                title: 'Portfolio Kinder',
                subtitle: 'Web Personal, Escenas 3D & Blog Editorial',
                period: '2025 – 2026',
                description:
                    'Portfolio y blog personal desarrollado con Astro 5, Three.js y Material Design 3, con planetario 3D y pipeline editorial multi-agente.',
                tags: ['Astro', 'Three.js', 'TypeScript', 'Material 3', 'CSS'],
                href: 'https://github.com/AndreaKinder/porfolio-kinder',
                linkLabel: 'Ver en GitHub',
            },
        ],
    },
    {
        index: '05',
        id: 'proyectos-linux',
        navLabel: 'Linux & Neovim',
        eyebrow: 'Ecosistema Linux y herramientas',
        title: 'Linux &',
        titleAccent: 'Neovim',
        organization: 'Herramientas de Terminal, Dotfiles y Plugins',
        location: 'Linux · Bash · Lua · Neovim · Git',
        period: 'Open Source',
        summary:
            'Colección de herramientas en código abierto para automatizar el entorno de trabajo en Linux, potenciar Neovim con IA y estandarizar shells de desarrollo.',
        position: [4.4, 0.8, -54],
        cameraOffset: [2.4, 1.35, -47.0],
        sculptureType: 'projects-linux',
        items: [
            {
                id: 'kinder-nvim',
                title: 'KinderNvim',
                subtitle: 'Configuración de Neovim y Entorno de Desarrollo',
                description:
                    'Entorno de desarrollo y configuración modular de Neovim y notas técnicas, optimizado para productividad en Linux.',
                tags: ['Neovim', 'Lua', 'Linux', 'Git'],
                href: 'https://github.com/AndreaKinder/KinderNvim',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'pi-togle-nvim',
                title: 'pi-togle.nvim',
                subtitle: 'Plugin de Neovim para Pi Code CLI',
                description:
                    'Plugin de Neovim para alternar el CLI de Pi Code en una ventana dividida (vertical u horizontal) directamente desde el editor.',
                tags: ['Neovim', 'Lua', 'Linux', 'Git', 'IA'],
                href: 'https://github.com/AndreaKinder/pi-togle.nvim',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'mcp-rag-notes',
                title: 'mcp-rag-notes',
                subtitle: 'Servidor MCP & RAG para Notas',
                description:
                    'Servidor MCP para consultar y recuperar contexto semántico de notas mediante RAG para asistentes de IA.',
                tags: ['Python', 'MCP', 'RAG', 'IA', 'Linux'],
                href: 'https://github.com/AndreaKinder/mcp-rag-notes',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'skills-notes',
                title: 'skills-notes',
                subtitle: 'Habilidades de Agente para Notas',
                description:
                    'Conjunto de habilidades y herramientas modulares para la gestión, automatización y consulta de notas mediante agentes de IA.',
                tags: ['Python', 'Agentes', 'IA', 'Linux', 'Git'],
                href: 'https://github.com/AndreaKinder/skills-notes',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'templates-path-notes',
                title: 'templates-path-notes',
                subtitle: 'Contratos y Estructura de Vault',
                description:
                    'Utilidad para gestionar rutas, estructuras y plantillas estandarizadas para sistemas de toma de notas.',
                tags: ['Python', 'Markdown', 'Linux', 'Git'],
                href: 'https://github.com/AndreaKinder/templates-path-notes',
                linkLabel: 'Ver en GitHub',
            },
            {
                id: 'roms-manager',
                title: 'RomsManager',
                subtitle: 'Automatización y Gestión de Colecciones Retro',
                description:
                    'Gestor de ROMs en Linux/Bash para organizar, limpiar y administrar colecciones de juegos retro de forma automatizada.',
                tags: ['Linux', 'Bash', 'Git'],
                href: 'https://github.com/AndreaKinder/RomsManager',
                linkLabel: 'Ver en GitHub',
            },
        ],
    },
    {
        index: '06',
        id: 'habilidades',
        navLabel: 'Habilidades',
        eyebrow: 'Habilidades y tecnologías',
        title: 'Stack &',
        titleAccent: 'Competencias',
        organization: 'Competencias Técnicas y Organizativas',
        location: 'Full Stack · DevOps · Liderazgo',
        period: '16 competencias clave',
        summary:
            'Ecosistema tecnológico completo que abarca desde el diseño de interfaces web y móviles hasta la arquitectura de servidores, contenedores y liderazgo de equipos.',
        position: [-3.6, 0.4, -72],
        cameraOffset: [-5.4, 1.0, -65.0],
        sculptureType: 'skills',
        items: [
            {
                id: 'skills-frontend',
                title: 'Frontend & Mobile',
                subtitle: 'Interfaces Reactivas y Multiplataforma',
                description:
                    'Desarrollo de componentes reutilizables, SPAs, sitios estáticos de alto rendimiento y aplicaciones móviles nativas/multiplataforma.',
                tags: ['Vue.js', 'React Native', 'Astro', 'Bootstrap', 'CSS', 'WordPress'],
            },
            {
                id: 'skills-backend',
                title: 'Backend & Base de Datos',
                subtitle: 'Arquitectura de Servicios y Persistencia',
                description:
                    'Diseño de APIs RESTful seguras, autenticación, modelado relacional, optimización de consultas y sincronización con clientes web/mobile.',
                tags: ['PHP', 'Symfony', 'MySQL', 'APIs RESTful'],
            },
            {
                id: 'skills-devops',
                title: 'DevOps, Cloud & Infraestructura',
                subtitle: 'Contenedores, Proxies Inversos y Almacenamiento Cloud',
                description:
                    'Administración de servidores Linux, entornos reproducibles con Docker, enrutamiento y TLS con Traefik y almacenamiento distribuido en Cloudflare R2.',
                tags: ['Docker', 'Traefik', 'Linux', 'Cloud', 'Cloudflare', 'Cloudflare R2'],
            },
            {
                id: 'skills-soft',
                title: 'Soft Skills & Metodología',
                subtitle: 'Coordinación, Organización y Visión de Producto',
                description:
                    'Capacidad para liderar iniciativas técnicas, estructurar documentación clara y organizar flujos de trabajo complejos de principio a fin.',
                tags: ['Liderazgo', 'Habilidades organizativas', 'Trabajo en equipo', 'Resolución de problemas'],
            },
        ],
    },
    {
        index: '07',
        id: 'educacion',
        navLabel: 'Educación',
        eyebrow: 'Educación y formación',
        title: 'Formación',
        titleAccent: 'Académica',
        organization: 'Ciclos Formativos en Química',
        location: 'Tarragona · Martorell',
        period: '2016 – 2023',
        summary:
            'Formación técnica superior en Química que aporta una base sólida en método científico, precisión analítica, trazabilidad de procesos y resolución estructurada de problemas.',
        position: [3.8, -0.3, -90],
        cameraOffset: [2.0, 0.4, -83.0],
        sculptureType: 'education',
        items: [
            {
                id: 'fp-superior',
                title: 'Química (FP Grado Superior)',
                subtitle: 'Centro Público Comte de Rius · Tarragona',
                period: 'Septiembre 2021 – Junio 2023',
                description:
                    'Ciclo Formativo de Grado Superior en Química. Trabajo riguroso de laboratorio, control de calidad, instrumentación y análisis sistemático de datos.',
                tags: ['Comte de Rius', 'Tarragona', '2021 – 2023'],
            },
            {
                id: 'fp-medio',
                title: 'Química (FP Grado Medio)',
                subtitle: 'Centro Público Joan Oró · Martorell',
                period: 'Septiembre 2016 – Junio 2018',
                description:
                    'Ciclo Formativo de Grado Medio en Química. Fundamentos de procesos químicos, protocolos de seguridad, organización de entorno técnico y metrología.',
                tags: ['Joan Oró', 'Martorell', '2016 – 2018'],
            },
            {
                id: 'sinergia-stem',
                title: 'Del Laboratorio al Código',
                subtitle: 'Rigor Analítico Aplicado al Software',
                period: 'Transición STEM',
                description:
                    'La disciplina experimental de la química se traduce directamente en arquitecturas limpias, debugging metódico, automatización reproducible y cuidado por el detalle.',
                tags: ['Pensamiento Analítico', 'Automatización', 'Calidad', 'STEM'],
            },
        ],
    },
    {
        index: '08',
        id: 'blog',
        navLabel: 'Blog',
        eyebrow: 'Blog y publicaciones',
        title: 'Artículos y',
        titleAccent: 'Reflexiones',
        organization: 'Publicaciones sobre IA, Web, Hackathons y Software Libre',
        location: 'Andrea Villar · Blog Personal',
        period: 'Artículos publicados',
        summary:
            'Artículos técnicos, análisis de protocolos emergentes para agentes de IA y crónicas de hackathons. Selecciona cualquier nodo en órbita del Huevo-K para leer el artículo completo.',
        position: [-3.2, 0.3, -99],
        cameraOffset: [-4.8, 0.9, -92.0],
        sculptureType: 'blog',
        items: [
            {
                id: 'llms-txt-vs-webmcp',
                title: 'llms.txt vs WebMCP',
                subtitle: 'De la web legible a la web accionable por IA · Por Andrea Villar',
                period: 'Artículo técnico',
                description:
                    'Análisis comparativo entre el estándar llms.txt y el protocolo WebMCP para preparar aplicaciones web en la era de los agentes de inteligencia artificial.',
                tags: ['IA', 'WebMCP', 'llms.txt', 'Agentes', 'Arquitectura Web'],
                href: '/blog/llms-txt-vs-webmcp',
                linkLabel: 'Leer artículo',
            },
            {
                id: 'construhack2024-post',
                title: 'ConstruHack Viladecans 2024',
                subtitle: 'Crónica de Hackathon & Economía Circular · Por Andrea Villar',
                period: 'Experiencia',
                description:
                    'Relato de mi primera Hackathon y el proyecto desarrollado: reconfiguración en Raspberry Pi 4 con React Native, Docker e IA para reutilización de materiales de obra civil.',
                tags: ['Hackathon', 'React Native', 'Docker', 'Raspberry Pi', 'IA'],
                href: '/blog/construhack2024',
                linkLabel: 'Leer artículo',
            },
            {
                id: 'galeria-blog-completa',
                title: 'Galería Completa del Blog',
                subtitle: 'Todos los artículos y publicaciones',
                period: 'Índice general',
                description:
                    'Accede al listado completo de artículos publicados en el blog para leer todas las entradas en vista de lectura editorial.',
                tags: ['Blog', 'Artículos', 'Lectura'],
                href: '/galery-blog',
                linkLabel: 'Abrir galería del blog',
            },
        ],
    },
    {
        index: '09',
        id: 'contacto',
        navLabel: 'Contacto',
        eyebrow: 'Contacto',
        title: 'Contacto',
        titleAccent: 'Directo',
        organization: 'Desarrolladora Full Stack · Web & Mobile',
        location: 'Dispuesta a viajar: Sí',
        period: 'Canales abiertos',
        summary:
            '¿Buscas una desarrolladora Full Stack (Web & Mobile) con experiencia real en Vue.js, React Native, Symfony, Docker y Linux? Puedes escribirme directamente o cambiar a la vista 2D para usar el formulario.',
        position: [0, 0.2, -108],
        cameraOffset: [-1.6, 0.8, -101.0],
        sculptureType: 'contact',
        items: [
            {
                id: 'contacto-email',
                title: 'Correo Electrónico',
                subtitle: 'andreavillartr@gmail.com',
                description:
                    'Canal directo para oportunidades laborales, entrevistas técnicas o colaboraciones en proyectos web, mobile y cloud.',
                tags: ['Email', 'andreavillartr@gmail.com'],
                href: 'mailto:andreavillartr@gmail.com',
                linkLabel: 'Escribir correo',
            },
            {
                id: 'contacto-telefono',
                title: 'Teléfono',
                subtitle: '+34 621 21 41 27',
                description:
                    'Contacto telefónico directo con disponibilidad para desplazamientos y trabajo en remoto o híbrido.',
                tags: ['+34 621 21 41 27', 'Viajes: Sí'],
                href: 'tel:+34621214127',
                linkLabel: 'Llamar ahora',
            },
            {
                id: 'contacto-redes',
                title: 'GitHub & LinkedIn',
                subtitle: '@AndreaKinder · Código y Trayectoria',
                description:
                    'Explora mis repositorios públicos, configuraciones de Linux/Neovim y proyectos de hackathons en GitHub o conecta conmigo en LinkedIn.',
                tags: ['GitHub', 'LinkedIn', 'Open Source'],
                href: 'https://github.com/AndreaKinder',
                linkLabel: 'Abrir GitHub',
            },
        ],
    },
];

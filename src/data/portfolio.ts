import type {
  PersonalInfo,
  Project,
  ExperienceCompany,
  SkillCategory,
  EducationItem,
  CertificationItem,
  LanguageItem,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Jois Rosales Fernández',
  role: 'Ingeniero en Informática | Desarrollador Full-Stack Junior',
  subtitle: 'React, Next.js, Prisma, PostgreSQL | Redis, Docker & IA Asistida (SDD / HITL)',
  bio: 'Ingeniero en Informática titulado (Duoc UC) y Desarrollador Full-Stack Junior con experiencia profesional en React, Next.js, Prisma y PostgreSQL, incorporado al equipo de Flagare Consultores TI tras mi práctica profesional. Desarrollo aplicaciones web, dashboards y sistemas con Redis y Docker, aplicando metodologías ágiles (Scrum) y desarrollo asistido por IA con revisión humana de código (SDD / HITL).',
  location: 'Colina, Región Metropolitana, Chile',
  phone: '(+56) 9 3146 6378',
  email: 'joisrosafer@gmail.com',
  socials: {
    github: 'https://github.com/JoisRosalesDev',
    linkedin: 'https://www.linkedin.com/in/jois-rosales',
    portfolio: 'https://portafolio-jois.vercel.app',
  },
  cvUrl: '/CV_Jois_Rosales_FullStack.md',
  availableForWork: true,
};

export const featuredProjects: Project[] = [
  {
    id: 'pipelify',
    title: 'Pipelify',
    subtitle: 'Diseño Visual de Pipelines ETL & Telemetría en Tiempo Real',
    description:
      'Aplicación web para diseñar pipelines ETL de forma visual con React Flow, con monitoreo y telemetría en tiempo real y persistencia relacional en PostgreSQL.',
    image: '/image/proyectos/pipelify-cover.webp',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'React Flow', 'Redis', 'WebSockets', 'SDD / HITL'],
    demoUrl: 'https://pipelify.vercel.app/',
    githubUrl: 'https://github.com/JoisRosalesDev/pipelify',
    featured: true,
  },
  {
    id: 'vault',
    title: 'VAULT',
    subtitle: 'E-commerce con Catálogo Dinámico & Auth OAuth',
    description:
      'Plataforma de comercio electrónico con catálogo dinámico, autenticación segura con OAuth y persistencia de datos en PostgreSQL mediante Prisma ORM.',
    image: '/image/proyectos/vault-hypercars.webp',
    tags: ['Next.js', 'OAuth', 'Prisma ORM', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'SDD / HITL'],
    demoUrl: 'https://vault-hypercars.vercel.app/',
    githubUrl: 'https://github.com/JoisRosalesDev/vault-hypercars',
    featured: true,
  },
  {
    id: 'yeezy-verse',
    title: 'Yeezy-Verse',
    subtitle: 'Monografía Digital & Archivo Cultural',
    description:
      'Experiencia interactiva con estética brutalista y animaciones coreografiadas de alto rendimiento sin sobrecargar el hilo principal del navegador.',
    image: '/image/proyectos/yeezy-verse-cover.webp',
    tags: ['Astro', 'Tailwind CSS', 'GSAP', 'TypeScript', 'SDD / HITL'],
    demoUrl: 'https://yeezy-verse.vercel.app/',
    githubUrl: 'https://github.com/JoisRosalesDev/yeezy-verse',
    featured: true,
  },
  {
    id: 'paws-at-route',
    title: 'Paws At Route',
    subtitle: 'Plataforma para Servicios y Cuidado de Mascotas',
    description:
      'Aplicación web para vincular a dueños de mascotas con cuidadores y paseadores verificados con geolocalización y agenda.',
    image: '/image/proyectos/paws-at-route-cover.webp',
    tags: ['React', 'Node.js', 'Ionic', 'Tailwind CSS'],
    demoUrl: 'https://pawsatroute.netlify.app/',
    githubUrl: 'https://github.com/vMattS/PawsAtRoute',
    featured: false,
  },
];

export const experienceData: ExperienceCompany[] = [
  {
    company: 'Flagare Consultores TI',
    roles: [
      {
        title: 'Ingeniero de Software',
        period: 'Marzo 2026 - Mayo 2026 (contrato a plazo fijo)',
        achievements: [
          'Desarrollé módulos Full-Stack (React/Next.js, Prisma, PostgreSQL) para un dashboard interno, integrando APIs para mostrar datos en tiempo real a los equipos de desarrollo, infraestructura y marketing, y centralizando en una sola plataforma la gestión de información, permisos, roles y asignaciones.',
          'Levanté requerimientos técnicos y redacté reglas de negocio en 2 proyectos antes de implementar los componentes Frontend.',
          'Ejecuté QA y auditorías de software, documentando y derivando 70 incidencias técnicas al equipo para agilizar la corrección de bugs.',
          'Incorporé Claude Code bajo un flujo Spec Driven Development con revisión humana de código, para planificar e investigar soluciones antes de programar, agilizando la etapa previa al desarrollo.',
        ],
      },
      {
        title: 'Ingeniero Trainee (Práctica Profesional)',
        period: 'Diciembre 2025 - Febrero 2026',
        achievements: [
          'Diseñé e implementé un sistema de campañas de correo masivo con control de colas mediante Redis, procesando envíos de hasta 100 correos por campaña.',
          'Desarrollé aplicaciones con Next.js, Prisma y PostgreSQL de complejidad progresiva, desde un CRUD de inventario hasta módulos de autenticación con JWT, hash de contraseñas bcrypt, manejo de sesiones y validaciones. Estandaricé el entorno con Docker en 4 repositorios de aprendizaje, permitiendo levantar cada proyecto con un solo comando.',
          'Redacté documentación técnica de 4 proyectos para facilitar la transferencia de conocimiento del equipo.',
        ],
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Astro',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Angular (Básico)',
    ],
    highlightedSkills: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Databases',
    skills: [
      'Node.js',
      'FastAPI',
      'Python',
      'Prisma (ORM)',
      'PostgreSQL',
      'SQL',
      'Redis',
      'REST APIs',
      'JWT & OAuth',
      'bcrypt',
    ],
    highlightedSkills: ['Node.js', 'FastAPI', 'Prisma (ORM)', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      'Spec Driven Development (SDD)',
      'Human-In-The-Loop (HITL)',
      'Claude Code',
      'Antigravity CLI',
      'Docker',
      'Git / GitHub',
      'CI/CD',
      'Supabase',
      'Vercel',
      'Netlify',
      'Scrum / Metodologías Ágiles',
      'Jira',
      'Code Review',
      'Documentación Técnica',
    ],
    highlightedSkills: [
      'Spec Driven Development (SDD)',
      'Human-In-The-Loop (HITL)',
      'Claude Code',
      'Docker',
      'Scrum / Metodologías Ágiles',
      'Supabase',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Ingeniería en Informática',
    institution: 'Duoc UC: Sede Plaza Norte',
    location: 'Santiago, Chile',
    period: 'Marzo 2022 - Junio 2026',
    badge: 'Titulado',
    image: '/image/certificados/certificado-título-profesional.webp',
  },
];

export const certificationData: CertificationItem[] = [
  {
    title: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    image: '/image/certificados/certificado-scrum.webp',
  },
  {
    title: 'English Language Certificate (B1 Level)',
    issuer: 'TalkChile',
    image: '/image/certificados/certificado-inglés.webp',
  },
];

export const languagesData: LanguageItem[] = [
  {
    name: 'Español',
    level: 'Nativo',
  },
  {
    name: 'Inglés',
    level: 'Intermedio (B1)',
  },
];

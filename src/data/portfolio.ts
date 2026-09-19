import type {
  PersonalInfo,
  Project,
  ExperienceCompany,
  SkillCategory,
  EducationItem,
  CertificationItem,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Jois Rosales Fernández',
  role: 'Ingeniero Informático | Junior Full-Stack Developer',
  subtitle: 'React, Next.js, PostgreSQL | IA Aplicada (SDD & HITL)',
  bio: 'Ingeniero en Informática (Duoc UC) y Desarrollador Full-Stack Junior con experiencia demostrable en la construcción de aplicaciones web utilizando el ecosistema React (Next.js), Prisma y PostgreSQL. Contratado directamente tras mi práctica profesional en Flagare Consultores TI gracias a mi capacidad de adaptación y entrega de código de calidad. Aplico metodologías ágiles (Scrum) y desarrollo asistido por IA mediante Spec Driven Development (SDD) y Human-In-The-Loop (HITL), garantizando mitigación de riesgos arquitectónicos y entregas eficientes.',
  location: 'Colina, Región Metropolitana, Chile',
  phone: '(+56) 9 3146 6378',
  email: 'joisrosafer@gmail.com',
  socials: {
    github: 'https://github.com/JoisRosalesDev',
    linkedin: 'https://www.linkedin.com/in/jois-rosales-fern%C3%A1ndez-260baa24b/',
    portfolio: 'https://portafolio-jois.vercel.app',
  },
  cvUrl: '/CV_JOIS_ROSALES.md',
  availableForWork: true,
};

export const featuredProjects: Project[] = [
  {
    id: 'pipelify',
    title: 'Pipelify',
    subtitle: 'Plataforma SaaS DevTool & Orquestador ETL',
    description:
      'Plataforma SaaS distribuida para diseño visual de pipelines ETL interactivos con React Flow, telemetría reactiva en tiempo real y persistencia relacional.',
    image: '/image/proyectos/pipelify-cover.webp',
    tags: ['Next.js', 'React Flow', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'SDD / HITL'],
    demoUrl: 'https://pipelify.vercel.app/',
    githubUrl: 'https://github.com/JoisRosalesDev/pipelify',
    featured: true,
  },
  {
    id: 'vault-hypercars',
    title: 'VAULT | Hypercars',
    subtitle: 'E-commerce Premium de Vehículos de Alta Gama',
    description:
      'Plataforma de comercio electrónico de alto rendimiento con catálogo dinámico, autenticación segura y persistencia PostgreSQL mediante Prisma ORM.',
    image: '/image/proyectos/vault-hypercars.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'SDD / HITL'],
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
        title: 'Desarrollador de Software Junior',
        period: 'Marzo 2026 - Mayo 2026',
        achievements: [
          'Participé en el ciclo de vida completo de desarrollo de múltiples proyectos, desde el levantamiento técnico y redacción de reglas de negocio, hasta la implementación de componentes Frontend.',
          'Desarrollé módulos Full-Stack para un dashboard de uso interno, construyendo interfaces de usuario y gestionando el consumo de APIs para la integración de datos en tiempo real.',
          'Ejecuté pruebas de calidad (QA) y auditorías de software, identificando, documentando y derivando incidencias técnicas para agilizar el ciclo de corrección de errores (debugging) del equipo.',
          'Integré herramientas de Inteligencia Artificial para optimizar la planificación técnica y la investigación de soluciones previo a la escritura de código.',
        ],
      },
      {
        title: 'Práctica Profesional - Ingeniero Trainee',
        period: 'Diciembre 2025 - Febrero 2026',
        achievements: [
          'Construí un ecosistema de repositorios de aprendizaje progresivo, orquestando el entorno de desarrollo con Docker.',
          'Desarrollé aplicaciones escalonadas utilizando Next.js, Prisma y PostgreSQL, abarcando desde sistemas CRUD de inventario hasta módulos seguros de autenticación y registro de usuarios.',
          'Diseñé e implementé un sistema de envío de campañas de correo masivo, integrando Redis para el control de colas y gestión eficiente del flujo de datos.',
          'Elaboré documentación técnica exhaustiva para facilitar la transferencia de conocimiento y estandarizar las prácticas del equipo.',
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
      'Angular',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
    highlightedSkills: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Prisma ORM', 'PostgreSQL', 'Redis', 'REST APIs'],
    highlightedSkills: ['Node.js', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      'Spec Driven Development (SDD)',
      'Human-In-The-Loop (HITL)',
      'Scrum',
      'Docker',
      'Git / GitHub',
      'Antigravity CLI',
      'Claude Code',
      'Jira',
    ],
    highlightedSkills: [
      'Spec Driven Development (SDD)',
      'Human-In-The-Loop (HITL)',
      'Scrum',
      'Docker',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Ingeniería en Informática',
    institution: 'Duoc UC: Sede Plaza Norte',
    location: 'Santiago, Chile',
    period: 'Marzo 2022 - Junio 2026',
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
  {
    title: 'Certificado de Título Profesional',
    issuer: 'Duoc UC',
    image: '/image/certificados/certificado-título-profesional.webp',
  },
];

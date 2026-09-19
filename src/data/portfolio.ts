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
    linkedin: 'https://linkedin.com/in/joisrosales',
    portfolio: 'https://joisrosales.dev',
  },
  cvUrl: '/CV_JOIS_ROSALES.md',
  availableForWork: true,
};

export const featuredProjects: Project[] = [
  {
    id: 'pipelify',
    title: 'Pipelify DevTool',
    subtitle: 'SaaS de automatización CI/CD con Spec-Driven Development',
    description:
      'Plataforma para orquestar agentes de IA en flujos de integración y entrega continua. Mitiga riesgos arquitectónicos aplicando Spec-Driven Development (SDD) y supervisión Human-In-The-Loop (HITL) para garantizar control de calidad estricto antes de cada merge.',
    image: '/projects/pipelify.webp',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI SDK', 'SDD & HITL'],
    demoUrl: 'https://pipelify-demo.vercel.app',
    githubUrl: 'https://github.com/JoisRosalesDev/new-portfolio',
    featured: true,
  },
  {
    id: 'flagare-dashboard',
    title: 'Flagare Operations Dashboard',
    subtitle: 'Plataforma empresarial de telemetría y APIs en tiempo real',
    description:
      'Módulos Full-Stack para dashboard empresarial interno. Implementa ingesta y visualización de datos operacionales en tiempo real, consumo resiliente de APIs REST, y reportes de auditoría técnica y QA para optimizar el ciclo de debugging.',
    image: '/projects/flagare-dashboard.webp',
    tags: ['React 19', 'Next.js', 'Prisma', 'PostgreSQL', 'Redis', 'REST APIs'],
    demoUrl: 'https://flagare-dashboard.vercel.app',
    githubUrl: 'https://github.com/JoisRosalesDev/new-portfolio',
    featured: true,
  },
  {
    id: 'queuemail-engine',
    title: 'QueueMail Engine',
    subtitle: 'Sistema distribuido de envío masivo con colas Redis',
    description:
      'Arquitectura de alto rendimiento para despacho automatizado de campañas de correo masivo. Integra colas asíncronas con Redis y Docker para control de flujo, balanceo de carga, reintentos con backoff y monitoreo de tasa de entrega.',
    image: '/projects/queuemail.webp',
    tags: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'TypeScript', 'BullMQ'],
    demoUrl: 'https://queuemail.vercel.app',
    githubUrl: 'https://github.com/JoisRosalesDev/new-portfolio',
    featured: true,
  },
  {
    id: 'devinventory-core',
    title: 'DevInventory Core',
    subtitle: 'Sistema escalable de control de inventario y autenticación',
    description:
      'Solución integral de gestión de existencias con control de acceso basado en roles (RBAC). Diseñado con arquitectura limpia, transacciones auditables en PostgreSQL mediante Prisma, y flujos de autenticación robustos.',
    image: '/projects/devinventory.webp',
    tags: ['Astro', 'React', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://devinventory.vercel.app',
    githubUrl: 'https://github.com/JoisRosalesDev/new-portfolio',
    featured: true,
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
  },
  {
    title: 'English Language Certificate (B1 Level)',
    issuer: 'TalkChile',
  },
  {
    title: 'Certificado de Título Profesional',
    issuer: 'Duoc UC',
  },
];

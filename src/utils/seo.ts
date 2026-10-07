import type { PersonalInfo } from '../types/portfolio';

export interface PersonSchemaOptions {
  siteUrl?: string;
  imageUrl?: string;
}

export function generatePersonSchema(
  info: PersonalInfo,
  options: PersonSchemaOptions = {}
) {
  const siteUrl = options.siteUrl || info.socials.portfolio || 'https://portafolio-jois.vercel.app';
  const imageUrl = options.imageUrl || `${siteUrl}/image/proyectos/pipelify-cover.webp`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: info.name,
    url: `${siteUrl}/`,
    image: imageUrl,
    jobTitle: info.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Flagare Consultores TI',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Duoc UC',
    },
    sameAs: [
      info.socials.linkedin,
      info.socials.github,
    ],
    knowsAbout: [
      'Full-Stack Development',
      'React',
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'FastAPI',
      'Python',
      'Redis',
      'Docker',
      'Astro',
      'Tailwind CSS',
      'TypeScript',
      'Supabase',
      'Claude Code',
      'Antigravity CLI',
      'Spec Driven Development',
      'Human-In-The-Loop',
      'Scrum',
    ],
  };
}

export interface JsonLdOptions {
  siteUrl?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  title?: string;
  description?: string;
}

export function generateJsonLd(
  info: PersonalInfo,
  options: JsonLdOptions = {}
) {
  const siteUrl = options.siteUrl || info.socials.portfolio || 'https://portafolio-jois.vercel.app';
  const canonicalUrl = options.canonicalUrl || `${siteUrl}/`;
  const ogImageUrl = options.ogImageUrl || `${siteUrl}/image/proyectos/pipelify-cover.webp`;
  const title = options.title || `${info.name} | Ingeniero en Informática & Full-Stack Developer`;
  const description = options.description || info.bio;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: `${info.name} | Portfolio`,
        description,
        inLanguage: 'es-CL',
      },
      generatePersonSchema(info, { siteUrl, imageUrl: ogImageUrl }),
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: canonicalUrl,
        name: title,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImageUrl,
        },
        inLanguage: 'es-CL',
      },
    ],
  };
}

import { describe, it, expect } from 'vitest';
import { personalInfo } from '@/data/portfolio';
import { generatePersonSchema, generateJsonLd } from '@/utils/seo';

describe('SEO & Structured Data Schemas', () => {
  describe('Person Schema (generatePersonSchema)', () => {
    it('should generate valid Person schema matching Schema.org specification', () => {
      const schema = generatePersonSchema(personalInfo);

      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Person');
      expect(schema.name).toBe(personalInfo.name);
      expect(typeof schema.name).toBe('string');
      expect(schema.name.length).toBeGreaterThan(0);

      expect(schema.jobTitle).toBe(personalInfo.role);
      expect(typeof schema.jobTitle).toBe('string');
      expect(schema.jobTitle.length).toBeGreaterThan(0);

      expect(schema.url).toBeTruthy();
      expect(schema.url).toMatch(/^https?:\/\//);

      expect(Array.isArray(schema.sameAs)).toBe(true);
      expect(schema.sameAs).toContain(personalInfo.socials.github);
      expect(schema.sameAs).toContain(personalInfo.socials.linkedin);
    });

    it('should allow custom siteUrl and image override', () => {
      const customUrl = 'https://custom-domain.com';
      const customImage = 'https://custom-domain.com/custom.png';
      const schema = generatePersonSchema(personalInfo, {
        siteUrl: customUrl,
        imageUrl: customImage,
      });

      expect(schema.url).toBe(`${customUrl}/`);
      expect(schema.image).toBe(customImage);
      expect(schema['@id']).toBe(`${customUrl}/#person`);
    });
  });

  describe('Full JSON-LD Graph (generateJsonLd)', () => {
    it('should generate a valid JSON-LD graph containing WebSite, Person, and ProfilePage', () => {
      const jsonLd = generateJsonLd(personalInfo);

      expect(jsonLd['@context']).toBe('https://schema.org');
      expect(Array.isArray(jsonLd['@graph'])).toBe(true);

      const types = jsonLd['@graph'].map((item) => item['@type']);
      expect(types).toContain('WebSite');
      expect(types).toContain('Person');
      expect(types).toContain('ProfilePage');

      const person = jsonLd['@graph'].find((item) => item['@type'] === 'Person') as
        | ReturnType<typeof generatePersonSchema>
        | undefined;
      expect(person).toBeDefined();
      expect(person?.name).toBe(personalInfo.name);
      expect(person?.jobTitle).toBe(personalInfo.role);
    });
  });
});

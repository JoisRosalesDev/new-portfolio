import { describe, it, expect } from 'vitest';
import {
  personalInfo,
  skills,
  experiences,
  projects,
  education,
  featuredProjects,
  experienceData,
  skillCategories,
  educationData,
} from '@/data/portfolio';

describe('Portfolio Data Integrity', () => {
  describe('personalInfo', () => {
    it('should have valid basic information', () => {
      expect(personalInfo).toBeDefined();
      expect(personalInfo.name).toBeTruthy();
      expect(typeof personalInfo.name).toBe('string');
      expect(personalInfo.role).toBeTruthy();
      expect(typeof personalInfo.role).toBe('string');
    });

    it('should have a valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(personalInfo.email).toMatch(emailRegex);
    });

    it('should have valid social and cv URLs', () => {
      expect(personalInfo.socials.github).toMatch(/^https?:\/\//);
      expect(personalInfo.socials.linkedin).toMatch(/^https?:\/\//);
      expect(personalInfo.cvUrl).toBeTruthy();
      // cvUrl can be a local relative path or external URL
      expect(personalInfo.cvUrl).toMatch(/^(\/|https?:\/\/)/);
    });
  });

  describe('skills', () => {
    it('should have a non-empty skills array', () => {
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBeGreaterThan(0);
    });

    it('should have name, category, and level for all skills', () => {
      for (const skill of skills) {
        expect(skill.name).toBeTruthy();
        expect(typeof skill.name).toBe('string');
        expect(skill.category).toBeTruthy();
        expect(typeof skill.category).toBe('string');
        expect(skill.level).toBeTruthy();
        expect(typeof skill.level).toBe('string');
      }
    });

    it('should also validate skillCategories structure', () => {
      expect(Array.isArray(skillCategories)).toBe(true);
      expect(skillCategories.length).toBeGreaterThan(0);
      for (const cat of skillCategories) {
        expect(cat.category).toBeTruthy();
        expect(Array.isArray(cat.skills)).toBe(true);
        expect(cat.skills.length).toBeGreaterThan(0);
      }
    });
  });

  describe('experiences', () => {
    it('should have a non-empty experiences array', () => {
      expect(Array.isArray(experiences)).toBe(true);
      expect(experiences.length).toBeGreaterThan(0);
    });

    it('should have company, role, period, description, and highlights for all items', () => {
      for (const exp of experiences) {
        expect(exp.company).toBeTruthy();
        expect(typeof exp.company).toBe('string');
        expect(exp.role).toBeTruthy();
        expect(typeof exp.role).toBe('string');
        expect(exp.period).toBeTruthy();
        expect(typeof exp.period).toBe('string');
        expect(exp.description).toBeTruthy();
        expect(typeof exp.description).toBe('string');
        expect(Array.isArray(exp.highlights)).toBe(true);
        expect(exp.highlights.length).toBeGreaterThan(0);
      }
    });

    it('should also validate experienceData company and roles structure', () => {
      expect(Array.isArray(experienceData)).toBe(true);
      expect(experienceData.length).toBeGreaterThan(0);
      for (const companyExp of experienceData) {
        expect(companyExp.company).toBeTruthy();
        expect(Array.isArray(companyExp.roles)).toBe(true);
        expect(companyExp.roles.length).toBeGreaterThan(0);
        for (const role of companyExp.roles) {
          expect(role.title).toBeTruthy();
          expect(role.period).toBeTruthy();
          expect(Array.isArray(role.achievements)).toBe(true);
          expect(role.achievements.length).toBeGreaterThan(0);
        }
      }
    });
  });

  describe('projects', () => {
    it('should have a non-empty projects array', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
      expect(featuredProjects.length).toBeGreaterThan(0);
    });

    it('should have title, description, tags, and valid links where present', () => {
      for (const project of projects) {
        expect(project.title).toBeTruthy();
        expect(typeof project.title).toBe('string');
        expect(project.description).toBeTruthy();
        expect(typeof project.description).toBe('string');
        expect(Array.isArray(project.tags)).toBe(true);
        expect(project.tags.length).toBeGreaterThan(0);

        if (project.demoUrl) {
          expect(project.demoUrl).toMatch(/^https?:\/\//);
        }
        if (project.githubUrl) {
          expect(project.githubUrl).toMatch(/^https?:\/\//);
        }
      }
    });
  });

  describe('education', () => {
    it('should have a non-empty education array', () => {
      expect(Array.isArray(education)).toBe(true);
      expect(education.length).toBeGreaterThan(0);
      expect(educationData.length).toBeGreaterThan(0);
    });

    it('should have institutions and degrees populated for each entry', () => {
      for (const item of education) {
        expect(item.institution).toBeTruthy();
        expect(typeof item.institution).toBe('string');
        expect(item.degree).toBeTruthy();
        expect(typeof item.degree).toBe('string');
      }
    });
  });
});

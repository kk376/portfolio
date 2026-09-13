import { describe, it, expect } from 'vitest';
import {
  PERSONAL_INFO,
  SKILL_GROUPS,
  UPSTREAM_CONTRIBUTIONS,
  FLAGSHIP_PROJECTS,
  SYSTEM_SPECS,
} from '../src/data/portfolioData';

describe('Portfolio Data Integrity & Schema Validation', () => {
  it('validates personal information schema and contact format', () => {
    expect(PERSONAL_INFO.name).toBe('Kushagra Kumar');
    expect(PERSONAL_INFO.handle).toBe('kk376');
    expect(PERSONAL_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(PERSONAL_INFO.github).toMatch(/^https:\/\/github\.com\//);
    expect(PERSONAL_INFO.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    expect(PERSONAL_INFO.shortBio.length).toBeGreaterThan(20);
    expect(PERSONAL_INFO.education).toContain('BCA');
  });

  it('validates skill groups and items integrity', () => {
    expect(SKILL_GROUPS.length).toBeGreaterThanOrEqual(3);
    for (const group of SKILL_GROUPS) {
      expect(group.title.length).toBeGreaterThan(0);
      expect(group.level.length).toBeGreaterThan(0);
      expect(group.skills.length).toBeGreaterThan(0);
      for (const skill of group.skills) {
        expect(skill.name.length).toBeGreaterThan(0);
        expect(skill.tag.length).toBeGreaterThan(0);
      }
    }
  });

  it('validates upstream contributions entries and links', () => {
    expect(UPSTREAM_CONTRIBUTIONS.length).toBeGreaterThanOrEqual(3);
    for (const item of UPSTREAM_CONTRIBUTIONS) {
      expect(item.id.length).toBeGreaterThan(0);
      expect(['github', 'gitlab']).toContain(item.platform);
      expect(item.url).toMatch(/^https:\/\/(github\.com|gitlab\.com)\//);
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.summary.length).toBeGreaterThan(0);
      expect(item.tags.length).toBeGreaterThan(0);
      if (item.diagnostic) {
        expect(item.diagnostic.symptom.length).toBeGreaterThan(0);
        expect(item.diagnostic.rootCause.length).toBeGreaterThan(0);
        expect(item.diagnostic.fix.length).toBeGreaterThan(0);
      }
    }
  });

  it('validates flagship projects schema', () => {
    expect(FLAGSHIP_PROJECTS.length).toBeGreaterThanOrEqual(4);
    for (const project of FLAGSHIP_PROJECTS) {
      expect(project.id.length).toBeGreaterThan(0);
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.tagline.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\//);
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });

  it('validates system workstation telemetry specifications', () => {
    expect(SYSTEM_SPECS.user).toBe('kk376');
    expect(SYSTEM_SPECS.host).toBe('Thin A15 B7UCX');
    expect(SYSTEM_SPECS.os).toContain('Fedora');
    expect(SYSTEM_SPECS.kernel).toMatch(/Linux/);
    expect(SYSTEM_SPECS.cpu.length).toBeGreaterThan(0);
    expect(SYSTEM_SPECS.gpu.length).toBeGreaterThan(0);
    expect(SYSTEM_SPECS.memory.length).toBeGreaterThan(0);
  });
});

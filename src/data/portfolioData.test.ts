import { describe, it, expect } from "vitest";
import {
  PERSONAL_INFO,
  NAV_ITEMS,
  STATS_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  ROADMAP_PROJECTS_DATA,
  TIMELINE_DATA,
} from "./portfolioData";

describe("portfolioData", () => {
  it("defines personal info with required contact properties", () => {
    expect(PERSONAL_INFO.name).toBe("Kushagra Kumar");
    expect(PERSONAL_INFO.email).toContain("@");
    expect(PERSONAL_INFO.githubUrl).toMatch(/^https:\/\/github\.com\//);
    expect(PERSONAL_INFO.linkedinUrl).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
    expect(PERSONAL_INFO.crudRepoUrl).toContain("github.com");
    expect(PERSONAL_INFO.miniProjectsUrl).toContain("github.com");
  });

  it("contains navigation items with unique IDs", () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
    const ids = NAV_ITEMS.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("contains valid stats metrics", () => {
    expect(STATS_DATA.length).toBe(4);
    for (const stat of STATS_DATA) {
      expect(stat.label).toBeTruthy();
      expect(stat.value).toBeTruthy();
      expect(stat.iconName).toBeTruthy();
      expect(stat.color).toBeTruthy();
    }
  });

  it("contains verified technical skill categories", () => {
    expect(SKILLS_DATA.length).toBeGreaterThanOrEqual(3);
    for (const category of SKILLS_DATA) {
      expect(category.title).toBeTruthy();
      expect(category.description).toBeTruthy();
      expect(category.items.length).toBeGreaterThan(0);
    }
  });

  it("contains completed projects with valid links and tags", () => {
    expect(PROJECTS_DATA.length).toBeGreaterThanOrEqual(2);
    for (const project of PROJECTS_DATA) {
      expect(project.name).toBeTruthy();
      expect(project.desc).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.status).toBe("Completed");
      expect(project.githubUrl).toContain("github.com");
    }
  });

  it("contains roadmap upcoming projects", () => {
    expect(ROADMAP_PROJECTS_DATA.length).toBeGreaterThan(0);
    for (const item of ROADMAP_PROJECTS_DATA) {
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.tags.length).toBeGreaterThan(0);
      expect(item.eta).toBeTruthy();
    }
  });

  it("contains chronological timeline entries", () => {
    expect(TIMELINE_DATA.length).toBeGreaterThanOrEqual(4);
    for (const entry of TIMELINE_DATA) {
      expect(entry.year).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.subtitle).toBeTruthy();
      expect(entry.description).toBeTruthy();
      expect(["left", "right"]).toContain(entry.side);
    }
  });
});

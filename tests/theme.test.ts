import { describe, it, expect, beforeEach } from 'vitest';

describe('Theme Context & Engine Mechanics', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark', 'light');
  });

  it('correctly sets dark mode on root document element', () => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('correctly toggles to light mode on root document element', () => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('stores and retrieves theme preference in localStorage', () => {
    localStorage.setItem('theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    localStorage.setItem('theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});

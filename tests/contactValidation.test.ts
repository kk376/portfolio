import { describe, it, expect } from 'vitest';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateContactForm(payload: ContactPayload): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length === 0) {
    errors.push('Name is required');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push('A valid email address is required');
  }

  if (!payload.subject || payload.subject.trim().length === 0) {
    errors.push('Subject is required');
  }

  if (!payload.message || payload.message.trim().length < 5) {
    errors.push('Message must be at least 5 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

describe('Contact Form Validation & Security Logic', () => {
  it('passes on valid contact submission data', () => {
    const validData: ContactPayload = {
      name: 'Alice Developer',
      email: 'alice@example.com',
      subject: 'Collaboration opportunity',
      message: 'Hello Kushagra, I enjoyed checking out your portfolio!',
    };

    const result = validateContactForm(validData);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('rejects empty or whitespace-only fields', () => {
    const invalidData: ContactPayload = {
      name: '   ',
      email: 'not-an-email',
      subject: '',
      message: 'hi',
    };

    const result = validateContactForm(invalidData);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(4);
  });

  it('enforces email structure with domain and tld', () => {
    const invalidEmail: ContactPayload = {
      name: 'Bob',
      email: 'bob@no-tld',
      subject: 'Hello',
      message: 'Great open source projects.',
    };

    const result = validateContactForm(invalidEmail);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('A valid email address is required');
  });
});

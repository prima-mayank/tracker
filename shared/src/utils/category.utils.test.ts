import { describe, it, expect } from 'vitest';
import { detectCategory } from './category.utils.js';

describe('detectCategory', () => {
  it('detects electronics from phone query', () => {
    expect(detectCategory('iPhone 15 Pro Max')).toBe('electronics');
  });

  it('detects fashion from clothing query', () => {
    expect(detectCategory('red kurta for women')).toBe('fashion');
  });

  it('detects grocery from food query', () => {
    expect(detectCategory('tata salt 1kg')).toBe('grocery');
  });

  it('returns general for unknown query', () => {
    expect(detectCategory('some random thing xyz')).toBe('general');
  });

  it('grocery wins over general when keyword matches (milk)', () => {
    expect(detectCategory('milk chocolate')).toBe('grocery');
  });

  it('electronics wins over fashion (laptop bag)', () => {
    expect(detectCategory('laptop bag leather')).toBe('electronics');
  });

  it('returns general for empty string', () => {
    expect(detectCategory('')).toBe('general');
  });

  it('is case-insensitive', () => {
    expect(detectCategory('SAMSUNG PHONE')).toBe('electronics');
  });
});

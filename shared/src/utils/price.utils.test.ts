import { describe, it, expect } from 'vitest';
import { parseIndianPrice } from './price.utils.js';

describe('parseIndianPrice', () => {
  it('parses Indian lakh format', () => {
    expect(parseIndianPrice('₹1,23,456')).toBe(123456);
  });

  it('parses price with decimals', () => {
    expect(parseIndianPrice('₹1,499.00')).toBe(1499);
  });

  it('takes discounted price from MRP + price string', () => {
    expect(parseIndianPrice('MRP ₹1,999 ₹1,499')).toBe(1499);
  });

  it('parses Rs. format', () => {
    expect(parseIndianPrice('Rs. 299')).toBe(299);
  });

  it('parses price with space after symbol', () => {
    expect(parseIndianPrice('₹ 299')).toBe(299);
  });

  it('parses bare number string', () => {
    expect(parseIndianPrice('1499')).toBe(1499);
  });

  it('parses price with trailing /-', () => {
    expect(parseIndianPrice('₹1,499/-')).toBe(1499);
  });

  it('returns 0 for empty string', () => {
    expect(parseIndianPrice('')).toBe(0);
  });

  it('returns 0 for Out of Stock', () => {
    expect(parseIndianPrice('Out of Stock')).toBe(0);
  });

  it('returns 0 for N/A', () => {
    expect(parseIndianPrice('N/A')).toBe(0);
  });

  it('returns 0 for Free', () => {
    expect(parseIndianPrice('Free')).toBe(0);
  });
});

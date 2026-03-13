import { describe, it, expect } from 'vitest';
import { ScraperError, SCRAPER_ERROR_CODE } from '../../scrapers/errors/scraper.errors.js';

describe('ScraperError', () => {
  it('is an instance of Error', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.CAPTCHA_DETECTED, 'amazon', 1200);
    expect(err).toBeInstanceOf(Error);
  });

  it('has correct code', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.CAPTCHA_DETECTED, 'amazon', 1200);
    expect(err.code).toBe('CAPTCHA_DETECTED');
  });

  it('has correct source', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.NAVIGATION_TIMEOUT, 'flipkart', 15000);
    expect(err.source).toBe('flipkart');
  });

  it('has correct durationMs', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.SITE_DOWN, 'noon', 500);
    expect(err.durationMs).toBe(500);
  });

  it('uses code as default message', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.SELECTOR_NOT_FOUND, 'meesho', 3000);
    expect(err.message).toBe('SELECTOR_NOT_FOUND');
  });

  it('accepts custom message', () => {
    const err = new ScraperError(SCRAPER_ERROR_CODE.PINCODE_FAILED, 'blinkit', 2000, 'modal not found');
    expect(err.message).toBe('modal not found');
  });
});

export const SCRAPER_ERROR_CODE = {
  CAPTCHA_DETECTED: 'CAPTCHA_DETECTED',
  SELECTOR_NOT_FOUND: 'SELECTOR_NOT_FOUND',
  NAVIGATION_TIMEOUT: 'NAVIGATION_TIMEOUT',
  SITE_DOWN: 'SITE_DOWN',
  GEO_BLOCKED: 'GEO_BLOCKED',
  EXTRACTION_FAILED: 'EXTRACTION_FAILED',
  PINCODE_FAILED: 'PINCODE_FAILED',
} as const;

export type ScraperErrorCode = (typeof SCRAPER_ERROR_CODE)[keyof typeof SCRAPER_ERROR_CODE];

export class ScraperError extends Error {
  readonly code: ScraperErrorCode;
  readonly source: string;
  readonly durationMs: number;

  constructor(code: ScraperErrorCode, source: string, durationMs: number, message?: string) {
    super(message ?? code);
    this.name = 'ScraperError';
    this.code = code;
    this.source = source;
    this.durationMs = durationMs;
  }
}

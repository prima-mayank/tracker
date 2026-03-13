import type { ScraperError } from '../errors/scraper.errors.js';

export const logScraperError = (source: string, query: string, error: ScraperError): void => {
  console.error(
    JSON.stringify({
      level: 'error',
      event: 'scraper_error',
      source,
      query,
      code: error.code,
      message: error.message,
      durationMs: error.durationMs,
      timestamp: new Date().toISOString(),
    }),
  );
};

export const logScraperSuccess = (source: string, query: string, resultCount: number, durationMs: number): void => {
  console.log(
    JSON.stringify({
      level: 'info',
      event: 'scraper_success',
      source,
      query,
      resultCount,
      durationMs,
      timestamp: new Date().toISOString(),
    }),
  );
};

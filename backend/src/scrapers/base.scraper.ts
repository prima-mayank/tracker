import type { ScraperAdapter, ScraperResult, SiteConfig } from '@tracker/shared';

export type { ScraperAdapter, SiteConfig };

export abstract class BaseScraper implements ScraperAdapter {
  abstract readonly source: string;
  abstract readonly config: SiteConfig;

  abstract search(query: string, category?: string): Promise<ScraperResult[]>;
}

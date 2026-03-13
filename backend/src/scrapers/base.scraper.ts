import type { ScraperAdapter, ScraperResult, SiteConfig } from '@tracker/shared';

export type { ScraperAdapter, SiteConfig };

export abstract class BaseScraper implements ScraperAdapter {
  abstract readonly source: string;
  abstract readonly config: SiteConfig;

  protected getPincode(): string | undefined {
    return undefined;
  }

  abstract search(query: string, category?: string): Promise<ScraperResult[]>;
}

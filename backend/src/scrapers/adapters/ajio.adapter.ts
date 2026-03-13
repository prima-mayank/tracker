import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class AjioAdapter extends BaseScraper {
  readonly source = 'ajio';
  readonly config: SiteConfig = {
    name: 'ajio',
    searchUrlTemplate: 'https://www.ajio.com/search/?text={query}',
    selectors: {
      resultContainer: '.item',
      title: '.nameCls',
      price: '.price strong',
      link: 'a',
      image: 'img',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1 (fashion-only — skip for electronics)
    return [];
  }
}

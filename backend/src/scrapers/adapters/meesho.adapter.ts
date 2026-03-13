import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class MeeshoAdapter extends BaseScraper {
  readonly source = 'meesho';
  readonly config: SiteConfig = {
    name: 'meesho',
    searchUrlTemplate: 'https://www.meesho.com/search?q={query}',
    selectors: {
      resultContainer: '.sc-dkzDqf',
      title: '.sc-eDvSVe',
      price: '.sc-eBMEME',
      link: 'a',
      image: 'img',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

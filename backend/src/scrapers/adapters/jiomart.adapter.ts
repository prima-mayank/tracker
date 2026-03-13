import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class JiomartAdapter extends BaseScraper {
  readonly source = 'jiomart';
  readonly config: SiteConfig = {
    name: 'jiomart',
    searchUrlTemplate: 'https://www.jiomart.com/search/{query}',
    selectors: {
      resultContainer: '.product-item',
      title: '.clsgetname',
      price: '#final_price',
      link: 'a',
      image: 'img',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

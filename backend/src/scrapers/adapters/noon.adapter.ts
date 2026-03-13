import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class NoonAdapter extends BaseScraper {
  readonly source = 'noon';
  readonly config: SiteConfig = {
    name: 'noon',
    searchUrlTemplate: 'https://www.noon.com/india-en/search/?q={query}',
    selectors: {
      resultContainer: '[data-qa="product-block"]',
      title: '[data-qa="product-name"]',
      price: '[data-qa="product-price"]',
      link: 'a',
      image: 'img',
      rating: '[data-qa="product-rating"]',
      reviewCount: '[data-qa="product-rating-count"]',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

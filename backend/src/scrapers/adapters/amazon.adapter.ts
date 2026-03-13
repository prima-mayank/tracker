import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class AmazonAdapter extends BaseScraper {
  readonly source = 'amazon';
  readonly config: SiteConfig = {
    name: 'amazon',
    searchUrlTemplate: 'https://www.amazon.in/s?k={query}',
    selectors: {
      resultContainer: '[data-component-type="s-search-result"]',
      title: 'h2 a span',
      price: '.a-price-whole',
      link: 'h2 a',
      image: '.s-image',
      rating: '.a-icon-alt',
      reviewCount: '.a-size-base.s-underline-text',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

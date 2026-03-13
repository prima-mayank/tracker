import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class SnapdealAdapter extends BaseScraper {
  readonly source = 'snapdeal';
  readonly config: SiteConfig = {
    name: 'snapdeal',
    searchUrlTemplate: 'https://www.snapdeal.com/search?keyword={query}',
    selectors: {
      resultContainer: '.product-tuple-listing',
      title: '.product-title',
      price: '.product-price',
      link: 'a.dp-widget-link',
      image: 'img.product-image',
      rating: '.filled-stars',
      reviewCount: '.product-rating-count',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

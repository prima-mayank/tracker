import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class MyntraAdapter extends BaseScraper {
  readonly source = 'myntra';
  readonly config: SiteConfig = {
    name: 'myntra',
    searchUrlTemplate: 'https://www.myntra.com/{query}',
    selectors: {
      resultContainer: '.results-base li',
      title: '.product-base .product-brand',
      price: '.product-discountedPrice',
      link: 'a',
      image: 'img.img-responsive',
      rating: '.product-ratingsCount',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1 (fashion-only — skip for electronics)
    return [];
  }
}

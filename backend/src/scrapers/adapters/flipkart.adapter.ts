import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class FlipkartAdapter extends BaseScraper {
  readonly source = 'flipkart';
  readonly config: SiteConfig = {
    name: 'flipkart',
    searchUrlTemplate: 'https://www.flipkart.com/search?q={query}',
    selectors: {
      resultContainer: '._1AtVbE',
      title: '._4rR01T',
      price: '._30jeq3',
      link: 'a._1fQZEK',
      image: '._396cs4',
      rating: '._3LWZlK',
      reviewCount: '._2_R_DZ',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';
import { env } from '../../config/index.js';

export class BlinkitAdapter extends BaseScraper {
  readonly source = 'blinkit';
  readonly config: SiteConfig = {
    name: 'blinkit',
    searchUrlTemplate: 'https://blinkit.com/s/?q={query}',
    selectors: {
      resultContainer: '.product-container',
      title: '.product-name',
      price: '.product-price',
      link: 'a',
      image: 'img',
    },
    requiresPincode: true,
  };

  readonly pincode = env.BLINKIT_PINCODE;

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1 (pincode-aware)
    return [];
  }
}

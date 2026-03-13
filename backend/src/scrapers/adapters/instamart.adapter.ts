import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';
import { env } from '../../config/index.js';

export class InstamartAdapter extends BaseScraper {
  readonly source = 'instamart';
  readonly config: SiteConfig = {
    name: 'instamart',
    searchUrlTemplate: `https://www.swiggy.com/instamart/search?custom_back=true&query={query}`,
    selectors: {
      resultContainer: '[data-testid="product_card"]',
      title: '[data-testid="item_name"]',
      price: '[data-testid="item_price"]',
      link: 'a',
      image: 'img',
    },
    requiresPincode: true,
  };

  readonly pincode = env.INSTAMART_PINCODE;

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1 (pincode-aware)
    return [];
  }
}

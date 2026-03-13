import type { ScraperResult, SiteConfig } from '@tracker/shared';
import { BaseScraper } from '../base.scraper.js';

export class TataCliqAdapter extends BaseScraper {
  readonly source = 'tatacliq';
  readonly config: SiteConfig = {
    name: 'tatacliq',
    searchUrlTemplate: 'https://www.tatacliq.com/search/?searchCategory=all&text={query}',
    selectors: {
      resultContainer: '.ProductModule__container',
      title: '.ProductModule__title',
      price: '.ProductModule__price',
      link: 'a',
      image: 'img',
    },
  };

  async search(_query: string, _category?: string): Promise<ScraperResult[]> {
    // TODO: Step 1
    return [];
  }
}

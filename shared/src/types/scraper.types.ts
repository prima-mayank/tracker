/** Duck-typed Page interface so shared/ doesn't depend on playwright directly */
export interface BrowserPage {
  goto(url: string, options?: Record<string, unknown>): Promise<unknown>;
  addCookies(cookies: unknown[]): Promise<void>;
  waitForSelector(selector: string, options?: Record<string, unknown>): Promise<unknown>;
  click(selector: string): Promise<void>;
  fill(selector: string, value: string): Promise<void>;
  waitForTimeout(ms: number): Promise<void>;
}

export interface ScraperResult {
  source: string;
  title: string;
  price: number;
  currency: string;
  originalUrl: string;
  affiliateUrl?: string;
  imageUrl?: string;
  sellerName?: string;
  rating?: number;
  reviewCount?: number;
  offerText?: string;
  isAvailable: boolean;
}

type Selector = string | string[];

export interface SiteConfig {
  name: string;
  searchUrlTemplate: string;
  navigationTimeout?: number;
  extractionTimeout?: number;
  blockCSS?: boolean;
  requiresPincode?: boolean;
  setPincode?: (page: BrowserPage, pincode: string) => Promise<void>;
  selectors: {
    resultContainer: Selector;
    title: Selector;
    price: Selector;
    originalPrice?: Selector;
    link: Selector;
    image?: Selector;
    rating?: Selector;
    reviewCount?: Selector;
    offerText?: Selector;
    sellerName?: Selector;
  };
}

export interface ScraperAdapter {
  readonly source: string;
  search(query: string, category?: string): Promise<ScraperResult[]>;
}

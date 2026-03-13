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

export interface SiteConfig {
  name: string;
  searchUrlTemplate: string;
  selectors: {
    resultContainer: string;
    title: string;
    price: string;
    link: string;
    image?: string;
    rating?: string;
    reviewCount?: string;
    offerText?: string;
  };
  priceParser?: (raw: string) => number;
  requiresPincode?: boolean;
}

export interface ScraperAdapter {
  readonly source: string;
  search(query: string, category?: string): Promise<ScraperResult[]>;
}

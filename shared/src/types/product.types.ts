export interface PriceEntry {
  id: string;
  productId: string;
  source: string;
  price: number;
  currency: string;
  originalUrl: string;
  affiliateUrl: string | null;
  sellerName: string | null;
  rating: number | null;
  reviewCount: number | null;
  offerText: string | null;
  isAvailable: boolean;
  fetchedAt: string;
}

export interface ProductResult {
  id: string;
  title: string;
  normalizedTitle: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: string;
  updatedAt: string;
  latestPrices: PriceEntry[];
}

export interface AggregatedProduct {
  product: ProductResult;
  lowestPrice: number;
  highestPrice: number;
  smartScore: number;
  priceEntries: PriceEntry[];
}

export interface TrackedProduct {
  id: string;
  userId: string;
  productId: string;
  targetPrice: number | null;
  lastAlertedAt: string | null;
  lastCheckedAt: string | null;
  isActive: boolean;
  createdAt: string;
}

export interface PriceAlert {
  trackedProductId: string;
  userEmail: string;
  productTitle: string;
  currentPrice: number;
  targetPrice: number;
  source: string;
  productUrl: string;
}

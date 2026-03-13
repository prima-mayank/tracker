import type { PriceEntry } from '@prisma/client';
import type { ScraperResult } from '@tracker/shared';

export const createPriceEntry = async (
  _productId: string,
  _result: ScraperResult,
): Promise<PriceEntry> => {
  // TODO: Step 3
  throw new Error('Not implemented');
};

export const getLatestPricesByProduct = async (_productId: string): Promise<PriceEntry[]> => {
  // TODO: Step 4
  return [];
};

export const getPriceHistory = async (
  _productId: string,
  _page: number,
  _pageSize: number,
): Promise<{ entries: PriceEntry[]; total: number }> => {
  // TODO: Step 4
  return { entries: [], total: 0 };
};

export const wasRecentlyFetched = async (
  _productId: string,
  _ttlMinutes: number,
): Promise<boolean> => {
  // TODO: Step 3 (soft cache check)
  return false;
};

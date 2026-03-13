import type { TrackedProduct } from '@prisma/client';

export const createTrackedProduct = async (
  _userId: string,
  _productId: string,
  _targetPrice?: number,
): Promise<TrackedProduct> => {
  // TODO: Step 6
  throw new Error('Not implemented');
};

export const deleteTrackedProduct = async (
  _id: string,
  _userId: string,
): Promise<void> => {
  // TODO: Step 6
};

export const getTrackedProductsByUser = async (
  _userId: string,
): Promise<TrackedProduct[]> => {
  // TODO: Step 6
  return [];
};

export const updateTrackedProduct = async (
  _id: string,
  _userId: string,
  _targetPrice: number | null,
): Promise<TrackedProduct> => {
  // TODO: Step 6
  throw new Error('Not implemented');
};

export const getActiveTrackedProducts = async (): Promise<TrackedProduct[]> => {
  // TODO: Step 7 (price-check job)
  return [];
};

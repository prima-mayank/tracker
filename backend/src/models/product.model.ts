import type { Product } from '@prisma/client';

export const findProductByNormalizedTitle = async (_title: string): Promise<Product | null> => {
  // TODO: Step 3
  return null;
};

export const upsertProduct = async (
  _title: string,
  _normalizedTitle: string,
  _imageUrl?: string,
  _category?: string,
): Promise<Product> => {
  // TODO: Step 3
  throw new Error('Not implemented');
};

export const findProductById = async (_id: string): Promise<Product | null> => {
  // TODO: Step 4
  return null;
};

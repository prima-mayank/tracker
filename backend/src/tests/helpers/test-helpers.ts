import { db } from '../../lib/db.js';

export const clearDatabase = async (): Promise<void> => {
  await db.trackedProduct.deleteMany();
  await db.priceEntry.deleteMany();
  await db.product.deleteMany();
  await db.user.deleteMany();
};

export const createTestUser = async (email: string, passwordHash: string) =>
  db.user.create({ data: { email, passwordHash } });

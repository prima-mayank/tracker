import { db } from '../lib/db.js';
import type { User } from '@prisma/client';

export const findUserByEmail = async (_email: string): Promise<User | null> => {
  // TODO: Step 2
  return null;
};

export const createUser = async (
  _email: string,
  _passwordHash: string,
): Promise<User> => {
  // TODO: Step 2
  throw new Error('Not implemented');
};

export const findUserById = async (_id: string): Promise<User | null> => {
  // TODO: Step 2
  return null;
};

export { db };

import { beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db.js';

beforeAll(async () => {
  await db.$connect();
});

afterAll(async () => {
  await db.$disconnect();
});

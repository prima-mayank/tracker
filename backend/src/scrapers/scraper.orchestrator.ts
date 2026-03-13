import type { ScraperResult } from '@tracker/shared';
import { getAllAdapters } from './scraper.registry.js';

export const runAllAdapters = async (
  _query: string,
  _category?: string,
): Promise<ScraperResult[]> => {
  // TODO: Step 1 — Promise.allSettled across all adapters, filter fulfilled
  const adapters = getAllAdapters();
  const settled = await Promise.allSettled(
    adapters.map((a) => a.search(_query, _category)),
  );

  return settled
    .filter((r): r is PromiseFulfilledResult<ScraperResult[]> => r.status === 'fulfilled')
    .flatMap((r) => r.value);
};

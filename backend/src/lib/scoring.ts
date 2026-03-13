import type { ScraperResult } from '@tracker/shared';

export interface ScoredResult {
  result: ScraperResult;
  smartScore: number;
}

export const scoreResults = (_results: ScraperResult[]): ScoredResult[] => {
  // TODO: implement in Step 3 (smart scoring)
  return [];
};

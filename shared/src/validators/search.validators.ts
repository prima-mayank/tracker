import { z } from 'zod';

export const searchSchema = z.object({
  q: z.string().min(1, 'Query is required').max(200, 'Query too long'),
  page: z.coerce.number().int().min(1).default(1),
  sort: z
    .enum(['price_asc', 'price_desc', 'score_desc', 'rating_desc'])
    .default('score_desc'),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  source: z.string().optional(),
});

export type SearchInput = z.infer<typeof searchSchema>;

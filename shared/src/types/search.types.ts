import type { AggregatedProduct } from './product.types.js';

export interface SearchRequest {
  q: string;
  page?: number;
  sort?: 'price_asc' | 'price_desc' | 'score_desc' | 'rating_desc';
  minPrice?: number;
  maxPrice?: number;
  source?: string;
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  source?: string;
}

export interface SearchResponse {
  query: string;
  results: AggregatedProduct[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

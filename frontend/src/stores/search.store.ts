import { create } from 'zustand';
import type { AggregatedProduct, SearchFilters } from '@tracker/shared';

interface SearchState {
  results: AggregatedProduct[];
  query: string;
  filters: SearchFilters;
  isLoading: boolean;
  setResults: (results: AggregatedProduct[]) => void;
  setQuery: (query: string) => void;
  setFilters: (filters: SearchFilters) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  results: [],
  query: '',
  filters: {},
  isLoading: false,
  setResults: (results) => set({ results }),
  setQuery: (query) => set({ query }),
  setFilters: (filters) => set({ filters }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

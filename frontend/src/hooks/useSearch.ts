'use client';

import { useSearchStore } from '@/stores/search.store';

export const useSearch = () => {
  const { results, query, isLoading, setQuery, setResults, setIsLoading } = useSearchStore();

  const search = async (_q: string) => {
    // TODO: Step 3 — call /api/search
  };

  return { results, query, isLoading, search, setQuery };
};

import { ProductCard } from '@/components/product/ProductCard';
import { SearchSkeleton } from './SearchSkeleton';
import type { AggregatedProduct } from '@tracker/shared';

interface SearchResultsProps {
  query: string;
}

export async function SearchResults({ query }: SearchResultsProps) {
  if (!query) return <p className="text-gray-500">Enter a search term to get started.</p>;

  // TODO: Step 3 — fetch from API
  const results: AggregatedProduct[] = [];

  if (results.length === 0) return <p className="text-gray-500">No results found for "{query}".</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((item) => (
        <ProductCard key={item.product.id} aggregated={item} />
      ))}
    </div>
  );
}

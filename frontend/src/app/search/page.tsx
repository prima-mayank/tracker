import { SearchResults } from '@/components/search/SearchResults';
import { SearchFilters } from '@/components/search/SearchFilters';

interface SearchPageProps {
  searchParams: { q?: string; page?: string; sort?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="w-64 shrink-0">
          <SearchFilters />
        </aside>
        <section className="flex-1">
          <SearchResults query={searchParams.q ?? ''} />
        </section>
      </div>
    </main>
  );
}

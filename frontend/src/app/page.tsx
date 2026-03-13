import { SearchBar } from '@/components/search/SearchBar';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Tracker</h1>
      <p className="mb-8 text-lg text-gray-500">Compare prices across Indian e-commerce</p>
      <SearchBar />
    </main>
  );
}

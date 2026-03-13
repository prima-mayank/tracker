'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema, type SearchInput } from '@tracker/shared';

export function SearchBar() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SearchInput>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearch = (data: SearchInput) => {
    router.push(`/search?q=${encodeURIComponent(data.q)}`);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex w-full max-w-xl gap-2">
      <input
        {...register('q')}
        placeholder="Search for products..."
        className="flex-1 rounded-lg border px-4 py-2 outline-none focus:ring-2"
      />
      <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2 text-white">
        Search
      </button>
    </form>
  );
}

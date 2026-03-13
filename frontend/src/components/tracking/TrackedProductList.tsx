import type { TrackedProduct } from '@tracker/shared';
import { TrackedProductCard } from './TrackedProductCard';

export async function TrackedProductList() {
  // TODO: Step 6 — fetch from API
  const items: TrackedProduct[] = [];

  if (items.length === 0) return <p className="text-gray-500">You are not tracking any products yet.</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <TrackedProductCard key={item.id} tracked={item} />
      ))}
    </div>
  );
}

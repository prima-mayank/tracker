import type { TrackedProduct } from '@tracker/shared';
import { formatPrice } from '@/lib/format';

interface TrackedProductCardProps {
  tracked: TrackedProduct;
}

export function TrackedProductCard({ tracked }: TrackedProductCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <p className="mb-2 text-sm text-gray-500">Product ID: {tracked.productId}</p>
      {tracked.targetPrice && (
        <p className="text-sm">Target: <span className="font-semibold">{formatPrice(tracked.targetPrice)}</span></p>
      )}
    </div>
  );
}

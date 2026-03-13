import type { AggregatedProduct } from '@tracker/shared';
import { PriceTable } from './PriceTable';
import { TrackButton } from '@/components/tracking/TrackButton';

interface ProductDetailProps {
  productId: string;
}

export async function ProductDetail({ productId }: ProductDetailProps) {
  // TODO: Step 4 — fetch product + prices from API
  const aggregated: AggregatedProduct | null = null;

  if (!aggregated) return <p className="text-gray-500">Product not found.</p>;

  return (
    <div>
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-2xl font-bold">{aggregated.product.title}</h1>
        <TrackButton productId={productId} />
      </div>
      <PriceTable entries={aggregated.priceEntries} />
    </div>
  );
}

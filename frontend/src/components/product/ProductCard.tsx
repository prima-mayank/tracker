import Link from 'next/link';
import type { AggregatedProduct } from '@tracker/shared';
import { SmartScoreBadge } from './SmartScoreBadge';
import { formatPrice } from '@/lib/format';

interface ProductCardProps {
  aggregated: AggregatedProduct;
}

export function ProductCard({ aggregated }: ProductCardProps) {
  const { product, lowestPrice, smartScore } = aggregated;

  return (
    <Link href={`/product/${product.id}`} className="block rounded-lg border p-4 transition-shadow hover:shadow-md">
      <h3 className="mb-2 line-clamp-2 font-medium">{product.title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">{formatPrice(lowestPrice)}</span>
        <SmartScoreBadge score={smartScore} />
      </div>
    </Link>
  );
}

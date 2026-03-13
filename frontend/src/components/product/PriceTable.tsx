import type { PriceEntry } from '@tracker/shared';
import { formatPrice } from '@/lib/format';
import { SourceLink } from './SourceLink';

interface PriceTableProps {
  entries: PriceEntry[];
}

export function PriceTable({ entries }: PriceTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b text-left text-sm text-gray-500">
          <th className="py-2 pr-4">Source</th>
          <th className="py-2 pr-4">Price</th>
          <th className="py-2 pr-4">Seller</th>
          <th className="py-2">Rating</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id} className="border-b">
            <td className="py-3 pr-4"><SourceLink entry={entry} /></td>
            <td className="py-3 pr-4 font-semibold">{formatPrice(entry.price)}</td>
            <td className="py-3 pr-4 text-sm text-gray-500">{entry.sellerName ?? '—'}</td>
            <td className="py-3 text-sm">{entry.rating ?? '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

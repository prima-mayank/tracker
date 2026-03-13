'use client';

interface TrackButtonProps {
  productId: string;
}

export function TrackButton({ productId: _productId }: TrackButtonProps) {
  // TODO: Step 6 — call tracking API, toggle state
  return (
    <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
      Track Price
    </button>
  );
}

'use client';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onPageChange(page - 1)} disabled={page <= 1} className="rounded border px-3 py-1 disabled:opacity-40">
        Prev
      </button>
      <span className="text-sm">{page} / {totalPages}</span>
      <button onClick={() => onPageChange(page + 1)} disabled={page >= totalPages} className="rounded border px-3 py-1 disabled:opacity-40">
        Next
      </button>
    </div>
  );
}

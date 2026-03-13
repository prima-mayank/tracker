import type { PriceEntry } from '@tracker/shared';

interface SourceLinkProps {
  entry: PriceEntry;
}

export function SourceLink({ entry }: SourceLinkProps) {
  const url = entry.affiliateUrl ?? entry.originalUrl;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize text-blue-600 hover:underline">
      {entry.source}
    </a>
  );
}

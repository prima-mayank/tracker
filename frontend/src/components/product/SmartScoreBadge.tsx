interface SmartScoreBadgeProps {
  score: number;
}

export function SmartScoreBadge({ score }: SmartScoreBadgeProps) {
  const label = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Fair';
  const color = score >= 80 ? 'bg-green-100 text-green-700' : score >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600';

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${color}`}>
      {label} · {score}
    </span>
  );
}

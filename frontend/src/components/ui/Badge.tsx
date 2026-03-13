interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'yellow' | 'gray';
}

export function Badge({ children, variant = 'gray' }: BadgeProps) {
  const variants = {
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

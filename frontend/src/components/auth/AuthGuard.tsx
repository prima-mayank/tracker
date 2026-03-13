'use client';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  // TODO: Step 2 — redirect to /login if not authenticated
  return <>{children}</>;
}

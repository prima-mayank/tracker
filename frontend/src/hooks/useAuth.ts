'use client';

import { useAuthStore } from '@/stores/auth.store';

export const useAuth = () => {
  const { user, isAuthenticated, setUser } = useAuthStore();

  const logout = async () => {
    // TODO: Step 2 — call /api/auth/logout
    setUser(null);
  };

  return { user, isAuthenticated, logout };
};

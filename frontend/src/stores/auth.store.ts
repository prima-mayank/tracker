import { create } from 'zustand';
import type { AuthResponse } from '@tracker/shared';

interface AuthState {
  user: AuthResponse | null;
  isAuthenticated: boolean;
  setUser: (user: AuthResponse | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: user !== null }),
}));

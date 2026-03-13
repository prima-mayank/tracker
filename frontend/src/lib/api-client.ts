import type { ApiResponse } from '@tracker/shared';

const BASE_URL = process.env['NEXT_PUBLIC_BACKEND_URL'] ?? 'http://localhost:4000';

export const apiClient = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  const res = await fetch(`${BASE_URL}/api${path}`, {
    ...options,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });

  return res.json() as Promise<ApiResponse<T>>;
};

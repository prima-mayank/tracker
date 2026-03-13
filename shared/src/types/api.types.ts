export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

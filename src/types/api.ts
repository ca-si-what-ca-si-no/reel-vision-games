/**
 * API-related type definitions
 */

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ApiError;
  success: boolean;
  timestamp?: string;
  meta?: ResponseMeta;
}

/**
 * API error structure
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  stack?: string;
  timestamp?: string;
}

/**
 * Response metadata
 */
export interface ResponseMeta {
  page?: number;
  pageSize?: number;
  total?: number;
  hasMore?: boolean;
}

/**
 * Paginated request parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

/**
 * Filter parameters
 */
export interface FilterParams {
  search?: string;
  filters?: Record<string, unknown>;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * Combined query parameters
 */
export type QueryParams = PaginationParams & FilterParams;

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Request configuration
 */
export interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  retry?: number;
  withCredentials?: boolean;
}

import { QueryClient } from '@tanstack/react-query';

import { COMMON_NUMBERS } from '@/constants/numbers';

export const API_BASE_URL = String(
  (import.meta.env as Record<string, string>)?.VITE_API_URL || '/api'
);

// Query configuration constants
const QUERY_RETRY_COUNT = 3;
const QUERY_STALE_TIME_MINUTES = 5;
const QUERY_GC_TIME_MINUTES = 10;
const MUTATION_RETRY_COUNT = 1;
const MILLISECONDS_PER_MINUTE =
  COMMON_NUMBERS.SECONDS_PER_MINUTE * COMMON_NUMBERS.MILLISECONDS_PER_SECOND;

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error: ApiError = {
        message: `HTTP error! status: ${response.status}`,
        status: response.status,
      };

      try {
        const errorData = (await response.json()) as {
          message?: string;
          code?: string;
          details?: unknown;
        };
        error.message = errorData.message || error.message;
        error.code = errorData.code;
        error.details = errorData.details;
      } catch {
        // Use default error message if parsing fails
      }

      throw new Error(error.message);
    }

    try {
      return (await response.json()) as T;
    } catch {
      return {} as T;
    }
  }

  private getFullUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const { headers, ...otherOptions } = options || {};
    const response = await fetch(this.getFullUrl(endpoint), {
      method: 'GET',
      headers: {
        ...this.defaultHeaders,
        ...(headers ? (headers as Record<string, string>) : {}),
      },
      ...otherOptions,
    });
    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    const { headers, ...otherOptions } = options || {};
    const response = await fetch(this.getFullUrl(endpoint), {
      method: 'POST',
      headers: {
        ...this.defaultHeaders,
        ...(headers ? (headers as Record<string, string>) : {}),
      },
      body: data ? JSON.stringify(data) : '',
      ...otherOptions,
    });
    return this.handleResponse<T>(response);
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    const { headers, ...otherOptions } = options || {};
    const response = await fetch(this.getFullUrl(endpoint), {
      method: 'PUT',
      headers: {
        ...this.defaultHeaders,
        ...(headers ? (headers as Record<string, string>) : {}),
      },
      body: data ? JSON.stringify(data) : '',
      ...otherOptions,
    });
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const { headers, ...otherOptions } = options || {};
    const response = await fetch(this.getFullUrl(endpoint), {
      method: 'DELETE',
      headers: {
        ...this.defaultHeaders,
        ...(headers ? (headers as Record<string, string>) : {}),
      },
      ...otherOptions,
    });
    return this.handleResponse<T>(response);
  }

  setAuthToken(token: string) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  clearAuthToken() {
    const { Authorization: _Authorization, ...headers } = this.defaultHeaders;
    this.defaultHeaders = headers;
  }
}

export const apiClient = new ApiClient();

// React Query default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: QUERY_RETRY_COUNT,
      staleTime: QUERY_STALE_TIME_MINUTES * MILLISECONDS_PER_MINUTE,
      gcTime: QUERY_GC_TIME_MINUTES * MILLISECONDS_PER_MINUTE,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: MUTATION_RETRY_COUNT,
    },
  },
});

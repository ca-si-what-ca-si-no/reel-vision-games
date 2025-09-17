import { QueryClient } from '@tanstack/react-query';

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

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
  private defaultHeaders: HeadersInit;

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
        const errorData = await response.json();
        error.message = errorData.message || error.message;
        error.code = errorData.code;
        error.details = errorData.details;
      } catch {
        // Use default error message if parsing fails
      }

      throw error;
    }

    try {
      return await response.json();
    } catch {
      return {} as T;
    }
  }

  private getFullUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(this.getFullUrl(endpoint), {
      ...options,
      method: 'GET',
      headers: {
        ...this.defaultHeaders,
        ...options?.headers,
      },
    });
    return this.handleResponse<T>(response);
  }

  async post<T, D = unknown>(
    endpoint: string,
    data?: D,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(this.getFullUrl(endpoint), {
      ...options,
      method: 'POST',
      headers: {
        ...this.defaultHeaders,
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return this.handleResponse<T>(response);
  }

  async put<T, D = unknown>(
    endpoint: string,
    data?: D,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(this.getFullUrl(endpoint), {
      ...options,
      method: 'PUT',
      headers: {
        ...this.defaultHeaders,
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(this.getFullUrl(endpoint), {
      ...options,
      method: 'DELETE',
      headers: {
        ...this.defaultHeaders,
        ...options?.headers,
      },
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
    const { Authorization, ...headers } = this.defaultHeaders as Record<string, string>;
    this.defaultHeaders = headers;
  }
}

export const apiClient = new ApiClient();

// React Query default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});
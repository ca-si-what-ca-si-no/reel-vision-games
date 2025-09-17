/**
 * Global error handling utilities
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface ErrorInfo {
  message: string;
  code?: string;
  severity?: ErrorSeverity;
  context?: Record<string, unknown>;
  stack?: string;
  timestamp?: Date;
}

class ErrorHandler {
  private errorListeners: ((error: ErrorInfo) => void)[] = [];
  private errorHistory: ErrorInfo[] = [];
  private maxHistorySize = 100;

  /**
   * Register an error listener
   */
  public addListener(listener: (error: ErrorInfo) => void): () => void {
    this.errorListeners.push(listener);
    return () => {
      const index = this.errorListeners.indexOf(listener);
      if (index > -1) {
        this.errorListeners.splice(index, 1);
      }
    };
  }

  /**
   * Handle an error
   */
  public handleError(error: Error | ErrorInfo | unknown, context?: Record<string, unknown>): void {
    const errorInfo = this.normalizeError(error, context);

    // Add to history
    this.errorHistory.unshift(errorInfo);
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory.pop();
    }

    // Notify listeners
    this.errorListeners.forEach(listener => {
      try {
        listener(errorInfo);
      } catch (err) {
        console.error('Error in error listener:', err);
      }
    });

    // Log based on severity
    this.logError(errorInfo);
  }

  /**
   * Normalize error to ErrorInfo
   */
  private normalizeError(error: Error | ErrorInfo | unknown, context?: Record<string, unknown>): ErrorInfo {
    if (this.isErrorInfo(error)) {
      return { ...error, context: { ...error.context, ...context } };
    }

    if (error instanceof Error) {
      return {
        message: error.message,
        code: (error as any).code,
        stack: error.stack,
        severity: ErrorSeverity.MEDIUM,
        context,
        timestamp: new Date(),
      };
    }

    return {
      message: String(error),
      severity: ErrorSeverity.LOW,
      context,
      timestamp: new Date(),
    };
  }

  /**
   * Type guard for ErrorInfo
   */
  private isErrorInfo(error: unknown): error is ErrorInfo {
    return (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as any).message === 'string'
    );
  }

  /**
   * Log error based on severity
   */
  private logError(error: ErrorInfo): void {
    const logMessage = `[${error.severity?.toUpperCase() || 'ERROR'}] ${error.message}`;

    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
      case ErrorSeverity.HIGH:
        console.error(logMessage, error);
        break;
      case ErrorSeverity.MEDIUM:
        console.warn(logMessage, error);
        break;
      case ErrorSeverity.LOW:
      default:
        console.log(logMessage, error);
        break;
    }
  }

  /**
   * Get error history
   */
  public getHistory(): ReadonlyArray<ErrorInfo> {
    return [...this.errorHistory];
  }

  /**
   * Clear error history
   */
  public clearHistory(): void {
    this.errorHistory = [];
  }

  /**
   * Setup global error handlers
   */
  public setupGlobalHandlers(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        type: 'unhandledrejection',
        promise: event.promise,
      });
    });

    // Handle global errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error || event.message, {
        type: 'error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });
  }
}

export const errorHandler = new ErrorHandler();

/**
 * React Hook for error handling
 */
import { useEffect } from 'react';

export function useErrorHandler(handler?: (error: ErrorInfo) => void) {
  useEffect(() => {
    if (!handler) return;
    return errorHandler.addListener(handler);
  }, [handler]);

  return {
    handleError: (error: unknown, context?: Record<string, unknown>) =>
      errorHandler.handleError(error, context),
    getHistory: () => errorHandler.getHistory(),
    clearHistory: () => errorHandler.clearHistory(),
  };
}
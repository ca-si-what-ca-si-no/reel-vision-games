import { useCallback, useEffect, useState } from 'react';

interface AsyncState<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

export function useAsync<T = any>(
  asyncFunction: () => Promise<T>,
  immediate = true
): AsyncState<T> & { execute: () => Promise<void> } {
  const [state, setState] = useState<AsyncState<T>>({
    loading: immediate,
  });

  const execute = useCallback(async () => {
    setState({ loading: true });
    try {
      const data = await asyncFunction();
      setState({ data, loading: false });
    } catch (error) {
      setState({ error: error as Error, loading: false });
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}
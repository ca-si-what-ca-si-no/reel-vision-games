import { useCallback, useEffect, useRef, useState } from 'react';

import { COMMON_NUMBERS } from '@/constants/numbers';

export interface WebSocketMessage<T = unknown> {
  type: string;
  payload?: T;
  timestamp?: number;
}

export interface UseWebSocketOptions {
  url: string;
  reconnect?: boolean;
  reconnectInterval?: number;
  reconnectAttempts?: number;
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  onMessage?: <T>(message: WebSocketMessage<T>) => void;
}

export enum ReadyState {
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}

export function useWebSocket({
  url,
  reconnect = true,
  reconnectInterval = COMMON_NUMBERS.WEBSOCKET_RETRY_DELAY,
  reconnectAttempts = COMMON_NUMBERS.MAX_RECONNECT_ATTEMPTS,
  onOpen,
  onClose,
  onError,
  onMessage,
}: UseWebSocketOptions) {
  const ws = useRef<WebSocket | null>(null);
  const [readyState, setReadyState] = useState<ReadyState>(ReadyState.CLOSED);
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
  const reconnectCount = useRef(0);
  const reconnectTimeout = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      ws.current = new WebSocket(url);

      ws.current.onopen = (event) => {
        setReadyState(ReadyState.OPEN);
        reconnectCount.current = 0;
        onOpen?.(event);
      };

      ws.current.onclose = (event) => {
        setReadyState(ReadyState.CLOSED);
        onClose?.(event);

        if (reconnect && reconnectCount.current < reconnectAttempts) {
          reconnectTimeout.current = setTimeout(() => {
            reconnectCount.current++;
            connect();
          }, reconnectInterval);
        }
      };

      ws.current.onerror = (event) => {
        setReadyState(ReadyState.CLOSED);
        onError?.(event);
      };

      ws.current.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data as string) as WebSocketMessage;
          setLastMessage(message);
          onMessage?.(message);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
      setReadyState(ReadyState.CLOSED);
    }
  }, [url, reconnect, reconnectInterval, reconnectAttempts, onOpen, onClose, onError, onMessage]);

  const disconnect = useCallback(() => {
    if (reconnectTimeout.current) {
      clearTimeout(reconnectTimeout.current);
    }
    if (ws.current) {
      ws.current.close();
      ws.current = null;
    }
    setReadyState(ReadyState.CLOSED);
  }, []);

  const sendMessage = useCallback(<T = unknown>(message: WebSocketMessage<T>) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    readyState,
    lastMessage,
    sendMessage,
    connect,
    disconnect,
  };
}

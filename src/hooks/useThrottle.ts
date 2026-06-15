import { useCallback, useRef } from "react";

const DEFAULT_DELAY = 300;

/**
 * 짧은 시간 내에 반복 호출되는 콜백을 throttle한다.
 * 마지막 호출 이후 delay(ms)가 지나기 전의 재호출은 무시된다.
 */
export function useThrottle<Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay: number = DEFAULT_DELAY,
): (...args: Args) => void {
  const lastCallRef = useRef(0);

  return useCallback(
    (...args: Args) => {
      const now = Date.now();
      if (now - lastCallRef.current < delay) return;
      lastCallRef.current = now;
      callback(...args);
    },
    [callback, delay],
  );
}

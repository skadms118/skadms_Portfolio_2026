import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

/**
 * 엘리먼트가 뷰포트에 처음 들어오는 순간을 감지한다.
 * 한 번 true가 되면 observer를 해제하여 이후 스크롤에는 반응하지 않는다.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.2,
): { ref: RefObject<T | null>; isInView: boolean } {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

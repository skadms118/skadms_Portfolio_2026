import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface UseDisclosureReturn<T extends HTMLElement> {
  isOpen: boolean;
  isPinned: boolean;
  containerRef: RefObject<T | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * hover 시 표시, 클릭 시 고정(pin), 배경 클릭 또는 재클릭 시 해제되는
 * 공용 disclosure 상태를 관리한다.
 * Sidebar / LevelGuide / MobileNav에서 공통으로 사용한다.
 *
 * @template T containerRef를 연결할 루트 엘리먼트의 타입 (예: HTMLDivElement)
 */
export function useDisclosure<T extends HTMLElement = HTMLElement>(): UseDisclosureReturn<T> {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!isPinned) return;

    function handleOutsideClick(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsPinned(false);
        setIsHovered(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, [isPinned]);

  function onToggle() {
    if (isPinned) {
      setIsPinned(false);
      setIsHovered(false);
    } else {
      setIsPinned(true);
    }
  }

  function onClose() {
    setIsPinned(false);
    setIsHovered(false);
  }

  return {
    isOpen: isHovered || isPinned,
    isPinned,
    containerRef,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onToggle,
    onClose,
  };
}

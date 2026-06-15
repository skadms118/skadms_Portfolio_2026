import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, RefObject } from "react";

interface UseDisclosureReturn<T extends HTMLElement> {
  isOpen: boolean;
  isPinned: boolean;
  containerRef: RefObject<T | null>;
  onPointerEnter: (event: ReactPointerEvent) => void;
  onPointerLeave: (event: ReactPointerEvent) => void;
  onToggle: () => void;
  onClose: () => void;
}

/** 현재 입력 장치가 hover를 지원하는지(마우스 등 포인팅 디바이스가 주 입력인지) 여부. */
function supportsHoverInput(): boolean {
  return window.matchMedia("(hover: hover)").matches;
}

/**
 * hover 시 표시, 클릭 시 고정(pin), 배경 클릭 또는 재클릭 시 해제되는
 * 공용 disclosure 상태를 관리한다.
 * Sidebar / LevelGuide / Navbar / SkillCard에서 공통으로 사용한다.
 *
 * hover 진입/이탈은 마우스(pointerType === "mouse")이면서 hover를 지원하는
 * 기기((hover: hover))에서만 isHovered를 변경한다.
 * 터치는 click을 통해 isPinned로만 토글되므로, 탭 이후 SPA 라우트 전환 시
 * 모바일 브라우저가 탭 좌표에 발생시키는 호환성 pointerover/mouseover
 * 이벤트(pointerType이 "mouse"로 위장됨)로 isHovered가 의도치 않게 고정되는
 * 것을 막는다. 이런 기기는 (hover: none)이라 pointerType만으로는 걸러지지 않는다.
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
    onPointerEnter: (event) => {
      if (event.pointerType !== "mouse" || !supportsHoverInput()) return;
      setIsHovered(true);
    },
    onPointerLeave: (event) => {
      if (event.pointerType !== "mouse" || !supportsHoverInput()) return;
      setIsHovered(false);
    },
    onToggle,
    onClose,
  };
}

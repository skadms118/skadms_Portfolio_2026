import { useLayoutEffect, useRef, useState } from "react";
import { useDisclosure } from "./useDisclosure";

/**
 * SkillCard의 레벨 설명 다이얼로그 disclosure 상태와, xs 이상(PC)에서 다이얼로그가
 * LevelBar의 우측/좌측 중 어디에 표시될지(openLeft)를 함께 관리한다.
 * Language/FrameworkLibrary/Tool 섹션의 SkillCard가 공통으로 사용한다.
 */
export function useSkillLevelDialog() {
  const {
    isOpen,
    containerRef,
    onPointerEnter,
    onPointerLeave,
    onToggle,
    onClose,
  } = useDisclosure<HTMLDivElement>();
  const levelBarRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [openLeft, setOpenLeft] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const levelBarRect = levelBarRef.current?.getBoundingClientRect();
    const popupWidth = popupRef.current?.offsetWidth ?? 0;
    if (!levelBarRect) return;
    // section은 우측 padding(px-15/md:px-60)까지 포함해 뷰포트 전체 너비를 차지하고
    // overflow-x-hidden은 이 padding 영역까지는 잘라내지 않으므로, section의
    // getBoundingClientRect().right만으로는 콘텐츠 영역의 실제 우측 경계를 알 수 없다.
    // padding-right를 빼서 콘텐츠 영역 기준 경계를 구한다.
    const section = containerRef.current?.closest("section");
    const boundaryRight = section
      ? section.getBoundingClientRect().right -
        parseFloat(getComputedStyle(section).paddingRight)
      : window.innerWidth;
    setOpenLeft(levelBarRect.right + popupWidth > boundaryRight);
  }, [isOpen, containerRef]);

  return {
    isOpen,
    containerRef,
    levelBarRef,
    popupRef,
    openLeft,
    onPointerEnter,
    onPointerLeave,
    onToggle,
    onClose,
  };
}

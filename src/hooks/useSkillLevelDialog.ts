import { useLayoutEffect, useRef, useState } from "react";
import { supportsHoverInput, useDisclosure } from "./useDisclosure";

/**
 * SkillCard의 레벨 설명 다이얼로그 disclosure 상태와, xs 이상(PC)에서 다이얼로그가
 * LevelBar의 우측/좌측 중 어디에 표시될지(openLeft)를 함께 관리한다.
 * Language/FrameworkLibrary/Tool 섹션의 SkillCard가 공통으로 사용한다.
 *
 * 터치 전용 기기((hover: none))에서는 카드를 탭해 다이얼로그를 연 뒤 화면의
 * 다른 영역(다른 카드 등)을 탭해도 닫히지 않도록 closeOnOutsideClick을 끈다.
 * 닫으려면 다이얼로그 자체를 탭하거나 LevelBar를 다시 탭해야 한다.
 * 마우스/트랙패드를 사용하는 기기((hover: hover))는 기존과 동일하게 동작한다.
 */
export function useSkillLevelDialog() {
  const {
    isOpen,
    containerRef,
    onPointerEnter,
    onPointerLeave,
    onToggle,
    onClose,
  } = useDisclosure<HTMLDivElement>({
    closeOnOutsideClick: supportsHoverInput(),
  });
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

import { useLayoutEffect, useRef, useState } from "react";
import { useDisclosure } from "../hooks/useDisclosure";
import { FONT_STYLES } from "../styles/theme";
import LevelBar from "./LevelBar";
import LevelInfo from "./LevelInfo";

export interface SkillItem {
  name: string;
  icon: string;
  level: 1 | 2 | 3;
}

/**
 * Language/Framework & Library/Tool 섹션이 공유하는 스킬 카드.
 * 정사각형 카드 안에 이름, 아이콘, LevelBar를 세로로 배치하며, hover 시 카드 전체가
 * (내부 콘텐츠와 함께) 살짝 커진다.
 * LevelBar를 hover/클릭하면 해당 스킬의 레벨에 대한 설명이 LevelGuide와 같은
 * 스타일의 팝업으로 나타난다. xs 이상에서는 LevelBar의 우측 상단(화면 우측이
 * 막히면 좌측 상단), xs 미만(모바일)에서는 카드 하단 중앙에 표시된다.
 * 팝업은 pointer-events-none이라 카드와 겹치지 않는 영역에 마우스가 들어가면
 * 카드 hover가 해제되어 함께 사라진다.
 */
function SkillCard({ name, icon, level }: SkillItem) {
  const { isOpen, containerRef, onMouseEnter, onMouseLeave, onToggle } =
    useDisclosure<HTMLDivElement>();
  const levelBarRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [openLeft, setOpenLeft] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const levelBarRect = levelBarRef.current?.getBoundingClientRect();
    const popupWidth = popupRef.current?.offsetWidth ?? 0;
    if (!levelBarRect) return;
    // 페이지가 max-w-360으로 제한되는 넓은 화면에서는 overflow-x-hidden인
    // section의 우측 경계가 window.innerWidth보다 먼저 팝업을 잘라낸다.
    const boundaryRight =
      containerRef.current
        ?.closest("section")
        ?.getBoundingClientRect().right ?? window.innerWidth;
    setOpenLeft(levelBarRect.right + popupWidth > boundaryRight);
  }, [isOpen, containerRef]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative flex size-62 flex-col items-center justify-center gap-3 rounded-[45px] bg-[#f7f7f7] shadow-[4px_4px_4px_0px_rgba(160,160,160,0.25)] transition-transform duration-200 hover:scale-105"
    >
      <h3 className={FONT_STYLES.label}>{name}</h3>
      <img
        src={icon}
        alt={`${name} 아이콘`}
        className="size-22 object-contain"
      />

      <div ref={levelBarRef} className="relative">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`${name} 레벨 설명 보기`}
        >
          <LevelBar level={level} />
        </button>

        {isOpen && (
          <div
            ref={popupRef}
            role="dialog"
            aria-label={`${name} 레벨 설명`}
            className={`pointer-events-none absolute z-20 top-full left-1/2 mt-2.5 -translate-x-1/2 rounded-[30px] bg-[rgba(240,240,240,0.9)] p-6 shadow-[4px_4px_4px_0px_rgba(221,221,221,0.25)] xs:top-auto xs:left-auto xs:mt-0 xs:translate-x-0 xs:bottom-full xs:-mb-5 ${
              openLeft ? "xs:right-full" : "xs:left-full"
            }`}
          >
            <LevelInfo level={level} layout="column" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillCard;

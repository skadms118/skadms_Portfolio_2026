import { useRef } from "react";
import { FONT_STYLES } from "../styles/theme";
import LevelBar from "./LevelBar";
import SkillLevelDialogDesktop from "./SkillLevelDialogDesktop";
import SkillLevelDialogMobile from "./SkillLevelDialogMobile";
import { useSkillLevelDialog } from "./useSkillLevelDialog";

export interface SkillItem {
  name: string;
  icon: string;
  level: 1 | 2 | 3;
}

/**
 * Language/Framework & Library/Tool 섹션이 공유하는 스킬 카드.
 * 정사각형 카드 안에 이름, 아이콘, LevelBar를 세로로 배치하며, hover 시 카드 전체가
 * (내부 콘텐츠와 함께) 살짝 커진다.
 * LevelBar를 hover/클릭하거나(PC), 카드 전체를 탭하면(모바일) 해당 스킬의 레벨에 대한
 * 설명이 다이얼로그로 나타난다.
 * xs 이상(PC)에서는 LevelBar 우측(화면 우측이 막히면 좌측)에 SkillLevelDialogDesktop이,
 * xs 미만(모바일)에서는 카드 전체를 덮는 SkillLevelDialogMobile이 표시되며,
 * 이때 카드의 이름/아이콘/LevelBar는 블러 처리된다.
 * 다이얼로그는 pointer-events-none이라 카드와 겹치지 않는 영역에 마우스가 들어가면
 * 카드 hover가 해제되어 함께 사라진다.
 */
function SkillCard({ name, icon, level }: SkillItem) {
  const {
    isOpen,
    containerRef,
    levelBarRef,
    popupRef,
    openLeft,
    onPointerEnter,
    onPointerLeave,
    onToggle,
    onClose,
  } = useSkillLevelDialog();
  const lastPointerTypeRef = useRef("mouse");

  return (
    <div
      ref={containerRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={(event) => {
        lastPointerTypeRef.current = event.pointerType;
      }}
      onClick={() => {
        if (lastPointerTypeRef.current === "mouse") return;
        onToggle();
      }}
      className="relative flex size-62 flex-col items-center justify-center gap-3 rounded-[45px] bg-[#f7f7f7] shadow-[4px_4px_4px_0px_rgba(160,160,160,0.25)] transition-transform duration-200 hover:scale-105"
    >
      <div
        className={`flex flex-col items-center gap-3 ${
          isOpen ? "blur-sm xs:blur-none" : ""
        }`}
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
            <SkillLevelDialogDesktop
              ref={popupRef}
              name={name}
              level={level}
              openLeft={openLeft}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <SkillLevelDialogMobile name={name} level={level} onClose={onClose} />
      )}
    </div>
  );
}

export default SkillCard;

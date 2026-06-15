import { forwardRef, type ReactNode } from "react";

interface LevelDialogPanelProps {
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}

/**
 * LevelGuide와 SkillCard(PC)의 레벨 설명 다이얼로그가 공유하는 패널 스타일.
 * pointer-events-none + absolute 위치, 배경/그림자만 공통으로 제공하고
 * 위치·크기·radius·padding 등은 호출부에서 className으로 지정한다.
 */
const LevelDialogPanel = forwardRef<HTMLDivElement, LevelDialogPanelProps>(
  function LevelDialogPanel({ className = "", ariaLabel, children }, ref) {
    return (
      <div
        ref={ref}
        role="dialog"
        aria-label={ariaLabel}
        className={`pointer-events-none absolute bg-[rgba(240,240,240,0.9)] shadow-[4px_4px_4px_0px_rgba(221,221,221,0.25)] ${className}`}
      >
        {children}
      </div>
    );
  },
);

export default LevelDialogPanel;

import { forwardRef } from "react";
import LevelDialogPanel from "./LevelDialogPanel";
import LevelInfo from "./LevelInfo";

interface SkillLevelDialogDesktopProps {
  name: string;
  level: 1 | 2 | 3;
  openLeft: boolean;
}

/**
 * xs(824px) 이상에서 LevelBar의 우측(화면 우측이 막히면 좌측)에 표시되는
 * 레벨 설명 다이얼로그. 너비 측정을 위해 ref를 전달받는다.
 */
const SkillLevelDialogDesktop = forwardRef<HTMLDivElement, SkillLevelDialogDesktopProps>(
  function SkillLevelDialogDesktop({ name, level, openLeft }, ref) {
    return (
      <LevelDialogPanel
        ref={ref}
        ariaLabel={`${name} 레벨 설명`}
        className={`z-20 hidden bottom-full -mb-5 w-auto rounded-[30px] p-6 xs:block ${
          openLeft ? "right-full" : "left-full"
        }`}
      >
        <LevelInfo level={level} layout="column" />
      </LevelDialogPanel>
    );
  },
);

export default SkillLevelDialogDesktop;

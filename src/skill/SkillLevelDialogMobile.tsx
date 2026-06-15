import LevelBar from "./LevelBar";
import { LEVELS } from "./LevelInfo";

interface SkillLevelDialogMobileProps {
  name: string;
  level: 1 | 2 | 3;
}

/**
 * xs(824px) 미만에서 SkillCard 위에 카드와 같은 크기/모양으로 표시되는
 * 레벨 설명 다이얼로그. Figma의 "level dialog sample"을 기준으로 한다.
 */
function SkillLevelDialogMobile({ name, level }: SkillLevelDialogMobileProps) {
  const { label, description } = LEVELS[level - 1];

  return (
    <div
      role="dialog"
      aria-label={`${name} 레벨 설명`}
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-2.5 rounded-[45px] bg-[rgba(221,221,221,0.5)] px-3 xs:hidden"
    >
      <p className="text-[20px] font-bold text-[#444]">{label}</p>
      <LevelBar level={level} />
      <p className="text-center text-[20px] text-[#444]">{description}</p>
    </div>
  );
}

export default SkillLevelDialogMobile;

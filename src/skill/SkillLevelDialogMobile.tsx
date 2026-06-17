import LevelBar from "./LevelBar";
import { LEVELS } from "../items/LevelItem";

interface SkillLevelDialogMobileProps {
  name: string;
  level: 1 | 2 | 3;
  onClose: () => void;
}

/**
 * xs(824px) 미만에서 SkillCard 위에 카드와 같은 크기/모양으로 표시되는
 * 레벨 설명 다이얼로그. Figma의 "level dialog sample"을 기준으로 한다.
 * 다이얼로그 영역을 탭하면 닫힌다.
 */
function SkillLevelDialogMobile({
  name,
  level,
  onClose,
}: SkillLevelDialogMobileProps) {
  const { label, description } = LEVELS[level - 1];

  return (
    <div
      role="dialog"
      aria-label={`${name} 레벨 설명`}
      onClick={onClose}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2.5 rounded-[45px] bg-[rgba(240,240,240,0.8)] px-3 xs:hidden"
    >
      <p className="text-[20px] font-bold text-[#444]">{label}</p>
      <LevelBar level={level} />
      <p className="text-center text-[20px] text-[#444]">{description}</p>
    </div>
  );
}

export default SkillLevelDialogMobile;

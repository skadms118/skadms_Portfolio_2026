import LevelBar from "./LevelBar";
import { LEVELS } from "../items/LevelItem";

interface LevelInfoProps {
  level: 1 | 2 | 3;
  /**
   * row: LevelBar 왼쪽 + 라벨/설명 오른쪽(LevelGuide 예시).
   * column: 라벨 - LevelBar - 설명을 위에서부터 세로로 배치(SkillCard 팝업).
   */
  layout?: "row" | "column";
}

/**
 * LevelBar - 레벨 라벨 - 레벨 설명을 한 묶음으로 보여주는 레이아웃.
 * LevelGuide의 LEVEL 1~3 예시와 SkillCard의 레벨 설명 팝업에서 공통으로 사용한다.
 */
function LevelInfo({ level, layout = "row" }: LevelInfoProps) {
  const { label, description } = LEVELS[level - 1];

  // column(SkillCard 팝업)은 모바일에서 너비를 줄이기 위해 줄바꿈을 허용하고,
  // xs 이상에서만 한 줄로 표시한다. row(LevelGuide)는 항상 한 줄로 표시한다.
  const nowrapClassName =
    layout === "column" ? "xs:whitespace-nowrap" : "whitespace-nowrap";

  const labelEl = (
    <p className={`text-[20px] font-bold text-[#444] ${nowrapClassName}`}>
      {label}
    </p>
  );
  const descriptionEl = (
    <p className={`text-[20px] text-[#444] ${nowrapClassName}`}>
      {description}
    </p>
  );
  const levelBarEl = <LevelBar level={level} />;

  if (layout === "column") {
    return (
      <div className="flex flex-col items-start gap-2.5">
        <div className="relative">{labelEl}</div>
        <div className="relative">{levelBarEl}</div>
        <div className="relative">{descriptionEl}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-5 gap-y-2.5">
      <div className="relative col-start-1 row-span-2">{levelBarEl}</div>
      <div className="relative col-start-2 row-start-1">{labelEl}</div>
      <div className="relative col-start-2 row-start-2">{descriptionEl}</div>
    </div>
  );
}

export default LevelInfo;

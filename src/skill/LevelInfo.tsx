import LevelBar from "./LevelBar";

export const LEVELS = [
  {
    level: 1,
    label: "LEVEL 1",
    description: "제대로 학습 경험이 없어 실전에서 사용하기는 어려움",
  },
  {
    level: 2,
    label: "LEVEL 2",
    description: "기본적인 내용을 학습했으나 실전 경험이 많지 않음",
  },
  {
    level: 3,
    label: "LEVEL 3",
    description: "프로젝트 및 작업에서 수월하게 사용 가능",
  },
] as const;

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

  const labelEl = (
    <p className="text-[20px] font-bold text-[#444] whitespace-nowrap">
      {label}
    </p>
  );
  const descriptionEl = (
    <p className="text-[20px] text-[#444] whitespace-nowrap">{description}</p>
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

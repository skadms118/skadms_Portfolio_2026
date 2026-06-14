import { useDisclosure } from "../../hooks/useDisclosure";

const LEVELS = [
  {
    label: "LEVEL 1",
    description: "제대로 학습 경험이 없어 실전에서 사용하기는 어려움",
    filledFrom: 2,
  },
  {
    label: "LEVEL 2",
    description: "기본적인 내용을 학습했으나 실전 경험이 많지 않음",
    filledFrom: 3,
  },
  {
    label: "LEVEL 3",
    description: "프로젝트 및 작업에서 수월하게 사용 가능",
    filledFrom: 4,
  },
];

/**
 * 1~3번 dot 중 filledFrom 이상인 dot만 채워진 상태로 표시하는 레벨 표시기.
 */
function LevelDots({ filledFrom }: { filledFrom: number }) {
  return (
    <div className="relative h-13.75 w-31.25 shrink-0">
      <span aria-hidden="true" className="absolute inset-x-3.125 top-3.75 h-px bg-[#a0a0a0]" />
      <div className="absolute inset-x-0 top-0 flex justify-between">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className={`size-6.25 rounded-full ${
              dot >= filledFrom ? "bg-[#a0a0a0]" : "border border-[#a0a0a0] bg-white"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[20px] font-bold text-[#a0a0a0]">
        {[1, 2, 3].map((dot) => (
          <span key={dot} className="w-6.25 text-center">
            {dot}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * hover 시 표시, 클릭 시 고정, 배경 클릭 또는 재클릭 시 해제되는 Level Guide 버튼.
 * Sidebar와 같은 우측 정렬 축을 공유하며, 그 위(y축 기준)에 위치한다.
 */
function LevelGuide() {
  const { isOpen, containerRef, onMouseEnter, onMouseLeave, onToggle } =
    useDisclosure<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed top-[calc(50%-148px)] right-7.5 z-20 flex -translate-y-1/2 items-center gap-5.25"
    >
      {isOpen && (
        <div
          role="dialog"
          aria-label="Level Guide"
          className="flex h-100 w-175 flex-col justify-between rounded-[45px] bg-[rgba(240,240,240,0.9)] p-8.25 shadow-[4px_4px_4px_0px_rgba(221,221,221,0.25)]"
        >
          {LEVELS.map((level) => (
            <div key={level.label} className="flex items-center gap-5">
              <LevelDots filledFrom={level.filledFrom} />
              <div className="flex flex-col gap-2.5">
                <p className="text-[20px] font-bold text-[#444]">{level.label}</p>
                <p className="text-[20px] text-[#444]">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="Level Guide 보기"
        className={`flex h-7.5 w-17.5 items-center justify-center text-[20px] font-bold ${
          isOpen ? "text-[#444]" : "text-[#c2c2c2]"
        }`}
      >
        LEVEL
      </button>
    </div>
  );
}

export default LevelGuide;

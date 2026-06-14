import { useDisclosure } from "../../hooks/useDisclosure";
import LevelInfo, { LEVELS } from "../../skill/LevelInfo";

/**
 * hover 시 표시, 클릭 시 고정, 배경 클릭 또는 재클릭 시 해제되는 Level Guide 버튼.
 * Sidebar 트리거 버튼과 가로 중심축을 공유하며, 그 영역 바로 위(y축 기준)에 위치한다.
 * 팝업은 버튼 좌측에 버튼과 상단을 맞춰 표시되며, pointer-events-none이라 팝업
 * 영역으로 마우스가 옮겨가면 hover가 해제되어 함께 사라진다.
 */
function LevelGuide() {
  const { isOpen, containerRef, onMouseEnter, onMouseLeave, onToggle } =
    useDisclosure<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed top-[calc(50%-140px)] right-2.5 z-20 hidden -translate-y-1/2 xs:flex"
    >
      {isOpen && (
        <div
          role="dialog"
          aria-label="Level Guide"
          className="pointer-events-none absolute -top-2 right-[calc(100%+21px)] flex h-100 w-175 flex-col justify-between rounded-[45px] bg-[rgba(240,240,240,0.9)] p-8.25 shadow-[4px_4px_4px_0px_rgba(221,221,221,0.25)]"
        >
          {LEVELS.map(({ level }) => (
            <LevelInfo key={level} level={level} />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="Level Guide 보기"
        className={`flex h-7.5 w-17.5 items-center justify-center text-[14px] font-bold ${
          isOpen ? "text-[#444]" : "text-[#c2c2c2]"
        }`}
      >
        LEVEL
        <br />
        GUIDE
      </button>
    </div>
  );
}

export default LevelGuide;

const HAMBURGER_BAR_HEIGHTS = ["h-1.5", "h-1.5", "h-1.5"];

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * 1024px(md) 미만에서 표시되는 햄버거 메뉴 버튼.
 * 열림 상태에 따라 막대 색상이 바뀐다. 드롭다운 메뉴 자체는 MobileNavMenu가 렌더링한다.
 */
function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label="메뉴 열기"
      className="flex flex-col gap-2.5"
    >
      {HAMBURGER_BAR_HEIGHTS.map((height, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`w-10 ${height} rounded-[30px] ${
            isOpen ? "bg-[rgba(160,160,160,0.8)]" : "bg-[rgba(221,221,221,0.8)]"
          }`}
        />
      ))}
    </button>
  );
}

export default MobileNav;

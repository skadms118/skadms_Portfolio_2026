import { useDisclosure } from "../../hooks/useDisclosure";
import { useThrottle } from "../../hooks/useThrottle";

export interface SidebarSection {
  id: string;
  label: string;
}

interface SidebarProps {
  sections: SidebarSection[];
}

const TRIGGER_BAR_COUNT = 10;

/**
 * hover 시 Rectangle 59 패널이 펼쳐지고, 클릭 시 고정, 배경 클릭 또는 재클릭 시 해제되는 사이드바.
 * 1024px(md) 미만에서는 표시되지 않는다.
 */
function Sidebar({ sections }: SidebarProps) {
  const { isOpen, containerRef, onPointerEnter, onPointerLeave, onToggle } =
    useDisclosure<HTMLDivElement>();
  const throttledToggle = useThrottle(onToggle);

  return (
    <div
      ref={containerRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className="fixed top-1/2 right-7.5 z-20 hidden -translate-y-1/2 items-center gap-5.25 md:flex"
    >
      {isOpen && (
        <nav
          aria-label="Section navigation"
          className="flex h-100 w-50 flex-col items-start justify-center gap-8 rounded-[45px] bg-[rgba(221,221,221,0.25)] pl-6 shadow-[4px_4px_4px_0px_rgba(221,221,221,0.25)] backdrop-blur-sm"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex h-10.5 origin-left items-center text-[20px] font-medium text-[#646464] transition-transform duration-200 hover:scale-110"
            >
              {section.label}
            </a>
          ))}
        </nav>
      )}

      <button
        type="button"
        onClick={throttledToggle}
        aria-expanded={isOpen}
        aria-label="사이드바 메뉴"
        className="flex w-7.5 flex-col gap-4"
      >
        {Array.from({ length: TRIGGER_BAR_COUNT }).map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="h-1.5 w-full rounded-[30px] bg-[rgba(221,221,221,0.8)]"
          />
        ))}
      </button>
    </div>
  );
}

export default Sidebar;

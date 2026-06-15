import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
}

interface MobileNavMenuProps {
  items: NavItem[];
  onClose: () => void;
  isOpen: boolean;
}

/**
 * MobileNav 햄버거 버튼을 열었을 때 표시되는 드롭다운 메뉴.
 * #DDDDDD 50% 배경 + blur로 페이지 콘텐츠보다 앞에 뜨고, 메뉴 영역 클릭 시 닫힌다.
 * backdrop-blur가 실제로 페이지 콘텐츠에 적용되려면, backdrop-blur가 걸린
 * Navbar 상단바 div의 자손이 아닌 형제(같은 header 내)로 렌더링되어야 한다.
 * (조상에 backdrop-filter가 있으면 그 조상이 새 stacking context를 만들어
 * 이 메뉴의 backdrop-blur가 상단바 내부의 빈 영역만 블러하게 되어 효과가 사라진다.)
 *
 * 위에서 아래로 펼쳐지는 transition을 위해 닫혀 있어도 항상 마운트해 두고,
 * grid-template-rows를 0fr<->1fr로 전환해 높이가 0에서 콘텐츠 높이까지
 * 자라나게 한다. top-full 위치에 고정된 채 아래로만 자라므로 transition
 * 중에도 Navbar 영역을 가리지 않는다(translate-y로 올렸다 내리는 방식은
 * 닫힌 위치가 Navbar 위로 겹쳐 transition 동안 Navbar를 덮게 된다).
 * 닫혀 있을 때는 inert로 클릭과 키보드 포커스를 모두 막는다.
 */
function MobileNavMenu({ items, onClose, isOpen }: MobileNavMenuProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      onClick={onClose}
      inert={!isOpen}
      className={`absolute top-full left-0 z-30 grid w-full overflow-hidden bg-[rgba(221,221,221,0.5)] shadow-[0px_4px_4px_0px_rgba(194,194,194,0.25)] backdrop-blur-md transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <ul className="flex min-h-0 flex-col py-7.5">
        {items.map((item) => (
          <li key={item.to} className="h-20">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex h-full items-center justify-end pr-15 text-[24px] font-medium ${
                  isActive ? "text-[#646464]" : "text-[#646464]"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavMenu;

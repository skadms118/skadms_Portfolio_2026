import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
}

interface MobileNavMenuProps {
  items: NavItem[];
  onClose: () => void;
}

/**
 * MobileNav 햄버거 버튼을 열었을 때 표시되는 드롭다운 메뉴.
 * #DDDDDD 50% 배경 + blur로 페이지 콘텐츠보다 앞에 뜨고, 메뉴 영역 클릭 시 닫힌다.
 * backdrop-blur가 실제로 페이지 콘텐츠에 적용되려면, backdrop-blur가 걸린
 * Navbar 상단바 div의 자손이 아닌 형제(같은 header 내)로 렌더링되어야 한다.
 * (조상에 backdrop-filter가 있으면 그 조상이 새 stacking context를 만들어
 * 이 메뉴의 backdrop-blur가 상단바 내부의 빈 영역만 블러하게 되어 효과가 사라진다.)
 */
function MobileNavMenu({ items, onClose }: MobileNavMenuProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      onClick={onClose}
      className="absolute top-full left-0 z-30 w-full bg-[rgba(221,221,221,0.5)] shadow-[0px_4px_4px_0px_rgba(194,194,194,0.25)] backdrop-blur-md"
    >
      <ul className="flex flex-col py-7.5">
        {items.map((item) => (
          <li key={item.to} className="h-30">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex h-full items-center justify-end pr-19 text-[24px] font-semibold ${
                  isActive ? "text-[#444]" : "text-[#cdcdcd]"
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

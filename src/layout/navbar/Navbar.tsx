import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import MobileNavMenu from "./MobileNavMenu";
import NavSprite from "./NavSprite";
import { useDisclosure } from "../../hooks/useDisclosure";
import { FONT_STYLES } from "../../styles/theme";

const NAV_ITEMS = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/project", label: "Project" },
  { to: "/skill", label: "Skill" },
];

/**
 * 공통 Navbar. 화면 스크롤과 무관하게 항상 화면 상단에 고정된다(position: fixed).
 * 높이(h-25, 100px)만큼 Layout의 main에 top padding을 주어 콘텐츠가 가려지지 않도록 한다.
 * - 1024px(md) 이상: Portfolio 타이틀 + 메뉴 4개를 가로로 표시.
 *   현재 페이지는 텍스트 색상 변경 + sprite 인디케이터를 항상 표시하고,
 *   다른 페이지는 hover 시에만 sprite 인디케이터를 표시한다.
 * - 1024px(md) 미만: MobileNav(햄버거 버튼) + MobileNavMenu(드롭다운)로 대체된다.
 *   MobileNavMenu는 backdrop-blur가 걸린 상단바 div의 형제로 렌더링되어야
 *   페이지 콘텐츠에 블러가 정상적으로 적용된다(상단바가 자신의 backdrop-filter로
 *   별도 stacking context를 만들어 자손의 backdrop-blur를 가리기 때문).
 *   따라서 disclosure 상태는 이 컴포넌트에서 관리하고 버튼/메뉴에 전달한다.
 */
function Navbar() {
  const {
    isOpen,
    containerRef,
    onMouseEnter,
    onMouseLeave,
    onToggle,
    onClose,
  } = useDisclosure<HTMLDivElement>();

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav
        className="hidden h-25 bg-[rgba(247,247,247,0.8)] shadow-[0px_5px_20px_0px_rgba(172,172,172,0.25)] md:flex backdrop-blur-sm"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-6">
          <span className={`${FONT_STYLES.title} text-[#444]`}>Portfolio</span>
          <ul className="flex h-full">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="group relative isolate h-full w-50">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex h-full w-full items-center justify-center text-[24px] font-medium ${
                      isActive ? "text-[#444]" : "text-[rgba(170,170,170,0.8)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="translate-y-2.5">{item.label}</span>
                      <NavSprite isActive={isActive} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        ref={containerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="md:hidden"
      >
        <div className="relative flex h-25 bg-[rgba(247,247,247,0.8)] shadow-[0px_5px_20px_0px_rgba(172,172,172,0.25)] backdrop-blur-sm">
          <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-6">
            <span className="text-[32px] font-bold text-[#444]">Portfolio</span>
            <MobileNav isOpen={isOpen} onToggle={onToggle} />
          </div>
        </div>

        {isOpen && <MobileNavMenu items={NAV_ITEMS} onClose={onClose} />}
      </div>
    </header>
  );
}

export default Navbar;

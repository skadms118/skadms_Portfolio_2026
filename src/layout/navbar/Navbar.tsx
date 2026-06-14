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
 * 높이(h-20, 80px)만큼 Layout의 main에 top padding을 주어 콘텐츠가 가려지지 않도록 한다.
 * 데스크탑/모바일 상단바를 하나의 <nav>로 통일하고, 내부 메뉴 영역만 반응형으로 전환한다.
 * - 1024px(md) 이상: 메뉴 4개(<ul>)를 가로로 표시.
 *   현재 페이지는 텍스트 색상 변경 + sprite 인디케이터를 항상 표시하고,
 *   다른 페이지는 hover 시에만 sprite 인디케이터를 표시한다.
 * - 1024px(md) 미만: MobileNav(햄버거 버튼)이 대신 표시되고, 클릭 시 MobileNavMenu(드롭다운)가 열린다.
 *   MobileNavMenu는 backdrop-blur가 걸린 <nav> 상단바의 형제로 렌더링되어야
 *   페이지 콘텐츠에 블러가 정상적으로 적용된다(상단바가 자신의 backdrop-filter로
 *   별도 stacking context를 만들어 자손의 backdrop-blur를 가리기 때문).
 *   따라서 disclosure 상태와 outside-click 감지용 containerRef는 <header>에서 관리한다.
 */
function Navbar() {
  const {
    isOpen,
    containerRef,
    onMouseEnter,
    onMouseLeave,
    onToggle,
    onClose,
  } = useDisclosure();

  return (
    <header
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed inset-x-0 top-0 z-30"
    >
      <nav
        className="flex h-20 bg-[rgba(247,247,247,0.8)] shadow-[0px_5px_20px_0px_rgba(172,172,172,0.25)] backdrop-blur-sm"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-8">
          <span className={`${FONT_STYLES.title} text-[#444]`}>Portfolio</span>

          <ul className="hidden h-full md:flex">
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

          <MobileNav isOpen={isOpen} onToggle={onToggle} />
        </div>
      </nav>

      <div className="md:hidden">
        {isOpen && <MobileNavMenu items={NAV_ITEMS} onClose={onClose} />}
      </div>
    </header>
  );
}

export default Navbar;

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { SIDEBAR_SECTIONS } from "./sidebar/sidebarSections";

/**
 * 모든 페이지(About/Experience/Project/Skill)에 공통으로 적용되는 레이아웃.
 * Navbar와 Sidebar는 화면 스크롤과 무관하게 항상 같은 위치에 고정되고,
 * Footer는 각 페이지 콘텐츠 하단에 공통으로 렌더링된다. 각 페이지는 <Outlet/>으로 교체된다.
 */
function Layout() {
  const { pathname } = useLocation();
  const sections = SIDEBAR_SECTIONS[pathname] ?? [];

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7]">
      <Navbar />
      <Sidebar sections={sections} />
      <main className="flex-1 pt-10">
        <div className="mx-auto max-w-360">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

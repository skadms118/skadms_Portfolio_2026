interface NavSpriteProps {
  isActive: boolean;
}

/**
 * Navbar 메뉴 항목 하단의 호버/활성 인디케이터.
 * isActive(현재 페이지)일 때 항상 표시되고, 그 외에는 부모 li(.group) hover 시에만 표시된다.
 */
function NavSprite({ isActive }: NavSpriteProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-4 bg-linear-to-t from-[rgba(221,221,221,1.0)] via-[rgba(221,221,221,0.3)] to-transparent blur-xs transition-opacity duration-500 ${
        isActive ? "opacity-90" : "opacity-0 group-hover:opacity-90"
      }`}
    />
  );
}

export default NavSprite;

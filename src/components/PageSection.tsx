import type { ReactNode } from "react";
import { FONT_STYLES } from "../styles/theme";
import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";

interface PageSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  contentClassName?: string;
  divider?: boolean;
}

/**
 * About/Experience/Project/Skill 페이지가 공유하는 섹션 레이아웃.
 * 좌우 패딩, 타이틀-컨텐츠 간격, 구분선, 타이틀 폰트를 통일하고,
 * 타이틀에는 Reveal 애니메이션을 적용한다.
 * divider가 false면 구분선 대신 섹션 하단 padding을 적용한다(페이지의 마지막 섹션용).
 */
function PageSection({
  id,
  title,
  children,
  contentClassName = "",
  divider = true,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 overflow-x-hidden px-15 pt-20 md:px-60 md:pt-50 ${
        divider ? "" : "pb-20 md:pb-50"
      }`}
    >
      <Reveal>
        <h2 className={FONT_STYLES.title}>{title}</h2>
      </Reveal>

      <div className={`mt-10 ${contentClassName}`}>{children}</div>

      {divider && <SectionDivider />}
    </section>
  );
}

export default PageSection;

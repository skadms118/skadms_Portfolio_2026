import PageSection from "../../components/PageSection";
import Reveal, { REVEAL_STEP } from "../../components/Reveal";
import SkillCard, { type SkillItem } from "../SkillCard";

const FRAMEWORKS: SkillItem[] = [
  { name: "React", icon: "/react_logo.svg", level: 2 },
  { name: "TailwindCSS", icon: "/tailwindcss_logo.svg", level: 1 },
];

/**
 * /skill - Framework & Library 섹션. 프레임워크/라이브러리 스킬 카드를 그리드로 배치한다.
 */
function FrameworkLibrary() {
  return (
    <PageSection
      id="framework-library"
      title="Framework & Library"
      contentClassName="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-2 3xl:grid-cols-3 3xl:gap-27"
    >
      {FRAMEWORKS.map((item, index) => (
        <Reveal
          key={item.name}
          delay={REVEAL_STEP * (index + 1)}
          className="hover:z-20"
        >
          <SkillCard {...item} />
        </Reveal>
      ))}
    </PageSection>
  );
}

export default FrameworkLibrary;

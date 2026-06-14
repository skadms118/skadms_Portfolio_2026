import PageSection from "../../components/PageSection";
import Reveal, { REVEAL_STEP } from "../../components/Reveal";
import SkillCard, { type SkillItem } from "../SkillCard";

const LANGUAGES: SkillItem[] = [
  { name: "HTML", icon: "/html_logo.svg", level: 2 },
  { name: "CSS", icon: "/css3_logo.svg", level: 2 },
  { name: "JavaScript", icon: "/javascript_logo.svg", level: 2 },
  { name: "TypeScript", icon: "/typescript_logo.svg", level: 2 },
  { name: "Java", icon: "/java_logo.svg", level: 1 },
  { name: "C", icon: "/c_logo.svg", level: 1 },
  { name: "Python", icon: "/python_ligo.svg", level: 1 },
];

/**
 * /skill - Language 섹션. 언어별 스킬 카드를 그리드로 배치한다.
 */
function Language() {
  return (
    <PageSection
      id="language"
      title="Language"
      contentClassName="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-2 3xl:grid-cols-3 3xl:gap-27"
    >
      {LANGUAGES.map((item, index) => (
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

export default Language;

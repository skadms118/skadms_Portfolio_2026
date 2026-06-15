import PageSection from "../../components/PageSection";
import Reveal, { REVEAL_STEP } from "../../components/Reveal";
import SkillCard from "../SkillCard";
import { TOOLS } from "../../items/ToolItem";

/**
 * /skill - Tool 섹션. 사용 도구 스킬 카드를 그리드로 배치한다.
 */
function Tool() {
  return (
    <PageSection
      id="tool"
      title="Tool"
      contentClassName="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-2 3xl:grid-cols-3 3xl:gap-27"
      divider={false}
    >
      {TOOLS.map((item, index) => (
        <Reveal
          key={item.name}
          delay={REVEAL_STEP * (index + 1)}
          className="has-[[role=dialog]]:z-20"
        >
          <SkillCard {...item} />
        </Reveal>
      ))}
    </PageSection>
  );
}

export default Tool;

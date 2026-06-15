import PageSection from "../../components/PageSection";
import ExperienceGraph from "../ExperienceGraph";

/**
 * /experience - Experience 섹션. 활동 기록을 그래프 형태로 나열한다.
 */
function Experience() {
  return (
    <PageSection id="experience" title="Experience">
      <ExperienceGraph />
    </PageSection>
  );
}

export default Experience;

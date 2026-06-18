import PageSection from "../components/PageSection";
import Reveal, { REVEAL_STEP } from "../components/Reveal";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../items/ProjectItem";

/**
 * /project - 진행한 프로젝트를 카드 형태로 나열한다.
 * 카드를 클릭하면 새 탭에서 해당 프로젝트 url로 이동한다.
 */
function Project() {
  return (
    <PageSection
      id="project"
      title="Project"
      contentClassName="grid grid-cols-1 justify-items-center gap-10 xs:grid-cols-2 3xl:grid-cols-3"
      divider={false}
    >
      {PROJECTS.map((item, index) => (
        <Reveal key={item.name} delay={REVEAL_STEP * (index + 1)}>
          <ProjectCard item={item} />
        </Reveal>
      ))}
    </PageSection>
  );
}

export default Project;

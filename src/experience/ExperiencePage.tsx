import Experience from "./experience/Experience";
import Qualification from "./qualification/Qualification";

/**
 * /experience - Experience / Award / Qualification 세로 스크롤 섹션으로 구성된다.
 */
function ExperiencePage() {
  return (
    <div>
      <Experience />
      <Qualification />
    </div>
  );
}

export default ExperiencePage;

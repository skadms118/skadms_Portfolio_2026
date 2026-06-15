import Project from "./Project";

/**
 * /project - 현재 명세에는 하위 섹션이 정의되어 있지 않아 단일 섹션 placeholder로 구성한다.
 * 추후 Figma에서 세부 섹션이 확인되면, About/Experience/Skill과 동일한 패턴으로
 * src/project/<섹션명>/ 하위 폴더 + 컴포넌트를 추가하고 이 페이지에서 조합하면 된다.
 */
function ProjectPage() {
  return (
    <div>
      <Project />
    </div>
  );
}

export default ProjectPage;

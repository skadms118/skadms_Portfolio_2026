import { FONT_STYLES } from "../styles/theme";
import type { ProjectItem } from "../items/ProjectItem";

interface ProjectCardProps {
  item: ProjectItem;
}

/**
 * Project 섹션의 카드. SkillCard와 동일한 정사각형+hover scale 카드를 사용하고,
 * 카드 아래에 프로젝트 이름([label])과 설명([content1])을 가운데 정렬로 보여준다.
 * 카드를 클릭하면 새 탭으로 프로젝트 url이 열린다.
 */
function ProjectCard({ item }: ProjectCardProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 text-center"
    >
      <div className="size-62 rounded-[45px] bg-[#ddd] shadow-[4px_4px_4px_0px_rgba(160,160,160,0.25)] transition-transform duration-200 hover:scale-105" />
      <h3 className={FONT_STYLES.label}>{item.name}</h3>
      <p className={FONT_STYLES.content1}>{item.description}</p>
    </a>
  );
}

export default ProjectCard;

import { FONT_STYLES } from "../styles/theme";
import type { ExperienceItem } from "../items/ExperienceItem";

interface ExperienceFormProps {
  item: ExperienceItem;
}

/** ExperienceGraphDot 옆에 표시되는 기간/제목/설명 텍스트 묶음. */
function ExperienceForm({ item }: ExperienceFormProps) {
  return (
    <div className="flex max-w-120 flex-col gap-1">
      <p className={`${FONT_STYLES.contentDetail} xs:whitespace-nowrap`}>
        {item.period}
      </p>
      <h3 className={`${FONT_STYLES.label} xs:whitespace-nowrap`}>
        {item.title}
      </h3>
      <p className={FONT_STYLES.content1}>{item.description}</p>
    </div>
  );
}

export default ExperienceForm;

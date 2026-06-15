import PageSection from "../../components/PageSection";
import { FONT_STYLES } from "../../styles/theme";

/**
 * /experience - Qualification 섹션. 콘텐츠는 다음 단계에서 구현한다.
 */
function Qualification() {
  return (
    <PageSection id="qualification" title="Qualification" divider={false}>
      <>
        <h3 className={FONT_STYLES.label}>도시계획기사</h3>
        <h3 className={FONT_STYLES.label}>정보처리기사(예정, 필기합격)</h3>
      </>
    </PageSection>
  );
}

export default Qualification;

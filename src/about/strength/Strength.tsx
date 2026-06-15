import { FONT_STYLES } from "../../styles/theme";
import PageSection from "../../components/PageSection";
import Reveal, { REVEAL_STEP } from "../../components/Reveal";
import { STRENGTHS } from "../../items/StrengthItem";

/**
 * /about - Strength 섹션. 6개의 강점 카드를 그리드로 배치한다.
 * 카드 너비는 항상 300px로 고정되며, xs(824px) 미만에서는 높이 240px(80%)로 1열,
 * xs 이상에서는 높이 300px(PC와 동일)로 2열 배치되고, 3xl(1440px) 이상에서는 3열 배치된다.
 * 카드는 좌상단부터 우측, 다음 행의 좌측부터 우측 순서(그리드 reading order)로 나타난다.
 */
function Strength() {
  return (
    <PageSection
      id="strength"
      title="Strength"
      contentClassName="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-2 3xl:grid-cols-3 3xl:gap-22.5"
      divider={false}
    >
      {STRENGTHS.map((item, index) => (
        <Reveal key={item.title} delay={REVEAL_STEP * (index + 1)}>
          <div className="flex h-60 w-75 flex-col items-center justify-center gap-2.5 rounded-[45px] border-10 border-[#c2c2c2] px-5 text-center shadow-[0px_4px_4px_0px_rgba(221,221,221,0.25)] xs:h-75">
            <h3 className={FONT_STYLES.highlight}>{item.title}</h3>
            <div className={FONT_STYLES.content2}>
              {item.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </PageSection>
  );
}

export default Strength;

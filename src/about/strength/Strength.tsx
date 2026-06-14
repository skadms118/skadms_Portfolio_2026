import { FONT_STYLES } from "../../styles/theme";

const STRENGTHS = [
  {
    title: "도전적 마인드",
    description: [
      "새로운 기술과 문제 앞에서",
      "주저하지 않고 직접 부딪히며",
      "답을 찾아갑니다.",
    ],
  },
  {
    title: "다양한 협업 경험",
    description: [
      "다양한 분야에서의 협업 경험을",
      "통해 원활한 커뮤니케이션 능력을 길러왔습니다.",
    ],
  },
  {
    title: "논리적 사고",
    description: [
      "작은 문제에서도",
      "충분한 논리적 근거에 따라",
      "답을 찾아갑니다.",
    ],
  },
  {
    title: "계획적 사고",
    description: [
      "목표를 세분화하고",
      "우선순위를 정해 체계적으로",
      "일을 진행합니다.",
    ],
  },
  {
    title: "넓은 시야",
    description: [
      "다양한 시각에서",
      "문제를 바라보며",
      "최적의 솔루션을 도출합니다.",
    ],
  },
  {
    title: "섬세한 작업",
    description: [
      "작은 디테일까지 놓치지 않고",
      "꼼꼼하게 결과물을 완성합니다.",
    ],
  },
];

/**
 * /about - Strength 섹션. 6개의 강점 카드를 그리드로 배치한다.
 * 카드 너비는 항상 300px로 고정되며, xs(824px) 미만에서는 높이 240px(80%)로 1열,
 * xs 이상에서는 높이 300px(PC와 동일)로 2열 배치되고, 3xl(1440px) 이상에서는 3열 배치된다.
 */
function Strength() {
  return (
    <section
      id="strength"
      className="overflow-x-hidden px-15 pt-20 pb-20 md:px-20 md:pt-50 md:pb-50"
    >
      <h2 className={FONT_STYLES.title}>Strength</h2>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-2 3xl:grid-cols-3 3xl:gap-22.5">
        {STRENGTHS.map((item) => (
          <div
            key={item.title}
            className="flex h-60 w-75 flex-col items-center justify-center gap-2.5 rounded-[45px] border-10 border-[#c2c2c2] px-5 text-center shadow-[0px_4px_4px_0px_rgba(221,221,221,0.25)] xs:h-75"
          >
            <h3 className={FONT_STYLES.highlight}>{item.title}</h3>
            <div className={FONT_STYLES.content2}>
              {item.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Strength;

import { FONT_STYLES } from "../../styles/theme";
import PageSection from "../../components/PageSection";
import Reveal, { REVEAL_STEP } from "../../components/Reveal";
import introduceImg from "../../assets/introduce_jpg.jpg";

/**
 * /about - Introduce 섹션.
 * 좌측 증명사진(introduce_jpg.jpg, 고정 크기, 비율 유지하며 크롭) + 우측 소개 텍스트로 구성된다.
 * - 1024px 미만: 사진(256x256)과 텍스트가 세로로 배치되고 가운데 정렬된다.
 * - 1024px~1193px: 사진이 320x459로 커지지만 텍스트 영역 높이가 459px를 넘지
 *   않도록 여전히 세로 배치 + 가운데 정렬을 유지한다.
 * - 1194px 이상: 사진(320x459) 옆에 텍스트가 좌측 정렬로 배치되며, 화면이
 *   좁아질수록 텍스트 영역(최대 686px~최소 344px)이 줄어들어 높이가 항상
 *   459px 이하로 유지된다.
 */
function Introduce() {
  return (
    <PageSection
      id="introduce"
      title="Introduce"
      contentClassName="flex flex-col items-center gap-8 md:gap-12.5 min-[1194px]:flex-row"
    >
      <Reveal
        delay={REVEAL_STEP}
        className="size-64 shrink-0 overflow-hidden rounded-[45px] md:size-80 md:h-114.75"
      >
        <img
          src={introduceImg}
          alt="증명사진"
          className="size-full object-cover"
        />
      </Reveal>

      <div className="flex w-full flex-col gap-8 min-[1194px]:min-h-114.75 min-[1194px]:w-171.5 min-[1194px]:min-w-86 min-[1194px]:justify-between min-[1194px]:gap-0">
        <Reveal delay={REVEAL_STEP * 2}>
          <h3 className={`${FONT_STYLES.highlight} text-center min-[1194px]:text-left`}>
            “다양한 관점으로 섬세하게 분석하는 개발자”
          </h3>
        </Reveal>

        <Reveal delay={REVEAL_STEP * 3}>
          <p className={`${FONT_STYLES.content1} text-center min-[1194px]:text-left`}>
            저는{" "}
            <strong className={FONT_STYLES.contentHighlight}>
              잘 보이지 않는 부분까지 이유있게 설계하는 개발자
            </strong>
            입니다. 사용자 경험을 중심으로 논리적이고 섬세한 사고를 통해
            설계하고 작업합니다.
          </p>
        </Reveal>

        <Reveal delay={REVEAL_STEP * 4}>
          <p className={`${FONT_STYLES.content1} text-center min-[1194px]:text-left`}>
            이번 데모데이 프로젝트에서는 그저 경력쌓기용 프로젝트가 아닌,{" "}
            <strong className={FONT_STYLES.contentHighlight}>
              실용적이고 완성도있는 웹
            </strong>
            을 만드는 것을 목표로 합니다. 아직 프로젝트 경험은 없지만 프로젝트
            기간 동안 부족한 부분을 발전시키고 팀원들과 소통하고 협력하면서
            적극적으로 프로젝트에 참여하겠습니다.
          </p>
        </Reveal>

        <Reveal delay={REVEAL_STEP * 5}>
          <p className={`${FONT_STYLES.content1} text-center min-[1194px]:text-left`}>
            현재 웹 프론트앤드 개발을 공부하고 있으며, 추후
            기획/디자인/백앤드까지 학습하여 다른 파트와도 의미있게 소통할 수
            있는 팀원이 되고 싶습니다.
          </p>
        </Reveal>

        <Reveal delay={REVEAL_STEP * 6}>
          <p
            className={`${FONT_STYLES.hashtag} text-center leading-loose min-[1194px]:text-left`}
          >
            #섬세함 #실용주의 #소통 #도전정신
          </p>
        </Reveal>
      </div>
    </PageSection>
  );
}

export default Introduce;

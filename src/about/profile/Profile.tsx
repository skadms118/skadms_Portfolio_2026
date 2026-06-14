import { FONT_STYLES } from "../../styles/theme";
import SectionDivider from "../../components/SectionDivider";
import profileImg from "../../assets/profile_jpg.jpg";
import { CONTACT_LINKS } from "../../data/contect";

/**
 * /about - Profile 섹션.
 * 좌측 프로필사진(profile_jpg.jpg, 540x662 고정, 비율 유지하며 크롭 + 좌->우 투명도 그라데이션)
 * + 우측 Name/Education/Career/Contect 정보로 구성된다.
 * 3xl(1440px) 미만에서는 사진이 사라지고 정보만 세로로 배치된다.
 */
function Profile() {
  return (
    <section id="profile" className="px-16 pt-20 md:px-45 md:pt-50">
      <h2 className={FONT_STYLES.title}>Profile</h2>

      <div className="mt-10.5 flex flex-col gap-8 3xl:flex-row 3xl:gap-10.5">
        <div className="relative hidden overflow-hidden rounded-l-[45px] 3xl:block 3xl:h-150 3xl:w-125 3xl:shrink-0">
          <img
            src={profileImg}
            alt="프로필 사진"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,transparent_0%,transparent_60%,rgba(247,247,247,0.4)_70%,rgba(247,247,247,0.9)_85%,#F7F7F7_100%)]" />
        </div>

        <div className="flex w-full flex-col gap-10 3xl:h-165.5 3xl:flex-1 3xl:overflow-hidden">
          <div className="flex w-full flex-col gap-1.25">
            <h3 className={FONT_STYLES.label}>Name</h3>
            <div className="flex items-end gap-2.5">
              <p className={FONT_STYLES.content2}>박남은</p>
              <p className={FONT_STYLES.contentDetail}>2000.1.18</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.25">
            <h3 className={FONT_STYLES.label}>Education</h3>
            <div className={FONT_STYLES.content2}>
              <p>2019 상현고등학교 졸업</p>
              <p>가천대학교 재학(휴학)중</p>
              <p>도시계획학과/소프트웨어학과(복)/패션디자인학과(부)</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.25">
            <h3 className={FONT_STYLES.label}>Career</h3>
            <div className={FONT_STYLES.content2}>
              <p>문예창작단(교내 밴드 동아리) 30기(2022-)</p>
              <p>도란도락(연합 밴드 동아리) 6, 7기(2024-2025)</p>
              <p>UMC(연합 IT 동아리) 10th Web 파트(2026-)</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.25">
            <h3 className={FONT_STYLES.label}>Contect</h3>
            <div className={FONT_STYLES.content2}>
              <p>Phone: 010-9494-2537</p>
              {CONTACT_LINKS.map(({ label, value, href }) => (
                <p key={label}>
                  {label}: <a href={href}>{value}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}

export default Profile;

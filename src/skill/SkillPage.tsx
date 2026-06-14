import LevelGuide from "../layout/sidebar/LevelGuide";
import Language from "./language/Language";
import FrameworkLibrary from "./framework-library/FrameworkLibrary";
import Tool from "./tool/Tool";

/**
 * /skill - Language / Framework-Library / Tool 섹션 + LevelGuide로 구성된다.
 * LevelGuide는 Layout이 공통으로 렌더링하는 Sidebar와 같은 축을 공유하며 그 위(y축 기준)에 위치한다.
 */
function SkillPage() {
  return (
    <div>
      <LevelGuide />
      <Language />
      <FrameworkLibrary />
      <Tool />
    </div>
  );
}

export default SkillPage;

import Introduce from "./introduce/Introduce";
import Profile from "./profile/Profile";
import Strength from "./strength/Strength";

/**
 * /about - Introduce / Profile / Strength 세로 스크롤 섹션으로 구성된다.
 */
function AboutPage() {
  return (
    <div>
      <Introduce />
      <Profile />
      <Strength />
    </div>
  );
}

export default AboutPage;

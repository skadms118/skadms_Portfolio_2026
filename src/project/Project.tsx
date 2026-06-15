import React from "react";
import { FONT_STYLES } from "../styles/theme";

const Project = () => {
  return (
    <div className="flex justify-center pt-50">
      <h1 className={`${FONT_STYLES.label} text-center max-w-200`}>
        이 페이지를 채워나갈 첫번째 프로젝트를 찾고있습니다.
        <br />
        아직 프로젝트 경험은 없지만 이번 Demo Day를 통해 <br />
        열심히 배워나가며 뜻깊은 경험을 해보고 싶습니다.
      </h1>
    </div>
  );
};

export default Project;

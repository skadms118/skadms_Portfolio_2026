/**
 * ExperienceGraph의 각 항목을 표시하는 원형 점.
 * 배경색과 동일한 채움(#f7f7f7) + 옅은 회색 테두리로, 그래프 라인 위에 떠 있는 것처럼 보인다.
 */
function ExperienceGraphDot() {
  return (
    <div
      aria-hidden="true"
      className="size-7 shrink-0 rounded-full border-4 border-[#c2c2c2] bg-[#f7f7f7] shadow-[0px_0px_15px_0px_rgba(160,160,160,0.8)]"
    />
  );
}

export default ExperienceGraphDot;

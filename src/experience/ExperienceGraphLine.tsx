/**
 * ExperienceGraphDot들을 잇는 세로선.
 * 부모(ExperienceGraph)의 전체 높이를 채우고 위/아래로 더 길게 삐져나오며,
 * 양 끝은 투명해지는 그라데이션으로 표시된다. dot 중심(좌측 14px)에 맞춰 배치된다.
 */
function ExperienceGraphLine() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[14px] w-1 -translate-x-1/2 -inset-y-[72px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(194,194,194,0.4)_8%,rgba(194,194,194,0.64)_50%,rgba(194,194,194,0.4)_92%,transparent_100%)]"
    />
  );
}

export default ExperienceGraphLine;

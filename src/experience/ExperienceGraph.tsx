import Reveal, { REVEAL_STEP } from "../components/Reveal";
import ExperienceGraphDot from "./ExperienceGraphDot";
import ExperienceGraphLine from "./ExperienceGraphLine";
import ExperienceForm from "./ExperienceForm";
import { EXPERIENCES } from "../items/ExperienceItem";

/**
 * ExperienceGraphDot - ExperienceForm을 세로로 나열하고, 그 사이를
 * ExperienceGraphLine으로 잇는다. dot의 개수는 EXPERIENCES 개수에 맞춰 생성되고,
 * line은 절대 위치로 컨테이너 전체 높이(+상하 여백)를 채우므로 항목 수에
 * 따라 자연스럽게 길이가 조정된다.
 * 각 dot과 해당 form은 하나의 Reveal로 묶여 순서대로 함께 나타난다.
 */
function ExperienceGraph() {
  return (
    <div className="flex justify-center pt-12">
      <div className="relative isolate flex flex-col pt-5 gap-y-7">
        <ExperienceGraphLine />
        {EXPERIENCES.map((item, index) => (
          <Reveal
            key={item.title}
            delay={REVEAL_STEP * (index + 1)}
            className="flex items-start gap-x-12"
          >
            <ExperienceGraphDot />
            <ExperienceForm item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ExperienceGraph;

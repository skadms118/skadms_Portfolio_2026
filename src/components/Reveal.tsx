import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

/** 같은 화면에서 함께 등장하는 요소들의 순서를 정하는 stagger 간격(ms). */
export const REVEAL_STEP = 80;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 뷰포트에 들어오면 아래에서 위로 짧고 부드럽게 떠오르며 나타나는 애니메이션 래퍼.
 * delay(ms)를 통해 같은 화면에 함께 들어오는 요소들의 등장 순서를 조절한다.
 */
function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-800 ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;

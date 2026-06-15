/** Strength 카드 한 항목(제목/설명)의 데이터 형태. */
export interface StrengthItem {
  title: string;
  description: string[];
}

export const STRENGTHS: StrengthItem[] = [
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

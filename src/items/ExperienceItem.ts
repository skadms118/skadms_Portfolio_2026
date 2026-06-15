/** Experience 그래프 한 항목(기간/제목/설명)의 데이터 형태. */
export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2026.3 ~",
    title: "UMC 10th Web 파트",
    description: "프론트앤드 학습을 위해 UMC 10th Web 파트 챌린저로서 참여",
  },
  {
    period: "2026.6",
    title: "UMC 장기해커톤(예정)",
    description: "Web 파트로서 프로젝트 참여 예정",
  },
  {
    period: "2026.6 ~ 2026.8",
    title: "UMC Demo Day(예정)",
    description: "프론트앤드 개발 실전 경험 예정",
  },
  {
    period: "2026.8",
    title: "정보처리기사 취득(예정)",
    description: "현재 필기 합격, 전반적인 CS 학습",
  },
  {
    period: "2026.9 ~",
    title: "UMC 11th(예정)",
    description: "UMC 11th 챌린저 참여 예정",
  },
];

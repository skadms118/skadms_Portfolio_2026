/**
 * Figma 디자인을 기준으로 정리한 공통 색상/폰트 토큰.
 * Tailwind의 임의값(className) 문자열로 미리 조합해두어, 그대로 className에 사용할 수 있다.
 */

export const COLORS = {
  background: "#F7F7F7",
  textDefault: "#444444",
  textHighlight: "#1C1C1C",
  textMuted: "#7A7A7A",
} as const;

export const FONT_STYLES = {
  /** Bold, 48px, #444444 */
  title: "text-[36px] font-[600] text-[#444444]",
  /** Bold, 32px, #444444 */
  label: "text-[24px] font-[500] text-[#444444]",
  /** Bold, 32px, #1C1C1C */
  highlight: "text-[26px] font-[650] text-[#1C1C1C]",
  /** Regular, 20px, #444444 */
  content1: "text-[18px] font-[450] text-[#444444]",
  /** SemiBold, 20px, #7A7A7A */
  content2: "text-[18px] font-[600] text-[#7A7A7A]",
  /** Bold, 20px, #1C1C1C */
  contentHighlight: "text-[18px] font-[600] text-[#1C1C1C]",

  hashtag: "text-[20px] font-[600] text-[#444444]",

  contentDetail: "text-[15px] font-[600] text-[#a0a0a0]",
} as const;

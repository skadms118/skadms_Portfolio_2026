import type { SidebarSection } from "./Sidebar";

/**
 * 페이지 경로별 Sidebar 섹션 목록. Layout에서 현재 경로에 맞는 섹션을 Sidebar에 전달한다.
 */
export const SIDEBAR_SECTIONS: Record<string, SidebarSection[]> = {
  "/about": [
    { id: "introduce", label: "Introduce" },
    { id: "profile", label: "Profile" },
    { id: "strength", label: "Strength" },
  ],
  "/experience": [
    { id: "experience", label: "Experience" },
    { id: "award", label: "Award" },
    { id: "qualification", label: "Qualification" },
  ],
  "/project": [{ id: "project", label: "Project" }],
  "/skill": [
    { id: "language", label: "Language" },
    { id: "framework-library", label: "Framework / Library" },
    { id: "tool", label: "Tool" },
  ],
};

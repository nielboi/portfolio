import { ExtendedDetails, projectDetailsMap } from "./projectDetails";

export interface ProjectTheme {
  accentColor: string; // Custom accent color for glow or highlight
}

export interface ProjectData {
  id: string;
  theme: ProjectTheme;
  media: {
    type: "image" | "video";
    url: string;
  };
  details: {
    date: string;
    title: { ko: string; en: string };
    description: { ko: string; en: string };
    techStack: string[];
  };
  extendedDetails: ExtendedDetails;
}

export const projectsMockData: ProjectData[] = [
  {
    id: "project-1",
    theme: { accentColor: "#A560DB" },
    media: {
      type: "image",
      url: "/images/project/unic.png",
    },
    details: {
      date: "2024. 02 - Present",
      title: { ko: "유닉 (Unic)", en: "Unic" },
      description: {
        ko: "오프라인 채용박람회 경험 개선 서비스 프로젝트입니다. 학생과 리크루터가 행사 전, 중, 후에 겪는 불편함을 해결하고 효과적인 네트워킹을 지원하기 위해 개발 중에 있습니다.",
        en: "A project to improve career fair experience (before, during, after) for both students and recruiters. Currently under development."
      },
      techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "Tailwind CSS"]
    },
    extendedDetails: projectDetailsMap["project-1"]
  },
  {
    id: "project-2",
    theme: { accentColor: "#d02222ff" },
    media: {
      type: "image",
      url: "/images/project/singing-cadets.jpg",
    },
    details: {
      date: "2024. 01 - Present",
      title: { ko: "Singing Cadets (대내외 관리시스템)", en: "Singing Cadets" },
      description: {
        ko: "학교 내 합창단 조직의 대내외 활동을 관리하는 서비스입니다. 현재 운영중인 시스템을 고객의 요구사항에 맞춰 개선하였습니다.",
        en: "A web application for managing the internal and external activities of the school choir organization. The system was improved from the existing app to meet the specific needs of the organization."
      },
      techStack: ["Ruby", "Node.js", "PostgreSQL", "Docker", "Heroku"]
    },
    extendedDetails: projectDetailsMap["project-2"]
  },
  {
    id: "project-3",
    theme: { accentColor: "#ec9471ff" },
    media: {
      type: "image",
      url: "/images/logo-outline.png",
    },
    details: {
      date: "2026. 01 - Present",
      title: { ko: "Aggie Dine", en: "Aggie Dine" },
      description: {
        ko: "코딩 동아리 프로젝트로 위치/강의 시간표 기반으로 교내 식당을 추천과 식사 소셜라이징을 지원하는 서비스입니다. 현재 모바일팀 팀원으로 참여하고 있습니다.",
        en: "A project to help students find places to eat on campus based on their location and class schedule, and to facilitate social dining. Currently participating as a member of the mobile team."
      },
      techStack: ["Next.js", "React", "TypeScript", "AWS"]
    },
    extendedDetails: projectDetailsMap["project-3"]
  },
  {
    id: "project-4",
    theme: { accentColor: "#DBCCB5" },
    media: {
      type: "image",
      url: "/images/project/clearly.png",
    },
    details: {
      date: "2026. 01 - 2026. 02",
      title: { ko: "Clearly", en: "Clearly" },
      description: {
        ko: "애플 스위프트 챌린지에 출품하기 위해 개발한 습관 관리 앱입니다. 기존의 좋은 습관이 아닌 나쁜 습관을 관리하는 새로운 시각에서 앱을 개발하였습니다.",
        en: "A habit management app developed for the Apple Swift Challenge. It was developed from a new perspective of managing bad habits rather than good habits."
      },
      techStack: ["Swift", "SwiftUI"]
    },
    extendedDetails: projectDetailsMap["project-4"]
  },
];

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
    theme: { accentColor: "#A560DB" }, // Light Purple
    media: {
      type: "image",
      url: "/images/project/unic.png", // Mock fallback
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
    theme: { accentColor: "#d02222ff" }, // Light Purple
    media: {
      type: "image",
      url: "/images/project/singing-cadets.jpg", // Mock fallback
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
    theme: { accentColor: "#d02222ff" }, // Light Purple
    media: {
      type: "image",
      url: "/images/project/singing-cadets.jpg", // Mock fallback
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
];

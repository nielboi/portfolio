import { ExtendedDetails } from "./projectDetails";
import { experienceDetailsMap } from "./experienceDetails";

export interface ExperienceTheme {
  accentColor: string;
}

export interface ExperienceData {
  id: string;
  theme: ExperienceTheme;
  media: {
    type: "image" | "video";
    url: string;
  };
  details: {
    date: string;
    company: { ko: string; en: string };
    role: { ko: string; en: string };
    description: { ko: string; en: string };
  };
  extendedDetails: ExtendedDetails;
}

export const experiencesMockData: ExperienceData[] = [
  {
    id: "exp-1",
    theme: { accentColor: "#94b3f0ff" },
    media: {
      type: "image",
      url: "/images/experience/experience-1-head.jpg",
    },
    details: {
      date: "2022. 08 - 2024. 05",
      company: { ko: "대한민국 공군", en: "Republic of Korea Air Force" },
      role: { ko: "무선통신체계 운용병", en: "Radio Communication System Operator" },
      description: {
        ko: "TICN과 MSAP 무선통신망의 정비와 운용을 통해 핵심적인 역할을 수행하였습니다. 상담병사와 병사자율위원으로 활동하며 부대 내 소통과 복지 증진에 기여하였습니다.",
        en: "Maintained and operated secured real-time multimedia communication systems (TICN) and Mobile Subscriber Access Point (MSAP). Contributed to improving internal communication and welfare as a counseling officer and member of the Soldier Self-governing Committee."
      }
    },
    extendedDetails: experienceDetailsMap["exp-1"]
  },
];

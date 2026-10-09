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
  {
    id: "exp-2",
    theme: { accentColor: "#500000" },
    media: {
      type: "image",
      url: "/images/experience/grace-racks.jpg",
    },
    details: {
      date: "2026. 05 - Present",
      company: { ko: "TAMU HPC Lab", en: "TAMU HPC Lab" },
      role: { ko: "학부 연구생", en: "Undergraduate Researcher" },
      description: {
        ko: "Optical Computing 기반의 AI Accelerator 연구를 수행하고 있습니다. 논문 리뷰와 실험을 통해 연구에 기여하고 있으며, 연구실 내 다양한 프로젝트 원고를 리뷰하며 연구활동을 지원하고 있습니다.",
        en: "Conducting research on AI Accelerators based on Optical Computing. Contributing to the research through paper reviews and experiments, and supporting research activities by reviewing various project manuscripts within the lab."
      }
    },
    extendedDetails: experienceDetailsMap["exp-2"]
  },
];

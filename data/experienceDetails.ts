import { ExtendedDetails } from "./projectDetails";

export const experienceDetailsMap: Record<string, ExtendedDetails> = {
  "exp-1": {
    links: [
      { label: "Post", url: "https://www.linkedin.com/posts/sung-jae-hong_it-has-been-a-month-since-i-was-discharged-activity-7209783388600160257-NKE3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjfWRoBekEZL1eHmTHFHc1LDwVi45jW8h4" },
      { label: "Youtube", url: "https://youtu.be/08aQ5R0TRSU?si=RZZp0zrGnTVPlU8j" }
    ],
    sections: [
      {
        subtitle: { ko: "무선통신체계운용", en: "Operating Radio Communication System" },
        image: "/images/experience/experience-1-1.jpg",
        description: {
          ko: "무선통신체계운용병으로서 전술통신체계 (TICN) 및 이동기지국시스템(MSAP)의 운용과 정비를 담당했습니다. 다양한 장비 운용에 자발적으로 참여하여 새로이 배우는 것에 주저하지 않았고, 장비 오류 시 선제적으로 대응하여 안정적 통신망 유지에 기여했습니다. 이러한 경험을 바탕으로 다수의 후배 부서원들에게 장비 사용법을 꼼꼼하게 인수인계하였고, 효율적인 부서 업무가 이루어질 수 있도록 했습니다.",
          en: "As a Radio Communication System Operator, I was responsible for the operation and maintenance of the Tactical Information Communication Network (TICN) and Mobile Subscriber Access Point (MSAP). I voluntarily participated in operating various equipment, never hesitating to learn new things, and contributed to maintaining a stable communication network by responding to equipment failures in a timely manner. Based on these experiences, I thoroughly handed over about equipment usage manual to numerous junior colleagues, ensuring efficient departmental operations."
        }
      },
      {
        subtitle: { ko: "상담병사 및 자율위원 활동", en: "Counseling and Autonomous Committee" },
        image: "/images/experience/experience-1-2.jpeg",
        description: {
          ko: "상담병사와 자율위원으로 선발되어 부대 내 병사간 소통과 복지 증진에 기여했습니다. 다수의 병사들의 고충을 경청하고 올바른 해결방안을 제시하였고 임기 기간동안 부조리 및 관련 사건사고를 0건으로 만들었습니다. 또한 병사들의 의견을 수렴하여 부대 내 생활 여건과 복지 증진, 그리고 행사 기획 및 진행에 적극적으로 참여하였습니다. 이 활동의 일환으로 부대 내 병사 헬스장 리모델링 사업에 참여하여 국방홍보원에 소개되기도 하였습니다.",
          en: "As a selected counseling officer and autonomous committee member, I contributed to improving communication and welfare among soldiers within the unit. I listened to the difficulties of numerous soldiers and proposed appropriate solutions, resulting in zero incidents of misconduct or related accidents during my term. Additionally, I actively participated in enhancing the living conditions and welfare of soldiers, based on their feedback. As part of these efforts, I was involved in the remodeling project of the soldiers' fitness center, which was even featured in the Defense Media Agency."
        }
      }
    ]
  }
};

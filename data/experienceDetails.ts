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
  },
  "exp-2": {
    links: [
      { label: "TAMU lab description", url: "https://engineering.tamu.edu/cse/research/labs.html" }
    ],
    sections: [
      {
        subtitle: { ko: "학부연구생으로서의 활동", en: "experience as a undergraduate researcher" },
        // image: "/images/experience/experience-1-1.jpg",
        description: {
          ko: "인턴으로 처음 연구실에 합류하여 최신 논문 리뷰와 발표를 통해 새로운 프로젝트 주제 발굴에 기여하였습니다. 또한, 연구실 내 저널 원고를 리뷰하며 연구 활동을 지원했습니다. 현재 Optical Computing 기반의 AI Accelerator 연구를 수행하고 있고, 최근 랩미팅때 발표한 관련 논문을 기반으로 실험을 진행하고 있습니다.",
          en: "Initially joined the lab as an intern, contributing to the discovery of new project topics through reviewing and presenting recent papers. Additionally, supported research activities by reviewing journal manuscripts within the lab. Currently conducting research on AI Accelerators based on Optical Computing, and recently conducting experiments based on related papers presented during lab meetings."
        }
      },
    ]
  },
  "exp-3": {
    links: [
      // { label: "TAMU ", url: "https://engineering.tamu.edu/cse/research/labs.html" }
    ],
    sections: [
      {
        subtitle: { ko: "조교로서의 활동", en: "experience as a Teaching Assistant" },
        // image: "/images/experience/experience-1-1.jpg",
        description: {
          ko: "학부 1학년과 2학년이 주로 듣는 C++ 입문 과목의 조교로서 학생들의 학습을 지원하고 있습니다. 개인적으로 프로그래밍에 대한 개념을 대학에 처음 들어와 배웠기 때문에, lab section을 진행하며 수업 내용과 실습 과제 관련 학생들의 질문에 답변하여 학생들이 보다 쉽게 이해할 수 있도록 돕고 있습니다. 또한, office hour을 운영하며 학생들이 개념과 과제에 대해서 개별적으로 겪는 어려움을 자발적으로 해결할 수 있도록 지원하고 있습니다. 특히, 과제 및 시험 채점을 넘어서 plagiarism team에 합류하였고 학생들의 과제 표절을 방지 및 검증하는 활동을 수행하고 있습니다.",
          en: "As a teaching assistant for introductory C++ courses primarily taken by first and second-year undergraduates, I support students' learning. I conduct lab sections, answering questions related to course content and practical assignments, helping students understand the material more easily. As I have first learned programming during my freshman year, I try my best to help the students who are struggling as I have. Additionally, I hold office hours to assist students in independently resolving difficulties they encounter with concepts and assignments. Notably, beyond grading assignments and exams, I have joined the plagiarism team, actively working to prevent and verify instances of plagiarism in student submissions."
        }
      },
    ]
  }
};

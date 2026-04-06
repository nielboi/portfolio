export interface DetailSection {
  subtitle: { ko: string; en: string };
  image?: string;
  description: { ko: string; en: string };
}

export interface DetailLink {
  label: string;
  url: string;
}

export interface ExtendedDetails {
  sections: DetailSection[];
  links: DetailLink[];
}

export const projectDetailsMap: Record<string, ExtendedDetails> = {
  "project-1": {
    links: [
    ],
    sections: [
      {
        subtitle: { ko: "해결하고자 하는 문제점", en: "Problems to Solve" },
        description: { 
          ko: "채용박람회 (Career Fair)는 구인 기업과 구직자(학생)가 직접 만나서 소통할 수 있는 좋은 기회입니다. 하지만 제가 직접 학교에서 주최하는 행사에 참여해본 결과, 여러가지 문제점들을 발견할 수 있었습니다. 우선, 종이로 된 레쥬메/CV를 기업에 전달하는 방식이 분실의 위험이 있고, 여러 학생들의 이력서를 기업이 취합하고 분류하는 과정이 비효율적일 것이라고 생각했습니다. 또한, 학생들에게 설문해본 결과, 자신의 경험과 역량을 효과적으로 어필되지 않고 기억되지 않을 것이라는 우려가 있었습니다. 그래서 저는 이러한 문제점들을 해결하기 위해 '유닉(Unic)'이라는 서비스를 개발하게 되었습니다.", 
          en: "Career Fairs are valuable opportunities for companies and students to connect in-person. However, my personal experience at the school career fairs revealed several issues. First, the traditional method of sharing paper resumes/CVs raises a risk of loss, and the process of companies collecting and sorting numerous student resumes seemed inefficient. Additionally, surveys with students showed concerns about their experiences and qualifications not being effectively communicated or remembered. To address these problems, I planned a service called 'Unic'." 
        }
      },
      {
        subtitle: { ko: "해결하기 위해 하고 있는 것", en: "What I'm doing to solve" },
        description: { 
          ko: "위와 같은 문제를 해결하기 위해, 현직 경험이 많으신 교수님과 지속적으로 소통하며 서비스의 방향성에 대한 조언을 듣고 있습니다. 또한, 현재 프로토타입을 개발 중에 있으며, 학교 커리어 센터와 협업을 통해 향후 소규모 커리어 페어에서 파일럿 테스트를 진행할 예정입니다. 파일럿 테스트를 위해 현재 구현중인 기능 중 기업이 무작위로 분류된 학생들의 프로필을 쉽게 필터링하고 저장하는 기능과, 학생들이 쉽게 자신의 스킬셋과 경험을 바탕으로 프로필을 구성할 수 있는 기능이 있습니다. 파일럿 테스트 후에는 피드백을 바탕으로 서비스를 개선하고, 점차 규모를 확대해나갈 계획입니다.", 
          en: "I am currently in close communication with a professor who has extensive industry experience to refine the project development. Additionally, I am collaborating with the school's career center to do a pilot test at a small-scale career fair in the near future. For the pilot test, I am implementing features such as an intuitive filtering and saving system for companies to easily manage randomly sorted student profiles, and an interface for students to create profiles based on their skills and experiences. Following the pilot test, I plan to iterate on the service based on feedback and gradually expand its scale." 
        }
      }
    ]
  },
  "project-2": {
    links: [
      { label: "Singing Cadets", url: "https://singing-cadets501-2ebb4582e3f5.herokuapp.com/users/sign_in" }
    ],
    sections: [
      {
        subtitle: { ko: "도입 배경", en: "Background" },
        description: { 
          ko: "기존 인터페이스의 복잡성을 해결하기 위해 창의적인 접근을 도모했습니다.", 
          en: "We took a creative approach to solve the complexity of the existing interface." 
        }
      },
      {
        subtitle: { ko: "주요 해결 과제", en: "Key Challenges" },
        image: "/images/stone-group.png",
        description: { 
          ko: "사용자 이탈률이 가장 높은 구간을 분석하고 퍼널(Funnel)을 간소화했습니다. 특히 모바일 환경에서의 조작 편의성을 대폭 개선했습니다.", 
          en: "Analyzed the section with the highest drop-off rate and simplified the funnel. Specifically improved usability on mobile environments." 
        }
      }
    ]
  },
};

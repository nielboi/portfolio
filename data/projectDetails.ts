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
        subtitle: { ko: "프로젝트 계기", en: "Background" },
        description: { 
          ko: "저희 학교 합창단에서 요청하여 기존에 사용하던 조직 관리 시스템을 개선하게 되었습니다. 기존 시스템은 조직 관리 중 필수적인 기능들이 부족했고 추가적인 기능들이 필요하여 고객의 요청으로 시스템을 개선했습니다.", 
          en: "Our school choir requested an improvement of the existing organization management system. The existing system lacked essential features for organization management and required additional functionalities, prompting the client to request an upgrade." 
        }
      },
      {
        subtitle: { ko: "문제 정의", en: "Problem Statement" },
        image: "/images/project/singing-cadets/login.png",
        description: { 
          ko: "기존 시스템에 있어서 주요 문제점은 관리자 권한으로 차별적으로 조작할 수 있는 기능이 부족하여 주로 수기로 처리해야하는 번거로움이 있었습니다. 예를 들어, 필요한 공지를 하는 기능이 없어 단체 채팅방을 이용해야했고, 결석원을 수리할때 스크롤하여 찾아야하는 불편함이 있었습니다. 추가적으로, 대내외 일정을 관리하는 기능이 없어, 홍보가 필요한 공연이나 행사가 있을때, 홍보가 필요한 대상에게 알리는 기능이 부족했습니다.", 
          en: "Analyzed the section with the highest drop-off rate and simplified the funnel. Specifically improved usability on mobile environments." 
        }
      },
      {
        subtitle: { ko: "수행 과정", en: "Process" },
        image: "/images/project/singing-cadets/scope.png",
        description: { 
          ko: "우선 기존 시스템을 분석하고 고객과 자주 소통하며 필수적/선택적 추가 기능들을 정리했습니다. 그 후, 기존 시스템을 분석하며 개선이 필요한 부분들을 정리했습니다. UAT form과 test cases 그리고 risk plan을 작성하여 개발 방향성을 잡았습니다. 필요한 DB 스키마를 재정비하고, 코딩 스타일 규칙을 만들어 개발을 진행했습니다. 애자일하게 개발을 진행하면서 고객에 요구사항에 빠르게 대응할 수 있도록 했습니다.", 
          en: "First, I analyzed the existing system and communicated frequently with the client to organize essential and optional additional features. Then, I identified areas needing improvement in the existing system. I established a development direction by creating a UAT form, test cases, and a risk plan. I reorganized the necessary DB schema and established coding style rules to proceed with development. By developing agilely, I was able to respond quickly to customer requirements." 
        }
      },
      {
        subtitle: { ko: "개발 중 겪은 어려움과 해결", en: "Difficulties during development and solutions" },
        image: "/images/project/singing-cadets/pr.png",
        description: { 
          ko: "프로젝트 수행중 가장 어려웠던 점은 version control이었습니다. 각자의 개발 속도가 다르고 무분별한 푸시와 머지로 인해 충돌이 자주 발생했습니다. 이를 해결하기 위해 코드 리뷰를 탬플릿화 하여 변경사항을 효율적으로 공유하고 조율하는 과정을 거쳤습니다. 다른 문제점으로, db migration 충돌이 있었습니다. 기능 추가를 진행하면서 초기에 계획했던 스키마 변경이 불가피했고, 각자 DB 스키마를 변경하면서 마이그레이션 파일의 타임스탬프가 꼬이는 문제가 발생했습니다. 데이터 무결성 문제가 발생할 수 있는 상황이었고, 다행히 코드 리뷰 중 발견하여 팀원들에게 알려 발빠르게 해결할 수 있었습니다. 추후 유사한 문제를 방지하기 위해 확인 프로세스를 강화해야겠다고 생각했습니다.", 
          en: "The most significant challenge during the project was version control. Due to varying development speeds and indiscriminate pushes and merges, conflicts occurred frequently. To resolve this, we standardized code reviews to efficiently share and coordinate changes. Another issue was database migration conflicts. As we added features, schema changes became unavoidable, leading to timestamp mismatches in migration files. This posed a risk to data integrity, but fortunately, it was discovered during a code review, allowing us to address it promptly. Moving forward, I realized the need to strengthen verification processes to prevent similar issues." 
        }
      },
      {
        subtitle: { ko: "배운 점", en: "Lessons Learned" },
        image: "/images/project/singing-cadets/uat.png",
        description: { 
          ko: "이번 프로젝트를 통해 체계적인 프로젝트 관리의 중요성을 깨달았습니다. 초기 기획 단계에서 UAT form, test cases/acceptance criteria, risk plan을 작성하여 개발 방향성을 명확히 설정한 것이 큰 도움이 되었습니다. 또한, 애자일 개발 방식을 통해 고객의 요구사항에 빠르게 대응하고, 코드 리뷰를 통해 팀원들과 효율적으로 소통하며 협업하는 능력을 키울 수 있었습니다. 더 나아가, 레거시 코드와 팀원들의 코드를 리뷰하는 과정에서 유지보수하기 좋은 코드를 작성하는 방법을 배웠고, 버그를 빠르게 찾을 수 있는 코드 리딩 역량을 키울 수 있었습니다.", 
          en: "This project taught me the importance of systematic project management. Creating a clear development direction by preparing documents like UAT forms, test cases/acceptance criteria, and risk plans at the initial planning stage was very helpful. Additionally, through agile development, I learned to respond quickly to customer requirements and improved my ability to communicate and collaborate effectively with team members through code reviews. Furthermore, by reviewing legacy code and my teammates' code, I learned how to write maintainable code and developed the skill of quickly identifying bugs." 
        }
      }
    ]
  },
  "project-3": {
    links: [
      // TODO: 링크 나중에 추가!
    ],
    sections: [
      {
        subtitle: { ko: "해결하고자 하는 문제점", en: "Problems to Solve" },
        description: { 
          ko: "저희 학교에는 외부 업체에서 운영하는 학생 식당과 프렌차이즈 식당이 여러 곳 있습니다. 하지만 기존 앱(Dine on Campus)으로는 각 식당의 메뉴를 한 눈에 파악하기 어렵고, 메뉴가 나와있지 않는 문제점이 있었습니다. 또한, 기존 맵 서비스는 식당의 위치를 한 눈에 파악하기 어렵다는 점이 있었습니다. 더 나아가 학생들이 시간 여력에 따라 식당을 선택하기 어려운 문제점이 있었습니다.", 
          en: "There are several student cafeterias run by external vendors and franchise restaurants on our campus. However, the existing app (Dine on Campus) makes it difficult to see the menus of each restaurant at a glance, and some restaurants do not even provide menu information. Additionally, the existing map service makes it difficult to see the locations of restaurants at a glance. Furthermore, students find it difficult to choose restaurants based on their available time." 
        }
      },
      {
        subtitle: { ko: "해결하기 위해 하고 있는 것", en: "What I'm doing to solve" },
        description: { 
          ko: "위의 문제점을 해결하기 위해, 학교 식당 정보/메뉴/영양정보/위치를 파싱하여 한 눈에 보기 쉽게 만들고, 동일한 건물내에 있는 식당들은 묶어서 보여주는 기능을 구현했습니다. 학생의 시간표를 입력 받아 최적의 식당을 추천해주는 기능을 구현했습니다. 또한, 개인 영양 필요에 따라 식당과 메뉴를 추천해주는 기능을 구현 중에 있습니다. 더 나아가, 유저 참여율을 높이고 앱의 방향성에 맞게 함께 식사할 학우를 구하는 그룹 기능을 구현 중에 있습니다.", 
          en: "To solve the problems mentioned above, I am implementing features to display school cafeteria information, menus, nutritional information, and locations in an easy-to-view format, grouping restaurants located within the same building. I have also implemented a feature that recommends optimal restaurants based on the student's class schedule. Additionally, I am working on a feature to recommend restaurants and menus according to individual nutritional needs. Furthermore, to increase user engagement and align with the app's direction, I am developing a group feature to help students find others to dine with." 
        }
      }
    ]
  },
  "project-4": {
    links: [
      { label: "Linkedin Post", url: "https://www.linkedin.com/posts/sung-jae-hong_why-do-we-only-track-the-habits-were-proud-ugcPost-7434113545161842688-qBZD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjfWRoBekEZL1eHmTHFHc1LDwVi45jW8h4" },
      { label: "Github", url: "https://github.com/nielboi/clearly" }
    ],
    sections: [
      {
        subtitle: { ko: "프로젝트 계기", en: "Background" },
        image: "/images/project/clearly/home.png",
        description: { 
          ko: "애플 스위프트 챌린지에 참여하기 위해 마켓 서칭을 하던 중, 기존의 좋은 습관을 관리하는 앱은 많았으나 나쁜 습관을 관리하는 앱은 부족하다는 것을 알게 되었습니다. 이를 통해 새로운 시각에서 앱을 개발할 수 있겠다는 생각이 들었습니다. 또한, 새로운 언어를 배우고 싶었고, 스위프트 문법을 배우기에는 좋은 기회라고 생각했습니다.", 
          en: "While searching the app store for the Apple Swift Challenge, I noticed that while there were many apps for managing good habits, there were few for managing bad habits. This made me think that I could develop an app from a new perspective. Additionally, I wanted to learn a new language, and I thought this would be a good opportunity to learn Swift syntax." 
        }
      },
      {
        subtitle: { ko: "개발 중 겪은 어려움과 해결", en: "Difficulties during development and solutions" },
        image: "/images/project/clearly/calendar.png",
        description: { 
          ko: "가장 어려웠던 점은 개발 환경을 극복하는 것이었습니다. 주 개발 환경은 리소스가 제한적인 아이패드였기 때문에 시뮬레이팅에 한계가 있었습니다. 이를 해결하기 위해 AI를 적극 도구로서 활용하며 코드 리팩토링을 진행하였고, 아이패드 상에서도 시뮬레이팅이 가능하도록 가볍게 만들 수 있었습니다. 또한, 스위프트 플레이그라운드 앱은 ios 18 버전까지만 지원하여 최신 프레임워크를 도입할 수 없었다는 점이 아쉬웠습니다. 하지만 하위 호환성을 고려한 안정적 UI를 설계할 수 있다는 장점이 있었습니다. 현재 프로토타입을 기반으로 학교 내 장비를 활용하여 최신 UI 적용과 성능 개선을 진행할 계획입니다.", 
          en: "The most significant challenge during the project was the development environment. Since the primary development environment was an iPad with limited resources, there were limitations in simulation. To overcome this, I actively utilized AI as a tool to refactor the code, making it light enough to simulate on the iPad. Additionally, it was disappointing that the Swift Playgrounds app only supported up to iOS 18, preventing the adoption of the latest frameworks. However, this allowed for the advantage of designing a stable UI considering backward compatibility. Currently, based on the prototype, I plan to apply the latest UI and improve performance using school equipment." 
        }
      },
      {
        subtitle: { ko: "배운 점", en: "Lessons Learned" },
        image: "/images/project/clearly/gallery.png",
        description: { 
          ko: "새로운 언어를 배울 수 있었고, AI를 단순 도구를 넘어 코딩 파트너로서 활용한 효율적 개발 프로세스를 경험할 수 있었습니다. 또한, 제한된 환경에서 개발을 진행하며 자원 최적화와 문제 해결 역량을 강화할 수 있었습니다.", 
          en: "I learned a new language and experienced an efficient development process by utilizing AI as a coding partner beyond a simple tool. Additionally, by developing in a limited environment, I strengthened my resource optimization and problem-solving skills." 
        }
      }
    ]
  },
};

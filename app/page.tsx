"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: entryProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"]
  });

  const topY = useTransform(entryProgress, [0.5, 1], ["10%", "0%"]);
  const topOpacity = useTransform(entryProgress, [0.5, 1], [0, 1]);

  // Phase 1: Fade in natively at staggered intervals (20% stepped down).
  const midOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const botOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Phase 2: From 0.6 to 0.9 (towards Contact section), slide them UP to overlap perfectly.
  const midY = useTransform(scrollYProgress, [0.1, 0.3, 0.6, 0.9], ["10%", "0%", "0%", "-20%"]);
  const botY = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.9], ["10%", "0%", "0%", "-40%"]);

  // Phase 2: Animate mask gradients to solid black smoothly.
  const midMask = useTransform(scrollYProgress, [0.6, 0.9], [
    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)",
    "linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)"
  ]);
  const botMask = useTransform(scrollYProgress, [0.6, 0.9], [
    "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
    "linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)"
  ]);

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    // Additional logic can be added here later based on the selection
    console.log(`Language selected: ${lang}`);

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0F0E0C] font-sans">
      <main className="w-full overflow-clip">
        <section
          id="home"
          className="flex min-h-screen relative items-center justify-center"
        >
          {/* 배경 블러 이미지 */}
          <div className="absolute w-[100vw] h-[100vw] left-[-15%] top-1/2 -translate-y-1/2 animate-pulse-blur">
            <Image
              src="/images/home-element-blur.png"
              alt="background blur"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute w-[45vw] h-[45vw] left-[10%] top-5/9 -translate-y-1/2">
            <Image
              src="/images/stone-group.png"
              alt="stone group"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute right-15 flex flex-col text-right items-end justifycontent-flex-end text-[#F4EBDD]">
            <h1 className="text-6xl md:text-7xl lg:text-[96px] text-[#f4ebdd] font-thin leading-tight mb-2 text-right">
              Niel Hong
            </h1>
          </div>
          <div className="absolute right-15 bottom-5 flex flex-col items-end justifycontent-flex-end">
            {/* Language selection prompt */}
            <div>
              <p className="text-lg md:text-1xl text-[#f4ebdd] font-light text-right">
                반갑습니다! 언어를 선택해주세요.
              </p>
              <p className="text-lg md:text-1xl text-[#f4ebdd] font-light">
                Hello! Please select the language.
              </p>
            </div>
            {/* Language selector */}
            <div className="flex justifycontent-flex-end mt-6 space-x-4 text-[#F4EBDD]">
              <button
                onClick={() => handleLanguageSelect('ko')}
                className="relative group pb-1"
              >
                <b>한국어</b>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F4EBDD] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => handleLanguageSelect('en')}
                className="relative group pb-1"
              >
                <b>English</b>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F4EBDD] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="relative w-full h-[400vh]">
          <div className="sticky top-0 flex h-screen w-full items-center justify-center z-0">
            {/* Unified Centered Multi-Column Container (Shifted slightly leftwards visually and pushed down for Navbar breathing room) */}
            <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-[1600px] px-[5vw] -translate-x-4 md:-translate-x-15 lg:-translate-x-20 translate-y-10 lg:translate-y-12">
              
              {/* Left: About Card (Proportional aspect ratio) */}
              <div id="aboutCard" className="relative aspect-[85/65] w-full md:w-[50vw] max-w-[950px] shrink-0">
              {/* Top Card */}
              <motion.div
                style={{
                  y: topY,
                  opacity: topOpacity
                }}
                className="absolute w-full h-full top-0 z-10"
              >
                <Image
                  src="/images/about-card-top.png"
                  alt="about card top"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Mid Card */}
              <motion.div
                style={{
                  y: midY,
                  opacity: midOpacity,
                  WebkitMaskImage: midMask,
                  maskImage: midMask
                }}
                className="absolute w-full h-full top-[20%] z-20"
              >
                <Image
                  src="/images/about-card-mid.png"
                  alt="about card mid"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Bot Card */}
              <motion.div
                style={{
                  y: botY,
                  opacity: botOpacity,
                  WebkitMaskImage: botMask,
                  maskImage: botMask
                }}
                className="absolute w-full h-full top-[40%] z-30"
              >
                <Image
                  src="/images/about-card-bot.png"
                  alt="about card bot"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

              {/* Right: About Text (Pulled left with negative margin to visually bypass image padding) */}
              <div id="aboutSelection" className="flex flex-col items-start justify-center text-left text-[#F4EBDD] z-40 w-full md:w-[40vw] max-w-[700px] pb-32 md:pb-0 -ml-4 md:-ml-12 lg:-ml-24">

              {/* TOP TEXT */}
              <motion.div
                style={{ opacity: topOpacity }}
                className="flex flex-col items-start"
              >
                <h1 className="text-[60px] lg:text-[80px] font-thin leading-none tracking-tight">from <b className="font-medium text-[#A560DB]">creativity,</b></h1>
                <p className="w-full font-light text-base lg:text-lg opacity-80 mt-4 leading-relaxed tracking-wide">
                  {language === "en"
                    ? "Good service means solving problems from the user's perspective and providing meaningful value. I deep dive into the problem and provide creative and innovative solutions."
                    : "좋은 서비스란 사용자의 입장에서 문제를 해결하고 새로운 가치를 제공하는 것이라고 생각합니다. 기존의 틀에 박힌 사고에서 벗어나 창의적이고 혁신적인 방향성을 제시하고자 항상 탐구합니다."}
                </p>
              </motion.div>

              {/* MID TEXT */}
              <motion.div
                style={{ opacity: midOpacity }}
                className="flex flex-col items-start mt-6"
              >
                <h1 className="text-[60px] lg:text-[80px] font-thin leading-none tracking-tight">with <b className="font-medium text-[#46A74C]">details,</b></h1>
                <p className="w-full font-light text-base lg:text-lg opacity-80 mt-4 leading-relaxed tracking-wide">
                  {language === "en"
                    ? "I carefully refine and polish every detail from various perspectives. I do my best to deliver the value I want to convey to the user."
                    : "다양한 관점에서 누구보다 꼼꼼하고 세심하게 다듬어내고, 제가 전달하고자 하는 가치를 사용자에게 온전히 전달하기 위해 노력합니다."}
                </p>
              </motion.div>

              {/* BOT TEXT */}
              <motion.div
                style={{ opacity: botOpacity }}
                className="flex flex-col items-start mt-6"
              >
                <h1 className="text-[60px] lg:text-[80px] font-thin leading-none tracking-tight">to <b className="font-medium text-[#607CDB]">perfection.</b></h1>
                <p className="w-full font-light text-base lg:text-lg opacity-80 mt-4 leading-relaxed tracking-wide">
                  {language === "en"
                    ? "For the flawless and user-centric system, I continuously test and improve the code with the feedback from the users and team members."
                    : "오차없는 완벽한 결과물을 만들기 위해 끊임없이 테스트하고, 팀과 유저의 피드백을 수용하며, 끊김없는 사용자 경험을 제공하고자 합니다."}
                </p>
              </motion.div>

            </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <ContactForm language={language} />
      </main>
    </div>
  );
}

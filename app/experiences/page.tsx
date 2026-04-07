"use client";

import { useLanguage } from "../../components/LanguageProvider";
import { experiencesMockData } from "../../data/experiences";
import ExperienceCard from "../../components/ExperienceCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperiencesPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-[150vh] bg-[#0F0E0C] w-full pt-[20vh] pb-32 overflow-hidden flex flex-col items-center">
      {/* Header Section */}
      <div className="w-[95%] lg:w-[80%] max-w-[1200px] mx-auto px-6 mb-4 md:mb-8 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[100px] text-[#F4EBDD] font-thin leading-none tracking-tight mb-6"
        >
          Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#F4EBDD]/60 text-lg md:text-xl font-light tracking-wide"
        >
          {language === "en" 
            ? "You can see my career journey here. I am excited to make a next step with you!" 
            : "여기서 제 커리어 여정을 확인하실 수 있습니다. 제 다음이 당신과 함께 만들어갈 '다음'이 되기를 기대합니다."}
        </motion.p>
      </div>

      {/* Grid Container */}
      <div className="w-[95%] lg:w-[80%] max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-2">
        {experiencesMockData.map((exp, idx) => (
          <ExperienceCard key={exp.id} experience={exp} index={idx} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center justify-center mt-32 md:mt-40 mb-10 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-light text-[#F4EBDD] tracking-tight mb-10 leading-tight">
          {language === "en" ? "Let's create the next." : "'다음'을 함께 만들어갈까요?"}
        </h2>
        <Link 
          href="/#contact" 
          className="px-12 py-5 bg-[#B29058] text-[#0a0908] text-lg font-medium tracking-widest rounded-full hover:brightness-110 transition-all duration-500 shadow-[0_0_40px_rgba(178,144,88,0.2)] hover:shadow-[0_0_60px_rgba(178,144,88,0.4)]"
        >
          {language === "en" ? "Let's Connect" : "연결하기"}
        </Link>
      </motion.div>
    </main>
  );
}

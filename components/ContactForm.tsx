"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ContactFormProps {
  language: string | null;
}

export default function ContactForm({ language }: ContactFormProps) {
  const [step, setStep] = useState<"form" | "card" | "flying" | "success">("form");
  const [formData, setFormData] = useState({ name: "", company: "", email: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setFormData({
      name: form.get("name") as string || "Niel Hong",
      company: form.get("company") as string || "Niel Portfolio",
      email: form.get("email") as string || "niel@example.com"
    });
    setStep("card");
    
    // 원형 비행(1.5초)가 완전히 끝난 후, 정확히 1.3초를 대기하고 위로 날아갑니다. (1.5 + 1.3 = 2.8)
    setTimeout(() => {
      setStep("flying");
      
      // 1초 동안 아래로 쫀득하게 당겨졌다가 위로 날아감 (backIn)
      setTimeout(() => {
        setStep("success");
      }, 1000); 
    }, 3000); 
  };

  return (
    <section id="contact" className="relative flex flex-col w-full h-screen items-center justify-center overflow-hidden border-t border-[#F4EBDD]/10">
      
      {/* 1. Form Section */}
      <AnimatePresence>
        {step === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-4xl p-4 sm:p-6 md:p-12 text-[#F4EBDD]"
          >
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-[80px] font-thin leading-tight">
                Connect with Niel
              </h2>
              <p className="text-sm sm:text-base md:text-xl font-light mt-1 sm:mt-2">
                {language === "en" ? "Are you ready to make changes with me?" : "저와 함께 변화를 만들어갈 준비가 되셨나요?"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8">
                <input name="name" required type="text" placeholder={language === "en" ? "Name *" : "성함 *"} className="bg-transparent border-b border-[#F4EBDD]/30 pb-2 sm:pb-3 flex-1 font-light text-sm sm:text-base focus:outline-none focus:border-[#F4EBDD] transition-colors" />
                <input name="company" required type="text" placeholder={language === "en" ? "Company *" : "소속/회사 *"} className="bg-transparent border-b border-[#F4EBDD]/30 pb-2 sm:pb-3 flex-1 font-light text-sm sm:text-base focus:outline-none focus:border-[#F4EBDD] transition-colors" />
              </div>
              <input name="email" required type="email" placeholder={language === "en" ? "Email Address (example@gmail.com)*" : "이메일 주소 (example@naver.com) *"} className="bg-transparent border-b border-[#F4EBDD]/30 pb-2 sm:pb-3 font-light text-sm sm:text-base focus:outline-none focus:border-[#F4EBDD] transition-colors" />
              <input name="subject" required type="text" placeholder={language === "en" ? "Subject *" : "이메일 제목 *"} className="bg-transparent border-b border-[#F4EBDD]/30 pb-2 sm:pb-3 font-light text-sm sm:text-base focus:outline-none focus:border-[#F4EBDD] transition-colors" />
              <textarea name="message" required placeholder={language === "en" ? "Message *" : "내용 *"} rows={3} className="bg-transparent border-b border-[#F4EBDD]/30 pb-2 sm:pb-3 font-light text-sm sm:text-base focus:outline-none focus:border-[#F4EBDD] transition-colors resize-none"></textarea>
              
              <button type="submit" className="self-center mt-2 sm:mt-4 px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-[#F4EBDD] text-sm sm:text-base lg:text-lg font-light transition-all duration-300 hover:bg-[#F4EBDD] hover:text-[#0F0E0C]">
                {language === "en" ? "Send Message" : "메시지 보내기"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Flying Business Card */}
      <AnimatePresence>
        {(step === "card" || step === "flying") && (
          <motion.div
            key="cardWrapper"
            className="absolute bottom-[-15vh] w-[90vw] h-[90vw] sm:w-[60vh] sm:h-[60vh] lg:w-[90vh] lg:h-[90vh] left-1/2 -translate-x-1/2 flex items-start justify-center origin-bottom z-20 pointer-events-none"
            initial={{ rotate: -90, opacity: 0 }}
            animate={step === "card" 
              ? { rotate: 0, opacity: 1, y: 0 } 
              : { rotate: 0, opacity: 1, y: "-100vh" }
            }
            transition={step === "card" 
              ? { type: "spring", duration: 1.3, bounce: 0 }
              : { duration: 1.0, ease: "backIn" }
            }
          >
            {/* The business card itself */}
            <motion.div 
              className="w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] lg:w-[790px] lg:h-[500px] shrink-0 bg-[#F4EBDD] text-[#0F0E0C] rounded-xl sm:rounded-2xl lg:rounded-[2rem] flex flex-col justify-end p-5 sm:p-8 lg:p-16 shadow-2xl relative overflow-hidden -mt-[20px]"
            >
              <div className="z-10 relative flex flex-col items-start gap-0.5 sm:gap-1">
                <h3 className="text-2xl sm:text-4xl lg:text-6xl font-light tracking-tight truncate pr-4 sm:pr-8 mb-1 sm:mb-2">{formData.name}</h3>
                <p className="font-light opacity-60 text-sm sm:text-lg lg:text-2xl truncate pr-4 sm:pr-8">{formData.company}</p>
                <div className="font-light text-xs sm:text-base lg:text-xl opacity-80 mt-1 sm:mt-2">
                  <span className="truncate pr-2 sm:pr-4">{formData.email}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Success Message */}
      <AnimatePresence>
        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, delay: 0.2 }}
            className="absolute z-30 flex flex-col items-center text-center text-[#F4EBDD] p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.3 }}
              className="relative w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center mb-4 sm:mb-8"
            >
              <div className="absolute inset-0 z-0 animate-pulse-blur scale-200 translate-x-1 -translate-y-1">
                <Image
                  src="/images/home-element-blur.png"
                  alt="background blur"
                  fill
                  className="object-contain"
                />
              </div>
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#F4EBDD] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <p className="text-xl sm:text-3xl md:text-5xl font-thin leading-snug">
              {language === "en" ? (
                <>
                  <strong className="font-medium tracking-normal">{formData.name}</strong>, Thank you for contacting!
                </>
              ) : (
                <>
                  <strong className="font-medium tracking-normal">{formData.name}</strong>님, 연락주셔서 감사합니다!
                </>
              )}
            </p>
            <p className="text-sm sm:text-lg md:text-xl font-light opacity-80 mt-3 sm:mt-6">
              {language === "en" 
                ? "I will get in touch with you shortly."
                : "빠른 시일 내에 답장 드리겠습니다."}
            </p>
            
            <button 
              onClick={() => setStep("form")}
              className="mt-8 sm:mt-16 px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-[#F4EBDD]/30 text-xs sm:text-sm font-light transition-all duration-300 hover:bg-[#F4EBDD]/10"
            >
              {language === "en" ? "Send another message" : "다른 메시지 보내기"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer copyright */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-[#F4EBDD]/30 text-[10px] sm:text-xs font-light tracking-wide whitespace-nowrap z-0">
        Dive into BLU*E BEIGE 🌊
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-[#F4EBDD]/30 text-[10px] sm:text-xs font-light tracking-wide whitespace-nowrap z-0">
        © {new Date().getFullYear()} Niel Hong. All rights reserved.
      </div>
    </section>
  );
}

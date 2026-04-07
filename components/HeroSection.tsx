"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    console.log(`Language selected: ${lang}`);

    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      // Mobile: center the about carousel in viewport
      const aboutMobile = document.getElementById('about-mobile');
      if (aboutMobile) {
        const rect = aboutMobile.getBoundingClientRect();
        const targetTop = rect.top + window.scrollY;
        const offset = targetTop - (window.innerHeight - rect.height) / 2;
        window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
      }
    } else {
      // Desktop: scroll to top of the scroll-animated about section (top card visible)
      const aboutDesktop = document.getElementById('about');
      if (aboutDesktop) {
        aboutDesktop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="home"
      className="flex min-h-screen relative items-center justify-center"
    >
      {/* 배경 블러 이미지 */}
      <div className="absolute w-[100vw] h-[100vw] left-1/2 -translate-x-1/2 top-[35%] -translate-y-1/2 lg:top-1/2 lg:left-[-15%] lg:translate-x-0 animate-pulse-blur">
        <Image
          src="/images/hero/home-element-blur.webp"
          alt="background blur"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===== MOBILE Hero (vertical centered) ===== */}
      <div className="flex flex-col items-center justify-center lg:hidden w-full px-6 relative z-10">
        {/* Stone group image - enlarged to align with blur */}
        <div className="relative w-[70vw] h-[70vw] mb-[-5vw]">
          <Image
            src="/images/hero/stone-group.webp"
            alt="stone group"
            fill
            className="object-contain"
          />
        </div>

        {/* H1 - overlaps stone slightly, pushed down a bit, slightly larger */}
        <h1 className="text-[3.5rem] text-[#f4ebdd] font-thin leading-tight text-center relative z-20 mt-4">
          Niel Hong
        </h1>

        {/* Language selection */}
        <div className="flex flex-col items-center mt-14 relative z-50">
          <p className="text-sm sm:text-base text-[#f4ebdd] font-light text-center">
            반갑습니다! 언어를 선택해주세요.
          </p>
          <p className="text-sm sm:text-base text-[#f4ebdd] font-light text-center">
            Hello! Please select the language.
          </p>
          <div className="flex mt-5 space-x-10 text-[#F4EBDD]">
            <button
              onClick={() => handleLanguageSelect('ko')}
              onTouchEnd={(e) => { e.preventDefault(); handleLanguageSelect('ko'); }}
              className="relative group pb-1 text-base active:opacity-70 transition-opacity touch-manipulation"
            >
              <b>한국어</b>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F4EBDD] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => handleLanguageSelect('en')}
              onTouchEnd={(e) => { e.preventDefault(); handleLanguageSelect('en'); }}
              className="relative group pb-1 text-base active:opacity-70 transition-opacity touch-manipulation"
            >
              <b>English</b>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F4EBDD] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP Hero (original layout) ===== */}
      <div className="absolute w-[45vw] h-[45vw] left-[10%] top-5/9 -translate-y-1/2 hidden lg:block">
        <Image
          src="/images/hero/stone-group.webp"
          alt="stone group"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-15 hidden lg:flex flex-col text-right items-end justifycontent-flex-end text-[#F4EBDD]">
        <h1 className="text-[96px] text-[#f4ebdd] font-thin leading-tight mb-2 text-right">
          Niel Hong
        </h1>
      </div>
      <div className="absolute right-15 bottom-10 hidden lg:flex flex-col items-end justifycontent-flex-end">
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
  );
}

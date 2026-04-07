"use client";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="flex min-h-screen bg-[#0F0E0C] font-sans">
      <main className="w-full overflow-clip">
        <HeroSection />
        <AboutSection />
        <ContactForm language={language} />
      </main>
    </div>
  );
}

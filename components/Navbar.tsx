"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  // Handle active section tracking
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.substring(1)); // 'projects', 'experiences'
      return;
    }

    setActiveSection('home');
    const sections = ['home', 'about', 'contact'];
    
    // Trigger when a section reaches roughly the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down at all
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const isMobile = window.innerWidth < 1024;
    const resolvedId = (targetId === 'about' && isMobile) ? 'about-mobile' : targetId;

    if (pathname === '/') {
      // Already on home page — smooth scroll directly
      e.preventDefault();
      const element = document.getElementById(resolvedId);
      if (element) {
        if (resolvedId === 'about-mobile') {
          // Center the mobile about section in the viewport with some breathing room
          const rect = element.getBoundingClientRect();
          const targetTop = rect.top + window.scrollY;
          const offset = targetTop - (window.innerHeight - rect.height) / 2;
          window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
      }
    } else if (resolvedId !== targetId) {
      // Navigating from another page and need a different hash for mobile
      e.preventDefault();
      setIsMobileMenuOpen(false);
      window.location.href = `/#${resolvedId}`;
    }
  };

  return (
    <>
      <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "top-6 w-[95%] lg:w-[80%] max-w-[1200px] bg-[#0F0E0C]/80 backdrop-blur-xl border border-[#F4EBDD]/15 py-3 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "top-0 w-full max-w-[1920px] bg-transparent py-4 lg:py-8"
      }`}
    >
      <div className={`w-full mx-auto flex items-center justify-between transition-all duration-500 ${isScrolled ? "px-6 lg:px-10" : "px-6 lg:px-[5vw]"}`}>
        
        {/* Left: Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link 
            href="/#home" 
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="flex items-center gap-3 group z-50"
          >
            <div className="relative w-8 h-8  transition-transform duration-300 group-hover:scale-100">
              <Image 
                src="/images/logo-outline.png" 
                alt="Niel Hong Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[#B29058] text-lg lg:text-xl font-light tracking-wide group-hover:opacity-80 transition-opacity">
              Niel Hong
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-none items-center justify-center gap-6 lg:gap-10 text-[#F4EBDD]">
          <Link 
            href="/#about" 
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className={`text-sm lg:text-base transition-all duration-300 ${activeSection === 'about' && pathname === '/' ? 'opacity-100 font-medium' : 'opacity-40 font-light hover:opacity-100'}`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`text-sm lg:text-base transition-all duration-300 ${activeSection === 'projects' || pathname === '/projects' ? 'opacity-100 font-medium' : 'opacity-40 font-light hover:opacity-100'}`}
          >
            Projects
          </Link>
          <Link 
            href="/experiences" 
            className={`text-sm lg:text-base transition-all duration-300 ${activeSection === 'experiences' || pathname === '/experiences' ? 'opacity-100 font-medium' : 'opacity-40 font-light hover:opacity-100'}`}
          >
            Experiences
          </Link>
          <Link 
            href="/#contact" 
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className={`text-sm lg:text-base transition-all duration-300 ${activeSection === 'contact' && pathname === '/' ? 'opacity-100 font-medium' : 'opacity-40 font-light hover:opacity-100'}`}
          >
            Connect
          </Link>
        </div>

        {/* Right: Actions (Resume Button) */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-6">

          <a 
            href="https://drive.google.com/file/d/1jNvbURiwiTtpjWUOL-Bb1RPBdFh3ME3R/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#F4EBDD] text-[#F4EBDD] text-sm lg:text-base font-light hover:bg-[#F4EBDD] hover:text-[#0F0E0C] transition-colors duration-300 group translate-x-6 cursor-pointer"
          >
            Resume
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex-1 flex justify-end md:hidden">
          <button 
            className="z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#B29058" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Dropdown - OUTSIDE nav to avoid transform context issues */}
    <div 
      className={`fixed inset-0 bg-[#0F0E0C]/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button 
        className="absolute top-4 right-6 z-50"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="#B29058" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <Link 
        href="/#about" 
        onClick={(e) => handleSmoothScroll(e, 'about')}
        className={`text-2xl transition-all duration-300 ${activeSection === 'about' && pathname === '/' ? 'text-[#F4EBDD] font-medium opacity-100' : 'text-[#F4EBDD] font-light opacity-40 hover:opacity-100'}`}
      >
        About
      </Link>
      <Link 
        href="/projects" 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`text-2xl transition-all duration-300 ${activeSection === 'projects' || pathname === '/projects' ? 'text-[#F4EBDD] font-medium opacity-100' : 'text-[#F4EBDD] font-light opacity-40 hover:opacity-100'}`}
      >
        Projects
      </Link>
      <Link 
        href="/experiences" 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`text-2xl transition-all duration-300 ${activeSection === 'experiences' || pathname === '/experiences' ? 'text-[#F4EBDD] font-medium opacity-100' : 'text-[#F4EBDD] font-light opacity-40 hover:opacity-100'}`}
      >
        Experiences
      </Link>
      <Link 
        href="/#contact" 
        onClick={(e) => handleSmoothScroll(e, 'contact')}
        className={`text-2xl transition-all duration-300 ${activeSection === 'contact' && pathname === '/' ? 'text-[#F4EBDD] font-medium opacity-100' : 'text-[#F4EBDD] font-light opacity-40 hover:opacity-100'}`}
      >
        Connect
      </Link>

      {/* Mobile Resume Button */}
      <a 
        href="https://drive.google.com/file/d/1jNvbURiwiTtpjWUOL-Bb1RPBdFh3ME3R/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-8 py-3 mt-4 rounded-full border border-[#F4EBDD] text-[#F4EBDD] text-lg font-light hover:bg-[#F4EBDD] hover:text-[#0F0E0C] transition-colors duration-300 group"
      >
        Resume
        <svg 
          className="w-5 h-5 transition-transform group-hover:translate-y-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </a>

      {/* Mobile Language Selector - bottom of menu */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-sm text-[#F4EBDD]/60">
        <button 
          onClick={() => { setLanguage('ko'); setIsMobileMenuOpen(false); }}
          className={`transition-all duration-200 ${language === 'ko' ? 'text-[#B29058] font-medium' : 'font-light hover:text-[#F4EBDD]'}`}
        >
          한국어
        </button>
        <span className="text-[#F4EBDD]/20">|</span>
        <button 
          onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
          className={`transition-all duration-200 ${language === 'en' ? 'text-[#B29058] font-medium' : 'font-light hover:text-[#F4EBDD]'}`}
        >
          English
        </button>
      </div>
    </div>

    {/* Desktop: Fixed bottom-right language widget */}
    <div className={`fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-3 text-sm transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="flex items-center gap-3 bg-[#0F0E0C]/80 backdrop-blur-xl border border-[#F4EBDD]/10 rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <button 
          onClick={() => setLanguage('ko')}
          className={`transition-all duration-200 ${language === 'ko' ? 'text-[#B29058] font-medium' : 'text-[#F4EBDD]/50 font-light hover:text-[#F4EBDD]'}`}
        >
          한국어
        </button>
        <span className="text-[#F4EBDD]/20">|</span>
        <button 
          onClick={() => setLanguage('en')}
          className={`transition-all duration-200 ${language === 'en' ? 'text-[#B29058] font-medium' : 'text-[#F4EBDD]/50 font-light hover:text-[#F4EBDD]'}`}
        >
          English
        </button>
      </div>
    </div>
    </>
  );
}

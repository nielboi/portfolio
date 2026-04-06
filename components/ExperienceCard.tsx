"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ExperienceData } from "../data/experiences";
import { useLanguage } from "./LanguageProvider";
import Modal from "./Modal";

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const company = language === "en" ? experience.details.company.en : experience.details.company.ko;
  const role = language === "en" ? experience.details.role.en : experience.details.role.ko;
  const desc = language === "en" ? experience.details.description.en : experience.details.description.ko;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => setIsOpen(true)}
        className="relative grid grid-cols-1 md:grid-cols-12 w-full transition-colors duration-700 rounded-none group cursor-pointer"
      >
      {/* Media Side (Left - 5 Columns) */}
      <div className="md:col-span-5 px-4 md:px-8 py-4 lg:py-6 flex items-center justify-center">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#0F0E0C] border border-[#F4EBDD]/10 shadow-2xl">
          {/* Render Image or Video dynamically */}
          {experience.media.type === "image" ? (
            <Image
              src={experience.media.url || "/images/stone-group.png"}
              alt={company}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#F4EBDD]/30 font-light border border-dashed border-[#F4EBDD]/10">
              <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Video Component Placeholder
            </div>
          )}
        </div>
      </div>

      {/* Details Side (Right - 7 Columns) */}
      <div className="md:col-span-7 flex flex-col justify-center px-6 md:-ml-2 md:pr-8 lg:-ml-4 lg:pr-12 py-8 lg:py-10 relative">

        <p 
          className="text-sm tracking-widest font-regular mb-2 duration-500 opacity-80"
          style={{ color: experience.theme.accentColor }}
        >
          {experience.details.date}
        </p>
        
        {/* Company Name */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F4EBDD] mb-2 leading-tight tracking-tight">
          {company}
        </h3>

        {/* Role (h2) */}
        <h2 className="text-xl md:text-2xl text-[#F4EBDD]/80 font-light mb-8">
          {role}
        </h2>
        
        {/* Description mapped to bottom */}
        <div className="mt-auto">
          <p className="text-[#F4EBDD]/60 font-light leading-relaxed text-base md:text-lg">
            {desc}
          </p>
        </div>
        
      </div>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden rounded-t-[2rem]">
          {experience.media.type === "image" ? (
            <Image
              src={experience.media.url || "/images/stone-group.png"}
              alt={company}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F0E0C] text-[#F4EBDD]/30 border border-dashed border-[#F4EBDD]/10">
              Video Component Placeholder
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-[#11100e]/40 to-transparent" />
        </div>

        <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-4 -mt-24 md:-mt-32 relative z-10 max-w-4xl w-full mx-auto backdrop-blur-sm rounded-t-[2rem]">
          <p 
            className="text-sm tracking-widest font-regular opacity-80 backdrop-blur-md px-4 py-1 rounded-full w-fit bg-[#0F0E0C]/50 border border-[#F4EBDD]/10"
            style={{ color: experience.theme.accentColor }}
          >
            {experience.details.date}
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F4EBDD] leading-tight tracking-tight mb-2 drop-shadow-2xl">
            {company}
          </h2>

          <h3 className="text-2xl md:text-3xl text-[#F4EBDD]/80 font-light mb-4">
            {role}
          </h3>

          <div className="h-[1px] w-full bg-gradient-to-r from-[#F4EBDD]/20 via-[#F4EBDD]/10 to-transparent my-2" />

          <p className="text-[#F4EBDD]/80 font-light leading-loose text-lg md:text-xl mt-2 whitespace-pre-wrap">
            {desc}
          </p>

          <div className="flex flex-col gap-12 mt-12 w-full">
            {experience.extendedDetails?.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h3 className="text-2xl md:text-3xl text-[#F4EBDD] font-medium tracking-tight">
                  {language === "en" ? section.subtitle.en : section.subtitle.ko}
                </h3>
                {section.image && (
                  <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-[#F4EBDD]/10 bg-[#0F0E0C]">
                    <img
                      src={section.image}
                      alt="Detail view"
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                )}
                <p className="text-[#F4EBDD]/80 font-light leading-relaxed text-lg whitespace-pre-wrap">
                  {language === "en" ? section.description.en : section.description.ko}
                </p>
              </div>
            ))}
          </div>

          {experience.extendedDetails?.links.length > 0 && (
            <div className="flex flex-col gap-5 mt-16 w-full">
              <h4 className="text-[#F4EBDD]/40 text-sm tracking-widest uppercase font-medium">Related Links</h4>
              <div className="flex flex-wrap gap-8">
                {experience.extendedDetails.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#F4EBDD] font-medium text-lg relative"
                  >
                    <span className="relative z-10 pb-0.5 border-b-2 border-[#F4EBDD]/30 group-hover:border-[#F4EBDD] transition-colors duration-300">
                      {link.label}
                    </span>
                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </Modal>
    </>
  );
}

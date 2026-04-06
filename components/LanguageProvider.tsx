"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string | null;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to null until explicitly selected in the landing page, or default to 'en'/'ko' if you prefer later.
  const [language, setLanguage] = useState<string | null>(null);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

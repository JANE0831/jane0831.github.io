"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    trajectory: "轨迹",
    interpretation: "作解",
    language: "语言",
    chinese: "中文",
    english: "English",
    artworks: "作品集",
    about: "关于",
    contact: "联系",
    viewDetails: "查看详情",
    backToGallery: "返回画廊",
    title: "艺术作品集",
    description: "探索我的艺术创作之旅",
  },
  en: {
    trajectory: "Trajectory",
    interpretation: "Interpretation",
    language: "Language",
    chinese: "中文",
    english: "English",
    artworks: "Artworks",
    about: "About",
    contact: "Contact",
    viewDetails: "View Details",
    backToGallery: "Back to Gallery",
    title: "Art Portfolio",
    description: "Explore my artistic journey",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

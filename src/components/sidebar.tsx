"use client"
import { useLanguage } from "../contexts/language-context"
import { artworks } from "../data/artworks"
import { cn } from "../lib/utils"

interface SidebarProps {
  activeArtwork?: string
}

export function Sidebar({ activeArtwork }: SidebarProps) {
  const { language } = useLanguage()

  const scrollToArtwork = (artworkId: string) => {
    const element = document.getElementById(`artwork-${artworkId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <aside className="w-64 bg-transparent h-fit sticky top-30 overflow-y-auto z-2 -mt-20">
      <div className="py-6 lg:pl-12">
        {/* <h2 className="text-lg font-semibold text-red-400 mb-4">{t("artworks")}</h2> */}

        <nav className="space-y-1">
          {artworks
            .filter((artwork, index, self) => 
              index === self.findIndex(a => 
                a.title[language] === artwork.title[language]
              )
            )
            .map((artwork) => (
            <button
              key={artwork.id}
              onClick={() => scrollToArtwork(artwork.id)}
              className={cn(
                "w-full text-left px-3 py-1 rounded-md text-sm transition-colors lg:text-base",
                activeArtwork === artwork.title[language]
                  ? "text-red-700 font-medium"
                  : "text-red-100 hover:text-red-200 hover:bg-gray-800",
              )}
            >
              {artwork.title[language]}
            </button>
          ))}
        </nav>

        {/* <div className="mt-8 pt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">{t("about")}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {language === "zh"
              ? "欢迎来到我的艺术世界。这里展示了我的创作历程和艺术探索。"
              : "Welcome to my artistic world. Here you can explore my creative journey and artistic explorations."}
          </p>
        </div> */}
      </div>
    </aside>
  )
}

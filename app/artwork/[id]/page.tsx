"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { artworks } from "@/data/artworks"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ArtworkDetailPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  const artworkId = params.id as string

  const artwork = artworks.find((art) => art.id === artworkId)

  if (!artwork) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {language === "zh" ? "作品未找到" : "Artwork Not Found"}
            </h1>
            <Link href="/">
              <Button>{t("backToGallery")}</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t("backToGallery")}</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{artwork.title[language]}</h1>
              <p className="text-xl text-gray-600">{artwork.year}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{language === "zh" ? "媒介" : "Medium"}</h3>
                <p className="text-gray-700">{artwork.medium[language]}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === "zh" ? "尺寸" : "Dimensions"}
                </h3>
                <p className="text-gray-700">{artwork.dimensions}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === "zh" ? "描述" : "Description"}
                </h3>
                <p className="text-gray-700 leading-relaxed">{artwork.description[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

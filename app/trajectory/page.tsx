"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"

export default function TrajectoryPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("trajectory")}</h1>

        <div className="prose prose-lg max-w-none">
          {language === "zh" ? (
            <div className="space-y-6">
              <p>
                我的艺术轨迹始于对色彩和形式的探索。从早期的写实主义作品到后来的抽象表现，
                每一个阶段都代表着我对艺术理解的深化。
              </p>
              <p>
                在创作过程中，我不断尝试新的媒介和技法，从传统的油画到现代的混合媒介， 每一次实验都是对艺术边界的挑战。
              </p>
              <p>
                我的作品反映了当代生活的复杂性和美感，通过视觉语言传达情感和思想。
                艺术对我来说不仅是表达的方式，更是理解世界的途径。
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <p>
                My artistic trajectory began with an exploration of color and form. From early realist works to later
                abstract expressions, each phase represents a deepening of my understanding of art.
              </p>
              <p>
                Throughout my creative process, I continuously experiment with new media and techniques, from
                traditional oil painting to modern mixed media, each experiment challenges the boundaries of art.
              </p>
              <p>
                My works reflect the complexity and beauty of contemporary life, conveying emotions and thoughts through
                visual language. Art for me is not only a means of expression, but also a way to understand the world.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

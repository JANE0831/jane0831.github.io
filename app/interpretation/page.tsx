"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"

export default function InterpretationPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("interpretation")}</h1>

        <div className="prose prose-lg max-w-none">
          {language === "zh" ? (
            <div className="space-y-6">
              <p>
                艺术作品的解读是一个多层次的过程。每一幅作品都承载着创作者的情感、思想和对世界的理解。
                观者在欣赏作品时，也会带入自己的经历和感受，形成独特的解读。
              </p>
              <p>
                我的创作理念建立在对传统与现代的对话之上。通过重新审视经典的艺术形式，
                我试图在当代语境中找到新的表达方式。
              </p>
              <p>
                色彩在我的作品中扮演着重要角色。它不仅是视觉元素，更是情感的载体。
                每一种颜色的选择都经过深思熟虑，旨在唤起观者内心的共鸣。
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <p>
                The interpretation of artworks is a multi-layered process. Each piece carries the creator's emotions,
                thoughts, and understanding of the world. When viewers appreciate the work, they also bring their own
                experiences and feelings, forming unique interpretations.
              </p>
              <p>
                My creative philosophy is built on the dialogue between tradition and modernity. By re-examining
                classical art forms, I try to find new ways of expression in contemporary contexts.
              </p>
              <p>
                Color plays an important role in my works. It is not only a visual element, but also a carrier of
                emotion. Each color choice is carefully considered, aiming to evoke resonance in the viewer's heart.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

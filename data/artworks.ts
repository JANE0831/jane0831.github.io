export interface Artwork {
  id: string
  title: {
    zh: string
    en: string
  }
  description: {
    zh: string
    en: string
  }
  image: string
  category: string
  year: number
  medium: {
    zh: string
    en: string
  }
  dimensions: string
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: {
      zh: "晨光",
      en: "Morning Light",
    },
    description: {
      zh: "这幅作品捕捉了清晨第一缕阳光穿过窗户的瞬间，象征着新的开始和希望。",
      en: "This piece captures the moment when the first ray of morning light passes through the window, symbolizing new beginnings and hope.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "painting",
    year: 2023,
    medium: {
      zh: "油画",
      en: "Oil on Canvas",
    },
    dimensions: "60 x 80 cm",
  },
  {
    id: "2",
    title: {
      zh: "城市印象",
      en: "Urban Impression",
    },
    description: {
      zh: "现代都市生活的抽象表达，展现了城市的节奏和能量。",
      en: "An abstract expression of modern urban life, showcasing the rhythm and energy of the city.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "abstract",
    year: 2023,
    medium: {
      zh: "丙烯画",
      en: "Acrylic on Canvas",
    },
    dimensions: "70 x 90 cm",
  },
  {
    id: "3",
    title: {
      zh: "静物组合",
      en: "Still Life Composition",
    },
    description: {
      zh: "传统静物画的现代诠释，探索光影与形式的关系。",
      en: "A modern interpretation of traditional still life, exploring the relationship between light, shadow, and form.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "still-life",
    year: 2022,
    medium: {
      zh: "水彩",
      en: "Watercolor",
    },
    dimensions: "40 x 50 cm",
  },
  {
    id: "4",
    title: {
      zh: "自然韵律",
      en: "Natural Rhythm",
    },
    description: {
      zh: "受自然界韵律启发的抽象作品，表现了生命的流动性。",
      en: "An abstract work inspired by natural rhythms, expressing the fluidity of life.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "abstract",
    year: 2022,
    medium: {
      zh: "混合媒介",
      en: "Mixed Media",
    },
    dimensions: "80 x 100 cm",
  },
]

export const categories = [
  { id: "all", name: { zh: "全部", en: "All" } },
  { id: "painting", name: { zh: "绘画", en: "Painting" } },
  { id: "abstract", name: { zh: "抽象", en: "Abstract" } },
  { id: "still-life", name: { zh: "静物", en: "Still Life" } },
]

export interface Artwork {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  image: string;
  assets: string[]; // Array of asset URLs (images, videos, etc.)
  category: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: {
      zh: "《哈利波特》美宣",
      en: "Harry Potter",
    },
    description: {
      zh: "魔法世界的经典之作，展现了魔法与友情的力量。",
      en: "A classic of the magical world, showcasing the power of magic and friendship.",
    },
    image: "/hp.jpg",
    assets: ["/hp.jpg", "/cover.png"],
    category: "fantasy",
  },
  {
    id: "2",
    title: {
      zh: "《长津湖》",
      en: "The Battle at Lake Changjin",
    },
    description: {
      zh: "讲述志愿军战士在长津湖战役中的英勇故事。",
      en: "Depicts the heroic story of soldiers in the Battle of Chosin Reservoir.",
    },
    image: "/cjh.jpg",
    assets: ["/cjh.jpg", "/cover.png"],
    category: "historical",
  },
  {
    id: "4",
    title: {
      zh: "《白蛇 · 浮生》",
      en: "White Snake",
    },
    description: {
      zh: "中国传统神话故事的现代动画诠释。",
      en: "A modern animated interpretation of traditional Chinese mythology.",
    },
    image: "/bsfs.png",
    assets: ["/bsfs.png", "/cover.png"],
    category: "animation",
  },
  {
    id: "5",
    title: {
      zh: "《巨怪猎人》",
      en: "Monster Hunter",
    },
    description: {
      zh: "奇幻动作电影，展现了狩猎巨怪的冒险故事。",
      en: "Fantasy action film depicting the adventure of hunting monsters.",
    },
    image: "/jglr.gif",
    assets: ["/jglr.gif", "/cover.png"],
    category: "fantasy",
  },
  {
    id: "3",
    title: {
      zh: "《长安三万里》",
      en: "Chang'an San Wan Li",
    },
    description: {
      zh: "动画电影，展现盛唐时期诗人李白的传奇人生。",
      en: "Animated film showcasing the legendary life of Tang Dynasty poet Li Bai.",
    },
    image: "/caswl.png",
    assets: ["/caswl.png", "/cover.png"],
    category: "animation",
  },
  {
    id: "7",
    title: {
      zh: "其他电影",
      en: "The Yin Yang Master",
    },
    description: {
      zh: "奇幻电影，讲述阴阳师的玄幻故事。",
      en: "Fantasy film telling the mystical story of a Yin Yang Master.",
    },
    image: "/BMB0030-m-V06.jpg",
    assets: ["/BMB0030-m-V06.jpg", "/cover.png"],
    category: "fantasy",
  },
  {
    id: "6",
    title: {
      zh: "其他电影",
      en: "The Yin Yang Master",
    },
    description: {
      zh: "奇幻电影，讲述阴阳师的玄幻故事。",
      en: "Fantasy film telling the mystical story of a Yin Yang Master.",
    },
    image: "/FSG-0065_m_V03.jpg",
    assets: ["/FSG-0065_m_V03.jpg", "/cover.png"],
    category: "fantasy",
  },
  {
    id: "8",
    title: {
      zh: "CG 短片",
      en: "Honor of Kings CG",
    },
    description: {
      zh: "游戏改编动画，展现英雄们的史诗对决。",
      en: "Game-adapted animation showcasing epic battles between heroes.",
    },
    image: "/placeholder.svg?height=400&width=600",
    assets: ["/placeholder.svg?height=400&width=600", "/cover.png"],
    category: "animation",
  },
  {
    id: "9",
    title: {
      zh: "概念设计",
      en: "Lanruosi",
    },
    description: {
      zh: "恐怖电影，展现古老寺庙中的神秘故事。",
      en: "Horror film revealing mysterious stories in an ancient temple.",
    },
    image: "/gn1.jpeg",
    assets: ["/gn1.jpeg", "/gn2.png", "/cover.png"],
    category: "horror",
  },
  {
    id: "10",
    title: {
      zh: "概念设计",
      en: "Lanruosi",
    },
    description: {
      zh: "恐怖电影，展现古老寺庙中的神秘故事。",
      en: "Horror film revealing mysterious stories in an ancient temple.",
    },
    image: "/gn2.png",
    assets: ["/gn2.png", "/gn1.jpeg", "/cover.png"],
    category: "horror",
  },
];

export const categories = [
  { id: "all", name: { zh: "全部", en: "All" } },
  { id: "animation", name: { zh: "动画", en: "Animation" } },
  { id: "fantasy", name: { zh: "奇幻", en: "Fantasy" } },
  { id: "historical", name: { zh: "历史", en: "Historical" } },
  { id: "horror", name: { zh: "恐怖", en: "Horror" } },
];

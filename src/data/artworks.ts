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
  category: string;
  year: number;
  medium: {
    zh: string;
    en: string;
  };
  dimensions: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: {
      zh: "哈利波特",
      en: "Harry Potter",
    },
    description: {
      zh: "魔法世界的经典之作，展现了魔法与友情的力量。",
      en: "A classic of the magical world, showcasing the power of magic and friendship.",
    },
    image: "hp.jpg",
    category: "fantasy",
    year: 2023,
    medium: {
      zh: "电影",
      en: "Film",
    },
    dimensions: "2h 30min",
  },
  {
    id: "2",
    title: {
      zh: "长津湖",
      en: "The Battle at Lake Changjin",
    },
    description: {
      zh: "讲述志愿军战士在长津湖战役中的英勇故事。",
      en: "Depicts the heroic story of soldiers in the Battle of Chosin Reservoir.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "historical",
    year: 2021,
    medium: {
      zh: "电影",
      en: "Film",
    },
    dimensions: "2h 56min",
  },
  {
    id: "3",
    title: {
      zh: "长安三万里",
      en: "Chang'an San Wan Li",
    },
    description: {
      zh: "动画电影，展现盛唐时期诗人李白的传奇人生。",
      en: "Animated film showcasing the legendary life of Tang Dynasty poet Li Bai.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "animation",
    year: 2023,
    medium: {
      zh: "动画",
      en: "Animation",
    },
    dimensions: "2h 5min",
  },
  {
    id: "4",
    title: {
      zh: "白蛇·浮生",
      en: "White Snake",
    },
    description: {
      zh: "中国传统神话故事的现代动画诠释。",
      en: "A modern animated interpretation of traditional Chinese mythology.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "animation",
    year: 2023,
    medium: {
      zh: "动画",
      en: "Animation",
    },
    dimensions: "1h 40min",
  },
  {
    id: "5",
    title: {
      zh: "巨怪猎人",
      en: "Monster Hunter",
    },
    description: {
      zh: "奇幻动作电影，展现了狩猎巨怪的冒险故事。",
      en: "Fantasy action film depicting the adventure of hunting monsters.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "fantasy",
    year: 2020,
    medium: {
      zh: "电影",
      en: "Film",
    },
    dimensions: "1h 44min",
  },
  {
    id: "6",
    title: {
      zh: "王者荣耀CG",
      en: "Honor of Kings CG",
    },
    description: {
      zh: "游戏改编动画，展现英雄们的史诗对决。",
      en: "Game-adapted animation showcasing epic battles between heroes.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "animation",
    year: 2023,
    medium: {
      zh: "CG动画",
      en: "CG Animation",
    },
    dimensions: "10min",
  },
  {
    id: "7",
    title: {
      zh: "侍神令",
      en: "The Yin Yang Master",
    },
    description: {
      zh: "奇幻电影，讲述阴阳师的玄幻故事。",
      en: "Fantasy film telling the mystical story of a Yin Yang Master.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "fantasy",
    year: 2021,
    medium: {
      zh: "电影",
      en: "Film",
    },
    dimensions: "2h 7min",
  },
  {
    id: "8",
    title: {
      zh: "兰若寺",
      en: "Lanruosi",
    },
    description: {
      zh: "恐怖电影，展现古老寺庙中的神秘故事。",
      en: "Horror film revealing mysterious stories in an ancient temple.",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "horror",
    year: 2023,
    medium: {
      zh: "电影",
      en: "Film",
    },
    dimensions: "1h 50min",
  },
];

export const categories = [
  { id: "all", name: { zh: "全部", en: "All" } },
  { id: "animation", name: { zh: "动画", en: "Animation" } },
  { id: "fantasy", name: { zh: "奇幻", en: "Fantasy" } },
  { id: "historical", name: { zh: "历史", en: "Historical" } },
  { id: "horror", name: { zh: "恐怖", en: "Horror" } },
];

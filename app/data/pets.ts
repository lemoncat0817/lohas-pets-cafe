export interface Pet {
  slug: string
  name: string
  nameEn: string
  species: '店犬' | '店貓'
  breed: string
  role: string
  quote: string
  bio: string
  image: string
}

export const pets: Pet[] = [
  {
    slug: 'chocolate',
    name: '巧克力',
    nameEn: 'Chocolate',
    species: '店犬',
    breed: '米克斯',
    role: '迎賓隊長',
    quote: '汪汪，我是巧克力！喜歡跑跑跳跳和追著球球玩。',
    bio: '對於每一天的冒險都充滿無限熱情與好奇心，是第一個衝到門口迎接客人的孩子。',
    image: '/images/pets/chocolate.webp',
  },
  {
    slug: 'cream',
    name: '奶油',
    nameEn: 'Cream',
    species: '店貓',
    breed: '橘貓',
    role: '窗邊曬太陽組長',
    quote: '喵喵，我是奶油！喜歡睡覺和曬太陽。',
    bio: '心是柔軟的，愛是甜美的，最常窩在靠窗座位陪客人一起發呆。',
    image: '/images/pets/cream.webp',
  },
  {
    slug: 'pudding',
    name: '布丁',
    nameEn: 'Pudding',
    species: '店犬',
    breed: '柯基',
    role: '陪伴大使',
    quote: '汪，我是布丁！喜歡陪伴客人、享受溫暖的擁抱。',
    bio: '短短的腿走起路來特別有喜感，是店裡的人氣招牌，每個笑容背後都有熱情的心。',
    image: '/images/pets/pudding.webp',
  },
  {
    slug: 'marshmallow',
    name: '棉花糖',
    nameEn: 'Marshmallow',
    species: '店貓',
    breed: '美國短毛貓',
    role: '毛線球巡邏員',
    quote: '喵嗚，我是棉花糖！喜歡追逐光點和撒嬌。',
    bio: '蓬蓬的心、甜蜜的愛，最喜歡在客人腳邊蹭來蹭去討摸摸。',
    image: '/images/pets/marshmallow.webp',
  },
]

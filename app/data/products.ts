export interface Product {
  slug: string
  title: string
  price: number
  salePrice: number
  description: string
  ingredients: string
  image: string
}

export const products: Product[] = [
  {
    slug: 'banana-pumpkin-crisp',
    title: '香蕉南瓜酥',
    price: 180,
    salePrice: 160,
    description: '以新鮮香蕉與營養豐富的南瓜為原料，酥脆口感讓毛孩子一口接一口。',
    ingredients: '香蕉、南瓜、燕麥粉；不含添加糖、人工色素',
    image: '/images/shop/banana-pumpkin-crisp.webp',
  },
  {
    slug: 'peanut-banana-biscuit',
    title: '花生香蕉餅',
    price: 160,
    salePrice: 135,
    description: '完美結合花生與香蕉的營養價值，帶來豐富口感與滿滿飽足感。',
    ingredients: '花生醬、香蕉、糙米粉；天然成分製作',
    image: '/images/shop/peanut-banana-biscuit.webp',
  },
  {
    slug: 'honey-banana-cookie',
    title: '蜂蜜香蕉餅',
    price: 220,
    salePrice: 200,
    description: '新鮮香蕉搭配甜美蜂蜜，為毛孩子帶來溫暖的甜蜜滋味。',
    ingredients: '香蕉、蜂蜜、全麥粉；低溫烘焙保留營養',
    image: '/images/shop/honey-banana-cookie.webp',
  },
]

export interface Testimonial {
  name: string
  petName: string
  rating: number
  text: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: '林小姐',
    petName: '與愛貓 Momo',
    rating: 5,
    text: '我的貓咪愛上這裡的美食！店員對寵物也很有耐心，環境乾淨舒適。',
    avatar: '/images/gallery/guest-1.webp',
  },
  {
    name: '陳先生',
    petName: '與愛犬 豆豆',
    rating: 5,
    text: '真可愛！完美的寵物友善餐廳，餐點也完全不馬虎，會再回訪。',
    avatar: '/images/gallery/guest-2.webp',
  },
  {
    name: '王小姐',
    petName: '與愛犬 小白',
    rating: 5,
    text: '絕對值得再次光顧！座位安排貼心，狗狗也能自在活動。',
    avatar: '/images/gallery/guest-3.webp',
  },
  {
    name: '張先生',
    petName: '與愛貓 咪咪',
    rating: 5,
    text: '美味驚艷，讓人欲罷不能！甜點跟咖啡都在水準之上。',
    avatar: '/images/gallery/guest-4.webp',
  },
  {
    name: '李小姐',
    petName: '與愛犬 柚子',
    rating: 5,
    text: '狗狗很開心！這裡真是個寵物天堂，下次還要帶牠來玩。',
    avatar: '/images/gallery/guest-5.webp',
  },
]

export const galleryPhotos = [
  { src: '/images/gallery/interior-1.webp', alt: '溫馨明亮的用餐空間，木質家具與圓形吊燈點綴' },
  { src: '/images/gallery/interior-2.webp', alt: '靠窗座位區，復古吊燈灑落自然光' },
  { src: '/images/gallery/interior-3.webp', alt: '串燈與綠意點綴的用餐區，顧客悠閒享用餐點' },
]

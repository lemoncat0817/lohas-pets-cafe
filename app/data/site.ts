export const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我們' },
  { to: '/menu', label: '美味佳餚' },
  { to: '/pets', label: '毛孩子天地' },
  { to: '/shop', label: '寵物零食' },
  { to: '/gallery', label: '評價 & 環境' },
  { to: '/faq', label: '常見問題' },
  { to: '/contact', label: '聯絡我們' },
] as const

export const site = {
  name: 'LOHAS Pets Café',
  nameZh: '樂活寵物咖啡廳',
  tagline: '探索你與毛孩子一起的新樂趣',
  description:
    '一個晴朗的下午，幾個寵物愛好者聚在一起分享彼此愛護毛孩子的故事，決定創立一個能讓人與毛孩一起放鬆用餐的地方。於是，LOHAS Pets Café 誕生了。',
  address: '貓貓市肥貓區貓爪路三段貓尾巷 5 號',
  addressNote: '鄰近肥貓公園捷運站 2 號出口，步行約 5 分鐘',
  hours: [
    { day: '週一 至 週五', time: '11:00 – 20:00' },
    { day: '週六、週日', time: '10:00 – 21:00' },
    { day: '每週二', time: '公休' },
  ],
  reservationNote: '本餐廳目前無提供電話訂位服務，如有用餐需求請至現場排隊等候入場。',
  email: 'hello@lohaspetscafe.example.com',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
  mapEmbedSrc:
    'https://www.google.com/maps?q=台北101&output=embed',
} as const

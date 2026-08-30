export const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我們' },
  { to: '/menu', label: '美味佳餚' },
  { to: '/reservation', label: '線上訂位' },
  { to: '/pets', label: '毛孩子天地' },
  { to: '/shop', label: '寵物零食' },
  { to: '/gallery', label: '評價 & 環境' },
  { to: '/faq', label: '常見問題' },
  { to: '/contact', label: '聯絡我們' },
] as const

// TODO: 替換為在 web3forms.com 申請的免費 Access Key，聯絡表單與訂位表單才能實際送出。
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export const site = {
  name: 'LOHAS Pets Café',
  nameZh: '樂活寵物咖啡廳',
  tagline: '探索你與毛孩子一起的新樂趣',
  description:
    '一個晴朗的下午，幾個寵物愛好者聚在一起分享彼此愛護毛孩子的故事，決定創立一個能讓人與毛孩一起放鬆用餐的地方。於是，LOHAS Pets Café 誕生了。',
  address: '貓貓市肥貓區貓爪路三段貓尾巷 5 號',
  addressNote: '鄰近肥貓公園捷運站 2 號出口，步行約 5 分鐘',
  hours: [
    { day: '週三 至 週五', time: '11:00 – 20:00' },
    { day: '週六、週日', time: '10:00 – 21:00' },
    { day: '週一、週二', time: '公休' },
  ],
  // Machine-readable mirror of `hours` above, for schema.org openingHoursSpecification.
  // Keep in sync with `hours` if the schedule ever changes.
  openingHours: [
    { days: ['Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '20:00' },
    { days: ['Saturday', 'Sunday'], opens: '10:00', closes: '21:00' },
  ],
  reservationNote: '提供線上訂位申請，我們會於營業時間內以電話或 Email 與您確認訂位是否可安排。若未收到確認，仍建議於預定時間親自來店詢問候位。',
  email: 'hello@lohaspetscafe.example.com',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
  mapEmbedSrc:
    'https://www.google.com/maps?q=台北101&output=embed',
} as const

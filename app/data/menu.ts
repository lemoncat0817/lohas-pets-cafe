export interface MenuItem {
  name: string
  price: number
  description: string
  tag?: '招牌' | '新品' | '素食'
}

export interface MenuCategory {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'mains',
    title: '主食',
    subtitle: '選用新鮮時令食材，現點現做',
    items: [
      {
        name: '奶油培根義大利麵',
        price: 220,
        description: '嚴選培根與鮮奶油慢煮收汁，撒上現磨帕瑪森起司，濃郁不膩口。',
        tag: '招牌',
      },
      {
        name: '香烤蔬菜沙拉',
        price: 180,
        description: '當季時令蔬菜香烤而成，搭配堅果、沙拉葉與特製油醋醬，清爽開胃。',
        tag: '素食',
      },
      {
        name: '特色烤雞三明治',
        price: 140,
        description: '炭烤雞胸搭配酸黃瓜與第戎芥末醬，夾入現烤佛卡夏麵包。',
      },
      {
        name: '番茄羅勒燉飯',
        price: 210,
        description: '新鮮番茄慢燉米飯，佐九層塔與帕瑪森起司薄片。',
        tag: '素食',
      },
    ],
  },
  {
    id: 'drinks',
    title: '特調飲品',
    subtitle: '每一杯都現場手作',
    items: [
      { name: '拿鐵咖啡', price: 85, description: '嚴選單品豆現磨萃取，搭配綿密奶泡。' },
      { name: '青草莓氣泡飲', price: 80, description: '新鮮草莓與薄荷氣泡水調製，清涼解膩。' },
      { name: '草莓冰沙', price: 140, description: '新鮮成熟草莓現打冰沙，酸甜清爽的夏日首選。', tag: '招牌' },
      { name: '焦糖玄米茶拿鐵', price: 130, description: '日式玄米茶香融合焦糖奶香，溫潤回甘。', tag: '新品' },
    ],
  },
  {
    id: 'pet-menu',
    title: '寵物餐點',
    subtitle: '無鹽無調味，專為毛孩子調配',
    items: [
      { name: '狗狗香蕉餅乾', price: 120, description: '天然香蕉與燕麥烘焙而成，酥脆好入口。' },
      { name: '貓貓鮮肉餅', price: 160, description: '嚴選雞胸肉低溫烘乾，保留原始肉香與營養。' },
      { name: '寵物草莓冰淇淋', price: 135, description: '零乳糖配方搭配新鮮草莓果泥，夏日消暑小點心。', tag: '招牌' },
      { name: '寵物生日蛋糕（需預訂）', price: 380, description: '南瓜地瓜為主體，可依毛孩體型客製尺寸，提前 3 天預訂。', tag: '新品' },
    ],
  },
  {
    id: 'desserts',
    title: '甜點',
    subtitle: '飯後的小確幸',
    items: [
      { name: '蜂蜜舒芙蕾鬆餅', price: 190, description: '現點現做，外酥內軟，淋上蜂蜜與鮮奶油。', tag: '招牌' },
      { name: '烤布蕾', price: 120, description: '香草籽熬煮蛋奶液，表層焦糖脆殼。' },
    ],
  },
]

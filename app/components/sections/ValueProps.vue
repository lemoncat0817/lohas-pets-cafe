<template>
  <section class="container-cafe py-16 sm:py-20">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, i) in items"
        :key="item.title"
        :ref="reveals[i].target"
        class="rounded-2xl border border-border bg-card p-6 transition-all duration-700 ease-out"
        :class="reveals[i].visible.value ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
      >
        <div class="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon
            :name="item.icon"
            class="size-5"
          />
        </div>
        <h3 class="mt-4 font-display text-lg font-bold text-foreground">
          {{ item.title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    icon: 'lucide:dog',
    title: '寵物友善空間',
    description: '全店區域歡迎貓狗入內，動線與清潔規劃兼顧毛孩與顧客的舒適。',
  },
  {
    icon: 'lucide:chef-hat',
    title: '新鮮現點現做',
    description: '每日採買當令食材，人與寵物的餐點皆為現場手作，無隔夜配方。',
  },
  {
    icon: 'lucide:heart-handshake',
    title: '店貓店犬互動',
    description: '四位店寵輪班在店內陪伴顧客，時常上演最療癒的互動時刻。',
  },
  {
    icon: 'lucide:leaf',
    title: '天然無負擔',
    description: '寵物餐點與零食皆無鹽無調味、不含防腐劑，吃得安心。',
  },
]

const reveals = items.map((_, i) => useScrollReveal({ delay: i * 100 }))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Menu"
      title="美味佳餚"
      description="從主食、特調飲品到寵物餐點與甜點，每一道都用心現做。"
    />

    <div class="container-cafe space-y-16 py-16 sm:py-20">
      <MenuCategorySection
        v-for="(category, i) in menu"
        :key="category.id"
        :category="category"
        :image="categoryImages[category.id]"
        :reverse="i % 2 === 1"
      />
    </div>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { menu } from '@/data/menu'

useSeoMeta({
  title: '美味佳餚',
  description: '查看 LOHAS Pets Café 的完整菜單：主食、特調飲品、寵物餐點與甜點。',
})

const categoryImages: Record<string, string> = {
  'mains': '/images/menu/menu-pasta.webp',
  'drinks': '/images/menu/menu-latte.webp',
  'pet-menu': '/images/shop/honey-banana-cookie.webp',
  'desserts': '/images/menu/menu-dessert.webp',
}
</script>

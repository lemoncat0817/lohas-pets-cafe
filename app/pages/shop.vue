<template>
  <div>
    <PageHero
      eyebrow="Pet Snacks"
      title="寵物零食專賣"
      description="我們也提供美味健康的寵物點心，採用天然成分、品質優良，讓您放心為毛孩選擇最好的。"
    />

    <section class="container-cafe py-16 sm:py-20">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="product in products"
          :key="product.slug"
          :product="product"
        />
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { products } from '@/data/products'

useSeoMeta({
  title: '寵物零食專賣',
  description: '天然成分製作的寵物零食：香蕉南瓜酥、花生香蕉餅、蜂蜜香蕉餅。',
})
</script>

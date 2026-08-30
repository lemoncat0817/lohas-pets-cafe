<template>
  <div
    :ref="target"
    class="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 ease-out hover:border-primary/30 hover:shadow-lg"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
  >
    <div class="aspect-square overflow-hidden">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="480"
        height="480"
        loading="lazy"
      />
    </div>
    <div class="p-5">
      <h3 class="font-display text-lg font-bold text-foreground">
        {{ product.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
        {{ product.description }}
      </p>
      <p class="mt-2 text-xs text-muted-foreground">
        成分：{{ product.ingredients }}
      </p>
      <div class="mt-4 flex items-baseline gap-2">
        <span class="text-sm text-muted-foreground line-through tabular-nums">NT$ {{ product.price }}</span>
        <span class="font-display text-xl font-bold text-primary tabular-nums">NT$ {{ product.salePrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/data/products'

defineProps<{ product: Product }>()

const { target, visible } = useScrollReveal()
</script>

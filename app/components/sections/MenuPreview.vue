<template>
  <section class="bg-secondary/40 py-16 sm:py-20">
    <div class="container-cafe">
      <SectionHeading
        eyebrow="Menu"
        title="本店最熱門的餐點"
        description="從人的餐點到毛孩專屬點心，每一道都新鮮現做。"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in featured"
          :key="item.name"
          class="flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
        >
          <div>
            <Badge
              v-if="item.tag"
              variant="secondary"
              class="mb-3"
            >
              {{ item.tag }}
            </Badge>
            <h3 class="font-display text-lg font-bold text-foreground">
              {{ item.name }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
          <p class="mt-5 font-display text-xl font-bold text-primary tabular-nums">
            NT$ {{ item.price }}
          </p>
        </div>
      </div>

      <div class="mt-10 text-center">
        <Button
          as-child
          size="lg"
          class="rounded-full px-7"
        >
          <NuxtLink to="/menu">查看完整菜單</NuxtLink>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { menu } from '@/data/menu'

const featured = menu.flatMap(c => c.items).filter(item => item.tag === '招牌')
</script>

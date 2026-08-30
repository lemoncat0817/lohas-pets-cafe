<template>
  <div
    :ref="target"
    class="grid gap-8 transition-all duration-700 ease-out lg:grid-cols-5 lg:items-center lg:gap-12"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
  >
    <div
      class="overflow-hidden rounded-3xl lg:col-span-2"
      :class="reverse ? 'lg:order-2' : ''"
    >
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="`${category.title} 情境照`"
        class="aspect-[4/3] w-full object-cover"
        width="1600"
        height="1200"
        loading="lazy"
      />
    </div>

    <div
      class="lg:col-span-3"
      :class="reverse ? 'lg:order-1' : ''"
    >
      <h2
        :id="category.id"
        class="scroll-mt-24 text-2xl font-bold text-foreground sm:text-3xl"
      >
        {{ category.title }}
      </h2>
      <p class="mt-1 text-sm text-muted-foreground">
        {{ category.subtitle }}
      </p>

      <ul class="mt-6 divide-y divide-border">
        <li
          v-for="item in category.items"
          :key="item.name"
          class="flex items-start justify-between gap-4 py-4"
        >
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-display font-bold text-foreground">
                {{ item.name }}
              </h3>
              <Badge
                v-if="item.tag"
                variant="secondary"
              >
                {{ item.tag }}
              </Badge>
            </div>
            <p class="mt-1 text-sm leading-relaxed text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
          <p class="shrink-0 font-display font-bold text-primary tabular-nums">
            NT$ {{ item.price }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { MenuCategory } from '@/data/menu'

defineProps<{
  category: MenuCategory
  image?: string
  reverse?: boolean
}>()

const { target, visible } = useScrollReveal()
</script>

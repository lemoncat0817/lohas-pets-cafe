<template>
  <div
    :ref="target"
    class="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 ease-out hover:border-primary/30 hover:shadow-lg"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <NuxtImg
        :src="pet.image"
        :alt="`${pet.name}（${pet.nameEn}），本店${pet.species}`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="480"
        height="360"
        loading="lazy"
      />
    </div>
    <div class="p-5">
      <div class="flex items-center justify-between gap-2">
        <h3 class="font-display text-lg font-bold text-foreground">
          {{ pet.name }}
        </h3>
        <Badge variant="secondary">
          {{ pet.role }}
        </Badge>
      </div>
      <p class="mt-1 text-xs text-muted-foreground">
        {{ pet.nameEn }} · {{ pet.species }} · {{ pet.breed }}
      </p>
      <p class="mt-3 text-sm leading-relaxed text-foreground/90">
        「{{ pet.quote }}」
      </p>
      <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
        {{ pet.bio }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { Pet } from '@/data/pets'

defineProps<{ pet: Pet }>()

const { target, visible } = useScrollReveal()
</script>

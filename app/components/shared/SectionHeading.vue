<template>
  <div
    :ref="target"
    class="mx-auto max-w-2xl text-center transition-all duration-700 ease-out"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
  >
    <p
      v-if="eyebrow"
      class="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase"
    >
      {{ eyebrow }}
    </p>
    <h2 class="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-muted-foreground"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()

const { target, visible } = useScrollReveal()
</script>

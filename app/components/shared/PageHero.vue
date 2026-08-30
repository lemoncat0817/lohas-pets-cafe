<template>
  <section class="relative overflow-hidden border-b border-border bg-secondary/50">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="imageAlt ?? ''"
      class="absolute inset-0 h-full w-full object-cover opacity-25"
      loading="eager"
    />
    <div class="relative container-cafe py-16 text-center sm:py-24">
      <p class="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
        {{ eyebrow }}
      </p>
      <h1 class="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}>()
</script>

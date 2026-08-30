<template>
  <section class="container-cafe py-16 sm:py-20">
    <div class="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center sm:px-16">
      <div class="absolute -top-10 -right-10 size-40 rounded-full bg-primary-foreground/10" />
      <div class="absolute -bottom-16 -left-16 size-56 rounded-full bg-primary-foreground/10" />
      <div class="relative">
        <h2 class="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          帶著你的毛孩，一起來坐坐吧
        </h2>
        <p class="mx-auto mt-4 max-w-lg text-primary-foreground/85">
          {{ site.reservationNote }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            as-child
            size="lg"
            variant="secondary"
            class="rounded-full px-7"
          >
            <NuxtLink to="/contact">交通與地圖</NuxtLink>
          </Button>
          <Button
            as-child
            size="lg"
            variant="outline"
            class="rounded-full border-primary-foreground/40 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <NuxtLink to="/faq">常見問題</NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
</script>

<template>
  <Carousel
    class="mx-auto w-full max-w-3xl"
    :opts="{ loop: true }"
  >
    <CarouselContent>
      <CarouselItem
        v-for="item in testimonials"
        :key="item.name"
      >
        <div class="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-8 py-10 text-center">
          <NuxtImg
            :src="item.avatar"
            :alt="item.name"
            width="72"
            height="72"
            class="size-18 rounded-full object-cover"
            loading="lazy"
          />
          <div
            class="flex text-primary"
            aria-hidden="true"
          >
            <Icon
              v-for="n in item.rating"
              :key="n"
              name="lucide:star"
              class="size-4 [&>path]:fill-current"
            />
          </div>
          <p class="max-w-lg text-lg leading-relaxed text-foreground">
            「{{ item.text }}」
          </p>
          <p class="text-sm text-muted-foreground">
            {{ item.name }} {{ item.petName }}
          </p>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="left-0 sm:-left-12" />
    <CarouselNext class="right-0 sm:-right-12" />
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { testimonials } from '@/data/testimonials'
</script>

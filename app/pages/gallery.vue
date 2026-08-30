<template>
  <div>
    <PageHero
      eyebrow="Gallery & Reviews"
      title="評價 & 用餐環境"
      description="我們一直努力為每一位顧客提供最好的用餐體驗，精心設計的空間融合了舒適與美感。"
    />

    <section class="container-cafe py-16 sm:py-20">
      <SectionHeading
        eyebrow="Our Space"
        title="用餐環境"
      />
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="photo in galleryPhotos"
          :key="photo.src"
          class="overflow-hidden rounded-2xl"
          :class="galleryPhotos.indexOf(photo) === 0 ? 'sm:col-span-2 sm:row-span-2' : ''"
        >
          <NuxtImg
            :src="photo.src"
            :alt="photo.alt"
            class="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
            :class="galleryPhotos.indexOf(photo) === 0 ? 'sm:aspect-square' : ''"
            width="1800"
            height="1350"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="bg-secondary/40 py-16 sm:py-20">
      <div class="container-cafe">
        <SectionHeading
          eyebrow="Reviews"
          title="五星好評"
        />
        <div
          class="mt-4 flex justify-center text-primary"
          aria-hidden="true"
        >
          <Icon
            v-for="n in 5"
            :key="n"
            name="lucide:star"
            class="size-5 [&>path]:fill-current"
          />
        </div>
        <div class="mt-10">
          <TestimonialCarousel />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { galleryPhotos } from '@/data/testimonials'

useSeoMeta({
  title: '評價 & 用餐環境',
  description: '瀏覽 LOHAS Pets Café 的用餐環境照片與顧客五星好評。',
})
</script>

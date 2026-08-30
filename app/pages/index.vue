<template>
  <div>
    <Hero />
    <ValueProps />
    <MenuPreview />

    <section class="container-cafe py-16 sm:py-20">
      <SectionHeading
        eyebrow="Our Pets"
        title="毛孩子天地"
        description="四位店寵每天在這裡迎接訪客，帶來無盡的歡樂與愛意。"
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PetCard
          v-for="pet in pets"
          :key="pet.slug"
          :pet="pet"
        />
      </div>
      <div class="mt-10 text-center">
        <Button
          as-child
          variant="outline"
          size="lg"
          class="rounded-full px-7"
        >
          <NuxtLink to="/pets">認識更多店貓店犬</NuxtLink>
        </Button>
      </div>
    </section>

    <section class="bg-secondary/40 py-16 sm:py-20">
      <div class="container-cafe">
        <SectionHeading
          eyebrow="Reviews"
          title="五星好評"
          description="我們一直努力為每一位顧客與毛孩提供最好的用餐體驗。"
        />
        <div class="mt-12">
          <TestimonialCarousel />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { pets } from '@/data/pets'
import { site } from '@/data/site'

useSeoMeta({
  title: '首頁',
  description: site.description,
  ogTitle: `${site.name}｜${site.tagline}`,
  ogDescription: site.description,
})
</script>

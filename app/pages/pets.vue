<template>
  <div>
    <PageHero
      eyebrow="Our Pets"
      title="毛孩子天地"
      description="這些可愛的寵物們每天都在這裡迎接著訪客，帶來無盡的歡樂和愛意。無論你是想與牠們一起玩耍、享受陽光，還是只是想給牠們一個溫暖的擁抱，這裡都是你和寵物共度美好時光的最佳場所！"
    />

    <section class="container-cafe py-16 sm:py-20">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PetCard
          v-for="pet in pets"
          :key="pet.slug"
          :pet="pet"
        />
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { pets } from '@/data/pets'

useSeoMeta({
  title: '毛孩子天地',
  description: '認識 LOHAS Pets Café 的四位店貓店犬：巧克力、奶油、布丁與棉花糖。',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="About Us"
      title="關於我們"
      description="一間為人與毛孩而生的咖啡廳。"
    />

    <section class="container-cafe grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
      <div
        :ref="imgReveal.target"
        class="overflow-hidden rounded-3xl transition-all duration-700 ease-out"
        :class="imgReveal.visible.value ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'"
      >
        <NuxtImg
          src="/images/about/about-story.webp"
          alt="店犬坐在餐廳木質長桌上，環境優雅溫馨"
          class="aspect-[4/5] w-full object-cover"
          width="2000"
          height="3000"
          loading="lazy"
        />
      </div>

      <div
        :ref="textReveal.target"
        class="transition-all duration-700 ease-out"
        :class="textReveal.visible.value ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
      >
        <p class="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
          Our Story
        </p>
        <h2 class="mt-2 text-3xl font-bold text-foreground">
          從一場咖啡聚會開始
        </h2>
        <div class="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>在一個晴朗的下午，幾個寵物愛好者聚在一起喝咖啡，分享著彼此愛護毛孩子的故事。</p>
          <p>他們意識到，在城市中找到一個寵物友善的地方並不容易，而大多數咖啡廳都不允許寵物進入。</p>
          <p>這個想法在他們之間迅速發酵，於是他們決定創立一個獨特的咖啡廳——一個可以讓人們和他們的毛孩子一起放鬆的地方。</p>
          <p class="font-medium text-foreground">
            於是，<span class="text-primary">LOHAS Pets Café</span> 誕生了。
          </p>
        </div>
      </div>
    </section>

    <section class="bg-secondary/40 py-16 sm:py-20">
      <div class="container-cafe">
        <SectionHeading
          eyebrow="Our Principles"
          title="我們重視的事"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-3">
          <div
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-border bg-card p-6 text-center"
          >
            <div class="mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon
                :name="value.icon"
                class="size-5"
              />
            </div>
            <h3 class="mt-4 font-display text-lg font-bold text-foreground">
              {{ value.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-cafe py-16 sm:py-20">
      <SectionHeading
        eyebrow="Founder"
        title="主理人的話"
      />
      <div
        :ref="founderReveal.target"
        class="mx-auto mt-12 grid max-w-3xl gap-8 rounded-3xl border border-border bg-card p-6 transition-all duration-700 ease-out sm:grid-cols-[220px_1fr] sm:p-8"
        :class="founderReveal.visible.value ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <NuxtImg
          src="/images/about/founder.webp"
          alt="LOHAS Pets Café 創辦人檸檬貓"
          class="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-square"
          width="220"
          height="220"
          loading="lazy"
        />
        <div>
          <h3 class="font-display text-xl font-bold text-foreground">
            檸檬貓
          </h3>
          <p class="mt-0.5 text-sm text-primary">
            創辦人 ‧ 主理人
          </p>
          <p class="mt-4 leading-relaxed text-muted-foreground">
            曾在動物醫院擔任志工，看過太多毛孩因為「餐廳不能帶寵物」而被留在門外等待的畫面。與幾位同樣愛動物的朋友一拍即合，一起把這個想法變成了 LOHAS Pets Café。
          </p>
          <p class="mt-3 leading-relaxed text-muted-foreground">
            「現在每天最期待的，就是看見顧客和店貓店犬玩成一片的樣子——這正是我們當初想做這件事的原因。」
          </p>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { site } from '@/data/site'

useSeoMeta({
  title: '關於我們',
  description: site.description,
})

const imgReveal = useScrollReveal()
const textReveal = useScrollReveal({ delay: 150 })
const founderReveal = useScrollReveal()

const values = [
  {
    icon: 'lucide:paw-print',
    title: '以毛孩為本',
    description: '從動線、桌椅高度到清潔頻率，每個細節都以人與寵物的共同舒適為出發點。',
  },
  {
    icon: 'lucide:wheat',
    title: '食材誠實透明',
    description: '人的餐點與寵物餐點皆標示成分來源，無鹽無調味配方，安心給毛孩享用。',
  },
  {
    icon: 'lucide:users',
    title: '社群共好',
    description: '定期舉辦寵物聚會與領養講座，期望成為在地寵物愛好者交流的角落。',
  },
]
</script>

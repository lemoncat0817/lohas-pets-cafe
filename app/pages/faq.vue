<template>
  <div>
    <PageHero
      eyebrow="FAQ"
      title="常見問題"
      description="用餐前的小提醒，讓您與毛孩都能安心到訪。"
    />

    <section class="container-cafe max-w-3xl py-16 sm:py-20">
      <Accordion
        type="single"
        collapsible
        class="w-full"
        default-value="q0"
      >
        <AccordionItem
          v-for="(item, i) in faqs"
          :key="item.question"
          :value="`q${i}`"
        >
          <AccordionTrigger class="text-left font-display text-base font-bold">
            {{ item.question }}
          </AccordionTrigger>
          <AccordionContent class="leading-relaxed text-muted-foreground">
            {{ item.answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 text-center">
        <p class="text-sm text-muted-foreground">
          還有其他問題嗎？
        </p>
        <Button
          as-child
          class="mt-4 rounded-full px-6"
        >
          <NuxtLink to="/contact">聯絡我們</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { faqs } from '@/data/faq'

useSeoMeta({
  title: '常見問題',
  description: '寵物體型限制、候位方式、清潔規範等常見問題一次看懂。',
})
</script>

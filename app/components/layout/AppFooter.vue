<template>
  <footer class="border-t border-border bg-secondary/40">
    <div class="container-cafe grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2 lg:col-span-1">
        <AppLogo />
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {{ site.tagline }}，享受一杯咖啡，認識可愛的毛孩。
        </p>
        <div class="mt-5 flex items-center gap-3">
          <a
            :href="site.social.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            aria-label="前往 Facebook"
          >
            <Icon
              name="lucide:facebook"
              class="size-4"
            />
          </a>
          <a
            :href="site.social.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            aria-label="前往 Instagram"
          >
            <Icon
              name="lucide:instagram"
              class="size-4"
            />
          </a>
        </div>
      </div>

      <div>
        <h2 class="font-display text-sm font-bold tracking-wide text-foreground">
          網站導覽
        </h2>
        <ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li
            v-for="link in navLinks"
            :key="link.to"
          >
            <NuxtLink
              :to="link.to"
              class="transition-colors hover:text-primary"
            >{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-display text-sm font-bold tracking-wide text-foreground">
          營業時間
        </h2>
        <ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li
            v-for="row in site.hours"
            :key="row.day"
            class="flex justify-between gap-4"
          >
            <span>{{ row.day }}</span>
            <span class="font-medium text-foreground/80 tabular-nums">{{ row.time }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-display text-sm font-bold tracking-wide text-foreground">
          聯絡資訊
        </h2>
        <ul class="mt-4 space-y-3 text-sm text-muted-foreground">
          <li class="flex gap-2">
            <Icon
              name="lucide:map-pin"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ site.address }}</span>
          </li>
          <li class="flex gap-2">
            <Icon
              name="lucide:mail"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ site.email }}</span>
          </li>
          <li class="flex gap-2">
            <Icon
              name="lucide:phone-off"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ site.reservationNote }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-border py-6">
      <p class="container-cafe text-center text-xs text-muted-foreground">
        © {{ year }} LOHAS Pets Café. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navLinks, site } from '@/data/site'
import AppLogo from './AppLogo.vue'

const year = new Date().getFullYear()
</script>

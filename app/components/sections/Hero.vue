<template>
  <section class="relative flex min-h-[85vh] items-center overflow-hidden border-b border-border">
    <!-- Ambient looping video. No `autoplay` attribute in the markup — whether it
         actually plays is decided client-side after mount (see below), so the
         server-rendered and hydrated DOM are always structurally identical and
         prefers-reduced-motion never causes a hydration mismatch. Native
         <video>/<source> aren't routed through @nuxt/image, so the base URL
         (e.g. /Vue3-PetCafe/ on GitHub Pages) has to be prepended by hand. -->
    <video
      ref="videoEl"
      class="absolute inset-0 h-full w-full object-cover"
      :poster="withBase('/images/hero/hero-poster.webp')"
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    >
      <source
        :src="withBase('/videos/hero-espresso.webm')"
        type="video/webm"
      >
      <source
        :src="withBase('/videos/hero-espresso.mp4')"
        type="video/mp4"
      >
    </video>

    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

    <div class="container-cafe relative py-24 sm:py-32">
      <div class="max-w-xl">
        <p class="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur">
          <Icon
            name="lucide:paw-print"
            class="size-4 text-primary"
          />
          寵物友善 · 全天候歡迎毛孩子
        </p>
        <h1 class="mt-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          探索你與毛孩子<br class="hidden sm:block">一起的新樂趣
        </h1>
        <p class="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          享受一杯手作咖啡，結識新的毛絨朋友。LOHAS Pets Café 是專為人與寵物打造的溫暖角落。
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button
            as-child
            size="lg"
            class="rounded-full px-7"
          >
            <NuxtLink to="/reservation">立即訂位</NuxtLink>
          </Button>
          <Button
            as-child
            size="lg"
            variant="outline"
            class="rounded-full bg-background/80 px-7 backdrop-blur"
          >
            <NuxtLink to="/menu">查看菜單</NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const videoEl = ref<HTMLVideoElement | null>(null)
const reducedMotion = usePreferredReducedMotion()

const { app } = useRuntimeConfig()
function withBase(path: string) {
  const base = app.baseURL.endsWith('/') ? app.baseURL.slice(0, -1) : app.baseURL
  return `${base}${path}`
}

// Client-only decision: play the ambient video unless the visitor has asked for
// reduced motion, in which case it just sits on the poster frame. `videoEl` is
// only populated once mounted, so the initial check happens in onMounted rather
// than an immediate watcher; the watcher itself covers the OS preference
// changing live mid-session.
function syncPlayback(prefersReduced: string) {
  if (!videoEl.value) return
  if (prefersReduced === 'reduce') videoEl.value.pause()
  else videoEl.value.play().catch(() => {})
}

onMounted(() => syncPlayback(reducedMotion.value))
watch(reducedMotion, syncPlayback)
</script>

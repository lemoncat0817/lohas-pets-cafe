<template>
  <section
    :ref="wrapper"
    class="relative"
    :style="scrubEnabled ? { height: '300vh' } : undefined"
  >
    <div
      class="sticky top-0 flex overflow-hidden border-b border-border"
      :class="scrubEnabled ? 'h-screen' : 'h-[70vh]'"
    >
      <video
        :ref="video"
        class="absolute inset-0 h-full w-full object-cover"
        :poster="withBase('/images/intro/intro-poster.webp')"
        muted
        playsinline
        preload="auto"
        aria-hidden="true"
      >
        <source
          :src="withBase('/videos/intro-scrub.webm')"
          type="video/webm"
        >
        <source
          :src="withBase('/videos/intro-scrub.mp4')"
          type="video/mp4"
        >
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div
        class="container-cafe relative flex flex-1 items-center justify-center text-center"
        :style="{ opacity: captionOpacity }"
      >
        <div class="max-w-xl">
          <p class="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Our Story
          </p>
          <h2 class="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            從一杯咖啡開始，與毛孩子的每個日常
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { withBase } = useBaseUrl()
const reducedMotion = usePreferredReducedMotion()
const { wrapper, video, progress } = useScrollScrubVideo()

// Starts false so SSR and the initial client render always agree on the
// static, non-scrolling layout (same "decide after mount" pattern as
// Hero.vue's playback sync) — only upgrades to the tall scroll-scrub section
// once mounted and reduced-motion is confirmed off.
const scrubEnabled = ref(false)
onMounted(() => {
  scrubEnabled.value = reducedMotion.value !== 'reduce'
})

// Caption fades in over the first 15% of the scrub, stays visible through the
// middle, then fades out over the last 15% — keeps it legible without
// covering the whole clip.
const captionOpacity = computed(() => {
  if (!scrubEnabled.value) return 1
  const p = progress.value
  if (p < 0.15) return p / 0.15
  if (p > 0.85) return (1 - p) / 0.15
  return 1
})
</script>

import type { ComponentPublicInstance } from 'vue'

function hasFastSeek(video: HTMLVideoElement): video is HTMLVideoElement & { fastSeek: (time: number) => void } {
  return typeof (video as { fastSeek?: unknown }).fastSeek === 'function'
}

/**
 * Maps scroll progress through a tall wrapper element to a <video>'s
 * `currentTime`, for an Apple-style "scroll-scrubbed" video section. Bind
 * `wrapper` on the outer (tall) section and `video` on the <video> element,
 * which should sit inside a `sticky top-0 h-screen` inner container so it
 * stays pinned while the wrapper scrolls past.
 *
 * The rAF loop only runs while `wrapper` is near the viewport (gated by
 * IntersectionObserver), not for the whole page lifetime.
 *
 * Respects `prefers-reduced-motion`: scrubbing never starts and `progress`
 * stays at 0 — callers should render a non-scrolling fallback (e.g. a static
 * poster) in that case rather than relying on this composable for one.
 */
export function useScrollScrubVideo(options: { seekThreshold?: number } = {}) {
  const { seekThreshold = 1 / 30 } = options
  const wrapperEl = ref<HTMLElement | null>(null)
  const videoEl = ref<HTMLVideoElement | null>(null)
  const progress = ref(0)
  const reducedMotion = usePreferredReducedMotion()
  let iosUnlocked = false

  function wrapper(value: Element | ComponentPublicInstance | null) {
    wrapperEl.value = (value as HTMLElement | null) ?? null
  }

  function video(value: Element | ComponentPublicInstance | null) {
    videoEl.value = (value as HTMLVideoElement | null) ?? null
  }

  function update() {
    const wrapperNode = wrapperEl.value
    const videoNode = videoEl.value
    if (!wrapperNode || !videoNode || videoNode.readyState < 1 || !videoNode.duration) return

    const rect = wrapperNode.getBoundingClientRect()
    const scrollable = rect.height - window.innerHeight
    const next = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0
    progress.value = next

    // Safari silently drops a `currentTime` write issued while a previous
    // seek is still resolving, which is what makes naive scroll-scrubbing
    // feel stuck/jumpy there. Skipping writes while `seeking` is true — and
    // relying on next frame's fresh scroll-derived target — coalesces bursts
    // of scroll input into whatever the browser can actually keep up with.
    if (videoNode.seeking) return

    const targetTime = next * videoNode.duration
    if (Math.abs(videoNode.currentTime - targetTime) < seekThreshold) return

    if (hasFastSeek(videoNode)) videoNode.fastSeek(targetTime)
    else videoNode.currentTime = targetTime
  }

  // iOS Safari blocks programmatic `currentTime`/`fastSeek` writes until a
  // play() has actually started inside a user gesture — a silent play/pause
  // pair on first touch unlocks scrubbing for the rest of the session.
  function unlockIOSSeeking() {
    if (iosUnlocked || !videoEl.value) return
    iosUnlocked = true
    videoEl.value.play().then(() => videoEl.value?.pause()).catch(() => {})
  }

  if (reducedMotion.value !== 'reduce') {
    const { pause, resume } = useRafFn(update, { immediate: false })

    useIntersectionObserver(
      wrapperEl,
      ([entry]) => {
        if (entry?.isIntersecting) resume()
        else pause()
      },
      { rootMargin: '20% 0px 20% 0px' },
    )

    useEventListener(wrapperEl, ['touchstart', 'pointerdown'], unlockIOSSeeking, { once: true, passive: true })
  }

  return { wrapper, video, progress }
}

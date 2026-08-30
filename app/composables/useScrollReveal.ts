import type { ComponentPublicInstance } from 'vue'

/**
 * Reveals an element once it scrolls into view.
 *
 * Replaces the old pattern of tracking `window.scrollY` against hand-picked
 * pixel thresholds per breakpoint. Bind `target` as a function ref and toggle
 * classes off `visible`:
 *
 * ```vue
 * <div
 *   :ref="target"
 *   class="transition-all duration-700 ease-out"
 *   :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
 * >
 * ```
 *
 * Respects `prefers-reduced-motion`: reveals immediately, no transform, when set.
 */
export function useScrollReveal(options: { threshold?: number, delay?: number } = {}) {
  const { threshold = 0.2, delay = 0 } = options
  const el = ref<Element | null>(null)
  const visible = ref(false)
  const reducedMotion = usePreferredReducedMotion()

  function target(value: Element | ComponentPublicInstance | null) {
    el.value = (value as Element | null) ?? null
  }

  if (reducedMotion.value === 'reduce') {
    visible.value = true
  }
  else {
    const { stop } = useIntersectionObserver(
      el,
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (delay) {
            setTimeout(() => {
              visible.value = true
            }, delay)
          }
          else {
            visible.value = true
          }
          stop()
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )
  }

  return { target, visible }
}

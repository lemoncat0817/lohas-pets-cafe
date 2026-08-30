<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex flex-1 items-center justify-center">
      <div class="container-cafe py-24 text-center">
        <svg
          viewBox="0 0 48 48"
          class="mx-auto h-16 w-16 text-primary"
          fill="currentColor"
          aria-hidden="true"
        >
          <ellipse
            cx="24"
            cy="31"
            rx="11.5"
            ry="9.5"
            opacity="0.35"
          />
          <ellipse
            cx="9.5"
            cy="19"
            rx="5"
            ry="6.4"
            transform="rotate(-18 9.5 19)"
            opacity="0.35"
          />
          <ellipse
            cx="19"
            cy="9.5"
            rx="5.1"
            ry="6.7"
            transform="rotate(-6 19 9.5)"
            opacity="0.35"
          />
          <ellipse
            cx="29"
            cy="9.5"
            rx="5.1"
            ry="6.7"
            transform="rotate(6 29 9.5)"
            opacity="0.35"
          />
          <ellipse
            cx="38.5"
            cy="19"
            rx="5"
            ry="6.4"
            transform="rotate(18 38.5 19)"
            opacity="0.35"
          />
        </svg>
        <h1 class="mt-6 text-3xl font-bold text-foreground">
          {{ error?.statusCode === 404 ? '這隻貓爪把頁面藏起來了' : '發生了一點小狀況' }}
        </h1>
        <p class="mt-3 text-muted-foreground">
          {{ error?.statusCode === 404 ? '您要找的頁面不存在，或許已經被搬走了。' : '請稍後再試一次，若持續發生請與我們聯繫。' }}
        </p>
        <Button
          class="mt-8 rounded-full px-7"
          @click="handleError"
        >
          回到首頁
        </Button>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

defineProps<{ error: { statusCode: number, message?: string } }>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

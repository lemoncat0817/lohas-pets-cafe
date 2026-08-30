<template>
  <header
    class="sticky top-0 z-50 border-b transition-colors duration-300"
    :class="scrolled ? 'border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75' : 'border-transparent bg-background/40 backdrop-blur-sm'"
  >
    <div class="container-cafe flex h-16 items-center justify-between sm:h-20">
      <AppLogo />

      <nav
        class="hidden items-center gap-1 lg:flex"
        aria-label="主導覽"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
          active-class="!bg-primary/10 !text-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <ModeToggle />

        <Button
          as-child
          size="sm"
          class="hidden rounded-full px-5 lg:inline-flex"
        >
          <NuxtLink to="/contact">聯絡我們</NuxtLink>
        </Button>
      </div>

      <Sheet v-model:open="mobileOpen">
        <SheetTrigger as-child>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="開啟選單"
          >
            <Icon
              name="lucide:menu"
              class="size-5"
            />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          class="w-72 border-l border-border bg-background"
        >
          <SheetHeader>
            <SheetTitle class="font-display text-left text-lg">
              選單
            </SheetTitle>
          </SheetHeader>
          <nav
            class="mt-2 flex flex-col gap-1 px-4"
            aria-label="行動裝置導覽"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="rounded-xl px-3.5 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-accent"
              active-class="!bg-primary/10 !text-primary"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/data/site'
import AppLogo from './AppLogo.vue'
import ModeToggle from './ModeToggle.vue'

const mobileOpen = ref(false)
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)
</script>

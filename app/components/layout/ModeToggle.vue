<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button
        type="button"
        class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
        aria-label="切換主題外觀"
      >
        <Icon
          name="lucide:sun"
          class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          name="lucide:moon"
          class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        <Icon
          name="lucide:sun"
          class="mr-2 size-4"
        /> 淺色
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        <Icon
          name="lucide:moon"
          class="mr-2 size-4"
        /> 深色
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        <Icon
          name="lucide:monitor"
          class="mr-2 size-4"
        /> 跟隨系統
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()
</script>

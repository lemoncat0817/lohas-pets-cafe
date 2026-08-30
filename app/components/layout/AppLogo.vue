<template>
  <NuxtLink
    to="/"
    class="group flex items-center gap-2.5"
    aria-label="LOHAS Pets Café 回首頁"
  >
    <svg
      viewBox="0 0 48 48"
      class="h-8 w-8 shrink-0 text-primary transition-transform duration-300 group-hover:-rotate-6 sm:h-9 sm:w-9"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse
        cx="24"
        cy="31"
        rx="11.5"
        ry="9.5"
      />
      <ellipse
        cx="9.5"
        cy="19"
        rx="5"
        ry="6.4"
        transform="rotate(-18 9.5 19)"
      />
      <ellipse
        cx="19"
        cy="9.5"
        rx="5.1"
        ry="6.7"
        transform="rotate(-6 19 9.5)"
      />
      <ellipse
        cx="29"
        cy="9.5"
        rx="5.1"
        ry="6.7"
        transform="rotate(6 29 9.5)"
      />
      <ellipse
        cx="38.5"
        cy="19"
        rx="5"
        ry="6.4"
        transform="rotate(18 38.5 19)"
      />
    </svg>
    <span class="flex flex-col leading-none">
      <span class="font-display text-lg font-bold tracking-wide text-foreground sm:text-xl">LOHAS</span>
      <span class="text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">Pets Café</span>
    </span>
  </NuxtLink>
</template>

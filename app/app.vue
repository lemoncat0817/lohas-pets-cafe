<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: title => (title ? `${title} | LOHAS Pets Café` : 'LOHAS Pets Café ‧ 樂活寵物咖啡廳'),
  ogSiteName: 'LOHAS Pets Café',
  ogLocale: 'zh_TW',
  themeColor: '#c1653a',
})
</script>

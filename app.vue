<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Mathly Test` : 'Mathly Test'
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
  <GlobalHeader />

  <Body class="bg-white dark:bg-gray-900">
    <div class="p-5">
      <NuxtPage></NuxtPage>
    </div>
  </Body>
</template>

<style lang="scss">
@use "/assets/style/common" as *;
</style>
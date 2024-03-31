<script setup lang="ts">
import icon from "assets/icon.svg"

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: icon
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
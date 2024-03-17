<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
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

html {
  scroll-behavior: smooth;
}

#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-x: hidden;
  user-select: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
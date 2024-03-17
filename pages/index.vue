<script setup lang="ts">
useSeoMeta({
  title: null,
})
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div class="flex flex-col gap-y-4 items-center justify-center">
      <UIcon name="i-ph-pi" width="61" height="61" dynamic class="text-green-500" />
      <h1 class="text-center">
        Informatique au Lycée
      </h1>
      <div>
        <div class="dark:invert mt-10 ml-5 mr-5">
          <img src="/assets/courbe-vkoch_0.svg">
          <img src="/assets/courbe-vkoch_1.svg">
          <img src="/assets/courbe-vkoch_2.svg">
        </div>
        <p class="text-sm text-center mt-3">
          TP de première NSI — <NuxtLink href="https://fr.wikipedia.org/wiki/Flocon_de_Koch" target="_blank">Courbes
            de
            Koch
            <UIcon name="i-gridicons-external" />
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
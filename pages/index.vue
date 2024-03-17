<script setup lang="ts">
useSeoMeta({
  title: null,
})
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div class="flex flex-col gap-y-4 items-center justify-center">
      <UIcon name="i-ph-pi" class="text-primary text-6xl" />
      <h1 class="text-center">
        Informatique au Lycée
      </h1>
      <div>
        <div class="dark:invert mt-10 ml-5 mr-5">
          <img src="/assets/courbe-vkoch_0.svg" alt="Première étape de la courbe de Koch">
          <img src="/assets/courbe-vkoch_1.svg" alt="Deuxième étape de la courbe de Koch">
          <img src="/assets/courbe-vkoch_2.svg" alt="Sixième étape de la courbe de Koch" aria-hidden>
        </div>
        <p class="text-sm text-center mt-3">
          TP de première NSI — <AppLink href="https://fr.wikipedia.org/wiki/Flocon_de_Koch" target="_blank">
            Courbes de Koch
            <UIcon name="i-gridicons-external" />
          </AppLink>
        </p>
      </div>
    </div>
  </div>
</template>
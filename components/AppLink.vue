<script setup lang="ts">
import type { NuxtLinkProps } from "#app"

const props = defineProps<NuxtLinkProps>()

</script>

<template>
    <NuxtLink v-bind="props">
        <slot></slot>
    </NuxtLink>
</template>

<style scoped lang="scss">
a {
    @apply no-underline font-bold align-top relative before:content-[''] before:absolute before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-[0.25s] before:ease-[ease-in-out] before:rounded-sm before:border-[thin] before:border-black before:dark:border-white before:scale-x-0 before:left-0 before:bottom-0 hover:before:origin-left hover:before:scale-x-100;
}
</style>
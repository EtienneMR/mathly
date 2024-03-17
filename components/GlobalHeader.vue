<script setup lang="ts">

const MIN_HORIZONTAL_WIDTH = 600

const { HeaderNavigationLinks } = useAppConfig()
const { width: windowWidth } = useWindowSize()
const isSlideoverOpen = ref(false)

const shouldUseHorizontalNavigation = computed(() => {
    return windowWidth.value >= MIN_HORIZONTAL_WIDTH
})

function closeSlideover() {
    isSlideoverOpen.value = false
}

const links = HeaderNavigationLinks.map(link => ({
    ...link,
    click: closeSlideover
}))

const expandLinks = [[
    {
        label: "Accueil",
        icon: "i-ph-pi",
        to: "/",
    },
], [
    {
        icon: "i-heroicons-bars-3",
        click: () => {
            isSlideoverOpen.value = !isSlideoverOpen.value
        }
    }
]]
</script>

<template>
    <UHorizontalNavigation v-if="shouldUseHorizontalNavigation" :links="links" class="horizontal-navigation" />
    <UHorizontalNavigation v-else :links="expandLinks" class="horizontal-navigation" />
    <USlideover v-model="isSlideoverOpen">
        <p class="p-5">Sommaire</p>
        <UVerticalNavigation :links="links" class="vertical-navigation" />
    </USlideover>
</template>

<style scoped lang="scss">
%navigation {
    @apply border-gray-200 dark:border-gray-800;
}

.horizontal-navigation {
    @extend %navigation;
    @apply border-b;
}

.vertical-navigation {
    @extend %navigation;
    @apply border-t;
}
</style>
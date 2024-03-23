<script setup lang="ts">

const MIN_HORIZONTAL_WIDTH = 600

const { width: windowWidth } = useWindowSize()
const isSlideoverOpen = ref(false)

const shouldUseHorizontalNavigation = computed(() => {
    return windowWidth.value >= MIN_HORIZONTAL_WIDTH
})

function closeSlideover() {
    isSlideoverOpen.value = false
}

const { data } = await useAsyncData(`content:global-header-links`, () => queryContent().where({ _dir: "" }).only(["title", "icon", "_path"]).find())
const rawLinks = data.value ?? []

const homeLink = {
    label: "Accueil",
    icon: "i-ph-pi",
    to: "/",
    click: closeSlideover,
}

const links = [
    homeLink,

    ...rawLinks.map(rawLink => ({
        label: rawLink.title,
        icon: rawLink.icon,
        to: rawLink._path,
        click: closeSlideover
    }))
]

const expandLinks = [[homeLink], [
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
        <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <span class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Sommaire
                    </span>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isSlideoverOpen = false" />
                </div>
            </template>

            <template #default>
                <UVerticalNavigation :links="links" class="h-full" />
            </template>
        </UCard>
    </USlideover>
</template>

<style scoped lang="scss">
.horizontal-navigation {
    @apply border-b border-gray-200 dark:border-gray-800;
}
</style>
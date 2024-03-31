<script setup lang="ts">
const { path: routePathString } = useRoute()

const path = routePathString.split("/").filter(s => s)

let currentPath = ''

const crumbs = await Promise.all(path.map(param => {
    currentPath = `${currentPath}/${param}`

    return useAsyncData(`content:${currentPath}`, () => queryContent().where({ _path: currentPath }).findOne())
}))

const links = computed(() => crumbs.map((crumb, index, array) => {
    const data = crumb.data.value
    if (data) {
        const target = data._path
        const label = data.title
        const icon = data.icon

        return {
            to: target,
            label,
            icon
        }
    }
}).filter(crumb => crumb))
</script>

<template>
    <UBreadcrumb :links="links">
        <template #icon="{ link, index, isActive }">
            <UIcon v-if="link.icon" dynamic :name="link.icon" class="w-5 h-5" />
        </template>
    </UBreadcrumb>
</template>
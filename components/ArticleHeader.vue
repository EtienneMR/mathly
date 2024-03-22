<script setup lang="ts">
const { HeaderNavigationLinks } = useAppConfig()
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
        const icon = (index == 0 ? HeaderNavigationLinks.find(l => l.to == target)?.icon : null)
            ?? (index == 1 ? "i-heroicons-square-3-stack-3d" : null)
            ?? (index == array.length - 1 ? "i-heroicons-link" : null)

        return {
            to: target,
            label,
            icon
        }
    }
}).filter(crumb => crumb))
</script>

<template>
    <UBreadcrumb :links="links" />
</template>
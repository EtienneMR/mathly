<script setup lang="ts">
const { HeaderNavigationLinks } = useAppConfig()
const { path: routePathString } = useRoute()

const path = routePathString.split("/").filter(s => s)

function formatLabel(label: string) {
    return label[0].toUpperCase() + label.substring(1).toLowerCase()
}

const links = path.map((p, index, array) => {
    const target = `/${array.slice(0, index + 1).join("/")}`
    const label = (index == 0 ? HeaderNavigationLinks.find(l => l.to == target)?.label : null) ?? formatLabel(p)
    const icon = (index == 0 ? HeaderNavigationLinks.find(l => l.to == target)?.icon : null) ?? (index == 1 ? "i-heroicons-square-3-stack-3d" : null) ?? (index == array.length - 1 ? "i-heroicons-link" : null)

    return {
        label,
        to: target,
        icon
    }
})

</script>

<template>
    <UBreadcrumb :links="links" />
</template>
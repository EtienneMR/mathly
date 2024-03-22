<script setup lang="ts">
const { list } = defineProps<{ list: any[] }>()

const categories: any = Object.values(list.reduce((finalObject, obj) => {
    const directory = obj._dir
    if (directory) {
        finalObject[directory] ?? (finalObject[directory] = {
            _dir: directory,
            _path: "/" + obj._path.split('/').slice(1, -1).join("/"),
            children: [],
        })
        finalObject[directory].children.push(obj)
    }
    return finalObject
}, {}))

const categoriesWithParent = await Promise.all(categories.map(async (category: any) => {
    const parent = await useAsyncData(`content:${category._dir}`, () => queryContent(category._path).findOne())

    return {
        ...category,
        parent: parent.data.value,
    }
}))
</script>

<template>
    <div class="mt-5 select-none">
        <UCard v-for="category in categoriesWithParent" :key="category._dir">
            <template #header>
                <h2 class="m-0">{{ category.parent?.title ?? category._dir }}</h2>
            </template>

            <ArticleChild v-for="article of category.children" :key="article._path" v-bind="article" />
        </UCard>
    </div>
</template>
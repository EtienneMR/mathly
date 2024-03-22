<script setup lang="ts">
const { list } = defineProps<{ list: any[] }>()
const route = useRoute()

const categories: any = Object.values(list.reduce((finalObject, obj) => {
    const directory = obj._dir
    if (directory && "/" + directory != route.path) {
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
        label: parent.data.value?.title,
        icon: "i-material-symbols-book",
    }
}))
</script>

<template>
    <div class="mt-5 select-none">
        <UAccordion :items="categoriesWithParent">
            <template #item="{ item }">
                <ArticleChild v-for="article of item.children" :key="article._path" v-bind="article" />
            </template>
        </UAccordion>
    </div>
</template>
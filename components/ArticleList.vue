<script setup lang="ts">
const { list } = defineProps<{ list: any[] }>()
const route = useRoute()

const ui = {
    wrapper: 'w-full flex flex-col',
    container: 'w-full flex flex-col',
    item: {
        base: '',
        size: 'text-sm',
        color: 'text-gray-600 dark:text-gray-300',
        padding: 'pt-1.5 pb-3',
        icon: 'ms-auto transform transition-transform duration-200',
    },
    transition: {
        enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
        leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
    },
    default: {
        openIcon: 'i-heroicons-chevron-down-20-solid',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        variant: 'soft',
    },
}


const categories: any = Object.values(list.reduce((finalObject, obj) => {
    const directory = obj._dir
    if (directory && "/" + directory != route.path) {
        finalObject[directory] ?? (finalObject[directory] = {
            _dir: directory,
            _path: obj._path.split('/').slice(0, -1).join("/"),
            children: [],
        })
        finalObject[directory].children.push(obj)
    }
    return finalObject
}, {}))

const categoriesWithParent = await Promise.all(categories.map(async (category: any) => {
    const parent = await useAsyncData(`content:${category._path}`, () => queryContent(category._path).findOne())

    return {
        ...category,
        label: parent.data.value?.title,
        icon: parent.data.value?.icon,
    }
}))
</script>

<template>
    <div class="mt-5 select-none">
        <UAccordion :ui="ui" :items="categoriesWithParent">
            <template #item="{ item }">
                <ArticleChild v-for="article of item.children" :key="article._path" v-bind="article" />
            </template>
        </UAccordion>
    </div>
</template>
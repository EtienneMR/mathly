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
            <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                    <template #leading>
                        <div
                            class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
                            <UIcon :name="item.icon" dynamic class="w-4 h-4 text-white dark:text-gray-900" />
                        </div>
                    </template>

                    <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

                    <template #trailing>
                        <UIcon name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']" />
                    </template>
                </UButton>
            </template>
            <template #item="{ item }">
                <div class="w-full flex flex-col pl-5">
                    <div v-for="article of  item.children " :key="article._path"
                        class="w-full flex flex-col border-b border-gray-200 dark:border-gray-700">
                        <UButton color="gray" variant="ghost" :ui="{
            rounded: 'rounded-none', padding:
                { sm: 'p-3' }
        }" :to="article._path">
                            <template #leading>
                                <div
                                    class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
                                    <UIcon :name="article.icon" dynamic class="w-4 h-4 text-white dark:text-gray-900" />
                                </div>
                            </template>

                            {{ article.title }}
                        </UButton>
                        <p class="mb-3">{{ article.description }}</p>
                    </div>

                </div>
            </template>
        </UAccordion>
    </div>
</template>
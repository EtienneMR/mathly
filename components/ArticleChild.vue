<script setup lang="ts">
defineProps<{
    title: string,
    description?: string,
    _path: string,
}>()

const ui = {
    base: 'mb-5',
    background: 'bg-white dark:bg-gray-900',
    divide: 'divide-y divide-gray-200 dark:divide-gray-800',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    rounded: 'rounded-lg',
    shadow: 'shadow',
    body: {
        base: '',
        background: '',
        padding: 'px-2 py-2 sm:p-3',
    },
    header: {
        base: '',
        background: '',
        padding: 'px-2 py-2 sm:px-3',
    },
    footer: {
        base: '',
        background: '',
        padding: 'px-2 py-2 sm:px-3',
    },
}

</script>

<template>
    <UCard :ui="ui">
        <template #header>
            <h3>
                <AppLink :href="_path">
                    <UIcon name="i-heroicons-link" class="mr-1" /> {{ title }}
                </AppLink>
            </h3>
        </template>

        <p v-if="description">{{ description }}</p>
    </UCard>
</template>
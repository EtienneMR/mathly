<script setup lang="ts">
defineProps<{
    title: string,
    description?: string,
    _path: string,
}>()
</script>

<template>
    <div class="mb-2 dark:bg-slate-800">
        <h3>
            <AppLink :href="_path">{{ title }}</AppLink>
        </h3>
        <p v-if="description">{{ description }}</p>
    </div>
</template>